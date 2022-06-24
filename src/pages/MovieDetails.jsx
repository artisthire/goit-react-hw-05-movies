import { useEffect, useState } from 'react';

import { Outlet, useParams, useLocation, useNavigate } from 'react-router-dom';

import Section from 'components/Section';
import Button from 'components/Button';
import { FaLongArrowAltLeft } from 'react-icons/fa';

import MovieInfo from 'components/MovieInfo';
import { fetchMovieDetails } from 'services/api';

function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const prevLocation = location.state?.from
    ? { ...location.state.from }
    : { ...location, pathname: '/' };

  useEffect(() => {
    (async () => {
      const movieDetail = await fetchMovieDetails(movieId);
      setMovie(movieDetail);
    })();
  }, [movieId]);

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
      {movie && <MovieInfo movie={movie} location={prevLocation} />}
      <Outlet />
    </Section>
  );
}

export default MovieDetails;
