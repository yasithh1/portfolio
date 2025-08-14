// src/components/Skills/Skills.js
import React from "react";
import { Element } from "react-scroll";
import { motion } from "framer-motion";

import "./Skills.css";
import {
  FaReact,
  FaJava,
  FaGithub,
  FaPhp,
  FaCss3Alt,
  FaCode,
  FaDatabase,
} from "react-icons/fa";
import {
  SiSpringboot,
  SiMysql,
  SiOracle,
  SiPostgresql,
  SiFlutter,
} from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact /> },
  { name: "Spring Boot", icon: <SiSpringboot /> },
  { name: "REST APIs", icon: <FaJava /> },
  { name: "PHP", icon: <FaPhp /> },
  { name: "Java", icon: <FaJava /> },
  { name: "MYSQL", icon: <SiMysql /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "Orcale Database", icon: <SiOracle /> },
  { name: "C#", icon: <FaCode /> },
  { name: "Flutter", icon: <SiFlutter /> },
];

const Skills = () => {
  return (
    <Element name="skills">
      <section className="skills-section">
        <video autoPlay loop muted className="skills-bg">
          <source src="/code-bg.mp4" type="video/mp4" />
        </video>
        <h2 className="skills-title">Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="skill-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="skill-icon">{skill.icon}</div>
              <span>{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </section>
    </Element>
  );
};

export default Skills;
