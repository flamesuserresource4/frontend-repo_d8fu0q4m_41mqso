import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Expense Tracker',
    description:
      'Track daily spending with categories, charts, and local persistence. Built for speed and clarity.',
    image:
      'https://images.unsplash.com/photo-1554224155-1696413565d3?q=80&w=1200&auto=format&fit=crop',
    demo: '#',
    github: '#',
    tags: ['React', 'Charts', 'PWA'],
  },
  {
    title: 'Lost Realms: The Browser Quest (PWA Game)',
    description:
      'A lightweight, installable browser RPG with offline play, pixel art, and quests. Made for mobile and desktop.',
    image:
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop',
    demo: '#',
    github: '#',
    tags: ['PWA', 'Game', 'JS'],
  },
  {
    title: 'Portfolio v1',
    description:
      'First iteration of my personal site with smooth scroll and neon accents. Constantly evolving.',
    image:
      'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop',
    demo: '#',
    github: '#',
    tags: ['HTML', 'CSS', 'Vanilla JS'],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative w-full scroll-mt-24 bg-[#0a0f1a] py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.1),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="text-2xl font-semibold tracking-tight text-cyan-300 sm:text-3xl">Projects</h2>
          <p className="text-sm text-blue-200/70">Selected builds — quick to load, fun to use.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group overflow-hidden rounded-xl border border-cyan-400/20 bg-[#0d1424]/60 backdrop-blur"
            >
              <div className="relative h-40 w-full overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0d1424] via-transparent to-transparent opacity-80" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-cyan-200">{p.title}</h3>
                <p className="mt-2 text-sm text-blue-100/80">{p.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-2 py-0.5 text-[11px] text-cyan-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-3">
                  <a
                    href={p.demo}
                    className="inline-flex items-center gap-1 text-sm text-cyan-300 underline-offset-2 hover:text-cyan-200 hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <ExternalLink className="h-4 w-4" /> Demo
                  </a>
                  <a
                    href={p.github}
                    className="inline-flex items-center gap-1 text-sm text-cyan-300 underline-offset-2 hover:text-cyan-200 hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Github className="h-4 w-4" /> Code
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
