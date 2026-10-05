"use client";

import { motion } from "framer-motion";
import {
  Braces,
  BrainCircuit,
  Workflow,
  Layers3,
  ArrowUpRight,
} from "lucide-react";

const areas = [
  {
    number: "01",
    icon: Braces,
    title: "SOFTWARE",
    description:
      "Building practical applications with clean logic, APIs, interfaces, and scalable foundations.",
    technologies: "Python · FastAPI · React · Next.js",
  },
  {
    number: "02",
    icon: BrainCircuit,
    title: "ARTIFICIAL INTELLIGENCE",
    description:
      "Exploring AI-powered applications that connect natural language, intelligent systems, and useful workflows.",
    technologies: "LLMs · Prompt Engineering · RAG",
  },
  {
    number: "03",
    icon: Workflow,
    title: "AUTOMATION",
    description:
      "Connecting tools and services to reduce repetitive work and turn ideas into automated workflows.",
    technologies: "n8n · APIs · Webhooks",
  },
  {
    number: "04",
    icon: Layers3,
    title: "EXPERIMENTATION",
    description:
      "Learning by building, testing new technologies, and turning concepts into working prototypes.",
    technologies: "Projects · Prototypes · Open Source",
  },
];

export default function WhatIDo() {
  return (
    <section
      id="work"
      className="relative overflow-hidden border-b border-white/[0.08] bg-[#07090D] px-6 py-28 text-white md:px-12 md:py-40 lg:px-16"
    >
      {/* ============================================================
          OBSIDIAN WAVE BACKGROUND
      ============================================================ */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Soft atmosphere */}
        <motion.div
          animate={{
            opacity: [0.06, 0.1, 0.06],
            scale: [1, 1.04, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-[20%] top-[20%] h-[600px] w-[700px] rounded-full bg-[#172A46]/30 blur-[160px]"
        />

        {/* Large midnight wave */}
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-[25%] left-[-15%] h-[420px] w-[130%] rotate-[-5deg] rounded-[50%] border border-[#334E7A]/20 bg-[#172A46]/10"
        />

        {/* Secondary contour */}
        <motion.div
          animate={{
            x: [0, -25, 0],
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-[20%] left-[10%] h-[260px] w-[110%] rotate-[3deg] rounded-[50%] border border-[#334E7A]/10"
        />

        {/* Editorial lines */}
        <div className="absolute left-0 top-[25%] h-px w-full bg-white/[0.025]" />

        <div className="absolute left-0 top-[75%] h-px w-full bg-white/[0.025]" />

        {/* Fine grain */}
        <div className="absolute inset-0 opacity-[0.025]">
          <svg
            className="h-full w-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <filter id="whatIDoNoise">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.75"
                numOctaves="3"
                stitchTiles="stitch"
              />
            </filter>

            <rect
              width="100%"
              height="100%"
              filter="url(#whatIDoNoise)"
              opacity="0.45"
            />
          </svg>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* ============================================================
            HEADER
        ============================================================ */}

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
          }}
          className="mb-20"
        >
          <div className="mb-7 flex items-center gap-4">
            <span className="text-[10px] tracking-[0.4em] text-[#A9BFFF]/70">
              03
            </span>

            <div className="h-px w-12 bg-white/10" />

            <span className="text-[10px] tracking-[0.35em] text-white/30">
              WHAT I DO
            </span>
          </div>

          <h2 className="max-w-5xl text-[clamp(3rem,6vw,6rem)] font-light leading-[0.88] tracking-[-0.065em]">
            Different tools.
            <br />

            <span className="text-white/[0.24]">
              One goal.
            </span>

            <br />

            Build something useful.
          </h2>

          <p className="mt-8 max-w-xl text-sm leading-7 text-white/30 md:text-base">
            I combine software development, AI, and automation to
            explore ideas and turn them into practical digital
            experiences.
          </p>
        </motion.div>

        {/* ============================================================
            AREAS
        ============================================================ */}

        <div className="border-t border-white/[0.08]">
          {areas.map((area, index) => {
            const Icon = area.icon;

            return (
              <motion.div
                key={area.number}
                initial={{
                  opacity: 0,
                  y: 35,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  margin: "-80px",
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                }}
                className="group relative border-b border-white/[0.08] py-10 md:py-12"
              >
                {/* Subtle hover surface */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#172A46]/20 via-[#172A46]/[0.03] to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

                {/* Hover accent line */}
                <div className="pointer-events-none absolute bottom-0 left-0 h-px w-0 bg-[#A9BFFF]/50 transition-all duration-700 group-hover:w-full" />

                <div className="relative z-10 grid gap-8 md:grid-cols-[70px_70px_1fr_1fr_auto] md:items-center">
                  {/* Number */}

                  <span className="text-[11px] tracking-[0.25em] text-white/20 transition-colors duration-500 group-hover:text-[#A9BFFF]/60">
                    {area.number}
                  </span>

                  {/* Icon */}

                  <motion.div
                    whileHover={{
                      rotate: 4,
                      scale: 1.04,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-white/30 transition-all duration-500 group-hover:border-[#A9BFFF]/30 group-hover:bg-[#172A46]/20 group-hover:text-[#A9BFFF]"
                  >
                    <Icon
                      size={19}
                      strokeWidth={1.4}
                    />
                  </motion.div>

                  {/* Title + description */}

                  <div>
                    <h3 className="text-xl font-medium tracking-[-0.02em] text-white/90 md:text-2xl">
                      {area.title}
                    </h3>

                    <p className="mt-3 max-w-xl text-sm leading-7 text-white/30 transition-colors duration-500 group-hover:text-white/45 md:text-base">
                      {area.description}
                    </p>
                  </div>

                  {/* Technologies */}

                  <div className="md:pl-8">
                    <span className="text-[10px] leading-6 tracking-[0.12em] text-white/20 transition-colors duration-500 group-hover:text-white/40">
                      {area.technologies}
                    </span>
                  </div>

                  {/* Arrow */}

                  <div className="hidden md:block">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] transition-all duration-500 group-hover:border-[#A9BFFF]/30 group-hover:bg-[#172A46]/20">
                      <ArrowUpRight
                        size={15}
                        strokeWidth={1.4}
                        className="text-white/20 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#A9BFFF]"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ============================================================
            FOOTER LABEL
        ============================================================ */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
            delay: 0.3,
          }}
          className="mt-8 flex items-center justify-between"
        >
          <span className="text-[9px] tracking-[0.3em] text-white/15">
            AREAS OF EXPLORATION
          </span>

          <span className="text-[9px] tracking-[0.25em] text-white/15">
            04 / 04
          </span>
        </motion.div>
      </div>
    </section>
  );
}