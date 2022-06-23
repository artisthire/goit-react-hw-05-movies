import { Link } from 'react-router-dom';

function NoMatch() {
  return (
    <div>
      Page not found
      <Link to="/">Back to homepage</Link>
    </div>
  );
}

export default NoMatch;
