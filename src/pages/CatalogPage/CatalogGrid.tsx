import { SimpleGrid } from '@mantine/core';
import { animeList } from '../../mock/anime';
import { AnimeCard } from './AnimeCard';

export function CatalogGrid() {
  return (
    <SimpleGrid cols={{ base: 2, sm: 3, md: 4 }} spacing="lg">
      {animeList.map((anime) => (
        <AnimeCard key={anime.id} {...anime} />
      ))}
    </SimpleGrid>
  );
}
