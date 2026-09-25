import React, { useEffect, useState, useRef } from "react";
import profileImg from '../../assets/pfp1.jpg';
import resumePdf from "../../assets/Yasith_Pasindu.pdf";
import projects from "../Projects/projectsData";

import "./HeroSection.css";

const TYPING_STRINGS = [
  "Software Engineer",
  "React Developer",
  "Spring Boot Dev",
  "UI/UX Enthusiast",
];

const HeroSection = () => {
  const [displayText, setDisplayText] = useState("");
  const [stringIndex, setStringIndex] = useState(0);
  const [charIndex,   setCharIndex]   = useState(0);
  const [isDeleting,  setIsDeleting]  = useState(false);
  const heroRef = useRef(null);

  /* Typing animation */
  useEffect(() => {
    const current = TYPING_STRINGS[stringIndex];
    const speed   = isDeleting ? 55 : 105;
    const timer   = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(current.slice(0, charIndex + 1));
        if (charIndex + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), 1500);
        } else {
          setCharIndex(c => c + 1);
        }
      } else {
        setDisplayText(current.slice(0, charIndex - 1));
        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setStringIndex(i => (i + 1) % TYPING_STRINGS.length);
          setCharIndex(0);
        } else {
          setCharIndex(c => c - 1);
        }
      }
    }, speed);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, stringIndex]);

  /* Scroll-reveal */
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add("reveal-visible")),
      { threshold: 0.12 }
    );
    heroRef.current?.querySelectorAll(".reveal").forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollTo = id => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="hero-section" id="hero" ref={heroRef}>
      {/* Animated background particles */}
      <div className="hero-particles" aria-hidden="true">
        {Array.from({ length: 18 }).map((_, i) => (
          <span key={i} className="particle" style={{
            left: `${Math.random() * 100}%`,
            top:  `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 6}s`,
            animationDuration: `${4 + Math.random() * 6}s`,
          }} />
        ))}
      </div>

      <div className="hero-wrapper">
        {/* ── LEFT ── */}
        <div className="hero-content">

          <div className="circle-decoration reveal reveal-scale">
            <img src={profileImg} alt="Yasith profile" />
          </div>

          <div className="hero-badge reveal reveal-up" style={{ transitionDelay: "0.05s" }}>
            <span className="badge-dot" /> Available for hire
          </div>

          <h1 className="reveal reveal-up" style={{ transitionDelay: "0.12s" }}>
            Hello, I'm <span className="highlight">Yasith</span>
          </h1>

          <p className="typing-line reveal reveal-up" style={{ transitionDelay: "0.2s" }}>
            <span className="typing-text">{displayText}</span>
            <span className="typing-cursor" aria-hidden="true">|</span>
          </p>

          <p className="subtext reveal reveal-up" style={{ transitionDelay: "0.3s" }}>
            Specialized in React, Spring Boot &amp; design-driven engineering.
            Passionate about clean architecture and delightful interfaces.
          </p>

          <div className="hero-actions reveal reveal-up" style={{ transitionDelay: "0.38s" }}>
            <button className="hero-button" onClick={() => scrollTo("projects")}>
              View Projects
            </button>
            <button className="hero-button hero-button--outline" onClick={() => scrollTo("contact")}>
              Contact Me
            </button>
            <a
              href={resumePdf}
              target="_blank"
              rel="noreferrer"
              className="hero-button hero-button--ghost"
              >
            Resume ↗
          </a>
          </div>

          {/* Stats */}
          <div className="hero-stats reveal reveal-up" style={{ transitionDelay: "0.46s" }}>
            {[
              { num: "2+",  label: "Years Exp"    },
              { num: String(projects.length), label: "Projects"     },
              { num: "10+", label: "Technologies" },
            ].map(({ num, label }, i) => (
              <React.Fragment key={label}>
                {i > 0 && <div className="stat-divider" />}
                <div className="stat">
                  <span className="stat-number">{num}</span>
                  <span className="stat-label">{label}</span>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Lightweight CSS animation; no external scene or image required. */}
      <div className="hero-ambient" aria-hidden="true">
        <div className="ambient-glow ambient-glow--mint" />
        <div className="ambient-glow ambient-glow--blue" />
        <div className="ambient-orbit ambient-orbit--one"><span /></div>
        <div className="ambient-orbit ambient-orbit--two"><span /></div>
        <div className="ambient-core" />
      </div>
      </div>

      <div className="bottom-square" />

      {/* Scroll indicator */}
      <div
        className="scroll-indicator"
        onClick={() => scrollTo("projects")}
        aria-label="Scroll to projects"
        role="button"
        tabIndex={0}
        onKeyDown={e => e.key === 'Enter' && scrollTo("projects")}
      >
        <span className="scroll-mouse"><span className="scroll-wheel" /></span>
      </div>
    </section>
  );
};

export default HeroSection;

