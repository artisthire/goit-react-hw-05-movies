import { useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

function Movies() {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  let prevQuery = searchParams.get('query') ?? '';

  if (prevQuery === '') {
    prevQuery = location.state?.from.search
      ? new URLSearchParams(location.state.from.search).get('query')
      : '';
  }

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
    <div>
      Movies page
      <form onSubmit={onSubmit}>
        <label>
          Find:
          <input
            type="text"
            name="query"
            placeholder="Search query"
            defaultValue={prevQuery}
            required
          />
        </label>
        <button type="submit">Search</button>
      </form>
      <ul>
        {Array(4)
          .fill(null)
          .map((_, index) => (
            <li key={index}>
              <Link to={`${index}`} state={{ from: location }}>
                Movie {index}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Movies;
