import { Group, TextInput, Anchor } from '@mantine/core';
import { Link } from 'react-router-dom';

export function Navigation() {
  return (
    <Group gap="xl">
      <TextInput radius="lg" size="sm" placeholder="Search" />
      <Anchor component={Link} to="/catalog" underline="never" c="white" fw={500} fz="xl">
        Catalog
      </Anchor>
      <Anchor href="#" underline="never" c="white" fw={500} fz="xl">
        Social
      </Anchor>
    </Group>
  );
}
