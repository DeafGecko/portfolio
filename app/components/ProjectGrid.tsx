'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ProjectCard } from './ProjectCard';

const projects = [
  { title: 'Motion Brand', category: 'GSAP / 3D', year: '2025', color: 'bg-gradient-to-br from-purple-200 to-pink-200' },
  { title: 'Design System', category: 'UI / UX', year: '2024', color: 'bg-gradient-to-br from-blue-200 to-cyan-200' },
  { title: 'Full Stack App', category: 'Next.js / Prisma', year: '2025', color: 'bg-gradient-to-br from-emerald-200 to-teal-200' },
  { title: 'Animation Library', category: 'Framer Motion', year: '2024', color: 'bg-gradient-to-br from-amber-200 to-orange-200' },
];

export const ProjectGrid = () => {
  const gridRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(cardsRef.current,
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: 'back.out(0.8)' }
      );
    }, gridRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={gridRef} className="py-20 px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12">Featured Work</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {projects.map((project, idx) => (
          <div key={idx} ref={(el) => { cardsRef.current[idx] = el; }}>
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </div>
  );
};
