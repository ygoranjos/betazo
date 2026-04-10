'use client';

import { useCallback, useMemo } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { authEndpoints, walletEndpoints } from '@/lib/api';
import { useAuthStore, selectUser, selectIsAuthenticated, selectIsLoading, selectError } from '@/store';
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
  accessToken: string;
  message?: string;
}

export interface ApiError {
  message: string;
  statusCode: number;
  error?: string[];
}

// ==================== Auth Hook ====================

export function useAuth() {
  const { user, isAuthenticated, isLoading, error, logout, clearError } = useAuthStore();
  const queryClient = useQueryClient();

  return useMemo(
    () => ({
      user,
      isAuthenticated,
      isLoading,
      error,
      logout: () => {
        authEndpoints.logout().catch(() => {});
        logout();
        queryClient.clear();
      },
      clearError,
    }),
    [user, isAuthenticated, isLoading, error, logout, clearError, queryClient]
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
      const response = await authEndpoints.login(email, password);
      return response.data;
    },
    onMutate: () => {
      setLoading(true);
      setError(null);
    },
    onSuccess: (data) => {
      setAuth(data.user, data.accessToken);
      queryClient.invalidateQueries({ queryKey: ['user'] });
    },
    onError: (error) => {
      const errorMessage =
        error.response?.data?.message ||
        error.response?.data?.error?.join(', ') ||
        'Login falhou. Tente novamente.';
      setError(errorMessage);
      toastError(errorMessage);
    },
    onSettled: () => {
      setLoading(false);
    },
  });

  return {
    login: mutation.mutateAsync,
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
      const response = await authEndpoints.register(email, username, password);
      return response.data;
    },
    onMutate: () => {
      setLoading(true);
      setError(null);
    },
    onSuccess: (data) => {
      setAuth(data.user, data.accessToken);
      queryClient.invalidateQueries({ queryKey: ['user'] });
    },
    onError: (error) => {
      const errorMessage =
        error.response?.data?.message ||
        error.response?.data?.error?.join(', ') ||
        'Cadastro falhou. Tente novamente.';
      setError(errorMessage);
      toastError(errorMessage);
    },
    onSettled: () => {
      setLoading(false);
    },
  });

  return {
    register: mutation.mutateAsync,
    isLoading: mutation.isPending,
    error: mutation.error,
    isSuccess: mutation.isSuccess,
  };
}

// ==================== Logout Hook ====================

export function useLogout() {
  const { logout } = useAuth();
  const queryClient = useQueryClient();

  return useCallback(() => {
    logout();
    queryClient.clear();
  }, [logout, queryClient]);
}

// ==================== Balance Hook ====================

export function useBalance() {
  const isAuthenticated = useAuthStore(selectIsAuthenticated);
  const setBalance = useAuthStore((state) => state.setBalance);
  const balance = useAuthStore((state) => state.balance);

  useQuery({
    queryKey: ['wallet', 'balance'],
    queryFn: async () => {
      const response = await walletEndpoints.getBalance();
      const raw = response.data?.balance;
      const value = raw != null ? parseFloat(raw) : null;
      setBalance(value);
      return value;
    },
    enabled: isAuthenticated,
    staleTime: 30_000,
    refetchInterval: 60_000,
  });

  return balance;
}

// ==================== Selectors ====================

export const useCurrentUser = () => useAuthStore(selectUser);
export const useIsAuthenticated = () => useAuthStore(selectIsAuthenticated);
export const useAuthLoading = () => useAuthStore(selectIsLoading);
export const useAuthError = () => useAuthStore(selectError);
