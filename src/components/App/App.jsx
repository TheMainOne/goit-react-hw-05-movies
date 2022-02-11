import React, { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import GlobalStyle from './GlobalStyles';
import { SiteHeader } from 'components/SiteHeader/SiteHeader';

const MoviesPage = lazy(() => import('../MoviesPage/MoviesPage'));
const ItemPage = lazy(() => import('../pages/MovieDetailsPage'));
const HomePage = lazy(() => import('../HomePage/HomePage'));
const ActorsInfo = lazy(() => import('../pages/ActorsPage'));
const ReviewsInfo = lazy(() => import('../pages/ReviewsPage'));

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
