import { Grid, Card, Text, Group, Title, Table, Badge, Box } from '@mantine/core';
import { IconUsers, IconCar, IconReport, IconCoin } from '@tabler/icons-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';
import { summary, revenueTrend, tripDistribution, recentTrips, userGrowth, statusColors } from './constants';
import type { SummaryItem } from './types';

const iconMap = {
  users: IconUsers,
  car: IconCar,
  coin: IconCoin,
  report: IconReport,
};

export default function DashboardWidget() {
  return (
    <Box p="md">
      <Grid gutter="md">
        {summary.map((item: SummaryItem) => {
          const Icon = iconMap[item.icon];
          return (
            <Grid.Col span={{ base: 12, sm: 6, md: 3 }} key={item.label}>
              <Card shadow="sm" padding="lg" radius="md" withBorder>
                <Group>
                  <Icon color={item.color} size={32} />
                  <div>
                    <Text size="xs" c="dimmed" mb={4}>{item.label}</Text>
                    <Text size="xl" fw={700} c={item.color}>{item.value}</Text>
                  </div>
                </Group>
              </Card>
            </Grid.Col>
          );
        })}
      </Grid>

      <Grid gutter="md" mt="md">
        <Grid.Col span={{ base: 12, md: 8 }}>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Title order={5} mb="sm">Revenue Trend</Title>
            <ResponsiveContainer width="100%" height={220}>
              <LineChart data={revenueTrend} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#228be6" strokeWidth={2} dot />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 4 }}>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Title order={5} mb="sm">Trip Distribution</Title>
            <ResponsiveContainer width="100%" height={220}>
              <PieChart>
                <Pie
                  data={tripDistribution}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={60}
                  innerRadius={40}
                  label={false}
                >
                  {tripDistribution.map((entry, idx) => (
                    <Cell key={`cell-${idx}`} fill={entry.color} />
                  ))}
                </Pie>
                <Legend verticalAlign="bottom" height={36} />
              </PieChart>
            </ResponsiveContainer>
          </Card>
        </Grid.Col>
      </Grid>

      <Card shadow="sm" padding="lg" radius="md" withBorder mt="md">
        <Title order={5} mb="sm">Recent Trips</Title>
        <Table striped highlightOnHover withTableBorder withColumnBorders>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Trip ID</Table.Th>
              <Table.Th>Driver</Table.Th>
              <Table.Th>Route</Table.Th>
              <Table.Th>Status</Table.Th>
              <Table.Th>Passengers</Table.Th>
              <Table.Th>Revenue</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {recentTrips.map((trip) => (
              <Table.Tr key={trip.id}>
                <Table.Td>{trip.id}</Table.Td>
                <Table.Td>{trip.driver}</Table.Td>
                <Table.Td>{trip.route}</Table.Td>
                <Table.Td>
                  <Badge color={statusColors[trip.status]} variant="light">
                    {trip.status}
                  </Badge>
                </Table.Td>
                <Table.Td>{trip.passengers}</Table.Td>
                <Table.Td>${trip.revenue.toFixed(2)}</Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </Card>

      <Card shadow="sm" padding="lg" radius="md" withBorder mt="md">
        <Title order={5} mb="sm">User Growth</Title>
        <ResponsiveContainer width="100%" height={220}>
          <LineChart data={userGrowth} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="users" stroke="#228be6" strokeWidth={2} dot />
          </LineChart>
        </ResponsiveContainer>
      </Card>
    </Box>
  );
} 