import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import styled from 'styled-components';
import {
  useParams,
  Link,
  NavLink,
  Outlet,
  useLocation,
} from 'react-router-dom';
import { fetchMovieById } from 'services/fetchMovies';
import {
  Wrapper,
  Description,
  Title,
  Text,
  TitleTwo,
  TitleThree,
  AdditionalInfo,
  AdditionalWrapper,
} from 'components/pages/MovieDetailsPageStyled';

const GoBackButton = styled(Link)`
  background-color: #eee;
  border: 1px solid #bdbdbd;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  border-radius: 0.25rem;

  &:hover {
    background-color: #bdbdbd;
  }
`;

const AdditionalLink = styled(NavLink)`
  background-color: #eee;
  border: 1px solid #bdbdbd;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  border-radius: 0.25rem;

  &:not(:last-of-type) {
    margin-right: 5px;
  }

  &:hover {
    background-color: #bdbdbd;
  }
`;

const ItemPage = () => {
  const location = useLocation();
  const path = location.state;
  const { movieId } = useParams();
  const [item, setItem] = useState(null);
  const [error, setError] = useState(false);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    fetchMovieById(movieId)
      .then(item => {
        setItem(item);
        setGenres(item.genres);
      })
      .catch(error => {
        setError(error);
        toast.error('Sorry. Movie is not found');
      });
  }, [movieId]);
  console.log(path);

  return (
    <>
      <div>
        {path && (
          <GoBackButton to={path.from.pathname === '/' ? '/' : '/movies'}>
            Go back
          </GoBackButton>
        )}
        {!path && <GoBackButton to={'/'}>Go back</GoBackButton>}
        {error && <p>Something went wrong. Please try again later</p>}
        {item && (
          <Wrapper>
            <img
              src={`https://image.tmdb.org/t/p/w342${item.poster_path}`}
              alt={item.original_title}
            />
            <Description>
              <Title>{item.title}</Title>
              <Text>User score: {item.vote_average}</Text>
              <TitleTwo>Overview</TitleTwo>
              <Text>{item.overview}</Text>
              <TitleThree>Genres</TitleThree>
              <Text>{genres.map(gen => gen.name).join(', ')}</Text>
            </Description>
          </Wrapper>
        )}
      </div>
      <AdditionalWrapper>
        <AdditionalInfo>Additional information</AdditionalInfo>
        <AdditionalLink to={`/movies/${movieId}/cast`}>Cast</AdditionalLink>
        <AdditionalLink to={`/movies/${movieId}/reviews`}>
          Reviews
        </AdditionalLink>
      </AdditionalWrapper>

      <Outlet />
    </>
  );
};

export default ItemPage;
