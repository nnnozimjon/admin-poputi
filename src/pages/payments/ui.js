import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Box, Table, Button, Select, Group, Text, Paper, Pagination, Input, Badge, } from '@mantine/core';
import { IconCreditCard, IconBuildingBank } from '@tabler/icons-react';
const mockPayments = [
    {
        id: 1,
        client: 'Sarah Johnson',
        invoice: 'INV-2024-001',
        amount: 1250.0,
        method: 'Alif',
        status: 'Pending',
        date: 'Feb 15, 2024',
    },
    {
        id: 2,
        client: 'Michael Chen',
        invoice: 'INV-2024-002',
        amount: 890.5,
        method: 'DC',
        status: 'Paid',
        date: 'Feb 14, 2024',
    },
    {
        id: 3,
        client: 'Emma Davis',
        invoice: 'INV-2024-003',
        amount: 2100.75,
        method: 'Alif',
        status: 'Failed',
        date: 'Feb 13, 2024',
    },
    {
        id: 4,
        client: 'James Wilson',
        invoice: 'INV-2024-004',
        amount: 750.25,
        method: 'DC',
        status: 'Pending',
        date: 'Feb 15, 2024',
    },
    {
        id: 5,
        client: 'Lisa Anderson',
        invoice: 'INV-2024-005',
        amount: 1500.0,
        method: 'Alif',
        status: 'Paid',
        date: 'Feb 12, 2024',
    },
];
const statuses = ['All Status', 'Pending', 'Paid', 'Failed'];
const statusColor = (status) => {
    if (status === 'Paid')
        return 'green';
    if (status === 'Pending')
        return 'yellow';
    if (status === 'Failed')
        return 'red';
    return 'gray';
};
const methodIcon = (method) => {
    if (method === 'Alif')
        return _jsx(IconBuildingBank, { size: 18, style: { marginRight: 6 } });
    if (method === 'DC')
        return _jsx(IconCreditCard, { size: 18, style: { marginRight: 6 } });
    return null;
};
export const PaymentsPage = () => {
    const [statusFilter, setStatusFilter] = useState('All Status');
    const [search, setSearch] = useState('');
    const filteredPayments = mockPayments.filter(payment => {
        const statusMatch = statusFilter === 'All Status' || payment.status === statusFilter;
        const searchMatch = payment.client.toLowerCase().includes(search.toLowerCase());
        return statusMatch && searchMatch;
    });
    return (_jsxs(Box, { p: "xl", children: [_jsxs(Group, { mb: "md", gap: "sm", wrap: "wrap", children: [_jsx(Input, { placeholder: "Search by client name...", value: search, onChange: e => setSearch(e.currentTarget.value), w: 240 }), _jsx(Select, { data: statuses, value: statusFilter, onChange: v => setStatusFilter(v || 'All Status'), w: 140 })] }), _jsxs(Paper, { radius: "md", shadow: "xs", p: 0, withBorder: true, children: [_jsxs(Table, { striped: true, highlightOnHover: true, withTableBorder: true, withColumnBorders: true, children: [_jsx(Table.Thead, { children: _jsxs(Table.Tr, { children: [_jsx(Table.Th, { children: "Client Name" }), _jsx(Table.Th, { children: "Invoice ID" }), _jsx(Table.Th, { children: "Amount Due" }), _jsx(Table.Th, { children: "Payment Method" }), _jsx(Table.Th, { children: "Status" }), _jsx(Table.Th, { children: "Date" }), _jsx(Table.Th, { children: "Action" })] }) }), _jsx(Table.Tbody, { children: filteredPayments.map(payment => (_jsxs(Table.Tr, { children: [_jsx(Table.Td, { children: _jsx(Text, { fw: 500, children: payment.client }) }), _jsx(Table.Td, { children: payment.invoice }), _jsxs(Table.Td, { children: ["$", payment.amount.toLocaleString(undefined, { minimumFractionDigits: 2 })] }), _jsx(Table.Td, { children: _jsxs(Group, { gap: 4, children: [methodIcon(payment.method), _jsx(Text, { children: payment.method })] }) }), _jsx(Table.Td, { children: _jsx(Badge, { color: statusColor(payment.status), variant: payment.status === 'Pending' ? 'light' : 'filled', children: payment.status }) }), _jsx(Table.Td, { children: payment.date }), _jsx(Table.Td, { children: _jsx(Button, { color: "blue", size: "xs", disabled: payment.status !== 'Pending', variant: payment.status === 'Pending' ? 'filled' : 'light', children: "Send Payment" }) })] }, payment.id))) })] }), _jsxs(Group, { justify: "space-between", align: "center", p: "md", children: [_jsxs(Text, { size: "sm", children: ["Showing 1 to ", filteredPayments.length, " of 25 entries"] }), _jsx(Pagination, { total: 5, value: 1 })] })] })] }));
};
