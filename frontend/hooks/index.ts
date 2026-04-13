// Auth hooks
export {
  useAuth,
  useLogin,
  useRegister,
  useLogout,
  useBalance,
  useCurrentUser,
  useIsAuthenticated,
  useAuthLoading,
  useAuthError,
} from './useAuth';

// Live odds hook
export { useLiveOdds } from './useLiveOdds';
export type { OddsDelta, OddsState, UseLiveOddsReturn } from './useLiveOdds';

// Form hooks
export { useAppForm, useFormMutation } from './useForm';

// Types
export type {
  LoginCredentials,
  RegisterData,
  AuthResponse,
  ApiError,
} from './useAuth';

// Re-export toast store for convenience
export { useToastStore } from '@/store';
export type { Toast } from '@/store';

