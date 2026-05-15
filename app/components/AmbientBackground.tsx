"use client";

import { motion } from "framer-motion";

export default function AmbientBackground() {
      return (
            <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#080808]">
                  {/* Deep carbon base */}
                  <div className="absolute inset-0 bg-[#080808]" />

                  {/* Very subtle gray architectural grid */}
                  <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,rgba(148,163,184,0.10)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.10)_1px,transparent_1px)] bg-[size:120px_120px]" />

                  {/* Fine technical grid */}
                  <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:32px_32px]" />

                  {/* Strong dark overlay to keep carbon feel */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(8,8,8,0.65)_0%,rgba(8,8,8,0.92)_65%,rgba(0,0,0,1)_100%)]" />

                  {/* Very subtle orange glow left */}
                  <motion.div
                        animate={{
                              x: [0, 60, 0],
                              y: [0, 40, 0],
                              opacity: [0.05, 0.11, 0.05],
                        }}
                        transition={{
                              duration: 18,
                              repeat: Infinity,
                              ease: "easeInOut",
                        }}
                        className="absolute left-[-18%] top-[12%] h-[360px] w-[360px] rounded-full bg-[var(--accent)] blur-[220px]"
                  />

                  {/* Very subtle orange glow right */}
                  <motion.div
                        animate={{
                              x: [0, -70, 0],
                              y: [0, -50, 0],
                              opacity: [0.04, 0.09, 0.04],
                        }}
                        transition={{
                              duration: 22,
                              repeat: Infinity,
                              ease: "easeInOut",
                        }}
                        className="absolute bottom-[-18%] right-[-15%] h-[460px] w-[460px] rounded-full bg-[var(--accent)] blur-[260px]"
                  />

                  {/* Barely visible center depth */}
                  <motion.div
                        animate={{
                              scale: [1, 1.05, 1],
                              opacity: [0.02, 0.05, 0.02],
                        }}
                        transition={{
                              duration: 20,
                              repeat: Infinity,
                              ease: "easeInOut",
                        }}
                        className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent)] blur-[280px]"
                  />

                  {/* Heavy vignette */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_28%,rgba(0,0,0,0.72)_72%,rgba(0,0,0,0.96)_100%)]" />

                  {/* Ultra subtle noise */}
                  <div className="absolute inset-0 opacity-[0.025] mix-blend-soft-light bg-[radial-gradient(circle,rgba(255,255,255,0.45)_1px,transparent_1px)] bg-[size:18px_18px]" />
            </div>
      );
}