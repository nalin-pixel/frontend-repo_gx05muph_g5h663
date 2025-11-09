import React from 'react';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    role: 'Flutter Developer Intern — Trinity',
    period: 'Sep 2025 — Present',
    points: [
      'Market management app for stores and customers',
      'Firebase integration for real-time sync and auth',
      'Barcode scanning and streamlined inventory flows',
    ],
  },
  {
    role: 'Kotlin Application Developer Intern — Ridan.ai (DOI Soft Tech Pvt. Ltd.)',
    period: 'Jun 2025 — Sep 2025',
    points: [
      'Feature development, bug fixing, API integration',
      'Modern Kotlin patterns and MVVM architecture',
      'Firebase and real-time synchronization',
    ],
  },
  {
    role: 'Web Development Intern — 1Stop.ai',
    period: 'Mar 2025 — Apr 2025',
    points: [
      'Backend with Node.js and MongoDB',
      'Custom parser for structured data',
      'REST APIs for AI task manager',
    ],
  },
  {
    role: 'Java Developer Intern — Interns Elight',
    period: 'Jul 2023 — Sep 2023',
    points: [
      'Android with Java, Flutter, Firebase',
      'BMI Calculator and Cat App with advanced UI/UX',
      'Cross-platform foundations in Flutter',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="relative w-full bg-neutral-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold sm:text-4xl">Experience</h2>
        <p className="mt-2 max-w-2xl text-white/70">Hands-on internships across web and mobile.</p>

        <div className="mt-10 space-y-6">
          {experiences.map((e) => (
            <div key={e.role} className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-emerald-400">
                  <Briefcase size={18} />
                  <p className="font-semibold">{e.role}</p>
                </div>
                <p className="text-sm text-white/70">{e.period}</p>
              </div>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-white/80">
                {e.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
