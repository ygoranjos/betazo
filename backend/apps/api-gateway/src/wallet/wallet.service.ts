import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '@betazo/database';

@Injectable()
export class WalletService {
  constructor(private readonly prisma: PrismaService) {}

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
}
