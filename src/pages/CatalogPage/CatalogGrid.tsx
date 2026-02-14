import { SimpleGrid, Center, Loader, Text, Pagination, Stack } from '@mantine/core';
import { useEffect, useState } from 'react';
import { getAnime } from '../../api/kinopoisk';
import { AnimeCard } from './AnimeCard';
import type { KinopoiskAnime } from '../../types/anime';

export function CatalogGrid() {
  const [anime, setAnime] = useState<KinopoiskAnime[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    setError('');

    getAnime(page)
      .then((data) => {
        setAnime(data.items);
        setTotalPages(data.totalPages);
      })
      .catch(() => {
        setError('Failed to load anime');
      })
      .finally(() => {
        setLoading(false);
      });
  }, [page]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [page]);

  if (loading) {
    return (
      <Center mt="xl">
        <Loader size="lg" />
      </Center>
    );
  }

  if (error) {
    return (
      <Center mt="xl">
        <Text c="red">{error}</Text>
      </Center>
    );
  }

  return (
    <Stack gap="xl">
      <SimpleGrid cols={{ base: 2, sm: 3, md: 4 }} spacing="lg">
        {anime.map((item) => (
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
      <Center>
        <Pagination value={page} onChange={setPage} total={totalPages} radius="lg" />
      </Center>
    </Stack>
  );
}
