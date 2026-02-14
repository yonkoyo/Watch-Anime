import { Container, Title } from '@mantine/core';
import { CatalogGrid } from './CatalogGrid';
import { PageLayout } from '../AnimePage/PageLayout';

export function CatalogPage() {
  return (
    <PageLayout>
      <Container size="lg">
        <Title mb="md" c="white">
          Catalog
        </Title>
        <CatalogGrid />
      </Container>
    </PageLayout>
  );
}
