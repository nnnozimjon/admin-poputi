import { AppShell, Burger, Group, Title, ActionIcon, useMantineColorScheme } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Outlet } from 'react-router-dom';
import { AdminSidebar } from '@/widgets';
import { IconSun, IconMoonStars } from '@tabler/icons-react';

export const MainLayout = () => {
  const [opened, { toggle }] = useDisclosure();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 280,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
      padding={0}
    >
      <AppShell.Header>
        <Group h="100%" px="md" justify="space-between">
          <Group>
            <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
            <Title order={3}>Admin Panel</Title>
          </Group>
          <ActionIcon
            variant="default"
            onClick={() => toggleColorScheme()}
            size="lg"
          >
            {colorScheme === 'dark' ? <IconSun size="1.2rem" /> : <IconMoonStars size="1.2rem" />}
          </ActionIcon>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar>
        <AdminSidebar />
      </AppShell.Navbar>

      <AppShell.Main pt={60} pl={280}>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
};