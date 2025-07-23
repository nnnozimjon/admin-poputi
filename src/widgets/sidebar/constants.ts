import {
  IconCar,
  IconCurrencyDollar,
  IconDashboard,
  IconGift,
  IconMapPin,
  IconMessageCircle,
  IconSettings,
  IconUsers,
  IconWorld,
} from '@tabler/icons-react';

export const SIDEBAR_NAV = [
  { link: '/dashboard', label: 'Dashboard', icon: IconDashboard },
  { 
    link: '/users', 
    label: 'User Management', 
    icon: IconUsers,
    children: [
      { link: '/users/all', label: 'All Users' },
      { link: '/users/drivers', label: 'All Drivers' },
      { link: '/users/driver-preferences', label: 'Driver Preferences' },
      { link: '/users/suspended', label: 'Suspended Users' }
    ]
  },
  { 
    link: '/trips', 
    label: 'Trip Management', 
    icon: IconCar,
    children: [
      { link: '/trips/all', label: 'All Trips' },
      { link: '/trips/bookings', label: 'Bookings' },
      { link: '/trips/seats', label: 'Trip Seats' }
    ]
  },
  { link: '/payments', label: 'Payments', icon: IconCurrencyDollar },
  { link: '/analytics', label: 'Analytics', icon: IconWorld },
  { 
    link: '/moderation', 
    label: 'Moderation', 
    icon: IconMessageCircle,
    children: [
      { link: '/moderation/images', label: 'Image Review' },
      { link: '/moderation/reports', label: 'Reported Users' }
    ]
  },
  { 
    link: '/marketing', 
    label: 'Marketing', 
    icon: IconGift,
    children: [
      { link: '/marketing/email', label: 'Send Email' },
      { link: '/marketing/sms', label: 'Send SMS' },
      { link: '/marketing/campaigns', label: 'Campaign Logs' }
    ]
  },
  { 
    link: '/routes', 
    label: 'Routes & Cities', 
    icon: IconMapPin,
  },
  { 
    link: '/settings', 
    label: 'Settings', 
    icon: IconSettings,
    children: [
      { link: '/settings/preferences', label: 'Preferences' },
      { link: '/settings/car-body-types', label: 'Car Body Types' },
      { link: '/settings/car-brands', label: 'Car Brands' },
      { link: '/settings/car-models', label: 'Car Models' },
      { link: '/settings/car-colors', label: 'Car Colors' },
      { link: '/settings/car-seats', label: 'Car Seats' }
    ]
  }
]; 