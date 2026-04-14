import { createHash } from 'crypto';
import type { Match, Market, MatchStatus, Outcome } from '../interfaces/match.interface';
import type { OddsApiV3Message, OddsApiV3OddsEntry } from '../dto/oddsapi-v3-message.dto';
import type { OddsApiV3SimpleEvent, OddsApiV3EventOdds } from '../dto/oddsapi-v3-rest.dto';

const MARKET_NAME_MAP: Record<string, string> = {
  h2h: 'Resultado Final',
  totals: 'Total de Gols',
  spreads: 'Handicap Asiático',
  btts: 'Ambas Marcam',
  corners: 'Escanteios',
  cards: 'Cartões',
  props: 'Props',
};

const REST_STATUS_MAP: Record<string, MatchStatus> = {
  live: 'live',
  inprogress: 'live',
  finished: 'settled',
  completed: 'settled',
  suspended: 'suspended',
  pending: 'pre_match',
  prematch: 'pre_match',
  upcoming: 'pre_match',
};

export class ProviderMapper {
  static generateInternalId(externalId: string): string {
    return createHash('sha256').update(externalId).digest('hex').slice(0, 36);
  }

  static mapMarketName(marketId: string): string {
    return MARKET_NAME_MAP[marketId] ?? marketId;
  }

  static epochToIso(epoch: number | undefined): string {
    if (!epoch) return new Date().toISOString();
    return new Date(epoch).toISOString();
  }

  static createV3Match(id: string, date: string | null): Match {
    return {
      id: ProviderMapper.generateInternalId(id),
      externalId: id,
      sport: 'soccer',
      competition: 'Unknown',
      homeTeam: 'Unknown',
      awayTeam: 'Unknown',
      startTime: date ?? new Date().toISOString(),
      status: 'pre_match',
      markets: [],
    };
  }

  static mapV3MarketKey(providerName: string): string | null {
    const name = providerName.toLowerCase();
    if (
      name === 'ml' ||
      name === 'moneyline' ||
      name.includes('3-way') ||
      name.includes('money line')
    )
      return 'h2h';
    if (name.includes('total') || name.includes('over/under')) return 'totals';
    if (name.includes('spread') || name.includes('asian handicap') || name.includes('handicap'))
      return 'spreads';
    if (name.includes('btts') || name.includes('both teams to score')) return 'btts';
    if (name.includes('corner')) return 'corners';
    if (name.includes('card')) return 'cards';
    return null;
  }

  static applyV3OddsUpdate(match: Match, msg: OddsApiV3Message): Match {
    const incoming = new Map<string, Market>();

    for (const rawMarket of msg.markets) {
      const marketKey = ProviderMapper.mapV3MarketKey(rawMarket.name);
      if (!marketKey) continue;
      if (incoming.has(marketKey)) continue;

      const oddsEntry = rawMarket.odds[0];
      if (!oddsEntry) continue;

      const outcomes = ProviderMapper.extractV3Outcomes(marketKey, oddsEntry, match);
      if (outcomes.length === 0) continue;

      incoming.set(marketKey, {
        id: marketKey,
        name: ProviderMapper.mapMarketName(marketKey),
        outcomes,
      });
    }

    if (incoming.size === 0) return match;

    const updatedIds = new Set(incoming.keys());
    const preserved = match.markets.filter((m) => !updatedIds.has(m.id));

    return { ...match, markets: [...preserved, ...Array.from(incoming.values())] };
  }

  private static extractV3Outcomes(
    marketKey: string,
    entry: OddsApiV3OddsEntry,
    match: Match,
  ): Outcome[] {
    const id = match.externalId;
    const outcomes: Outcome[] = [];

    if (marketKey === 'h2h') {
      if (entry.home) {
        outcomes.push({
          selectionId: `${id}:h2h:home`,
          name: match.homeTeam !== 'Unknown' ? match.homeTeam : 'Casa',
          price: parseFloat(entry.home),
        });
      }
      if (entry.draw) {
        outcomes.push({
          selectionId: `${id}:h2h:draw`,
          name: 'Empate',
          price: parseFloat(entry.draw),
        });
      }
      if (entry.away) {
        outcomes.push({
          selectionId: `${id}:h2h:away`,
          name: match.awayTeam !== 'Unknown' ? match.awayTeam : 'Fora',
          price: parseFloat(entry.away),
        });
      }
    } else if (marketKey === 'totals' && entry.over && entry.under) {
      const line = entry.hdp !== undefined ? entry.hdp.toString() : '2.5';
      outcomes.push(
        { selectionId: `${id}:totals:over`, name: `Over ${line}`, price: parseFloat(entry.over) },
        {
          selectionId: `${id}:totals:under`,
          name: `Under ${line}`,
          price: parseFloat(entry.under),
        },
      );
    } else if (marketKey === 'spreads' && entry.home && entry.away) {
      const hdp = entry.hdp ?? 0;
      const awayHdp = hdp === 0 ? 0 : -hdp;
      outcomes.push(
        {
          selectionId: `${id}:spreads:home`,
          name: `Casa ${hdp > 0 ? '+' : ''}${hdp.toString()}`,
          price: parseFloat(entry.home),
        },
        {
          selectionId: `${id}:spreads:away`,
          name: `Fora ${awayHdp > 0 ? '+' : ''}${awayHdp.toString()}`,
          price: parseFloat(entry.away),
        },
      );
    }

    return outcomes;
  }

  static mapRestStatus(status: string): MatchStatus {
    return REST_STATUS_MAP[status.toLowerCase()] ?? 'pre_match';
  }

  static mapSimpleEvent(event: OddsApiV3SimpleEvent): Match {
    return {
      id: ProviderMapper.generateInternalId(event.id.toString()),
      externalId: event.id.toString(),
      sport: event.sport?.slug ?? 'soccer',
      competition: event.league?.name ?? 'Unknown',
      homeTeam: event.home,
      awayTeam: event.away,
      startTime: event.date,
      status: ProviderMapper.mapRestStatus(event.status),
      markets: [],
    };
  }

  static applyRestOddsUpdate(match: Match, eventOdds: OddsApiV3EventOdds): Match {
    let updated: Match = {
      ...match,
      homeTeam: eventOdds.home,
      awayTeam: eventOdds.away,
      status: ProviderMapper.mapRestStatus(eventOdds.status),
    };

    for (const [bookmakerName, markets] of Object.entries(eventOdds.bookmakers)) {
      const v3msg: OddsApiV3Message = {
        bookie: bookmakerName,
        id: match.externalId,
        date: match.startTime,
        markets,
      };
      updated = ProviderMapper.applyV3OddsUpdate(updated, v3msg);
    }

    return updated;
  }
}
