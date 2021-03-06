import { useCallback } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { fetchFilteredMovies, transformResponse } from 'services/api';

import useLoader from 'hooks/useLoader';
import Section from 'components/Section';
import ItemList from 'components/LinkList';
import SearchForm from 'components/SearchForm';

function Movies() {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const prevQuery =
    searchParams.get('query') ??
    new URLSearchParams(location.state?.from.search).get('query') ??
    '';

  const fetch = useCallback(async () => {
    if (prevQuery === '') {
      return [];
    }

    setSearchParams({ query: prevQuery }, { replace: true });
    return fetchFilteredMovies(prevQuery);
  }, [prevQuery, setSearchParams]);

  let { data, isLoaded, Loader } = useLoader({
    callback: fetch,
    initData: [],
  });

  data = transformResponse(data);

  function onSubmit(evt) {
    evt.preventDefault();
    const query = evt.currentTarget.elements.query.value;

    if (searchParams.get('query') === query) {
      return;
    }

    setSearchParams({ query }, { replace: true });
  }

  return (
    <Section title="Find movies">
      <SearchForm onSubmit={onSubmit} defValue={prevQuery} />

      {isLoaded && <ItemList items={data} state={{ from: location }} />}

      <Loader />
    </Section>
  );
}

export default Movies;
