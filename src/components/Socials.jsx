import React from 'react';
import { Github, Linkedin, Mail, Globe } from 'lucide-react';

const Socials = () => {
  const items = [
    { label: 'GitHub', href: 'https://github.com/Nikhil4123', icon: Github },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/nikhilsarak/', icon: Linkedin },
    { label: 'LeetCode', href: 'https://leetcode.com/u/Nikhilsarak/', icon: Globe },
    { label: 'Portfolio', href: 'https://portfolio-nikhil-sarak.vercel.app/', icon: Globe },
  ];

  return (
    <section id="socials" className="relative w-full bg-neutral-950 py-16 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl font-bold sm:text-3xl">Find me online</h2>
        <p className="mt-2 max-w-2xl text-white/70">Connect, collaborate, or just say hi.</p>
        <div className="mt-6 flex flex-wrap gap-3">
          {items.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/85 backdrop-blur hover:border-white/30 hover:bg-white/10"
            >
              <Icon size={18} /> {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Socials;
