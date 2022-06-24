import noPhotoImg from './assets/no-photo.png';
import { Container } from './ActorCard.styled';

const posterImgURLBase = 'https://image.tmdb.org/t/p/w500';

function ActorCard({ actor }) {
  return (
    <Container key={actor.id}>
      {actor.profile_path && (
        <img
          src={`${posterImgURLBase}/${actor.profile_path}`}
          alt={actor.name}
        />
      )}
      {!actor.profile_path && <img src={noPhotoImg} alt="" />}
      <div>
        <p>{actor.name}</p>
        <p>{actor.character}</p>
      </div>
    </Container>
  );
}

export default ActorCard;
