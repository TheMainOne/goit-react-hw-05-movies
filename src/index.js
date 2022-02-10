import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { App } from 'components/App/App';

const MoviesPage = lazy(() => import('./components/MoviesPage/MoviesPage'));
const ItemPage = lazy(() => import('./components/pages/MovieDetailsPage'));
const HomePage = lazy(() => import('./components/HomePage/HomePage'));
const ActorsInfo = lazy(() => import('./components/pages/ActorsPage'));
const ReviewsInfo = lazy(() => import('./components/pages/ReviewsPage'));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback="">
        <Routes>
          <Route path="/" element={<App />}>
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
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
