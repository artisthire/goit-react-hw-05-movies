import {
  Outlet,
  Link,
  useParams,
  useLocation,
  useNavigate,
} from 'react-router-dom';

import Section from 'components/Section';
import Button from 'components/Button';
import { FaLongArrowAltLeft } from 'react-icons/fa';

function MovieDetails() {
  const { movieId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const prevLocation = location.state?.from
    ? { ...location.state.from }
    : { ...location, pathname: '/' };

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
      <p>
        Move id: <b>{movieId}</b>
      </p>
      <ul>
        <li>
          <Link to="cast" state={{ from: prevLocation }}>
            Cast
          </Link>
        </li>
        <li>
          <Link to="reviews" state={{ from: prevLocation }}>
            Reviews
          </Link>
        </li>
      </ul>
      <Outlet />
    </Section>
  );
}

export default MovieDetails;
