import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieActors } from 'services/fetchMovies';
import { Gallery, GalleryItem, Text } from './ActorsPageStyled';

const ActorsInfo = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState(null);

  useEffect(() => {
    fetchMovieActors(movieId).then(actors => setActors(actors));
  }, [movieId]);

  return (
    <Gallery>
      {actors &&
        actors.map(actor => (
          <GalleryItem key={actor.id}>
            <img
              src={`https://image.tmdb.org/t/p/w342${actor.profile_path}`}
              alt=""
            />
            <Text>{actor.original_name}</Text>
            <Text>{actor.character}</Text>
          </GalleryItem>
        ))}
    </Gallery>
  );
};
export default ActorsInfo;
