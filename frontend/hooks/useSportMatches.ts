'use client';

import { useAllLiveMatches } from './useAllLiveMatches';

export function useSportMatches(sport: string) {
  const { matches, isConnected, isLoading } = useAllLiveMatches();

  return {
    liveMatches: matches.filter(
      (m) => m.status === 'live' && m.sport === sport && m.markets.length > 0,
    ),
    preMatches: matches.filter(
      (m) => m.status === 'pre_match' && m.sport === sport && m.markets.length > 0,
    ),
    isConnected,
    isLoading,
  };
}
