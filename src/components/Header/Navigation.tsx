import { UnstyledButton, Group } from '@mantine/core';

export function Navigation() {
  return (
    <Group gap="xl">
      <UnstyledButton component="a" href="#" c="white" fz="xl">
        Search
      </UnstyledButton>
      <UnstyledButton component="a" href="#" c="white" fz="xl">
        Social
      </UnstyledButton>
      <UnstyledButton component="a" href="#" c="white" fz="xl">
        Forum
      </UnstyledButton>
    </Group>
  );
}
