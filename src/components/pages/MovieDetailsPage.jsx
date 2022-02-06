import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { useParams, Link } from 'react-router-dom';
import { fetchMovieById } from 'services/fetchMovies';
import styled from 'styled-components';

const Wrapper = styled.article`
  display: flex;
`;

const ItemPage = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);
  const [error, setError] = useState(false);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    fetchMovieById(itemId)
      .then(item => {
        setItem(item);
        setGenres(item.genres);
      })
      .catch(error => {
        setError(error);
        toast.error('Sorry. Movie is not found');
      });
  }, [itemId]);

  return (
    <div>
      <Link to="/">Go back</Link>
      {error && <p>Something went wrong. Please try again later</p>}
      {item && (
        <Wrapper>
          <img
            src={`https://image.tmdb.org/t/p/w342${item.poster_path}`}
            alt={item.original_title}
          />
          <div>
            <h2>{item.title}</h2>
            <p>User score: {item.vote_average}</p>
            <h3>Overview</h3>
            <p>{item.overview}</p>
            <h4>Genres</h4>
            <p>{genres.map(gen => gen.name).join(' ')}</p>
          </div>
        </Wrapper>
      )}
    </div>
  );
};

export default ItemPage;
