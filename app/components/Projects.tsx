"use client";

import { motion } from "framer-motion";
import { sectionVariants } from "../lib/motion";


const container = {
      hidden: {},
      show: {
            transition: {
                  staggerChildren: 0.12,
            },
      },
};

const card = {
      hidden: { opacity: 0, y: 30 },
      show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const projects = [
      {
            title: "AI News Dashboard",
            desc: "Real-time news filtering system using APIs and Redux.",
      },
      {
            title: "Event Photo App",
            desc: "QR-based gallery system for events and weddings.",
      },
      {
            title: "SaaS Landing Page",
            desc: "High-conversion marketing page built in Next.js.",
      },
];

export default function Projects() {
      return (
            <section id="projects" className="snap-start mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-24">

                  <motion.div
                        variants={sectionVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        className="mx-auto max-w-6xl px-6 py-24"
                  >
                        <motion.h2 className="mb-12 text-3xl font-bold">
                              Selected Projects
                        </motion.h2>

                        <div className="grid gap-8 md:grid-cols-3">
                              {projects.map((p, i) => (
                                    <motion.div
                                          key={i}
                                          variants={card}
                                          whileHover={{ y: -8, scale: 1.02 }}
                                          className="rounded-2xl border border-slate-800 bg-slate-900 p-5"
                                    >
                                          <div className="mb-4 h-40 rounded-xl bg-slate-800" />

                                          <h3 className="mb-2 text-xl font-semibold">{p.title}</h3>
                                          <p className="text-sm text-slate-400">{p.desc}</p>
                                    </motion.div>
                              ))}
                        </div>
                  </motion.div>
            </section>
      );
}