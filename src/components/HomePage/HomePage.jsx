import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchTrendingMovies } from 'services/fetchMovies';

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    try {
      fetchTrendingMovies().then(movies => setTrendingMovies(movies));
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <main>
        {isLoading === true ? <p>Loading...</p> : null}
        <ul>
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
