'use client';

import { create } from 'zustand';
import { isAxiosError } from 'axios';
import { betsEndpoints } from '@/lib/api';
import { useToastStore } from './toastStore';

export interface BetslipSelection {
  selectionId: string;  // chave única — "{externalId}:{marketKey}:{side}"
  matchId: string;
  marketId: string;
  matchLabel: string;
  teamName: string;
  currentOdd: number;
  newOdd?: number;      // preenchido quando o WebSocket detecta mudança de preço
  betType: string;
  sport: string;
}

interface ChangedSelection {
  selectionId: string;
  currentPrice: number | null;
}

interface BetslipState {
  selections: BetslipSelection[];
  multipleStake: number;
  isSubmitting: boolean;

  toggleSelection: (selection: BetslipSelection) => void;
  removeSelection: (selectionId: string) => void;
  markOddStale: (selectionId: string, newPrice: number) => void;
  acceptOdd: (selectionId: string) => void;
  setMultipleStake: (stake: number) => void;
  clearBetslip: () => void;
  placeBet: (stake: number) => Promise<void>;
}

const ODD_TOLERANCE = 0.0001;

export const useBetslipStore = create<BetslipState>()((set, get) => ({
  selections: [],
  multipleStake: 0,
  isSubmitting: false,

  toggleSelection: (selection) =>
    set((state) => {
      if (state.selections.some((s) => s.selectionId === selection.selectionId)) {
        return { selections: state.selections.filter((s) => s.selectionId !== selection.selectionId) };
      }
      const filtered = state.selections.filter(
        (s) => !(s.matchId === selection.matchId && s.marketId === selection.marketId),
      );
      return { selections: [...filtered, selection] };
    }),

  removeSelection: (selectionId) =>
    set((state) => ({
      selections: state.selections.filter((s) => s.selectionId !== selectionId),
    })),

  markOddStale: (selectionId, newPrice) =>
    set((state) => ({
      selections: state.selections.map((s) => {
        if (s.selectionId !== selectionId) return s;
        // Preço voltou ao original → limpa o aviso
        if (Math.abs(newPrice - s.currentOdd) <= ODD_TOLERANCE) {
          return { ...s, newOdd: undefined };
        }
        return { ...s, newOdd: newPrice };
      }),
    })),

  acceptOdd: (selectionId) =>
    set((state) => ({
      selections: state.selections.map((s) => {
        if (s.selectionId !== selectionId || s.newOdd === undefined) return s;
        return { ...s, currentOdd: s.newOdd, newOdd: undefined };
      }),
    })),

  setMultipleStake: (stake) => set({ multipleStake: stake }),

  clearBetslip: () => set({ selections: [], multipleStake: 0 }),

  placeBet: async (stake: number) => {
    const { selections, clearBetslip, markOddStale } = get();

    set({ isSubmitting: true });

    try {
      await betsEndpoints.placeBet({
        stake,
        selections: selections.map((s) => ({
          eventId: s.matchId,
          marketKey: s.marketId,
          selectionId: s.selectionId,
          price: s.currentOdd,
        })),
      });

      clearBetslip();
      useToastStore.getState().success('Aposta realizada com sucesso!');
    } catch (err) {
      if (isAxiosError(err)) {
        const status = err.response?.status;

        if (status === 409) {
          const data = err.response?.data as {
            changedSelections: ChangedSelection[];
          };
          data.changedSelections.forEach((cs) => {
            if (cs.currentPrice !== null) {
              markOddStale(cs.selectionId, cs.currentPrice);
            }
          });
          useToastStore.getState().warning(
            'Odds alteradas. Aceite as novas cotações para continuar.',
          );
        } else if (status === 400) {
          const msg = (err.response?.data as { message?: string })?.message;
          useToastStore.getState().error(msg ?? 'Saldo insuficiente.');
        } else {
          useToastStore.getState().error('Erro ao realizar aposta. Tente novamente.');
        }
      } else {
        useToastStore.getState().error('Erro inesperado. Tente novamente.');
      }
    } finally {
      set({ isSubmitting: false });
    }
  },
}));

// ─── Debug (dev only) ────────────────────────────────────────────────────────
if (process.env.NODE_ENV === 'development' && typeof window !== 'undefined') {
  (window as any).__betslipStore = useBetslipStore;
}

// ─── Seletores ────────────────────────────────────────────────────────────────

export const selectTotalOdds = (state: BetslipState): number =>
  state.selections.length === 0
    ? 0
    : state.selections.reduce((acc, s) => acc * s.currentOdd, 1);

export const selectPotentialReturn = (state: BetslipState): number =>
  selectTotalOdds(state) * state.multipleStake;

/** True se qualquer seleção tem odd desatualizada pendente de aceite. */
export const selectHasStaleOdds = (state: BetslipState): boolean =>
  state.selections.some((s) => s.newOdd !== undefined);
