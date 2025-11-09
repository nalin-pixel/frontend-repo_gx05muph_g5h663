import React from 'react';
import { Code2, ExternalLink, Github, Globe } from 'lucide-react';

const projects = [
  {
    title: 'BookHub',
    description: 'Full-stack book discovery website.',
    repo: 'https://github.com/Nikhil4123/BookWebsite',
    live: 'https://book-website-two.vercel.app/',
    stack: 'JavaScript • React • Node • MongoDB',
  },
  {
    title: 'ECG Manager',
    description: 'Visualization and analysis of ECG assignment.',
    repo: 'https://github.com/Nikhil4123/Ecg-assignment',
    live: 'https://ecg-assignment.vercel.app/',
    stack: 'Next.js • Charts • Vercel',
  },
  {
    title: 'Automatic Finance Tracker (YouTube demo)',
    description: 'Popular project for auto SMS-based finance tracking.',
    repo: 'https://youtu.be/2Ky08OW8Xhg?si=yNmNQvV9yU2x-NIe',
    live: 'https://youtu.be/2Ky08OW8Xhg?si=yNmNQvV9yU2x-NIe',
    stack: 'Java • Firebase • NLP',
  },
];

const JavaProjects = () => {
  return (
    <section id="javaprojects" className="relative w-full bg-neutral-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">Java Focus & Projects</h2>
            <p className="mt-2 max-w-2xl text-white/70">
              My main focus is Java development across backend services and Android apps.
            </p>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {projects.map((p) => (
            <div key={p.title} className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6">
              <div className="flex items-center gap-2 text-emerald-400">
                <Code2 size={16} />
                <span className="text-sm">{p.stack}</span>
              </div>
              <h3 className="mt-2 text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-white/80">{p.description}</p>
              <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-3 py-2 text-white/80 hover:bg-white/10"
                >
                  <Github size={16} /> Repo
                </a>
                {p.live && (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-3 py-2 text-white/80 hover:bg-white/10"
                  >
                    <Globe size={16} /> Live
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JavaProjects;
