import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { App } from 'components/App';
import MoviesPage from './components/MoviesPage/MoviesPage';
import ItemPage from './components/pages/MovieDetailsPage';
import HomePage from './components/HomePage/HomePage';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="goit-react-hw-05-movies">
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:itemId" element={<ItemPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
