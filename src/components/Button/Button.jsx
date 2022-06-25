import PropTypes from 'prop-types';
import { ButtonStyled } from './Button.styled';

function Button({ onClick, children }) {
  return (
    <ButtonStyled type="button" onClick={onClick}>
      {children}
    </ButtonStyled>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;
