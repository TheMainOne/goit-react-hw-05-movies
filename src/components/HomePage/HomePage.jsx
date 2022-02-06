import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchTrendingMovies } from 'services/fetchMovies';

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    try {
      fetchTrendingMovies().then(movies => setTrendingMovies(movies));
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <main>
        <ul>
          {loading && <p>Loading...</p>}
          {trendingMovies &&
            trendingMovies.map(movie => (
              <li key={movie.id}>
                <Link to={`/movies/${movie.id}`}>{movie.original_title}</Link>
              </li>
            ))}
          {error && <h2>Error. Something went wrong</h2>}
        </ul>
      </main>
    </>
  );
};

export default HomePage;
