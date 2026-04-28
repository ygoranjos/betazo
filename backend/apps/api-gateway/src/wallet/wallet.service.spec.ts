import { BadRequestException, NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '@betazo/database';
import { KafkaProducerService, KAFKA_TOPICS } from '@betazo/kafka-client';
import { WalletService } from './wallet.service';

const mockPrisma = {
  wallet: {
    findUnique: jest.fn(),
    update: jest.fn(),
  },
  transaction: {
    findMany: jest.fn(),
  },
  $transaction: jest.fn(),
};

const mockKafkaProducer = {
  publish: jest.fn(),
};

const wallet = { id: 'wallet-1', balance: '100.00', updatedAt: new Date() };

describe('WalletService', () => {
  let service: WalletService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        WalletService,
        { provide: PrismaService, useValue: mockPrisma },
        { provide: KafkaProducerService, useValue: mockKafkaProducer },
      ],
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

  describe('getTransactions', () => {
    it('deve retornar lista de transações do usuário', async () => {
      const transactions = [
        { id: 'tx-1', type: 'DEPOSIT', amount: '100.00', status: 'COMPLETED', createdAt: new Date() },
        { id: 'tx-2', type: 'DEPOSIT', amount: '50.00', status: 'COMPLETED', createdAt: new Date() },
      ];
      mockPrisma.transaction.findMany.mockResolvedValue(transactions);

      const result = await service.getTransactions('uuid-1');

      expect(result).toEqual(transactions);
    });

    it('deve retornar lista vazia quando não há transações', async () => {
      mockPrisma.transaction.findMany.mockResolvedValue([]);

      const result = await service.getTransactions('uuid-1');

      expect(result).toEqual([]);
    });

    it('deve buscar transações pelo userId em ordem decrescente', async () => {
      mockPrisma.transaction.findMany.mockResolvedValue([]);

      await service.getTransactions('uuid-1');

      expect(mockPrisma.transaction.findMany).toHaveBeenCalledWith(
        expect.objectContaining({
          where: { userId: 'uuid-1' },
          orderBy: { createdAt: 'desc' },
        }),
      );
    });
  });

  describe('addBalance', () => {
    it('deve lançar BadRequestException se o valor for zero', async () => {
      await expect(service.addBalance('uuid-1', 0)).rejects.toThrow(BadRequestException);
    });

    it('deve lançar BadRequestException se o valor for negativo', async () => {
      await expect(service.addBalance('uuid-1', -10)).rejects.toThrow(BadRequestException);
    });

    it('deve lançar NotFoundException se a carteira não existir', async () => {
      mockPrisma.$transaction.mockImplementation(async (fn: (tx: typeof mockPrisma) => Promise<unknown>) => {
        const tx = {
          ...mockPrisma,
          $queryRaw: jest.fn().mockResolvedValue([]),
        };
        return fn(tx);
      });

      await expect(service.addBalance('uuid-1', 50)).rejects.toThrow(NotFoundException);
    });

    it('deve adicionar saldo e retornar a carteira atualizada', async () => {
      const updatedWallet = { id: 'wallet-1', balance: '150.00', updatedAt: new Date() };

      mockPrisma.$transaction.mockImplementation(async (fn: (tx: typeof mockPrisma) => Promise<unknown>) => {
        const tx = {
          $queryRaw: jest.fn().mockResolvedValue([{ id: 'wallet-1', balance: '100.00', user_id: 'uuid-1' }]),
          wallet: { update: jest.fn().mockResolvedValue(updatedWallet) },
          transaction: { create: jest.fn().mockResolvedValue({}) },
        };
        return fn(tx);
      });

      mockKafkaProducer.publish.mockResolvedValue(undefined);

      const result = await service.addBalance('uuid-1', 50);

      expect(result).toEqual(updatedWallet);
    });

    it('deve publicar evento BALANCE_ADDED no Kafka após a transação', async () => {
      const updatedWallet = { id: 'wallet-1', balance: '150.00', updatedAt: new Date() };

      mockPrisma.$transaction.mockImplementation(async (fn: (tx: typeof mockPrisma) => Promise<unknown>) => {
        const tx = {
          $queryRaw: jest.fn().mockResolvedValue([{ id: 'wallet-1', balance: '100.00', user_id: 'uuid-1' }]),
          wallet: { update: jest.fn().mockResolvedValue(updatedWallet) },
          transaction: { create: jest.fn().mockResolvedValue({}) },
        };
        return fn(tx);
      });

      mockKafkaProducer.publish.mockResolvedValue(undefined);

      await service.addBalance('uuid-1', 50);

      expect(mockKafkaProducer.publish).toHaveBeenCalledWith(
        KAFKA_TOPICS.BALANCE_ADDED,
        expect.objectContaining({ userId: 'uuid-1', amount: 50, newBalance: 150 }),
      );
    });

    it('deve executar a transação com SELECT FOR UPDATE', async () => {
      const updatedWallet = { id: 'wallet-1', balance: '150.00', updatedAt: new Date() };
      const queryRawMock = jest.fn().mockResolvedValue([{ id: 'wallet-1', balance: '100.00', user_id: 'uuid-1' }]);

      mockPrisma.$transaction.mockImplementation(async (fn: (tx: typeof mockPrisma) => Promise<unknown>) => {
        const tx = {
          $queryRaw: queryRawMock,
          wallet: { update: jest.fn().mockResolvedValue(updatedWallet) },
          transaction: { create: jest.fn().mockResolvedValue({}) },
        };
        return fn(tx);
      });

      mockKafkaProducer.publish.mockResolvedValue(undefined);

      await service.addBalance('uuid-1', 50);

      expect(queryRawMock).toHaveBeenCalled();
    });
  });
});
