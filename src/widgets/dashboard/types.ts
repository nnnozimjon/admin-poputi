export interface SummaryItem {
  label: string;
  value: string;
  icon: 'users' | 'car' | 'coin' | 'report';
  color: string;
}

export interface RevenueTrendItem {
  name: string;
  value: number;
}

export interface TripDistributionItem {
  name: string;
  value: number;
  color: string;
}

export interface RecentTrip {
  id: string;
  driver: string;
  route: string;
  status: 'ACTIVE' | 'COMPLETED' | 'CANCELLED';
  passengers: number;
  revenue: number;
}

export interface UserGrowthItem {
  name: string;
  users: number;
}

export type StatusColor = 'blue' | 'green' | 'red'; 