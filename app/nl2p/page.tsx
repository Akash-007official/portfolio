"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  ChevronDown,
  Globe,
  Layers3,
  Sparkles,
  Workflow,
} from "lucide-react";

const workflow = [
  {
    number: "01",
    label: "INPUT",
    title: "Natural Language",
    description:
      "The user describes what they want in plain language instead of manually designing a technical prompt or workflow.",
    icon: Globe,
  },
  {
    number: "02",
    label: "UNDERSTAND",
    title: "Intent Extraction",
    description:
      "The system identifies the user's intent, important entities, actions, constraints, and required context.",
    icon: Sparkles,
  },
  {
    number: "03",
    label: "STRUCTURE",
    title: "Prompt Generation",
    description:
      "The extracted information is transformed into a structured prompt or workflow representation.",
    icon: Layers3,
  },
  {
    number: "04",
    label: "EXECUTE",
    title: "Digital Action",
    description:
      "The structured result can be connected to APIs, automation tools, applications, or downstream AI systems.",
    icon: Workflow,
  },
];

const technologies = [
  "Python",
  "FastAPI",
  "LLMs",
  "Prompt Engineering",
  "RAG",
  "REST APIs",
  "LangChain",
  "n8n",
];

const learnings = [
  "Designing a pipeline from natural language to structured output",
  "Building API-based AI application architecture",
  "Separating intent extraction from prompt generation",
  "Thinking about automation as a reusable system",
];

