import React from "react";
import { motion } from "framer-motion";

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

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // yaha tu baad me emailjs / backend wagaira connect kar sakta hai
    alert("Thanks for reaching out!");
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-dark-900 text-white px-4 py-16 md:py-20"
    >
      <motion.div
        className="max-w-5xl mx-auto"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Header */}
        <motion.div className="text-center mb-10 md:mb-14" variants={item}>
          <p className="text-sm tracking-[0.25em] uppercase text-purple/80 mb-2">
            Contact
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Let&apos;s build something together
          </h2>
          <p className="text-sm md:text-base text-white/60 max-w-2xl mx-auto">
          Want to connect or share an idea?
           </p>
        </motion.div>

        {/* Layout: form + info */}
        <motion.div
          className="grid md:grid-cols-[1.6fr,1.1fr] gap-6 md:gap-8"
          variants={container}
        >
          {/* FORM SIDE */}
          <motion.div
            variants={item}
            className="relative rounded-2xl bg-dark-100/70 border border-white/5 shadow-[0_18px_45px_rgba(15,23,42,0.9)] p-5 md:p-6 overflow-hidden"
          >
            {/* subtle gradient glow */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-purple/20 via-transparent to-blue-500/10 opacity-60" />

            <div className="relative z-10">
              <h3 className="text-lg md:text-xl font-semibold mb-1">
                Send me a message
              </h3>
              


              <form onSubmit={handleSubmit} className="space-y-4 text-sm md:text-base">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-1 text-xs md:text-sm text-white/70">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full rounded-xl bg-dark-200/80 border border-white/10 px-3 py-2 text-xs md:text-sm outline-none focus:border-purple focus:ring-1 focus:ring-purple/70 transition"
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-1 text-xs md:text-sm text-white/70">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      className="w-full rounded-xl bg-dark-200/80 border border-white/10 px-3 py-2 text-xs md:text-sm outline-none focus:border-purple focus:ring-1 focus:ring-purple/70 transition"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-1 text-xs md:text-sm text-white/70">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="Subject of your message"
                    className="w-full rounded-xl bg-dark-200/80 border border-white/10 px-3 py-2 text-xs md:text-sm outline-none focus:border-purple focus:ring-1 focus:ring-purple/70 transition"
                  />
                </div>

                <div>
                  <label className="block mb-1 text-xs md:text-sm text-white/70">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Write your message here..."
                    className="w-full rounded-xl bg-dark-200/80 border border-white/10 px-3 py-2 text-xs md:text-sm outline-none resize-none focus:border-purple focus:ring-1 focus:ring-purple/70 transition"
                    required
                  />
                </div>

                <div className="flex items-center justify-between gap-3 flex-wrap pt-1">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-purple via-fuchsia-500 to-blue-400 text-xs md:text-sm font-medium shadow-[0_12px_30px_rgba(88,28,135,0.7)] hover:shadow-[0_16px_40px_rgba(88,28,135,0.9)] hover:scale-[1.01] active:scale-[0.99] transition"
                  >
                    Send message
                    <span className="text-sm"></span>
                  </button>
                </div>
              </form>
            </div>
          </motion.div>

          {/* INFO / SIDEBAR */}
          <motion.div
            variants={item}
            className="flex flex-col gap-4 md:gap-5"
          >
            {/* Card 1 */}
            <div className="relative rounded-2xl bg-dark-100/70 border border-white/5 p-4 md:p-5 overflow-hidden">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple/15 opacity-60" />
              <div className="relative z-10 space-y-2">
                <p className="text-xs uppercase tracking-[0.2em] text-white/50">
                  Contact Info
                </p>
                <h3 className="text-base md:text-lg font-semibold">
                  Let&apos;s connect
                </h3>
                <p className="text-xs md:text-sm text-white/60">
                  Prefer email or LinkedIn? 
                </p>

                <div className="mt-3 space-y-2 text-xs md:text-sm">
                  <p className="flex items-center gap-2">

                    <motion.a href="https://mail.google.com/mail/?view=cm&fs=1&to=shristi.shrivastava703@gmail.com"
                     target="_blank"
                     rel="noopener noreferrer"
                     whileHover={{ scale: 1.1 }}
                    className="text-purple font-semibold cursor-pointer hover:underline">
                    shristi.shrivastava703@gmail.com
                    </motion.a>


                   <pre>
                    <motion.a
                   href="https://www.linkedin.com/in/shristi-shrivastava-5985b4305/"  
                   target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="text-blue-400 font-semibold cursor-pointer hover:underline">
                    LinkedIn 
                    </motion.a>
                    </pre>

                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-lg"></span>
                    <span className="text-white/80">
                      Gwalior, India
                    </span>
                  </p>
                </div>
              </div>
            </div>


            {/* Bottom chip strip (match skills/projects vibe) */}
            <div className="flex flex-wrap gap-2 text-[11px] md:text-xs text-white/60">
              <span className="px-3 py-1 rounded-full border border-white/10 bg-dark-100/70">
                 Open to Frontend  roles
              </span>
              <span className="px-3 py-1 rounded-full border border-white/10 bg-dark-100/70">
                Portfolio & projects available
              </span>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
