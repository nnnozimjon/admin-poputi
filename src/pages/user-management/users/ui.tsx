import React, { useState } from 'react';
import {
  Box,
  Table,
  Button,
  Select,
  Group,
  Text,
  Avatar,
  Badge,
  Paper,
  Pagination,
} from '@mantine/core';

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

const statusColor = (status: string) => {
  if (status === 'Active') return 'green';
  if (status === 'Banned') return 'red';
  return 'gray';
};

export const UsersPage: React.FC = () => {
  const [roleFilter, setRoleFilter] = useState('All Roles');
  const [statusFilter, setStatusFilter] = useState('All Status');

  const filteredUsers = mockUsers.filter(user => {
    const roleMatch = roleFilter === 'All Roles' || user.role === roleFilter;
    const statusMatch = statusFilter === 'All Status' || user.status === statusFilter;
    return roleMatch && statusMatch;
  });

  return (
    <Box p="xl">
      <Text size="xl" fw={700} mb={4}>User Management</Text>
      <Text c="dimmed" mb="lg">Manage and monitor user accounts</Text>
      <Group mb="md" gap="sm" wrap="wrap">
        <Button color="blue">+ Add New User</Button>
        <Button variant="default">Export</Button>
        <Box style={{ flex: 1 }} />
        <Select
          data={roles}
          value={roleFilter}
          onChange={v => setRoleFilter(v || 'All Roles')}
          w={140}
        />
        <Select
          data={statuses}
          value={statusFilter}
          onChange={v => setStatusFilter(v || 'All Status')}
          w={140}
        />
      </Group>
      <Paper radius="md" shadow="xs" p={0} withBorder>
        <Table striped highlightOnHover withTableBorder withColumnBorders>
          <Table.Thead>
            <Table.Tr>
              <Table.Th><input type="checkbox" /></Table.Th>
              <Table.Th>User</Table.Th>
              <Table.Th>Email</Table.Th>
              <Table.Th>Phone</Table.Th>
              <Table.Th>Role</Table.Th>
              <Table.Th>Status</Table.Th>
              <Table.Th>Date Created</Table.Th>
              <Table.Th>Actions</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {filteredUsers.map(user => (
              <Table.Tr key={user.id}>
                <Table.Td><input type="checkbox" /></Table.Td>
                <Table.Td>
                  <Group gap="sm">
                    <Avatar src={user.avatar} radius="xl" size={36} />
                    <Text fw={500}>{user.name}</Text>
                  </Group>
                </Table.Td>
                <Table.Td>{user.email}</Table.Td>
                <Table.Td>{user.phone}</Table.Td>
                <Table.Td>
                  <Badge color="gray" variant="light">{user.role}</Badge>
                </Table.Td>
                <Table.Td>
                  <Badge color={statusColor(user.status)} variant={user.status === 'Active' ? 'light' : 'filled'}>{user.status}</Badge>
                </Table.Td>
                <Table.Td>{user.dateCreated}</Table.Td>
                <Table.Td>
                  <Group gap={4}>
                    <Button variant="subtle" size="xs" color="gray" title="View">👁️</Button>
                    <Button variant="subtle" size="xs" color="gray" title="Edit">✏️</Button>
                    <Button variant="subtle" size="xs" color="red" title="Delete">🗑️</Button>
                  </Group>
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
        <Group justify="space-between" align="center" p="md">
          <Text size="sm">Showing 1 to {filteredUsers.length} of 25 entries</Text>
          <Pagination total={3} value={1} />
        </Group>
      </Paper>
    </Box>
  );
};
