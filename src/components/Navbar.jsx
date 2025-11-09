import React from 'react';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  const links = [
    { href: '#home', label: 'Home' },
    { href: '#javaprojects', label: 'Java' },
    { href: '#apps', label: 'Apps' },
    { href: '#skills', label: 'Skills' },
    { href: '#socials', label: 'Socials' },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full bg-black/40 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 text-white">
        <a href="#home" className="text-sm font-bold tracking-wide">NIKHIL SARAK</a>

        <div className="hidden gap-6 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-white/80 hover:text-white">
              {l.label}
            </a>
          ))}
          <a
            href="mailto:nikhilsarak612w@gmail.com"
            className="rounded-lg bg-white px-3 py-1.5 text-sm font-semibold text-black hover:bg-white/90"
          >
            Contact
          </a>
        </div>

        <button
          className="inline-flex items-center rounded-lg border border-white/20 p-2 md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle Menu"
        >
          <Menu size={18} />
        </button>
      </nav>

      {open && (
        <div className="mx-auto max-w-6xl px-6 pb-4 md:hidden">
          <div className="rounded-xl border border-white/10 bg-black/60 p-4">
            <div className="flex flex-col gap-3">
              {links.map((l) => (
                <a key={l.href} href={l.href} className="text-sm text-white/80 hover:text-white" onClick={() => setOpen(false)}>
                  {l.label}
                </a>
              ))}
              <a
                href="mailto:nikhilsarak612w@gmail.com"
                className="rounded-lg bg-white px-3 py-1.5 text-center text-sm font-semibold text-black hover:bg-white/90"
                onClick={() => setOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
