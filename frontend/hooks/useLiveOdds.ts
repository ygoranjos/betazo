'use client';

import { useEffect, useRef, useState } from 'react';
import { io, Socket } from 'socket.io-client';

// Payload emitido pelo backend no evento odds_updated
export interface OddsDelta {
  event_id: string;
  market_key: string;
  selection_id: string;
  outcome_name: string;
  price: number;
  source: 'base+margin' | 'override+margin' | 'freeze';
  frozen?: boolean;
  updated_at: string;
}

// Estado indexado por selection_id para acesso O(1) nos componentes
export type OddsState = Record<string, OddsDelta>;

export interface UseLiveOddsReturn {
  odds: OddsState;
  isConnected: boolean;
  error: string | null;
}

const GATEWAY_URL =
  process.env.NEXT_PUBLIC_WS_URL ||
  (typeof window !== 'undefined' ? window.location.origin : '');

export function useLiveOdds(eventId: string): UseLiveOddsReturn {
  const [odds, setOdds] = useState<OddsState>({});
  const [isConnected, setIsConnected] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const socketRef = useRef<Socket | null>(null);

  useEffect(() => {
    if (!eventId) return;

    const socket = io(GATEWAY_URL, {
      transports: ['websocket'],
      reconnection: true,
      reconnectionAttempts: Infinity,
      reconnectionDelay: 1000,      // começa em 1s
      reconnectionDelayMax: 30000,  // teto de 30s (espelho do backend)
    });

    socketRef.current = socket;

    socket.on('connect', () => {
      setIsConnected(true);
      setError(null);
      // (re)inscreve na sala do evento — executado também após cada reconexão
      socket.emit('subscribe_match', { eventId });
    });

    socket.on('disconnect', () => {
      setIsConnected(false);
    });

    socket.on('connect_error', (err: Error) => {
      setError(`Erro de conexão: ${err.message}`);
    });

    socket.on('odds_updated', (delta: OddsDelta) => {
      setOdds((prev) => ({
        ...prev,
        [delta.selection_id]: delta,
      }));
    });

    return () => {
      socket.emit('unsubscribe_match', { eventId });
      socket.disconnect();
      socketRef.current = null;
    };
  }, [eventId]);

  return { odds, isConnected, error };
}
