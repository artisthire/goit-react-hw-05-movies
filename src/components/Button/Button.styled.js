import styled from 'styled-components';

export const ButtonStyled = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 6px 2px;
  border: none;
  font-size: 18px;
  background-color: transparent;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: rgba(204, 204, 204, 0.5);
  }
`;
