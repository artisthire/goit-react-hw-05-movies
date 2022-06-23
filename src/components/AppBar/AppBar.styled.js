import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  margin-bottom: 15px;
  padding: 8px 16px;
  font-size: 20px;
  color: #010101;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
`;

export const NavigationList = styled.ul`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const NavLinkStyled = styled(NavLink)`
  display: block;
  padding: 8px 4px;
  font-size: inherit;
  text-decoration: none;
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
