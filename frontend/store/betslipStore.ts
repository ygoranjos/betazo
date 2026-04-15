'use client';

import { create } from 'zustand';

export interface BetslipSelection {
  selectionId: string;  // chave única — "{externalId}:{marketKey}:{side}"
  matchId: string;
  marketId: string;
  matchLabel: string;   // "Home Team vs Away Team"
  teamName: string;     // nome do resultado — "Casa", "Over 2.5", etc.
  currentOdd: number;
  betType: string;      // "1x2", "Over/Under"
  sport: string;
}

interface BetslipState {
  selections: BetslipSelection[];
  multipleStake: number;

  toggleSelection: (selection: BetslipSelection) => void;
  removeSelection: (selectionId: string) => void;
  setMultipleStake: (stake: number) => void;
  clearBetslip: () => void;
}

export const useBetslipStore = create<BetslipState>()((set) => ({
  selections: [],
  multipleStake: 0,

  toggleSelection: (selection) =>
    set((state) => {
      // Clicou na mesma seleção → remove (toggle off)
      if (state.selections.some((s) => s.selectionId === selection.selectionId)) {
        return { selections: state.selections.filter((s) => s.selectionId !== selection.selectionId) };
      }
      // Já existe outra seleção do mesmo mercado na mesma partida → substitui
      const filtered = state.selections.filter(
        (s) => !(s.matchId === selection.matchId && s.marketId === selection.marketId),
      );
      return { selections: [...filtered, selection] };
    }),

  removeSelection: (selectionId) =>
    set((state) => ({
      selections: state.selections.filter((s) => s.selectionId !== selectionId),
    })),

  setMultipleStake: (stake) => set({ multipleStake: stake }),

  clearBetslip: () => set({ selections: [], multipleStake: 0 }),
}));

// ─── Seletores de cálculo do Multiple ────────────────────────────────────────

/** Produto de todas as odds individuais. Retorna 0 se não há seleções. */
export const selectTotalOdds = (state: BetslipState): number =>
  state.selections.length === 0
    ? 0
    : state.selections.reduce((acc, s) => acc * s.currentOdd, 1);

/** Retorno potencial = Odd Total × Valor Apostado. */
export const selectPotentialReturn = (state: BetslipState): number =>
  selectTotalOdds(state) * state.multipleStake;
