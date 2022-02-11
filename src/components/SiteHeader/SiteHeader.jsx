import { Outlet } from 'react-router-dom';
import { Nav, Link, Container, Header } from '../App/App.styled';

export const SiteHeader = () => {
  return (
    <>
      <Container>
        <Header>
          <Nav>
            <Link to="/">Home</Link>
            <Link to="/movies">Movies</Link>
          </Nav>
          <hr />
        </Header>
        <Outlet />
      </Container>
    </>
  );
};
