import { Anchor, Button, Group } from '@mantine/core';

export function Auth() {
  return (
    <Group gap="lg">
      <Anchor href="#" underline="never" c="white" fw={500} fz="xl">
        Log In
      </Anchor>
      <Button component="a" href="#" c="white" fz="xl">
        Sign Up
      </Button>
    </Group>
  );
}
