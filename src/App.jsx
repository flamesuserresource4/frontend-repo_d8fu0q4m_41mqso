import React from 'react';
import Hero from './components/Hero';
import AboutSkills from './components/AboutSkills';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="min-h-screen scroll-smooth bg-[#080d17] text-white selection:bg-cyan-400/30 selection:text-white">
      <a
        href="#projects"
        className="fixed right-4 top-4 z-50 rounded-full border border-cyan-400/30 bg-[#0b1220]/70 px-4 py-2 text-xs text-cyan-200 backdrop-blur hover:border-cyan-400/60 hover:text-cyan-100"
      >
        Skip to Projects
      </a>

      <header className="fixed left-0 top-0 z-40 w-full bg-gradient-to-b from-[#080d17] to-transparent/0 py-4">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 text-sm">
          <div className="font-semibold tracking-wide text-cyan-200">DAKSH</div>
          <nav className="hidden gap-6 text-blue-200/80 sm:flex">
            <a href="#about" className="hover:text-cyan-200">About</a>
            <a href="#projects" className="hover:text-cyan-200">Projects</a>
            <a href="#contact" className="hover:text-cyan-200">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <AboutSkills />
        <Projects />
        <Contact />
      </main>

      <footer className="border-t border-cyan-400/10 bg-[#080d17] py-6 text-center text-xs text-blue-200/70">
        © {new Date().getFullYear()} Daksh Acharekar • Built with a neon, cyber aesthetic.
      </footer>
    </div>
  );
};

export default App;
