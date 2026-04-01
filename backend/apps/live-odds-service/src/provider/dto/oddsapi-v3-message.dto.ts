export interface OddsApiV3OddsEntry {
  home?: string;
  draw?: string;
  away?: string;
  hdp?: number;
  over?: string;
  under?: string;
}

export interface OddsApiV3Market {
  name: string;
  updatedAt?: string;
  odds: OddsApiV3OddsEntry[];
}

export interface OddsApiV3Message {
  bookie: string;
  date: string | null;
  id: string;
  markets: OddsApiV3Market[];
  timestamp?: number;
  type?: 'deleted';
}
