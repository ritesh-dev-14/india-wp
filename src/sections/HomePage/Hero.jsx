"use client";

import React, { useState, useEffect } from "react";
import { ArrowUpRight, ShieldCheck, Sparkles, TrendingUp } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

/**
 * DESIGN NOTES & AWWWARDS-GRADE ENTRANCE (ENHANCED EDITION)
 * -----------------------------------------------------------------
 * Tailored for an elite, museum-quality gallery/award submission presentation:
 *   - Immersive cinematic curtain reveal with luxury emblem scale
 *   - Staggered line-by-line typographic clip reveal for maximum visual impact
 *   - Advanced floating depth layers, interactive brand tooltips, and magnetic micro-interactions
 */

const DISPLAY = "var(--font-display, 'Fraunces'), 'Times New Roman', ui-serif, Georgia, serif";
const BODY = "var(--font-body, 'Inter'), ui-sans-serif, system-ui, sans-serif";
const EASE = [0.76, 0, 0.24, 1];

const BRANDS = [
  "ALTEZZA", "ARTIZE", "AESTHETIC HOMEZ", "BACHAN INDUSTRIES", "DAZZLE",
  "EXPERT", "GOYAL", "HALDIRAM", "HANDA", "HCS", "JAQUAR", "KANAK", "LG",
  "MANSAROVER", "NICO", "PRECISION", "RAJ JEWELS", "SAI JEWELLERS",
  "SOMANY", "SPENZA", "SWASTIK HOME DECOR", "TOTOO", "TRIVENI", "VARMORA", "VOLTAS",
];

const GHOST_WORDS = ["AUTHORITY", "VISIBILITY", "INFLUENCE", "LEGACY"];

function CornerMark({ className }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <path d="M1 20V1H20" fill="none" stroke="#8C6A1E" strokeWidth="1.25" strokeOpacity="0.6" />
    </svg>
  );
}

function MarqueeRow({ items, direction, duration, size, opacity }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden whitespace-nowrap">
      <div
        className="inline-flex gap-16"
        style={{
          animation: duration ? `marquee${direction === "left" ? "Left" : "Right"} ${duration}s linear infinite` : "none",
        }}
      >
        {doubled.map((b, i) => (
          <span
            key={b + i}
            className="font-black uppercase tracking-tight"
            style={{ fontSize: size, color: "#1A1714", opacity }}
          >
            {b}
          </span>
        ))}
      </div>
    </div>
  );
}

