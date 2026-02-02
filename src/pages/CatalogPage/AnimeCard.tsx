import { Card, Image, Text, Group } from '@mantine/core';

type AnimeCardProps = {
  title: string;
  image: string;
  rating: number;
  year: number;
};

export function AnimeCard({ title, image, rating, year }: AnimeCardProps) {
  return (
    <Card radius="lg" bg="#1e293b">
      <Card.Section>
        <Image src={image} height={260} />
      </Card.Section>

      <Text fw={600} mt="sm" c="white">
        {title}
      </Text>

      <Group justify="space-between" mt="xs">
        <Text size="sm" c="gray.4">
          {year}
        </Text>
        <Text size="sm" c="yellow">
          ⭐ {rating}
        </Text>
      </Group>
    </Card>
  );
}
