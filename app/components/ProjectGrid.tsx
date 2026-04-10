'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ProjectCard } from './ProjectCard';
import { projects } from '../data/projects';

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
