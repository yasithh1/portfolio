import React, { useState, useMemo } from "react";
import { Element } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import "./Projects.css";
import projects from "./projectsData";
import ProjectModal from "./ProjectModal";

/* collect unique tech tags */
const ALL_TAGS = ["All", ...Array.from(new Set(projects.flatMap(p => p.tech)))];

const cardVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.97 },
  show:   { opacity: 1, y: 0,  scale: 1,   transition: { duration: 0.42, ease: [0.22, 1, 0.36, 1] } },
  exit:   { opacity: 0, y: -12, scale: 0.97, transition: { duration: 0.25 } },
};

const Projects = () => {
  const [selected,   setSelected]   = useState(null);
  const [showAll,    setShowAll]    = useState(false);
  const [search,     setSearch]     = useState("");
  const [activeTag,  setActiveTag]  = useState("All");

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return projects.filter(p => {
      const matchTag    = activeTag === "All" || p.tech.includes(activeTag);
      const matchSearch = !q || p.title.toLowerCase().includes(q) || p.tech.some(t => t.toLowerCase().includes(q));
      return matchTag && matchSearch;
    });
  }, [search, activeTag]);

  const visible = showAll ? filtered : filtered.slice(0, 3);

  return (
    <Element name="projects">
      <section className="projects-section" id="projects">
        <motion.h2
          className="projects-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>

        {/* ── Controls ── */}
        <div className="projects-controls">
          {/* Search */}
          <div className="proj-search-box">
            <svg className="proj-search-icon" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="9" cy="9" r="6"/><line x1="14" y1="14" x2="19" y2="19"/>
            </svg>
            <input
              type="text"
              placeholder="Search by name or tech…"
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="proj-search-input"
              aria-label="Search projects"
            />
            {search && (
              <button className="proj-search-clear" onClick={() => setSearch("")}>×</button>
            )}
          </div>

          {/* Tag filters */}
          <div className="proj-tag-filters" role="group" aria-label="Filter by technology">
            {ALL_TAGS.slice(0, 8).map(tag => (
              <button
                key={tag}
                className={`proj-tag ${activeTag === tag ? "active" : ""}`}
                onClick={() => setActiveTag(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        <p className="proj-count">{filtered.length} project{filtered.length !== 1 ? "s" : ""}</p>

        {/* ── Grid ── */}
        {filtered.length === 0 ? (
          <div className="proj-empty">
            <p>No projects match. <button onClick={() => { setSearch(""); setActiveTag("All"); }}>Clear filters</button></p>
          </div>
        ) : (
          <div className="projects-grid">
            <AnimatePresence mode="popLayout">
              {visible.map((project, index) => (
                <motion.div
                  key={project.title}
                  className="project-card"
                  onClick={() => setSelected(project)}
                  variants={cardVariants}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  layout
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.38, delay: index * 0.07 }}
                  viewport={{ once: true }}
                >
                  <div className="card-img-wrap">
                    <img src={project.image} alt={project.title} className="card-image" loading="lazy" />
                    <div className="card-img-overlay">
                      <span className="card-view-btn">View Details</span>
                    </div>
                  </div>
                  <div className="card-body">
                    <h3>{project.title}</h3>
                    <p>{project.short}</p>
                    <div className="card-tech-tags">
                      {project.tech.slice(0, 3).map(t => (
                        <span key={t} className="card-tag">{t}</span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="card-tag card-tag--more">+{project.tech.length - 3}</span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

        {filtered.length > 3 && (
          <div className="see-more-container">
            <button className="see-more-button" onClick={() => setShowAll(!showAll)}>
              {showAll ? "See Less ↑" : `See All ${filtered.length} ↓`}
            </button>
          </div>
        )}

        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      </section>
    </Element>
  );
};

export default Projects;