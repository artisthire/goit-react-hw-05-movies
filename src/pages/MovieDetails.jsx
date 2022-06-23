import {
  Outlet,
  Link,
  useParams,
  useLocation,
  useNavigate,
} from 'react-router-dom';

function MovieDetails() {
  const { movieId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const prevLocation = location.state?.from
    ? { ...location.state.from }
    : { ...location, pathname: '/' };

  return (
    <div>
      MovieDetails page
      <br />
      <button
        type="button"
        onClick={() =>
          navigate(prevLocation.pathname, {
            state: { from: prevLocation },
          })
        }
      >
        Go back
      </button>
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
    </div>
  );
}

export default MovieDetails;
