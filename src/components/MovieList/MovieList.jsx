import MovieCard from 'components/MovieCard';
import { List, LinkStyled } from './MovieList.styled';

function MovieList({ movies, toLink }) {
  return (
    <List>
      {movies.map(movie => (
        <li key={movie.id}>
          <LinkStyled to={`${toLink}/${movie.id}`}>
            <MovieCard movie={movie} />
          </LinkStyled>
        </li>
      ))}
    </List>
  );
}

export default MovieList;
