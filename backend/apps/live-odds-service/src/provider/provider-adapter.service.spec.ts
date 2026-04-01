import { Test, TestingModule } from '@nestjs/testing';
import { ProviderAdapterService } from './provider-adapter.service';

describe('ProviderAdapterService', () => {
  let service: ProviderAdapterService;

  const call = (svc: ProviderAdapterService, method: string, ...args: unknown[]) =>
    (svc as unknown as Record<string, (...a: unknown[]) => unknown>)[method](...args);

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProviderAdapterService],
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
    it('deve criar e armazenar um match a partir de uma mensagem v3', () => {
      call(service, 'handleV3Update', {
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

    it('deve atualizar um match existente ao receber nova mensagem', () => {
      call(service, 'handleV3Update', {
        bookie: 'Bet365',
        id: 'ext-001',
        date: '2025-04-01T18:00:00Z',
        markets: [{ name: 'ML', odds: [{ home: '2.00', away: '1.72' }] }],
      });

      call(service, 'handleV3Update', {
        bookie: 'Sbobet',
        id: 'ext-001',
        date: '2025-04-01T18:00:00Z',
        markets: [
          { name: 'Totals', odds: [{ hdp: 2.5, over: '1.80', under: '2.00' }] },
        ],
      });

      const match = service.getMatch('ext-001');
      expect(match?.markets).toHaveLength(2);
    });

    it('deve ignorar mensagem com markets vazio', () => {
      call(service, 'handleV3Update', {
        bookie: 'Bet365',
        id: 'ext-002',
        date: null,
        markets: [],
      });

      expect(service.getMatch('ext-002')).toBeUndefined();
    });
  });

  describe('processMessage — controle de fluxo', () => {
    it('deve remover match ao receber mensagem deleted', () => {
      call(service, 'handleV3Update', {
        bookie: 'Bet365',
        id: 'ext-003',
        date: null,
        markets: [{ name: 'ML', odds: [{ home: '1.50', away: '2.50' }] }],
      });

      expect(service.getMatch('ext-003')).toBeDefined();

      call(service, 'processMessage', { type: 'deleted', id: 'ext-003', bookie: '1xbet', markets: [] });

      expect(service.getMatch('ext-003')).toBeUndefined();
    });

    it('deve ignorar mensagens com estrutura desconhecida', () => {
      expect(() => call(service, 'processMessage', { foo: 'bar' })).not.toThrow();
      expect(service.getMatches()).toHaveLength(0);
    });
  });

  describe('getMatches com múltiplos fixtures', () => {
    it('deve retornar todos os matches carregados', () => {
      for (const id of ['ext-a', 'ext-b', 'ext-c']) {
        call(service, 'handleV3Update', {
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
