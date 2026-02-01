import { Button, Center, Paper, PasswordInput, Stack, TextInput, Text } from '@mantine/core';

const AUTH_CARD_HEIGHT = 360;

export function LogIn() {
  return (
    <div style={{ minHeight: '100vh', paddingTop: '150px', background: '#0f172a' }}>
      <Center h="100%">
        <Paper
          radius="xl"
          p="xl"
          w={350}
          bg="#1e293b"
          style={{ minHeight: AUTH_CARD_HEIGHT, display: 'flex', flexDirection: 'column' }}
        >
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
        </Paper>
      </Center>
    </div>
  );
}
