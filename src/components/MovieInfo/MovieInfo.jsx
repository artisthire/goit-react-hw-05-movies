import MovieCard from 'components/MovieInfo/MovieCard';
import NavigationLink from 'components/NavigationLink';
import { List } from './MovieInfo.styled';

function MovieInfo({ movie, location }) {
  return (
    <>
      <MovieCard movie={movie} />
      <p>Additional information</p>
      <List>
        <li>
          <NavigationLink to="cast" label="Cast" state={{ from: location }} />
        </li>
        <li>
          <NavigationLink
            to="reviews"
            label="Reviews"
            state={{ from: location }}
          />
        </li>
      </List>
    </>
  );
}

export default MovieInfo;
