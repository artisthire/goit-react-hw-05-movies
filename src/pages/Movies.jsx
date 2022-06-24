import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { fetchFilteredMovies, transfromResponse } from 'services/api';

import Section from 'components/Section';
import ItemList from 'components/ItemList';
import SearchForm from 'components/SearchForm';

function Movies() {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const prevQuery =
    searchParams.get('query') ??
    new URLSearchParams(location.state?.from.search).get('query') ??
    '';

  useEffect(() => {
    if (prevQuery === '') {
      return;
    }

    setSearchParams({ query: prevQuery });

    (async () => {
      const filterMovies = await fetchFilteredMovies(prevQuery);
      const transformData = transfromResponse(filterMovies);
      setMovies(transformData);
    })();
  }, [prevQuery, setSearchParams]);

  function onSubmit(evt) {
    evt.preventDefault();
    const query = evt.currentTarget.elements.query.value;
    setSearchParams({ query });
  }

  return (
    <Section title="Find movies">
      <SearchForm onSubmit={onSubmit} defValue={prevQuery} />

      {movies.length > 0 && (
        <ItemList items={movies} state={{ from: location }} />
      )}

      {!movies.length && prevQuery !== '' && (
        <p>Not found for request: "{prevQuery}"</p>
      )}
    </Section>
  );
}

export default Movies;