export default function NL2PPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#07090D] text-white">
      <Background />

      {/* =========================================================
          NAVIGATION
      ========================================================= */}

      <nav className="relative z-30 flex items-center justify-between px-6 py-6 md:px-12 lg:px-16">
        <Link
          href="/"
          className="group flex items-center gap-3 text-[10px] tracking-[0.3em] text-white/50 transition-colors hover:text-white"
        >
          <ArrowLeft
            size={15}
            strokeWidth={1.5}
            className="transition-transform duration-300 group-hover:-translate-x-1"
          />

          BACK TO PORTFOLIO
        </Link>

        <span className="hidden text-[9px] tracking-[0.35em] text-white/20 md:block">
          PROJECT / 01
        </span>
      </nav>

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative z-10 px-6 pb-24 pt-20 md:px-12 md:pb-32 md:pt-28 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8 flex items-center gap-4"
          >
            <span className="h-px w-12 bg-[#A9BFFF]/70" />

            <span className="text-[10px] tracking-[0.4em] text-[#A9BFFF]/80">
              AI / SOFTWARE / AUTOMATION
            </span>
          </motion.div>

          <div className="overflow-hidden">
            <motion.h1
              initial={{ opacity: 0, y: 90 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-[clamp(5rem,16vw,13rem)] font-semibold leading-[0.78] tracking-[-0.09em]"
            >
              <span className="text-white">NL2P</span>
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.35,
            }}
            className="mt-10 grid gap-10 border-t border-white/10 pt-8 md:grid-cols-[1fr_2fr] md:items-start"
          >
            <div>
              <p className="text-[10px] tracking-[0.35em] text-white/30">
                NATURAL LANGUAGE → PROMPT / WORKFLOW
              </p>
            </div>

            <div className="max-w-3xl">
              <p className="text-xl font-light leading-relaxed text-white/65 md:text-2xl">
                An AI-driven system that explores how natural language can be
                transformed into structured prompts and multi-step digital
                workflows.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
              delay: 0.7,
            }}
            className="mt-16 flex items-center gap-4 text-[9px] tracking-[0.35em] text-white/20"
          >
            <ChevronDown size={14} strokeWidth={1.2} />

            SCROLL TO EXPLORE
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          OVERVIEW
      ========================================================= */}

      <Section
        number="01"
        label="OVERVIEW"
        title="From human intent to structured digital action."
      >
        <div className="grid gap-12 md:grid-cols-[1fr_1.4fr]">
          <p className="text-sm leading-7 text-white/40 md:text-base">
            NL2P explores a practical AI pipeline where users can describe a
            task naturally and the system converts that instruction into a
            structured representation that downstream software can understand.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            <InfoCard
              title="Problem"
              text="Technical systems often require structured instructions even when people naturally communicate in flexible language."
            />

            <InfoCard
              title="Approach"
              text="Extract intent and context, structure the result, and prepare it for execution or automation."
            />
          </div>
        </div>
      </Section>

      {/* =========================================================
          SYSTEM FLOW
      ========================================================= */}

      <Section
        number="02"
        label="SYSTEM FLOW"
        title="A simple pipeline with room to scale."
      >
        <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-4">
          {workflow.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.number}
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
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                }}
                className="group relative min-h-[280px] bg-[#090D13] p-7 transition-colors duration-500 hover:bg-[#101722]"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[9px] tracking-[0.3em] text-white/20">
                    {item.number}
                  </span>

                  <Icon
                    size={18}
                    strokeWidth={1.3}
                    className="text-white/25 transition-colors duration-300 group-hover:text-[#A9BFFF]"
                  />
                </div>

                <div className="mt-20">
                  <p className="text-[9px] tracking-[0.3em] text-[#A9BFFF]/60">
                    {item.label}
                  </p>

                  <h3 className="mt-3 text-xl font-light text-white/90">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-xs leading-6 text-white/35">
                    {item.description}
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 h-px w-0 bg-[#A9BFFF]/60 transition-all duration-500 group-hover:w-full" />
              </motion.div>
            );
          })}
        </div>
      </Section>

      {/* =========================================================
          ARCHITECTURE
      ========================================================= */}

      <Section
        number="03"
        label="ARCHITECTURE"
        title="Separate the intelligence from the execution."
      >
        <ArchitectureDiagram />
      </Section>

      {/* =========================================================
          TECHNOLOGY
      ========================================================= */}

      <Section
        number="04"
        label="TECHNOLOGY"
        title="The tools behind the experiment."
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {technologies.map((technology, index) => (
            <motion.div
              key={technology}
              initial={{
                opacity: 0,
                y: 18,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.45,
                delay: index * 0.05,
              }}
              className="group rounded-xl border border-white/10 bg-white/[0.02] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#A9BFFF]/25 hover:bg-[#172A46]/20"
            >
              <span className="text-sm text-white/65 transition-colors duration-300 group-hover:text-white/90">
                {technology}
              </span>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* =========================================================
          LEARNINGS
      ========================================================= */}

      <Section
        number="05"
        label="WHAT I LEARNED"
        title="Building the project changed how I think about AI applications."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {learnings.map((learning, index) => (
            <motion.div
              key={learning}
              initial={{
                opacity: 0,
                x: -15,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              className="group flex gap-4 rounded-xl border border-white/10 bg-white/[0.02] p-6 transition-colors duration-300 hover:border-white/[0.16]"
            >
              <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#A9BFFF]/30 bg-[#A9BFFF]/[0.06]">
                <Check
                  size={13}
                  strokeWidth={1.8}
                  className="text-[#A9BFFF]"
                />
              </div>

              <p className="text-sm leading-6 text-white/50 transition-colors duration-300 group-hover:text-white/65">
                {learning}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* =========================================================
          FOOTER
      ========================================================= */}

      <section className="relative z-10 px-6 pb-24 pt-10 md:px-12 md:pb-32 lg:px-16">
        <div className="mx-auto max-w-7xl border-t border-white/10 pt-10">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[9px] tracking-[0.35em] text-white/20">
                PROJECT / NL2P
              </p>

              <h2 className="mt-4 text-3xl font-light tracking-tight text-white/80 md:text-5xl">
                Building ideas into digital experiences.
              </h2>
            </div>

            <Link
              href="/#projects"
              className="group inline-flex w-fit items-center gap-3 rounded-full border border-white/15 px-6 py-3 text-xs text-white/60 transition-all duration-300 hover:border-[#A9BFFF]/40 hover:bg-[#A9BFFF]/[0.05] hover:text-white"
            >
              BACK TO THE PORTFOLIO

              <ArrowUpRight
                size={15}
                strokeWidth={1.5}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

/* =============================================================
   SECTION
============================================================= */

function Section({
  number,
  label,
  title,
  children,
}: {
  number: string;
  label: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="relative z-10 px-6 py-24 md:px-12 md:py-32 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 grid gap-6 md:grid-cols-[180px_1fr] md:items-start">
          <div className="flex items-center gap-3">
            <span className="text-[10px] tracking-[0.3em] text-[#A9BFFF]/60">
              {number}
            </span>

            <span className="h-px w-8 bg-white/10" />

            <span className="text-[9px] tracking-[0.3em] text-white/25">
              {label}
            </span>
          </div>

          <h2 className="max-w-4xl text-3xl font-light leading-tight tracking-[-0.03em] text-white/85 md:text-5xl lg:text-6xl">
            {title}
          </h2>
        </div>

        {children}
      </div>
    </section>
  );
}

/* =============================================================
   INFO CARD
============================================================= */

function InfoCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="group rounded-xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-300 hover:border-[#A9BFFF]/20 hover:bg-[#172A46]/10">
      <p className="text-[9px] tracking-[0.3em] text-[#A9BFFF]/60">
        {title.toUpperCase()}
      </p>

      <p className="mt-4 text-sm leading-6 text-white/40 transition-colors duration-300 group-hover:text-white/55">
        {text}
      </p>
    </div>
  );
}

/* =============================================================
   ARCHITECTURE DIAGRAM
============================================================= */

function ArchitectureDiagram() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#090D13] p-6 md:p-10">
      {/* Midnight wave */}
      <motion.div
        animate={{
          x: [0, 25, 0],
          opacity: [0.08, 0.13, 0.08],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-40 top-1/2 h-[350px] w-[700px] -translate-y-1/2 rounded-[50%] bg-[#172A46]/40 blur-[90px]"
      />

      <div className="relative grid gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-center">
        <ArchitectureNode
          label="INPUT"
          title="Natural Language"
        />

        <ArchitectureArrow />

        <ArchitectureNode
          label="PROCESS"
          title="AI + Structure"
          accent
        />

        <ArchitectureArrow />

        <ArchitectureNode
          label="OUTPUT"
          title="Digital Action"
        />
      </div>
    </div>
  );
}

/* =============================================================
   ARCHITECTURE NODE
============================================================= */

function ArchitectureNode({
  label,
  title,
  accent = false,
}: {
  label: string;
  title: string;
  accent?: boolean;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 15,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      whileHover={{
        y: -5,
      }}
      transition={{
        duration: 0.4,
      }}
      className={`group relative flex min-h-[150px] items-center justify-center border p-6 text-center transition-all duration-500 ${
        accent
          ? "border-[#A9BFFF]/30 bg-[#172A46]/20"
          : "border-white/10 bg-white/[0.015]"
      }`}
    >
      {accent && (
        <motion.div
          animate={{
            opacity: [0.12, 0.22, 0.12],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute inset-0 bg-[#334E7A]/20 blur-2xl"
        />
      )}

      <div className="relative z-10">
        <p
          className={`text-[9px] tracking-[0.35em] ${
            accent ? "text-[#A9BFFF]" : "text-white/25"
          }`}
        >
          {label}
        </p>

        <p className="mt-4 text-lg font-light text-white/70">
          {title}
        </p>
      </div>

      <div
        className={`absolute bottom-0 left-0 h-px w-0 transition-all duration-500 group-hover:w-full ${
          accent ? "bg-[#A9BFFF]" : "bg-white/20"
        }`}
      />
    </motion.div>
  );
}

/* =============================================================
   ARCHITECTURE ARROW
============================================================= */

function ArchitectureArrow() {
  return (
    <div className="hidden items-center justify-center md:flex">
      <motion.div
        animate={{
          x: [0, 5, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="text-[#A9BFFF]/50"
      >
        <ArrowUpRight
          size={20}
          strokeWidth={1}
        />
      </motion.div>
    </div>
  );
}

/* =============================================================
   BACKGROUND
============================================================= */

function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#07090D]">
      {/* Soft midnight atmosphere */}
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.16, 0.22, 0.16],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-40 top-10 h-[650px] w-[650px] rounded-full bg-[#172A46]/30 blur-[150px]"
      />

      {/* Large flowing wave */}
      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, -20, 0],
          rotate: [-5, -2, -5],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-[20%] top-[32%] h-[450px] w-[135%] rotate-[-4deg] rounded-[50%] bg-[#172A46]/40 blur-[65px]"
      />

      {/* Lower contour */}
      <motion.div
        animate={{
          x: [0, -30, 0],
          opacity: [0.06, 0.1, 0.06],
        }}
        transition={{
          duration: 17,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-[15%] bottom-[5%] h-[300px] w-[110%] rotate-[3deg] rounded-[50%] bg-[#334E7A]/15 blur-[75px]"
      />

      {/* Editorial horizontal lines */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute left-0 top-[25%] h-px w-full bg-white" />
        <div className="absolute left-0 top-[50%] h-px w-full bg-white" />
        <div className="absolute left-0 top-[75%] h-px w-full bg-white" />
      </div>

      {/* Grain */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.45'/%3E%3C/svg%3E")
          `,
        }}
      />
    </div>
  );
}