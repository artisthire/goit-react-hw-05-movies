import { useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'services/api';
import useLoader from 'hooks/useLoader';
import Section from 'components/Section';

function Reviews() {
  const { movieId } = useParams();

  const fetch = useCallback(async () => fetchMovieReviews(movieId), [movieId]);

  const { data, isLoaded, Loader } = useLoader({
    callback: fetch,
    initData: [],
  });

  return (
    <Section>
      {isLoaded && (
        <ul>
          {data.map(review => (
            <li key={review.id}>
              <h4>Author: {review.author}</h4>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
      <Loader />
    </Section>
  );
}

export default Reviews;
