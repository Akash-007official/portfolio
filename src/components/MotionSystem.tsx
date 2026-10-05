"use client";

import {
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useEffect } from "react";

export function CursorGlow() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const x = useSpring(mouseX, {
    stiffness: 100,
    damping: 30,
    mass: 0.2,
  });

  const y = useSpring(mouseY, {
    stiffness: 100,
    damping: 30,
    mass: 0.2,
  });

  useEffect(() => {
    const move = (event: MouseEvent) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      style={{
        x,
        y,
      }}
      className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/[0.08] blur-3xl md:block"
    />
  );
}

/* -------------------------------------------------- */

export function ScrollProgress() {
  return (
    <motion.div
      className="fixed left-0 top-0 z-[9998] h-[2px] origin-left bg-gradient-to-r from-violet-400 via-blue-400 to-violet-500"
      style={{
        scaleX: 1,
      }}
    />
  );
}

/* -------------------------------------------------- */

export function Aurora() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        animate={{
          x: ["-10%", "15%", "-10%"],
          y: ["0%", "10%", "0%"],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[5%] top-[10%] h-[500px] w-[500px] rounded-full bg-violet-600/[0.055] blur-[160px]"
      />

      <motion.div
        animate={{
          x: ["10%", "-10%", "10%"],
          y: ["5%", "-5%", "5%"],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[5%] top-[35%] h-[550px] w-[550px] rounded-full bg-blue-600/[0.04] blur-[170px]"
      />

      <motion.div
        animate={{
          x: ["0%", "8%", "0%"],
          y: ["0%", "-8%", "0%"],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[5%] left-[30%] h-[450px] w-[450px] rounded-full bg-indigo-500/[0.035] blur-[160px]"
      />
    </div>
  );
}

/* -------------------------------------------------- */

export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 70,
        filter: "blur(8px)",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.9,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}