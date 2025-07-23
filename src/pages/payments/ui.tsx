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

const statusColor = (status: string) => {
  if (status === 'Paid') return 'green';
  if (status === 'Pending') return 'yellow';
  if (status === 'Failed') return 'red';
  return 'gray';
};

const methodIcon = (method: string) => {
  if (method === 'Alif') return <IconBuildingBank size={18} style={{ marginRight: 6 }} />;
  if (method === 'DC') return <IconCreditCard size={18} style={{ marginRight: 6 }} />;
  return null;
};

export const PaymentsPage: React.FC = () => {
  const [statusFilter, setStatusFilter] = useState('All Status');
  const [search, setSearch] = useState('');

  const filteredPayments = mockPayments.filter(payment => {
    const statusMatch = statusFilter === 'All Status' || payment.status === statusFilter;
    const searchMatch = payment.client.toLowerCase().includes(search.toLowerCase());
    return statusMatch && searchMatch;
  });

  return (
    <Box p="xl">
      <Group mb="md" gap="sm" wrap="wrap">
        <Input
          placeholder="Search by client name..."
          value={search}
          onChange={e => setSearch(e.currentTarget.value)}
          w={240}
        />
        <Select data={statuses} value={statusFilter} onChange={v => setStatusFilter(v || 'All Status')} w={140} />
      </Group>
      <Paper radius="md" shadow="xs" p={0} withBorder>
        <Table striped highlightOnHover withTableBorder withColumnBorders>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Client Name</Table.Th>
              <Table.Th>Invoice ID</Table.Th>
              <Table.Th>Amount Due</Table.Th>
              <Table.Th>Payment Method</Table.Th>
              <Table.Th>Status</Table.Th>
              <Table.Th>Date</Table.Th>
              <Table.Th>Action</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {filteredPayments.map(payment => (
              <Table.Tr key={payment.id}>
                <Table.Td>
                  <Text fw={500}>{payment.client}</Text>
                </Table.Td>
                <Table.Td>{payment.invoice}</Table.Td>
                <Table.Td>${payment.amount.toLocaleString(undefined, { minimumFractionDigits: 2 })}</Table.Td>
                <Table.Td>
                  <Group gap={4}>
                    {methodIcon(payment.method)}
                    <Text>{payment.method}</Text>
                  </Group>
                </Table.Td>
                <Table.Td>
                  <Badge color={statusColor(payment.status)} variant={payment.status === 'Pending' ? 'light' : 'filled'}>{payment.status}</Badge>
                </Table.Td>
                <Table.Td>{payment.date}</Table.Td>
                <Table.Td>
                  <Button
                    color="blue"
                    size="xs"
                    disabled={payment.status !== 'Pending'}
                    variant={payment.status === 'Pending' ? 'filled' : 'light'}
                  >
                    Send Payment
                  </Button>
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
        <Group justify="space-between" align="center" p="md">
          <Text size="sm">Showing 1 to {filteredPayments.length} of 25 entries</Text>
          <Pagination total={5} value={1} />
        </Group>
      </Paper>
    </Box>
  );
}; 