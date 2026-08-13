"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
export default function GlobalBackground({ children }) {
  const prefersReducedMotion = useReducedMotion();
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#FAF8F5] text-[#1A1714] selection:bg-[#8C6A1E]/20 selection:text-[#1A1714]">
      {/* --- GLOBAL LIGHT AMBIENT BACKGROUND & FLOWING ILLUMINATION ---
          `absolute inset-0` scoped to this relatively-positioned wrapper so
          the ambient layer grows with the full page height, not just one
          viewport. */}

      {/* 1. Base warm organic gradients — brighter, layered depth */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_10%,rgba(140,106,30,0.28),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_15%_50%,rgba(168,132,52,0.20),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_85%_45%,rgba(168,132,52,0.20),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_95%,rgba(107,29,29,0.14),transparent_65%)]" />

      {/* 2. Slow-drifting gold aura */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 z-0 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[110px]"
        style={{ background: "radial-gradient(circle, rgba(140,106,30,0.30), transparent 70%)" }}
      />
      {!prefersReducedMotion && (
        <motion.div
          aria-hidden
          animate={{ x: ["-8%", "8%", "-8%"], y: ["-4%", "6%", "-4%"], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", repeatType: "loop" }}
          className="pointer-events-none absolute left-1/2 top-1/3 z-0 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[110px]"
          style={{ background: "radial-gradient(circle, rgba(140,106,30,0.30), transparent 70%)" }}
        />
      )}

      {/* 3. Fine ambient grain */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.06] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* 4. Structural column lines — continuously flowing light via a
             repeating CSS gradient animated on background-position. This
             loops with zero restart artifact: the pattern tiles perfectly,
             so there is no moment where the strand has to "reset". */}
      <div className="pointer-events-none absolute inset-0 z-0 flex justify-between px-6 md:px-16">
        <BeamColumn duration={2.2} reverse reduced={prefersReducedMotion} />
        <BeamColumn duration={3} className="hidden sm:block" reduced={prefersReducedMotion} />
        <BeamColumn duration={1.6} reverse reduced={prefersReducedMotion} dense />
        <BeamColumn duration={3.4} className="hidden md:block" reduced={prefersReducedMotion} />
        <BeamColumn duration={2.4} reverse reduced={prefersReducedMotion} />
      </div>

      {/* --- CONTENT LAYER --- */}
      <div className="relative z-10 flex min-h-screen flex-col">{children}</div>

      <style>{`
        @keyframes flowGoldDown { from { background-position-y: 0px; } to { background-position-y: 240px; } }
        @keyframes flowGoldUp { from { background-position-y: 0px; } to { background-position-y: -240px; } }
      `}</style>
    </div>
  );
}

function BeamColumn({ duration, reverse, dense, className = "", reduced }) {
  const tileHeight = dense ? 120 : 240;
  return (
    <div
      className={`relative h-full w-[2px] overflow-hidden ${className}`}
      style={{
        backgroundImage:
          `linear-gradient(to bottom, transparent, rgba(140,106,30,0.35) 15%, rgba(140,106,30,0.35) 85%, transparent), ` +
          `repeating-linear-gradient(180deg, transparent 0px, transparent ${tileHeight * 0.35}px, rgba(232,195,90,0.95) ${tileHeight * 0.5}px, rgba(232,195,90,0.95) ${tileHeight * 0.62}px, transparent ${tileHeight * 0.85}px, transparent ${tileHeight}px)`,
        backgroundSize: `100% 100%, 100% ${tileHeight}px`,
        filter: "drop-shadow(0 0 6px rgba(232,195,90,0.7))",
        animation: reduced ? "none" : `${reverse ? "flowGoldUp" : "flowGoldDown"} ${duration}s linear infinite`,
      }}
    />
  );
}