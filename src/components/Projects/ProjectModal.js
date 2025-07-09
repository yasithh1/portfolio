// src/components/Projects/ProjectModal.js
import React from "react";
import "./Projects.css";

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img src={project.image} alt={project.title} className="modal-image" />
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <ul className="tech-stack">
          {project.tech.map((tech, i) => (
            <li key={i}>{tech}</li>
          ))}
        </ul>
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          View on GitHub →
        </a>
        <button className="close-button" onClick={onClose}>×</button>
      </div>
    </div>
  );
};

export default ProjectModal;
