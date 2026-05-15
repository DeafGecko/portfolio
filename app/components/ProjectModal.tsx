"use client";

import { motion, AnimatePresence } from "framer-motion";

type Project = {
      title: string;
      desc: string;
      tag: string;
      problem?: string;
      solution?: string;
      stack?: string[];
};

type ProjectModalProps = {
      project: Project | null;
      onClose: () => void;
};

export default function ProjectModal({
      project,
      onClose,
}: ProjectModalProps) {
      return (
            <AnimatePresence>
                  {project && (
                        <motion.div
                              className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/80 px-6 backdrop-blur-xl"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                        >
                              <motion.div
                                    initial={{ opacity: 0, y: 40, scale: 0.96 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 40, scale: 0.96 }}
                                    transition={{ duration: 0.35 }}
                                    className="relative max-h-[85vh] w-full max-w-4xl overflow-y-auto rounded-3xl border border-white/10 bg-slate-900/90 p-8 shadow-2xl"
                              >
                                    <button
                                          onClick={onClose}
                                          className="absolute right-6 top-6 rounded-full border border-slate-700 px-3 py-1 text-sm text-slate-300 hover:border-[var(--accent)] hover:text-white"
                                    >
                                          X
                                    </button>

                                    <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[var(--accent)]">
                                          Case Study
                                    </p>

                                    <h2 className="mb-4 pr-20 text-4xl font-bold text-white">
                                          {project.title}
                                    </h2>

                                    <p className="mb-8 max-w-2xl text-lg leading-relaxed text-slate-400">
                                          {project.desc}
                                    </p>

                                    <div className="mb-8 h-64 rounded-2xl bg-gradient-to-br from-[var(--accent-soft)] to-slate-800" />

                                    <div className="grid gap-8 md:grid-cols-2">
                                          <div>
                                                <h3 className="mb-3 text-xl font-semibold text-white">
                                                      Problem
                                                </h3>

                                                <p className="leading-relaxed text-slate-400">
                                                      {project.problem ||
                                                            "This project explores a real frontend challenge around usability, layout, performance, and interaction design."}
                                                </p>
                                          </div>

                                          <div>
                                                <h3 className="mb-3 text-xl font-semibold text-white">
                                                      Solution
                                                </h3>

                                                <p className="leading-relaxed text-slate-400">
                                                      {project.solution ||
                                                            "The solution focuses on clean UI architecture, responsive layout, reusable components, and modern motion patterns."}
                                                </p>
                                          </div>
                                    </div>

                                    <div className="mt-10">
                                          <h3 className="mb-4 text-xl font-semibold text-white">
                                                Tech Stack
                                          </h3>

                                          <div className="flex flex-wrap gap-3">
                                                {(
                                                      project.stack || [
                                                            "React",
                                                            "Next.js",
                                                            "Tailwind CSS",
                                                            "Framer Motion",
                                                      ]
                                                ).map((item) => (
                                                      <span
                                                            key={item}
                                                            className="rounded-full border border-[var(--accent-border)] bg-[var(--accent-soft)] px-4 py-2 text-sm text-[var(--accent)]"
                                                      >
                                                            {item}
                                                      </span>
                                                ))}
                                          </div>
                                    </div>

                                    <div className="mt-10 flex flex-wrap gap-4">
                                          <button className="rounded-xl bg-[var(--accent-strong)] px-5 py-3 font-medium text-white hover:bg-orange-500">
                                                View Live Demo
                                          </button>

                                          <button className="rounded-xl border border-slate-700 px-5 py-3 font-medium text-white hover:border-[var(--accent)]">
                                                View GitHub
                                          </button>
                                    </div>
                              </motion.div>
                        </motion.div>
                  )}
            </AnimatePresence>
      );
}