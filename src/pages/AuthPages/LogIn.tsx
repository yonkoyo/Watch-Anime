import { Button, PasswordInput, Stack, TextInput, Text, Anchor } from '@mantine/core';
import { Link } from 'react-router-dom';
import { AuthLayout } from './AuthLayout';

export function LogIn() {
  return (
    <AuthLayout>
      <Text size="lg" fw={700} ta="center" mb="md" c="white">
        Login
      </Text>
      <Stack gap="sm" style={{ flex: 1 }}>
        <TextInput
          radius="lg"
          label="Email"
          placeholder="you@example.com"
          required
          c="white"
        ></TextInput>
        <PasswordInput
          radius="lg"
          label="Password"
          placeholder="password"
          required
          c="white"
        ></PasswordInput>
      </Stack>
      <Button radius="lg" fullWidth mt="sm">
        Login
      </Button>
      <Text ta="center" mt="sm" c="gray.4" size="sm">
        Not registered?{' '}
        <Anchor component={Link} to="/signup" c="blue.4">
          Create an account
        </Anchor>
      </Text>
    </AuthLayout>
  );
}
