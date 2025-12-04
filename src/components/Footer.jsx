"use client";

import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const Footer = () => {
  return (
    <footer className="bg-dark-900 text-white py-10 px-6 border-t border-white/10">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-5xl mx-auto flex flex-col items-center gap-6"
      >
        {/* Small logo / name */}
        <motion.h3
          className="text-lg md:text-xl font-semibold tracking-wide"
          animate={{
            opacity: [1, 0.6, 1],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
           Designed with Passion
        </motion.h3>

        

        {/* Copyright */}
        <motion.p
          className="text-xs md:text-sm text-white/60 text-center"
          whileHover={{ scale: 1.02 }}
        >
          © {new Date().getFullYear()} — Built with  using React, Tailwind &
          Framer Motion.
        </motion.p>

        {/* Glow line animation */}
        <motion.div
          className="w-24 h-1 rounded-full bg-gradient-to-r from-purple via-fuchsia-500 to-blue-400"
          animate={{ width: ["40px", "120px", "40px"] }}
          transition={{ duration: 3, repeat: Infinity }}
        ></motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
