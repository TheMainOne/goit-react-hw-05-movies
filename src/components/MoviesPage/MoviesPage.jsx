import toast, { Toaster } from 'react-hot-toast';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovieByQuery } from 'services/fetchMovies';
import { Wrapper, Button, Input, ListItem } from './MoviesPage.styled';

const MoviesPage = () => {
  const location = useLocation();
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    if (query) {
      fetchMovieByQuery(query)
        .then(movies => setMovies(movies))
        .catch(error => {
          console.log(error);
          toast.error('Sorry. Movie is not found');
        });
      return;
    }
  }, [query]);

  return (
    <>
      <form
        autoComplete="off"
        onSubmit={event => {
          event.preventDefault();
          const form = event.target;
          const value = event.target.searchField.value;

          if (value === '') {
            toast.error('Please enter a search query');
            return;
          }

          setSearchParams({ query: value });
          form.reset();
        }}
      >
        <label>
          <Wrapper>
            <Input type="text" name="searchField" />
            <Button type="submit">Search</Button>
            <Toaster />
          </Wrapper>
        </label>
      </form>
      <div>
        {movies && (
          <ul>
            {movies.length === 0 ? <p>Sorry. Movie is not found</p> : null}
            {movies.map(movie => (
              <ListItem key={movie.id}>
                <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                  {movie.original_title}
                </Link>
              </ListItem>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default MoviesPage;
