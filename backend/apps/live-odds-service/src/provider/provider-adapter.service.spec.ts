import { Test, TestingModule } from '@nestjs/testing';
import { ProviderAdapterService } from './provider-adapter.service';

describe('ProviderAdapterService', () => {
  let service: ProviderAdapterService;

  // Helper para chamar métodos privados do serviço

  const call = (svc: ProviderAdapterService, method: string, ...args: unknown[]) =>
    (svc as unknown as Record<string, (...a: unknown[]) => unknown>)[method](...args);

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProviderAdapterService],
    }).compile();

    // ODDSPAPI_API_KEY não definido em ambiente de teste → onModuleInit não conecta
    service = module.get(ProviderAdapterService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  // ─── API pública ────────────────────────────────────────────────────────────

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

  // ─── Gerenciamento de estado interno ────────────────────────────────────────

  describe('handleFixtureUpdate', () => {
    it('deve armazenar um novo match a partir do payload de fixture', () => {
      call(service, 'handleFixtureUpdate', {
        fixtureId: 'ext-001',
        status: { live: false, statusId: 0 },
        participants: {
          participant1: { id: 1, name: 'Manchester City' },
          participant2: { id: 2, name: 'Arsenal' },
        },
        sport: { id: 1, name: 'Soccer' },
        tournament: { id: 10, name: 'Premier League' },
        startTime: 1743278400000,
      });

      const match = service.getMatch('ext-001');
      expect(match).toBeDefined();
      expect(match?.homeTeam).toBe('Manchester City');
      expect(match?.awayTeam).toBe('Arsenal');
      expect(match?.status).toBe('pre_match');
      expect(match?.competition).toBe('Premier League');
    });

    it('deve aplicar delta ao match existente ao receber atualização de status', () => {
      call(service, 'handleFixtureUpdate', {
        fixtureId: 'ext-002',
        status: { live: false, statusId: 0 },
        participants: {
          participant1: { id: 1, name: 'Home' },
          participant2: { id: 2, name: 'Away' },
        },
      });

      // Delta: apenas o status muda
      call(service, 'handleFixtureUpdate', {
        fixtureId: 'ext-002',
        status: { live: true, statusId: 1 },
      });

      expect(service.getMatch('ext-002')?.status).toBe('live');
    });

    it('não deve sobrescrever campos inalterados ao aplicar delta', () => {
      call(service, 'handleFixtureUpdate', {
        fixtureId: 'ext-003',
        status: { live: false, statusId: 0 },
        participants: {
          participant1: { id: 1, name: 'Time A' },
          participant2: { id: 2, name: 'Time B' },
        },
        tournament: { id: 10, name: 'Liga X' },
      });

      // Delta: apenas participant2 muda
      call(service, 'handleFixtureUpdate', {
        fixtureId: 'ext-003',
        participants: {
          participant2: { id: 2, name: 'Time B Atualizado' },
        },
      });

      const match = service.getMatch('ext-003');
      expect(match?.homeTeam).toBe('Time A'); // inalterado
      expect(match?.awayTeam).toBe('Time B Atualizado');
      expect(match?.competition).toBe('Liga X'); // inalterado
    });

    it('deve ignorar fixture update sem fixtureId', () => {
      call(service, 'handleFixtureUpdate', { status: { live: true, statusId: 1 } });
      expect(service.getMatches()).toHaveLength(0);
    });
  });

  describe('handleOddsUpdate', () => {
    it('deve aplicar atualização de odds a um match existente', () => {
      call(service, 'handleFixtureUpdate', {
        fixtureId: 'ext-004',
        status: { live: true, statusId: 1 },
        participants: {
          participant1: { id: 1, name: 'Home' },
          participant2: { id: 2, name: 'Away' },
        },
      });

      call(service, 'handleOddsUpdate', {
        fixtureId: 'ext-004',
        bookmakerOdds: {
          bet365: {
            bookmaker: 'bet365',
            markets: {
              '101': {
                marketId: 101,
                outcomes: {
                  '101': {
                    outcomeId: 101,
                    players: {
                      '0': { playerId: '0', price: 2.15, active: true, marketActive: true },
                    },
                  },
                  '102': {
                    outcomeId: 102,
                    players: {
                      '0': { playerId: '0', price: 3.4, active: true, marketActive: true },
                    },
                  },
                  '103': {
                    outcomeId: 103,
                    players: {
                      '0': { playerId: '0', price: 3.1, active: true, marketActive: true },
                    },
                  },
                },
              },
            },
          },
        },
      });

      const match = service.getMatch('ext-004');
      expect(match?.markets).toHaveLength(1);
      expect(match?.markets[0].id).toBe('h2h');
      expect(match?.markets[0].outcomes[0].price).toBe(2.15);
    });

    it('deve ignorar atualização de odds para fixture desconhecido', () => {
      call(service, 'handleOddsUpdate', {
        fixtureId: 'fixture-desconhecido',
        bookmakerOdds: {},
      });

      expect(service.getMatch('fixture-desconhecido')).toBeUndefined();
    });
  });

  describe('getMatches com múltiplos fixtures', () => {
    it('deve retornar todos os matches carregados', () => {
      for (const id of ['ext-a', 'ext-b', 'ext-c']) {
        call(service, 'handleFixtureUpdate', {
          fixtureId: id,
          status: { live: false, statusId: 0 },
        });
      }

      expect(service.getMatches()).toHaveLength(3);
    });
  });
});
