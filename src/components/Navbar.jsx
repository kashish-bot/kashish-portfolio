import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <img
            src={`${import.meta.env.BASE_URL}logo 1.png`}
            alt="Kashish Logo"
          />
        </div>
        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✕" : "☰"}
        </button>

        <ul className={menuOpen ? "nav-links active" : "nav-links"}>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#process">Process</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="/kashish-resume.pdf" download className="resume-btn">
              <img src={`${import.meta.env.BASE_URL}resumelogo.png`} alt="" />
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
