'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { MagneticButton } from './MagneticButton';

export const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const words = textRef.current?.querySelectorAll('.word');
      if (words) {
        gsap.fromTo(words,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'back.out(1.2)' }
        );
      }
      gsap.fromTo(lineRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 1, ease: 'power2.out', delay: 0.5 }
      );
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={heroRef} className="min-h-screen flex flex-col items-center justify-center relative">
      <h1 ref={textRef} className="text-6xl md:text-8xl font-bold text-center max-w-4xl mx-auto">
        {'Design Engineering'.split(' ').map((word, i) => (
          <span key={i} className="word inline-block mx-2">{word}</span>
        ))}
      </h1>
      <div ref={lineRef} className="h-1 bg-gradient-to-r from-purple-500 to-pink-500 w-48 mt-6 origin-left"></div>
      <p className="text-gray-600 mt-8 text-xl max-w-md text-center">
        11 years of design precision, now building motion-first platforms.
      </p>
      <div className="mt-12">
        <MagneticButton>View Work →</MagneticButton>
      </div>
    </div>
  );
};
