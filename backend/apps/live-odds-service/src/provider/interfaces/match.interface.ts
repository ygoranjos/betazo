export type MatchStatus = 'pre_match' | 'live' | 'suspended' | 'settled';

export interface Outcome {
  selectionId: string;
  name: string;
  price: number;
}

export interface Market {
  id: string;
  name: string;
  outcomes: Outcome[];
}

export interface Match {
  id: string;
  externalId: string;
  sport: string;
  competition: string;
  homeTeam: string;
  awayTeam: string;
  startTime: string;
  status: MatchStatus;
  markets: Market[];
}
