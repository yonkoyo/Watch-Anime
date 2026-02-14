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

export type KinopoiskAnimeDetail = {
  kinopoiskId: number;
  nameRu: string | null;
  nameEn: string | null;
  nameOriginal: string | null;
  year: number;
  ratingKinopoisk: number | null;
  posterUrl: string;
  posterUrlPreview: string;
  description: string | null;
  shortDescription: string | null;
  filmLength: number | null;
  episodesCount: number | null;
  genres: {
    genre: string;
  }[];
  countries: {
    country: string;
  }[];
};
