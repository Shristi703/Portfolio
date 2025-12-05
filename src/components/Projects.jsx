import React from "react";
import { motion } from "framer-motion";
import "./Projects.css";

const container = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0 },
};

const PROJECTS = [
  {
    id: 1,
    title: "Design of Donation Assistant ",
    tag: "MCA 2nd Semester Project",
    year: "2025 Feb - 2025 May ",
    description:
      "A mini project where people can donate their old clothes, Books & Toys. Donors can submit requests and volunteers/organizers can collect and distribute clothes to people in need.",
    learn: "Understood how to design simple flows, collect user data, and convert an idea into a working interface.",
    tech: ["HTML", "CSS", "Bootstrap", "Php"],      
  },
  {
    id: 2,
    title: "Tenant Verification App",
    tag: "MCA 3rd Semester Project",
    year: "2025",
    description:
      "An app to help house owners manage tenant details and basic verification information in one place, improving safety and record-keeping.",
    learn: "Learned how to structure data, create separate sections for details, and think from a real user’s point of view.",
    tech: ["React", "JavaScript", "Node.js", "MongoDB"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <motion.div
        className="projects-container"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Header */}
        <motion.div className="projects-header" variants={item}>
          <p className="projects-eyebrow">Projects</p>
          <h2 className="projects-title">Projects That Showcase My Academic Strengths</h2>
          <p className="projects-subtitle">
            These are two key projects from my MCA journey that helped me learn
            how to turn ideas into simple, usable applications.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div className="projects-grid" variants={container}>
          {PROJECTS.map((project) => (
            <motion.div
              key={project.id}
              className="project-card"
              variants={item}
              whileHover={{ y: -8, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
            >
              <div className="project-card-top">
                <div>
                  <p className="project-tag">{project.tag}</p>
                  <h3 className="project-title">{project.title}</h3>
                </div>
                <div className="project-meta">
                  <span className="project-index">
                    0{project.id}
                  </span>
                  <span className="project-year">{project.year}</span>
                </div>
              </div>


              <p className="project-text">{project.description}</p>

              <div className="project-learn-box">
                <p className="project-learn-label">What I learned</p>
                <p className="project-learn-text">{project.learn}</p>
              </div>

              <div className="project-bottom-row">
                <div className="project-tech-list">
                  {project.tech.map((t) => (
                    <span key={t} className="project-tech-pill">
                      {t}
                    </span>
                  ))}
                </div>
      <a  href="https://github.com/Shristi703" target="_blank" rel="noreferrer">  GitHub </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer text */}
        <motion.div className="projects-footer" variants={item}>
          <span className="projects-footer-pill">
             Both projects were built as part of my MCA coursework.
          </span>
          <span className="projects-footer-pill">
             I enjoy solving small real-world problems using simple UIs.
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
