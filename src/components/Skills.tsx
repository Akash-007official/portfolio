"use client";

import { motion } from "framer-motion";

/* =========================================================
   SKILL LOGOS
========================================================= */

function PythonLogo() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true">
      <path
        fill="#3776AB"
        d="M11.9 2c-2.3 0-4.1.9-4.1 3.1v2.1h4.2v.7H6.2C3.8 7.9 2 9.7 2 12s1.8 4.1 4.2 4.1h2.1V13c0-2.3 1.8-4.1 4.1-4.1h4.1c2.3 0 4.1-1.8 4.1-4.1V4.1C20.6 2.8 18.8 2 16.1 2h-4.2Zm-2.3 2.1c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2Z"
      />
      <path
        fill="#FFD43B"
        d="M12.1 22c2.3 0 4.1-.9 4.1-3.1v-2.1H12v-.7h5.8c2.4 0 4.2-1.8 4.2-4.1s-1.8-4.1-4.2-4.1h-2.1V11c0 2.3-1.8 4.1-4.1 4.1H7.5c-2.3 0-4.1 1.8-4.1 4.1v.7C3.4 21.2 5.2 22 7.9 22h4.2Zm2.3-2.1c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2 1.2.5 1.2 1.2-.5 1.2-1.2 1.2Z"
      />
    </svg>
  );
}

function FastAPILogo() {
  return (
    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#05998B] text-white">
      <span className="text-[17px] font-bold">⚡</span>
    </div>
  );
}

function LLMLogo() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true">
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        d="M12 3.2c-2.8 0-4.8 1.5-5.5 3.6-2.4.2-4.1 1.8-4.1 4.2 0 1.8 1 3.3 2.5 4.1-.1 2.6 1.8 4.5 4.2 4.5 1.1 0 2.1-.4 2.9-1 1 .9 2.2 1.4 3.6 1.4 2.6 0 4.7-1.8 4.9-4.3 1.4-.7 2.3-2.2 2.3-3.8 0-2.4-1.8-4.1-4.1-4.4C18 4.9 15.8 3.2 12 3.2Z"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        d="M7 8.2c1.7 1 3.4 1.5 5.1 1.5 1.8 0 3.5-.5 5-1.5M5.1 12c1.9.5 3.9.6 5.8.1 2-.5 3.8-1.4 5.4-2.7M6.8 15.8c1.7-.1 3.3-.6 4.7-1.5 1.4-.9 2.5-2.1 3.3-3.6"
      />
    </svg>
  );
}

function RAGLogo() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true">
      <ellipse cx="12" cy="6" rx="7" ry="3" fill="#A78BFA" />
      <path
        fill="#8B5CF6"
        d="M5 6v5c0 1.7 3.1 3 7 3s7-1.3 7-3V6c0 1.7-3.1 3-7-3S5 7.7 5 6Z"
      />
      <path
        fill="#7C3AED"
        d="M5 11v5c0 1.7 3.1 3 7 3s7-1.3 7-3v-5c0 1.7-3.1 3-7 3s-7-1.3-7-3Z"
      />
    </svg>
  );
}

function N8nLogo() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true">
      <circle cx="5" cy="12" r="2.2" fill="#EA4B71" />
      <circle cx="12" cy="8" r="2.2" fill="#EA4B71" />
      <circle cx="19" cy="5" r="2.2" fill="#EA4B71" />
      <circle cx="19" cy="12" r="2.2" fill="#EA4B71" />
      <circle cx="19" cy="19" r="2.2" fill="#EA4B71" />

      <path
        d="M7 11l3-2M14 7l3-1M14 9l3 3M14 10l3 7"
        stroke="#EA4B71"
        strokeWidth="1.5"
        fill="none"
      />
    </svg>
  );
}

function SQLLogo() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true">
      <ellipse cx="12" cy="5" rx="7" ry="3" fill="#3B82F6" />
      <path
        fill="#2563EB"
        d="M5 5v5c0 1.7 3.1 3 7 3s7-1.3 7-3V5c0 1.7-3.1 3-7-3S5 6.7 5 5Z"
      />
      <path
        fill="#1D4ED8"
        d="M5 10v5c0 1.7 3.1 3 7 3s7-1.3 7-3v-5c0 1.7-3.1 3-7 3s-7-1.3-7-3Z"
      />
      <ellipse cx="12" cy="5" rx="7" ry="3" fill="#60A5FA" />
    </svg>
  );
}

