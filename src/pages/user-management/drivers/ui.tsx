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
  Input,
} from '@mantine/core';
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

const statusColor = (status: string) => {
  if (status === 'Active') return 'green';
  if (status === 'Suspended') return 'red';
  if (status === 'Inactive') return 'gray';
  return 'gray';
};

export const DriversPage: React.FC = () => {
  const [statusFilter, setStatusFilter] = useState('All Status');
  const [vehicleTypeFilter, setVehicleTypeFilter] = useState('All Vehicle Type');
  const [regionFilter, setRegionFilter] = useState('All Region');
  const [selected, setSelected] = useState<number[]>([]);
  const [search, setSearch] = useState('');

  const filteredDrivers = mockDrivers.filter(driver => {
    const statusMatch = statusFilter === 'All Status' || driver.status === statusFilter;
    const vehicleMatch = vehicleTypeFilter === 'All Vehicle Type' || driver.vehicleType === vehicleTypeFilter;
    const regionMatch = regionFilter === 'All Region'; // No region in mock data
    const searchMatch =
      driver.name.toLowerCase().includes(search.toLowerCase()) ||
      driver.phone.includes(search) ||
      driver.license.toLowerCase().includes(search.toLowerCase());
    return statusMatch && vehicleMatch && regionMatch && searchMatch;
  });

  const allSelected = selected.length === filteredDrivers.length && filteredDrivers.length > 0;
  const toggleSelectAll = () => {
    setSelected(allSelected ? [] : filteredDrivers.map(d => d.id));
  };
  const toggleSelect = (id: number) => {
    setSelected(selected.includes(id) ? selected.filter(s => s !== id) : [...selected, id]);
  };

  return (
    <Box p="xl">
      <Group mb="md" gap="sm" wrap="wrap">
        <Input
          placeholder="Search by name, phone, or license..."
          value={search}
          onChange={e => setSearch(e.currentTarget.value)}
          w={260}
        />
        <Select data={statuses} value={statusFilter} onChange={v => setStatusFilter(v || 'All Status')} w={140} />
        <Select data={vehicleTypes} value={vehicleTypeFilter} onChange={v => setVehicleTypeFilter(v || 'All Vehicle Type')} w={160} />
        <Select data={regions} value={regionFilter} onChange={v => setRegionFilter(v || 'All Region')} w={140} />
      </Group>
      {selected.length > 0 && (
        <Group mb="sm" gap="sm" wrap="wrap" style={{ background: 'rgba(24,144,255,0.07)', borderRadius: 8, padding: 12 }}>
          <Text fw={500}>{selected.length} Drivers Selected</Text>
          <Button color="green" variant="outline" size="xs">Activate Drivers</Button>
          <Button color="yellow" variant="outline" size="xs">Suspend Drivers</Button>
          <Button color="red" variant="outline" size="xs">Delete Drivers</Button>
        </Group>
      )}
      <Paper radius="md" shadow="xs" p={0} withBorder>
        <Table striped highlightOnHover withTableBorder withColumnBorders>
          <Table.Thead>
            <Table.Tr>
              <Table.Th><input type="checkbox" checked={allSelected} onChange={toggleSelectAll} /></Table.Th>
              <Table.Th>Driver</Table.Th>
              <Table.Th>Phone</Table.Th>
              <Table.Th>License</Table.Th>
              <Table.Th>Vehicle Type</Table.Th>
              <Table.Th>Status</Table.Th>
              <Table.Th>Trips</Table.Th>
              <Table.Th>Rating</Table.Th>
              <Table.Th>Actions</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {filteredDrivers.map(driver => (
              <Table.Tr key={driver.id}>
                <Table.Td><input type="checkbox" checked={selected.includes(driver.id)} onChange={() => toggleSelect(driver.id)} /></Table.Td>
                <Table.Td>
                  <Group gap="sm">
                    <Avatar src={driver.avatar} radius="xl" size={36} />
                    <Text fw={500}>{driver.name}</Text>
                  </Group>
                </Table.Td>
                <Table.Td>{driver.phone}</Table.Td>
                <Table.Td>{driver.license}</Table.Td>
                <Table.Td>{driver.vehicleType}</Table.Td>
                <Table.Td>
                  <Badge color={statusColor(driver.status)} variant={driver.status === 'Active' ? 'light' : 'filled'}>{driver.status}</Badge>
                </Table.Td>
                <Table.Td>{driver.trips}</Table.Td>
                <Table.Td>
                  <Group gap={4}>
                    <IconStar size={16} color="#faad14" />
                    <Text>{driver.rating}</Text>
                  </Group>
                </Table.Td>
                <Table.Td>
                  <Group gap={4}>
                    <Button variant="subtle" size="xs" color="blue" title="Edit"><IconPencil size={16} /></Button>
                    <Button variant="subtle" size="xs" color="gray" title="View"><IconEye size={16} /></Button>
                    <Button variant="subtle" size="xs" color="green" title="Activate"><IconCheck size={16} /></Button>
                    <Button variant="subtle" size="xs" color="yellow" title="Suspend"><IconX size={16} /></Button>
                    <Button variant="subtle" size="xs" color="red" title="Delete"><IconTrash size={16} /></Button>
                  </Group>
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
        <Group justify="space-between" align="center" p="md">
          <Group gap="sm">
            <Text size="sm">Rows per page:</Text>
            <Select data={['10', '25', '50']} value={'10'} w={70} />
          </Group>
          <Pagination total={3} value={1} />
        </Group>
      </Paper>
    </Box>
  );
}; 