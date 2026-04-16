import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Bet } from '@prisma/client';
import { Decimal } from 'decimal.js';
import { PrismaService } from '@betazo/database';
import { PlaceBetDto } from './dto/place-bet.dto';

interface WalletRow {
  id: string;
  balance: string;
  user_id: string;
}

@Injectable()
export class WalletTransactionService {
  constructor(private readonly prisma: PrismaService) {}

  async placeBet(dto: PlaceBetDto): Promise<Bet> {
    const stake = new Decimal(dto.stake);
    const combinedOdds = dto.selections.reduce(
      (acc, s) => acc.times(new Decimal(s.price)),
      new Decimal(1),
    );
    const potentialPayout = stake.times(combinedOdds);

    return this.prisma.$transaction(async (tx) => {
      const rows = await tx.$queryRaw<WalletRow[]>`
        SELECT id, balance, user_id
        FROM wallets
        WHERE user_id = ${dto.userId}
        FOR UPDATE
      `;

      if (rows.length === 0) {
        throw new NotFoundException(
          `Carteira não encontrada para o usuário ${dto.userId}`,
        );
      }

      const wallet = rows[0];
      const currentBalance = new Decimal(wallet.balance);

      if (currentBalance.lessThan(stake)) {
        throw new BadRequestException(
          `Saldo insuficiente. Disponível: ${currentBalance.toFixed(2)}, Necessário: ${stake.toFixed(2)}`,
        );
      }

      await tx.wallet.update({
        where: { id: wallet.id },
        data: { balance: { decrement: dto.stake } },
      });

      return tx.bet.create({
        data: {
          userId: dto.userId,
          stake: dto.stake,
          combinedOdds: combinedOdds.toDecimalPlaces(4).toNumber(),
          potentialPayout: potentialPayout.toDecimalPlaces(2).toNumber(),
          status: 'PENDING',
          selections: dto.selections.map((s) => ({
            eventId: s.eventId,
            marketKey: s.marketKey,
            selectionId: s.selectionId,
            price: s.price,
          })),
        },
      });
    });
  }
}
