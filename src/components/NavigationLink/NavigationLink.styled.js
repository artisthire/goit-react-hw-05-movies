import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavLinkStyled = styled(NavLink)`
  display: block;
  padding: 8px 4px;
  font-size: inherit;
  text-decoration: none;
  color: black;
  cursor: pointer;

  &:hover,
  &:focus {
    text-decoration: underline;
  }

  &.active {
    color: #ed118b;
    text-decoration: underline;
  }
`;
