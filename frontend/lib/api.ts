import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';

// Service URLs
const AUTH_SERVICE_URL = process.env.NEXT_PUBLIC_AUTH_URL || 'http://localhost:3000';
const API_GATEWAY_URL = process.env.NEXT_PUBLIC_API_GATEWAY_URL || 'http://localhost:3001';
const LIVE_ODDS_URL = process.env.NEXT_PUBLIC_LIVE_ODDS_URL || 'http://localhost:3002';

// Create axios instances
const authApi = axios.create({
  baseURL: AUTH_SERVICE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const gatewayApi = axios.create({
  baseURL: API_GATEWAY_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const liveOddsApi = axios.create({
  baseURL: LIVE_ODDS_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Token getter from Zustand store (client-side only)
const getAuthToken = (): string | null => {
  if (typeof window === 'undefined') return null;
  try {
    const storage = localStorage.getItem('betazo-auth-storage');
    if (!storage) return null;
    const parsed = JSON.parse(storage);
    return parsed?.state?.token || null;
  } catch {
    return null;
  }
};

// Request interceptor - adds token and user data to headers
const addAuthInterceptor = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
  const token = getAuthToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  // Add user data to headers if available (useful for logging/tracing)
  if (typeof window !== 'undefined') {
    try {
      const storage = localStorage.getItem('betazo-auth-storage');
      if (storage) {
        const parsed = JSON.parse(storage);
        const user = parsed?.state?.user;
        if (user?.id) {
          config.headers['X-User-Id'] = user.id;
        }
        if (user?.username) {
          config.headers['X-User-Username'] = user.username;
        }
      }
    } catch {
      // Silently fail - headers are optional
    }
  }

  return config;
};

// Response interceptor - handles 401 errors globally
const createResponseInterceptor = () => {
  return (error: AxiosError) => {
    if (error.response?.status === 401) {
      // Token expired or invalid - clear auth and redirect
      if (typeof window !== 'undefined') {
        localStorage.removeItem('betazo-auth-storage');
        window.location.href = '/';
      }
    }
    return Promise.reject(error);
  };
};

// Apply interceptors to all API instances (only on client side)
if (typeof window !== 'undefined') {
  [authApi, gatewayApi, liveOddsApi].forEach((apiInstance) => {
    apiInstance.interceptors.request.use(addAuthInterceptor, (error) => Promise.reject(error));
    apiInstance.interceptors.response.use((response) => response, createResponseInterceptor());
  });
}

// API instances for direct use
export { authApi, gatewayApi, liveOddsApi };

// Type definitions
export interface AuthEndpoints {
  login(email: string, password: string): ReturnType<typeof authApi.post>;
  register(email: string, username: string, password: string): ReturnType<typeof authApi.post>;
}

export interface WalletEndpoints {
  getBalance(): ReturnType<typeof gatewayApi.get>;
}

export interface LiveOddsEndpoints {
  subscribe(eventId: string): ReturnType<typeof liveOddsApi.post>;
}

// Typed API endpoints
export const authEndpoints: AuthEndpoints = {
  login: (email: string, password: string) =>
    authApi.post('/auth/login', { email, password }),

  register: (email: string, username: string, password: string) =>
    authApi.post('/auth/register', { email, username, password }),
};

export const walletEndpoints: WalletEndpoints = {
  getBalance: () => gatewayApi.get('/wallet/balance'),
};

export const liveOddsEndpoints: LiveOddsEndpoints = {
  subscribe: (eventId: string) => liveOddsApi.post('/subscribe', { eventId }),
};

// Hook to get authenticated API instance with fresh token
export const useAuthenticatedApi = () => {
  const getFreshToken = (): string | null => getAuthToken();

  return {
    authApi,
    gatewayApi,
    liveOddsApi,
    getFreshToken,
  };
};
