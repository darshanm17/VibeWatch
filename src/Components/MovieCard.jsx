// components/MovieCard.jsx
import React from "react";
import { useNavigate } from "react-router-dom";


import "./MovieCard.css";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  return (
    <div
      className="movie-card"
      onClick={() => navigate(`/movie/${movie.id}`)}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="movie-img"
      />
      <h3>{movie.title}</h3>
      <p><strong>Rating:</strong> ⭐ {movie.vote_average.toFixed(1)} / 10</p>
    </div>
  );
};

export default MovieCard;
