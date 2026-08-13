"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";

/**
 * WE PROMOTE INDIA — Global Background
 * Light theme, but not white and not cream: a "stone/putty" greige
 * (#EDEBE5) — the kind of in-between neutral branding and design studios
 * use so the page reads as considered, not a default white canvas.
 * Ambient light stays graphite/neutral; coral appears once, kept rare.
 */
export default function GlobalBackground({ children }) {
  const prefersReducedMotion = useReducedMotion();
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#EDEBE5] text-[#17181A] selection:bg-[#17181A]/10 selection:text-[#17181A]">
      {/* --- STONE-NEUTRAL AMBIENT BACKGROUND --- */}

      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_8%,rgba(255,255,255,0.6),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_15%_50%,rgba(23,24,26,0.035),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_85%_45%,rgba(23,24,26,0.035),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_100%,rgba(23,24,26,0.05),transparent_55%)]" />

      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[22%] z-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full blur-[130px]"
        style={{ background: "radial-gradient(circle, rgba(255,255,255,0.55), transparent 72%)" }}
      />
      {!prefersReducedMotion && (
        <motion.div
          aria-hidden
          animate={{
            x: ["-6%", "6%", "-6%"],
            y: ["-3%", "5%", "-3%"],
            opacity: [0.5, 0.85, 0.5],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", repeatType: "loop" }}
          className="pointer-events-none absolute left-1/2 top-[22%] z-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full blur-[130px]"
          style={{ background: "radial-gradient(circle, rgba(255,255,255,0.55), transparent 72%)" }}
        />
      )}

      {/* one deliberate, rare coral glow — brand energy, used once */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[6%] right-[8%] z-0 h-[340px] w-[340px] rounded-full blur-[120px]"
        style={{ background: "radial-gradient(circle, rgba(224,90,71,0.06), transparent 70%)" }}
      />

      {/* near-invisible architectural grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 hidden sm:block"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(23,24,26,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(23,24,26,0.035) 1px, transparent 1px)",
          backgroundSize: "clamp(80px,10vw,140px) clamp(80px,10vw,140px)",
          maskImage: "linear-gradient(to bottom, transparent, black 8%, black 92%, transparent)",
        }}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.035] mix-blend-multiply"
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
        {/* the one coral strand */}
        <BeamColumn duration={2.6} reverse reduced={prefersReducedMotion} coral />
      </div>

      <div className="relative z-10 flex min-h-screen flex-col">{children}</div>

      <style>{`
        @keyframes flowStoneDown { from { background-position-y: 0px; } to { background-position-y: 220px; } }
        @keyframes flowStoneUp { from { background-position-y: 0px; } to { background-position-y: -220px; } }
      `}</style>
    </div>
  );
}

function BeamColumn({ duration, reverse, dense, coral, className = "", reduced }) {
  const tileHeight = dense ? 120 : 220;
  const lineColor = coral ? "224,90,71" : "23,24,26";
  return (
    <div
      className={`relative h-full w-[1px] overflow-hidden ${coral ? "opacity-35" : "opacity-45"} ${className}`}
      style={{
        backgroundImage:
          `linear-gradient(to bottom, transparent, rgba(${lineColor},0.18) 15%, rgba(${lineColor},0.18) 85%, transparent), ` +
          `repeating-linear-gradient(180deg, transparent 0px, transparent ${tileHeight * 0.35}px, rgba(${lineColor},0.45) ${tileHeight * 0.5}px, rgba(${lineColor},0.45) ${tileHeight * 0.62}px, transparent ${tileHeight * 0.85}px, transparent ${tileHeight}px)`,
        backgroundSize: `100% 100%, 100% ${tileHeight}px`,
        filter: `drop-shadow(0 0 2px rgba(${lineColor},0.25))`,
        animation: reduced ? "none" : `${reverse ? "flowStoneUp" : "flowStoneDown"} ${duration}s linear infinite`,
      }}
    />
  );
}