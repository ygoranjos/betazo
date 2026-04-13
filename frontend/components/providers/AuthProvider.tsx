'use client';

import { useEffect, createContext, useContext, type ReactNode } from 'react';
import { useAuthStore } from '@/store';

interface AuthContextType {
  isReady: boolean;
}

const AuthContext = createContext<AuthContextType>({ isReady: false });

interface AuthProviderProps {
  children: ReactNode;
}

/**
 * AuthProvider - Manages initial authentication state on app load
 *
 * This provider ensures that the auth state is properly loaded from localStorage
 * before rendering any protected routes. It prevents flickering and ensures
 * the app knows the authentication status immediately.
 */
export function AuthProvider({ children }: AuthProviderProps) {
  const { setHasHydrated } = useAuthStore();

  useEffect(() => {
    setHasHydrated(true);
  }, [setHasHydrated]);

  const value = {
    isReady: true,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

/**
 * Hook to access the auth context
 */
export function useAuthContext() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuthContext must be used within an AuthProvider');
  }
  return context;
}
