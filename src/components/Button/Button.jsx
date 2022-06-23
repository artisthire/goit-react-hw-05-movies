import { ButtonStyled } from './Button.styled';

function Button({ onClick, children }) {
  return (
    <ButtonStyled type="button" onClick={onClick}>
      {children}
    </ButtonStyled>
  );
}

export default Button;
