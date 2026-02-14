export type CatalogFilters = {
  ratingFrom: number;
  ratingTo: number;
  yearFrom: number;
  yearTo: number;
  genre: number | null;
  episodesFrom: number;
  order: 'RATING' | 'YEAR';
};
