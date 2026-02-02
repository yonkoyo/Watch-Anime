import { Button, PasswordInput, Stack, TextInput, Text, Anchor } from '@mantine/core';
import { Link } from 'react-router-dom';
import { AuthLayout } from './AuthLayout';

export function SignUp() {
  return (
    <AuthLayout height={420}>
      <Text size="lg" fw={700} ta="center" mb="md" c="white">
        Sign up to Watch Anime
      </Text>
      <Stack gap="sm" style={{ flex: 1 }}>
        <TextInput
          radius="lg"
          label="Email"
          placeholder="you@example.com"
          required
          c="white"
        ></TextInput>
        <TextInput
          radius="lg"
          label="Username"
          placeholder="username"
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
        Sign up
      </Button>
      <Text ta="center" mt="sm" c="gray.4" size="sm">
        Already have an account?{' '}
        <Anchor component={Link} to="/login" c="blue.4">
          Login
        </Anchor>
      </Text>
    </AuthLayout>
  );
}
