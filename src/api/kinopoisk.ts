import type { CatalogFilters } from '../types/filters';

const BASE_URL = 'https://kinopoiskapiunofficial.tech/api/v2.2';

export async function getAnime(page = 1, filters?: CatalogFilters, keyword?: string) {
  const params = new URLSearchParams({
    genres: String(filters?.genre ?? 24),
    ratingFrom: String(filters?.ratingFrom ?? 0),
    ratingTo: String(filters?.ratingTo ?? 10),
    yearFrom: String(filters?.yearFrom ?? 1990),
    yearTo: String(filters?.yearTo ?? new Date().getFullYear()),
    order: filters?.order === 'YEAR' ? 'YEAR' : 'RATING',
    page: String(page),
  });

  if (keyword) {
    params.append('keyword', keyword);
  }

  const res = await fetch(`${BASE_URL}/films?${params.toString()}`, {
    headers: {
      'X-API-KEY': import.meta.env.VITE_KINOPOISK_API_KEY,
      'Content-Type': 'application/json',
    },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch anime');
  }

  return res.json();
}

export async function getAnimeById(id: number) {
  const res = await fetch(`${BASE_URL}/films/${id}`, {
    headers: {
      'X-API-KEY': import.meta.env.VITE_KINOPOISK_API_KEY,
      'Content-Type': 'application/json',
    },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch anime');
  }

  return res.json();
}
