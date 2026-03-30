import { createHash } from 'crypto';
import type { Match, Market, MatchStatus, Outcome } from '../interfaces/match.interface';
import type {
  OddspapiFixturePayload,
  OddspapiRestFixture,
} from '../dto/oddspapi-fixture-payload.dto';
import type {
  OddspapiOddsMarket,
  OddspapiOddsOutcome,
  OddspapiOddsPayload,
} from '../dto/oddspapi-odds-payload.dto';

const MARKET_ID_MAP: Record<number, string> = {
  101: 'h2h',
};

const MARKET_NAME_MAP: Record<string, string> = {
  h2h: 'Resultado Final',
  totals: 'Total de Gols',
  spreads: 'Handicap Asiático',
  btts: 'Ambas Marcam',
  corners: 'Escanteios',
  cards: 'Cartões',
  props: 'Props',
};

const H2H_OUTCOME_NAMES: Record<number, string> = {
  101: 'Casa',
  102: 'Empate',
  103: 'Fora',
};

const STATUS_MAP: Record<number, MatchStatus> = {
  0: 'pre_match',
  1: 'live',
  2: 'settled',
  3: 'settled',
};

export class ProviderMapper {
  static generateInternalId(externalId: string): string {
    return createHash('sha256').update(externalId).digest('hex').slice(0, 36);
  }

  static mapStatusId(statusId: number | undefined): MatchStatus {
    if (statusId === undefined) return 'pre_match';
    return STATUS_MAP[statusId] ?? 'pre_match';
  }

  static mapFixtureStatus(statusId: number | undefined, isLive: boolean | undefined): MatchStatus {
    if (isLive === true) return 'live';
    return ProviderMapper.mapStatusId(statusId);
  }

  static mapMarketId(numericId: number): string {
    return MARKET_ID_MAP[numericId] ?? `market_${numericId.toString()}`;
  }

  static mapMarketName(marketId: string): string {
    return MARKET_NAME_MAP[marketId] ?? marketId;
  }

  static epochToIso(epoch: number | undefined): string {
    if (!epoch) return new Date().toISOString();
    return new Date(epoch).toISOString();
  }

  static mapFixture(raw: OddspapiFixturePayload): Match {
    return {
      id: ProviderMapper.generateInternalId(raw.fixtureId),
      externalId: raw.fixtureId,
      sport: raw.sport?.name?.toLowerCase() ?? 'unknown',
      competition: raw.tournament?.name ?? 'Unknown',
      homeTeam: raw.participants?.participant1?.name ?? 'Unknown',
      awayTeam: raw.participants?.participant2?.name ?? 'Unknown',
      startTime: ProviderMapper.epochToIso(raw.startTime),
      status: ProviderMapper.mapFixtureStatus(raw.status?.statusId, raw.status?.live),
      markets: [],
    };
  }

  static mapRestFixture(raw: OddspapiRestFixture): Match {
    return {
      id: ProviderMapper.generateInternalId(raw.fixtureId),
      externalId: raw.fixtureId,
      sport: 'unknown',
      competition: 'Unknown',
      homeTeam: raw.participant1Name ?? 'Unknown',
      awayTeam: raw.participant2Name ?? 'Unknown',
      startTime: ProviderMapper.epochToIso(raw.startTime),
      status: ProviderMapper.mapStatusId(raw.statusId),
      markets: [],
    };
  }

  static applyFixtureDelta(match: Match, raw: OddspapiFixturePayload): Match {
    const updated: Match = { ...match };

    if (raw.status !== undefined) {
      updated.status = ProviderMapper.mapFixtureStatus(raw.status.statusId, raw.status.live);
    }
    if (raw.participants?.participant1?.name) {
      updated.homeTeam = raw.participants.participant1.name;
    }
    if (raw.participants?.participant2?.name) {
      updated.awayTeam = raw.participants.participant2.name;
    }
    if (raw.tournament?.name) {
      updated.competition = raw.tournament.name;
    }
    if (raw.startTime !== undefined) {
      updated.startTime = ProviderMapper.epochToIso(raw.startTime);
    }

    return updated;
  }

  static applyOddsUpdate(match: Match, payload: OddspapiOddsPayload): Match {
    const incoming = ProviderMapper.extractMarkets(payload, match);
    if (incoming.length === 0) return match;

    const updatedIds = new Set(incoming.map((m) => m.id));
    const preserved = match.markets.filter((m) => !updatedIds.has(m.id));

    return { ...match, markets: [...preserved, ...incoming] };
  }

  private static extractMarkets(payload: OddspapiOddsPayload, match: Match): Market[] {
    const marketMap = new Map<string, Market>();

    for (const bookmakerData of Object.values(payload.bookmakerOdds)) {
      for (const [marketIdStr, marketData] of Object.entries(bookmakerData.markets)) {
        const numericMarketId = parseInt(marketIdStr, 10);
        const internalId = ProviderMapper.mapMarketId(numericMarketId);

        if (marketMap.has(internalId)) continue;

        const outcomes = ProviderMapper.extractOutcomes(numericMarketId, marketData, match);
        if (outcomes.length === 0) continue;

        marketMap.set(internalId, {
          id: internalId,
          name: ProviderMapper.mapMarketName(internalId),
          outcomes,
        });
      }
    }

    return Array.from(marketMap.values());
  }

  private static extractOutcomes(
    marketId: number,
    marketData: OddspapiOddsMarket,
    match: Match,
  ): Outcome[] {
    const result: Outcome[] = [];

    for (const [outcomeIdStr, outcomeData] of Object.entries(marketData.outcomes)) {
      const basePlayer = outcomeData.players['0'];
      if (!basePlayer) continue;
      if (basePlayer.active === false || basePlayer.marketActive === false) continue;

      const numericOutcomeId = parseInt(outcomeIdStr, 10);

      result.push({
        selectionId: basePlayer.oddsId ?? `${marketId.toString()}:${outcomeIdStr}`,
        name: ProviderMapper.resolveOutcomeName(marketId, numericOutcomeId, match),
        price: basePlayer.price,
      });
    }

    return result;
  }

  private static resolveOutcomeName(marketId: number, outcomeId: number, match: Match): string {
    if (marketId === 101) {
      if (outcomeId === 101) return match.homeTeam !== 'Unknown' ? match.homeTeam : 'Casa';
      if (outcomeId === 102) return 'Empate';
      if (outcomeId === 103) return match.awayTeam !== 'Unknown' ? match.awayTeam : 'Fora';
    }
    return H2H_OUTCOME_NAMES[outcomeId] ?? `Outcome ${outcomeId.toString()}`;
  }
}
