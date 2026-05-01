

import React from "react";
import { motion } from "framer-motion";
import "./Hero.css";

const container = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const Hero = () => {
  return (
    <section id="home" className="hero">
      {/* animated gradient blobs behind */}
      <div className="hero__bg hero__bg--one" />
      <div className="hero__bg hero__bg--two" />

      <motion.div
        className="hero__inner"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* LEFT: TEXT CONTENT */}
        <motion.div className="hero__content" variants={item}>
          <motion.p className="hero__tag" variants={item}>
            Hi, I'm
          </motion.p>

          <motion.h1 className="hero__title" variants={item}>
            Shristi Shrivastava
          </motion.h1>

          <motion.h2 className="hero__subtitle" variants={item}>
            Software Developer & Full Stack Enthusiast
          </motion.h2>

          <motion.p className="hero__description" variants={item}>
            Web application development is one of my areas of expertise as I create user-friendly and contemporary web applications using React, HTML, and CSS. At present, I serve as an intern at X2 Infotech as a full-stack developer where I get to have practical exposure to the construction of responsive web applications.

Apart from creating responsive applications, I also ensure that the code written is clean and reusable to keep the application well-maintained. In addition to these skills, I keep myself updated with emerging technologies.
          </motion.p>

          <motion.div className="hero__chips" variants={item}>
            <span className="hero__chip"> React.js</span>
            <span className="hero__chip"> Frontend Specialist</span>
            <span className="hero__chip"> MCA</span>
          </motion.div>

          <motion.div className="hero__cta" variants={item}>
            <a href="#projects" className="btn btn--primary">
              View Projects
            </a>
            <a href="#contact" className="btn btn--ghost">
              Contact Me
            </a>
          </motion.div>

          <motion.div className="hero__links" variants={item}>
            {/* Yaha apne links daal dena */}
            <a
              href="https://github.com/Shristi703"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <span>•</span>
            <a
              href="https://www.linkedin.com/in/shristi-shrivastava-5985b4305/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </motion.div>
        </motion.div>



        {/* RIGHT: IMAGE CARD */}

<motion.div
  className="hero__image-wrapper"
  initial={{ opacity: 0, scale: 0.9, x: 40 }}
  animate={{ opacity: 1, scale: 1, x: 0 }}
  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
>
  <motion.img
    src="/profile.png"
    alt="Shristi Shrivastava"
    className="hero__image circular-image"
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 200, damping: 15 }}
  />
</motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
