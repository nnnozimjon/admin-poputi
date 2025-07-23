import React, { useState } from 'react';
import {
  Paper,
  Text,
  TextInput,
  PasswordInput,
  Button,
  Center,
  Stack,
} from '@mantine/core';
import { IconMail, IconLock } from '@tabler/icons-react';

function validateEmail(email: string) {
  return /\S+@\S+\.\S+/.test(email);
}

export const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }
    setError('');
    // Handle login logic here
  };

  return (
      <Center style={{ minHeight: '100vh' }}>
        <Paper radius="xl" p={36} shadow="md" withBorder style={{ minWidth: 500, maxWidth: '90vw' }}>
          <Text ta="center" fw={700} size="xl" mb={4}>
            Admin Login
          </Text>
          <Text ta="center" c="dimmed" size="sm" mb="lg">
            Welcome back! Please login to your account
          </Text>
          <form onSubmit={handleLogin}>
            <Stack gap="xs">
              <TextInput
                label="Admin Email"
                placeholder="Enter your email"
                leftSection={<IconMail size={18} />}
                value={email}
                onChange={e => setEmail(e.currentTarget.value)}
                error={error ? error : undefined}
                autoComplete="email"
                required
              />
              <PasswordInput
                label="Password"
                placeholder="Enter your password"
                leftSection={<IconLock size={18} />}
                value={password}
                onChange={e => setPassword(e.currentTarget.value)}
                autoComplete="current-password"
                required
              />
              {error && (
                <Text c="red" size="sm" mt={-4} mb={-4}>
                  {error}
                </Text>
              )}
              <Button type="submit" color="teal" radius="md" size="md" mt="sm" fullWidth>
                Login to Dashboard
              </Button>
            </Stack>
          </form>
        </Paper>
      </Center>
  );
}; 