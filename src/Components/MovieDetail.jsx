import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import "./MovieDetail.css";
import MovieCard from "./MovieCard";
const API_KEY = "689d04f0726c8e2a1abdda1749ea79e6";
import { addToWatchlist, removeFromWatchlist, isInWatchlist } from "../utils/watchlist";
import { FaHeart, FaRegHeart } from "react-icons/fa"; // install react-icons if needed

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [credits, setCredits] = useState(null);
  const [cast, setCast] = useState([]);
  const [trailerKey, setTrailerKey] = useState(null);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [inWatchlist, setInWatchlist] = useState(false);
const [watchProviders, setWatchProviders] = useState(null);

// Inside useEffect after other fetches:



  const navigate = useNavigate();
  const toggleWatchlist = () => {
  if (inWatchlist) {
    removeFromWatchlist(movie.id);
    setInWatchlist(false);
  } else {
    addToWatchlist(movie);
    setInWatchlist(true);
  }
};


  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`)
      .then(res => res.json())
      .then(setMovie);

    fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`)
      .then(res => res.json())
      .then(data => {
        setCredits(data);
        setCast(data.cast.slice(0, 5));
      });

    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`)
      .then(res => res.json())
      .then(data => {
        const trailer = data.results.find(vid => vid.site === "YouTube" && vid.type === "Trailer");
        setTrailerKey(trailer?.key || null);
      });
      // Similar Movies
    fetch(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${API_KEY}&language=en-US`)
  .then(res => res.json())
  .then(data => setSimilarMovies(data.results.slice(0, 10))); // Limit to 10
    setInWatchlist(isInWatchlist(id));
    fetch(`https://api.themoviedb.org/3/movie/${id}/watch/providers?api_key=${API_KEY}`)
  .then(res => res.json())
  .then(data => {
    const providerData = data.results?.IN || data.results?.US; // fallback
    setWatchProviders(providerData);
  });
  }, [id]);

  if (!movie || !credits) return <p style={{ padding: 20 }}>Loading...</p>;

  const director = credits.crew.find(p => p.job === "Director");
  const genres = movie.genres.map(g => g.name).join(", ");
  const imdbLink = `https://www.imdb.com/title/${movie.imdb_id}`;

  return (
    <div className="movie-detail">
      <Link to="/" className="back-button">⬅ Home</Link>

      <div className="movie-detail-top">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="movie-poster"
        />

        <div className="movie-info">
          <h1>{movie.title}</h1>
          <p><strong>Genres:</strong> {genres}</p>
          <p><strong>Release Date:</strong> {movie.release_date}</p>
          <p><strong>Overview:</strong> {movie.overview}</p>
          <p><strong>Director:</strong> {director?.name || "N/A"}</p>
          <p><strong>Rating:</strong> ⭐ {movie.vote_average.toFixed(1)} / 10</p>

          <div className="movie-links">
            <a href={imdbLink} target="_blank" rel="noopener noreferrer">🔗 IMDb Page</a>
            {trailerKey && (
              <button onClick={() => navigate(`/movie/${id}/trailer`)}>
                ▶ Watch Trailer
              </button>
            )}
            <div className="watchlist-btn" onClick={toggleWatchlist} title="Add to Watchlist">
  {inWatchlist ? (
    <FaHeart style={{ color: "#e50914", fontSize: "1.5rem" }} />
  ) : (
    <FaRegHeart style={{ color: "#999", fontSize: "1.5rem" }} />
  )}
</div>
{watchProviders && (watchProviders.flatrate || watchProviders.rent || watchProviders.buy) && (
  <div className="watch-section">
    <h2>Where to Watch</h2>
    <div className="provider-logos">
      {(watchProviders.flatrate || watchProviders.buy || watchProviders.rent).map((provider) => (
        <div key={provider.provider_id} className="provider-card">
          <img
            src={`https://image.tmdb.org/t/p/w92${provider.logo_path}`}
            alt={provider.provider_name}
            title={provider.provider_name}
          />
        </div>
      ))}
    </div>
    {watchProviders.link && (
      <a
        href={watchProviders.link}
        target="_blank"
        rel="noopener noreferrer"
        className="watch-now-btn"
      >
        🔗 Watch Now
      </a>
    )}
  </div>
)}


          </div>
        </div>
      </div>

      <div className="cast-section">
        <h2>Top Cast</h2>
        <div className="cast-list">
          {cast.map((actor) => (
            <div key={actor.id} className="cast-card">
              <img
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                    : "https://via.placeholder.com/200x300?text=No+Image"
                }
                alt={actor.name}
              />
              <p>{actor.name}</p>
              <small>as {actor.character}</small>
            </div>
          ))}
        </div>
      </div>
      {similarMovies.length > 0 && (
  <div className="similar-section">
    <h2>Similar Movies</h2>
    <div className="movie-grid">
        {similarMovies.length > 0 ? (
          similarMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))
        ) : (
          <p className="no-movies">No movies found.</p>
        )}
      </div>
  </div>
)}

    </div>
  );
};

export default MovieDetail;
