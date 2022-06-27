import { lazy, Suspense, useCallback } from 'react';
import {
  Routes,
  Route,
  useParams,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { FaLongArrowAltLeft } from 'react-icons/fa';

import { fetchMovieDetails } from 'services/api';
import useLoader from 'hooks/useLoader';
import Section from 'components/Section';
import Button from 'components/Button';
import MovieInfo from 'components/MovieInfo';

const Cast = lazy(() => import('pages/Cast' /* webpackChunkName: "cast" */));
const Reviews = lazy(() =>
  import('pages/Reviews' /* webpackChunkName: "reviews" */)
);

function MovieDetails() {
  const { movieId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const prevLocation = location.state?.from
    ? { ...location.state.from }
    : { ...location, pathname: '/' };

  const fetch = useCallback(async () => fetchMovieDetails(movieId), [movieId]);

  const { data, isLoaded, Loader } = useLoader({
    callback: fetch,
    initData: null,
  });

  function goBack() {
    navigate(prevLocation.pathname, {
      state: { from: prevLocation },
    });
  }

  return (
    <Section title="Movie details">
      <Button type="button" onClick={goBack}>
        <FaLongArrowAltLeft />
        Go back
      </Button>

      {isLoaded && <MovieInfo movie={data} location={prevLocation} />}

      <Loader />

      <Suspense fallback={<Section>Loading...</Section>}>
        <Routes>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Routes>
      </Suspense>
    </Section>
  );
}

export default MovieDetails;
