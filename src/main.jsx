import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import MovieDetail from './Components/MovieDetail';
import TrailerPage from './Components/TrailerPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WatchList from "./Components/WatchList";
import AboutDeveloper from './Components/AboutDeveloper';




ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/movie/:id" element={<MovieDetail />} />
      <Route path="/movie/:id/trailer" element={<TrailerPage />} />
      <Route path="/watchlist" element={<WatchList />} />
      <Route path="/about" element={<AboutDeveloper />} />

    </Routes>
  </BrowserRouter>
);
