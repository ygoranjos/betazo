'use client';

import { useToastStore } from '@/store';
import { useEffect } from 'react';

/**
 * Toast Component - Displays notifications from the toast store
 *
 * Place this component in your root layout to display all toast notifications.
 */
export function ToastContainer() {
  const { toasts, removeToast } = useToastStore();

  if (toasts.length === 0) return null;

  return (
    <div className="toast-container position-fixed bottom-0 end-0 p-3" style={{ zIndex: 10000000 }}>
      {toasts.map((toast) => (
        <Toast key={toast.id} toast={toast} onRemove={() => removeToast(toast.id)} />
      ))}
    </div>
  );
}

interface ToastProps {
  toast: {
    id: string;
    type: 'success' | 'error' | 'warning' | 'info';
    message: string;
  };
  onRemove: () => void;
}

function Toast({ toast, onRemove }: ToastProps) {
  useEffect(() => {
    // Auto-remove after duration is handled by the store
    return () => {};
  }, []);

  const bgClass = {
    success: 'bg-success',
    error: 'bg-danger',
    warning: 'bg-warning',
    info: 'bg-info',
  }[toast.type];

  const icon = {
    success: 'fa-check-circle',
    error: 'fa-exclamation-circle',
    warning: 'fa-exclamation-triangle',
    info: 'fa-info-circle',
  }[toast.type];

  return (
    <div
      className={`toast show ${bgClass} text-white`}
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div className="toast-header d-flex justify-content-between align-items-center">
        <i className={`fas ${icon} me-2`} />
        <strong className="me-auto">
          {toast.type.charAt(0).toUpperCase() + toast.type.slice(1)}
        </strong>
        <button
          type="button"
          className="btn-close btn-close-white"
          onClick={onRemove}
          aria-label="Close"
        />
      </div>
      <div className="toast-body">{toast.message}</div>
    </div>
  );
}

export default ToastContainer;
