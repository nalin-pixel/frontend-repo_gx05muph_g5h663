import React from 'react';
import { Smartphone, ExternalLink, Github } from 'lucide-react';

const apps = [
  {
    title: 'Automatic Attendance Tracker',
    repo: 'https://github.com/Nikhil4123/AutoAttendance_Tracker',
    description:
      'Android app to automate attendance tracking with smart parsing and streamlined flows. Space reserved below for screenshots.',
  },
  {
    title: 'SkillRush',
    repo: 'https://github.com/Nikhil4123/SkillRush-',
    description:
      'Learning companion app. Add your app images here to showcase key screens and interactions.',
  },
];

const AndroidApps = () => {
  return (
    <section id="apps" className="relative w-full bg-black py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">Android Apps</h2>
            <p className="mt-2 max-w-2xl text-white/70">
              Primary focus: Java development. Below are dedicated spaces where you can add screenshots of your Android apps.
            </p>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {apps.map((app) => (
            <div key={app.title} className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6">
              <div className="flex items-center gap-2 text-emerald-400">
                <Smartphone size={18} />
                <p className="font-medium">Java • Android</p>
              </div>
              <h3 className="mt-2 text-xl font-semibold">{app.title}</h3>
              <p className="mt-2 text-white/80">{app.description}</p>

              {/* Screenshot drop zones */}
              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {[1, 2, 3].map((n) => (
                  <div
                    key={n}
                    className="aspect-[9/16] rounded-xl border border-dashed border-white/20 bg-white/5 p-2 text-center text-xs text-white/60"
                  >
                    Add Image {n}
                  </div>
                ))}
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
                <a
                  href={app.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-3 py-2 text-white/80 hover:bg-white/10"
                >
                  <Github size={16} /> Repository
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AndroidApps;
