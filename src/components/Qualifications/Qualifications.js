import React, { useState } from "react";
import { Element } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import "./Qualifications.css";

const qualifications = [
  { title: "Oracle Academy Database Design Certification", institution: "University of Colombo", year: "2024", type: "Certification" },
  { title: "Adobe Photoshop Certification",               institution: "Udemy",                 year: "2022", type: "Certification" },
  { title: "Diploma In Software Engineering",             institution: "NIBM",                  year: "2023", type: "Diploma"      },
  { title: "Higher National Diploma In Software Engineering", institution: "NIBM",              year: "2023", type: "Diploma"      },
];

const TYPES = ["All", ...Array.from(new Set(qualifications.map(q => q.type)))];

const cardV = {
  hidden: { opacity: 0, y: 32 },
  show:   i => ({ opacity: 1, y: 0, transition: { duration: 0.45, delay: i * 0.1, ease: [0.22,1,0.36,1] } }),
  exit:   { opacity: 0, y: -16, transition: { duration: 0.25 } },
};

const typeColors = {
  Certification: { bg: "#0f2744", text: "#38bdf8", border: "#38bdf820" },
  Diploma:       { bg: "#0f1f0a", text: "#4ade80", border: "#4ade8020" },
};

const Qualifications = () => {
  const [showAll,    setShowAll]    = useState(false);
  const [activeType, setActiveType] = useState("All");

  const filtered = qualifications.filter(q => activeType === "All" || q.type === activeType);
  const visible  = showAll ? filtered : filtered.slice(0, 3);

  return (
    <Element name="qualifications">
      <section className="qualifications-section" id="qualifications">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Qualifications
        </motion.h2>

        {/* Filter pills */}
        <div className="qual-filters">
          {TYPES.map(t => (
            <button
              key={t}
              className={`qual-filter-btn ${activeType === t ? "active" : ""}`}
              onClick={() => setActiveType(t)}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="qualification-grid">
          <AnimatePresence mode="popLayout">
            {visible.map((q, i) => {
              const col = typeColors[q.type] || typeColors.Certification;
              return (
                <motion.div
                  key={q.title}
                  className="qualification-card"
                  custom={i}
                  variants={cardV}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  layout
                  whileHover={{ y: -7, transition: { duration: 0.22 } }}
                >
                  {/* Year badge */}
                  <div className="qual-year-badge">{q.year}</div>

                  {/* Type chip */}
                  <span
                    className="qual-type-chip"
                    style={{ background: col.bg, color: col.text, borderColor: col.border }}
                  >
                    {q.type}
                  </span>

                  <h3>{q.title}</h3>
                  <p className="qual-institution">
                    <span className="qual-institution-icon">🎓</span>
                    {q.institution}
                  </p>

                  {/* Decorative bottom line */}
                  <div className="qual-card-accent" />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <p className="qual-empty">No qualifications in this category.</p>
        )}

        {filtered.length > 3 && (
          <motion.button
            className="show-more-btn"
            onClick={() => setShowAll(!showAll)}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            {showAll ? "Show Less ↑" : `Show All ${filtered.length} ↓`}
          </motion.button>
        )}
      </section>
    </Element>
  );
};

export default Qualifications;