import { useEffect, useState } from 'react';
import { Container, Stack, Loader, Center } from '@mantine/core';
import { PageLayout } from '../AnimePage/PageLayout';
import { getAnime } from '@/api/kinopoisk';
import type { KinopoiskAnime } from '@/types/anime';
import { AnimeSection } from '@/components/AnimeSection/AnimeSection';

export function MainPage() {
  const [popular, setPopular] = useState<KinopoiskAnime[]>([]);
  const [newAnime, setNewAnime] = useState<KinopoiskAnime[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const popularData = await getAnime(1, {
          ratingFrom: 7,
          ratingTo: 10,
          yearFrom: 1990,
          yearTo: new Date().getFullYear(),
          genre: 24,
          episodesFrom: 0,
          order: 'RATING',
        });

        const newData = await getAnime(1, {
          ratingFrom: 0,
          ratingTo: 10,
          yearFrom: 2024,
          yearTo: 2026,
          genre: 24,
          episodesFrom: 0,
          order: 'YEAR',
        });

        setPopular(popularData.items.slice(0, 10));
        setNewAnime(newData.items.slice(0, 10));
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return (
      <PageLayout>
        <Center mt="xl">
          <Loader size="lg" />
        </Center>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <Container size="lg">
        <Stack gap="xl">
          <AnimeSection title="🔥 Popular now" items={popular} />
          <AnimeSection title="🆕 New releases" items={newAnime} />
        </Stack>
      </Container>
    </PageLayout>
  );
}
