// components/MovieList.jsx
import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import "./MovieList.css";

const MovieList = ({ fetchUrl }) => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchMovies = async (url, pageNum = 1) => {
    try {
      const res = await fetch(`${url}&page=${pageNum}`);
      const data = await res.json();
      setMovies(data.results || []);
      setTotalPages(data.total_pages || 1);
    } catch (err) {
      console.error("Error fetching movies:", err);
    }
  };

  useEffect(() => {
    setPage(1); // Reset to page 1 when URL changes
  }, [fetchUrl]);

  useEffect(() => {
    fetchMovies(fetchUrl, page);
  }, [fetchUrl, page]);

  const nextPage = () => {
    if (page < totalPages) setPage((prev) => prev + 1);
  };

  const prevPage = () => {
    if (page > 1) setPage((prev) => prev - 1);
  };

  return (
    <div className="movie-list">
      <div className="movie-grid">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))
        ) : (
          <p className="no-movies">No movies found.</p>
        )}
      </div>

      <div className="pagination">
        <button onClick={prevPage} disabled={page === 1}>⬅ Previous</button>
        <span>Page {page} / {totalPages}</span>
        <button onClick={nextPage} disabled={page === totalPages}>Next ➡</button>
      </div>
    </div>
  );
};

export default MovieList;
