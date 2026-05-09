"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { LogoWide } from "../lib/Logo.jsx";
import MenuIcon from "../components/MenuIcon";
import { scrollToId } from "../lib/helpers";

export default function Navbar() {
      const [open, setOpen] = useState(false);
      const [activeSection, setActiveSection] = useState("");
      const [scrolled, setScrolled] = useState(false);

      useEffect(() => {
            const sections = ["projects", "about", "lab", "contact"];

            const observers: IntersectionObserver[] = [];

            sections.forEach((id) => {
                  const el = document.getElementById(id);
                  if (!el) return;

                  const observer = new IntersectionObserver(
                        ([entry]) => {
                              if (entry.isIntersecting) {
                                    setActiveSection(id);
                              }
                        },
                        {
                              root: null,
                              threshold: 0.4, // 40% visible = active
                        }
                  );

                  observer.observe(el);
                  observers.push(observer);
            });

            return () => {
                  observers.forEach((o) => o.disconnect());
            };
      }, []);

      useEffect(() => {
            const handleScroll = () => {
                  setScrolled(window.scrollY > 20);
            };

            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
      }, []);

      const navItem = (id: string, label: string) => (
            <button
                  onClick={() => {
                        scrollToId(id);
                        setOpen(false);
                  }}
                  className={`relative transition-colors ${activeSection === id
                        ? "text-blue-400"
                        : "text-slate-300 hover:text-white"
                        }`}
            >
                  {label}

                  <span
                        className={`absolute left-0 -bottom-1 h-[2px] bg-blue-400 transition-all duration-300 ${activeSection === id ? "w-full" : "w-0"
                              }`}
                  />
            </button>
      );

      return (
            <motion.nav
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className={`sticky top-0 z-50 border-b transition-all duration-300
                        ${scrolled
                              ? "bg-slate-950/90 backdrop-blur-xl border-slate-800 shadow-lg shadow-black/20"
                              : "bg-slate-950/40 backdrop-blur-md border-transparent"
                        }
                  `}
            >
                  <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">

                        {/* Logo */}
                        <div className="flex flex-col leading-tight shrink-0">
                              <Link
                                    href="/"
                                    className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                                    onClick={(e) => {
                                          e.preventDefault();
                                          window.scrollTo({ top: 0, behavior: "smooth" });
                                    }}
                              >
                                    <LogoWide className="mb-2 text-[#e8e6e1]" />
                              </Link>
                              <span className="text-[12px] text-slate-200">
                                    Frontend Engineering Portfolio
                              </span>
                        </div>

                        {/* DESKTOP MENU */}
                        <div className="hidden gap-6 text-lg md:flex">
                              {navItem("projects", "projects")}
                              {navItem("about", "about")}
                              {navItem("lab", "lab")}
                              {navItem("contact", "contact")}
                        </div>

                        {/* MOBILE BUTTON */}
                        <button
                              onClick={() => setOpen(!open)}
                              className="md:hidden text-2xl text-slate-200"
                        >
                              <MenuIcon open={open} />
                        </button>
                  </div>

                  {/* MOBILE MENU */}
                  <AnimatePresence>
                        {open && (
                              <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="md:hidden overflow-hidden border-t border-slate-800 bg-slate-950"
                              >
                                    <div className="flex flex-col gap-4 px-6 py-6 text-slate-300">
                                          <button
                                                onClick={() => {
                                                      scrollToId("projects");
                                                      setOpen(false);
                                                }}
                                          >
                                                projects
                                          </button>

                                          <button
                                                onClick={() => {
                                                      scrollToId("about");
                                                      setOpen(false);
                                                }}
                                          >
                                                about
                                          </button>

                                          <button
                                                onClick={() => {
                                                      scrollToId("lab");
                                                      setOpen(false);
                                                }}
                                          >
                                                lab
                                          </button>

                                          <button
                                                onClick={() => {
                                                      scrollToId("contact");
                                                      setOpen(false);
                                                }}
                                          >
                                                contact
                                          </button>
                                    </div>
                              </motion.div>
                        )}
                  </AnimatePresence>
            </motion.nav>
      );
}