function RestLogo() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true">
      <path
        d="M4 9.5a8 8 0 0 1 15.5-2.7A5.5 5.5 0 0 1 18 17H7a5 5 0 0 1-3-7.5Z"
        fill="none"
        stroke="#60A5FA"
        strokeWidth="1.6"
      />
      <text
        x="7"
        y="14"
        fontSize="5"
        fill="#60A5FA"
        fontWeight="bold"
      >
        API
      </text>
    </svg>
  );
}

function GitLogo() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true">
      <path
        fill="#F05032"
        d="M21.4 11.3 12.7 2.6a2 2 0 0 0-2.8 0L8 4.5l2.3 2.3c.7-.2 1.5 0 2 .5.6.6.7 1.4.5 2.1l2.2 2.2c.7-.2 1.5 0 2 .5.8.8.8 2.1 0 2.9-.8.8-2.1.8-2.9 0-.5-.5-.7-1.3-.5-2l-2.1-2.1v5.5c.3.1.6.2.8.5.8.8.8 2.1 0 2.9-.8.8-2.1.8-2.9 0-.8-.8-.8-2.1 0-2.9.3-.3.6-.4.9-.5V13c-.3-.1-.6-.2-.9-.5-.7-.7-.8-1.7-.3-2.5L7 7.8 4.6 5.4 2.6 7.3a2 2 0 0 0 0 2.8l8.7 8.7a2 2 0 0 0 2.8 0l7.3-7.3a2 2 0 0 0 0-2.8Z"
      />
    </svg>
  );
}

function NextLogo() {
  return (
    <div className="flex h-7 w-7 items-center justify-center rounded-full border border-white/40 text-[15px] font-semibold text-white">
      N
    </div>
  );
}

function ReactLogo() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true">
      <ellipse
        cx="12"
        cy="12"
        rx="9"
        ry="3.5"
        fill="none"
        stroke="#61DAFB"
        strokeWidth="1.2"
      />
      <ellipse
        cx="12"
        cy="12"
        rx="9"
        ry="3.5"
        transform="rotate(60 12 12)"
        fill="none"
        stroke="#61DAFB"
        strokeWidth="1.2"
      />
      <ellipse
        cx="12"
        cy="12"
        rx="9"
        ry="3.5"
        transform="rotate(120 12 12)"
        fill="none"
        stroke="#61DAFB"
        strokeWidth="1.2"
      />
      <circle cx="12" cy="12" r="1.7" fill="#61DAFB" />
    </svg>
  );
}

function PromptLogo() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true">
      <path
        d="M4 5.5h16v10H9l-4 3v-3.5H4v-9Z"
        fill="none"
        stroke="#A78BFA"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="9" cy="10.5" r="1" fill="#A78BFA" />
      <circle cx="12" cy="10.5" r="1" fill="#A78BFA" />
      <circle cx="15" cy="10.5" r="1" fill="#A78BFA" />
    </svg>
  );
}

function MCPLogo() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true">
      <circle cx="12" cy="4" r="2" fill="#A78BFA" />
      <circle cx="5" cy="9" r="2" fill="#A78BFA" />
      <circle cx="19" cy="9" r="2" fill="#A78BFA" />
      <circle cx="7" cy="18" r="2" fill="#A78BFA" />
      <circle cx="17" cy="18" r="2" fill="#A78BFA" />

      <path
        d="M12 6 6.7 8M12 6l5.3 2M6.5 10.5l.5 5.5M17.5 10.5 17 16M9 18h6"
        stroke="#A78BFA"
        strokeWidth="1.3"
      />
    </svg>
  );
}

/* =========================================================
   SKILLS DATA
========================================================= */

