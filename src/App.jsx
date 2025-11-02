import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import AboutSkills from './components/AboutSkills';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="min-h-screen scroll-smooth bg-[#080d17] text-white selection:bg-cyan-400/30 selection:text-white">
      <a
        href="#projects"
        className="fixed right-4 top-4 z-[60] rounded-full border border-cyan-400/30 bg-[#0b1220]/70 px-4 py-2 text-xs text-cyan-200 backdrop-blur hover:border-cyan-400/60 hover:text-cyan-100"
      >
        Skip to Projects
      </a>

      <NavBar />

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
