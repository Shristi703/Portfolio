import React from "react";
import { motion } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Social", href: "#social" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="fixed w-full z-50 bg-dark-100/90 backdrop-blur-sm py-4 px-8 shadow-lg"
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* LOGO + NAME */}
        <motion.a
          href="#home"
          className="flex items-center gap-3 text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {/* SS CIRCLE LOGO */}
          <span
            className="flex items-center justify-center w-12 h-12 rounded-full font-bold text-lg shadow-lg transition-all duration-300 cursor-pointer"
            style={{
              background: "linear-gradient(135deg, #8b5cf6, #d946ef)",
              color: "white",
              boxShadow: "0 4px 15px rgba(139, 92, 246, 0.5)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.1) rotate(3deg)";
              e.currentTarget.style.boxShadow =
                "0 6px 22px rgba(217, 70, 239, 0.6)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow =
                "0 4px 15px rgba(139, 92, 246, 0.5)";
            }}
          >
            SS
          </span>

          <div className="flex items-center gap-2">
            <motion.div
              className="w-2.5 h-2.5 bg-purple rounded-full"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ repeat: Infinity, duration: 1.4 }}
            />
          </div>
        </motion.a>

        {/* NAV LINKS */}
        <div className="hidden md:flex space-x-10">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              className="relative text-white/80 hover:text-purple transition duration-300 group"
            >
              {link.label}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full"></span>
            </motion.a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
