const BASE_URL = 'https://api.themoviedb.org/3/';
const KEY = '3f98aefed4f412e17fc5cbf8a78c872a';

async function fetchMoviesWithErrorHandling(url = '') {
  const response = await fetch(url);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not Found'));
}

export function fetchTrendingMovies() {
  return fetchMoviesWithErrorHandling(
    `${BASE_URL}/trending/movie/day?api_key=${KEY}`
  );
}

export function fetchMovieByQuery(searchQuery) {
  return fetchMoviesWithErrorHandling(
    `${BASE_URL}/search/movie?api_key=${KEY}&query=${searchQuery}&page=1`
  );
}

export function fetchDetailMovieInfo(movieId) {
  return fetchMoviesWithErrorHandling(
    `${BASE_URL}/movie/${movieId}?api_key=${KEY}`
  );
}
