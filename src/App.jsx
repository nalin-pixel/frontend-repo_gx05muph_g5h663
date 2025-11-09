import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import JavaProjects from './components/JavaProjects';
import AndroidApps from './components/AndroidApps';
import Skills from './components/Skills';
import Socials from './components/Socials';

function App() {
  return (
    <div className="min-h-screen w-full bg-black font-inter">
      <Navbar />
      <main className="flex flex-col">
        <Hero />
        <JavaProjects />
        <AndroidApps />
        <Skills />
        <Socials />
      </main>
      <footer className="w-full border-t border-white/10 bg-neutral-950 py-6 text-center text-white/60">
        <p className="text-sm">
          © {new Date().getFullYear()} Nikhil Sarak — Built with React, Tailwind, and a playful 3D touch.
        </p>
      </footer>
    </div>
  );
}

export default App;
