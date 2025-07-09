import React from "react";
import { motion } from "framer-motion";
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section" id="hero">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: -60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h1>
          Hello, I’m <span className="highlight">Yasith</span>
        </h1>
        <p className="tagline">
          Software Engineer crafting modern UIs, RESTful APIs, and elegant user journeys.
        </p>
        <p className="subtext">
          I specialize in full-stack web development using React, Spring Boot, and a strong focus on
          performance, accessibility, and clean architecture. Passionate about animation, design systems,
          and building intuitive digital experiences.
        </p>
        <a href="#projects" className="hero-button">Explore My Work</a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
