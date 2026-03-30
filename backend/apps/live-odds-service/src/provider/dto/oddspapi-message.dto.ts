export type OddspapiChannel =
  | 'fixtures'
  | 'odds'
  | 'scores'
  | 'bookmakers'
  | 'futures'
  | 'bookmakersFutures'
  | 'oddsFutures';

export interface OddspapiWebSocketMessage {
  channel: OddspapiChannel;
  type: 'UPDATE' | 'SNAPSHOT';
  payload: unknown;
  fixtureId?: string;
  ts: number;
  entryId?: string;
}

export interface OddspapiControlMessage {
  type: 'login_ok' | 'snapshot_required' | 'resume_complete';
  serverEpoch?: number;
  lastSeenId?: string;
}

export interface OddspapiSubscribeMessage {
  type: 'login';
  apiKey: string;
  subscribe: {
    sports?: number[];
    bookmakers?: string[];
    channels: string[];
  };
}
