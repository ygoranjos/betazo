// Common component props
export interface SelectOption {
  id: number | string;
  name: string;
  icon?: string;
  code?: string;
  href?: string;
}

// Layout props
export interface LayoutProps {
  children: React.ReactNode;
}

// Dashboard props
export interface DashboardLayoutProps extends LayoutProps {
  isOpen?: boolean;
  setIsOpen?: (value: boolean) => void;
}

// Navigation items
export interface MenuItem {
  id: number | string;
  name: string;
  icon?: string;
  href?: string;
  active?: boolean;
}

// Tab props
export interface TabProps {
  active?: string;
  id?: string;
}

// Modal props
export interface ModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  onOpen?: () => void;
}

// User types
export interface User {
  username?: string;
  uuid?: string;
  balance?: number;
  email?: string;
}

// Bonus types
export interface Bonus {
  id: number;
  title: string;
  description: string;
  code: string;
  image?: string;
}

// Transaction types
export interface Transaction {
  id: number;
  type: 'deposit' | 'withdraw' | 'bet' | 'win';
  amount: number;
  date: string;
  status: 'pending' | 'completed' | 'failed';
}

// Game types
export interface Game {
  id: number;
  name: string;
  category: string;
  image?: string;
  isLive?: boolean;
  isNew?: boolean;
  isPopular?: boolean;
}

// Bet types
export interface Bet {
  id: number;
  game: string;
  odds: number;
  amount: number;
  status: 'pending' | 'won' | 'lost';
}
