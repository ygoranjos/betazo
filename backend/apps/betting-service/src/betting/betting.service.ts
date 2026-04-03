import { Injectable } from '@nestjs/common';
import { Decimal } from 'decimal.js';
import { RedisService } from '@betazo/redis-cache';
import { ConfigService } from '../config/config.service';
import { SelectionDto, ValidateTicketDto } from './dto/validate-ticket.dto';

export interface ChangedSelection {
  eventId: string;
  marketKey: string;
  selectionId: string;
  requestedPrice: number;
  currentPrice: number | null;
}

interface LimitViolations {
  minBetAmount?: { required: number; provided: number };
  maxPayoutPerTicket?: { limit: number; calculated: number };
}

interface OddsFinal {
  price: number;
  source: string;
  updated_at: string;
}

type ValidateTicketResult =
  | { valid: true }
  | { valid: false; changedSelections?: ChangedSelection[]; limitViolations?: LimitViolations };

const PRICE_TOLERANCE = 0.0001;

@Injectable()
export class BettingService {
  constructor(
    private readonly redis: RedisService,
    private readonly configService: ConfigService,
  ) {}

  async validateTicket(dto: ValidateTicketDto): Promise<ValidateTicketResult> {
    const [changedSelections, limitViolations] = await Promise.all([
      this.checkOddsChanges(dto.selections),
      this.checkLimits(dto),
    ]);

    const hasOddsChanges = changedSelections.length > 0;
    const hasLimitViolations = Object.keys(limitViolations).length > 0;

    if (!hasOddsChanges && !hasLimitViolations) {
      return { valid: true };
    }

    return {
      valid: false,
      ...(hasOddsChanges && { changedSelections }),
      ...(hasLimitViolations && { limitViolations }),
    };
  }

  private async checkOddsChanges(selections: SelectionDto[]): Promise<ChangedSelection[]> {
    const changed: ChangedSelection[] = [];

    for (const selection of selections) {
      const currentPrice = await this.getCurrentPrice(selection);
      if (currentPrice === null || Math.abs(currentPrice - selection.price) >= PRICE_TOLERANCE) {
        changed.push({
          eventId: selection.eventId,
          marketKey: selection.marketKey,
          selectionId: selection.selectionId,
          requestedPrice: selection.price,
          currentPrice,
        });
      }
    }

    return changed;
  }

  private async checkLimits(dto: ValidateTicketDto): Promise<LimitViolations> {
    const config = await this.configService.getHouseConfig();
    const violations: LimitViolations = {};

    const stake = new Decimal(dto.stake);
    const minBet = new Decimal(config.minBetAmount);

    if (stake.lessThan(minBet)) {
      violations.minBetAmount = {
        required: config.minBetAmount,
        provided: dto.stake,
      };
    }

    const combinedOdds = dto.selections.reduce(
      (acc, s) => acc.times(new Decimal(s.price)),
      new Decimal(1),
    );
    const potentialPayout = stake.times(combinedOdds);
    const maxPayout = new Decimal(config.maxPayoutPerTicket);

    if (potentialPayout.greaterThan(maxPayout)) {
      violations.maxPayoutPerTicket = {
        limit: config.maxPayoutPerTicket,
        calculated: potentialPayout.toDecimalPlaces(2).toNumber(),
      };
    }

    return violations;
  }

  private async getCurrentPrice(selection: SelectionDto): Promise<number | null> {
    const key = `odds:final:${selection.eventId}:${selection.marketKey}:${selection.selectionId}`;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    const raw: string | null = await (this.redis.get(key) as Promise<string | null>);

    if (raw === null) {
      return null;
    }

    const parsed = JSON.parse(raw) as OddsFinal;
    return parsed.price;
  }
}