const skills = [
  {
    name: "Python",
    logo: <PythonLogo />,
  },
  {
    name: "FastAPI",
    logo: <FastAPILogo />,
  },
  {
    name: "LLMs",
    logo: <LLMLogo />,
  },
  {
    name: "RAG",
    logo: <RAGLogo />,
  },
  {
    name: "n8n",
    logo: <N8nLogo />,
  },
  {
    name: "SQL",
    logo: <SQLLogo />,
  },
  {
    name: "REST APIs",
    logo: <RestLogo />,
  },
  {
    name: "Git",
    logo: <GitLogo />,
  },
  {
    name: "Next.js",
    logo: <NextLogo />,
  },
  {
    name: "React",
    logo: <ReactLogo />,
  },
  {
    name: "Prompting",
    logo: <PromptLogo />,
  },
  {
    name: "MCP",
    logo: <MCPLogo />,
  },
];

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden border-b border-white/[0.08] bg-[#07090D] px-6 py-28 text-white md:px-12 md:py-40 lg:px-16"
    >
      {/* =====================================================
          OBSIDIAN WAVE BACKGROUND
      ===================================================== */}

      {/* Ambient midnight light */}
      <motion.div
        animate={{
          x: [0, 25, 0],
          y: [0, -20, 0],
          opacity: [0.06, 0.11, 0.06],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -left-40 top-10 h-[520px] w-[520px] rounded-full bg-[#172A46]/70 blur-[150px]"
      />

      {/* Main flowing wave */}
      <motion.div
        animate={{
          x: [0, -25, 0],
          scaleY: [1, 1.04, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-[15%] top-[28%] h-[430px] w-[75%] rotate-[-7deg] rounded-[45%] bg-[#172A46]/55 blur-[70px]"
      />

      {/* Lower contour */}
      <motion.div
        animate={{
          x: [0, 25, 0],
          opacity: [0.035, 0.07, 0.035],
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
        <div className="absolute left-0 right-0 top-[18%] h-px bg-white" />
        <div className="absolute left-0 right-0 top-[48%] h-px bg-white" />
        <div className="absolute left-0 right-0 top-[78%] h-px bg-white" />
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

        {/* Section Header */}
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
          <div className="mb-6 flex items-center gap-4">
            <span className="text-[10px] tracking-[0.4em] text-[#A9BFFF]/70">
              07
            </span>

            <div className="h-px w-12 bg-white/15" />

            <span className="text-[10px] tracking-[0.35em] text-white/35">
              SKILLS
            </span>
          </div>

          <h2 className="max-w-5xl text-[clamp(3rem,7vw,7rem)] font-light leading-[0.9] tracking-[-0.06em]">
            Tools I use
            <br />
            <span className="text-white/25">
              to build things.
            </span>
          </h2>

          <p className="mt-8 max-w-xl text-sm leading-7 text-white/35 md:text-base">
            A practical toolkit across software development,
            artificial intelligence, APIs, automation and
            modern web technologies.
          </p>
        </motion.div>

        {/* ===================================================
            SKILLS GRID
        =================================================== */}

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">

          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
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
                duration: 0.6,
                delay: (index % 4) * 0.08,
              }}
              whileHover={{
                y: -5,
              }}
              className="group relative min-h-[150px] overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.018] p-6 transition-all duration-500 hover:border-[#A9BFFF]/20 hover:bg-[#172A46]/20"
            >
              {/* Subtle hover surface */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#172A46]/0 via-[#172A46]/0 to-[#172A46]/30 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Corner marker */}
              <div className="absolute right-5 top-5 h-1.5 w-1.5 rounded-full bg-white/10 transition-all duration-300 group-hover:bg-[#A9BFFF]" />

              {/* Logo */}
              <motion.div
                whileHover={{
                  scale: 1.08,
                  rotate: 2,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 15,
                }}
                className="relative flex h-10 w-10 items-center justify-center"
              >
                {skill.logo}
              </motion.div>

              {/* Skill name */}
              <div className="relative mt-8">
                <h3 className="text-sm font-medium text-white/65 transition-colors duration-300 group-hover:text-white md:text-base">
                  {skill.name}
                </h3>
              </div>

              {/* Bottom editorial line */}
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
            </motion.div>
          ))}

        </div>

        {/* ===================================================
            BOTTOM TEXT
        =================================================== */}

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
          <span className="text-[10px] tracking-[0.3em] text-white/20">
            CONTINUOUSLY LEARNING
          </span>

          <span className="text-[10px] tracking-[0.2em] text-white/20">
            12 TOOLS
          </span>
        </motion.div>
      </div>
    </section>
  );
}