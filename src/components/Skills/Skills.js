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
  { name: "Oracle Database", icon: <SiOracle /> },
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

        {/* Marquee container */}
        <div className="skills-marquee">
          <div className="skills-track">
            {skills.concat(skills).map((skill, index) => (
              <div key={index} className="skill-card">
                <div className="skill-icon">{skill.icon}</div>
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Skills;
