import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';
import { useAuthStore } from '@/store/authStore';

// All requests go through Next.js proxy (/proxy/*) to avoid cross-origin cookie issues.
// The proxy rewrites to the real services internally.
const authApi = axios.create({
  baseURL: '/proxy/auth',
  withCredentials: true,
  headers: { 'Content-Type': 'application/json' },
});

const gatewayApi = axios.create({
  baseURL: '/proxy/gateway',
  withCredentials: true,
  headers: { 'Content-Type': 'application/json' },
});

const liveOddsApi = axios.create({
  baseURL: '/proxy/odds',
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
    await authApi.post('/refresh');
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

    // Skip refresh retry for auth endpoints to avoid infinite loops or spurious redirects
    const isAuthEndpoint = originalRequest?.url?.match(/\/(refresh|login|register)$/);

    if (error.response?.status === 401 && !originalRequest._retry && !isAuthEndpoint) {
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

  gatewayApi.interceptors.request.use((config) => {
    const token = useAuthStore.getState().accessToken;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });
}

export { authApi, gatewayApi, liveOddsApi };

export interface AuthEndpoints {
  login(email: string, password: string): Promise<import('axios').AxiosResponse<any>>;
  register(email: string, username: string, password: string): Promise<import('axios').AxiosResponse<any>>;
  logout(): Promise<import('axios').AxiosResponse<any>>;
}

export interface WalletEndpoints {
  getBalance(): Promise<import('axios').AxiosResponse<any>>;
}

export interface LiveOddsEndpoints {
  subscribe(eventId: string): Promise<import('axios').AxiosResponse<any>>;
}

export const authEndpoints: AuthEndpoints = {
  login: (email, password) => authApi.post('/login', { email, password }),
  register: (email, username, password) => authApi.post('/register', { email, username, password }),
  logout: () => authApi.post('/logout'),
};

export const walletEndpoints: WalletEndpoints = {
  getBalance: () => gatewayApi.get('/wallet/balance'),
};

export const matchesEndpoints = {
  getActive: () => gatewayApi.get('/matches'),
};

export const liveOddsEndpoints: LiveOddsEndpoints = {
  subscribe: (eventId) => liveOddsApi.post('/subscribe', { eventId }),
};

export interface PlaceBetPayload {
  stake: number;
  selections: {
    eventId: string;
    marketKey: string;
    selectionId: string;
    price: number;
  }[];
}

export const betsEndpoints = {
  placeBet: (payload: PlaceBetPayload) => gatewayApi.post('/bets', payload),
};
