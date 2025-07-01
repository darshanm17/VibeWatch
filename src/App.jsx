// Home.jsx
import React, { useState } from "react";
import Sidebar from "./Components/SideBar";
import MovieList from "./Components/MovieList";
import SearchBar from "./Components/SearchBar";
import "./App.css";

const Home = () => {
  const [selectedUrl, setSelectedUrl] = useState(
    "https://api.themoviedb.org/3/movie/popular?api_key=689d04f0726c8e2a1abdda1749ea79e6"
  );

  return (
  // Home.jsx or App.jsx
<div className="home-container">
  <Sidebar onSelect={setSelectedUrl} />
  <div className="content-area">
    <SearchBar />
    <MovieList fetchUrl={selectedUrl} />
  </div>
</div>

  );
};

export default Home;
