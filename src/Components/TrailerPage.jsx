import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./MovieDetail.css";

const API_KEY = "689d04f0726c8e2a1abdda1749ea79e6";

const TrailerPage = () => {
  const { id } = useParams();
  const [trailerKey, setTrailerKey] = useState(null);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`)
      .then(res => res.json())
      .then(data => {
        const trailer = data.results.find(
          vid => vid.site === "YouTube" && vid.type === "Trailer"
        );
        setTrailerKey(trailer?.key || null);
      });
  }, [id]);

  return (
    <div className="movie-detail">
      <Link to={`/movie/${id}`} className="back-button">⬅ Back to Details</Link>
      {trailerKey ? (
        <div className="trailer-container">
          <iframe
            className="trailer-frame"
            src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&controls=1`}
            title="Trailer"
            allow="autoplay; encrypted-media"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      ) : (
        <p>Trailer not available.</p>
      )}
    </div>
  );
};

export default TrailerPage;
