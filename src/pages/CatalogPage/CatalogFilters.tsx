import { RangeSlider, Select, NumberInput, Stack, Button, Text, Paper } from '@mantine/core';
import type { CatalogFilters } from '../../types/filters';

type Props = {
  filters: CatalogFilters;
  setFilters: (filters: Partial<CatalogFilters>) => void;
};

export function CatalogFilters({ filters, setFilters }: Props) {
  return (
    <Paper bg="#1e293b" p="md" radius="lg">
      <Stack>
        <Text c="white" fw={600}>
          Filters
        </Text>
        <Text c="gray.4" size="sm">
          Rating
        </Text>
        <RangeSlider
          min={0}
          max={10}
          step={0.1}
          value={[filters.ratingFrom, filters.ratingTo]}
          onChange={([from, to]) => setFilters({ ratingFrom: from, ratingTo: to })}
        />
        <Text c="gray.4" size="sm">
          Year
        </Text>
        <RangeSlider
          min={1980}
          max={2026}
          value={[filters.yearFrom, filters.yearTo]}
          onChange={([from, to]) => setFilters({ yearFrom: from, yearTo: to })}
        />
        <Select
          c="gray.4"
          label="Genre"
          data={[
            { value: '24', label: 'Anime' },
            { value: '2', label: 'Drama' },
            { value: '4', label: 'Comedy' },
          ]}
          value={filters.genre?.toString() ?? '24'}
          onChange={(value) =>
            setFilters({
              genre: value ? Number(value) : null,
            })
          }
        />
        <NumberInput
          c="gray.4"
          label="Episodes from"
          min={0}
          value={filters.episodesFrom}
          onChange={(value) =>
            setFilters({
              episodesFrom: Number(value),
            })
          }
        />
        <Select
          c="gray.4"
          label="Sort by"
          data={[
            { value: 'RATING', label: 'Rating' },
            { value: 'YEAR', label: 'Year' },
          ]}
          value={filters.order}
          onChange={(value) =>
            setFilters({
              order: value as 'RATING' | 'YEAR',
            })
          }
        />
        <Button
          variant="light"
          onClick={() =>
            setFilters({
              ratingFrom: 0,
              ratingTo: 10,
              yearFrom: 1990,
              yearTo: 2026,
              genre: 24,
              episodesFrom: 0,
              order: 'RATING',
            })
          }
        >
          Reset
        </Button>
      </Stack>
    </Paper>
  );
}
