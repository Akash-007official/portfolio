"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-[#050505] px-6 py-10 text-white md:px-12 lg:px-16">
      <div className="mx-auto max-w-7xl">

        {/* Top footer */}
        <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">

          {/* AKASH H */}
          <motion.a
            href="#top"
            whileHover={{ y: -2 }}
            className="group inline-flex items-center text-white"
            aria-label="Akash H - Home"
          >
            <span className="text-sm font-medium tracking-[0.4em]">
              AKASH
            </span>

            <span className="ml-2 text-sm font-medium tracking-[0.2em] text-white/40 transition-colors duration-300 group-hover:text-violet-400">
              H
            </span>
          </motion.a>

          {/* Navigation */}
          <nav className="flex flex-wrap gap-x-7 gap-y-4 text-[10px] tracking-[0.25em] text-white/35">
            <a
              href="#top"
              className="transition-colors duration-300 hover:text-white"
            >
              HOME
            </a>

            <a
              href="#about"
              className="transition-colors duration-300 hover:text-white"
            >
              ABOUT
            </a>

            <a
              href="#projects"
              className="transition-colors duration-300 hover:text-white"
            >
              PROJECTS
            </a>

            <a
              href="#journey"
              className="transition-colors duration-300 hover:text-white"
            >
              JOURNEY
            </a>

            <a
              href="#contact"
              className="transition-colors duration-300 hover:text-white"
            >
              CONTACT
            </a>
          </nav>

          {/* Social links */}
          <div className="flex items-center gap-5">

            {/* GitHub */}
            <a
              href="https://github.com/Akash-007official"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="group flex items-center gap-2 text-white/35 transition-colors duration-300 hover:text-white"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4 fill-current"
                aria-hidden="true"
              >
                <path d="M12 .7A11.3 11.3 0 0 0 8.43 22.9c.57.1.78-.25.78-.55v-2.1c-3.17.69-3.84-1.34-3.84-1.34-.52-1.31-1.27-1.66-1.27-1.66-1.03-.7.08-.69.08-.69 1.14.08 1.74 1.17 1.74 1.17 1.02 1.74 2.67 1.24 3.32.95.1-.74.4-1.24.73-1.53-2.53-.29-5.19-1.27-5.19-5.64 0-1.25.45-2.27 1.17-3.07-.12-.29-.51-1.45.11-3.02 0 0 .95-.31 3.12 1.17a10.8 10.8 0 0 1 5.68 0c2.17-1.48 3.12-1.17 3.12-1.17.62 1.57.23 2.73.11 3.02.73.8 1.17 1.82 1.17 3.07 0 4.38-2.66 5.34-5.2 5.63.41.36.78 1.06.78 2.14v3.17c0 .31.2.66.79.55A11.3 11.3 0 0 0 12 .7Z" />
              </svg>

              <span className="hidden text-[10px] tracking-[0.2em] sm:block">
                GITHUB
              </span>

              <ArrowUpRight
                size={12}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/akash-h007"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="group flex items-center gap-2 text-white/35 transition-colors duration-300 hover:text-white"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4 fill-current"
                aria-hidden="true"
              >
                <path d="M6.5 8.5H3V21h3.5V8.5ZM4.75 3A2.05 2.05 0 1 0 4.75 7.1 2.05 2.05 0 0 0 4.75 3ZM21 13.85C21 10.08 18.99 8.1 16.3 8.1c-2.18 0-3.15 1.2-3.69 2.04V8.5H9.11V21h3.5v-6.2c0-1.63.31-3.21 2.33-3.21 1.99 0 2.02 1.86 2.02 3.32V21H21v-7.15Z" />
              </svg>

              <span className="hidden text-[10px] tracking-[0.2em] sm:block">
                LINKEDIN
              </span>

              <ArrowUpRight
                size={12}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col gap-3 border-t border-white/[0.06] pt-6 text-[10px] tracking-[0.2em] text-white/20 md:flex-row md:items-center md:justify-between">
          <span>
            © 2026 AKASH H. ALL RIGHTS RESERVED.
          </span>

          <span>
            SOFTWARE · AI · AUTOMATION
          </span>
        </div>

      </div>
    </footer>
  );
}