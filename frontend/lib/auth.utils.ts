'use client';

/**
 * Get user data from the Zustand persisted store
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
 * Check if the user has a persisted session (does not validate the cookie/token)
 */
export const isAuthenticated = (): boolean => {
  return getUser() !== null;
};

/**
 * Clear all auth data from localStorage
 */
export const clearAuthData = (): void => {
  if (typeof window === 'undefined') return;
  localStorage.removeItem('betazo-auth-storage');
};
