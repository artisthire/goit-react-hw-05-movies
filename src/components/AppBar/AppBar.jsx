import { Outlet } from 'react-router-dom';

import NavigationLink from 'components/NavigationLink';
import { Container, NavigationList } from './AppBar.styled';

const AppBar = () => {
  return (
    <Container>
      <nav>
        <NavigationList>
          <li>
            <NavigationLink to="/" label="Home" />
          </li>
          <li>
            <NavigationLink to="movies" label="Movies" />
          </li>
        </NavigationList>
      </nav>

      <Outlet />
    </Container>
  );
};

export default AppBar;
