import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'services/api';
import Section from 'components/Section';

function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    (async () => {
      const reviews = await fetchMovieReviews(movieId);
      setReviews(reviews);
    })();
  }, [movieId]);

  return (
    <Section>
      {!reviews.length && <p>We don`t have any reviews for this movie</p>}
      {reviews.length > 0 && (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <h4>Author: {review.author}</h4>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
    </Section>
  );
}

export default Reviews;
