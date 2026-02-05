import { Container, Title } from '@mantine/core';
import { CatalogGrid } from './CatalogGrid';

export function CatalogPage() {
  const HEADER_HEIGHT = 80;

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#0f172a',
        paddingTop: HEADER_HEIGHT + 40,
        paddingBottom: '80px',
      }}
    >
      <Container size="lg">
        <Title mb="md" c="white">
          Catalog
        </Title>
        <CatalogGrid />
      </Container>
    </div>
  );
}
