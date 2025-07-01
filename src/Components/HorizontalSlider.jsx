// components/HorizontalSlider.jsx
import React, { useEffect, useState } from "react";
import "./HorizontalSlider.css";
import { useNavigate } from "react-router-dom";


const API_KEY = "689d04f0726c8e2a1abdda1749ea79e6"; // Replace this

const HorizontalSlider = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);
  const [hovered, setHovered] = useState(null);
  const [trailerKey, setTrailerKey] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(fetchUrl)
      .then(res => res.json())
      .then(data => setMovies(data.results || []));
  }, [fetchUrl]);

  const handleHover = async (movieId) => {
    setHovered(movieId);
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}`
      );
      const data = await res.json();
      const trailer = data.results.find(
        vid => vid.site === "YouTube" && vid.type === "Trailer"
      );
      setTrailerKey(trailer?.key || null);
    } catch (e) {
      console.error("Trailer fetch failed", e);
    }
  };

  const handleLeave = () => {
    setHovered(null);
    setTrailerKey(null);
  };

  return (
    <div className="slider-section">
      <h2 className="slider-title">{title}</h2>
      <div className="slider">
        {movies.map(movie => (
          <div
            key={movie.id}
            className="slider-card"
            onMouseEnter={() => handleHover(movie.id)}
            onMouseLeave={handleLeave}
            onClick={() => navigate(`/movie/${movie.id}`)} 
          >
            {hovered === movie.id && trailerKey ? (
              <iframe
                className="slider-video"
                src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=0&controls=0`}
                allow="autoplay; encrypted-media"
                title={movie.title}
              />
            ) : (
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="slider-image"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalSlider;
