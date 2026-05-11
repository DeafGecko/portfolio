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

            const handleScroll = () => {
                  const scrollY = window.scrollY + window.innerHeight * 0.45;

                  const hero = document.getElementById("hero");

                  if (hero) {
                        const heroTop = hero.offsetTop;
                        const heroBottom = heroTop + hero.offsetHeight;

                        if (scrollY >= heroTop && scrollY < heroBottom) {
                              setActiveSection("");
                              return;
                        }
                  }

                  let current = "";

                  for (const id of sections) {
                        const el = document.getElementById(id);
                        if (!el) continue;

                        const top = el.offsetTop;
                        const bottom = top + el.offsetHeight;

                        if (scrollY >= top && scrollY < bottom) {
                              current = id;
                        }
                  }

                  setActiveSection(current);
            };

            handleScroll();

            window.addEventListener("scroll", handleScroll, { passive: true });

            return () => {
                  window.removeEventListener("scroll", handleScroll);
            };
      }, []);

      useEffect(() => {
            const handleScroll = () => {
                  setScrolled(window.scrollY > 20);
            };

            handleScroll();

            window.addEventListener("scroll", handleScroll, { passive: true });

            return () => {
                  window.removeEventListener("scroll", handleScroll);
            };
      }, []);

      const scrollToSection = (id: string) => {
            setActiveSection(id);
            setOpen(false);

            const html = document.documentElement;
            const body = document.body;

            html.style.scrollSnapType = "none";
            body.style.scrollSnapType = "none";

            if (id === "projects") {
                  const projects = document.getElementById("projects");
                  if (!projects) return;

                  window.scrollTo({
                        top: projects.offsetTop + 8,
                        behavior: "smooth",
                  });

                  setTimeout(() => {
                        html.style.scrollSnapType = "";
                        body.style.scrollSnapType = "";
                        setActiveSection("projects");
                  }, 700);

                  return;
            }

            const el = document.getElementById(id);
            if (!el) return;

            window.scrollTo({
                  top: el.offsetTop,
                  behavior: "smooth",
            });

            setTimeout(() => {
                  html.style.scrollSnapType = "";
                  body.style.scrollSnapType = "";
            }, 700);
      };

      const navItem = (id: string, label: string) => (
            <button
                  onClick={() => scrollToSection(id)}
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
                  className={`sticky top-0 z-50 border-b transition-all duration-300 ${scrolled
                        ? "border-slate-800 bg-slate-950/90 shadow-lg shadow-black/20 backdrop-blur-xl"
                        : "border-transparent bg-slate-950/40 backdrop-blur-md"
                        }`}
            >
                  <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
                        <div className="flex shrink-0 flex-col leading-tight">
                              <Link
                                    href="/"
                                    className="flex items-center gap-2 transition-opacity hover:opacity-80"
                                    onClick={(e) => {
                                          e.preventDefault();
                                          setActiveSection("");
                                          scrollToId("hero");
                                          setOpen(false);
                                    }}
                              >
                                    <div className="w-[150px]">
                                          <LogoWide className="h-auto w-full text-[#e8e6e1]" />
                                    </div>
                              </Link>

                              <span className="text-[12px] text-slate-200">
                                    Frontend Engineering Portfolio
                              </span>
                        </div>

                        <div className="hidden gap-6 text-lg md:flex">
                              {navItem("projects", "projects")}
                              {navItem("about", "about")}
                              {navItem("lab", "lab")}
                              {navItem("contact", "contact")}
                        </div>

                        <button
                              onClick={() => setOpen(!open)}
                              className="text-2xl text-slate-200 md:hidden"
                              aria-label="Toggle navigation menu"
                        >
                              <MenuIcon open={open} />
                        </button>
                  </div>

                  <AnimatePresence>
                        {open && (
                              <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden border-t border-slate-800 bg-slate-950 md:hidden"
                              >
                                    <div className="flex flex-col gap-4 px-6 py-6 text-slate-300">
                                          {navItem("projects", "projects")}
                                          {navItem("about", "about")}
                                          {navItem("lab", "lab")}
                                          {navItem("contact", "contact")}
                                    </div>
                              </motion.div>
                        )}
                  </AnimatePresence>
            </motion.nav>
      );
}