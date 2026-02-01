import { Anchor, Button, Group } from '@mantine/core';
import { Link } from 'react-router-dom';

export function Auth() {
  return (
    <Group gap="lg">
      <Anchor component={Link} to="/login" underline="never" c="white" fw={500} fz="xl">
        Login
      </Anchor>
      <Button component={Link} to="/signup" radius="lg" c="white" fz="xl">
        Sign Up
      </Button>
    </Group>
  );
}
