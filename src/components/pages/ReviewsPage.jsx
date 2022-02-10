import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'services/fetchMovies';
import { Title, Review } from './ReviewsPageStyled';

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
      {!reviews && <p>We don't have any reviews for this movie.</p>}
      {reviews &&
        reviews.map(review => (
          <ul key={review.id}>
            <li>
              <Title>Author: {review.author}</Title>
              <Review>{review.content}</Review>
            </li>
          </ul>
        ))}
    </>
  );
};
export default ReviewsInfo;
