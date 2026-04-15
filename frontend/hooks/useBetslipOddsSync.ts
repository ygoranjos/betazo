'use client';

import { useEffect, useRef } from 'react';
import { io, Socket } from 'socket.io-client';
import { useBetslipStore } from '@/store';
import type { OddsDelta } from './useLiveOdds';

const GATEWAY_URL =
  process.env.NEXT_PUBLIC_API_GATEWAY_URL ?? 'http://localhost:3001';

const ODD_TOLERANCE = 0.0001;

/**
 * Mantém uma conexão WebSocket única para todos os eventos do betslip.
 * Quando uma odd muda, chama markOddStale no store.
 * Deve ser montado uma única vez — colocar no componente Betslip.
 */
export function useBetslipOddsSync() {
  const socketRef    = useRef<Socket | null>(null);
  const subscribedRef = useRef<Set<string>>(new Set());

  const selections   = useBetslipStore((s) => s.selections);
  const markOddStale = useBetslipStore((s) => s.markOddStale);

  // Mantém ref atualizada para evitar closure stale no handler do socket
  const selectionsRef = useRef(selections);
  selectionsRef.current = selections;

  // Conecta o socket uma única vez
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
      // Reinscreve em todas as salas após reconexão
      subscribedRef.current.forEach((id) => {
        socket.emit('subscribe_match', { eventId: id });
      });
    });

    socket.on('odds_updated', (delta: OddsDelta) => {
      const sel = selectionsRef.current.find(
        (s) => s.selectionId === delta.selection_id,
      );
      if (!sel) return;

      // Só marca como stale se a diferença ultrapassar a tolerância
      if (Math.abs(delta.price - sel.currentOdd) > ODD_TOLERANCE) {
        markOddStale(delta.selection_id, delta.price);
      }
    });

    return () => {
      socket.disconnect();
      socketRef.current = null;
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Gerencia inscrições nas salas conforme seleções entram/saem do betslip
  useEffect(() => {
    const socket = socketRef.current;
    const currentIds = new Set(selections.map((s) => s.matchId));

    // Inscreve novos eventos
    currentIds.forEach((id) => {
      if (!subscribedRef.current.has(id)) {
        subscribedRef.current.add(id);
        if (socket?.connected) socket.emit('subscribe_match', { eventId: id });
      }
    });

    // Desincreve eventos removidos
    subscribedRef.current.forEach((id) => {
      if (!currentIds.has(id)) {
        subscribedRef.current.delete(id);
        if (socket?.connected) socket.emit('unsubscribe_match', { eventId: id });
      }
    });
  }, [selections]);
}
