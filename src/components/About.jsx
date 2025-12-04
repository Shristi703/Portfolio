import React from "react";
import { motion } from "framer-motion";
import "./About.css";

const container = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0 },
};

const About = () => {
  return (
    <section id="about" className="about">
      <motion.div
        className="about__inner"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* LEFT: INTRO + TEXT */}
        <motion.div className="about__content" variants={item}>
          <p className="about__eyebrow">About Me</p>
          <h2 className="about__title">Who I am & what I do</h2>

          <p className="about__text" variants={item}>
            I’m <span className="about__highlight">Shristi Shrivastava</span>, a{" "}
            <strong>Frontend Developer</strong> and{" "}
            <strong>Full Stack Enthusiast</strong>,I have completed my BCA and currently pursuing MCA.
             I enjoy turning complex problems into simple, clean, and beautiful web experiences. I am actively
              looking for a great opportunity where I can grow, contribute, and apply my skills in real-world 
              projects.
          </p>

          <p className="about__text" variants={item}>
            I work with <strong>React,Node.js.Tailwind CSS ,HTML.</strong><pre>I love writing clean, reusable code and creating UIs that feel smooth and</pre>
          </p>

          <motion.div className="about__stats" variants={item}>
            <div className="about__stat-card">
              <span className="about__stat-number">2</span>
              <span className="about__stat-label">Projects Completed</span>
            </div>
            <div className="about__stat-card">
              <span className="about__stat-number">MCA</span>
              <span className="about__stat-label">In Progress</span>
            </div>
            <div className="about__stat-card">
              <span className="about__stat-number">24/7</span>
              <span className="about__stat-label">Learning & Building</span>
            </div>
          </motion.div>

          <motion.div className="about__badges" variants={item}>
            <span className="about__badge"> Focused on clean UI</span>
            <span className="about__badge"> Passion for Designing</span>
            <span className="about__badge"> Open to internships/jobs</span>
          </motion.div>
        </motion.div>

        {/* RIGHT: TIMELINE + SKILLS */}
        <motion.div className="about__sidebar" variants={item}>
          {/* Timeline card */}
          <motion.div
            className="about__card"
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 220, damping: 18 }}
          >
            <h3 className="about__card-title">Journey so far</h3>
            <div className="about__timeline">
              <div className="about__timeline-item">
                <div className="about__timeline-dot" />
                <div>
                  <p className="about__timeline-label">2024 - Present</p>
                  <p className="about__timeline-text">
                    Pursuing <strong>MCA</strong> and building projects in MERN
                    stack, focusing on real-world use cases.
                  </p>
                </div>
              </div>

              <div className="about__timeline-item">
                <div className="about__timeline-dot" />
                <div>
                  <p className="about__timeline-label">Web Development</p>
                  <p className="about__timeline-text">
                    Created responsive UIs with <strong>HTML, CSS, JS</strong>{" "}
                    and moved to <strong>React</strong> for scalable apps.
                  </p>
                </div>
              </div>

              </div>
            
          </motion.div>

          {/* Skills card */}
          <motion.div
            className="about__card"
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 220, damping: 18 }}
          >
            <h3 className="about__card-title">Tech I work with</h3>

            <div className="about__skills">
              <div>
                <p className="about__skills-label">Frontend</p>
                <div className="about__skills-tags">
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>JavaScript</span>
                  <span>React</span>
                </div>
              </div>

              <div>
                <p className="about__skills-label">Backend & DB</p>
                <div className="about__skills-tags">
                  <span>Node.js</span>
                  <span>Php</span>
                  <span>MongoDB</span>
                </div>
              </div>


              <div>
                <p className="about__skills-label">Tools</p>
                <div className="about__skills-tags">
                  <span>Git</span>
                  <span>VS Code</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
