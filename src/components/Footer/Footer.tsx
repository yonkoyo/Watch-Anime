import { Container, Group, Text, Anchor } from '@mantine/core';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Container size="lg" py="md">
        <Group justify="space-between" align="center">
          <Text size="sm" c="gray.5">
            © 2026 Watch Anime
          </Text>
          <Group gap="lg">
            <Anchor href="#" c="gray.4" size="sm">
              About
            </Anchor>
            <Anchor href="#" c="gray.4" size="sm">
              Contacts
            </Anchor>
            <Anchor href="#" c="gray.4" size="sm">
              GitHub
            </Anchor>
          </Group>
        </Group>
      </Container>
    </footer>
  );
}
