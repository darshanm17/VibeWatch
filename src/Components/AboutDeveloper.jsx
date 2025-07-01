// components/AboutDeveloper.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./AboutDeveloper.css";

const AboutDeveloper = () => {
  const navigate = useNavigate();

  return (
    <div className="about-developer">
      <div className="about-content">
        <div >
        <img
        className="developer-photo"
          src="./public/profile.jpeg"
        />
        </div>
        <div className="about-text">
          <h2>Hi, I'm Darshan 👋</h2>
          <p>
            Passionate full-stack developer who loves building interactive web
            apps with React and Java. Exploring the world of tech one pixel at a time.
          </p>
          <div className="about-links">
            <button onClick={() => window.open("https://github.com/darshanm17", "_blank")}>GitHub</button>
            <button onClick={() => window.open("https://linkedin.com/in/your-profile", "_blank")}>LinkedIn</button>
            <button onClick={() => window.open("https://yourportfolio.com", "_blank")}>Portfolio</button>
            <button onClick={() => navigate("/about")}>More About Me</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutDeveloper;
