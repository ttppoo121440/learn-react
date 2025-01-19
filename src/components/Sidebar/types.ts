import { LucideIcon } from 'lucide-react';

export interface NavItem {
  title: string;
  url?: string;
  icon?: LucideIcon;
  isActive?: boolean;
  onClick?: () => void;
  items?: NavItem[];
}

export interface NavMainProps {
  items: NavItem[];
}
