"use client";

import { motion } from "framer-motion";
import { scrollToId } from "../lib/helpers";
import { sectionVariants } from "../lib/motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <motion.section
      id="hero"
      variants={sectionVariants}
      initial="hidden"
      animate="show"
      className="snap-start mx-auto grid min-h-screen max-w-6xl items-center gap-10 px-6 pt-10 pb-40 md:grid-cols-2"
    >
      {/* LEFT CONTENT */}
      <div className="flex flex-col justify-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-4 text-sm uppercase tracking-[0.2em] text-blue-400"
        >
          Frontend Engineer • UI Designer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-3xl text-5xl font-black leading-tight text-white md:text-7xl"
        >
          Building clean, fast, modern web apps.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400"
        >
          Transitioning from 10 years in graphic design into Front-End
          Engineering — combining visual design thinking with modern React,
          Next.js, Tailwind CSS, and Framer Motion workflows.
        </motion.p>

        {/* CTA + SOCIAL ROW */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 flex items-center gap-6"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => scrollToId("projects")}
            className="rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-500"
          >
            View Projects
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => scrollToId("contact")}
            className="rounded-xl border-2 border-slate-700 px-6 py-3 font-medium text-white transition hover:border-blue-500 hover:bg-slate-900"
          >
            Contact Me
          </motion.button>

          <div className="ml-2 flex items-center gap-4 text-slate-400">
            <a
              href="https://github.com/DeafGecko"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
            >
              <FaGithub size={24} />
            </a>

            <a
              href="https://www.linkedin.com/in/dwight-rogers-22b417a8/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-blue-400"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </motion.div>
      </div>

      {/* RIGHT VISUAL */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4 }}
        className="relative flex items-center justify-center"
      >
        <div className="absolute h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />

        <div className="relative flex h-[420px] w-[320px] items-center justify-center rounded-[2rem] border border-slate-800 bg-slate-900/70 backdrop-blur-xl">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.2em] text-blue-400">
              09 Labs
            </p>

            <h2 className="mt-4 text-4xl font-black text-white">
              Frontend
              <br />
              Engineering
            </h2>

            <p className="mt-4 text-slate-400">
              React • Next.js • Tailwind
            </p>
          </div>
        </div>
      </motion.div>
    </motion.section >
  );
}