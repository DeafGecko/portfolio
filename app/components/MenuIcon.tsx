"use client";

import { motion } from "framer-motion";

export default function MenuIcon({ open }: { open: boolean }) {
      const topPath = open ? "M 6 6 L 18 18" : "M 3 6 L 21 6";
      const middlePath = "M 3 12 L 21 12";
      const bottomPath = open ? "M 6 18 L 18 6" : "M 3 18 L 21 18";

      return (
            <svg width="24" height="24" viewBox="0 0 24 24">
                  <motion.path
                        d={topPath}
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        animate={{ d: topPath }}
                        transition={{ duration: 0.25 }}
                  />

                  <motion.path
                        d={middlePath}
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        animate={{ opacity: open ? 0 : 1 }}
                        transition={{ duration: 0.2 }}
                  />

                  <motion.path
                        d={bottomPath}
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        animate={{ d: bottomPath }}
                        transition={{ duration: 0.25 }}
                  />
            </svg>
      );
}