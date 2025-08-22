import React from "react";
import Spline from "@splinetool/react-spline";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-wrapper">
        {/* Left: Text */}
        <div className="hero-content">
          <h1>
            Hello, I’m <span className="highlight">Yasith</span>
          </h1>
          <p className="tagline">
            Software Engineer crafting modern UIs, RESTful APIs, and elegant user journeys.
          </p>
          <p className="subtext">
            Specialized in React, Spring Boot & design-driven engineering. Passionate about building clean architecture and delightful interfaces.
          </p>
   
        </div>

        {/* Right: Spline */}
        <div className="spline-container">
          <Spline scene="https://prod.spline.design/F3OwyogALYtj52iZ/scene.splinecode" />
        </div>
      </div>

      {/* Bottom-right black square */}
      <div className="bottom-square"></div>
    </section>
  );
};

export default HeroSection;
