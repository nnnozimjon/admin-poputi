import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AppShell, Burger, Group, Title, ActionIcon, useMantineColorScheme } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Outlet } from 'react-router-dom';
import { AdminSidebar } from '@/widgets';
import { IconSun, IconMoonStars } from '@tabler/icons-react';
export const MainLayout = () => {
    const [opened, { toggle }] = useDisclosure();
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    return (_jsxs(AppShell, { header: { height: 60 }, navbar: {
            width: 280,
            breakpoint: 'sm',
            collapsed: { mobile: !opened },
        }, padding: 0, children: [_jsx(AppShell.Header, { children: _jsxs(Group, { h: "100%", px: "md", justify: "space-between", children: [_jsxs(Group, { children: [_jsx(Burger, { opened: opened, onClick: toggle, hiddenFrom: "sm", size: "sm" }), _jsx(Title, { order: 3, children: "Admin Panel" })] }), _jsx(ActionIcon, { variant: "default", onClick: () => toggleColorScheme(), size: "lg", children: colorScheme === 'dark' ? _jsx(IconSun, { size: "1.2rem" }) : _jsx(IconMoonStars, { size: "1.2rem" }) })] }) }), _jsx(AppShell.Navbar, { children: _jsx(AdminSidebar, {}) }), _jsx(AppShell.Main, { pt: 60, pl: 280, children: _jsx(Outlet, {}) })] }));
};
