"use client";

import { Aurora, CursorGlow } from "./MotionSystem";

export default function Experience() {
  return (
    <>
      <Aurora />
      <CursorGlow />

      <div className="pointer-events-none fixed inset-0 z-[-1] bg-[#050505]" />

      <div className="pointer-events-none fixed inset-0 z-[-1] opacity-[0.025]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>
    </>
  );
}