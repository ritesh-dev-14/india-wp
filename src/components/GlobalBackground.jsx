"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
export default function GlobalBackground({ children }) {
  const prefersReducedMotion = useReducedMotion();
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#F6F1E8] text-[#1A1714] selection:bg-[#8C6A1E]/20 selection:text-[#1A1714]">
      {/* --- GLOBAL LIGHT AMBIENT BACKGROUND & FLOWING ILLUMINATION ---
          `absolute inset-0` scoped to this relatively-positioned wrapper so
          the ambient layer grows with the full page height, not just one
          viewport. */}

      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_10%,rgba(140,106,30,0.18),transparent_52%)]" />
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_15%_50%,rgba(168,132,52,0.12),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_85%_45%,rgba(168,132,52,0.12),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_100%,rgba(94,66,15,0.10),transparent_55%)]" />

      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[24%] z-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full blur-[120px]"
        style={{ background: "radial-gradient(circle, rgba(140,106,30,0.18), transparent 72%)" }}
      />
      {!prefersReducedMotion && (
        <motion.div
          aria-hidden
          animate={{ x: ["-6%", "6%", "-6%"], y: ["-3%", "5%", "-3%"], opacity: [0.6, 0.9, 0.6] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", repeatType: "loop" }}
          className="pointer-events-none absolute left-1/2 top-[24%] z-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full blur-[120px]"
          style={{ background: "radial-gradient(circle, rgba(140,106,30,0.18), transparent 72%)" }}
        />
      )}

      <div className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.18),rgba(255,255,255,0)_32%,rgba(255,255,255,0)_100%)]" />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.06] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="pointer-events-none absolute inset-0 z-0 flex justify-between px-6 md:px-16">
        <BeamColumn duration={2.8} reverse reduced={prefersReducedMotion} />
        <BeamColumn duration={3.5} className="hidden sm:block" reduced={prefersReducedMotion} />
        <BeamColumn duration={2.2} reverse reduced={prefersReducedMotion} dense />
        <BeamColumn duration={3.8} className="hidden md:block" reduced={prefersReducedMotion} />
        <BeamColumn duration={2.6} reverse reduced={prefersReducedMotion} />
      </div>

      <div className="relative z-10 flex min-h-screen flex-col">{children}</div>

      <style>{`
        @keyframes flowGoldDown { from { background-position-y: 0px; } to { background-position-y: 220px; } }
        @keyframes flowGoldUp { from { background-position-y: 0px; } to { background-position-y: -220px; } }
      `}</style>
    </div>
  );
}

function BeamColumn({ duration, reverse, dense, className = "", reduced }) {
  const tileHeight = dense ? 120 : 220;
  return (
    <div
      className={`relative h-full w-[1.5px] overflow-hidden opacity-70 ${className}`}
      style={{
        backgroundImage:
          `linear-gradient(to bottom, transparent, rgba(140,106,30,0.24) 15%, rgba(140,106,30,0.24) 85%, transparent), ` +
          `repeating-linear-gradient(180deg, transparent 0px, transparent ${tileHeight * 0.35}px, rgba(190,154,76,0.8) ${tileHeight * 0.5}px, rgba(190,154,76,0.8) ${tileHeight * 0.62}px, transparent ${tileHeight * 0.85}px, transparent ${tileHeight}px)`,
        backgroundSize: `100% 100%, 100% ${tileHeight}px`,
        filter: "drop-shadow(0 0 4px rgba(190,154,76,0.4))",
        animation: reduced ? "none" : `${reverse ? "flowGoldUp" : "flowGoldDown"} ${duration}s linear infinite`,
      }}
    />
  );
}