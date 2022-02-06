import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'services/fetchMovies';

const ReviewsInfo = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    fetchMovieReviews(movieId).then(reviews => {
      if (reviews.length > 0) {
        setReviews(reviews);
      }
    });
  }, [movieId]);

  return (
    <>
      {reviews &&
        reviews.map(review => (
          <ul key={review.id}>
            <li>
              <h3>Author: {review.author}</h3>
              <p>{review.content}</p>
            </li>
          </ul>
        ))}
    </>
  );
};
export default ReviewsInfo;
