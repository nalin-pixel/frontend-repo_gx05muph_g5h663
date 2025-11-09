import React from 'react';
import Spline from '@splinetool/react-spline';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-black text-white">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Soft gradient overlay for readability; doesn't block interactions */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto max-w-6xl px-6">
          <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur">
            Software Developer • Web • Android • Flutter
          </span>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-6xl">
            Nikhil Sarak
          </h1>
          <p className="mt-4 max-w-2xl text-base text-white/80 sm:text-lg">
            I build fast, reliable and beautiful digital experiences across web and mobile.
            From modern React apps to scalable Android and Flutter products, I craft
            end‑to‑end solutions with performance, UX, and maintainability in mind.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="mailto:nikhilsarak612w@gmail.com"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-white/90"
            >
              <Mail size={18} /> Contact Me
            </a>
            <a
              href="https://github.com/Nikhil4123"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
            >
              <Github size={18} /> GitHub
            </a>
            <a
              href="https://linkedin.com/in/nikhilsarak"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
            >
              <Linkedin size={18} /> LinkedIn
            </a>
            <a
              href="https://portfolio-nikhil-sarak.vercel.app"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-transparent px-4 py-2 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
            >
              <Download size={18} /> View Full Portfolio
            </a>
          </div>

          <div className="mt-10 grid max-w-xl grid-cols-2 gap-4 text-xs text-white/70 sm:text-sm">
            <div className="rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur">
              <p className="font-semibold text-white">Achievements</p>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>Winner — VCET Hackathon 2025</li>
                <li>1st Prize — VNPS Innovation Challenge</li>
              </ul>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur">
              <p className="font-semibold text-white">Current Focus</p>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>Kotlin + Flutter Apps</li>
                <li>Scalable MERN Architectures</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
