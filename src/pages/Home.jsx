import { fetchAllMovies, transfromResponse } from 'services/api';

import useLoader from 'hooks/useLoader';
import Section from 'components/Section';
import ItemList from 'components/ItemList';

function Home() {
  let { data, isLoaded, Loader } = useLoader({
    callback: fetchAllMovies,
    initData: [],
  });

  data = transfromResponse(data, 'movies/');

  return (
    <Section title="Tranding today">
      {isLoaded && <ItemList items={data} />}

      <Loader />
    </Section>
  );
}

export default Home;
