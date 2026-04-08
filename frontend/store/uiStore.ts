import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// UI State Interface
interface UIState {
  // Mobile menu state
  mobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
  setMobileMenu: (open: boolean) => void;

  // Dashboard menu state
  dashboardMenuOpen: boolean;
  toggleDashboardMenu: () => void;
  setDashboardMenu: (open: boolean) => void;

  // Search state
  searchActive: boolean;
  toggleSearch: () => void;
  setSearchActive: (active: boolean) => void;

  // Modal states
  loginModalOpen: boolean;
  setLoginModal: (open: boolean) => void;
  registerModalOpen: boolean;
  setRegisterModal: (open: boolean) => void;
}

// Create UI store with persistence
export const useUIStore = create<UIState>()(
  persist(
    (set) => ({
      // Mobile menu
      mobileMenuOpen: false,
      toggleMobileMenu: () => set((state) => ({ mobileMenuOpen: !state.mobileMenuOpen })),
      setMobileMenu: (open) => set({ mobileMenuOpen: open }),

      // Dashboard menu
      dashboardMenuOpen: false,
      toggleDashboardMenu: () => set((state) => ({ dashboardMenuOpen: !state.dashboardMenuOpen })),
      setDashboardMenu: (open) => set({ dashboardMenuOpen: open }),

      // Search
      searchActive: false,
      toggleSearch: () => set((state) => ({ searchActive: !state.searchActive })),
      setSearchActive: (active) => set({ searchActive: active }),

      // Modals
      loginModalOpen: false,
      setLoginModal: (open) => set({ loginModalOpen: open }),
      registerModalOpen: false,
      setRegisterModal: (open) => set({ registerModalOpen: open }),
    }),
    {
      name: 'betazo-ui-storage',
      // Only persist certain states (don't persist transient UI states)
      partialize: (state) => ({}),
    }
  )
);
