"use client";

import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Hero() {
  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="show"
      className="mx-auto grid min-h-[90vh] max-w-6xl items-center gap-12 px-6 md:grid-cols-2"
    >
      {/* LEFT */}
      <div>
        <motion.p variants={item} className="mt-4 mb-4 font-bold text-sm uppercase tracking-[0.2em] text-blue-400">
          Dwight Rogers | DeafGecko
        </motion.p>

        <motion.h1 variants={item} className="mb-6 text-5xl font-bold leading-tight md:text-7xl">
          Building clean, fast, modern web apps.
        </motion.h1>

        <motion.p variants={item} className="mb-8 max-w-xl text-lg text-slate-400">
          React, Next.js, and UI systems focused on performance, usability, and real-world products.
        </motion.p>

        <motion.div variants={item} className="flex gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="rounded-xl bg-blue-600 px-6 py-3 font-medium hover:bg-blue-500"
          >
            View Projects
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="rounded-xl border border-slate-700 px-6 py-3 font-medium hover:border-blue-500"
          >
            Contact
          </motion.button>
        </motion.div>
      </div>

      {/* RIGHT VISUAL */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-2xl"
      >
        <div className="h-80 rounded-2xl bg-linear-to-br from-blue-600/40 to-slate-800" />
      </motion.div>
    </motion.section>
  );
}