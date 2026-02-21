import { Title, Stack, SimpleGrid } from '@mantine/core';
import { AnimeCard } from '@/pages/CatalogPage/AnimeCard';
import type { KinopoiskAnime } from '@/types/anime';

type Props = {
  title: string;
  items: KinopoiskAnime[];
};

export function AnimeSection({ title, items }: Props) {
  return (
    <Stack gap="md">
      <Title order={2} c="white">
        {title}
      </Title>
      <SimpleGrid cols={{ base: 2, sm: 3, md: 5 }} spacing="lg">
        {items.map((item) => (
          <AnimeCard
            key={item.kinopoiskId}
            id={item.kinopoiskId}
            titleRu={item.nameRu}
            titleEn={item.nameEn}
            image={item.posterUrlPreview}
            rating={item.ratingKinopoisk}
            year={item.year}
            description={item.description}
            episodes={item.episodesCount}
          />
        ))}
      </SimpleGrid>
    </Stack>
  );
}
