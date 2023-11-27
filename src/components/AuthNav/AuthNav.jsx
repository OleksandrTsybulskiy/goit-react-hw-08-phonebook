import { NavLink } from 'react-router-dom';
import { NavWrapper, StyledButton } from './AuthNav.styled';


export const AuthNav = () => {
  return (
    <NavWrapper>
      <NavLink to="/register">
        <StyledButton >Register</StyledButton>
      </NavLink>
      <NavLink to="/login">
        <StyledButton > Log In</StyledButton>
      </NavLink>
    </NavWrapper>
  );
};