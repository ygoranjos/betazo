import { ProviderMapper } from './provider.mapper';
import type {
  OddspapiFixturePayload,
  OddspapiRestFixture,
} from '../dto/oddspapi-fixture-payload.dto';
import type { OddspapiOddsPayload } from '../dto/oddspapi-odds-payload.dto';
import type { Match } from '../interfaces/match.interface';

const makeFixture = (overrides: Partial<OddspapiFixturePayload> = {}): OddspapiFixturePayload => ({
  fixtureId: 'ext-001',
  status: { live: false, statusId: 0 },
  startTime: 1743278400000,
  participants: {
    participant1: { id: 1, name: 'Manchester City' },
    participant2: { id: 2, name: 'Arsenal' },
  },
  sport: { id: 1, name: 'Soccer' },
  tournament: { id: 100, name: 'Premier League' },
  ...overrides,
});

const makeRestFixture = (overrides: Partial<OddspapiRestFixture> = {}): OddspapiRestFixture => ({
  fixtureId: 'ext-001',
  participant1Name: 'Manchester City',
  participant2Name: 'Arsenal',
  statusId: 0,
  startTime: 1743278400000,
  ...overrides,
});

const makeOddsPayload = (overrides: Partial<OddspapiOddsPayload> = {}): OddspapiOddsPayload => ({
  fixtureId: 'ext-001',
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
                '0': {
                  playerId: '0',
                  price: 2.1,
                  active: true,
                  marketActive: true,
                  oddsId: 'ext-001:bet365:101:0',
                },
              },
            },
            '102': {
              outcomeId: 102,
              players: {
                '0': {
                  playerId: '0',
                  price: 3.4,
                  active: true,
                  marketActive: true,
                  oddsId: 'ext-001:bet365:102:0',
                },
              },
            },
            '103': {
              outcomeId: 103,
              players: {
                '0': {
                  playerId: '0',
                  price: 3.2,
                  active: true,
                  marketActive: true,
                  oddsId: 'ext-001:bet365:103:0',
                },
              },
            },
          },
        },
      },
    },
  },
  ...overrides,
});

const baseMatch: Match = {
  id: 'internal-id',
  externalId: 'ext-001',
  sport: 'soccer',
  competition: 'Premier League',
  homeTeam: 'Manchester City',
  awayTeam: 'Arsenal',
  startTime: '2025-03-29T20:00:00.000Z',
  status: 'live',
  markets: [
    {
      id: 'h2h',
      name: 'Resultado Final',
      outcomes: [{ selectionId: 'old-id', name: 'Manchester City', price: 2.0 }],
    },
    {
      id: 'totals',
      name: 'Total de Gols',
      outcomes: [{ selectionId: 'over-id', name: 'Over 2.5', price: 1.85 }],
    },
  ],
};

