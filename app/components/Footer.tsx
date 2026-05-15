"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { LogoWide } from "../lib/Logo.jsx";

export default function Footer() {
      return (
            <footer className="border-t border-[var(--border)] bg-[#080808]/95 px-6 py-6 backdrop-blur-xl">
                  <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">

                        {/* LEFT */}
                        <div className="flex flex-col">
                              <p className="text-xs text-white/30">
                                    2026 Created by Dwight Rogers — Built with React, Next.js & Tailwind CSS.
                              </p>
                        </div>

                        {/* RIGHT */}
                        <div className="flex items-center gap-5 text-white/30">
                              <a
                                    href="https://github.com/DeafGecko"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="transition hover:text-white"
                              >
                                    <FaGithub size={18} />
                              </a>

                              <a
                                    href="https://www.linkedin.com/in/dwight-rogers-22b417a8/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="transition hover:text-blue-400"
                              >
                                    <FaLinkedin size={18} />
                              </a>
                        </div>

                  </div>
            </footer>
      );
}
