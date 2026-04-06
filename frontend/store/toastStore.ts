'use client';

import { create } from 'zustand';

export interface Toast {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  message: string;
  duration?: number;
}

interface ToastState {
  toasts: Toast[];
  addToast: (toast: Omit<Toast, 'id'>) => void;
  removeToast: (id: string) => void;
  clearToasts: () => void;
  success: (message: string, duration?: number) => void;
  error: (message: string, duration?: number) => void;
  warning: (message: string, duration?: number) => void;
  info: (message: string, duration?: number) => void;
}

export const useToastStore = create<ToastState>((set) => ({
  toasts: [],

  addToast: (toast) => {
    const id = Math.random().toString(36).substring(2, 9);
    const newToast = { ...toast, id };
    set((state) => ({ toasts: [...state.toasts, newToast] }));

    // Auto-remove after duration (default 5000ms)
    const duration = toast.duration || 5000;
    setTimeout(() => {
      set((state) => ({ toasts: state.toasts.filter((t) => t.id !== id) }));
    }, duration);
  },

  removeToast: (id) =>
    set((state) => ({ toasts: state.toasts.filter((t) => t.id !== id) })),

  clearToasts: () =>
    set({ toasts: [] }),

  success: (message, duration) =>
    set((state) => {
      const id = Math.random().toString(36).substring(2, 9);
      const newToast = { id, type: 'success' as const, message, duration };
      set((state) => ({ toasts: [...state.toasts, newToast] }));
      setTimeout(() => {
        set((state) => ({ toasts: state.toasts.filter((t) => t.id !== id) }));
      }, duration || 5000);
    },

  error: (message, duration) =>
    set((state) => {
      const id = Math.random().toString(36).substring(2, 9);
      const newToast = { id, type: 'error' as const, message, duration };
      set((state) => ({ toasts: [...state.toasts, newToast] }));
      setTimeout(() => {
        set((state) => ({ toasts: state.toasts.filter((t) => t.id !== id) }));
      }, duration || 5000);
    },

  warning: (message, duration) =>
    set((state) => {
      const id = Math.random().toString(36).substring(2, 9);
      const newToast = { id, type: 'warning' as const, message, duration };
      set((state) => ({ toasts: [...state.toasts, newToast] }));
      setTimeout(() => {
        set((state) => ({ toasts: state.toasts.filter((t) => t.id !== id) }));
      }, duration || 5000);
    },

  info: (message, duration) =>
    set((state) => {
      const id = Math.random().toString(36).substring(2, 9);
      const newToast = { id, type: 'info' as const, message, duration };
      set((state) => ({ toasts: [...state.toasts, newToast] }));
      setTimeout(() => {
        set((state) => ({ toasts: state.toasts.filter((t) => t.id !== id) }));
      }, duration || 5000);
    },
});
