import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovieByQuery } from 'services/fetchMovies';
import { Wrapper, Button, Input } from './MoviesPage.styled';

const MoviesPage = () => {
  const [inputValue, setInputValue] = useState('');
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    if (inputValue) {
      fetchMovieByQuery(inputValue)
        .then(movies => setMovies(movies))
        .catch(error => {
          console.log(error);
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

          if (value === '') {
            toast.error('Please enter a search query');
            return;
          }

          setInputValue(value);
          form.reset();
        }}
      >
        <label>
          <Wrapper>
            <Input type="text" name="searchField" />
            <Button type="submit">Search</Button>
          </Wrapper>
        </label>
      </form>
      <div>
        {movies && (
          <ul>
            {movies.length === 0 ? <p>Sorry. Movie is not found</p> : null}
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

// return (
//   <>
//     <form
//       onSubmit={event => {
//         event.preventDefault();
//         const form = event.target;
//         const value = event.target.searchField.value;

//         if (value === '') {
//           toast.error('Please enter a search query');
//           return;
//         }

//         setInputValue(value);
//         form.reset();
//       }}
//     >
//       <label>
//         <input type="text" name="searchField" />
//       </label>
//       <button type="submit">Search</button>
//     </form>
//     <div>
//       {movies && (
//         <ul>
//           {movies.length === 0 ? <p>Sorry. Movie is not found</p> : null}
//           {movies.map(movie => (
//             <li key={movie.id}>
//               <Link to={`/movies/${movie.id}`}>{movie.original_title}</Link>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   </>
// );
