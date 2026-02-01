import { Button, Center, Paper, PasswordInput, Stack, TextInput, Text } from '@mantine/core';

export function SignUp() {
  return (
    <div style={{ marginTop: '80px', background: '#0f172a' }}>
      <Center h={500}>
        <Paper radius="xl" p="xl" w={350} bg="#1e293b">
          <Text size="lg" fw={700} ta="center" mb="md" c="white">
            Sign up to Watch Anime
          </Text>
          <Stack gap="sm">
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
            <Button radius="lg" fullWidth mt="sm">
              Sign up
            </Button>
          </Stack>
        </Paper>
      </Center>
    </div>
  );
}
