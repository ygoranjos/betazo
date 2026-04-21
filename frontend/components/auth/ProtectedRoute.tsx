'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';

export interface ProtectedRouteProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  redirectTo?: string;
}

/**
 * ProtectedRoute component - protects routes that require authentication
 *
 * @param children - Content to show when authenticated
 * @param fallback - Optional fallback content to show while loading or when not authenticated
 * @param redirectTo - Route to redirect to when not authenticated (default: '/')
 */
export function ProtectedRoute({ children, fallback, redirectTo = '/' }: ProtectedRouteProps) {
  const router = useRouter();
  const { isAuthenticated, isLoading } = useAuth();

  useEffect(() => {
    // Redirect if not authenticated and not loading
    if (!isLoading && !isAuthenticated) {
      router.push(redirectTo);
    }
  }, [isAuthenticated, isLoading, router, redirectTo]);

  // Show loading state
  if (isLoading) {
    return (
      fallback || (
        <div className="flex min-h-screen items-center justify-center">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent motion-safe:animate-[spin_1s_linear_infinite]" />
        </div>
      )
    );
  }

  // Show fallback if not authenticated
  if (!isAuthenticated) {
    return fallback || null;
  }

  // Show protected content
  return <>{children}</>;
}
