"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

const projects = [
  {
    number: "01",
    category: "AI / SOFTWARE",
    title: "NL2P",
    description:
      "An AI-driven system that transforms natural language instructions into structured prompts and executable workflows.",
    technologies: ["Python", "FastAPI", "LLMs", "RAG", "Automation"],
    featured: true,
  },
  {
    number: "02",
    category: "IOT / ASSISTIVE TECHNOLOGY",
    title: "SMART ASSISTIVE STICK",
    description:
      "An assistive IoT concept designed to help visually impaired users through sensors, GPS, and communication technologies.",
    technologies: ["Arduino", "GPS", "GSM", "Sensors"],
    featured: false,
  },
];

export default function SelectedWork() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#07090D] px-6 py-28 text-white md:px-12 md:py-40 lg:px-16"
    >
      {/* =========================================================
          OBSIDIAN WAVE BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Soft midnight atmosphere */}
        <motion.div
          animate={{
            scale: [1, 1.04, 1],
            opacity: [0.18, 0.24, 0.18],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-40 top-20 h-[650px] w-[650px] rounded-full bg-[#172A46]/30 blur-[150px]"
        />

        {/* Large flowing wave */}
        <motion.div
          animate={{
            x: [0, 35, 0],
            y: [0, -18, 0],
            rotate: [-4, -2, -4],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-[15%] top-[28%] h-[430px] w-[125%] rotate-[-4deg] rounded-[50%] bg-[#172A46]/45 blur-[55px]"
        />

        {/* Secondary contour */}
        <motion.div
          animate={{
            x: [0, -25, 0],
            opacity: [0.08, 0.13, 0.08],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-[20%] bottom-[8%] h-[280px] w-[110%] rotate-[3deg] rounded-[50%] bg-[#334E7A]/20 blur-[70px]"
        />

        {/* Editorial horizontal lines */}
        <div className="absolute inset-0 opacity-[0.035]">
          <div className="absolute left-0 top-[18%] h-px w-full bg-white" />
          <div className="absolute left-0 top-[50%] h-px w-full bg-white" />
          <div className="absolute left-0 top-[82%] h-px w-full bg-white" />
        </div>

        {/* Fine grain */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `
              url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.45'/%3E%3C/svg%3E")
            `,
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* =========================================================
            HEADER
        ========================================================= */}

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
            <span className="text-[10px] tracking-[0.4em] text-[#A9BFFF]">
              04
            </span>

            <div className="h-px w-12 bg-white/15" />

            <span className="text-[10px] tracking-[0.35em] text-white/35">
              SELECTED WORK
            </span>
          </div>

          <h2 className="max-w-5xl text-[clamp(3rem,6vw,6rem)] font-light leading-[0.88] tracking-[-0.065em]">
            Things I&apos;ve
            <br />

            <span className="text-white/25">built along</span>

            <br />

            the way.
          </h2>

          <p className="mt-8 max-w-xl text-sm leading-7 text-white/30 md:text-base">
            A selection of projects where I explored software, artificial
            intelligence, automation, and real-world problem solving.
          </p>
        </motion.div>

        {/* =========================================================
            PROJECTS
        ========================================================= */}

        <div className="space-y-6">
          {projects.map((project, index) => (
            <motion.article
              key={project.number}
              initial={{
                opacity: 0,
                y: 45,
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
                duration: 0.8,
                delay: index * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative"
            >
              {project.featured ? (
                <Link href="/nl2p" className="block">
                  <div className="relative overflow-hidden rounded-[1.5rem] border border-white/[0.09] bg-white/[0.015] transition-all duration-700 hover:border-[#A9BFFF]/25 hover:bg-white/[0.025]">
                    {/* Soft project atmosphere */}
                    <motion.div
                      animate={{
                        scale: [1, 1.06, 1],
                        opacity: [0.06, 0.1, 0.06],
                      }}
                      transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="pointer-events-none absolute -right-32 -top-48 h-[520px] w-[520px] rounded-full bg-[#172A46]/50 blur-[110px]"
                    />

                    {/* Top line */}
                    <div className="relative flex items-center justify-between border-b border-white/[0.08] px-6 py-5 md:px-10">
                      <div className="flex items-center gap-4">
                        <span className="text-[10px] tracking-[0.3em] text-[#A9BFFF]">
                          {project.number}
                        </span>

                        <div className="h-px w-8 bg-white/10" />

                        <span className="text-[10px] tracking-[0.3em] text-white/30">
                          FEATURED PROJECT
                        </span>
                      </div>

                      <span className="text-[9px] tracking-[0.25em] text-white/15">
                        AI SYSTEM
                      </span>
                    </div>

                    {/* Main content */}
                    <div className="relative grid gap-14 p-7 md:p-12 lg:grid-cols-[1fr_0.65fr] lg:p-16">
                      {/* Left */}
                      <div>
                        <p className="text-[10px] tracking-[0.35em] text-[#A9BFFF]/80">
                          {project.category}
                        </p>

                        <div className="mt-6 overflow-hidden">
                          <motion.h3
                            initial={{
                              y: 40,
                              opacity: 0,
                            }}
                            whileInView={{
                              y: 0,
                              opacity: 1,
                            }}
                            viewport={{
                              once: true,
                            }}
                            transition={{
                              duration: 0.8,
                              delay: 0.15,
                            }}
                            className="text-[clamp(4.5rem,10vw,9rem)] font-light leading-[0.75] tracking-[-0.08em]"
                          >
                            {project.title}
                          </motion.h3>
                        </div>

                        <p className="mt-10 max-w-2xl text-sm leading-7 text-white/35 md:text-base md:leading-8">
                          {project.description}
                        </p>

                        {/* Technologies */}
                        <div className="mt-10 flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="rounded-full border border-white/[0.08] px-4 py-2 text-[9px] tracking-[0.12em] text-white/30 transition-all duration-300 group-hover:border-white/[0.15] group-hover:text-white/50"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Right visual */}
                      <div className="relative flex min-h-[280px] items-center justify-center lg:min-h-[360px]">
                        {/* Large editorial circle */}
                        <motion.div
                          animate={{
                            rotate: [0, 360],
                          }}
                          transition={{
                            duration: 35,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="absolute h-[230px] w-[230px] rounded-full border border-white/[0.07]"
                        />

                        {/* Inner contour */}
                        <motion.div
                          animate={{
                            rotate: [360, 0],
                          }}
                          transition={{
                            duration: 24,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="absolute h-[155px] w-[155px] rounded-full border border-[#A9BFFF]/10"
                        />

                        {/* Small editorial marker */}
                        <motion.div
                          animate={{
                            rotate: 360,
                          }}
                          transition={{
                            duration: 12,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="absolute h-[230px] w-[230px]"
                        >
                          <span className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[#A9BFFF]" />
                        </motion.div>

                        {/* Center */}
                        <motion.div
                          animate={{
                            scale: [1, 1.035, 1],
                          }}
                          transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className="relative flex h-24 w-24 items-center justify-center rounded-full border border-[#A9BFFF]/15 bg-[#172A46]/20 backdrop-blur-sm"
                        >
                          <span className="text-xl font-light tracking-[-0.05em]">
                            NL2P
                          </span>
                        </motion.div>

                        {/* Arrow */}
                        <div className="absolute bottom-0 right-0 flex h-14 w-14 items-center justify-center rounded-full border border-white/10 transition-all duration-500 group-hover:border-[#A9BFFF]/40 group-hover:bg-[#A9BFFF]/[0.06]">
                          <ArrowUpRight
                            size={19}
                            className="text-white/30 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#A9BFFF]"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Bottom hover line */}
                    <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-[#A9BFFF]/80 to-transparent transition-all duration-700 group-hover:w-full" />
                  </div>
                </Link>
              ) : (
                <div className="relative overflow-hidden rounded-[1.5rem] border border-white/[0.08] bg-white/[0.01] transition-all duration-500 hover:border-white/[0.15] hover:bg-white/[0.02]">
                  <div className="relative grid gap-8 p-7 md:grid-cols-[100px_1fr_auto] md:items-center md:p-10">
                    {/* Number */}
                    <span className="text-[11px] tracking-[0.3em] text-white/20">
                      {project.number}
                    </span>

                    {/* Content */}
                    <div>
                      <p className="text-[9px] tracking-[0.35em] text-white/25">
                        {project.category}
                      </p>

                      <h3 className="mt-4 text-3xl font-light tracking-[-0.04em] md:text-4xl">
                        {project.title}
                      </h3>

                      <p className="mt-4 max-w-2xl text-sm leading-7 text-white/30">
                        {project.description}
                      </p>

                      <div className="mt-6 flex flex-wrap gap-3">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-[9px] tracking-[0.12em] text-white/20 transition-colors duration-300 group-hover:text-white/35"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Arrow */}
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 transition-all duration-500 group-hover:border-[#A9BFFF]/40 group-hover:bg-[#A9BFFF]/[0.05]">
                      <ArrowUpRight
                        size={17}
                        className="text-white/25 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#A9BFFF]"
                      />
                    </div>
                  </div>

                  {/* Bottom hover line */}
                  <div className="absolute bottom-0 left-0 h-px w-0 bg-[#A9BFFF]/50 transition-all duration-700 group-hover:w-full" />
                </div>
              )}
            </motion.article>
          ))}
        </div>

        {/* =========================================================
            FOOTER
        ========================================================= */}

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
          className="mt-10 flex items-center justify-between border-t border-white/[0.08] pt-6"
        >
          <div className="flex items-center gap-3">
            <ArrowDownRight
              size={13}
              className="text-[#A9BFFF]/60"
            />

            <span className="text-[9px] tracking-[0.3em] text-white/15">
              MORE EXPERIMENTS IN PROGRESS
            </span>
          </div>

          <span className="text-[9px] tracking-[0.2em] text-white/15">
            02 / 02
          </span>
        </motion.div>
      </div>
    </section>
  );
}