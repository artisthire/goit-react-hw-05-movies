import { useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from 'services/api';
import useLoader from 'hooks/useLoader';
import Section from 'components/Section';
import ActorCard from 'components/ActorCard';

function Cast() {
  const { movieId } = useParams();

  const fetch = useCallback(async () => fetchMovieCredits(movieId), [movieId]);

  const { data, isLoaded, Loader } = useLoader({
    callback: fetch,
    initData: [],
  });

  return (
    <Section>
      {isLoaded && (
        <ul>
          {data.map(actor => (
            <ActorCard key={actor.id} actor={actor} />
          ))}
        </ul>
      )}

      <Loader />
    </Section>
  );
}

export default Cast;
