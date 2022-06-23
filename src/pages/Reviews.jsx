import { useParams } from 'react-router-dom';

function Reviews() {
  const { movieId } = useParams();
  return (
    <div>
      Reviews component
      <p>
        Movie id for REVIEWS: <b>{movieId}</b>
      </p>
    </div>
  );
}

export default Reviews;
