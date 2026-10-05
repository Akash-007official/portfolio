"use client";

import { motion } from "framer-motion";

const journey = [
  {
    year: "2021 – 2024",
    title: "B.Sc. CT",
    place: "Hindusthan College of Arts and Science",
  },
  {
    year: "2024 – 2026",
    title: "MCA",
    place: "Hindusthan College of Arts and Science",
  },
  {
    year: "2024 – 2026",
    title: "Internships",
    place: "LearnLike · Do365",
  },
  {
    year: "2025 – Present",
    title: "Projects & Growth",
    place: "AI · Automation · Real-world Solutions",
  },
];

export default function Journey() {
  return (
    <section
      id="journey"
      className="relative overflow-hidden border-b border-white/[0.08] bg-[#07090D] text-white"
    >
      {/* =========================================================
          OBSIDIAN WAVE BACKGROUND
      ========================================================= */}

      {/* Soft ambient light */}
      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          opacity: [0.08, 0.13, 0.08],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -left-40 top-20 h-[520px] w-[520px] rounded-full bg-[#172A46]/60 blur-[150px]"
      />

      {/* Main flowing wave */}
      <motion.div
        animate={{
          x: [0, 25, 0],
          scaleY: [1, 1.04, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-[15%] top-[25%] h-[430px] w-[75%] rotate-[-7deg] rounded-[45%] bg-[#172A46]/55 blur-[70px]"
      />

      {/* Lower contour */}
      <motion.div
        animate={{
          x: [0, -25, 0],
          opacity: [0.04, 0.08, 0.04],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -bottom-40 left-[15%] h-[350px] w-[70%] rounded-[50%] bg-[#334E7A]/30 blur-[100px]"
      />

      {/* Editorial horizontal lines */}
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

      {/* =========================================================
          MAIN LAYOUT
      ========================================================= */}

      <div className="relative grid md:grid-cols-[120px_1fr]">

        {/* Section Number */}
        <motion.div
          initial={{
            opacity: 0,
            x: -20,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="border-r border-white/[0.08] p-8 md:p-12"
        >
          <span className="text-3xl font-light text-white/25">
            06
          </span>
        </motion.div>

        {/* =====================================================
            CONTENT
        ===================================================== */}

        <div className="px-6 py-20 md:px-12 md:py-32 lg:px-16">

          {/* Header */}
          <motion.div
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
              margin: "-100px",
            }}
            transition={{
              duration: 0.8,
            }}
          >
            <p className="text-[10px] tracking-[0.4em] text-[#A9BFFF]/70">
              MY JOURNEY
            </p>

            <h2 className="mt-5 max-w-3xl text-[clamp(2.5rem,5vw,5rem)] font-light leading-[0.95] tracking-[-0.06em]">
              Learning.
              <br />
              <span className="text-white/30">
                Building. Growing.
              </span>
            </h2>

            <p className="mt-7 max-w-xl text-sm leading-7 text-white/30 md:text-base">
              A continuous journey of learning, experimenting,
              building projects and turning ideas into practical
              digital solutions.
            </p>
          </motion.div>

          {/* ===================================================
              TIMELINE
          =================================================== */}

          <div className="relative mt-20 md:mt-28">

            {/* Desktop base timeline */}
            <div className="absolute left-0 right-0 top-[6px] hidden h-px bg-white/[0.08] md:block" />

            {/* Animated timeline */}
            <motion.div
              initial={{
                scaleX: 0,
              }}
              whileInView={{
                scaleX: 1,
              }}
              viewport={{
                once: true,
                margin: "-100px",
              }}
              transition={{
                duration: 1.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute left-0 right-0 top-[6px] hidden h-px origin-left bg-gradient-to-r from-[#A9BFFF]/60 via-[#334E7A]/40 to-transparent md:block"
            />

            {/* Mobile base timeline */}
            <div className="absolute bottom-0 left-[5px] top-0 w-px bg-white/[0.08] md:hidden" />

            {/* Animated mobile timeline */}
            <motion.div
              initial={{
                scaleY: 0,
              }}
              whileInView={{
                scaleY: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 1.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute bottom-0 left-[5px] top-0 w-px origin-top bg-gradient-to-b from-[#A9BFFF]/60 via-[#334E7A]/40 to-transparent md:hidden"
            />

            {/* Journey Items */}
            <div className="grid gap-12 md:grid-cols-4 md:gap-8">

              {journey.map((item, index) => (
                <motion.div
                  key={`${item.year}-${item.title}`}
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
                    duration: 0.7,
                    delay: index * 0.15,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{
                    y: -5,
                  }}
                  className="group relative pl-10 md:pl-0"
                >

                  {/* Timeline Dot */}
                  <motion.div
                    initial={{
                      scale: 0,
                    }}
                    whileInView={{
                      scale: 1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.15 + 0.25,
                      type: "spring",
                      stiffness: 300,
                      damping: 18,
                    }}
                    className="absolute left-0 top-0 z-10 flex h-[11px] w-[11px] items-center justify-center rounded-full border border-[#A9BFFF]/60 bg-[#07090D] md:left-0"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#A9BFFF]/80 transition-all duration-300 group-hover:scale-150 group-hover:bg-[#A9BFFF]" />
                  </motion.div>

                  {/* Card */}
                  <div className="relative rounded-2xl border border-white/[0.07] bg-white/[0.018] p-6 transition-all duration-500 group-hover:border-[#A9BFFF]/20 group-hover:bg-[#172A46]/20 md:mt-10 md:min-h-[190px]">

                    {/* Number */}
                    <span className="absolute right-5 top-5 text-[10px] tracking-[0.2em] text-white/15">
                      0{index + 1}
                    </span>

                    {/* Year */}
                    <p className="text-xs tracking-[0.12em] text-[#A9BFFF]/65">
                      {item.year}
                    </p>

                    {/* Title */}
                    <h3 className="mt-6 text-xl font-medium tracking-[-0.03em] text-white/85 transition-colors duration-300 group-hover:text-white">
                      {item.title}
                    </h3>

                    {/* Place */}
                    <p className="mt-3 max-w-[210px] text-xs leading-6 text-white/30 transition-colors duration-300 group-hover:text-white/50">
                      {item.place}
                    </p>

                    {/* Hover Line */}
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
                  </div>
                </motion.div>
              ))}

            </div>
          </div>

          {/* ===================================================
              BOTTOM LABEL
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
              delay: 0.5,
            }}
            className="mt-16 flex items-center justify-between border-t border-white/[0.08] pt-6"
          >
            <span className="text-[10px] tracking-[0.3em] text-white/20">
              THE JOURNEY CONTINUES
            </span>

            <span className="hidden text-[10px] tracking-[0.2em] text-white/20 sm:block">
              2021 — PRESENT
            </span>
          </motion.div>

        </div>
      </div>
    </section>
  );
}