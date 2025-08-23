import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      <div className="nav-logo">Yasith.dev</div>

      <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <Link to="hero" smooth duration={500} onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="projects" smooth duration={500} onClick={() => setMenuOpen(false)}>Projects</Link>
        <Link to="qualifications" smooth duration={500} onClick={() => setMenuOpen(false)}>Qualifications</Link>
        <Link to="skills" smooth duration={500} onClick={() => setMenuOpen(false)}>Skills</Link>
        <Link to="contact" smooth duration={500} onClick={() => setMenuOpen(false)}>Contact</Link>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        {menuOpen ? <FiX /> : <FiMenu />}
      </div>
    </nav>
  );
};

export default Navbar;
