import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';
import { FiMenu, FiX } from 'react-icons/fi';

const navItems = ['hero', 'projects', 'qualifications', 'skills', 'contact'];
const labels   = { hero: 'Home', projects: 'Projects', qualifications: 'Qualifications', skills: 'Skills', contact: 'Contact' };

const Navbar = () => {
  const [menuOpen,  setMenuOpen]  = useState(false);
  const [scrolled,  setScrolled]  = useState(false);
  const [active,    setActive]    = useState('hero');

  /* shrink navbar on scroll */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      {/* Logo */}
      <div className="nav-logo">
        <span className="logo-bracket">&lt;</span>
        Yasith
        <span className="logo-bracket">/&gt;</span>
      </div>

      {/* Desktop links */}
      <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
        {navItems.map((item) => (
          <Link
            key={item}
            to={item}
            smooth
            duration={500}
            spy
            onSetActive={() => setActive(item)}
            onClick={() => setMenuOpen(false)}
            className={active === item ? 'nav-link nav-link--active' : 'nav-link'}
          >
            {labels[item]}
            <span className="nav-underline" />
          </Link>
        ))}

        {/* CTA button */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="nav-resume-btn"
          onClick={() => setMenuOpen(false)}
        >
          Resume ↗
        </a>
      </div>

      {/* Hamburger */}
      <button
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
      >
        {menuOpen ? <FiX /> : <FiMenu />}
      </button>
    </nav>
  );
};

export default Navbar;