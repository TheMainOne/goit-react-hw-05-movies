import React, { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { Nav, Link, Container, Header } from './App.styled';
import GlobalStyle from './GlobalStyles';

const MoviesPage = lazy(() => import('../MoviesPage/MoviesPage'));
const ItemPage = lazy(() => import('../pages/MovieDetailsPage'));
const HomePage = lazy(() => import('../HomePage/HomePage'));
const ActorsInfo = lazy(() => import('../pages/ActorsPage'));
const ReviewsInfo = lazy(() => import('../pages/ReviewsPage'));

const SiteHeader = () => {
  return (
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
  );
};

const App = () => {
  return (
    <>
      <Suspense fallback="">
        <Routes>
          <Route path="/" element={<SiteHeader />}>
            <Route path="/" element={<HomePage />} />
            <Route path="movies" element={<MoviesPage />} />
            <Route path="movies/:movieId" element={<ItemPage />}>
              <Route path="cast" element={<ActorsInfo />} />
              <Route path="reviews" element={<ReviewsInfo />} />
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </Suspense>
      <GlobalStyle />
    </>
  );
};

export default App;
