import React from "react";
import { motion } from "framer-motion";
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section" id="hero">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>Hi, I'm <span className="highlight">Yasith</span></h1>
        <p>Crafting clean code & powerful user experiences.</p>
        <a href="#projects" className="hero-button">View My Work</a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
