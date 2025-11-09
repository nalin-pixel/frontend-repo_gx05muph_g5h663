import React from 'react';
import { ExternalLink, Trophy, Rocket } from 'lucide-react';

const projects = [
  {
    title: 'Penny Tracker | Finance Tracker (Winner at VNPS)',
    stack: 'Java, Firebase, AWS, Redis, NLP',
    points: [
      'Automatic SMS-based spending extraction and analysis',
      'Daily, monthly, yearly reports with budget alerts',
      'Finance chatbot using TF-IDF + cosine similarity',
      'AES-256 encryption, hosted on AWS EC2, Redis caching'
    ],
  },
  {
    title: 'KubeGuard | Predictive Kubernetes Monitoring (3rd Prize)',
    stack: 'Kubernetes, DigitalOcean, Prometheus, Grafana, Discord API',
    points: [
      'Self-healing with automated crash recovery + Discord alerts',
      'Predictive anomaly detection using CPU/RAM trends',
      'Live dashboard for health insights and forecasting'
    ],
  },
  {
    title: 'SkillRush Platform | Tech Learning & Collaboration',
    stack: 'MERN, Redis, WebSockets',
    points: [
      'Interactive platform with real-time messaging',
      'Auth, progress tracking, gamified leaderboards',
      'Redis caching for scale'
    ],
  },
  {
    title: 'AgriCommerce Platform',
    stack: 'MERN, Google Maps API, AWS S3, Razorpay',
    points: [
      'Multi-role login with JWT for farmers/buyers/delivery',
      'Maps for location search, routing, and live tracking',
      'Payments via Razorpay, uploads via S3, responsive UI'
    ],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative w-full bg-black py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">Featured Projects</h2>
            <p className="mt-2 max-w-2xl text-white/70">
              Real-world work focused on performance, reliability, and clean UX.
            </p>
          </div>
          <a
            href="https://github.com/Nikhil4123"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-3 py-2 text-sm text-white/80 hover:bg-white/10"
          >
            <ExternalLink size={16} /> Explore more
          </a>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <div key={p.title} className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6">
              <div className="flex items-center gap-2 text-sm text-emerald-400">
                <Rocket size={16} />
                <span className="font-medium">{p.stack}</span>
              </div>
              <h3 className="mt-2 text-xl font-semibold">{p.title}</h3>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-white/80">
                {p.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-white/80">
          <div className="flex items-center gap-2">
            <Trophy size={16} className="text-yellow-300" />
            <p>
              Highlights include wins at VCET Hackathon 2025 and VNPS Innovation Challenge, plus 10+ hackathons overall.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
