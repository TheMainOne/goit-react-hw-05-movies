import { Outlet } from 'react-router-dom';
import { Nav, Link, Container, Header } from './App.styled';
import GlobalStyle from './GlobalStyles';

export const App = () => {
  return (
    <Container>
      <GlobalStyle />
      <Header>
        <Nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </Nav>
        <hr />
      </Header>
      <Outlet />
    </Container>
  );
};
