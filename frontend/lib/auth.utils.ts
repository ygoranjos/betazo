'use client';

/**
 * Auth utility functions
 * These are standalone utilities that can be used outside of React components
 */

/**
 * Get the stored JWT token from localStorage
 * @returns The token string or null if not found
 */
export const getToken = (): string | null => {
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

/**
 * Get the stored user data from localStorage
 * @returns The user object or null if not found
 */
export const getUser = (): { id: string; email: string; username: string; createdAt?: string } | null => {
  if (typeof window === 'undefined') return null;
  try {
    const storage = localStorage.getItem('betazo-auth-storage');
    if (!storage) return null;
    const parsed = JSON.parse(storage);
    return parsed?.state?.user || null;
  } catch {
    return null;
  }
};

/**
 * Check if a token is expired
 * @param token - The JWT token to check
 * @returns True if the token is expired, false otherwise
 */
export const isTokenExpired = (token: string): boolean => {
  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    const now = Date.now() / 1000;
    return payload.exp < now;
  } catch {
    return true;
  }
};

/**
 * Check if the user is authenticated
 * @returns True if authenticated, false otherwise
 */
export const isAuthenticated = (): boolean => {
  const token = getToken();
  return token !== null && !isTokenExpired(token);
};

/**
 * Clear all auth data from localStorage
 */
export const clearAuthData = (): void => {
  if (typeof window === 'undefined') return;
  localStorage.removeItem('betazo-auth-storage');
};

/**
 * Get authorization headers for API requests
 * @returns An object with Authorization header
 */
export const getAuthHeaders = (): Record<string, string> => {
  const token = getToken();
  const headers: Record<string, string> = {};

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  return headers;
};

/**
 * Get user-related headers for API requests
 * @returns An object with user-related headers
 */
export const getUserHeaders = (): Record<string, string> => {
  const user = getUser();
  const headers: Record<string, string> = {};

  if (user?.id) {
    headers['X-User-Id'] = user.id;
  }
  if (user?.username) {
    headers['X-User-Username'] = user.username;
  }

  return headers;
};

/**
 * Get all auth and user headers combined
 * @returns An object with all auth-related headers
 */
export const getAllHeaders = (): Record<string, string> => {
  return {
    ...getAuthHeaders(),
    ...getUserHeaders(),
    'Content-Type': 'application/json',
  };
};
