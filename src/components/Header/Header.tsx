import { Anchor, Container, Group, Image } from '@mantine/core';
import { Navigation } from './Navigation';
import { Auth } from './Auth';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
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
