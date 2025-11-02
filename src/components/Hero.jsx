import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  const scrollToWork = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-[#0a0f1a] text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0a0f1a]/40 via-[#0a0f1a]/60 to-[#0a0f1a]/90" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 pt-24 text-center sm:pt-28 md:pt-36">
        <motion.h1
          className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-fuchsia-400 bg-clip-text text-transparent">
            Daksh Acharekar
          </span>
        </motion.h1>

        <motion.p
          className="mt-4 max-w-2xl text-balance text-lg text-blue-100/90 sm:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7 }}
        >
          From gamer to coder — creating the future online.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mt-8"
        >
          <button
            onClick={scrollToWork}
            className="group relative inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 px-6 py-3 text-cyan-100 backdrop-blur transition-all hover:from-cyan-500/30 hover:to-blue-600/30 hover:shadow-[0_0_25px_rgba(34,211,238,0.45)]"
          >
            <span className="absolute -inset-px rounded-full bg-cyan-400/20 opacity-0 blur transition-opacity group-hover:opacity-100" />
            <span className="relative font-semibold tracking-wide">View My Work</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="relative h-4 w-4"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
