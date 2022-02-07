import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { App } from 'components/App/App';
import MoviesPage from './components/MoviesPage/MoviesPage';
import ItemPage from './components/pages/MovieDetailsPage';
import HomePage from './components/HomePage/HomePage';
import ActorsInfo from './components/pages/ActorsPage';
import ReviewesInfo from './components/pages/ReviewsPage';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="goit-react-hw-05-movies">
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:movieId" element={<ItemPage />}>
            <Route path="cast" element={<ActorsInfo />} />
            <Route path="reviews" element={<ReviewesInfo />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
