import { Test, TestingModule } from '@nestjs/testing';
import { ProviderAdapterService } from './provider-adapter.service';
import { RedisService } from '@betazo/redis-cache';

const mockRedis: jest.Mocked<Pick<RedisService, 'set' | 'get' | 'del' | 'publish'>> = {
  set: jest.fn().mockResolvedValue(undefined),
  get: jest.fn().mockResolvedValue(null),
  del: jest.fn().mockResolvedValue(undefined),
  publish: jest.fn().mockResolvedValue(undefined),
};

describe('ProviderAdapterService', () => {
  let service: ProviderAdapterService;

  const call = (svc: ProviderAdapterService, method: string, ...args: unknown[]) =>
    (svc as unknown as Record<string, (...a: unknown[]) => unknown>)[method](...args);

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProviderAdapterService,
        { provide: RedisService, useValue: mockRedis },
      ],
    }).compile();

    service = module.get(ProviderAdapterService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('getMatches', () => {
    it('deve retornar um array vazio quando nenhum match está carregado', () => {
      expect(service.getMatches()).toEqual([]);
    });
  });

  describe('getMatch', () => {
    it('deve retornar undefined para um externalId desconhecido', () => {
      expect(service.getMatch('nao-existe')).toBeUndefined();
    });
  });

  describe('getConnectionStatus', () => {
    it('deve retornar status desconectado na inicialização', () => {
      const status = service.getConnectionStatus();

      expect(status.status).toBe('disconnected');
      expect(status.reconnectAttempts).toBe(0);
      expect(status.lastMessageAt).toBeNull();
    });

    it('deve iniciar em modo websocket por padrão', () => {
      expect(service.getConnectionStatus().mode).toBe('websocket');
    });
  });

  describe('handleV3Update', () => {
    it('deve criar e armazenar um match a partir de uma mensagem v3', async () => {
      await call(service, 'handleV3Update', {
        bookie: 'Bet365',
        id: 'ext-001',
        date: '2025-04-01T18:00:00Z',
        markets: [
          { name: '3-Way Result', odds: [{ home: '2.10', draw: '3.40', away: '3.20' }] },
        ],
      });

      const match = service.getMatch('ext-001');
      expect(match).toBeDefined();
      expect(match?.externalId).toBe('ext-001');
      expect(match?.markets).toHaveLength(1);
      expect(match?.markets[0].id).toBe('h2h');
      expect(match?.markets[0].outcomes[0].price).toBe(2.1);
    });

    it('deve persistir o match no Redis após update', async () => {
      await call(service, 'handleV3Update', {
        bookie: 'Bet365',
        id: 'ext-001',
        date: '2025-04-01T18:00:00Z',
        markets: [{ name: 'ML', odds: [{ home: '2.00', away: '1.72' }] }],
      });

      expect(mockRedis.set).toHaveBeenCalledWith(
        'odds:match:ext-001',
        expect.any(String),
        300,
      );
    });

    it('deve acumular mercados de updates consecutivos', async () => {
      await call(service, 'handleV3Update', {
        bookie: 'Bet365',
        id: 'ext-001',
        date: '2025-04-01T18:00:00Z',
        markets: [{ name: 'ML', odds: [{ home: '2.00', away: '1.72' }] }],
      });

      await call(service, 'handleV3Update', {
        bookie: 'Sbobet',
        id: 'ext-001',
        date: '2025-04-01T18:00:00Z',
        markets: [{ name: 'Totals', odds: [{ hdp: 2.5, over: '1.80', under: '2.00' }] }],
      });

      expect(service.getMatch('ext-001')?.markets).toHaveLength(2);
    });

    it('deve ignorar mensagem com markets vazio', async () => {
      await call(service, 'handleV3Update', {
        bookie: 'Bet365',
        id: 'ext-002',
        date: null,
        markets: [],
      });

      expect(service.getMatch('ext-002')).toBeUndefined();
      expect(mockRedis.set).not.toHaveBeenCalled();
    });
  });

  describe('processMessage — controle de fluxo', () => {
    it('deve remover match do Map e do Redis ao receber mensagem deleted', async () => {
      await call(service, 'handleV3Update', {
        bookie: 'Bet365',
        id: 'ext-003',
        date: null,
        markets: [{ name: 'ML', odds: [{ home: '1.50', away: '2.50' }] }],
      });

      expect(service.getMatch('ext-003')).toBeDefined();

      call(service, 'processMessage', {
        type: 'deleted',
        id: 'ext-003',
        bookie: '1xbet',
        markets: [],
      });

      expect(service.getMatch('ext-003')).toBeUndefined();
      expect(mockRedis.del).toHaveBeenCalledWith('odds:match:ext-003');
    });

    it('deve ignorar mensagens com estrutura desconhecida', () => {
      expect(() => call(service, 'processMessage', { foo: 'bar' })).not.toThrow();
      expect(service.getMatches()).toHaveLength(0);
    });
  });

  describe('getMatches com múltiplos fixtures', () => {
    it('deve retornar todos os matches carregados', async () => {
      for (const id of ['ext-a', 'ext-b', 'ext-c']) {
        await call(service, 'handleV3Update', {
          bookie: 'Bet365',
          id,
          date: null,
          markets: [{ name: 'ML', odds: [{ home: '2.00', away: '1.72' }] }],
        });
      }

      expect(service.getMatches()).toHaveLength(3);
    });
  });
});