describe('ProviderMapper', () => {
  describe('generateInternalId', () => {
    it('deve retornar uma string hexadecimal de 36 caracteres', () => {
      const id = ProviderMapper.generateInternalId('ext-001');
      expect(id).toHaveLength(36);
      expect(id).toMatch(/^[a-f0-9]+$/);
    });

    it('deve ser determinístico para o mesmo input', () => {
      expect(ProviderMapper.generateInternalId('ext-001')).toBe(
        ProviderMapper.generateInternalId('ext-001'),
      );
    });

    it('deve gerar ids diferentes para inputs diferentes', () => {
      expect(ProviderMapper.generateInternalId('ext-001')).not.toBe(
        ProviderMapper.generateInternalId('ext-002'),
      );
    });
  });

  describe('mapStatusId', () => {
    it.each([
      [0, 'pre_match'],
      [1, 'live'],
      [2, 'settled'],
      [3, 'settled'],
    ] as const)('statusId %i deve mapear para %s', (statusId, expected) => {
      expect(ProviderMapper.mapStatusId(statusId)).toBe(expected);
    });

    it('deve retornar pre_match para undefined', () => {
      expect(ProviderMapper.mapStatusId(undefined)).toBe('pre_match');
    });

    it('deve retornar pre_match para statusId desconhecido', () => {
      expect(ProviderMapper.mapStatusId(99)).toBe('pre_match');
    });
  });

  describe('mapFixtureStatus', () => {
    it('deve retornar live quando isLive=true independente do statusId', () => {
      expect(ProviderMapper.mapFixtureStatus(0, true)).toBe('live');
      expect(ProviderMapper.mapFixtureStatus(2, true)).toBe('live');
    });

    it('deve usar o statusId quando isLive=false', () => {
      expect(ProviderMapper.mapFixtureStatus(0, false)).toBe('pre_match');
      expect(ProviderMapper.mapFixtureStatus(2, false)).toBe('settled');
    });

    it('deve lidar com valores undefined', () => {
      expect(ProviderMapper.mapFixtureStatus(undefined, undefined)).toBe('pre_match');
    });
  });

  describe('mapMarketId', () => {
    it('deve mapear o marketId numérico 101 para h2h', () => {
      expect(ProviderMapper.mapMarketId(101)).toBe('h2h');
    });

    it('deve retornar market_N para ids numéricos desconhecidos', () => {
      expect(ProviderMapper.mapMarketId(999)).toBe('market_999');
    });
  });

  describe('mapMarketName', () => {
    it.each([
      ['h2h', 'Resultado Final'],
      ['totals', 'Total de Gols'],
      ['spreads', 'Handicap Asiático'],
      ['btts', 'Ambas Marcam'],
    ] as const)('%s deve mapear para %s', (id, expected) => {
      expect(ProviderMapper.mapMarketName(id)).toBe(expected);
    });

    it('deve retornar o próprio id para mercados desconhecidos', () => {
      expect(ProviderMapper.mapMarketName('mercado_desconhecido')).toBe('mercado_desconhecido');
    });
  });

  describe('epochToIso', () => {
    it('deve converter epoch em ms para string ISO', () => {
      const resultado = ProviderMapper.epochToIso(1743278400000);
      expect(resultado).toBe('2025-03-29T20:00:00.000Z');
    });

    it('deve retornar uma ISO string válida para epoch ausente', () => {
      const resultado = ProviderMapper.epochToIso(undefined);
      expect(resultado).toMatch(/^\d{4}-\d{2}-\d{2}T/);
    });
  });

  describe('mapFixture', () => {
    it('deve mapear todos os campos de um fixture completo', () => {
      const match = ProviderMapper.mapFixture(makeFixture());

      expect(match.externalId).toBe('ext-001');
      expect(match.id).toHaveLength(36);
      expect(match.sport).toBe('soccer');
      expect(match.competition).toBe('Premier League');
      expect(match.homeTeam).toBe('Manchester City');
      expect(match.awayTeam).toBe('Arsenal');
      expect(match.startTime).toBe('2025-03-29T20:00:00.000Z');
      expect(match.status).toBe('pre_match');
      expect(match.markets).toEqual([]);
    });

    it('deve usar valores padrão quando campos opcionais estão ausentes', () => {
      const match = ProviderMapper.mapFixture({ fixtureId: 'ext-bare' });

      expect(match.sport).toBe('unknown');
      expect(match.competition).toBe('Unknown');
      expect(match.homeTeam).toBe('Unknown');
      expect(match.awayTeam).toBe('Unknown');
      expect(match.status).toBe('pre_match');
    });

    it('deve mapear status live quando status.live=true', () => {
      const match = ProviderMapper.mapFixture(makeFixture({ status: { live: true, statusId: 1 } }));
      expect(match.status).toBe('live');
    });

    it('deve mapear status settled quando statusId=2', () => {
      const match = ProviderMapper.mapFixture(
        makeFixture({ status: { live: false, statusId: 2 } }),
      );
      expect(match.status).toBe('settled');
    });
  });

  describe('mapRestFixture', () => {
    it('deve mapear os campos do fixture REST corretamente', () => {
      const match = ProviderMapper.mapRestFixture(makeRestFixture());

      expect(match.externalId).toBe('ext-001');
      expect(match.homeTeam).toBe('Manchester City');
      expect(match.awayTeam).toBe('Arsenal');
      expect(match.status).toBe('pre_match');
      expect(match.startTime).toBe('2025-03-29T20:00:00.000Z');
      expect(match.markets).toEqual([]);
    });

    it('deve usar valores padrão para campos opcionais ausentes', () => {
      const match = ProviderMapper.mapRestFixture({ fixtureId: 'ext-bare' });

      expect(match.homeTeam).toBe('Unknown');
      expect(match.awayTeam).toBe('Unknown');
      expect(match.status).toBe('pre_match');
      expect(match.sport).toBe('unknown');
    });
  });

  describe('applyFixtureDelta', () => {
    it('deve atualizar o status a partir do delta', () => {
      const delta: OddspapiFixturePayload = {
        fixtureId: 'ext-001',
        status: { live: true, statusId: 1 },
      };
      const atualizado = ProviderMapper.applyFixtureDelta(baseMatch, delta);
      expect(atualizado.status).toBe('live');
    });

    it('deve atualizar o nome do time a partir do delta', () => {
      const delta: OddspapiFixturePayload = {
        fixtureId: 'ext-001',
        participants: {
          participant1: { id: 1, name: 'Man City Atualizado' },
        },
      };
      const atualizado = ProviderMapper.applyFixtureDelta(baseMatch, delta);
      expect(atualizado.homeTeam).toBe('Man City Atualizado');
      expect(atualizado.awayTeam).toBe('Arsenal');
    });

    it('não deve mutar o match original', () => {
      const delta: OddspapiFixturePayload = {
        fixtureId: 'ext-001',
        status: { live: false, statusId: 2 },
      };
      ProviderMapper.applyFixtureDelta(baseMatch, delta);
      expect(baseMatch.status).toBe('live');
    });
  });

  describe('applyOddsUpdate', () => {
    it('deve substituir um mercado existente quando o marketId bate', () => {
      const payload = makeOddsPayload();
      const atualizado = ProviderMapper.applyOddsUpdate(baseMatch, payload);

      const h2h = atualizado.markets.find((m) => m.id === 'h2h');
      expect(h2h?.outcomes).toHaveLength(3);
      expect(h2h?.outcomes[0].price).toBe(2.1);
    });

    it('deve usar os nomes dos times como nome dos outcomes do h2h', () => {
      const payload = makeOddsPayload();
      const atualizado = ProviderMapper.applyOddsUpdate(baseMatch, payload);

      const h2h = atualizado.markets.find((m) => m.id === 'h2h');
      const outcomeHome = h2h?.outcomes.find((o) => o.selectionId === 'ext-001:bet365:101:0');
      expect(outcomeHome?.name).toBe('Manchester City');

      const outcomeEmpate = h2h?.outcomes.find((o) => o.selectionId === 'ext-001:bet365:102:0');
      expect(outcomeEmpate?.name).toBe('Empate');
    });

    it('deve preservar mercados não incluídos na atualização', () => {
      const payload = makeOddsPayload();
      const atualizado = ProviderMapper.applyOddsUpdate(baseMatch, payload);

      expect(atualizado.markets.find((m) => m.id === 'totals')).toBeDefined();
    });

    it('deve retornar a mesma referência do match quando não há mercados recebidos', () => {
      const payload: OddspapiOddsPayload = { fixtureId: 'ext-001', bookmakerOdds: {} };
      const resultado = ProviderMapper.applyOddsUpdate(baseMatch, payload);
      expect(resultado).toBe(baseMatch);
    });

    it('deve preservar o mercado original quando todos os outcomes recebidos são inativos', () => {
      const payload = makeOddsPayload({
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
                      '0': { playerId: '0', price: 2.1, active: false, marketActive: true },
                    },
                  },
                },
              },
            },
          },
        },
      });

      const atualizado = ProviderMapper.applyOddsUpdate(baseMatch, payload);

      const h2h = atualizado.markets.find((m) => m.id === 'h2h');
      expect(h2h?.outcomes[0].price).toBe(2.0);
    });

    it('não deve mutar o match original', () => {
      const payload = makeOddsPayload();
      ProviderMapper.applyOddsUpdate(baseMatch, payload);
      expect(baseMatch.markets[0].outcomes[0].price).toBe(2.0);
    });
  });
});
