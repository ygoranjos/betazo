import { Injectable } from '@nestjs/common';
import { RedisService } from '@betazo/redis-cache';
import { SelectionDto, ValidateTicketDto } from './dto/validate-ticket.dto';

export interface ChangedSelection {
  eventId: string;
  marketKey: string;
  selectionId: string;
  requestedPrice: number;
  currentPrice: number | null;
}

interface OddsFinal {
  price: number;
  source: string;
  updated_at: string;
}

const PRICE_TOLERANCE = 0.0001;

@Injectable()
export class BettingService {
  constructor(private readonly redis: RedisService) {}

  async validateTicket(dto: ValidateTicketDto): Promise<{ valid: true } | { valid: false; changedSelections: ChangedSelection[] }> {
    const changedSelections: ChangedSelection[] = [];

    for (const selection of dto.selections) {
      const currentPrice = await this.getCurrentPrice(selection);
      if (currentPrice === null || Math.abs(currentPrice - selection.price) >= PRICE_TOLERANCE) {
        changedSelections.push({
          eventId: selection.eventId,
          marketKey: selection.marketKey,
          selectionId: selection.selectionId,
          requestedPrice: selection.price,
          currentPrice,
        });
      }
    }

    if (changedSelections.length === 0) {
      return { valid: true };
    }

    return { valid: false, changedSelections };
  }

  private async getCurrentPrice(selection: SelectionDto): Promise<number | null> {
    const key = `odds:final:${selection.eventId}:${selection.marketKey}:${selection.selectionId}`;
    const raw = await this.redis.get(key);

    if (raw === null) {
      return null;
    }

    const parsed = JSON.parse(raw) as OddsFinal;
    return parsed.price;
  }
}
