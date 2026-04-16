import { BadRequestException, ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { Bet } from '@prisma/client';
import { Decimal } from 'decimal.js';
import { PrismaService } from '@betazo/database';
import { BetPlacedPayload, KafkaProducerService, KAFKA_TOPICS } from '@betazo/kafka-client';
import { RedisService } from '@betazo/redis-cache';
import { PlaceBetDto } from './dto/place-bet.dto';
import { SelectionDto } from './dto/validate-ticket.dto';

interface WalletRow {
  id: string;
  balance: string; // PostgreSQL DECIMAL retorna como string em queries raw
  user_id: string;
}

interface OddsFinal {
  price: number;
  source: string;
  updated_at: string;
}

interface ChangedOddsSelection {
  eventId: string;
  marketKey: string;
  selectionId: string;
  requestedPrice: number;
  currentPrice: number | null;
}

const ODD_MAX_VARIANCE_PERCENT = 1;

@Injectable()
export class WalletTransactionService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly kafkaProducer: KafkaProducerService,
    private readonly redis: RedisService,
  ) {}

  async placeBet(dto: PlaceBetDto, userId: string): Promise<Bet> {

    await this.validateOddsBeforeTransaction(dto.selections);

    const stake = new Decimal(dto.stake);
    const combinedOdds = dto.selections.reduce(
      (acc, s) => acc.times(new Decimal(s.price)),
      new Decimal(1),
    );
    const potentialPayout = stake.times(combinedOdds);

    // Passo 1-4: ACID — tudo em um único bloco de transação no PostgreSQL.
    // Se qualquer passo falhar, o Prisma faz rollback automático.
    const bet = await this.prisma.$transaction(async (tx) => {
      // 1. SELECT FOR UPDATE — bloqueia a linha da carteira para evitar race conditions.
      //    Nenhuma outra transação pode ler ou escrever nessa linha até o commit/rollback.
      const rows = await tx.$queryRaw<WalletRow[]>`
        SELECT id, balance, user_id
        FROM wallets
        WHERE user_id = ${userId}
        FOR UPDATE
      `;

      if (rows.length === 0) {
        throw new NotFoundException(
          `Carteira não encontrada para o usuário ${userId}`,
        );
      }

      const wallet = rows[0];
      const currentBalance = new Decimal(wallet.balance);

      // 2. Valida saldo suficiente antes de qualquer escrita
      if (currentBalance.lessThan(stake)) {
        throw new BadRequestException(
          `Saldo insuficiente. Disponível: ${currentBalance.toFixed(2)}, Necessário: ${stake.toFixed(2)}`,
        );
      }

      // 3. Decrementa o saldo da carteira
      await tx.wallet.update({
        where: { id: wallet.id },
        data: { balance: { decrement: dto.stake } },
      });

      // 4. Cria o registro da aposta com status PENDING.
      //    Se esta operação falhar, o passo 3 é revertido automaticamente.
      return tx.bet.create({
        data: {
          userId,
          stake: dto.stake,
          combinedOdds: combinedOdds.toDecimalPlaces(4).toNumber(),
          potentialPayout: potentialPayout.toDecimalPlaces(2).toNumber(),
          status: 'PENDING',
          selections: this.toSelectionJson(dto.selections),
        },
      });
    });

    // Passo 5: Publicar evento no Kafka APÓS o commit do banco.
    // Kafka não suporta rollback — publicar dentro da transaction criaria
    // mensagens "mentirosas" caso o commit do DB falhasse.
    // Aguarda ACK do broker antes de retornar ao cliente.
    const payload: BetPlacedPayload = {
      betId: bet.id,
      userId: bet.userId,
      stake: dto.stake,
      totalOdd: combinedOdds.toDecimalPlaces(4).toNumber(),
      selections: this.toSelectionJson(dto.selections),
    };

    await this.kafkaProducer.publish(KAFKA_TOPICS.BET_PLACED, payload);

    return bet;
  }

  private async validateOddsBeforeTransaction(selections: SelectionDto[]): Promise<void> {
    const changed: ChangedOddsSelection[] = [];

    for (const selection of selections) {
      const key = `odds:final:${selection.eventId}:${selection.marketKey}:${selection.selectionId}`;
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      const raw: string | null = await (this.redis.get(key) as Promise<string | null>);

      let currentPrice: number | null = null;
      if (raw !== null) {
        const parsed = JSON.parse(raw) as OddsFinal;
        currentPrice = parsed.price;
      }

      const isExpired = currentPrice === null;
      const variancePercent = isExpired
        ? Infinity
        : (Math.abs(currentPrice - selection.price) / selection.price) * 100;

      if (isExpired || variancePercent > ODD_MAX_VARIANCE_PERCENT) {
        changed.push({
          eventId: selection.eventId,
          marketKey: selection.marketKey,
          selectionId: selection.selectionId,
          requestedPrice: selection.price,
          currentPrice,
        });
      }
    }

    if (changed.length > 0) {
      throw new ConflictException({
        message: 'As odds de uma ou mais seleções foram alteradas. Revise sua aposta.',
        changedSelections: changed,
      });
    }
  }

  private toSelectionJson(selections: SelectionDto[]) {
    return selections.map((s) => ({
      eventId: s.eventId,
      marketKey: s.marketKey,
      selectionId: s.selectionId,
      price: s.price,
    }));
  }
}
