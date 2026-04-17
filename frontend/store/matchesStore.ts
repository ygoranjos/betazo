'use client';

import { create } from 'zustand';
import { io, Socket } from 'socket.io-client';
import { matchesEndpoints } from '@/lib/api';

export interface MatchOutcome {
  selectionId: string;
  name: string;
  price: number;
}

export interface MatchMarket {
  id: string;
  name: string;
  outcomes: MatchOutcome[];
}

export interface LiveMatch {
  id: string;
  externalId: string;
  sport: string;
  competition: string;
  homeTeam: string;
  awayTeam: string;
  startTime: string;
  status: 'pre_match' | 'live' | 'suspended' | 'settled';
  markets: MatchMarket[];
}

interface OddsUpdatedPayload {
  eventId: string;
  markets: MatchMarket[];
}

interface MatchesState {
  matches: LiveMatch[];
  isConnected: boolean;
  isLoading: boolean;
  _initialized: boolean;

  _setMatches: (matches: LiveMatch[]) => void;
  _setConnected: (connected: boolean) => void;
  _setLoading: (loading: boolean) => void;
  _applyOddsUpdate: (delta: OddsUpdatedPayload) => void;
  _markInitialized: () => void;
}

export const useMatchesStore = create<MatchesState>()((set) => ({
  matches: [],
  isConnected: false,
  isLoading: true,
  _initialized: false,

  _setMatches: (matches) => set({ matches }),
  _setConnected: (isConnected) => set({ isConnected }),
  _setLoading: (isLoading) => set({ isLoading }),
  _applyOddsUpdate: (delta) =>
    set((state) => ({
      matches: state.matches.map((match) => {
        if (match.externalId !== delta.eventId) return match;
        const updatedIds = new Set(delta.markets.map((m) => m.id));
        const preserved = match.markets.filter((m) => !updatedIds.has(m.id));
        return { ...match, markets: [...preserved, ...delta.markets] };
      }),
    })),
  _markInitialized: () => set({ _initialized: true }),
}));

// ─── Singleton WebSocket — iniciado uma única vez no browser ──────────────────

let socket: Socket | null = null;

export function initMatchesSocket(): void {
  if (typeof window === 'undefined') return;
  if (socket !== null) return; // já inicializado

  const store = useMatchesStore.getState();
  store._markInitialized();

  const GATEWAY_URL =
    process.env.NEXT_PUBLIC_API_GATEWAY_URL ?? 'http://localhost:3001';

  // Carregamento inicial via REST
  store._setLoading(true);
  matchesEndpoints
    .getActive()
    .then((res) => store._setMatches(res.data as LiveMatch[]))
    .catch(() => {})
    .finally(() => store._setLoading(false));

  // Única conexão WebSocket para toda a aplicação
  socket = io(GATEWAY_URL, {
    transports: ['websocket'],
    reconnection: true,
    reconnectionAttempts: Infinity,
    reconnectionDelay: 1000,
    reconnectionDelayMax: 30000,
  });

  socket.on('connect', () => {
    useMatchesStore.getState()._setConnected(true);
    socket!.emit('subscribe_all');
  });

  socket.on('disconnect', () => {
    useMatchesStore.getState()._setConnected(false);
  });

  socket.on('odds_updated', (delta: OddsUpdatedPayload) => {
    useMatchesStore.getState()._applyOddsUpdate(delta);
  });
}
