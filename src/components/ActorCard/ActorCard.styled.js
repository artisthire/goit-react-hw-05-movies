import styled from 'styled-components';

export const Container = styled.li`
  display: grid;
  grid-template-columns: 130px 1fr;
  gap: 15px;

  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;
