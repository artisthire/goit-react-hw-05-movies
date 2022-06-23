import { NavLink, Outlet } from 'react-router-dom';

import { Container } from './AppBar.styled';

const AppBar = () => {
  return (
    <Container>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="movies">Movies</NavLink>
      </nav>

      <Outlet />
    </Container>
  );
};

export default AppBar;
