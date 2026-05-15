"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
      const [progress, setProgress] = useState(5);

      useEffect(() => {
            const updateProgress = () => {
                  const scrollTop = window.scrollY;
                  const scrollHeight =
                        document.documentElement.scrollHeight - window.innerHeight;

                  const value = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 5;

                  setProgress(Math.max(value, 5));
            };

            updateProgress();

            window.addEventListener("scroll", updateProgress, { passive: true });
            window.addEventListener("resize", updateProgress);

            return () => {
                  window.removeEventListener("scroll", updateProgress);
                  window.removeEventListener("resize", updateProgress);
            };
      }, []);

      return (
            <>
                  {/* TOP BAR */}
                  <div className="fixed left-0 top-0 z-[999999] h-1.5 w-screen bg-white/10">
                        <div
                              className="h-full bg-[var(--accent)] transition-[width] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                              style={{ width: `${progress}%` }}
                        />
                  </div>

                  {/* PERCENT */}
                  <div className="fixed top-5 left-5 z-[999999] text-xs font-medium tracking-wide text-white/50">
                        {Math.round(progress)}%
                  </div>
            </>
      );
}