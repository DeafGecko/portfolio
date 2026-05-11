"use client";

import { motion } from "framer-motion";
import { sectionVariants } from "../lib/motion";

const experiments = [
      "Motion UI Experiments",
      "Dashboard Concepts",
      "Animation Systems",
      "Interactive Components",
];

export default function Lab() {
      return (
            <motion.section
                  id="lab"
                  variants={sectionVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  className="snap-start mx-auto flex min-h-screen max-w-6xl items-center px-6 pt-20"
            >
                  <div className="mb-12">
                        <p className="mb-3 text-sm uppercase tracking-[0.2em] text-blue-400">
                              Experimental Lab
                        </p>

                        <h2 className="text-4xl font-bold text-white">
                              Building interfaces, motion systems, and interactive ideas.
                        </h2>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                        {experiments.map((item, i) => (
                              <motion.div
                                    key={i}
                                    whileHover={{ y: -6 }}
                                    className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-sm"
                              >
                                    <div className="mb-6 h-24 rounded-xl bg-slate-800" />

                                    <h3 className="text-xl font-semibold text-white">
                                          {item}
                                    </h3>

                                    <p className="mt-3 text-sm leading-relaxed text-slate-400">
                                          Experimental frontend concepts focused on interaction,
                                          animation, layout systems, and modern UI architecture.
                                    </p>
                              </motion.div>
                        ))}
                  </div>
            </motion.section>
      );
}