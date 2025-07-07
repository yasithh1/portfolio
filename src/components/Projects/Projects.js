import React from "react";
import { motion } from "framer-motion";
import { Element } from "react-scroll";
import "./Projects.css";
import projects from "./projectsData";

const Projects = () => {
  return (
    <Element name="projects">
      <section className="projects-section">
        <h2 className="projects-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul className="tech-stack">
                {project.tech.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Code →
              </a>
            </motion.div>
          ))}
        </div>
      </section>
    </Element>
  );
};

export default Projects;
