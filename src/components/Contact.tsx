"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-b border-white/[0.08] bg-[#07090D] px-6 py-32 text-white md:px-12 md:py-48 lg:px-16"
    >
      {/* =====================================================
          OBSIDIAN WAVE BACKGROUND
      ===================================================== */}

      {/* Soft midnight atmosphere */}
      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          opacity: [0.05, 0.09, 0.05],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -left-40 top-20 h-[520px] w-[520px] rounded-full bg-[#172A46]/70 blur-[150px]"
      />

      {/* Main flowing wave */}
      <motion.div
        animate={{
          x: [0, -30, 0],
          scaleY: [1, 1.04, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-[20%] top-[25%] h-[450px] w-[75%] rotate-[-8deg] rounded-[45%] bg-[#172A46]/50 blur-[75px]"
      />

      {/* Lower contour */}
      <motion.div
        animate={{
          x: [0, 25, 0],
          opacity: [0.03, 0.07, 0.03],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -bottom-40 left-[10%] h-[350px] w-[75%] rounded-[50%] bg-[#334E7A]/25 blur-[100px]"
      />

      {/* Editorial lines */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.035]">
        <div className="absolute left-0 right-0 top-[20%] h-px bg-white" />
        <div className="absolute left-0 right-0 top-[50%] h-px bg-white" />
        <div className="absolute left-0 right-0 top-[80%] h-px bg-white" />
      </div>

      {/* Grain */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.45'/%3E%3C/svg%3E")
          `,
        }}
      />

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="relative mx-auto max-w-7xl">

        {/* Section Label */}
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            margin: "-100px",
          }}
          transition={{
            duration: 0.7,
          }}
          className="mb-10 flex items-center gap-4"
        >
          <span className="text-[10px] tracking-[0.4em] text-[#A9BFFF]/70">
            08
          </span>

          <div className="h-px w-12 bg-white/15" />

          <span className="text-[10px] tracking-[0.35em] text-white/35">
            CONTACT
          </span>
        </motion.div>

        {/* ===================================================
            MAIN HEADING
        =================================================== */}

        <motion.h2
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            margin: "-100px",
          }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-5xl text-[clamp(3.5rem,9vw,9rem)] font-light leading-[0.82] tracking-[-0.07em]"
        >
          Have an idea?
          <br />
          <span className="text-white/25">
            Let&apos;s build it.
          </span>
        </motion.h2>

        {/* ===================================================
            DESCRIPTION
        =================================================== */}

        <motion.p
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            margin: "-100px",
          }}
          transition={{
            duration: 0.8,
            delay: 0.15,
          }}
          className="mt-10 max-w-xl text-base leading-8 text-white/35 md:text-lg"
        >
          I&apos;m Akash — a technology enthusiast exploring
          software, artificial intelligence, and automation.
          If you have a project, collaboration, opportunity, or
          simply an interesting idea, I&apos;d love to hear from you.
        </motion.p>

        {/* ===================================================
            CONTACT ITEMS
        =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            margin: "-100px",
          }}
          transition={{
            duration: 0.8,
            delay: 0.3,
          }}
          className="mt-24 grid gap-8 md:grid-cols-3 md:gap-10"
        >

          {/* =================================================
              EMAIL
          ================================================= */}

          <motion.a
            href="mailto:akashche007@gmail.com"
            whileHover={{
              y: -3,
            }}
            transition={{
              duration: 0.3,
            }}
            className="group relative flex items-center gap-5 border-t border-white/[0.08] pt-6"
          >
            {/* Icon */}
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 transition-all duration-300 group-hover:border-[#A9BFFF]/40 group-hover:bg-[#172A46]/30">
              <Mail
                size={18}
                strokeWidth={1.6}
                className="text-white/45 transition-colors duration-300 group-hover:text-[#A9BFFF]"
              />
            </div>

            {/* Text */}
            <div className="min-w-0">
              <p className="text-[10px] tracking-[0.35em] text-white/30">
                EMAIL
              </p>

              <p className="mt-2 truncate text-sm text-white/65 transition-colors duration-300 group-hover:text-white">
                akashche007@gmail.com
              </p>
            </div>

            {/* Arrow */}
            <ArrowUpRight
              size={14}
              strokeWidth={1.8}
              className="absolute right-0 top-6 text-[#A9BFFF]/60 opacity-70 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:opacity-100"
            />

            {/* Hover line */}
            <motion.div
              initial={{
                scaleX: 0,
              }}
              whileHover={{
                scaleX: 1,
              }}
              transition={{
                duration: 0.4,
              }}
              className="absolute bottom-0 left-0 h-px w-full origin-left bg-gradient-to-r from-[#A9BFFF]/60 via-[#334E7A]/30 to-transparent"
            />
          </motion.a>

          {/* =================================================
              LINKEDIN
          ================================================= */}

          <motion.a
            href="https://www.linkedin.com/in/akash-h007"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Akash H LinkedIn profile"
            whileHover={{
              y: -3,
            }}
            transition={{
              duration: 0.3,
            }}
            className="group relative flex items-center gap-5 border-t border-white/[0.08] pt-6"
          >
            {/* Icon */}
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 text-sm font-semibold text-white/45 transition-all duration-300 group-hover:border-[#A9BFFF]/40 group-hover:bg-[#172A46]/30 group-hover:text-[#A9BFFF]">
              in
            </div>

            {/* Text */}
            <div className="min-w-0">
              <p className="text-[10px] tracking-[0.35em] text-white/30">
                LINKEDIN
              </p>

              <p className="mt-2 truncate text-sm text-white/65 transition-colors duration-300 group-hover:text-white">
                linkedin.com/in/akash-h007
              </p>
            </div>

            {/* Arrow */}
            <ArrowUpRight
              size={14}
              strokeWidth={1.8}
              className="absolute right-0 top-6 text-[#A9BFFF]/60 opacity-70 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:opacity-100"
            />

            {/* Hover line */}
            <motion.div
              initial={{
                scaleX: 0,
              }}
              whileHover={{
                scaleX: 1,
              }}
              transition={{
                duration: 0.4,
              }}
              className="absolute bottom-0 left-0 h-px w-full origin-left bg-gradient-to-r from-[#A9BFFF]/60 via-[#334E7A]/30 to-transparent"
            />
          </motion.a>

          {/* =================================================
              GITHUB
          ================================================= */}

          <motion.a
            href="https://github.com/Akash-007official"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Akash H GitHub profile"
            whileHover={{
              y: -3,
            }}
            transition={{
              duration: 0.3,
            }}
            className="group relative flex items-center gap-5 border-t border-white/[0.08] pt-6"
          >
            {/* GitHub Icon */}
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 transition-all duration-300 group-hover:border-[#A9BFFF]/40 group-hover:bg-[#172A46]/30">
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-[19px] w-[19px] fill-white/45 transition-all duration-300 group-hover:fill-[#A9BFFF]"
              >
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.014-1.7-2.782.604-3.369-1.34-3.369-1.34-.455-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.004.07 1.532 1.03 1.532 1.03.892 1.529 2.341 1.087 2.91.831.091-.646.349-1.087.635-1.337-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844a9.58 9.58 0 0 1 2.504.337c1.909-1.294 2.748-1.025 2.748-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.936.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.744 0 .267.18.578.688.48A10.001 10.001 0 0 0 22 12c0-5.523-4.477-10-10-10Z" />
              </svg>
            </div>

            {/* Text */}
            <div className="min-w-0">
              <p className="text-[10px] tracking-[0.35em] text-white/30">
                GITHUB
              </p>

              <p className="mt-2 truncate text-sm text-white/65 transition-colors duration-300 group-hover:text-white">
                github.com/Akash-007official
              </p>
            </div>

            {/* Arrow */}
            <ArrowUpRight
              size={14}
              strokeWidth={1.8}
              className="absolute right-0 top-6 text-[#A9BFFF]/60 opacity-70 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:opacity-100"
            />

            {/* Hover line */}
            <motion.div
              initial={{
                scaleX: 0,
              }}
              whileHover={{
                scaleX: 1,
              }}
              transition={{
                duration: 0.4,
              }}
              className="absolute bottom-0 left-0 h-px w-full origin-left bg-gradient-to-r from-[#A9BFFF]/60 via-[#334E7A]/30 to-transparent"
            />
          </motion.a>

        </motion.div>
      </div>
    </section>
  );
}