"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen overflow-hidden bg-[#07090D] text-white"
    >
      {/* ============================================================
          OBSIDIAN WAVE BACKGROUND
      ============================================================ */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Soft ambient light */}
        <motion.div
          animate={{
            opacity: [0.18, 0.26, 0.18],
            scale: [1, 1.04, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-[15%] top-[8%] h-[600px] w-[900px] rounded-full bg-[#172A46]/25 blur-[140px]"
        />

        {/* Midnight wave */}
        <motion.div
          animate={{
            x: [0, 35, 0],
            y: [0, -12, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-[22%] left-[-10%] h-[430px] w-[125%] rotate-[-7deg] rounded-[50%] border border-[#334E7A]/25 bg-[#172A46]/15 blur-[1px]"
        />

        {/* Secondary wave */}
        <motion.div
          animate={{
            x: [0, -30, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-[17%] left-[18%] h-[280px] w-[95%] rotate-[4deg] rounded-[50%] border border-[#334E7A]/15"
        />

        {/* Very subtle upper-right light */}
        <motion.div
          animate={{
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[-12%] top-[-20%] h-[500px] w-[500px] rounded-full bg-[#334E7A]/10 blur-[150px]"
        />

        {/* Grain */}
        <div className="absolute inset-0 opacity-[0.035]">
          <svg
            className="h-full w-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <filter id="heroNoise">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.8"
                numOctaves="3"
                stitchTiles="stitch"
              />
            </filter>

            <rect
              width="100%"
              height="100%"
              filter="url(#heroNoise)"
              opacity="0.45"
            />
          </svg>
        </div>

        {/* Editorial horizontal lines */}
        <div className="absolute left-0 top-[28%] h-px w-full bg-white/[0.035]" />
        <div className="absolute left-0 top-[72%] h-px w-full bg-white/[0.035]" />

        {/* Very subtle center divider */}
        <div className="absolute left-1/2 top-0 hidden h-full w-px bg-white/[0.025] md:block" />
      </div>

      {/* ============================================================
          NAVIGATION
      ============================================================ */}

      <nav className="relative z-30 flex items-center justify-between px-6 py-6 md:px-12 lg:px-16">
        <motion.div
          initial={{
            opacity: 0,
            y: -15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
        >
          <Link
            href="/"
            className="group flex items-center gap-3"
            aria-label="Go to homepage"
          >
            <span className="text-sm font-medium tracking-[0.3em] text-white">
              AH
            </span>

            <span className="h-px w-0 bg-[#A9BFFF] transition-all duration-500 group-hover:w-6" />
          </Link>
        </motion.div>

        {/* Desktop navigation */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.8,
            delay: 0.3,
          }}
          className="hidden items-center gap-8 md:flex"
        >
          <NavLink href="/#projects">WORK</NavLink>
          <NavLink href="/#about">ABOUT</NavLink>
          <NavLink href="/#journey">JOURNEY</NavLink>
          <NavLink href="/#contact">CONTACT</NavLink>
        </motion.div>

        {/* Let's talk */}
        <motion.div
          initial={{
            opacity: 0,
            y: -15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 0.4,
          }}
        >
          <Link
            href="/#contact"
            className="group hidden items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 text-[10px] tracking-[0.18em] text-white/55 transition-all duration-300 hover:border-[#A9BFFF]/40 hover:bg-white/[0.03] hover:text-white md:flex"
          >
            LET&apos;S TALK

            <span className="h-1 w-1 rounded-full bg-[#A9BFFF] transition-all duration-300 group-hover:scale-150" />
          </Link>
        </motion.div>
      </nav>

      {/* ============================================================
          MAIN HERO
      ============================================================ */}

      <div className="relative z-20 flex min-h-[calc(100vh-88px)] flex-col justify-between px-6 pb-10 pt-16 md:px-12 md:pb-12 md:pt-20 lg:px-16">
        <div className="flex flex-1 items-center">
          <div className="w-full">
            {/* Identity */}
            <motion.div
              initial={{
                opacity: 0,
                y: -20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.2,
              }}
              className="mb-5 flex items-center gap-4 md:mb-7"
            >
              <div className="h-px w-10 bg-[#A9BFFF]/60 md:w-16" />

              <span className="text-[11px] tracking-[0.45em] text-white/50 md:text-xs">
                AH
              </span>
            </motion.div>

            {/* Name */}
            <div className="overflow-hidden">
              <motion.h1
                initial={{
                  opacity: 0,
                  y: 80,
                  scale: 0.96,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                transition={{
                  duration: 1.1,
                  delay: 0.25,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="select-none text-[clamp(4.2rem,11vw,10rem)] font-semibold leading-[0.8] tracking-[-0.085em]"
              >
                <span className="bg-gradient-to-r from-[#F2F2F2] via-[#F2F2F2] to-[#A9BFFF] bg-clip-text text-transparent">
                  AKASH
                </span>

                <span className="text-white/[0.12]"> H</span>
              </motion.h1>
            </div>

            {/* Divider */}
            <motion.div
              initial={{
                width: 0,
                opacity: 0,
              }}
              animate={{
                width: "100%",
                opacity: 1,
              }}
              transition={{
                duration: 1.2,
                delay: 0.7,
                ease: "easeOut",
              }}
              className="mt-8 max-w-5xl border-t border-white/[0.08]"
            />

            {/* Identity tags */}
            <motion.div
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.8,
              }}
              className="mt-6 flex flex-wrap items-center gap-4 md:gap-6"
            >
              <span className="text-[10px] tracking-[0.45em] text-[#A9BFFF]/80 md:text-xs">
                SOFTWARE
              </span>

              <span className="h-1 w-1 rounded-full bg-white/20" />

              <span className="text-[10px] tracking-[0.45em] text-white/35 md:text-xs">
                AI
              </span>

              <span className="h-1 w-1 rounded-full bg-white/20" />

              <span className="text-[10px] tracking-[0.45em] text-white/35 md:text-xs">
                AUTOMATION
              </span>
            </motion.div>

            {/* Main statement */}
            <motion.div
              initial={{
                opacity: 0,
                y: 40,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.9,
                delay: 1,
              }}
              className="mt-12 md:mt-16"
            >
              <h2 className="max-w-5xl text-[clamp(2.2rem,5vw,5.5rem)] font-light leading-[0.94] tracking-[-0.055em]">
                Building ideas
                <br />

                <span className="text-white/75">
                  into digital
                </span>

                <br />

                <span className="text-white/[0.24]">
                  experiences.
                </span>
              </h2>
            </motion.div>
          </div>
        </div>

        {/* ============================================================
            BOTTOM CONTENT
        ============================================================ */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 1.2,
          }}
          className="mt-16 flex flex-col gap-8 md:flex-row md:items-end md:justify-between"
        >
          {/* Description */}
          <div className="max-w-md">
            <p className="text-sm leading-7 text-white/35 md:text-base">
              I explore software, artificial intelligence and
              automation to turn ideas into useful digital
              experiences.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <motion.a
              href="#projects"
              whileHover={{
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="group flex items-center gap-3 rounded-full bg-[#F2F2F2] px-6 py-3 text-sm font-medium text-[#07090D] transition-all duration-300 hover:bg-[#A9BFFF]"
            >
              EXPLORE WORK

              <ArrowUpRight
                size={16}
                strokeWidth={1.8}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </motion.a>

            <motion.a
              href="#about"
              whileHover={{
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="rounded-full border border-white/10 px-6 py-3 text-sm text-white/60 transition-all duration-300 hover:border-white/30 hover:bg-white/[0.03] hover:text-white"
            >
              ABOUT ME
            </motion.a>
          </div>
        </motion.div>

        {/* ============================================================
            SCROLL INDICATOR
        ============================================================ */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 1,
            delay: 1.6,
          }}
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-[9px] tracking-[0.35em] text-white/20 md:flex"
        >
          <motion.div
            animate={{
              y: [0, 5, 0],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ArrowDownRight
              size={13}
              strokeWidth={1.3}
            />
          </motion.div>

          SCROLL TO EXPLORE
        </motion.div>

        {/* Page indicator */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 1,
            delay: 1.5,
          }}
          className="absolute bottom-8 right-6 hidden text-[8px] tracking-[0.3em] text-white/15 md:block md:right-12 lg:right-16"
        >
          01 / 08
        </motion.div>
      </div>
    </section>
  );
}

/* ================================================================
   NAVIGATION LINK
================================================================ */

function NavLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className="group relative text-[10px] tracking-[0.3em] text-white/30 transition-colors duration-300 hover:text-white"
    >
      {children}

      <span className="absolute -bottom-2 left-0 h-px w-0 bg-[#A9BFFF] transition-all duration-300 group-hover:w-full" />
    </Link>
  );
}