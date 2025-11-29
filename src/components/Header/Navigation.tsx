import { Group, TextInput, Anchor } from '@mantine/core';

export function Navigation() {
  return (
    <Group gap="xl">
      <TextInput size="sm" placeholder="Search" />
      <Anchor href="#" underline="never" c="white" fw={500} fz="xl">
        Catalog
      </Anchor>
      <Anchor href="#" underline="never" c="white" fw={500} fz="xl">
        Social
      </Anchor>
    </Group>
  );
}
