import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const linkClasses = 'px-2 py-1 hover:text-cyan-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 rounded';

  return (
    <header className={`fixed left-0 top-0 z-50 w-full transition-all ${
      scrolled ? 'bg-[#080d17]/70 backdrop-blur border-b border-cyan-400/10' : 'bg-gradient-to-b from-[#080d17] to-transparent'
    }`}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 text-sm">
        <a href="#hero" className="font-semibold tracking-wide text-cyan-200">DAKSH</a>

        <nav className="hidden items-center gap-6 text-blue-200/85 sm:flex">
          <a href="#about" className={linkClasses}>About</a>
          <a href="#projects" className={linkClasses}>Projects</a>
          <a href="#contact" className={linkClasses}>Contact</a>
        </nav>

        <button
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
          className="sm:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-cyan-400/30 bg-[#0b1220]/60 text-cyan-200 backdrop-blur hover:border-cyan-400/60"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="sm:hidden overflow-hidden border-t border-cyan-400/10 bg-[#080d17]/90 backdrop-blur"
          >
            <div className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-3 text-blue-100/90">
              <a href="#about" onClick={() => setOpen(false)} className="rounded px-3 py-2 hover:bg-white/5">About</a>
              <a href="#projects" onClick={() => setOpen(false)} className="rounded px-3 py-2 hover:bg-white/5">Projects</a>
              <a href="#contact" onClick={() => setOpen(false)} className="rounded px-3 py-2 hover:bg-white/5">Contact</a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default NavBar;
