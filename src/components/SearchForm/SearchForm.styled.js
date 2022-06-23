import styled from 'styled-components';

export const Form = styled.form`
  position: relative;
  margin-bottom: 30px;
`;

export const Label = styled.label`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
`;

export const Input = styled.input`
  min-width: 200px;
`;

export const SubmitBtn = styled.button`
  margin-left: 10px;
`;
