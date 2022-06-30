import PropTypes from 'prop-types';
import { IMG_URL_BASE } from 'services/api';
import { Container, Title, SubTitle, Text } from './MovieCard.styled';

function MovieCard({ movie }) {
  const {
    poster_path: posterImg,
    title,
    overview,
    vote_average,
    genres,
  } = movie;
  const votePercent = Math.trunc(vote_average * 10) + '%';
  const genresString =
    genres && genres.reduce((sum, genre) => [...sum, genre.name], []).join(' ');

  return (
    <Container>
      <img src={`${IMG_URL_BASE}/${posterImg}`} alt={`${title}`} />

      <div>
        <Title>{title}</Title>
        <Text>User score: {votePercent}</Text>
        <SubTitle>Overview</SubTitle>
        <Text>{overview}</Text>
        {genresString && (
          <>
            <SubTitle>Genres</SubTitle>
            <Text>{genresString}</Text>
          </>
        )}
      </div>
    </Container>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({ name: PropTypes.string.isRequired })
    ),
  }),
};

export default MovieCard;
