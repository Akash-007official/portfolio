"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const workflow = [
  {
    step: "01",
    title: "Natural Language",
    description:
      "A user describes the desired task in simple, natural language.",
  },
  {
    step: "02",
    title: "Intent",
    description:
      "The system identifies intent, entities, actions, and required context.",
  },
  {
    step: "03",
    title: "Structured Prompt",
    description:
      "The instruction is transformed into a structured, reusable format.",
  },
  {
    step: "04",
    title: "Workflow",
    description:
      "The structured result can connect with APIs, tools, and automation.",
  },
];

const technologies = [
  "Python",
  "FastAPI",
  "LLMs",
  "Prompt Engineering",
  "RAG",
  "REST APIs",
  "Automation",
];

export default function NL2PCaseStudy() {
  return (
    <section
      id="nl2p"
      className="relative overflow-hidden bg-[#07090D] px-6 py-28 text-[#F2F2F2] md:px-12 md:py-36 lg:px-16"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Main flowing wave */}
        <motion.div
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -15, 15, 0],
            rotate: [0, 1, -0.5, 0],
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-[18%] top-[12%] h-[500px] w-[105%] rotate-[-7deg] rounded-[45%] bg-[#172A46]/30 blur-[90px]"
        />

        {/* Secondary atmosphere */}
        <div className="absolute right-[-15%] top-[45%] h-[450px] w-[550px] rounded-full bg-[#334E7A]/[0.07] blur-[120px]" />

        {/* Editorial lines */}
        <div className="absolute inset-0 opacity-[0.035]">
          <div className="absolute left-0 right-0 top-[18%] h-px bg-white" />
          <div className="absolute left-0 right-0 top-[42%] h-px bg-white" />
          <div className="absolute left-0 right-0 top-[68%] h-px bg-white" />
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
            HEADER
        ========================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          {/* Section label */}
          <div className="mb-8 flex items-center gap-4">
            <span className="text-[10px] tracking-[0.4em] text-[#A9BFFF]">
              05
            </span>

            <div className="h-px w-12 bg-white/15" />

            <span className="text-[10px] tracking-[0.35em] text-white/35">
              FEATURED PROJECT
            </span>
          </div>

          {/* Project identity */}
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <p className="text-[10px] tracking-[0.4em] text-white/25">
                AI / AUTOMATION / CASE STUDY
              </p>

              <h2 className="mt-6 text-[clamp(5rem,13vw,12rem)] font-semibold leading-[0.72] tracking-[-0.09em]">
                NL<span className="text-[#A9BFFF]">2</span>P
              </h2>

              <p className="mt-8 max-w-xl text-lg leading-8 text-white/45 md:text-xl">
                Turning natural language into structured prompts and
                workflows that can connect with software, APIs, and
                automation systems.
              </p>
            </div>

            {/* Project metadata */}
            <div className="border-t border-white/[0.08] lg:border-l lg:border-t-0 lg:pl-10">
              <div className="grid grid-cols-1 divide-y divide-white/[0.08]">
                <div className="flex items-center justify-between py-4">
                  <span className="text-[9px] tracking-[0.3em] text-white/25">
                    ROLE
                  </span>

                  <span className="text-xs text-white/55">
                    AI / FULL STACK
                  </span>
                </div>

                <div className="flex items-center justify-between py-4">
                  <span className="text-[9px] tracking-[0.3em] text-white/25">
                    FOCUS
                  </span>

                  <span className="text-xs text-white/55">
                    NLP → STRUCTURED OUTPUT
                  </span>
                </div>

                <div className="flex items-center justify-between py-4">
                  <span className="text-[9px] tracking-[0.3em] text-white/25">
                    STATUS
                  </span>

                  <span className="flex items-center gap-2 text-xs text-white/55">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#A9BFFF]" />
                    IN PROGRESS
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="my-20 h-px bg-white/[0.08] md:my-24" />

        {/* =========================================================
            THE PROBLEM
        ========================================================= */}

        <div className="grid gap-14 md:grid-cols-2 md:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[10px] tracking-[0.35em] text-[#A9BFFF]">
              THE PROBLEM
            </p>

            <h3 className="mt-6 max-w-xl text-3xl font-light leading-tight tracking-[-0.04em] md:text-5xl">
              People know what they want.
              <br />
              <span className="text-white/25">
                Software needs structure.
              </span>
            </h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-xl text-sm leading-8 text-white/40 md:text-base"
          >
            <p>
              NL2P explores how natural language can become a bridge between
              human instructions and executable digital workflows.
            </p>

            <p className="mt-6">
              Instead of requiring users to understand complex structures,
              APIs, or workflow logic, the system starts with the way people
              naturally describe a task.
            </p>
          </motion.div>
        </div>

        {/* =========================================================
            SYSTEM FLOW
        ========================================================= */}

        <div className="mt-28">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="mb-10 flex items-center gap-3">
              <Sparkles size={14} className="text-[#A9BFFF]" />

              <span className="text-[10px] tracking-[0.3em] text-white/30">
                THE SYSTEM
              </span>
            </div>
          </motion.div>

          <div className="grid border-l border-white/[0.08] md:grid-cols-4 md:border-l-0 md:border-t">
            {workflow.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                }}
                whileHover={{
                  backgroundColor: "rgba(23,42,70,0.15)",
                }}
                className="group relative border-b border-white/[0.08] p-7 transition-colors md:border-b-0 md:border-r md:p-8 first:md:border-l"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] tracking-[0.3em] text-[#A9BFFF]/70">
                    {item.step}
                  </span>

                  {index < workflow.length - 1 && (
                    <ArrowRight
                      size={15}
                      className="hidden text-white/15 md:block"
                    />
                  )}
                </div>

                <h4 className="mt-10 text-lg font-medium tracking-tight">
                  {item.title}
                </h4>

                <p className="mt-4 text-sm leading-7 text-white/30">
                  {item.description}
                </p>

                <div className="absolute bottom-0 left-0 h-px w-0 bg-[#A9BFFF] transition-all duration-500 group-hover:w-full" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* =========================================================
            CONCEPTUAL DEMO
        ========================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0C1118]/60 backdrop-blur-sm"
        >
          {/* Demo header */}
          <div className="flex items-center justify-between border-b border-white/[0.08] px-6 py-4 md:px-8">
            <span className="text-[9px] tracking-[0.3em] text-white/25">
              CONCEPTUAL FLOW
            </span>

            <span className="flex items-center gap-2 text-[9px] tracking-[0.2em] text-white/20">
              <span className="h-1.5 w-1.5 rounded-full bg-[#A9BFFF]" />
              NL2P
            </span>
          </div>

          <div className="grid gap-8 p-6 md:grid-cols-[1fr_auto_1fr] md:items-center md:p-12">
            {/* Input */}
            <div>
              <p className="mb-4 text-[9px] tracking-[0.3em] text-white/25">
                NATURAL LANGUAGE INPUT
              </p>

              <motion.div
                whileHover={{
                  borderColor: "rgba(169,191,255,0.22)",
                }}
                className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-6 transition-colors"
              >
                <p className="text-sm leading-7 text-white/55">
                  "Create a workflow that receives a customer request,
                  summarizes it, and sends the result to the team."
                </p>
              </motion.div>
            </div>

            {/* Connector */}
            <div className="flex justify-center">
              <ArrowDown
                size={20}
                className="text-[#A9BFFF]/60 md:hidden"
              />

              <ArrowRight
                size={20}
                className="hidden text-[#A9BFFF]/60 md:block"
              />
            </div>

            {/* Structured output */}
            <div>
              <p className="mb-4 text-[9px] tracking-[0.3em] text-white/25">
                STRUCTURED OUTPUT
              </p>

              <motion.div
                whileHover={{
                  borderColor: "rgba(169,191,255,0.22)",
                  backgroundColor: "rgba(169,191,255,0.025)",
                }}
                className="rounded-xl border border-[#A9BFFF]/10 bg-[#A9BFFF]/[0.015] p-6 font-mono text-[11px] leading-7 text-white/45 transition-colors"
              >
                <span className="text-[#A9BFFF]/70">{"{"}</span>
                <br />

                <span className="text-white/35">
                  &nbsp;&nbsp;"intent":
                </span>{" "}
                "customer_request",
                <br />

                <span className="text-white/35">
                  &nbsp;&nbsp;"action":
                </span>{" "}
                "summarize",
                <br />

                <span className="text-white/35">
                  &nbsp;&nbsp;"output":
                </span>{" "}
                "team_message",
                <br />

                <span className="text-white/35">
                  &nbsp;&nbsp;"next":
                </span>{" "}
                "send_to_team"
                <br />

                <span className="text-[#A9BFFF]/70">{"}"}</span>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* =========================================================
            TECHNOLOGY
        ========================================================= */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20"
        >
          <p className="mb-6 text-[9px] tracking-[0.3em] text-white/25">
            TECHNOLOGY
          </p>

          <div className="flex flex-wrap gap-3">
            {technologies.map((technology) => (
              <motion.span
                key={technology}
                whileHover={{
                  y: -2,
                  borderColor: "rgba(169,191,255,0.3)",
                  color: "rgba(242,242,242,0.8)",
                }}
                className="rounded-full border border-white/[0.08] px-4 py-2 text-xs text-white/40 transition-colors"
              >
                {technology}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* =========================================================
            BOTTOM CTA
        ========================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 flex flex-col gap-8 border-t border-white/[0.08] pt-8 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <p className="max-w-xl text-sm leading-7 text-white/30">
              NL2P is an ongoing exploration into making software workflows
              easier to describe, generate, and connect.
            </p>

            <Link
              href="/nl2p"
              className="group mt-7 inline-flex items-center gap-3 text-[10px] tracking-[0.3em] text-white/60 transition-colors hover:text-[#A9BFFF]"
            >
              VIEW FULL CASE STUDY
              <ArrowDownRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
              />
            </Link>
          </div>

          <span className="text-[9px] tracking-[0.3em] text-[#A9BFFF]/45">
            IN PROGRESS
          </span>
        </motion.div>
      </div>
    </section>
  );
}