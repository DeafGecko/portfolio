"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import ProjectModal from "./ProjectModal";

const works = [
      {
            title: "AI News Dashboard",
            desc: "Real-time dashboard concept using APIs, filters, and modern UI layout.",
            tag: "React • API • Dashboard",
            problem:
                  "Users need a fast way to scan large amounts of news content without feeling overwhelmed.",
            solution:
                  "A clean dashboard interface with category filtering, card-based scanning, and responsive layouts.",
            stack: ["React", "API", "Tailwind CSS", "Dashboard UI"],
      },
      {
            title: "Event Photo App",
            desc: "QR-based gallery experience for events and shared photo moments.",
            tag: "Next.js • UX • Upload Flow",
            problem:
                  "Event guests need an easy way to upload and view shared photos without account friction.",
            solution:
                  "A QR-based photo-sharing flow with a clean gallery interface and simple upload experience.",
            stack: ["Next.js", "React", "Tailwind CSS", "UX Flow"],
      },
      {
            title: "SaaS Landing Page",
            desc: "Conversion-focused landing page with responsive sections and motion.",
            tag: "Next.js • Tailwind • Motion",
            problem:
                  "SaaS products need clear messaging, strong hierarchy, and fast-loading responsive pages.",
            solution:
                  "A modern landing page structure with CTA sections, scroll motion, and clean visual hierarchy.",
            stack: ["Next.js", "Tailwind CSS", "Framer Motion", "Responsive Design"],
      },
      {
            title: "Motion UI Lab",
            desc: "Experimental animation systems, hover effects, and interactive components.",
            tag: "Framer Motion • UI Systems",
            problem:
                  "Modern interfaces need motion that feels useful instead of decorative or distracting.",
            solution:
                  "A collection of motion experiments focused on hover depth, transitions, and interaction feedback.",
            stack: ["Framer Motion", "React", "UI Systems", "Animation"],
      },
];

export default function ProjectsHorizontal() {
      const targetRef = useRef<HTMLElement | null>(null);

      const [selectedProject, setSelectedProject] =
            useState<(typeof works)[0] | null>(null);

      const { scrollYProgress } = useScroll({
            target: targetRef,
            offset: ["start start", "end end"],
      });

      const x = useTransform(scrollYProgress, [0, 1], ["0%", "-58%"]);

      return (
            <section
                  ref={targetRef}
                  id="works"
                  className="relative h-[300vh] snap-start"
            >
                  <div className="sticky top-0 flex h-screen items-center overflow-hidden px-6 pt-16">
                        <div className="mx-auto w-full max-w-6xl">
                              <div className="mb-14 max-w-3xl">
                                    <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[var(--accent)]">
                                          Selected Works
                                    </p>

                                    <h2 className="text-4xl font-black leading-tight text-white md:text-5xl">
                                          Interactive frontend systems.
                                    </h2>

                                    <p className="mt-6 text-lg leading-relaxed text-white/70">
                                          Scroll through motion-drive work concepts focused on UI
                                          architecture, interaction systems, responsive layouts, and modern
                                          frontend engineering.
                                    </p>
                              </div>

                              <motion.div style={{ x }} className="flex gap-8">
                                    {works.map((works, index) => (
                                          <motion.article
                                                key={works.title}
                                                onClick={() => setSelectedProject(works)}
                                                whileHover={{
                                                      y: -8,
                                                      borderColor: "rgba(245,127,0,0.35)",
                                                      boxShadow: "0 0 30px rgba(245,127,0,0.08)",
                                                }}
                                                transition={{ duration: 0.25 }}
                                                className="group min-w-[320px] cursor-pointer rounded-3xl border border-[var(--border)] bg-[rgba(18,18,18,0.72)] p-6 backdrop-blur-xl md:min-w-[420px]"
                                          >
                                                <div className="mb-6 flex h-48 items-center justify-center rounded-2xl border border-[var(--border)] bg-[rgba(28,28,28,0.82)]">
                                                      <span className="text-6xl font-black text-white/10">
                                                            0{index + 1}
                                                      </span>
                                                </div>

                                                <p className="mb-3 text-sm uppercase tracking-[0.18em] text-[var(--accent)]">
                                                      {works.tag}
                                                </p>

                                                <h3 className="mb-3 text-2xl font-bold text-white transition-colors duration-300 group-hover:text-[var(--accent)]">
                                                      {works.title}
                                                </h3>

                                                <p className="leading-relaxed text-slate-400">
                                                      {works.desc}
                                                </p>
                                                ss
                                                <p className="mt-6 text-sm font-medium text-[var(--accent)]">
                                                      Click to view case study →
                                                </p>
                                          </motion.article>
                                    ))}
                              </motion.div>
                        </div>
                  </div>

                  <ProjectModal
                        works={selectedProject}
                        onClose={() => setSelectedProject(null)}
                  />
            </section>
      );
}