const BASE_URL = 'https://kinopoiskapiunofficial.tech/api/v2.2';

export async function getAnime(page = 1) {
  const res = await fetch(`${BASE_URL}/films?genres=24&ratingFrom=7&order=NUM_VOTE&page=${page}`, {
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
