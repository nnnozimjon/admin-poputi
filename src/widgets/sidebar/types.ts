import { TablerIcon } from '@tabler/icons-react';

export interface SidebarNavItem {
  link: string;
  label: string;
  icon?: TablerIcon;
  children?: SidebarNavChild[];
}

export interface SidebarNavChild {
  link: string;
  label: string;
} 