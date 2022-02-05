import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  gap: 10px;
`;

const Link = styled(NavLink)`
  &.active {
    color: tomato;
  }
`;

const Navigation = () => {
  return (
    <>
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </Nav>
      <hr />
    </>
  );
};

export default Navigation;
