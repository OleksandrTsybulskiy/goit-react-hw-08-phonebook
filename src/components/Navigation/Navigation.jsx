import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import { NavWrapper } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <NavWrapper>
      <NavLink to="/">Home</NavLink>
      {isLoggedIn && <NavLink to="/contacs">Contacts</NavLink>}
    </NavWrapper>
  );
};
