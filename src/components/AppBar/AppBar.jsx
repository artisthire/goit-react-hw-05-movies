import { Outlet } from 'react-router-dom';

import { Container, NavigationList, NavLinkStyled } from './AppBar.styled';

const AppBar = () => {
  return (
    <Container>
      <nav>
        <NavigationList>
          <li>
            <NavLinkStyled to="/">Home</NavLinkStyled>
          </li>
          <li>
            <NavLinkStyled to="movies">Movies</NavLinkStyled>
          </li>
        </NavigationList>
      </nav>

      <Outlet />
    </Container>
  );
};

export default AppBar;
