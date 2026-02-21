import axios from 'axios';
import type { CatalogFilters } from '@/types/filters';
import type { KinopoiskAnime, KinopoiskAnimeDetail } from '@/types/anime';

const api = axios.create({
  baseURL: 'https://kinopoiskapiunofficial.tech/api/v2.2',
  headers: {
    'X-API-KEY': import.meta.env.VITE_KINOPOISK_API_KEY,
    'Content-Type': 'application/json',
  },
});

type FilmsResponse = {
  items: KinopoiskAnime[];
  totalPages: number;
  totalResults: number;
};

export async function getAnime(
  page = 1,
  filters?: CatalogFilters,
  keyword?: string,
): Promise<FilmsResponse> {
  const params = {
    genres: String(filters?.genre ?? 24),
    ratingFrom: String(filters?.ratingFrom ?? 0),
    ratingTo: String(filters?.ratingTo ?? 10),
    yearFrom: String(filters?.yearFrom ?? 1990),
    yearTo: String(filters?.yearTo ?? new Date().getFullYear()),
    order: filters?.order === 'YEAR' ? 'YEAR' : 'RATING',
    page: String(page),
    ...(keyword && { keyword }),
  };

  try {
    const { data } = await api.get<FilmsResponse>('/films', { params });
    return data;
  } catch (error) {
    console.error('Error fetching anime:', error);
    throw new Error('Не удалось загрузить аниме. Проверьте подключение или API-ключ.');
  }
}

export async function getAnimeById(id: number): Promise<KinopoiskAnimeDetail> {
  try {
    const { data } = await api.get<KinopoiskAnimeDetail>(`/films/${id}`);
    return data;
  } catch (error) {
    console.error(`Error fetching anime with id ${id}:`, error);
    throw new Error('Не удалось загрузить информацию об аниме.');
  }
}
