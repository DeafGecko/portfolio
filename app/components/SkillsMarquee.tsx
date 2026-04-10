'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const skills = [
  'GSAP', 'Framer Motion', 'React', 'Next.js', 'TypeScript', 
  'Tailwind', 'UI/UX', 'Design Systems', '3D Animation', 'Prisma'
];

export const SkillsMarquee = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const width = marqueeRef.current?.scrollWidth;
      if (width) {
        gsap.to(marqueeRef.current, {
          x: -width / 2,
          duration: 20,
          repeat: -1,
          ease: 'none',
          modifiers: {
            x: gsap.utils.unitize(x => parseFloat(x) % (width / 2))
          }
        });
      }
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="py-16 bg-gray-50 overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-8">Skills & Tools</h2>
      <div className="relative">
        <div ref={marqueeRef} className="flex gap-8 whitespace-nowrap">
          {[...skills, ...skills].map((skill, i) => (
            <div
              key={i}
              className="inline-block px-6 py-3 bg-white rounded-full shadow-md text-gray-800 font-medium"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
