import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0, y: 30 },
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

const socials = [
  {
    label: "LinkedIn",
    desc: "Let’s connect professionally.",
    
    href: "https://www.linkedin.com/in/shristi-shrivastava-5985b4305/",
  },
  {
    label: "GitHub",
    desc: "Check out my projects.",
    href: "https://github.com/Shristi703",
  },
  {
    label: "Instagram",
    desc: "Exploring Creativity Through Fashion Design",
    href: "https://www.instagram.com/just_random_703/",
  },
];

const Social = () => {
  return (
    <section
      id="social"
      className="min-h-[60vh] bg-dark-900 text-white px-4 py-16 md:py-20 flex items-center"
    >
      <motion.div
        className="max-w-3xl mx-auto text-center"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Header */}
        <motion.div variants={item} className="mb-8 md:mb-10">
          <p className="text-xs md:text-sm tracking-[0.25em] uppercase text-purple/80 mb-2">
            Social Links
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Find me on these platforms
          </h2>
          <p className="text-xs md:text-sm text-white/60 max-w-xl mx-auto">
            Feel free to reach out through any platform you’re comfortable with
            — I’d be happy to connect.
          </p>
        </motion.div>

        {/* Buttons row */}
        <motion.div
          variants={container}
          className="flex flex-wrap justify-center gap-4 md:gap-5"
        >
          {socials.map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              variants={item}
              whileHover={{ y: -4, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
              className="inline-flex items-center gap-3 px-4 md:px-5 py-2.5 md:py-3 rounded-full bg-dark-100/80 border border-white/10 shadow-[0_12px_30px_rgba(15,23,42,0.9)] cursor-pointer"
            >
              <span className="text-xl md:text-2xl">{social.icon}</span>
              <div className="text-left">
                <p className="text-sm md:text-base font-medium">
                  {social.label}
                </p>
                <p className="text-[11px] md:text-xs text-white/60">
                  {social.desc}
                </p>
              </div>
              <span className="ml-1 text-xs md:text-sm text-white/70">↗</span>
            </motion.a>
          ))}
        </motion.div>

        {/* Tiny bottom note */}
        <motion.p
          variants={item}
          className="mt-6 text-[11px] md:text-xs text-white/50"
        >
          DMs, messages, collaboration — all welcome!
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Social;
