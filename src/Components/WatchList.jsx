// pages/Watchlist.jsx
import React, { useEffect, useState } from "react";
import { getWatchlist, removeFromWatchlist } from "../utils/watchlist";
import MovieCard from "../Components/MovieCard";
import "./WatchList.css";

const WatchList = () => {
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    const savedMovies = getWatchlist();
    setWatchlist(savedMovies);
  }, []);

  const handleRemove = (id) => {
    removeFromWatchlist(id);
    setWatchlist(getWatchlist()); // Refresh the list after removal
  };

  return (
    <div className="watchlist-page">
      <h2>🎬 Your Watchlist</h2>
      {watchlist.length === 0 ? (
        <p>No movies in your watchlist yet!</p>
      ) : (
        <div className="movie-grid">
          {watchlist.map((movie) => (
            <div key={movie.id} className="movie-card-with-remove">
              <MovieCard movie={movie} />
              <button className="remove-btn" onClick={() => handleRemove(movie.id)}>
                ❌ Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WatchList;