function BrandMark({ name }) {
  const [hover, setHover] = useState(false);
  return (
    <div
      className="relative cursor-pointer select-none"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <motion.span
        animate={{ color: hover ? "#8C6A1E" : "#78716C" }}
        transition={{ duration: 0.2 }}
        className="text-xs md:text-sm font-bold tracking-wide uppercase"
      >
        {name}
      </motion.span>
      <AnimatePresence>
        {hover && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.95 }}
            transition={{ duration: 0.2, ease: EASE }}
            className="absolute left-0 top-full mt-2 px-3 py-1.5 rounded-xs text-[10px] font-semibold tracking-wide uppercase whitespace-nowrap flex items-center gap-1.5 z-30 shadow-[0_10px_25px_rgba(26,23,20,0.15)] bg-[#1A1714] text-[#FAF8F5] border border-[#8C6A1E]/30 backdrop-blur-md"
          >
            <Sparkles size={10} className="text-[#8C6A1E]" />
            Brand / Digital Mandate <ArrowUpRight size={10} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function CharteredSeal({ prefersReducedMotion }) {
  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.8, rotate: -20 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 1.2, delay: 0.5, ease: EASE }}
      className="relative mx-auto mb-7 h-[120px] w-[120px] md:h-[140px] md:w-[140px]"
    >
      {/* Outer pulsing ring aura */}
      <motion.div
        animate={prefersReducedMotion ? {} : { scale: [1, 1.08, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 rounded-full border border-[#8C6A1E]/40 bg-[#8C6A1E]/5"
      />
      <motion.svg
        viewBox="0 0 200 200"
        className="relative h-full w-full drop-shadow-lg"
        animate={prefersReducedMotion ? {} : { rotate: 360 }}
        transition={{ duration: 120, ease: "linear", repeat: Infinity }}
      >
        <defs>
          <path id="sealCirclePath" d="M 100,100 m -78,0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0" />
        </defs>
        <circle cx="100" cy="100" r="95" fill="none" stroke="#8C6A1E" strokeWidth="1" strokeOpacity="0.3" />
        <circle cx="100" cy="100" r="78" fill="none" stroke="#8C6A1E" strokeWidth="1.5" />
        <text fill="#6B1D1D" fontSize="13.2" letterSpacing="3.2" fontFamily="ui-monospace, monospace" fontWeight="600">
          <textPath href="#sealCirclePath" startOffset="0%">
                WE PROMOTE  • BRAND • DIGITAL • PR • GROWTH •
          </textPath>
        </text>
      </motion.svg>
      {/* Static center emblem with interactive pulse */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <svg viewBox="0 0 40 40" className="h-10 w-10">
            <path d="M20 4 L23 17 L36 20 L23 23 L20 36 L17 23 L4 20 L17 17 Z" fill="#6B1D1D" stroke="#8C6A1E" strokeWidth="1" />
            <circle cx="20" cy="20" r="2.2" fill="#FAF8F5" />
          </svg>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const [isLoaded, setIsLoaded] = useState(false);
  const [ghostIdx, setGhostIdx] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 120);
    return () => clearTimeout(timer);
  }, []);

  // Cycling background ghost word — AUTHORITY / VISIBILITY / INFLUENCE / LEGACY
  useEffect(() => {
    if (prefersReducedMotion) return;
    const id = setInterval(() => setGhostIdx((i) => (i + 1) % GHOST_WORDS.length), 3000);
    return () => clearInterval(id);
  }, [prefersReducedMotion]);

  return (
    <section
      style={{ fontFamily: BODY }}
      className="relative flex min-h-[100svh] w-full flex-col justify-between overflow-hidden bg-transparent py-12 px-5 md:px-[6vw] selection:bg-[#8C6A1E]/20 selection:text-[#1A1714]"
    >
      {/* Cinematic Curtain Entrance Overlay */}
      {!prefersReducedMotion && (
        <AnimatePresence>
          {!isLoaded && (
            <motion.div
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.9, ease: EASE }}
              className="absolute inset-0 z-50 bg-[#FAF8F5]"
            />
          )}
        </AnimatePresence>
      )}

      {/* Certificate-frame corner marks with subtle scale entrance */}
      <motion.div
        initial={{ opacity: 0, scale: 0.4 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, delay: 0.3, ease: EASE }}
        className="contents"
      >
        <CornerMark className="pointer-events-none absolute left-4 top-4 h-8 w-8 md:left-6 md:top-6 z-20" />
        <CornerMark className="pointer-events-none absolute right-4 top-4 h-8 w-8 rotate-90 md:right-6 md:top-6 z-20" />
        <CornerMark className="pointer-events-none absolute bottom-4 left-4 h-8 w-8 -rotate-90 md:bottom-6 md:left-6 z-20" />
        <CornerMark className="pointer-events-none absolute bottom-4 right-4 h-8 w-8 rotate-180 md:bottom-6 md:right-6 z-20" />
      </motion.div>

      {/* ── Giant cycling ghost word in background ──────────────────── */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
        <AnimatePresence mode="wait">
          <motion.span
            key={GHOST_WORDS[ghostIdx]}
            initial={{ opacity: 0, filter: "blur(10px)", scale: 0.94 }}
            animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
            exit={{ opacity: 0, filter: "blur(10px)", scale: 1.05 }}
            transition={{ duration: 1.2, ease: EASE }}
            style={{
              fontSize: "clamp(6rem, 22vw, 22rem)",
              fontWeight: 900,
              letterSpacing: "-0.03em",
              color: "rgba(140, 106, 30, 0.045)",
              whiteSpace: "nowrap",
            }}
          >
            {GHOST_WORDS[ghostIdx]}
          </motion.span>
        </AnimatePresence>
      </div>

      {/* ── Moving brand wall — two rows, opposite speeds ─────────────── */}
      <div aria-hidden className="absolute inset-x-0 top-[18%] flex flex-col gap-10 pointer-events-none opacity-60 z-0">
        <MarqueeRow items={BRANDS} direction="left" duration={prefersReducedMotion ? 0 : 48} size="clamp(1.4rem,3.4vw,3rem)" opacity={0.06} />
        <MarqueeRow items={[...BRANDS].reverse()} direction="right" duration={prefersReducedMotion ? 0 : 62} size="clamp(1rem,2.2vw,1.9rem)" opacity={0.09} />
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 mx-auto my-auto flex w-full max-w-[1050px] flex-col items-center py-12 text-center">
        <CharteredSeal prefersReducedMotion={prefersReducedMotion} />

        {/* Subtitle Badge with Micro-Motion & Glow */}
        <div className="overflow-hidden mb-6">
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65, ease: EASE }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#8C6A1E]/30 bg-[#8C6A1E]/5 shadow-[0_2px_12px_rgba(140,106,30,0.06)] backdrop-blur-sm"
          >
            <ShieldCheck size={13} className="text-[#8C6A1E]" />
            <span className="font-mono text-[11px] font-bold uppercase tracking-[0.3em] text-[#8C6A1E]">
              Advisors to India&rsquo;s Market Leaders
            </span>
          </motion.div>
        </div>

        {/* Massive Headline with Line-by-Line Clip Animation */}
        <div className="mb-8 flex flex-col items-center overflow-hidden md:mb-10">
          <h1
            style={{ fontFamily: DISPLAY }}
            className="text-[clamp(2.8rem,7vw,6.5rem)] font-semibold leading-[0.96] tracking-[-0.02em] text-[#1A1714]"
          >
            <div className="overflow-hidden py-1">
              <motion.span
                initial={prefersReducedMotion ? false : { y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, delay: 0.8, ease: EASE }}
                className="block drop-shadow-sm"
              >
                Offline Legacy.
              </motion.span>
            </div>
            <div className="overflow-hidden py-1">
              <motion.span
                initial={prefersReducedMotion ? false : { y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, delay: 0.95, ease: EASE }}
                className="block font-normal italic text-[#8C6A1E] drop-shadow-sm"
              >
                Online Authority.
              </motion.span>
            </div>
          </h1>
        </div>

        {/* Paragraph & Action Core */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.1, ease: EASE }}
          className="flex w-full max-w-[580px] flex-col items-center gap-7"
        >
          <p className="text-[15.5px] font-normal leading-relaxed text-[#57534E] md:text-[17px]">
            For enterprises that have already earned trust in the real world, we
            architect a digital presence to match — considered, credible, and
            built to be inherited, not refreshed each season.
          </p>

          <div className="flex w-full flex-col items-center justify-center gap-3.5 pt-2 sm:flex-row">
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex w-full items-center justify-between gap-6 rounded-[2px] border border-[#8C6A1E] bg-[#8C6A1E] px-8 py-4 text-white shadow-[0_6px_22px_rgba(140,106,30,0.35)] transition-colors duration-300 ease-out hover:bg-[#1A1714] hover:border-[#1A1714] sm:w-auto sm:justify-center cursor-pointer"
            >
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em]">
                Request a Consultation
              </span>
              <ArrowUpRight size={16} className="transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:-translate-y-1" />
            </motion.a>

            <motion.a
              href="/work"
              whileHover={{ x: 3 }}
              className="group inline-flex items-center justify-center gap-2 px-5 py-3.5 font-mono text-[12px] uppercase tracking-[0.16em] text-[#78716C] transition-colors duration-300 hover:text-[#1A1714] cursor-pointer"
            >
              View Client Mandates
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* ── Brand proof strip ──────────────────────────────────────────── */}
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2, ease: EASE }}
        className="relative z-10 border-t border-[#8C6A1E]/20 px-4 md:px-10 py-6 max-w-[1400px] mx-auto w-full"
      >
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp size={13} className="text-[#8C6A1E]" />
          <span className="text-[10px] md:text-[11px] font-bold tracking-[0.28em] uppercase text-[#78716C]">
            Brands we&apos;ve helped move forward
          </span>
        </div>
        <div className="flex flex-wrap gap-x-8 gap-y-3">
          {BRANDS.slice(0, 10).map((b) => (
            <BrandMark key={b} name={b} />
          ))}
        </div>
      </motion.div>

      {/* FOOTER TICKER / STATS */}
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.3, ease: EASE }}
        className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-col items-center justify-between gap-4 border-t border-[#8C6A1E]/25 pt-7 pb-3 md:flex-row"
      >
        <span className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-[#78716C]">
          Reg. No. WPI / 2026 — Chartered Growth Advisory
        </span>
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-mono text-[10.5px] uppercase tracking-[0.2em] text-[#57534E]">
          <span className="hover:text-[#8C6A1E] transition-colors cursor-default">50+ Enterprise Mandates</span>
          <span className="text-[#8C6A1E]/50">•</span>
          <span className="hover:text-[#8C6A1E] transition-colors cursor-default">₹100Cr+ Media Stewarded</span>
          <span className="text-[#8C6A1E]/50">•</span>
          <span className="hover:text-[#8C6A1E] transition-colors cursor-default">Pan-India Presence</span>
        </div>
      </motion.div>

      <style>{`
        @keyframes marqueeLeft { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes marqueeRight { from { transform: translateX(-50%); } to { transform: translateX(0); } }
      `}</style>
    </section>
  );
}
