import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const KEY = '3f98aefed4f412e17fc5cbf8a78c872a';

async function fetchMoviesWithErrorHandling(url = '') {
  const response = await axios.get(url);
  const data = response.data.results;
  return data;
}

export function fetchTrendingMovies() {
  return fetchMoviesWithErrorHandling(`/trending/movie/day?api_key=${KEY}`);
}

export function fetchMovieByQuery(searchQuery) {
  return fetchMoviesWithErrorHandling(
    `/search/movie?api_key=${KEY}&query=${searchQuery}&page=1`
  );
}

export function fetchDetailMovieInfo(movieId) {
  return fetchMoviesWithErrorHandling(`/movie/${movieId}?api_key=${KEY}`);
}