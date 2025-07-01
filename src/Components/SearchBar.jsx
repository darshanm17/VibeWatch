// components/SearchBar.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchBar.css";

const API_KEY = "689d04f0726c8e2a1abdda1749ea79e6";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  // Fetch search results
  useEffect(() => {
    if (query.trim() === "") {
      setResults([]);
      return;
    }

    const timeout = setTimeout(() => {
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`)
        .then(res => res.json())
        .then(data => {
          setResults(data.results.slice(0, 5)); // Top 5 results
        });
    }, 500); // Debounce API call

    return () => clearTimeout(timeout);
  }, [query]);

  const handleSelectMovie = (movieId) => {
    setQuery("");
    setResults([]);
    navigate(`/movie/${movieId}`);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && results.length > 0) {
      handleSelectMovie(results[0].id); // Go to top result
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      {results.length > 0 && (
        <div className="search-results">
          {results.map(movie => (
            <div
              key={movie.id}
              className="search-result"
              onClick={() => handleSelectMovie(movie.id)}
            >
              <img
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w92${movie.poster_path}`
                    : "https://via.placeholder.com/92x138?text=No+Image"
                }
                alt={movie.title}
              />
              <span>{movie.title}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
