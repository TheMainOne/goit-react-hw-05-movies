import styled from 'styled-components';
import { NavLink, Outlet } from 'react-router-dom';

const Nav = styled.nav`
  display: flex;
  gap: 10px;
`;

const Link = styled(NavLink)`
  &.active {
    color: tomato;
  }
`;

export const App = () => {
  return (
    <>
      <header>
        <Nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </Nav>
        <hr />
      </header>
      <Outlet />
    </>
  );
};
