import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Decimal } from 'decimal.js';
import { PrismaService } from '@betazo/database';
import { BalanceAddedPayload, KafkaProducerService, KAFKA_TOPICS } from '@betazo/kafka-client';

interface WalletRow {
  id: string;
  balance: string;
  user_id: string;
}

@Injectable()
export class WalletService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly kafkaProducer: KafkaProducerService,
  ) {}

  async getBalance(userId: string) {
    const wallet = await this.prisma.wallet.findUnique({
      where: { userId },
      select: { id: true, balance: true, updatedAt: true },
    });

    if (!wallet) {
      throw new NotFoundException('Carteira não encontrada');
    }

    return wallet;
  }

  async getTransactions(userId: string) {
    return this.prisma.transaction.findMany({
      where: { userId },
      select: {
        id: true,
        type: true,
        amount: true,
        status: true,
        createdAt: true,
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async addBalance(userId: string, amount: number) {
    const amountDecimal = new Decimal(amount);

    if (amountDecimal.lessThanOrEqualTo(0)) {
      throw new BadRequestException('O valor a ser adicionado deve ser maior que zero');
    }

    const wallet = await this.prisma.$transaction(async (tx) => {
      const rows = await tx.$queryRaw<WalletRow[]>`
        SELECT id, balance, user_id
        FROM wallets
        WHERE user_id = ${userId}
        FOR UPDATE
      `;

      if (rows.length === 0) {
        throw new NotFoundException('Carteira não encontrada');
      }

      const updated = await tx.wallet.update({
        where: { id: rows[0].id },
        data: { balance: { increment: amount } },
        select: { id: true, balance: true, updatedAt: true },
      });

      await tx.transaction.create({
        data: {
          userId,
          walletId: rows[0].id,
          type: 'DEPOSIT',
          amount,
          status: 'COMPLETED',
        },
      });

      return updated;
    });

    const payload: BalanceAddedPayload = {
      userId,
      amount,
      newBalance: new Decimal(wallet.balance.toString()).toNumber(),
      timestamp: new Date().toISOString(),
    };

    await this.kafkaProducer.publish(KAFKA_TOPICS.BALANCE_ADDED, payload);

    return wallet;
  }
}
