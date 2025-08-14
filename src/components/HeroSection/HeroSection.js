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
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Hello, I’m <span className="highlight">Yasith</span>
        </motion.h1>

        <motion.p
          className="tagline"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Software Engineer crafting modern UIs, RESTful APIs, and elegant user journeys.
        </motion.p>

        <motion.p
          className="subtext"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          Specialized in React, Spring Boot & design-driven engineering. Passionate about building clean architecture and delightful interfaces.
        </motion.p>

        <motion.a
          href="#projects"
          className="hero-button"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Explore My Work
        </motion.a>

        <motion.div
          className="social-links"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
      
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
