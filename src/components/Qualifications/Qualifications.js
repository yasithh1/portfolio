import React, { useState } from "react";
import { Element } from "react-scroll";
import { motion } from "framer-motion";
import "./Qualifications.css";

const qualifications = [
  {
    title: "Oracle Academy Database Design Certification",
    institution: "University of Colombo",
    year: "2024",
  },
  {
    title: "Adobe Photoshop Certification",
    institution: "Udemy",
    year: "2022",
  },
  {
    title: "Diploma In Software Engineering",
    institution: "NIBM",
    year: "2023",
  },
  {
    title: "Higher National Diploma In Software Engineering",
    institution: "NIBM",
    year: "2023",
  },
];

const Qualifications = () => {
  const [showAll, setShowAll] = useState(false);

  // Limit to first 3 items when showAll is false
  const visibleQualifications = showAll
    ? qualifications
    : qualifications.slice(0, 3);

  return (
    <Element name="qualifications">
      <section className="qualifications-section">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Qualifications
        </motion.h2>
        <div className="qualification-grid">
          {visibleQualifications.map((q, index) => (
            <motion.div
              key={index}
              className="qualification-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3>{q.title}</h3>
              <p>{q.institution}</p>
              <span>{q.year}</span>
            </motion.div>
          ))}
        </div>

        {/* Show More / Show Less button */}
        {qualifications.length > 3 && (
          <button
            className="show-more-btn"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        )}
      </section>
    </Element>
  );
};

export default Qualifications;
