import { Button, Group, UnstyledButton } from '@mantine/core';

export function Auth() {
  return (
    <Group gap="lg">
      <UnstyledButton component="a" href="#" c="white" fz="xl">
        Log In
      </UnstyledButton>
      <Button component="a" href="#" c="white" fz="xl">
        Sign Up
      </Button>
    </Group>
  );
}
