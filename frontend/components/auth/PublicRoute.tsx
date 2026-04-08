'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';

interface PublicRouteProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  redirectTo?: string;
}

/**
 * PublicRoute component - protects routes that should only be accessible to non-authenticated users
 * (e.g., login, register pages)
 *
 * @param children - Content to show when not authenticated
 * @param fallback - Optional fallback content to show while loading or when authenticated
 * @param redirectTo - Route to redirect to when authenticated (default: '/dashboard')
 */
export function PublicRoute({ children, fallback, redirectTo = '/dashboard' }: PublicRouteProps) {
  const router = useRouter();
  const { isAuthenticated, isLoading } = useAuth();

  useEffect(() => {
    // Redirect if already authenticated and not loading
    if (!isLoading && isAuthenticated) {
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

  // Show fallback if authenticated
  if (isAuthenticated) {
    return fallback || null;
  }

  // Show public content
  return <>{children}</>;
}
