import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <div className="min-h-screen w-full bg-black font-inter">
      <Navbar />
      <main className="flex flex-col">
        <Hero />
        <Projects />
        <Skills />
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
