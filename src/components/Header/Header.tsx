import { Container, Group, Anchor } from '@mantine/core';
import { Navigation } from './Navigation';
import { Auth } from './Auth';

export function Header() {
  return (
    <header style={{ backgroundColor: '#1e293b', padding: '1rem 0' }}>
      <Container size="lg">
        <Group justify="space-between" align="center">
          <Anchor href="#" underline="never" fz="xl" fw={700} c="white">
            W/A
          </Anchor>
          <Navigation />
          <Auth />
        </Group>
      </Container>
    </header>
  );
}
