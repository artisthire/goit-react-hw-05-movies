import { useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

import Section from 'components/Section';
import ItemList from 'components/ItemList';
import SearchForm from 'components/SearchForm';

const items = Array(4)
  .fill(null)
  .map((_, index) => ({
    key: index,
    toLink: `${index}`,
    label: `Movie ${index}`,
  }));

function Movies() {
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
  }, [prevQuery, setSearchParams]);

  function onSubmit(evt) {
    evt.preventDefault();
    const query = evt.currentTarget.elements.query.value;
    setSearchParams({ query });
  }

  return (
    <Section title="Find movies">
      <SearchForm onSubmit={onSubmit} defValue={prevQuery} />

      {items.length > 0 && (
        <ItemList items={items} state={{ from: location }} />
      )}
    </Section>
  );
}

export default Movies;
