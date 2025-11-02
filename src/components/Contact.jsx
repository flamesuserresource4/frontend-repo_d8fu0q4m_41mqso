import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Inquiry from ${form.name || 'Website'}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:dakshis14.exe@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative w-full scroll-mt-24 bg-[#0b1220] py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(14,165,233,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-5xl px-6">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-cyan-300 sm:text-3xl">Contact</h2>
          <p className="mt-2 text-blue-200/80">Let’s build something awesome.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <form
            onSubmit={handleSubmit}
            className="rounded-xl border border-cyan-400/20 bg-[#0a0f1a]/60 p-6 backdrop-blur"
          >
            <div className="grid gap-4">
              <div>
                <label className="text-sm text-blue-200/80">Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-md border border-cyan-400/20 bg-[#0f1726] px-3 py-2 text-blue-100 outline-none ring-cyan-400/30 placeholder:text-blue-300/40 focus:ring"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-sm text-blue-200/80">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full rounded-md border border-cyan-400/20 bg-[#0f1726] px-3 py-2 text-blue-100 outline-none ring-cyan-400/30 placeholder:text-blue-300/40 focus:ring"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="text-sm text-blue-200/80">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  className="mt-1 w-full rounded-md border border-cyan-400/20 bg-[#0f1726] px-3 py-2 text-blue-100 outline-none ring-cyan-400/30 placeholder:text-blue-300/40 focus:ring"
                  placeholder="Tell me about your idea..."
                />
              </div>
              <button
                type="submit"
                className="group relative inline-flex items-center justify-center gap-2 rounded-md border border-cyan-400/40 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 px-4 py-2 font-semibold text-cyan-100 backdrop-blur transition-all hover:from-cyan-500/30 hover:to-blue-600/30 hover:shadow-[0_0_25px_rgba(34,211,238,0.45)]"
              >
                Send Email
              </button>
            </div>
          </form>

          <div className="rounded-xl border border-cyan-400/20 bg-[#0a0f1a]/60 p-6 backdrop-blur">
            <h3 className="text-lg font-semibold text-cyan-200">Social</h3>
            <p className="mt-2 text-sm text-blue-100/80">Find me here:</p>
            <a
              href="https://instagram.com/obfusc8r"
              className="mt-4 inline-flex items-center gap-2 text-cyan-300 underline-offset-2 hover:text-cyan-200 hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram className="h-5 w-5" /> @obfusc8r
            </a>

            <div className="mt-8 rounded-lg border border-cyan-400/10 bg-[#0f1726]/60 p-4 text-sm text-blue-200/80">
              Prefer email? <span className="text-cyan-300">dakshis14.exe@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
