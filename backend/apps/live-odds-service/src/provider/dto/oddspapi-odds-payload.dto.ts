export interface OddspapiOddsPlayer {
  price: number;
  priceFractional?: string;
  priceAmerican?: string;
  active?: boolean;
  marketActive?: boolean;
  playerId: string;
  playerName?: string;
  bookmakerOutcomeId?: string;
  changedAt?: number;
  oddsId?: string;
}

export interface OddspapiOddsOutcome {
  outcomeId: number;
  players: Record<string, OddspapiOddsPlayer>;
}

export interface OddspapiOddsMarket {
  marketId: number;
  outcomes: Record<string, OddspapiOddsOutcome>;
}

export interface OddspapiBookmakerOdds {
  bookmaker: string;
  bookmakerFixtureId?: string;
  markets: Record<string, OddspapiOddsMarket>;
}

export interface OddspapiOddsPayload {
  fixtureId: string;
  bookmakerOdds: Record<string, OddspapiBookmakerOdds>;
}
