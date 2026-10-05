"use client";

import { motion } from "framer-motion";

const technologies = [
  "PYTHON",
  "FASTAPI",
  "REACT",
  "NEXT.JS",
  "AI",
  "LLMs",
  "RAG",
  "LANGCHAIN",
  "N8N",
  "REST APIs",
  "GIT",
  "GITHUB",
];

export default function TechMarquee() {
  return (
    <section className="overflow-hidden border-y border-white/[0.06] bg-[#050505] py-5">
      <motion.div
        className="flex w-max items-center"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {[...technologies, ...technologies].map((tech, index) => (
          <div
            key={`${tech}-${index}`}
            className="flex items-center"
          >
            <span className="mx-6 text-[11px] font-medium tracking-[0.25em] text-white/35 md:text-xs">
              {tech}
            </span>

            <span className="text-violet-400/40">•</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}