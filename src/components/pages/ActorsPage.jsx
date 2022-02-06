import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieActors } from 'services/fetchMovies';

const ActorsInfo = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState(null);

  useEffect(() => {
    fetchMovieActors(movieId).then(actors => setActors(actors));
  }, [movieId]);
  console.log(actors);
  return (
    <>
      {actors &&
        actors.map(actor => (
          <article>
            <img
              src={`https://image.tmdb.org/t/p/w342${actor.profile_path}`}
              alt=""
            />
            <p>{actor.original_name}</p>
            <p>{actor.character}</p>
          </article>
        ))}
    </>
  );
};
export default ActorsInfo;
