import { NavLinkStyled } from './NavigationLink.styled';

function NavigationLink({ to, label, ...restProps }) {
  return (
    <NavLinkStyled to={to} {...restProps}>
      {label}
    </NavLinkStyled>
  );
}

export default NavigationLink;
