import React from 'react';
import { motion } from 'framer-motion';
import { Code, Globe, PenTool, Monitor, Palette } from 'lucide-react';

const skills = [
  { name: 'HTML', icon: Code },
  { name: 'CSS', icon: Palette },
  { name: 'JavaScript', icon: Monitor },
  { name: 'Webflow', icon: Globe },
  { name: 'Design', icon: PenTool },
];

const AboutSkills = () => {
  return (
    <section id="about" className="relative w-full bg-[#0b1220] py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.12),transparent_55%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-semibold tracking-tight text-cyan-300 sm:text-3xl">About</h2>
            <p className="mt-4 text-blue-100/90">
              I’m Daksh, a 13-year-old, self-taught web developer and gamer. I’m exploring the web one
              project at a time — learning HTML, CSS, JavaScript, and Webflow to build fast, clean, and
              interactive experiences with a futuristic vibe.
            </p>
            <p className="mt-4 text-blue-100/90">
              When I’m not coding, I’m playing games, experimenting with designs, and imagining what the
              next-gen internet can look like.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-xl border border-cyan-400/20 bg-[#0a0f1a]/60 p-6 backdrop-blur"
          >
            <h3 className="text-lg font-semibold text-cyan-200">Skills</h3>
            <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {skills.map((s) => (
                <div
                  key={s.name}
                  className="group flex items-center gap-3 rounded-lg border border-cyan-400/10 bg-[#0f1726]/60 p-3 transition hover:border-cyan-400/40 hover:shadow-[0_0_18px_rgba(34,211,238,0.25)]"
                >
                  <s.icon className="h-5 w-5 text-cyan-300" />
                  <span className="text-sm text-blue-100/90">{s.name}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 text-xs text-blue-200/60">
              • Focus: minimal, fast, and accessible • Dark mode by default • Subtle motion
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSkills;
