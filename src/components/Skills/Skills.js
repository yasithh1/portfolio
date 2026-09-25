import React, { useState } from "react";
import { Element } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import "./Skills.css";
import {
  FaReact, FaJava, FaGithub, FaPhp,
  FaCss3Alt, FaCode, FaDatabase,
} from "react-icons/fa";
import {
  SiSpringboot, SiMysql, SiOracle,
  SiPostgresql, SiFlutter, SiKotlin,
} from "react-icons/si";

const skills = [
  { name: "React",           icon: <FaReact />,      category: "Frontend",  level: 85 },
  { name: "Spring Boot",     icon: <SiSpringboot />, category: "Backend",   level: 80 },
  { name: "Java",            icon: <FaJava />,       category: "Backend",   level: 82 },
  { name: "PHP",             icon: <FaPhp />,        category: "Backend",   level: 65 },
  { name: "Flutter",         icon: <SiFlutter />,    category: "Mobile",    level: 70 },
  { name: "Kotlin",          icon: <SiKotlin />,     category: "Mobile",    level: 68 },
  { name: "MySQL",           icon: <SiMysql />,      category: "Database",  level: 78 },
  { name: "PostgreSQL",      icon: <SiPostgresql />, category: "Database",  level: 72 },
  { name: "Oracle Database", icon: <SiOracle />,     category: "Database",  level: 65 },
  { name: "REST APIs",       icon: <FaDatabase />,   category: "Backend",   level: 84 },
  { name: "C#",              icon: <FaCode />,       category: "Backend",   level: 60 },
  { name: "GitHub",          icon: <FaGithub />,     category: "Tools",     level: 80 },
];

const CATEGORIES = ["All", "Frontend", "Backend", "Database", "Mobile", "Tools"];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredSkill,   setHoveredSkill]   = useState(null);

  const filtered = skills.filter(
    s => activeCategory === "All" || s.category === activeCategory
  );

  return (
    <Element name="skills">
      <section className="skills-section" id="skills">
        <video autoPlay loop muted className="skills-bg" playsInline>
          <source src="/code-bg.mp4" type="video/mp4" />
        </video>

        <motion.h2
          className="skills-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Skills
        </motion.h2>

        {/* Category filter */}
        <div className="skills-filters">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              className={`skill-filter-btn ${activeCategory === cat ? "active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skill count */}
        <p className="skills-count">{filtered.length} skill{filtered.length !== 1 ? "s" : ""}</p>

        {/* ── Grid view ── */}
        <div className="skills-grid-view">
          <AnimatePresence mode="popLayout">
            {filtered.map((skill, i) => (
              <motion.div
                key={skill.name}
                className={`skill-card-v2 ${hoveredSkill === skill.name ? "hovered" : ""}`}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
                initial={{ opacity: 0, scale: 0.88 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.88 }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                layout
                whileHover={{ y: -6 }}
              >
                <div className="skill-icon-v2">{skill.icon}</div>
                <span className="skill-name-v2">{skill.name}</span>

                {/* Proficiency bar — visible on hover */}
                <div className="skill-bar-wrap">
                  <div
                    className="skill-bar-fill"
                    style={{ width: hoveredSkill === skill.name ? `${skill.level}%` : "0%" }}
                  />
                </div>
                <span className="skill-level">{skill.level}%</span>

                <span className="skill-cat-chip">{skill.category}</span>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* ── Marquee strip (always shows all) ── */}
        <div className="skills-marquee" aria-hidden="true">
          <div className="skills-track">
            {skills.concat(skills).map((skill, i) => (
              <div key={i} className="skill-card">
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