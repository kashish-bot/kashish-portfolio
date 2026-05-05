import { useState } from "react";
import "./Navbar.css";

export default function Navbar (){
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <nav className="navbar">
            <div className="nav-container">
                <h2 className="logo">Kashish</h2>
                  <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✕" : "☰"}
        </button>

        <ul className={menuOpen ? "nav-links active" : "nav-links"}>
          <li><a href="#home">Home</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#process">Process</a></li>
          <li><a href="#contact">Contact</a></li>
          <li>
            <a href="/resume.pdf" className="resume-btn">Resume</a>
          </li>
        </ul>
            </div>

        </nav>
    )
}