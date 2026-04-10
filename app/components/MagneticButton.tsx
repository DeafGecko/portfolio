'use client';
import { useRef } from 'react';
import gsap from 'gsap';

export const MagneticButton = ({ children }: { children: React.ReactNode }) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const onMouseMove = (e: React.MouseEvent) => {
    const rect = buttonRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left - rect.width / 2) * 0.3;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.3;
    gsap.to(buttonRef.current, { x, y, duration: 0.3, ease: 'power2.out' });
  };
  const onMouseLeave = () => {
    gsap.to(buttonRef.current, { x: 0, y: 0, duration: 0.4, ease: 'elastic.out(1, 0.5)' });
  };
  return (
    <button ref={buttonRef} onMouseMove={onMouseMove} onMouseLeave={onMouseLeave} className="px-8 py-4 bg-black text-white rounded-full">
      {children}
    </button>
  );
};
