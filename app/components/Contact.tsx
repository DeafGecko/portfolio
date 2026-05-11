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
                  className="snap-start mx-auto flex min-h-screen max-w-6xl items-center px-6 pt-20"
            >
                  <div className="grid w-full gap-16 md:grid-cols-2">

                        {/* LEFT COLUMN */}
                        <div className="flex flex-col justify-center">
                              <p className="mb-3 text-sm uppercase tracking-[0.2em] text-blue-400">
                                    Contact
                              </p>

                              <h2 className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl">
                                    Let’s build modern frontend experiences together.
                              </h2>

                              <p className="mb-8 text-lg leading-relaxed text-slate-400">
                                    I’m transitioning from a 10-year background in graphic
                                    design into Front-End Engineering, combining visual design,
                                    UI systems, and modern web technologies to create clean,
                                    interactive digital products.
                              </p>

                              <div className="space-y-4 text-slate-300">
                                    <div>
                                          <p className="text-sm uppercase tracking-wider text-slate-500">
                                                Focus
                                          </p>

                                          <p className="mt-1">
                                                React • Next.js • Tailwind • Framer Motion
                                          </p>
                                    </div>

                                    <div>
                                          <p className="text-sm uppercase tracking-wider text-slate-500">
                                                Current Goal
                                          </p>

                                          <p className="mt-1">
                                                Building modern frontend systems and interactive user
                                                experiences.
                                          </p>
                                    </div>
                              </div>
                        </div>

                        {/* RIGHT COLUMN */}
                        <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8 backdrop-blur-sm">
                              <ContactForm />
                        </div>

                  </div>
            </motion.section>
      );
}