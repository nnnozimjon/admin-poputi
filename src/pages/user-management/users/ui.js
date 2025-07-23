import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Box, Table, Button, Select, Group, Text, Avatar, Badge, Paper, Pagination, } from '@mantine/core';
const mockUsers = [
    {
        id: 1,
        name: 'Sarah Wilson',
        email: 'sarah.wilson@example.com',
        phone: '+1 (555) 123-4567',
        role: 'Admin',
        status: 'Active',
        dateCreated: '2024-01-15',
        avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
    },
    {
        id: 2,
        name: 'Michael Chen',
        email: 'michael.chen@example.com',
        phone: '+1 (555) 234-5678',
        role: 'User',
        status: 'Active',
        dateCreated: '2024-01-14',
        avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
    },
    {
        id: 3,
        name: 'Emily Brown',
        email: 'emily.brown@example.com',
        phone: '+1 (555) 345-6789',
        role: 'Editor',
        status: 'Banned',
        dateCreated: '2024-01-13',
        avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
    },
    {
        id: 4,
        name: 'David Kim',
        email: 'david.kim@example.com',
        phone: '+1 (555) 456-7890',
        role: 'User',
        status: 'Active',
        dateCreated: '2024-01-12',
        avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
    },
    {
        id: 5,
        name: 'Lisa Johnson',
        email: 'lisa.johnson@example.com',
        phone: '+1 (555) 567-8901',
        role: 'Admin',
        status: 'Active',
        dateCreated: '2024-01-11',
        avatar: 'https://randomuser.me/api/portraits/women/5.jpg',
    },
];
const roles = ['All Roles', 'Admin', 'User', 'Editor'];
const statuses = ['All Status', 'Active', 'Banned'];
const statusColor = (status) => {
    if (status === 'Active')
        return 'green';
    if (status === 'Banned')
        return 'red';
    return 'gray';
};
export const UsersPage = () => {
    const [roleFilter, setRoleFilter] = useState('All Roles');
    const [statusFilter, setStatusFilter] = useState('All Status');
    const filteredUsers = mockUsers.filter(user => {
        const roleMatch = roleFilter === 'All Roles' || user.role === roleFilter;
        const statusMatch = statusFilter === 'All Status' || user.status === statusFilter;
        return roleMatch && statusMatch;
    });
    return (_jsxs(Box, { p: "xl", children: [_jsx(Text, { size: "xl", fw: 700, mb: 4, children: "User Management" }), _jsx(Text, { c: "dimmed", mb: "lg", children: "Manage and monitor user accounts" }), _jsxs(Group, { mb: "md", gap: "sm", wrap: "wrap", children: [_jsx(Button, { color: "blue", children: "+ Add New User" }), _jsx(Button, { variant: "default", children: "Export" }), _jsx(Box, { style: { flex: 1 } }), _jsx(Select, { data: roles, value: roleFilter, onChange: v => setRoleFilter(v || 'All Roles'), w: 140 }), _jsx(Select, { data: statuses, value: statusFilter, onChange: v => setStatusFilter(v || 'All Status'), w: 140 })] }), _jsxs(Paper, { radius: "md", shadow: "xs", p: 0, withBorder: true, children: [_jsxs(Table, { striped: true, highlightOnHover: true, withTableBorder: true, withColumnBorders: true, children: [_jsx(Table.Thead, { children: _jsxs(Table.Tr, { children: [_jsx(Table.Th, { children: _jsx("input", { type: "checkbox" }) }), _jsx(Table.Th, { children: "User" }), _jsx(Table.Th, { children: "Email" }), _jsx(Table.Th, { children: "Phone" }), _jsx(Table.Th, { children: "Role" }), _jsx(Table.Th, { children: "Status" }), _jsx(Table.Th, { children: "Date Created" }), _jsx(Table.Th, { children: "Actions" })] }) }), _jsx(Table.Tbody, { children: filteredUsers.map(user => (_jsxs(Table.Tr, { children: [_jsx(Table.Td, { children: _jsx("input", { type: "checkbox" }) }), _jsx(Table.Td, { children: _jsxs(Group, { gap: "sm", children: [_jsx(Avatar, { src: user.avatar, radius: "xl", size: 36 }), _jsx(Text, { fw: 500, children: user.name })] }) }), _jsx(Table.Td, { children: user.email }), _jsx(Table.Td, { children: user.phone }), _jsx(Table.Td, { children: _jsx(Badge, { color: "gray", variant: "light", children: user.role }) }), _jsx(Table.Td, { children: _jsx(Badge, { color: statusColor(user.status), variant: user.status === 'Active' ? 'light' : 'filled', children: user.status }) }), _jsx(Table.Td, { children: user.dateCreated }), _jsx(Table.Td, { children: _jsxs(Group, { gap: 4, children: [_jsx(Button, { variant: "subtle", size: "xs", color: "gray", title: "View", children: "\uD83D\uDC41\uFE0F" }), _jsx(Button, { variant: "subtle", size: "xs", color: "gray", title: "Edit", children: "\u270F\uFE0F" }), _jsx(Button, { variant: "subtle", size: "xs", color: "red", title: "Delete", children: "\uD83D\uDDD1\uFE0F" })] }) })] }, user.id))) })] }), _jsxs(Group, { justify: "space-between", align: "center", p: "md", children: [_jsxs(Text, { size: "sm", children: ["Showing 1 to ", filteredUsers.length, " of 25 entries"] }), _jsx(Pagination, { total: 3, value: 1 })] })] })] }));
};
