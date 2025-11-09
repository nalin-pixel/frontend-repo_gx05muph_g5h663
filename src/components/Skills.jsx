import React from 'react';
import { Code2, Smartphone, Globe, Server, ShieldCheck, Boxes } from 'lucide-react';

const skills = [
  {
    title: 'Languages',
    icon: Code2,
    items: ['Java', 'JavaScript', 'TypeScript', 'C++', 'C', 'Dart', 'Go']
  },
  {
    title: 'Web',
    icon: Globe,
    items: ['React', 'Node.js', 'Express', 'MongoDB', 'MySQL', 'Tailwind CSS']
  },
  {
    title: 'Mobile',
    icon: Smartphone,
    items: ['Kotlin', 'Java', 'Flutter', 'Firebase']
  },
  {
    title: 'DevOps & Cloud',
    icon: Server,
    items: ['AWS', 'Docker', 'Kubernetes', 'Linux', 'Jenkins']
  },
  {
    title: 'Cybersecurity',
    icon: ShieldCheck,
    items: ['Kali Linux', 'Burp Suite', 'Wireshark', 'Metasploit', 'Nmap']
  },
  {
    title: 'Tools',
    icon: Boxes,
    items: ['Git', 'GitHub', 'Postman', 'Redis', 'WebSockets']
  },
];

const Skills = () => {
  return (
    <section id="skills" className="relative w-full bg-neutral-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold sm:text-4xl">Technical Skills</h2>
        <p className="mt-2 max-w-2xl text-white/70">
          A versatile stack for building scalable web and mobile applications.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map(({ title, icon: Icon, items }) => (
            <div
              key={title}
              className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 transition hover:border-white/20 hover:from-white/10"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-white/10 p-2"><Icon size={20} /></div>
                <h3 className="text-lg font-semibold">{title}</h3>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {items.map((it) => (
                  <span key={it} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80">
                    {it}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
