'use client';

import { useMatchesStore } from '@/store/matchesStore';

export type { LiveMatch, MatchMarket, MatchOutcome } from '@/store/matchesStore';

export interface UseAllLiveMatchesReturn {
  matches: ReturnType<typeof useMatchesStore.getState>['matches'];
  liveMatches: ReturnType<typeof useMatchesStore.getState>['matches'];
  preMatches: ReturnType<typeof useMatchesStore.getState>['matches'];
  isConnected: boolean;
  isLoading: boolean;
}

export function useAllLiveMatches(): UseAllLiveMatchesReturn {
  const matches = useMatchesStore((s) => s.matches);
  const isConnected = useMatchesStore((s) => s.isConnected);
  const isLoading = useMatchesStore((s) => s.isLoading);

  return {
    matches,
    liveMatches: matches.filter((m) => m.status === 'live'),
    preMatches: matches.filter((m) => m.status === 'pre_match'),
    isConnected,
    isLoading,
  };
}
