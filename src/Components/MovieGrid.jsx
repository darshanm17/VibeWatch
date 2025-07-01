// components/MovieGrid.jsx
import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import "./MovieGrid.css";

const API_KEY = "689d04f0726c8e2a1abdda1749ea79e6";

const MovieGrid = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setMovies(data.results || []));
  }, []);

  return (
    <div className="grid-container">
      <h1>Trending Now</h1>
      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieGrid;
