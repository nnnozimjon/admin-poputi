import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Box, Table, Button, Select, Group, Text, Paper, Pagination, Input, Badge, } from '@mantine/core';
import { IconPencil, IconTrash } from '@tabler/icons-react';
const mockCities = [
    { id: 'C001', name: 'New York', status: 'Active' },
    { id: 'C002', name: 'Los Angeles', status: 'Active' },
    { id: 'C003', name: 'Chicago', status: 'Inactive' },
    { id: 'C004', name: 'Houston', status: 'Active' },
    { id: 'C005', name: 'Phoenix', status: 'Inactive' },
    { id: 'C006', name: 'Philadelphia', status: 'Active' },
    { id: 'C007', name: 'San Antonio', status: 'Active' },
    { id: 'C008', name: 'San Diego', status: 'Inactive' },
    { id: 'C009', name: 'Dallas', status: 'Active' },
    { id: 'C010', name: 'San Jose', status: 'Active' },
];
const cityFilters = ['All Cities', 'Active', 'Inactive'];
const statusColor = (status) => {
    if (status === 'Active')
        return 'green';
    if (status === 'Inactive')
        return 'gray';
    return 'gray';
};
export const RoutesPage = () => {
    const [cityFilter, setCityFilter] = useState('All Cities');
    const [search, setSearch] = useState('');
    const filteredCities = mockCities.filter(city => {
        const filterMatch = cityFilter === 'All Cities' || city.status === cityFilter;
        const searchMatch = city.name.toLowerCase().includes(search.toLowerCase());
        return filterMatch && searchMatch;
    });
    return (_jsxs(Box, { p: "xl", children: [_jsxs(Group, { mb: "md", gap: "sm", wrap: "wrap", align: "center", children: [_jsx(Input, { placeholder: "Search cities...", value: search, onChange: e => setSearch(e.currentTarget.value), w: 220 }), _jsx(Select, { data: cityFilters, value: cityFilter, onChange: v => setCityFilter(v || 'All Cities'), w: 140 }), _jsx(Box, { style: { flex: 1 } }), _jsx(Button, { color: "blue", children: "+ Add New City" })] }), _jsxs(Paper, { radius: "md", shadow: "xs", p: 0, withBorder: true, children: [_jsxs(Table, { striped: true, highlightOnHover: true, withTableBorder: true, withColumnBorders: true, children: [_jsx(Table.Thead, { children: _jsxs(Table.Tr, { children: [_jsx(Table.Th, { children: "City ID" }), _jsx(Table.Th, { children: "City Name" }), _jsx(Table.Th, { children: "Status" }), _jsx(Table.Th, { children: "Actions" })] }) }), _jsx(Table.Tbody, { children: filteredCities.map(city => (_jsxs(Table.Tr, { children: [_jsx(Table.Td, { children: city.id }), _jsx(Table.Td, { children: city.name }), _jsx(Table.Td, { children: _jsx(Badge, { color: statusColor(city.status), variant: city.status === 'Active' ? 'light' : 'filled', children: city.status }) }), _jsx(Table.Td, { children: _jsxs(Group, { gap: 4, children: [_jsx(Button, { variant: "subtle", size: "xs", color: "blue", title: "Edit", children: _jsx(IconPencil, { size: 16 }) }), _jsx(Button, { variant: "subtle", size: "xs", color: "red", title: "Delete", children: _jsx(IconTrash, { size: 16 }) })] }) })] }, city.id))) })] }), _jsxs(Group, { justify: "space-between", align: "center", p: "md", children: [_jsxs(Text, { size: "sm", children: ["Showing 1 to ", filteredCities.length, " of 10 entries"] }), _jsx(Pagination, { total: 1, value: 1 })] })] })] }));
};
