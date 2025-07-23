import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { IconLogout, IconSwitchHorizontal, IconChevronDown, IconChevronRight, } from '@tabler/icons-react';
import classes from './style.module.css';
import { SIDEBAR_NAV } from './constants';
export function AdminSidebar() {
    const [active, setActive] = useState('Dashboard');
    const [expandedItems, setExpandedItems] = useState([]);
    const toggleExpand = (label) => {
        setExpandedItems(prev => prev.includes(label)
            ? prev.filter(item => item !== label)
            : [...prev, label]);
    };
    const renderLink = (item) => {
        const isExpanded = expandedItems.includes(item.label);
        const hasChildren = item.children && item.children.length > 0;
        return (_jsxs("div", { children: [_jsxs("a", { className: classes.link, "data-active": item.label === active || undefined, href: item.link, onClick: (event) => {
                        event.preventDefault();
                        setActive(item.label);
                        if (hasChildren) {
                            toggleExpand(item.label);
                        }
                    }, children: [_jsxs("div", { style: { display: 'flex', alignItems: 'center' }, children: [item.icon && _jsx(item.icon, { className: classes.linkIcon, stroke: 1.5 }), _jsx("span", { children: item.label })] }), hasChildren && (isExpanded ?
                            _jsx(IconChevronDown, { className: classes.linkIcon, stroke: 1.5 }) :
                            _jsx(IconChevronRight, { className: classes.linkIcon, stroke: 1.5 }))] }), hasChildren && isExpanded && (_jsx("div", { style: { marginLeft: '20px' }, children: item.children.map((child) => (_jsx("a", { className: classes.link, "data-active": child.label === active || undefined, href: child.link, onClick: (event) => {
                            event.preventDefault();
                            setActive(child.label);
                        }, children: _jsx("span", { children: child.label }) }, child.label))) }))] }, item.label));
    };
    return (_jsxs("nav", { className: classes.navbar, children: [_jsx("div", { className: classes.navbarMain, children: SIDEBAR_NAV.map(renderLink) }), _jsxs("div", { className: classes.footer, children: [_jsxs("a", { href: "#", className: classes.link, onClick: (event) => event.preventDefault(), children: [_jsx(IconSwitchHorizontal, { className: classes.linkIcon, stroke: 1.5 }), _jsx("span", { children: "Change account" })] }), _jsxs("a", { href: "#", className: classes.link, onClick: (event) => event.preventDefault(), children: [_jsx(IconLogout, { className: classes.linkIcon, stroke: 1.5 }), _jsx("span", { children: "Logout" })] })] })] }));
}
