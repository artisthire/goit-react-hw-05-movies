import PropTypes from 'prop-types';
import { NavLinkStyled } from './NavigationLink.styled';

function NavigationLink({ to, label, ...restProps }) {
  return (
    <NavLinkStyled to={to} {...restProps}>
      {label}
    </NavLinkStyled>
  );
}

NavigationLink.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default NavigationLink;
