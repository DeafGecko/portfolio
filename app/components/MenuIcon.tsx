"use client";

import { motion } from "framer-motion";

export default function MenuIcon({ open }: { open: boolean }) {
      return (
            <svg width="24" height="24" viewBox="0 0 24 24">
                  {/* TOP LINE */}
                  <motion.path
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        variants={{
                              closed: { d: "M 3 6 L 21 6" },
                              open: { d: "M 6 6 L 18 18" },
                        }}
                        animate={open ? "open" : "closed"}
                        transition={{ type: "spring", stiffness: 260, damping: 20 }}
                        whileHover={{ scale: 1.3 }}
                  />

                  {/* MIDDLE LINE */}
                  <motion.path
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        variants={{
                              closed: { d: "M 3 12 L 21 12", opacity: 1 },
                              open: { d: "M 3 12 L 21 12", opacity: 0 },
                        }}
                        animate={open ? "open" : "closed"}
                        transition={{ type: "spring", stiffness: 260, damping: 20 }}
                        whileHover={{ scale: 1.3 }}
                  />

                  {/* BOTTOM LINE */}
                  <motion.path
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        variants={{
                              closed: { d: "M 3 18 L 21 18" },
                              open: { d: "M 6 18 L 18 6" },
                        }}
                        animate={open ? "open" : "closed"}
                        transition={{ type: "spring", stiffness: 260, damping: 20 }}
                        whileHover={{ scale: 1.3 }}
                  />
            </svg>
      );
}
