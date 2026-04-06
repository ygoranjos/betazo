import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

// User interface - represents the authenticated user
export interface User {
  id: string;
  email: string;
  username: string;
  createdAt?: string;
}

// Auth state interface
interface AuthState {
  // State
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  _hasHydrated: boolean; // Flag to track hydration

  // Actions
  setAuth: (user: User, token: string) => void;
  logout: () => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  clearError: () => void;
  refreshToken: () => void;
  updateUser: (updates: Partial<User>) => void;
  setHasHydrated: (hasHydrated: boolean) => void;
}

// Helper to validate JWT token expiration (client-side only)
const isTokenExpired = (token: string): boolean => {
  if (typeof window === 'undefined') return false;

  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    const now = Date.now() / 1000;
    return payload.exp < now;
  } catch {
    return true; // If we can't parse, consider it expired
  }
};

// Create auth store with persistence
export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      // Initial state
      user: null,
      token: null,
      isAuthenticated: false,
      isLoading: false, // Don't start loading to avoid hydration mismatch
      error: null,
      _hasHydrated: false,

      // Set authentication data
      setAuth: (user, token) =>
        set({
          user,
          token,
          isAuthenticated: true,
          isLoading: false,
          error: null,
        }),

      // Clear authentication data
      logout: () =>
        set({
          user: null,
          token: null,
          isAuthenticated: false,
          isLoading: false,
          error: null,
        }),

      // Set loading state
      setLoading: (isLoading) => set({ isLoading }),

      // Set error state
      setError: (error) => set({ error }),

      // Clear error state
      clearError: () => set({ error: null }),

      // Check and refresh token validity
      refreshToken: () => {
        const { token, user, isAuthenticated, _hasHydrated } = get();

        // Don't do anything until hydrated
        if (!_hasHydrated) return;

        if (!token || !user) {
          set({ isAuthenticated: false, isLoading: false });
          return;
        }

        // Check if token is expired
        if (isTokenExpired(token)) {
          set({
            user: null,
            token: null,
            isAuthenticated: false,
            isLoading: false,
          });
          return;
        }

        // Token is valid, ensure authenticated state
        set({ isAuthenticated: true, isLoading: false });
      },

      // Update user data (e.g., after profile update)
      updateUser: (updates) =>
        set((state) => ({
          user: state.user ? { ...state.user, ...updates } : null,
        })),

      setHasHydrated: (hasHydrated) => set({ _hasHydrated: hasHydrated }),
    }),
    {
      name: 'betazo-auth-storage',
      storage: createJSONStorage(() => {
        // Use localStorage on client, memory on server
        if (typeof window !== 'undefined') {
          return localStorage;
        }
        return {
          getItem: () => null,
          setItem: () => {},
          removeItem: () => {},
        };
      }),
      // Only persist what's needed (don't persist _hasHydrated or isLoading)
      partialize: (state) => ({
        user: state.user,
        token: state.token,
        isAuthenticated: state.isAuthenticated,
      }),
      // Handle hydration completion
      onRehydrateStorage: () => (state) => {
        if (state) {
          // Mark as hydrated
          state._hasHydrated = true;

          // Check if token is still valid
          if (state.token && !isTokenExpired(state.token)) {
            state.isAuthenticated = true;
          } else {
            state.token = null;
            state.user = null;
            state.isAuthenticated = false;
          }
          state.isLoading = false;
        }
      },
    }
  )
);

// Selectors for common use cases
export const selectUser = (state: AuthState) => state.user;
export const selectToken = (state: AuthState) => state.token;
export const selectIsAuthenticated = (state: AuthState) => state.isAuthenticated;
export const selectIsLoading = (state: AuthState) => state.isLoading;
export const selectError = (state: AuthState) => state.error;

// Helper hook to get current user data (useful in components)
export const useCurrentUser = () => useAuthStore(selectUser);
export const useAuthToken = () => useAuthStore(selectToken);
export const useIsAuthenticated = () => useAuthStore(selectIsAuthenticated);
