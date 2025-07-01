// components/Sidebar.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './SideBar.css';
import { FaBars, FaTimes } from "react-icons/fa";
const API_KEY = "689d04f0726c8e2a1abdda1749ea79e6";

const categories = [
  { name: "Trending", url: `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}` },
  { name: "Popular", url: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}` },
  { name: "Top Rated", url: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}` },
  { name: "Upcoming", url: `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}` },
];

const SideBar = ({ onSelect }) => {
  const [genres, setGenres] = useState([]);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const res = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`);
        const data = await res.json();
        setGenres(data.genres);
      } catch (error) {
        console.error("Failed to fetch genres:", error);
      }
    };
    fetchGenres();
  }, []);

 return (
  <>
    <div className="hamburger-icon" onClick={() => setIsOpen(!isOpen)}>
      {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
    </div>

    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="sidebar-content">
        <h3>Categories</h3>
        {categories.map((cat) => (
          <button
            key={cat.name}
            onClick={() => onSelect(cat.url)}
            className="sidebar-btn"
          >
            {cat.name}
          </button>
        ))}

        <h3>Genres</h3>
        {genres.map((genre) => (
          <button
            key={genre.id}
            onClick={() =>
              onSelect(
                `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genre.id}`
              )
            }
            className="sidebar-btn"
          >
            {genre.name}
          </button>
        ))}
      </div>

      <div className="sidebar-footer">
        <button
          className="sidebar-btn watchlist-btn"
          onClick={() => navigate("/watchlist")}
        >
          🔖 Watchlist
        </button>

        <button
          className="sidebar-btn about-btn"
          onClick={() => navigate("/about")}
        >
          👨‍💻 About Developer
        </button>
      </div>
    </div>
  </>
);

};

export default SideBar;

// components/Sidebar.jsx
// import React, { useEffect, useState } from "react";
// import './SideBar.css';
// import { FaBars, FaTimes } from "react-icons/fa"; // ✅ Add icons

// const API_KEY = "689d04f0726c8e2a1abdda1749ea79e6";

// const categories = [
//   { name: "Trending", url: `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}` },
//   { name: "Popular", url: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}` },
//   { name: "Top Rated", url: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}` },
//   { name: "Upcoming", url: `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}` },
// ];

// const Sidebar = ({ onSelect }) => {
//   const [genres, setGenres] = useState([]);
//   const [isOpen, setIsOpen] = useState(false); // 🔁 Toggle state

//   useEffect(() => {
//     const fetchGenres = async () => {
//       try {
//         const res = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`);
//         const data = await res.json();
//         setGenres(data.genres);
//       } catch (error) {
//         console.error("Failed to fetch genres:", error);
//       }
//     };
//     fetchGenres();
//   }, []);

//   return (
//     <>
//       {/* Hamburger Toggle */}
//       <div className="hamburger-icon" onClick={() => setIsOpen(!isOpen)}>
//         {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
//       </div>

//       {/* Sidebar Menu */}
//       <div className={`sidebar ${isOpen ? "open" : ""}`}>
//         <h3>Categories</h3>
//         {categories.map((cat) => (
//           <button
//             key={cat.name}
//             onClick={() => {
//               onSelect(cat.url);
//               setIsOpen(false);
//             }}
//             className="sidebar-btn"
//           >
//             {cat.name}
//           </button>
//         ))}

//         <h3>Genres</h3>
//         {genres.map((genre) => (
//           <button
//             key={genre.id}
//             onClick={() => {
//               onSelect(
//                 `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genre.id}`
//               );
//               setIsOpen(false);
//             }}
//             className="sidebar-btn"
//           >
//             {genre.name}
//           </button>
//         ))}
//       </div>
//     </>
//   );
// };

// export default Sidebar;
