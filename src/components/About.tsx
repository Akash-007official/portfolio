"use client";

import { motion } from "framer-motion";
import {
  ArrowDownRight,
  BrainCircuit,
  Code2,
  Workflow,
} from "lucide-react";

const focusAreas = [
  {
    number: "01",
    icon: Code2,
    title: "Software",
    description:
      "Building practical applications and digital experiences with modern technologies.",
  },
  {
    number: "02",
    icon: BrainCircuit,
    title: "Artificial Intelligence",
    description:
      "Exploring intelligent applications, LLMs, prompt engineering, and RAG.",
  },
  {
    number: "03",
    icon: Workflow,
    title: "Automation",
    description:
      "Connecting APIs, tools, and workflows to create efficient and useful systems.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#07090D] px-6 py-28 text-[#F2F2F2] md:px-12 md:py-36 lg:px-16"
    >
      {/* =========================================================
          OBSIDIAN WAVE BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Main flowing wave */}
        <motion.div
          animate={{
            x: [0, 25, -15, 0],
            y: [0, -12, 14, 0],
            rotate: [0, 1, -0.6, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-[20%] top-[12%] h-[520px] w-[105%] rotate-[-7deg] rounded-[45%] bg-[#172A46]/30 blur-[90px]"
        />

        {/* Secondary atmosphere */}
        <div className="absolute -right-[15%] bottom-[12%] h-[420px] w-[500px] rounded-full bg-[#334E7A]/[0.05] blur-[120px]" />

        {/* Editorial lines */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute left-0 right-0 top-[18%] h-px bg-white" />
          <div className="absolute left-0 right-0 top-[43%] h-px bg-white" />
          <div className="absolute left-0 right-0 top-[70%] h-px bg-white" />
          <div className="absolute left-0 right-0 top-[88%] h-px bg-white" />
        </div>

        {/* Fine grain */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='.4'/%3E%3C/svg%3E\")",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* =========================================================
            SECTION HEADER
        ========================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4">
            <span className="text-[10px] tracking-[0.4em] text-[#A9BFFF]">
              02
            </span>

            <div className="h-px w-12 bg-white/15" />

            <span className="text-[10px] tracking-[0.35em] text-white/35">
              ABOUT ME
            </span>
          </div>
        </motion.div>

        {/* =========================================================
            INTRO
        ========================================================= */}

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:items-end lg:gap-20">
          {/* Main statement */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9 }}
          >
            <p className="text-[10px] tracking-[0.4em] text-white/20">
              SOFTWARE · AI · AUTOMATION
            </p>

            <h2 className="mt-6 max-w-5xl text-[clamp(3.8rem,8vw,8.5rem)] font-semibold leading-[0.84] tracking-[-0.075em]">
              Curious mind.
              <br />
              <span className="text-white/25">Practical builder.</span>
            </h2>
          </motion.div>

          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="max-w-md lg:pb-2"
          >
            <p className="text-sm leading-8 text-white/45 md:text-base">
              I&apos;m Akash H, a technology graduate focused on building
              practical solutions across software, artificial intelligence,
              and automation.
            </p>

            <p className="mt-5 text-sm leading-8 text-white/30">
              I enjoy understanding real problems, exploring different
              technologies, and turning ideas into useful digital
              experiences that can evolve with time.
            </p>
          </motion.div>
        </div>

        {/* =========================================================
            DIVIDER
        ========================================================= */}

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-20 h-px origin-left bg-white/[0.08] md:mt-24"
        />

        {/* =========================================================
            APPROACH + EDUCATION
        ========================================================= */}

        <div className="mt-20 grid gap-16 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
          {/* Approach */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[10px] tracking-[0.35em] text-[#A9BFFF]">
              HOW I WORK
            </p>

            <h3 className="mt-7 text-[clamp(2.2rem,4vw,4rem)] font-light leading-[1] tracking-[-0.055em]">
              Learn.
              <br />
              Build.
              <br />
              <span className="text-white/25">Improve.</span>
            </h3>

            <p className="mt-8 max-w-md text-sm leading-8 text-white/35">
              I believe the best way to understand technology is to build
              with it. I learn through experimentation, practical projects,
              and continuous improvement.
            </p>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-between">
              <p className="text-[10px] tracking-[0.35em] text-[#A9BFFF]">
                EDUCATION
              </p>

              <span className="text-[9px] tracking-[0.3em] text-white/20">
                02 / 02
              </span>
            </div>

            <div className="mt-8 border-y border-white/[0.08]">
              {/* MCA */}
              <motion.div
                whileHover={{
                  backgroundColor: "rgba(23,42,70,0.12)",
                }}
                className="group relative border-b border-white/[0.08] px-5 py-7 transition-colors md:px-7"
              >
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-xl font-medium tracking-[-0.02em]">
                      Master of Computer Applications
                    </p>

                    <p className="mt-2 text-sm text-white/35">
                      Hindusthan College of Arts and Science
                    </p>
                  </div>

                  <span className="whitespace-nowrap text-[10px] tracking-[0.25em] text-white/25">
                    2024 — 2026
                  </span>
                </div>

                <div className="mt-5 flex items-center gap-2 text-[9px] tracking-[0.3em] text-[#A9BFFF]/60">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#A9BFFF]" />
                  COMPLETED
                </div>

                <div className="absolute bottom-0 left-0 h-px w-0 bg-[#A9BFFF] transition-all duration-500 group-hover:w-full" />
              </motion.div>

              {/* B.Sc. */}
              <motion.div
                whileHover={{
                  backgroundColor: "rgba(23,42,70,0.12)",
                }}
                className="group relative px-5 py-7 transition-colors md:px-7"
              >
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-xl font-medium tracking-[-0.02em]">
                      B.Sc. Computer Technology
                    </p>

                    <p className="mt-2 text-sm text-white/35">
                      Hindusthan College of Arts and Science
                    </p>
                  </div>

                  <span className="whitespace-nowrap text-[10px] tracking-[0.25em] text-white/25">
                    2021 — 2024
                  </span>
                </div>

                <div className="mt-5 text-[9px] tracking-[0.3em] text-white/20">
                  COMPLETED
                </div>

                <div className="absolute bottom-0 left-0 h-px w-0 bg-[#A9BFFF] transition-all duration-500 group-hover:w-full" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* =========================================================
            FOCUS AREAS
        ========================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-28"
        >
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="text-[10px] tracking-[0.35em] text-[#A9BFFF]">
                WHAT INTERESTS ME
              </p>

              <p className="mt-4 max-w-lg text-sm leading-7 text-white/30">
                The areas I explore through projects, experimentation, and
                continuous learning.
              </p>
            </div>

            <span className="hidden text-[9px] tracking-[0.3em] text-white/20 sm:block">
              03 AREAS
            </span>
          </div>

          <div className="grid border-l border-white/[0.08] md:grid-cols-3 md:border-t">
            {focusAreas.map((area, index) => {
              const Icon = area.icon;

              return (
                <motion.div
                  key={area.number}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.1,
                  }}
                  whileHover={{
                    backgroundColor: "rgba(23,42,70,0.14)",
                  }}
                  className="group relative border-b border-white/[0.08] p-7 transition-colors md:border-r md:p-8 first:md:border-l"
                >
                  <div className="flex items-center justify-between">
                    <Icon
                      size={20}
                      strokeWidth={1.3}
                      className="text-white/25 transition-colors duration-300 group-hover:text-[#A9BFFF]"
                    />

                    <span className="text-[9px] tracking-[0.3em] text-white/20">
                      {area.number}
                    </span>
                  </div>

                  <h4 className="mt-10 text-lg font-medium tracking-tight">
                    {area.title}
                  </h4>

                  <p className="mt-4 max-w-sm text-sm leading-7 text-white/30">
                    {area.description}
                  </p>

                  <div className="absolute bottom-0 left-0 h-px w-0 bg-[#A9BFFF] transition-all duration-500 group-hover:w-full" />
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* =========================================================
            CURRENT DIRECTION
        ========================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 flex flex-col gap-5 border-t border-white/[0.08] pt-8 md:flex-row md:items-center md:justify-between"
        >
          <div>
            <p className="text-[9px] tracking-[0.3em] text-white/20">
              CURRENT DIRECTION
            </p>

            <p className="mt-3 text-sm text-white/40">
              Building practical software and AI-powered experiences.
            </p>
          </div>

          <motion.div
            animate={{
              x: [0, 5, 0],
              y: [0, 5, 0],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ArrowDownRight
              size={20}
              strokeWidth={1.2}
              className="text-[#A9BFFF]/50"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}