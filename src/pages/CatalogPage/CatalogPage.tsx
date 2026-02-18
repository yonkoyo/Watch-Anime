import { Grid, Container, Title } from '@mantine/core';
import { useSearchParams } from 'react-router-dom';
import type { CatalogFilters } from '../../types/filters';
import { CatalogFilters as FiltersPanel } from './CatalogFilters';
import { CatalogGrid } from './CatalogGrid';
import { PageLayout } from '../AnimePage/PageLayout';

export function CatalogPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get('keyword') ?? '';

  const filters: CatalogFilters = {
    ratingFrom: Number(searchParams.get('ratingFrom') ?? 0),
    ratingTo: Number(searchParams.get('ratingTo') ?? 10),
    yearFrom: Number(searchParams.get('yearFrom') ?? 1990),
    yearTo: Number(searchParams.get('yearTo') ?? 2026),
    genre: Number(searchParams.get('genre') ?? 24),
    episodesFrom: Number(searchParams.get('episodesFrom') ?? 0),
    order: (searchParams.get('order') as 'RATING' | 'YEAR') ?? 'RATING',
  };

  const updateFilters = (newFilters: Partial<CatalogFilters>) => {
    const updated = { ...filters, ...newFilters };

    setSearchParams({
      ratingFrom: String(updated.ratingFrom),
      ratingTo: String(updated.ratingTo),
      yearFrom: String(updated.yearFrom),
      yearTo: String(updated.yearTo),
      genre: String(updated.genre),
      episodesFrom: String(updated.episodesFrom),
      order: updated.order,
      page: '1',
    });
  };

  return (
    <PageLayout>
      <Container size="lg">
        <Title mb="md" c="white">
          Catalog
        </Title>
        <Grid>
          <Grid.Col span={{ base: 12, md: 9 }}>
            <CatalogGrid filters={filters} keyword={keyword} />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 3 }}>
            <FiltersPanel filters={filters} setFilters={updateFilters} />
          </Grid.Col>
        </Grid>
      </Container>
    </PageLayout>
  );
}
