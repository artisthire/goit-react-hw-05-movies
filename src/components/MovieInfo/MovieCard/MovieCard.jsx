import { Container, Title, SubTitle, Text } from './MovieCard.styled';

function MovieCard({ movie }) {
  const posterImgURLBase = 'https://image.tmdb.org/t/p/w500';
  const {
    poster_path: posterImg,
    title,
    overview,
    vote_average,
    genres,
  } = movie;
  const votePercent = vote_average * 10 + '%';
  const genresString = genres
    .reduce((sum, current) => [...sum, current.name], [])
    .join(' ');

  return (
    <Container>
      <img src={`${posterImgURLBase}/${posterImg}`} alt={`${title}`} />

      <div>
        <Title>{title}</Title>
        <Text>User score: {votePercent}</Text>
        <SubTitle>Overview</SubTitle>
        <Text>{overview}</Text>
        <SubTitle>Genres</SubTitle>
        <Text>{genresString}</Text>
      </div>
    </Container>
  );
}

export default MovieCard;
