'use client';

import { useEffect, useRef, useState } from 'react';
import { io, Socket } from 'socket.io-client';
import { matchesEndpoints } from '@/lib/api';
import type { OddsDelta } from './useLiveOdds';

export interface MatchOutcome {
  selectionId: string;
  name: string;
  price: number;
}

export interface MatchMarket {
  id: string; // 'h2h' | 'totals' | 'spreads' | ...
  name: string;
  outcomes: MatchOutcome[];
}

export interface LiveMatch {
  id: string;
  sport: string;
  competition: string;
  homeTeam: string;
  awayTeam: string;
  startTime: string;
  status: 'pre_match' | 'live' | 'suspended' | 'settled';
  markets: MatchMarket[];
}

export interface UseAllLiveMatchesReturn {
  matches: LiveMatch[];
  liveMatches: LiveMatch[];
  preMatches: LiveMatch[];
  isConnected: boolean;
  isLoading: boolean;
}

const GATEWAY_URL =
  process.env.NEXT_PUBLIC_API_GATEWAY_URL ?? 'http://localhost:3001';

export function useAllLiveMatches(): UseAllLiveMatchesReturn {
  const [matches, setMatches] = useState<LiveMatch[]>([]);
  const [isConnected, setIsConnected] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const socketRef = useRef<Socket | null>(null);

  // Carregamento inicial via REST — garante que o usuário vê dados ao abrir a página
  useEffect(() => {
    matchesEndpoints
      .getActive()
      .then((res) => {
        setMatches(res.data as LiveMatch[]);
      })
      .catch(() => {
        // silently fail — WebSocket will keep data in sync
      })
      .finally(() => setIsLoading(false));
  }, []);

  // WebSocket — atualiza preços em tempo real sobre o estado inicial
  useEffect(() => {
    const socket = io(GATEWAY_URL, {
      transports: ['websocket'],
      reconnection: true,
      reconnectionAttempts: Infinity,
      reconnectionDelay: 1000,
      reconnectionDelayMax: 30000,
    });

    socketRef.current = socket;

    socket.on('connect', () => {
      setIsConnected(true);
      socket.emit('subscribe_all');
    });

    socket.on('disconnect', () => setIsConnected(false));

    socket.on('odds_updated', (delta: OddsDelta) => {
      setMatches((prev) =>
        prev.map((match) => {
          if (match.id !== delta.event_id) return match;
          return {
            ...match,
            markets: match.markets.map((market) => {
              if (market.id !== delta.market_key) return market;
              return {
                ...market,
                outcomes: market.outcomes.map((outcome) =>
                  outcome.selectionId === delta.selection_id
                    ? { ...outcome, price: delta.price }
                    : outcome,
                ),
              };
            }),
          };
        }),
      );
    });

    return () => {
      socket.emit('unsubscribe_all');
      socket.disconnect();
      socketRef.current = null;
    };
  }, []);

  return {
    matches,
    liveMatches: matches.filter((m) => m.status === 'live'),
    preMatches: matches.filter((m) => m.status === 'pre_match'),
    isConnected,
    isLoading,
  };
}
