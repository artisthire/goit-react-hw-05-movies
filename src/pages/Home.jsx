import { fetchAllMovies } from 'services/api';

import useLoader from 'hooks/useLoader';
import Section from 'components/Section';
import MovieList from 'components/MovieList';

function Home() {
  let { data, isLoaded, Loader } = useLoader({
    callback: fetchAllMovies,
    initData: [],
  });

  return (
    <Section title="Tranding today">
      {isLoaded && <MovieList movies={data} toLink="movies/" />}

      <Loader />
    </Section>
  );
}

export default Home;
