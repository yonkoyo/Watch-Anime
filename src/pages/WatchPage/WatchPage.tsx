import { Center, Stack, Title, Text } from '@mantine/core';
import { PageLayout } from '../AnimePage/PageLayout';
import { useParams } from 'react-router-dom';

export function WatchPage() {
  const { id } = useParams();

  return (
    <PageLayout>
      <Center h="60vh">
        <Stack align="center" gap="sm">
          <Title c="white">🎬 Watch Anime</Title>
          <Text c="gray.4" size="lg">
            Player for anime #{id} is under maintenance.
          </Text>
          <Text c="gray.5" size="sm">
            Video streaming will be available soon.
          </Text>
        </Stack>
      </Center>
    </PageLayout>
  );
}
