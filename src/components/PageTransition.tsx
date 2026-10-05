"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function PageTransition() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setIsVisible(true);

    const timer = window.setTimeout(() => {
      setIsVisible(false);
    }, 550);

    return () => window.clearTimeout(timer);
  }, [pathname]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        pointerEvents: isVisible ? "auto" : "none",
      }}
      transition={{
        duration: 0.45,
        ease: "easeOut",
      }}
      className="pointer-events-none fixed inset-0 z-[9999] bg-[#050505]"
    >
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{
          scaleX: isVisible ? 1 : 0,
        }}
        transition={{
          duration: 0.55,
          ease: [0.76, 0, 0.24, 1],
        }}
        className="absolute left-0 top-0 h-px w-full origin-left bg-violet-400"
      />

      <div className="flex h-full items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{
            opacity: isVisible ? 1 : 0,
            y: isVisible ? 0 : -15,
          }}
          transition={{
            duration: 0.4,
            delay: 0.08,
          }}
          className="text-[10px] tracking-[0.45em] text-white/30"
        >
          AKASH H
        </motion.div>
      </div>
    </motion.div>
  );
}