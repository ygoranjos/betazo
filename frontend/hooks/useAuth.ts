'use client';

import { useCallback, useEffect, useMemo } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { authEndpoints } from '@/lib/api';
import { useAuthStore, selectUser, selectToken, selectIsAuthenticated, selectIsLoading, selectError } from '@/store';
import { useToastStore } from '@/store';
import type { AxiosError } from 'axios';

// ==================== Types ====================

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  email: string;
  username: string;
  password: string;
}

export interface AuthResponse {
  user: {
    id: string;
    email: string;
    username: string;
    createdAt: string;
  };
  token: string;
  message?: string;
}

export interface ApiError {
  message: string;
  statusCode: number;
  error?: string[];
}

// ==================== Auth Hook ====================

/**
 * Main auth hook that provides authentication state and actions
 * This is a resilient hook that automatically handles token validation
 */
export function useAuth() {
  const { user, token, isAuthenticated, isLoading, error, logout, refreshToken, clearError } = useAuthStore();
  const queryClient = useQueryClient();

  // Check token validity on mount and periodically
  useEffect(() => {
    refreshToken();
    const interval = setInterval(refreshToken, 60000); // Check every minute
    return () => clearInterval(interval);
  }, [refreshToken]);

  return useMemo(
    () => ({
      user,
      token,
      isAuthenticated,
      isLoading,
      error,
      logout: () => {
        logout();
        queryClient.clear();
      },
      clearError,
    }),
    [user, token, isAuthenticated, isLoading, error, logout, clearError, queryClient]
  );
}

// ==================== Login Hook ====================

export function useLogin() {
  const setAuth = useAuthStore((state) => state.setAuth);
  const setLoading = useAuthStore((state) => state.setLoading);
  const setError = useAuthStore((state) => state.setError);
  const { error: toastError } = useToastStore();
  const queryClient = useQueryClient();

  const mutation = useMutation<AuthResponse, AxiosError<ApiError>, LoginCredentials>({
    mutationFn: async ({ email, password }) => {
      console.log('[useLogin] Calling authEndpoints.login with:', { email, password });
      const response = await authEndpoints.login(email, password);
      console.log('[useLogin] API response:', response.data);
      return response.data;
    },
    onMutate: () => {
      console.log('[useLogin] Starting login...');
      setLoading(true);
      setError(null);
    },
    onSuccess: (data) => {
      console.log('[useLogin] Login successful:', data);
      setAuth(data.user, data.token);
      queryClient.invalidateQueries({ queryKey: ['user'] });
    },
    onError: (error) => {
      console.error('[useLogin] Login error:', error);
      const errorMessage =
        error.response?.data?.message ||
        error.response?.data?.error?.join(', ') ||
        'Login failed. Please try again.';
      setError(errorMessage);
      toastError(errorMessage);
    },
    onSettled: () => {
      console.log('[useLogin] Login settled');
      setLoading(false);
    },
  });

  return {
    login: mutation.mutate,
    isLoading: mutation.isPending,
    error: mutation.error,
    isSuccess: mutation.isSuccess,
  };
}

// ==================== Register Hook ====================

export function useRegister() {
  const setAuth = useAuthStore((state) => state.setAuth);
  const setLoading = useAuthStore((state) => state.setLoading);
  const setError = useAuthStore((state) => state.setError);
  const { error: toastError } = useToastStore();
  const queryClient = useQueryClient();

  const mutation = useMutation<AuthResponse, AxiosError<ApiError>, RegisterData>({
    mutationFn: async ({ email, username, password }) => {
      console.log('[useRegister] Calling authEndpoints.register with:', { email, username, password });
      const response = await authEndpoints.register(email, username, password);
      console.log('[useRegister] API response:', response.data);
      return response.data;
    },
    onMutate: () => {
      console.log('[useRegister] Starting registration...');
      setLoading(true);
      setError(null);
    },
    onSuccess: (data) => {
      console.log('[useRegister] Registration successful:', data);
      setAuth(data.user, data.token);
      queryClient.invalidateQueries({ queryKey: ['user'] });
    },
    onError: (error) => {
      console.error('[useRegister] Registration error:', error);
      const errorMessage =
        error.response?.data?.message ||
        error.response?.data?.error?.join(', ') ||
        'Registration failed. Please try again.';
      setError(errorMessage);
      toastError(errorMessage);
    },
    onSettled: () => {
      console.log('[useRegister] Registration settled');
      setLoading(false);
    },
  });

  return {
    register: mutation.mutate,
    isLoading: mutation.isPending,
    error: mutation.error,
    isSuccess: mutation.isSuccess,
  };
}

// ==================== Logout Hook ====================

export function useLogout() {
  const { logout } = useAuth();
  const queryClient = useQueryClient();

  const handleLogout = useCallback(() => {
    logout();
    queryClient.clear();
  }, [logout, queryClient]);

  return handleLogout;
}

// ==================== User Data Hook ====================

/**
 * Hook to fetch and cache user data
 * Use this when you need fresh user data from server
 */
export function useUserData(refetchInterval?: number) {
  const { isAuthenticated } = useAuth();

  const query = useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      // In a real app, this would call a /me endpoint
      // For now, return data from store
      const user = useAuthStore.getState().user;
      if (!user) throw new Error('Not authenticated');
      return user;
    },
    enabled: isAuthenticated,
    staleTime: 5 * 60 * 1000, // 5 minutes
    refetchInterval,
  });

  return {
    user: query.data,
    isLoading: query.isLoading,
    error: query.error,
    refetch: query.refetch,
  };
}

// ==================== Selectors ====================

/**
 * Convenience selectors for direct store access
 * Use these when you need specific values without the full auth state
 */
export const useCurrentUser = () => useAuthStore(selectUser);
export const useAuthToken = () => useAuthStore(selectToken);
export const useIsAuthenticated = () => useAuthStore(selectIsAuthenticated);
export const useAuthLoading = () => useAuthStore(selectIsLoading);
export const useAuthError = () => useAuthStore(selectError);
