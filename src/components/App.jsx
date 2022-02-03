import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import {
  fetchTrendingMovies,
  fetchMovieByQuery,
  fetchDetailMovieInfo,
} from 'services/fetchMovies';

export const App = () => {
  return (
    <header>
      <Navigation />
      <Routes>
        <Route path="/" element={<h1>Hello world</h1>} />
      </Routes>
    </header>
  );
};
