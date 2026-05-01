import React from "react";
import { motion } from "framer-motion";

const categories = [
  {
    title: "Frontend",
    subtitle: "Clean, responsive UIs",
    skills: [
      { name: "HTML / CSS", level: 80 },
      { name: "JavaScript (ES6+)", level: 70 },
      { name: "React.js", level: 70 },
    ],
  },
  {
    title: "Backend & Database",
    subtitle: "APIs & data handling",
    skills: [
      { name: "Node.js", level: 60 },
      { name: "Php", level: 50 },
      { name: "MongoDB", level: 60 },
    ],
  },

  // ✅ NEW CARD: Academic Skills
  {
    title: "Academic Skills",
    subtitle: "Core CS & MCA concepts",
    skills: [
      { name: "Internet of Things", level: 60 },
      { name: "OOPs in Cpp", level: 70 },
      { name: "DBMS Concepts", level: 70 },
      { name: "Operating Systems Basics", level: 60 },
    ],
  },

  {
    title: "Tools & Others",
    subtitle: "Day-to-day workflow",
    skills: [
      { name: "GitHub", level: 60 },
      { name: "VS Code", level: 85 },
      { name: "File Zilla", level: 85 },
      { name: "vercel", level: 75 },
      
    ],
  },
];

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
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen bg-dark-900 text-white px-4 py-16 md:py-20"
    >
      <motion.div
        className="max-w-5xl mx-auto"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Header */}
        <motion.div className="text-center mb-10 md:mb-14" variants={item}>
          <p className="text-sm tracking-[0.25em] uppercase text-purple/80 mb-2">
            Skills
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Tech I’m comfortable with
          </h2>
          <p className="text-sm md:text-base text-white/60 max-w-2xl mx-auto">
            I work across multiple technologies, but my strongest expertise is in
            frontend development, where I focus on creating clean UI, smooth
            user experiences, and scalable components.
          </p>
        </motion.div>

        {/* Category cards */}
        <motion.div
          className="grid md:grid-cols-2 gap-6 md:gap-8 justify-center"
          variants={container}
        >
          {categories.map((category, idx) => (
            <motion.div
              key={category.title}
              variants={item}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
              className="relative rounded-2xl bg-dark-100/70 border border-white/5 shadow-[0_18px_45px_rgba(15,23,42,0.9)] p-5 md:p-6 overflow-hidden"
            >
              {/* subtle gradient glow */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-purple/20 via-transparent to-blue-500/10 opacity-60" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold">
                      {category.title}
                    </h3>
                    <p className="text-xs md:text-sm text-white/60">
                      {category.subtitle}
                    </p>
                  </div>

                <motion.div
                  className="w-8 h-8 rounded-full bg-purple/20 flex items-center justify-center border border-purple/40"
                  animate={{ rotate: [0, 8, -8, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                >
                  <span className="w-2 h-2 rounded-full bg-purple" />
                </motion.div>
                </div>

                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1">
                        <span className="text-xs md:text-sm text-white/80">
                          {skill.name}
                        </span>
                        <span className="text-[11px] md:text-xs text-purple/90">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-dark-200 overflow-hidden">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-purple via-fuchsia-500 to-blue-400"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true, amount: 0.5 }}
                          transition={{ duration: 0.8, delay: idx * 0.1 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom tags strip */}
        <motion.div
          variants={item}
          className="mt-10 md:mt-12 flex flex-wrap justify-center gap-2 text-[11px] md:text-xs text-white/60"
        >
          <span className="px-3 py-1 rounded-full border border-white/10 bg-dark-100/70">
            Learning every day — tech never stops evolving
          </span>
          <span className="px-3 py-1 rounded-full border border-white/10 bg-dark-100/70">
            I believe clean code = better experience
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
