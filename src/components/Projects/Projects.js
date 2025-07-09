// src/components/Projects/Projects.js
import React, { useState } from "react";
import { Element } from "react-scroll";
import { motion } from "framer-motion";
import "./Projects.css";
import projects from "./projectsData";
import ProjectModal from "./ProjectModal";

const Projects = () => {
  const [selected, setSelected] = useState(null);

  return (
    <Element name="projects">
      <section className="projects-section">
        <h2 className="projects-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              onClick={() => setSelected(project)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <img src={project.image} alt={project.title} className="card-image" />
              <h3>{project.title}</h3>
              <p>{project.short}</p>
            </motion.div>
          ))}
        </div>
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      </section>
    </Element>
  );
};

export default Projects;
