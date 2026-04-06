import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '@betazo/database';
import { RedisService } from '@betazo/redis-cache';
import { ConfigService } from './config.service';

const mockPrisma = {
  houseConfig: {
    findFirst: jest.fn(),
    create: jest.fn(),
    upsert: jest.fn(),
  },
};

const mockRedis = {
  get: jest.fn(),
  set: jest.fn(),
  del: jest.fn(),
};

describe('ConfigService', () => {
  let service: ConfigService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ConfigService,
        { provide: PrismaService, useValue: mockPrisma },
        { provide: RedisService, useValue: mockRedis },
      ],
    }).compile();

    service = module.get<ConfigService>(ConfigService);
    jest.clearAllMocks();
  });

  describe('getHouseConfig', () => {
    it('retorna do cache Redis sem consultar o banco (cache hit)', async () => {
      mockRedis.get.mockResolvedValue(
        JSON.stringify({ minBetAmount: 1.0, maxPayoutPerTicket: 50000.0 }),
      );

      const result = await service.getHouseConfig();

      expect(result).toEqual({ minBetAmount: 1.0, maxPayoutPerTicket: 50000.0 });
      expect(mockPrisma.houseConfig.findFirst).not.toHaveBeenCalled();
    });

    it('busca no banco e salva no cache quando Redis está vazio (cache miss)', async () => {
      mockRedis.get.mockResolvedValue(null);
      mockPrisma.houseConfig.findFirst.mockResolvedValue({
        id: 'uuid-1',
        minBetAmount: { toNumber: () => 2.0 },
        maxPayoutPerTicket: { toNumber: () => 30000.0 },
      });

      const result = await service.getHouseConfig();

      expect(result).toEqual({ minBetAmount: 2.0, maxPayoutPerTicket: 30000.0 });
      expect(mockRedis.set).toHaveBeenCalledWith(
        'config:house',
        JSON.stringify({ minBetAmount: 2.0, maxPayoutPerTicket: 30000.0 }),
      );
    });

    it('aplica defaults e persiste no banco quando não há configuração', async () => {
      mockRedis.get.mockResolvedValue(null);
      mockPrisma.houseConfig.findFirst.mockResolvedValue(null);
      mockPrisma.houseConfig.create.mockResolvedValue({});

      const result = await service.getHouseConfig();

      expect(result).toEqual({ minBetAmount: 1.0, maxPayoutPerTicket: 50000.0 });
      expect(mockPrisma.houseConfig.create).toHaveBeenCalledWith({
        data: { minBetAmount: 1.0, maxPayoutPerTicket: 50000.0 },
      });
      expect(mockRedis.set).toHaveBeenCalledWith(
        'config:house',
        JSON.stringify({ minBetAmount: 1.0, maxPayoutPerTicket: 50000.0 }),
      );
    });
  });

  describe('updateHouseConfig', () => {
    it('atualiza o banco e invalida o cache Redis', async () => {
      mockPrisma.houseConfig.findFirst.mockResolvedValue({ id: 'uuid-1' });
      mockPrisma.houseConfig.upsert.mockResolvedValue({
        minBetAmount: { toNumber: () => 5.0 },
        maxPayoutPerTicket: { toNumber: () => 10000.0 },
      });

      const result = await service.updateHouseConfig({
        minBetAmount: 5.0,
        maxPayoutPerTicket: 10000.0,
      });

      expect(result).toEqual({ minBetAmount: 5.0, maxPayoutPerTicket: 10000.0 });
      expect(mockRedis.del).toHaveBeenCalledWith('config:house');
    });
  });
});
