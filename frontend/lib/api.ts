import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';

const AUTH_SERVICE_URL = process.env.NEXT_PUBLIC_AUTH_URL || 'http://localhost:3000';
const API_GATEWAY_URL = process.env.NEXT_PUBLIC_API_GATEWAY_URL || 'http://localhost:3001';
const LIVE_ODDS_URL = process.env.NEXT_PUBLIC_LIVE_ODDS_URL || 'http://localhost:3002';

// withCredentials ensures cookies are sent automatically on every request
const authApi = axios.create({
  baseURL: AUTH_SERVICE_URL,
  withCredentials: true,
  headers: { 'Content-Type': 'application/json' },
});

const gatewayApi = axios.create({
  baseURL: API_GATEWAY_URL,
  withCredentials: true,
  headers: { 'Content-Type': 'application/json' },
});

const liveOddsApi = axios.create({
  baseURL: LIVE_ODDS_URL,
  withCredentials: true,
  headers: { 'Content-Type': 'application/json' },
});

// Tracks whether a refresh is already in progress to avoid parallel refresh calls
let isRefreshing = false;
let refreshSubscribers: Array<(success: boolean) => void> = [];

const notifyRefreshSubscribers = (success: boolean) => {
  refreshSubscribers.forEach((cb) => cb(success));
  refreshSubscribers = [];
};

const tryRefreshToken = async (): Promise<boolean> => {
  if (isRefreshing) {
    return new Promise((resolve) => {
      refreshSubscribers.push(resolve);
    });
  }

  isRefreshing = true;
  try {
    await authApi.post('/auth/refresh');
    notifyRefreshSubscribers(true);
    return true;
  } catch {
    notifyRefreshSubscribers(false);
    return false;
  } finally {
    isRefreshing = false;
  }
};

// Response interceptor: on 401 try to refresh once, then retry the original request
const createResponseInterceptor = (instance: typeof authApi) => {
  return async (error: AxiosError) => {
    const originalRequest = error.config as InternalAxiosRequestConfig & { _retry?: boolean };

    // Skip refresh retry for the refresh endpoint itself to avoid infinite loop
    const isRefreshEndpoint = originalRequest?.url?.includes('/auth/refresh');

    if (error.response?.status === 401 && !originalRequest._retry && !isRefreshEndpoint) {
      originalRequest._retry = true;

      const refreshed = await tryRefreshToken();

      if (refreshed) {
        return instance(originalRequest);
      }

      // Refresh failed — clear local user state and redirect
      if (typeof window !== 'undefined') {
        localStorage.removeItem('betazo-auth-storage');
        window.location.href = '/';
      }
    }

    return Promise.reject(error);
  };
};

if (typeof window !== 'undefined') {
  [authApi, gatewayApi, liveOddsApi].forEach((instance) => {
    instance.interceptors.response.use(
      (response) => response,
      createResponseInterceptor(instance),
    );
  });
}

export { authApi, gatewayApi, liveOddsApi };

export interface AuthEndpoints {
  login(email: string, password: string): ReturnType<typeof authApi.post>;
  register(email: string, username: string, password: string): ReturnType<typeof authApi.post>;
  logout(): ReturnType<typeof authApi.post>;
}

export interface WalletEndpoints {
  getBalance(): ReturnType<typeof gatewayApi.get>;
}

export interface LiveOddsEndpoints {
  subscribe(eventId: string): ReturnType<typeof liveOddsApi.post>;
}

export const authEndpoints: AuthEndpoints = {
  login: (email, password) => authApi.post('/auth/login', { email, password }),
  register: (email, username, password) => authApi.post('/auth/register', { email, username, password }),
  logout: () => authApi.post('/auth/logout'),
};

export const walletEndpoints: WalletEndpoints = {
  getBalance: () => gatewayApi.get('/wallet/balance'),
};

export const liveOddsEndpoints: LiveOddsEndpoints = {
  subscribe: (eventId) => liveOddsApi.post('/subscribe', { eventId }),
};
