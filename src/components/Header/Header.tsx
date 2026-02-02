import { Anchor, Container, Group, Image } from '@mantine/core';
import { Navigation } from './Navigation';
import { Auth } from './Auth';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header
      style={{
        backgroundColor: '#1e293b',
        padding: '1rem 0',
        position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        zIndex: 1000,
      }}
    >
      <Container size="lg">
        <Group justify="space-between" align="center">
          <Anchor component={Link} to="/" underline="never">
            <Image h={55} w={55} src="/imgs/face.png" alt="logo" />
          </Anchor>
          <Navigation />
          <Auth />
        </Group>
      </Container>
    </header>
  );
}
