import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
  gap: 10px;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const LinkStyled = styled(Link)`
  color: inherit;
  text-decoration: none;
`;
