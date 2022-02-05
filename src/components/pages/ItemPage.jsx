import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieById } from 'services/fetchMovies';

const ItemPage = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState({});
  const [error, setError] = useState(false);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    fetchMovieById(itemId)
      .then(item => {
        setItem(item);
        setGenres(item.genres);
      })
      .catch(error => setError(error));
  }, [itemId]);

  return (
    <div>
      <button type="button">Go back</button>
      {error && <p>Something went wrong. Please try again</p>}
      {item && (
        <article>
          <img
            src={`https://image.tmdb.org/t/p/w342${item.poster_path}`}
            alt={item.original_title}
          />
          <h2>{item.title}</h2>
          <p>User score: {item.vote_average}</p>
          <h3>Overview</h3>
          <p>{item.overview}</p>
          <h4>Genres</h4>
          <p>{genres.map(gen => gen.name).join(' ')}</p>
        </article>
      )}
    </div>
  );
};

export default ItemPage;
