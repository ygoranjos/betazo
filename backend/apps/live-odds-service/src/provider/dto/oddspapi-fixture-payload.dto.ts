// ─── Shared ───────────────────────────────────────────────────────────────────

export interface OddspapiParticipant {
  id: number;
  name: string;
  abbreviation?: string;
  rotationNumber?: number;
}

export interface OddspapiFixtureStatus {
  live: boolean;
  statusId: number; // 0=pending 1=live 2=finished 3=cancelled
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

// ─── WebSocket channel "fixtures" (delta — todos os campos opcionais exceto fixtureId) ─

export interface OddspapiFixturePayload {
  fixtureId: string;
  status?: OddspapiFixtureStatus;
  participants?: {
    participant1?: OddspapiParticipant; // time da casa
    participant2?: OddspapiParticipant; // time visitante
  };
  sport?: OddspapiSport;
  tournament?: OddspapiTournament;
  startTime?: number; // epoch em milissegundos
}

// ─── REST GET /fixtures (estrutura flat, campos com Id no nome) ───────────────

export interface OddspapiRestFixture {
  fixtureId: string;
  participant1Id?: number;
  participant2Id?: number;
  participant1Name?: string;
  participant2Name?: string;
  sportId?: number;
  tournamentId?: number;
  statusId?: number; // 0=pending 1=live 2=finished 3=cancelled
  startTime?: number; // epoch em milissegundos
  updatedAt?: string;
}

export interface OddspapiFixturesPage {
  data: OddspapiRestFixture[];
  page: number;
  totalPages: number;
  total: number;
}
