import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
  Container,
  Loader,
  Center,
  Text,
  Title,
  Grid,
  Image,
  Group,
  Badge,
  Button,
  Menu,
} from '@mantine/core';
import { getAnimeById } from '@/api/kinopoisk';
import { PageLayout } from './PageLayout';
import type { KinopoiskAnimeDetail } from '@/types/anime';
import type { WatchStatus } from '@/types/userList';
import { watchStatusLabels } from '@/types/userList';

export function AnimePage() {
  const { id } = useParams<{ id: string }>();
  const [anime, setAnime] = useState<KinopoiskAnimeDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [status, setStatus] = useState<WatchStatus | null>(null);

  useEffect(() => {
    if (!id) return;
    getAnimeById(Number(id))
      .then((data) => setAnime(data))
      .catch(() => setError('Failed to load anime'))
      .finally(() => setLoading(false));
  }, [id]);

  useEffect(() => {
    if (!id) return;
    const saved = localStorage.getItem(`anime-status-${id}`);
    if (saved) {
      setStatus(saved as WatchStatus);
    }
  }, [id]);

  const handleStatusChange = (newStatus: WatchStatus | null) => {
    if (!id) return;
    if (newStatus) {
      localStorage.setItem(`anime-status-${id}`, newStatus);
      setStatus(newStatus);
    } else {
      localStorage.removeItem(`anime-status-${id}`);
      setStatus(null);
    }
  };

  if (loading) {
    return (
      <PageLayout>
        <Center mt="xl">
          <Loader />
        </Center>
      </PageLayout>
    );
  }

  if (error || !anime) {
    return (
      <PageLayout>
        <Center mt="xl">
          <Text c="red">{error || 'Anime not found'}</Text>
        </Center>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <Container size="lg">
        <Grid gutter="xl">
          <Grid.Col span={{ base: 12, sm: 4 }}>
            <Image
              src={anime.posterUrl}
              alt={anime.nameRu ?? anime.nameOriginal ?? 'Anime poster'}
              radius="lg"
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 8 }}>
            <Title c="white" mb={4}>
              {anime.nameRu || anime.nameOriginal}
            </Title>
            {anime.nameOriginal && (
              <Text c="gray.4" mb="sm">
                {anime.nameOriginal}
              </Text>
            )}
            <Group gap="md" mb="sm">
              <Text c="yellow">⭐ {anime.ratingKinopoisk ?? '-'}</Text>
              <Text c="gray.4">{anime.year}</Text>
              {anime.filmLength && <Text c="blue.4">{anime.filmLength} min</Text>}
            </Group>
            <Group gap="xs" mb="md">
              {anime.genres.map((g) => (
                <Badge key={g.genre} variant="light" color="blue">
                  {g.genre}
                </Badge>
              ))}
            </Group>
            <Text c="gray.3" lh={1.6}>
              {anime.description || 'No description'}
            </Text>
            <Group mt="lg">
              <Button component={Link} to={`/watch/${anime.kinopoiskId}`} radius="lg">
                ▶ Watch
              </Button>
              <Menu shadow="md" width={200}>
                <Menu.Target>
                  <Button variant="light" radius="lg">
                    {status ? `Status: ${watchStatusLabels[status]}` : 'Add to list'}
                  </Button>
                </Menu.Target>
                <Menu.Dropdown>
                  <Menu.Item onClick={() => handleStatusChange('PLANNED')}>
                    {watchStatusLabels.PLANNED}
                  </Menu.Item>
                  <Menu.Item onClick={() => handleStatusChange('WATCHING')}>
                    {watchStatusLabels.WATCHING}
                  </Menu.Item>
                  <Menu.Item onClick={() => handleStatusChange('COMPLETED')}>
                    {watchStatusLabels.COMPLETED}
                  </Menu.Item>
                  <Menu.Item onClick={() => handleStatusChange('DROPPED')}>
                    {watchStatusLabels.DROPPED}
                  </Menu.Item>
                  <Menu.Divider />
                  <Menu.Item color="red" onClick={() => handleStatusChange(null)}>
                    Remove from list
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>
            </Group>
          </Grid.Col>
        </Grid>
      </Container>
    </PageLayout>
  );
}
