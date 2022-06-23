import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      Home page
      <ul>
        {Array(4)
          .fill(null)
          .map((_, index) => (
            <li key={index}>
              <Link to={`movies/${index}`}>Movie {index}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Home;
