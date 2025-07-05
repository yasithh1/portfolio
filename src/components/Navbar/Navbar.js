import React from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">Yasith.dev</div>
      <div className="nav-links">
        <Link to="hero" smooth duration={500}>Home</Link>
        <Link to="projects" smooth duration={500}>Projects</Link>
        <Link to="contact" smooth duration={500}>Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
