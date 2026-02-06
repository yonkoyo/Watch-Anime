export type KinopoiskAnime = {
  kinopoiskId: number;
  nameRu: string | null;
  nameEn: string | null;
  year: number;
  ratingKinopoisk: number | null;
  posterUrlPreview: string;
  description?: string;
  episodesCount?: number;
};
