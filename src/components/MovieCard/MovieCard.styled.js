import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 10px;
  padding: 15px 0;
`;

export const Title = styled.h2`
  font-size: 1.3em;
  font-weight: 600;
  margin: 10px 0 20px;
`;

export const SubTitle = styled.h3`
  font-size: 1.1em;
  font-weight: 600;
  margin: 10px 0 20px;
`;

export const Text = styled.p`
  margin: 1em 0;
  padding-left: 8px;
`;
