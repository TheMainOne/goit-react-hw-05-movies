import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieActors } from 'services/fetchMovies';
import { Gallery, GalleryItem, Text } from './ActorsPageStyled';
import NotFound from '../../images/NotFound.jpg';

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
            {actor.profile_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w342${actor.profile_path}`}
                alt=""
              />
            ) : (
              <img src={NotFound} alt="" width={342} height={513} />
            )}

            <Text>{actor.original_name}</Text>
            <Text>{actor.character}</Text>
          </GalleryItem>
        ))}
    </Gallery>
  );
};
export default ActorsInfo;
