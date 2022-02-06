import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovieByQuery } from 'services/fetchMovies';

const MoviesPage = () => {
  const [inputValue, setInputValue] = useState('');
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    if (inputValue) {
      console.log('use');
      fetchMovieByQuery(inputValue)
        .then(movies => setMovies(movies))
        .catch(error => {
          toast.error('Sorry. Movie is not found');
        })
        .finally(setInputValue(''));
    }
  }, [inputValue]);

  return (
    <>
      <form
        onSubmit={event => {
          event.preventDefault();
          const form = event.target;
          const value = event.target.searchField.value;
          setInputValue(value);
          form.reset();
        }}
      >
        <label>
          <input type="text" name="searchField" />
        </label>
        <button type="submit">Search</button>
      </form>
      <div>
        {movies && (
          <ul>
            {movies.map(movie => (
              <li key={movie.id}>
                <Link to={`/movies/${movie.id}`}>{movie.original_title}</Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default MoviesPage;
