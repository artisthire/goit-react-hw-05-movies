import PropTypes from 'prop-types';
import noPhotoImg from './assets/no-photo.png';
import { IMG_URL_BASE } from 'services/api';
import { Container } from './ActorCard.styled';

function ActorCard({ actor }) {
  return (
    <Container key={actor.id}>
      {actor.profile_path && (
        <img src={`${IMG_URL_BASE}/${actor.profile_path}`} alt={actor.name} />
      )}
      {!actor.profile_path && <img src={noPhotoImg} alt={actor.name} />}
      <div>
        <p>{actor.name}</p>
        <p>{actor.character}</p>
      </div>
    </Container>
  );
}

ActorCard.propTypes = {
  actor: PropTypes.shape({
    id: PropTypes.number.isRequired,
    profile_path: PropTypes.string,
    name: PropTypes.string.isRequired,
    character: PropTypes.string.isRequired,
  }),
};

export default ActorCard;
