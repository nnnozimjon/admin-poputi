import { useState } from 'react';
import {
  IconCar,
  IconCurrencyDollar,
  IconDashboard,
  IconGift,
  IconLogout,
  IconMapPin,
  IconMessageCircle,
  IconSettings,
  IconSwitchHorizontal,
  IconUsers,
  IconWorld,
  IconChevronDown,
  IconChevronRight,
} from '@tabler/icons-react';
import classes from './style.module.css';
import { SIDEBAR_NAV } from './constants';
import type { SidebarNavItem } from './types';

export function AdminSidebar() {
  const [active, setActive] = useState('Dashboard');
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleExpand = (label: string) => {
    setExpandedItems(prev => 
      prev.includes(label) 
        ? prev.filter(item => item !== label)
        : [...prev, label]
    );
  };

  const renderLink = (item: SidebarNavItem) => {
    const isExpanded = expandedItems.includes(item.label);
    const hasChildren = item.children && item.children.length > 0;

    return (
      <div key={item.label}>
        <a
          className={classes.link}
          data-active={item.label === active || undefined}
          href={item.link}
          onClick={(event) => {
            event.preventDefault();
            setActive(item.label);
            if (hasChildren) {
              toggleExpand(item.label);
            }
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {item.icon && <item.icon className={classes.linkIcon} stroke={1.5} />}
            <span>{item.label}</span>
          </div>
          {hasChildren && (
            isExpanded ? 
              <IconChevronDown className={classes.linkIcon} stroke={1.5} /> :
              <IconChevronRight className={classes.linkIcon} stroke={1.5} />
          )}
        </a>
        {hasChildren && isExpanded && (
          <div style={{ marginLeft: '20px' }}>
            {item.children!.map((child) => (
              <a
                key={child.label}
                className={classes.link}
                data-active={child.label === active || undefined}
                href={child.link}
                onClick={(event) => {
                  event.preventDefault();
                  setActive(child.label);
                }}
              >
                <span>{child.label}</span>
              </a>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>
        {SIDEBAR_NAV.map(renderLink)}
      </div>

      <div className={classes.footer}>
        <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
          <IconSwitchHorizontal className={classes.linkIcon} stroke={1.5} />
          <span>Change account</span>
        </a>

        <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>Logout</span>
        </a>
      </div>
    </nav>
  );
}