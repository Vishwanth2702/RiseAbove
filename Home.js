import React from "react";
import './styles/Home.css';

const Navigation = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src="riseabovelogo1.jpeg" alt="RiseAbove Logo" />
        <h1>RiseAbove</h1>
      </div>
      <nav>
        <ul>
          <li><a href="components/kids.html">Home</a></li>
          <li><a href="#">Consult</a></li>
          <li><a href="#">Blogs/Journals</a></li>
          <li><a href="#">Volunteer as Listener</a></li>
          <li><a href="#">Contact</a></li>
          <li className="dropdown">
            <a href="#">
              More
              <span className="arrow-down">&#9660;</span>
            </a>
            <div className="dropdown-content">
              <a href="#">Mind Games</a>
              <a href="#">Mood Tracker</a>
              <a href="#">Meditation Mode</a>
            </div>
          </li>
          <li><button className="login-signup-button">Login/Signup</button></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
