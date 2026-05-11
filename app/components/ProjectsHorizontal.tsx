"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const projects = [
      {
            title: "AI News Dashboard",
            desc: "Real-time dashboard concept using APIs, filters, and modern UI layout.",
            tag: "React • API • Dashboard",
      },
      {
            title: "Event Photo App",
            desc: "QR-based gallery experience for events and shared photo moments.",
            tag: "Next.js • UX • Upload Flow",
      },
      {
            title: "SaaS Landing Page",
            desc: "Conversion-focused landing page with responsive sections and motion.",
            tag: "Next.js • Tailwind • Motion",
      },
      {
            title: "Motion UI Lab",
            desc: "Experimental animation systems, hover effects, and interactive components.",
            tag: "Framer Motion • UI Systems",
      },
];

export default function ProjectsHorizontal() {
      const targetRef = useRef<HTMLElement | null>(null);

      const { scrollYProgress } = useScroll({
            target: targetRef,
            offset: ["start start", "end end"],
      });

      const x = useTransform(scrollYProgress, [0, 1], ["0%", "-58%"]);

      return (
            <section
                  ref={targetRef}
                  id="projects"
                  className="relative h-[300vh] snap-start"
            >
                  <div className="sticky top-0 flex h-screen items-center overflow-hidden px-6 pt-16">
                        <div className="mx-auto w-full max-w-6xl">
                              <div className="mb-12 max-w-2xl">
                                    <p className="mb-3 text-sm uppercase tracking-[0.2em] text-blue-400">
                                          Selected Work
                                    </p>

                                    <h2 className="text-4xl font-bold text-white md:text-5xl">
                                          Interactive projects built with design thinking and frontend systems.
                                    </h2>
                              </div>

                              <motion.div style={{ x }} className="flex gap-8">
                                    {projects.map((project, index) => (
                                          <motion.article
                                                key={project.title}
                                                whileHover={{ y: -10, scale: 1.02 }}
                                                className="min-w-[320px] rounded-3xl border border-slate-800 bg-slate-900/70 p-6 backdrop-blur-sm md:min-w-[420px]"
                                          >
                                                <div className="mb-6 flex h-48 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600/30 to-slate-800">
                                                      <span className="text-5xl font-black text-white/20">
                                                            0{index + 1}
                                                      </span>
                                                </div>

                                                <p className="mb-3 text-sm uppercase tracking-[0.18em] text-blue-400">
                                                      {project.tag}
                                                </p>

                                                <h3 className="mb-3 text-2xl font-bold text-white">
                                                      {project.title}
                                                </h3>

                                                <p className="leading-relaxed text-slate-400">
                                                      {project.desc}
                                                </p>
                                          </motion.article>
                                    ))}
                              </motion.div>
                        </div>
                  </div>
            </section>
      );
}