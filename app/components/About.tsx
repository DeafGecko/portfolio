"use client";

import { motion } from "framer-motion";
import { sectionVariants } from "../lib/motion";

export default function About() {
      return (
            <motion.section
                  id="about"
                  variants={sectionVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  className="snap-start mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-24"
            >
                  <div className="max-w-3xl">
                        <p className="mb-3 text-sm uppercase tracking-[0.2em] text-blue-400">
                              About Me
                        </p>

                        <h2 className="mb-8 text-4xl font-bold leading-tight text-white">
                              Designer mindset transitioning into Front-End Engineering.
                        </h2>

                        <div className="space-y-6 text-lg leading-relaxed text-slate-400">
                              <p>
                                    I spent over 10 years working in graphic design, building visual systems, brand identity, and digital experiences focused on clarity and user engagement.
                              </p>

                              <p>
                                    Over time, I became increasingly interested in how products are actually built — not only how they look, but how they function, scale, and create real user interaction.
                              </p>

                              <p>
                                    Today, I am transitioning into Front-End Engineering with a focus on React, Next.js, modern UI architecture, animation systems, and responsive product design.
                              </p>

                              <p>
                                    My goal is to combine strong visual design instincts with modern frontend development to create clean, performant, and meaningful
                                    digital experiences.
                              </p>
                        </div>
                  </div>
            </motion.section>
      );
}