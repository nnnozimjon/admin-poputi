import React, { useState } from 'react';
import {
  Box,
  Table,
  Button,
  Select,
  Group,
  Text,
  Paper,
  Pagination,
  Input,
  Badge,
} from '@mantine/core';
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

const statusColor = (status: string) => {
  if (status === 'Active') return 'green';
  if (status === 'Inactive') return 'gray';
  return 'gray';
};

export const RoutesPage: React.FC = () => {
  const [cityFilter, setCityFilter] = useState('All Cities');
  const [search, setSearch] = useState('');

  const filteredCities = mockCities.filter(city => {
    const filterMatch = cityFilter === 'All Cities' || city.status === cityFilter;
    const searchMatch = city.name.toLowerCase().includes(search.toLowerCase());
    return filterMatch && searchMatch;
  });

  return (
    <Box p="xl">
      <Group mb="md" gap="sm" wrap="wrap" align="center">
        <Input
          placeholder="Search cities..."
          value={search}
          onChange={e => setSearch(e.currentTarget.value)}
          w={220}
        />
        <Select data={cityFilters} value={cityFilter} onChange={v => setCityFilter(v || 'All Cities')} w={140} />
        <Box style={{ flex: 1 }} />
        <Button color="blue">+ Add New City</Button>
      </Group>
      <Paper radius="md" shadow="xs" p={0} withBorder>
        <Table striped highlightOnHover withTableBorder withColumnBorders>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>City ID</Table.Th>
              <Table.Th>City Name</Table.Th>
              <Table.Th>Status</Table.Th>
              <Table.Th>Actions</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {filteredCities.map(city => (
              <Table.Tr key={city.id}>
                <Table.Td>{city.id}</Table.Td>
                <Table.Td>{city.name}</Table.Td>
                <Table.Td>
                  <Badge color={statusColor(city.status)} variant={city.status === 'Active' ? 'light' : 'filled'}>{city.status}</Badge>
                </Table.Td>
                <Table.Td>
                  <Group gap={4}>
                    <Button variant="subtle" size="xs" color="blue" title="Edit"><IconPencil size={16} /></Button>
                    <Button variant="subtle" size="xs" color="red" title="Delete"><IconTrash size={16} /></Button>
                  </Group>
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
        <Group justify="space-between" align="center" p="md">
          <Text size="sm">Showing 1 to {filteredCities.length} of 10 entries</Text>
          <Pagination total={1} value={1} />
        </Group>
      </Paper>
    </Box>
  );
}; 