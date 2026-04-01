export interface OddsApiV3RestSport {
  name: string;
  slug: string;
}

export interface OddsApiV3RestLeague {
  name: string;
  slug: string;
}

export interface OddsApiV3RestScore {
  home?: number;
  away?: number;
}

/** Response from GET /events and GET /events/live */
export interface OddsApiV3SimpleEvent {
  id: number;
  home: string;
  away: string;
  date: string;
  status: string;
  sport: OddsApiV3RestSport;
  league: OddsApiV3RestLeague;
  scores?: OddsApiV3RestScore;
}

/** Odds entry per bookmaker market — mirrors the WebSocket market format */
export interface OddsApiV3RestMarket {
  name: string;
  odds: Array<{
    home?: string;
    away?: string;
    draw?: string;
    hdp?: number;
    over?: string;
    under?: string;
  }>;
}

/**
 * Response from GET /odds, GET /odds/multi, GET /odds/updated.
 * The bookmakers object maps bookmaker name → array of markets,
 * mirroring the WebSocket message structure.
 */
export interface OddsApiV3EventOdds {
  id: number;
  home: string;
  away: string;
  date: string;
  status: string;
  sport: OddsApiV3RestSport;
  league: OddsApiV3RestLeague;
  scores?: OddsApiV3RestScore;
  bookmakers: Record<string, OddsApiV3RestMarket[]>;
}
