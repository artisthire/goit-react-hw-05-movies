import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from 'services/api';
import Section from 'components/Section';
import ActorCard from 'components/ActorCard';

function Cast() {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);

  useEffect(() => {
    (async () => {
      const actors = await fetchMovieCredits(movieId);
      setActors(actors);
    })();
  }, [movieId]);

  return (
    <Section>
      <ul>
        {actors.map(actor => (
          <ActorCard key={actor.id} actor={actor} />
        ))}
      </ul>
    </Section>
  );
}

export default Cast;
