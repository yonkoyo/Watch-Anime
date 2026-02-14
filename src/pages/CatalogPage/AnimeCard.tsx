import { Card, Image, Text, Group, Popover, Stack } from '@mantine/core';
import { useHover } from '@mantine/hooks';
import { Link } from 'react-router-dom';

type AnimeCardProps = {
  id: number;
  titleRu?: string | null;
  titleEn?: string | null;
  image: string;
  rating: number | null;
  year: number;
  description?: string;
  episodes?: number;
};

export function AnimeCard({
  id,
  titleRu,
  titleEn,
  image,
  rating,
  year,
  description,
  episodes,
}: AnimeCardProps) {
  const { hovered, ref } = useHover();

  return (
    <Popover opened={hovered} width={260} withArrow shadow="md">
      <Popover.Target>
        <div ref={ref}>
          <Card
            component={Link}
            to={`/anime/${id}`}
            radius="lg"
            bg="#1e293b"
            h="100%"
            style={{ display: 'flex', flexDirection: 'column', cursor: 'pointer' }}
          >
            <Card.Section>
              <Image src={image} height={260} />
            </Card.Section>
            <Text fw={600} mt="sm" c="white" lineClamp={2}>
              {titleRu || titleEn}
            </Text>
            <Group justify="space-between" mt="auto" pt="sm">
              <Text size="sm" c="gray.4">
                {year}
              </Text>
              <Text size="sm" c="yellow">
                ⭐ {rating ?? '-'}
              </Text>
            </Group>
          </Card>
        </div>
      </Popover.Target>
      <Popover.Dropdown bg="#020617">
        <Stack gap={6}>
          <Text fw={600} c="white">
            {titleRu}
          </Text>
          {titleEn && (
            <Text size="sm" c="gray.4">
              {titleEn}
            </Text>
          )}
          <Group gap="xs">
            <Text size="sm" c="gray.4">
              {year}
            </Text>
            <Text size="sm" c="yellow">
              ⭐ {rating ?? '-'}
            </Text>
            <Text size="sm" c="blue.4">
              EP: {episodes ?? '—'}
            </Text>
          </Group>
          {description && (
            <Text size="sm" c="gray.3" lineClamp={4}>
              {description}
            </Text>
          )}
        </Stack>
      </Popover.Dropdown>
    </Popover>
  );
}
