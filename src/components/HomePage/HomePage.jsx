import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { fetchTrendingMovies } from 'services/fetchMovies';
import {
  Title,
  ListWrapper,
  List,
  MovieTitleWrapper,
  Image,
  ListItem,
} from './HomePage.styled';

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
        <List>
          {loading && <p>Loading...</p>}
          {trendingMovies &&
            trendingMovies.map(movie => (
              <ListItem key={movie.id}>
                <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                  <ListWrapper>
                    <Image
                      alt={movie.original_title}
                      src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
                    />
                    <MovieTitleWrapper>
                      {movie.original_title}
                    </MovieTitleWrapper>
                  </ListWrapper>
                </Link>
              </ListItem>
            ))}
          {error && <h2>Error. Something went wrong</h2>}
        </List>
      </main>
    </>
  );
};

export default HomePage;
