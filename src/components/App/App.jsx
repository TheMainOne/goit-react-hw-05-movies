import { Outlet } from 'react-router-dom';
import { Nav, Link, Container } from './App.styled';
import GlobalStyle from './GlobalStyles';

export const App = () => {
  return (
    <Container className="container">
      <GlobalStyle />
      <header>
        <Nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </Nav>
        <hr />
      </header>
      <Outlet />
    </Container>
  );
};
