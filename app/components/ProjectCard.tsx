'use client';
import { useRef } from 'react';
import gsap from 'gsap';

interface ProjectCardProps {
  title: string;
  category: string;
  year: string;
  color: string;
}

export const ProjectCard = ({ title, category, year, color }: ProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const onMouseEnter = () => {
    gsap.to(cardRef.current, {
      scale: 1.05,
      boxShadow: '0 25px 40px -12px rgba(0,0,0,0.3)',
      duration: 0.3,
      ease: 'power2.out'
    });
  };

  const onMouseLeave = () => {
    gsap.to(cardRef.current, {
      scale: 1,
      boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)',
      duration: 0.3,
      ease: 'power2.out'
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="bg-white rounded-2xl overflow-hidden shadow-lg cursor-pointer transition-all"
    >
      <div className={`h-48 ${color} flex items-center justify-center`}>
        <span className="text-6xl opacity-50">🎨</span>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{category}</p>
        <p className="text-gray-400 text-xs mt-3">{year}</p>
      </div>
    </div>
  );
};
