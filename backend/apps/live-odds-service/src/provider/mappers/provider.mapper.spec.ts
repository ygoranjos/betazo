import { ProviderMapper } from './provider.mapper';
import type { OddsApiV3Message } from '../dto/oddsapi-v3-message.dto';
import type { Match } from '../interfaces/match.interface';

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
      outcomes: [{ selectionId: 'ext-001:h2h:home', name: 'Manchester City', price: 2.0 }],
    },
    {
      id: 'totals',
      name: 'Total de Gols',
      outcomes: [{ selectionId: 'ext-001:totals:over', name: 'Over 2.5', price: 1.85 }],
    },
  ],
};

const makeV3Message = (overrides: Partial<OddsApiV3Message> = {}): OddsApiV3Message => ({
  bookie: 'Bet365',
  id: 'ext-001',
  date: '2025-03-29T20:00:00Z',
  markets: [
    {
      name: '3-Way Result',
      odds: [{ home: '2.10', draw: '3.40', away: '3.20' }],
    },
  ],
  ...overrides,
});

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
      expect(ProviderMapper.epochToIso(1743278400000)).toBe('2025-03-29T20:00:00.000Z');
    });

    it('deve retornar uma ISO string válida para epoch ausente', () => {
      expect(ProviderMapper.epochToIso(undefined)).toMatch(/^\d{4}-\d{2}-\d{2}T/);
    });
  });

  describe('mapV3MarketKey', () => {
    it.each([
      ['ML', 'h2h'],
      ['ml', 'h2h'],
      ['Moneyline', 'h2h'],
      ['3-Way Result', 'h2h'],
      ['Totals', 'totals'],
      ['Goals Over/Under', 'totals'],
      ['Spread', 'spreads'],
      ['Asian Handicap', 'spreads'],
      ['Corners', 'corners'],
      ['Cards', 'cards'],
    ] as const)('"%s" deve mapear para "%s"', (name, expected) => {
      expect(ProviderMapper.mapV3MarketKey(name)).toBe(expected);
    });

    it('deve retornar null para mercados desconhecidos', () => {
      expect(ProviderMapper.mapV3MarketKey('Mercado Desconhecido')).toBeNull();
    });
  });

  describe('createV3Match', () => {
    it('deve criar um match mínimo com os campos corretos', () => {
      const match = ProviderMapper.createV3Match('ext-999', '2025-04-01T18:00:00Z');

      expect(match.externalId).toBe('ext-999');
      expect(match.id).toHaveLength(36);
      expect(match.startTime).toBe('2025-04-01T18:00:00Z');
      expect(match.status).toBe('pre_match');
      expect(match.homeTeam).toBe('Unknown');
      expect(match.awayTeam).toBe('Unknown');
      expect(match.markets).toEqual([]);
    });

    it('deve usar a data atual quando date é null', () => {
      const match = ProviderMapper.createV3Match('ext-999', null);
      expect(match.startTime).toMatch(/^\d{4}-\d{2}-\d{2}T/);
    });
  });

  describe('applyV3OddsUpdate', () => {
    it('deve adicionar mercado h2h com 3 outcomes a partir de 3-Way Result', () => {
      const msg = makeV3Message();
      const result = ProviderMapper.applyV3OddsUpdate(baseMatch, msg);

      const h2h = result.markets.find((m) => m.id === 'h2h');
      expect(h2h?.outcomes).toHaveLength(3);
      expect(h2h?.outcomes[0]).toEqual({
        selectionId: 'ext-001:h2h:home',
        name: 'Manchester City',
        price: 2.1,
      });
      expect(h2h?.outcomes[1]).toEqual({ selectionId: 'ext-001:h2h:draw', name: 'Empate', price: 3.4 });
      expect(h2h?.outcomes[2]).toEqual({
        selectionId: 'ext-001:h2h:away',
        name: 'Arsenal',
        price: 3.2,
      });
    });

    it('deve adicionar mercado h2h com 2 outcomes a partir de ML sem empate', () => {
      const msg = makeV3Message({
        markets: [{ name: 'ML', odds: [{ home: '2.00', away: '1.72' }] }],
      });
      const match = ProviderMapper.createV3Match('ext-001', null);
      const result = ProviderMapper.applyV3OddsUpdate(match, msg);

      const h2h = result.markets.find((m) => m.id === 'h2h');
      expect(h2h?.outcomes).toHaveLength(2);
    });

    it('deve adicionar mercado totals com over e under', () => {
      const msg = makeV3Message({
        markets: [{ name: 'Totals', odds: [{ hdp: 2.5, over: '1.80', under: '2.00' }] }],
      });
      const result = ProviderMapper.applyV3OddsUpdate(baseMatch, msg);

      const totals = result.markets.find((m) => m.id === 'totals');
      expect(totals?.outcomes).toHaveLength(2);
      expect(totals?.outcomes[0]).toEqual({
        selectionId: 'ext-001:totals:over',
        name: 'Over 2.5',
        price: 1.8,
      });
      expect(totals?.outcomes[1]).toEqual({
        selectionId: 'ext-001:totals:under',
        name: 'Under 2.5',
        price: 2.0,
      });
    });

    it('deve adicionar mercado spreads com handicap', () => {
      const msg = makeV3Message({
        markets: [{ name: 'Spread', odds: [{ hdp: -1.5, home: '1.44', away: '2.62' }] }],
      });
      const result = ProviderMapper.applyV3OddsUpdate(baseMatch, msg);

      const spreads = result.markets.find((m) => m.id === 'spreads');
      expect(spreads?.outcomes).toHaveLength(2);
      expect(spreads?.outcomes[0].name).toBe('Casa -1.5');
      expect(spreads?.outcomes[1].name).toBe('Fora +1.5');
    });

    it('deve preservar mercados não incluídos na atualização', () => {
      const msg = makeV3Message({
        markets: [{ name: '3-Way Result', odds: [{ home: '2.10', draw: '3.40', away: '3.20' }] }],
      });
      const result = ProviderMapper.applyV3OddsUpdate(baseMatch, msg);

      expect(result.markets.find((m) => m.id === 'totals')).toBeDefined();
    });

    it('deve retornar a mesma referência quando não há mercados reconhecidos', () => {
      const msg = makeV3Message({ markets: [] });
      const result = ProviderMapper.applyV3OddsUpdate(baseMatch, msg);
      expect(result).toBe(baseMatch);
    });

    it('não deve mutar o match original', () => {
      const msg = makeV3Message();
      ProviderMapper.applyV3OddsUpdate(baseMatch, msg);
      expect(baseMatch.markets[0].outcomes[0].price).toBe(2.0);
    });

    it('deve usar "Casa"/"Fora" quando os nomes dos times são Unknown', () => {
      const match = ProviderMapper.createV3Match('ext-001', null);
      const msg = makeV3Message();
      const result = ProviderMapper.applyV3OddsUpdate(match, msg);

      const h2h = result.markets.find((m) => m.id === 'h2h');
      expect(h2h?.outcomes[0].name).toBe('Casa');
      expect(h2h?.outcomes[2].name).toBe('Fora');
    });
  });
});
