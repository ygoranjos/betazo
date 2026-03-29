import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '@betazo/database';
import { WalletService } from './wallet.service';

const mockPrisma = {
  wallet: {
    findUnique: jest.fn(),
  },
};

const wallet = { id: 'wallet-1', balance: '100.00', updatedAt: new Date() };

describe('WalletService', () => {
  let service: WalletService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WalletService, { provide: PrismaService, useValue: mockPrisma }],
    }).compile();

    service = module.get<WalletService>(WalletService);
    jest.clearAllMocks();
  });

  describe('getBalance', () => {
    it('deve lançar NotFoundException se a carteira não existir', async () => {
      mockPrisma.wallet.findUnique.mockResolvedValue(null);

      await expect(service.getBalance('uuid-1')).rejects.toThrow(NotFoundException);
    });

    it('deve retornar o saldo da carteira', async () => {
      mockPrisma.wallet.findUnique.mockResolvedValue(wallet);

      const result = await service.getBalance('uuid-1');

      expect(result).toEqual(wallet);
    });

    it('deve buscar a carteira pelo userId', async () => {
      mockPrisma.wallet.findUnique.mockResolvedValue(wallet);

      await service.getBalance('uuid-1');

      expect(mockPrisma.wallet.findUnique).toHaveBeenCalledWith(
        expect.objectContaining({ where: { userId: 'uuid-1' } }),
      );
    });
  });
});
