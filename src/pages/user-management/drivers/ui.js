import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Box, Table, Button, Select, Group, Text, Avatar, Badge, Paper, Pagination, Input, } from '@mantine/core';
import { IconStar, IconEye, IconPencil, IconX, IconCheck, IconTrash } from '@tabler/icons-react';
const mockDrivers = [
    {
        id: 1,
        name: 'John Anderson',
        phone: '+1 (555) 123-4567',
        license: 'DL-123456',
        vehicleType: 'SUV',
        status: 'Active',
        trips: 1234,
        rating: 4.8,
        avatar: 'https://randomuser.me/api/portraits/men/10.jpg',
    },
    {
        id: 2,
        name: 'Sarah Wilson',
        phone: '+1 (555) 234-5678',
        license: 'DL-789012',
        vehicleType: 'Sedan',
        status: 'Inactive',
        trips: 892,
        rating: 4.5,
        avatar: 'https://randomuser.me/api/portraits/women/11.jpg',
    },
    {
        id: 3,
        name: 'Michael Brown',
        phone: '+1 (555) 345-6789',
        license: 'DL-345678',
        vehicleType: 'Van',
        status: 'Suspended',
        trips: 567,
        rating: 3.9,
        avatar: 'https://randomuser.me/api/portraits/men/12.jpg',
    },
    {
        id: 4,
        name: 'Emily Davis',
        phone: '+1 (555) 456-7890',
        license: 'DL-901234',
        vehicleType: 'SUV',
        status: 'Active',
        trips: 2341,
        rating: 4.9,
        avatar: 'https://randomuser.me/api/portraits/women/13.jpg',
    },
    {
        id: 5,
        name: 'David Martinez',
        phone: '+1 (555) 567-8901',
        license: 'DL-567890',
        vehicleType: 'Sedan',
        status: 'Active',
        trips: 1567,
        rating: 4.7,
        avatar: 'https://randomuser.me/api/portraits/men/14.jpg',
    },
];
const statuses = ['All Status', 'Active', 'Inactive', 'Suspended'];
const vehicleTypes = ['All Vehicle Type', 'SUV', 'Sedan', 'Van'];
const regions = ['All Region', 'North', 'South', 'East', 'West'];
const statusColor = (status) => {
    if (status === 'Active')
        return 'green';
    if (status === 'Suspended')
        return 'red';
    if (status === 'Inactive')
        return 'gray';
    return 'gray';
};
export const DriversPage = () => {
    const [statusFilter, setStatusFilter] = useState('All Status');
    const [vehicleTypeFilter, setVehicleTypeFilter] = useState('All Vehicle Type');
    const [regionFilter, setRegionFilter] = useState('All Region');
    const [selected, setSelected] = useState([]);
    const [search, setSearch] = useState('');
    const filteredDrivers = mockDrivers.filter(driver => {
        const statusMatch = statusFilter === 'All Status' || driver.status === statusFilter;
        const vehicleMatch = vehicleTypeFilter === 'All Vehicle Type' || driver.vehicleType === vehicleTypeFilter;
        const regionMatch = regionFilter === 'All Region'; // No region in mock data
        const searchMatch = driver.name.toLowerCase().includes(search.toLowerCase()) ||
            driver.phone.includes(search) ||
            driver.license.toLowerCase().includes(search.toLowerCase());
        return statusMatch && vehicleMatch && regionMatch && searchMatch;
    });
    const allSelected = selected.length === filteredDrivers.length && filteredDrivers.length > 0;
    const toggleSelectAll = () => {
        setSelected(allSelected ? [] : filteredDrivers.map(d => d.id));
    };
    const toggleSelect = (id) => {
        setSelected(selected.includes(id) ? selected.filter(s => s !== id) : [...selected, id]);
    };
    return (_jsxs(Box, { p: "xl", children: [_jsxs(Group, { mb: "md", gap: "sm", wrap: "wrap", children: [_jsx(Input, { placeholder: "Search by name, phone, or license...", value: search, onChange: e => setSearch(e.currentTarget.value), w: 260 }), _jsx(Select, { data: statuses, value: statusFilter, onChange: v => setStatusFilter(v || 'All Status'), w: 140 }), _jsx(Select, { data: vehicleTypes, value: vehicleTypeFilter, onChange: v => setVehicleTypeFilter(v || 'All Vehicle Type'), w: 160 }), _jsx(Select, { data: regions, value: regionFilter, onChange: v => setRegionFilter(v || 'All Region'), w: 140 })] }), selected.length > 0 && (_jsxs(Group, { mb: "sm", gap: "sm", wrap: "wrap", style: { background: 'rgba(24,144,255,0.07)', borderRadius: 8, padding: 12 }, children: [_jsxs(Text, { fw: 500, children: [selected.length, " Drivers Selected"] }), _jsx(Button, { color: "green", variant: "outline", size: "xs", children: "Activate Drivers" }), _jsx(Button, { color: "yellow", variant: "outline", size: "xs", children: "Suspend Drivers" }), _jsx(Button, { color: "red", variant: "outline", size: "xs", children: "Delete Drivers" })] })), _jsxs(Paper, { radius: "md", shadow: "xs", p: 0, withBorder: true, children: [_jsxs(Table, { striped: true, highlightOnHover: true, withTableBorder: true, withColumnBorders: true, children: [_jsx(Table.Thead, { children: _jsxs(Table.Tr, { children: [_jsx(Table.Th, { children: _jsx("input", { type: "checkbox", checked: allSelected, onChange: toggleSelectAll }) }), _jsx(Table.Th, { children: "Driver" }), _jsx(Table.Th, { children: "Phone" }), _jsx(Table.Th, { children: "License" }), _jsx(Table.Th, { children: "Vehicle Type" }), _jsx(Table.Th, { children: "Status" }), _jsx(Table.Th, { children: "Trips" }), _jsx(Table.Th, { children: "Rating" }), _jsx(Table.Th, { children: "Actions" })] }) }), _jsx(Table.Tbody, { children: filteredDrivers.map(driver => (_jsxs(Table.Tr, { children: [_jsx(Table.Td, { children: _jsx("input", { type: "checkbox", checked: selected.includes(driver.id), onChange: () => toggleSelect(driver.id) }) }), _jsx(Table.Td, { children: _jsxs(Group, { gap: "sm", children: [_jsx(Avatar, { src: driver.avatar, radius: "xl", size: 36 }), _jsx(Text, { fw: 500, children: driver.name })] }) }), _jsx(Table.Td, { children: driver.phone }), _jsx(Table.Td, { children: driver.license }), _jsx(Table.Td, { children: driver.vehicleType }), _jsx(Table.Td, { children: _jsx(Badge, { color: statusColor(driver.status), variant: driver.status === 'Active' ? 'light' : 'filled', children: driver.status }) }), _jsx(Table.Td, { children: driver.trips }), _jsx(Table.Td, { children: _jsxs(Group, { gap: 4, children: [_jsx(IconStar, { size: 16, color: "#faad14" }), _jsx(Text, { children: driver.rating })] }) }), _jsx(Table.Td, { children: _jsxs(Group, { gap: 4, children: [_jsx(Button, { variant: "subtle", size: "xs", color: "blue", title: "Edit", children: _jsx(IconPencil, { size: 16 }) }), _jsx(Button, { variant: "subtle", size: "xs", color: "gray", title: "View", children: _jsx(IconEye, { size: 16 }) }), _jsx(Button, { variant: "subtle", size: "xs", color: "green", title: "Activate", children: _jsx(IconCheck, { size: 16 }) }), _jsx(Button, { variant: "subtle", size: "xs", color: "yellow", title: "Suspend", children: _jsx(IconX, { size: 16 }) }), _jsx(Button, { variant: "subtle", size: "xs", color: "red", title: "Delete", children: _jsx(IconTrash, { size: 16 }) })] }) })] }, driver.id))) })] }), _jsxs(Group, { justify: "space-between", align: "center", p: "md", children: [_jsxs(Group, { gap: "sm", children: [_jsx(Text, { size: "sm", children: "Rows per page:" }), _jsx(Select, { data: ['10', '25', '50'], value: '10', w: 70 })] }), _jsx(Pagination, { total: 3, value: 1 })] })] })] }));
};
