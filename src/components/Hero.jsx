

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
            Frontend Developer & Full Stack Enthusiast
          </motion.h2>

          <motion.p className="hero__description" variants={item}>
            I create easy-to-use and modern web pages with React, HTML, and CSS. I like making websites that 
            look good and work smoothly for users. I also focus on writing reusable code so things stay
             organized and simple. I keep learning new technologies to get better at what I do.
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
    src="/Profile.png"
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
