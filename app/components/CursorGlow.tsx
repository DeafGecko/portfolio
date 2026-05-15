"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function CursorGlow() {
      const mouseX = useMotionValue(0);
      const mouseY = useMotionValue(0);

      const smoothX = useSpring(mouseX, {
            stiffness: 80,
            damping: 20,
      });

      const smoothY = useSpring(mouseY, {
            stiffness: 80,
            damping: 20,
      });

      useEffect(() => {
            const handleMouseMove = (e: MouseEvent) => {
                  mouseX.set(e.clientX - 160);
                  mouseY.set(e.clientY - 160);
            };

            window.addEventListener("mousemove", handleMouseMove);

            return () => {
                  window.removeEventListener("mousemove", handleMouseMove);
            };
      }, [mouseX, mouseY]);

      return (
            <motion.div
                  style={{
                        x: smoothX,
                        y: smoothY,
                  }}
                  className="pointer-events-none fixed left-0 top-0 z-0 hidden h-72 w-72 rounded-full bg-(--accent)/15 blur-[100px] md:block"
            />
      );
}