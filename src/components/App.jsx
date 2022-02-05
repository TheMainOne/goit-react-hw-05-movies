import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import HomePage from './HomePage/HomePage';
import { fetchTrendingMovies } from 'services/fetchMovies';

export const App = () => {
  const [trendingMovies, setTrendingMovies] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTrendingMovies()
      .then(movies => setTrendingMovies(movies))
      .catch(error => setError(error));
  }, []);

  return (
    <header>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route
            path="homepage"
            element={
              <HomePage errorMessage={error} trendingMovies={trendingMovies} />
            }
          />
          <Route path="movies" element={<h1>Please enjoy our movies</h1>} />
        </Route>
      </Routes>
    </header>
  );
};
