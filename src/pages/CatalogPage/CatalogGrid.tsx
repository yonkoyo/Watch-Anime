import { SimpleGrid, Center, Loader, Text, Pagination, Stack } from '@mantine/core';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getAnime } from '../../api/kinopoisk';
import { AnimeCard } from './AnimeCard';
import type { KinopoiskAnime } from '../../types/anime';
import type { CatalogFilters } from '../../types/filters';

type Props = {
  filters: CatalogFilters;
  keyword?: string;
};

export function CatalogGrid({ filters, keyword }: Props) {
  const [anime, setAnime] = useState<KinopoiskAnime[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get('page') ?? 1);

  useEffect(() => {
    setLoading(true);
    setError('');

    getAnime(page, filters, keyword)
      .then((data) => {
        const filtered = data.items.filter((item: KinopoiskAnime) => {
          const rating = item.ratingKinopoisk ?? 0;
          return (
            rating >= filters.ratingFrom &&
            rating <= filters.ratingTo &&
            (item.episodesCount ?? 0) >= filters.episodesFrom
          );
        });
        setAnime(filtered);
        setTotalPages(data.totalPages);
      })
      .catch(() => {
        setError('Failed to load anime');
      })
      .finally(() => {
        setLoading(false);
      });
  }, [page, filters, keyword]);

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
        <Pagination
          value={page}
          onChange={(newPage) =>
            setSearchParams({
              ...Object.fromEntries(searchParams.entries()),
              page: String(newPage),
            })
          }
          total={totalPages}
          radius="lg"
        />
      </Center>
    </Stack>
  );
}
