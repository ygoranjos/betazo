export interface OddspapiParticipant {
  id: number;
  name: string;
  abbreviation?: string;
  rotationNumber?: number;
}

export interface OddspapiFixtureStatus {
  live: boolean;
  statusId: number;
  statusName?: string;
}

export interface OddspapiSport {
  id: number;
  name: string;
}

export interface OddspapiTournament {
  id: number;
  name: string;
  category?: string;
}

export interface OddspapiFixturePayload {
  fixtureId: string;
  status?: OddspapiFixtureStatus;
  participants?: {
    participant1?: OddspapiParticipant;
    participant2?: OddspapiParticipant;
  };
  sport?: OddspapiSport;
  tournament?: OddspapiTournament;
  startTime?: number;
}

export interface OddspapiRestFixture {
  fixtureId: string;
  participant1Id?: number;
  participant2Id?: number;
  participant1Name?: string;
  participant2Name?: string;
  sportId?: number;
  tournamentId?: number;
  statusId?: number;
  startTime?: number;
  updatedAt?: string;
}

export interface OddspapiFixturesPage {
  data: OddspapiRestFixture[];
  page: number;
  totalPages: number;
  total: number;
}
