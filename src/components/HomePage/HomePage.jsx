import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { fetchTrendingMovies } from 'services/fetchMovies';
import { Title, ListItem } from './HomePage.styled';

const HomePage = () => {
  const location = useLocation();
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
      <main>
        <Title>Trending today</Title>
        <ul>
          {loading && <p>Loading...</p>}
          {trendingMovies &&
            trendingMovies.map(movie => (
              <ListItem key={movie.id}>
                <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                  {movie.original_title}
                </Link>
              </ListItem>
            ))}
          {error && <h2>Error. Something went wrong</h2>}
        </ul>
      </main>
    </>
  );
};

export default HomePage;
