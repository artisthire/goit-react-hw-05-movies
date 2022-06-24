import { useEffect, useState } from 'react';
import { fetchAllMovies, transfromResponse } from 'services/api';

import Section from 'components/Section';
import ItemList from 'components/ItemList';

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await fetchAllMovies();
      const transformData = transfromResponse(data, 'movies/');
      setMovies(transformData);
    })();
  }, []);

  return (
    <Section title="Tranding today">
      <ItemList items={movies} />
    </Section>
  );
}

export default Home;
