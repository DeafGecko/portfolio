"use client";

import { motion } from "framer-motion";
import { sectionVariants } from "../lib/motion";
import ContactForm from "./ContactForm";

export default function Contact() {
      return (
            <motion.section
                  id="contact"
                  variants={sectionVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  className="snap-start mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-24"
            >
                  <div className="max-w-3xl">
                        <p className="mb-3 text-sm uppercase tracking-[0.2em] text-blue-400">
                              Contact
                        </p>

                        <h2 className="mb-6 text-4xl font-bold leading-tight text-white">
                              Let’s build something meaningful together.
                        </h2>

                        <p className="mb-12 text-lg leading-relaxed text-slate-400">
                              I’m currently transitioning into Front-End Engineering and
                              focused on building modern user interfaces, interactive web
                              experiences, and scalable frontend systems using React,
                              Next.js, and Framer Motion.
                        </p>

                        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-sm">
                              <ContactForm />
                        </div>
                  </div>
            </motion.section>
      );
}