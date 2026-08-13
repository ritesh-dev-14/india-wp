"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

/**
 * DESIGN NOTES
 * ------------
 * Palette (antique brass / ink / oxblood — deliberately NOT the default
 * "near-black + neon accent" AI hero look):
 *   --ink        #0C0A08  base background, warm near-black
 *   --parchment  #EDE3CF  primary text on dark
 *   --brass      #A9822F  primary accent (muted, aged metal — not neon gold)
 *   --brass-lt   #D9BE84  brass highlight / hover state
 *   --oxblood    #5C1A1A  secondary accent, used sparingly in the seal
 *   --stone      #8A8578  secondary/muted text, warm grey (not cool zinc)
 *
 * Type:
 *   Display  — Fraunces (high-contrast serif, engraved/plaque character)
 *   Body     — Inter
 *   Utility  — ui-monospace, for registry-style labels
 *
 *   Add to your root layout (next/font recommended):
 *     import { Fraunces, Inter } from "next/font/google";
 *     const fraunces = Fraunces({ subsets: ["latin"], weight: ["400","600"], style: ["normal","italic"], variable: "--font-display" });
 *     const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
 *   ...and apply the variables to <html className={`${fraunces.variable} ${inter.variable}`}>
 *   The constants below fall back gracefully to system serif/sans if omitted.
 *
 * Signature element: a hand-drawn SVG chartered seal (concentric rings +
 * circular motto + center mark) standing in for the "pill badge" every
 * other dark hero uses — it's the one thing this page should be remembered by.
 * Corner brackets echo a certificate/document frame rather than decorative
 * grid lines, reinforcing "this is a chartered, official mandate."
 */

const DISPLAY = "var(--font-display, 'Fraunces'), 'Times New Roman', ui-serif, Georgia, serif";
const BODY = "var(--font-body, 'Inter'), ui-sans-serif, system-ui, sans-serif";
const EASE = [0.76, 0, 0.24, 1];

function CornerMark({ className }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M1 20V1H20"
        fill="none"
        stroke="#A9822F"
        strokeWidth="1"
        strokeOpacity="0.55"
      />
    </svg>
  );
}

function CharteredSeal({ prefersReducedMotion }) {
  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, ease: EASE }}
      className="relative mx-auto mb-7 h-[108px] w-[108px] md:h-[124px] md:w-[124px]"
    >
      <motion.svg
        viewBox="0 0 200 200"
        className="h-full w-full"
        animate={prefersReducedMotion ? {} : { rotate: 360 }}
        transition={{ duration: 90, ease: "linear", repeat: Infinity }}
      >
        <defs>
          <path
            id="sealCirclePath"
            d="M 100,100 m -78,0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0"
          />
        </defs>
        <circle cx="100" cy="100" r="95" fill="none" stroke="#A9822F" strokeWidth="0.75" strokeOpacity="0.5" />
        <circle cx="100" cy="100" r="78" fill="none" stroke="#A9822F" strokeWidth="1" />
        <text fill="#D9BE84" fontSize="9.2" letterSpacing="3.2" fontFamily="ui-monospace, monospace">
          <textPath href="#sealCirclePath" startOffset="0%">
            WE PROMOTE INDIA • CHARTERED GROWTH ADVISORY •
          </textPath>
        </text>
      </motion.svg>
      {/* static center mark, counter-rotates visually by not being inside the spinning svg */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <svg viewBox="0 0 40 40" className="h-9 w-9">
          <path d="M20 4 L23 17 L36 20 L23 23 L20 36 L17 23 L4 20 L17 17 Z" fill="#5C1A1A" stroke="#D9BE84" strokeWidth="0.75" />
          <circle cx="20" cy="20" r="2.2" fill="#EDE3CF" />
        </svg>
      </div>
    </motion.div>
  );
}

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      style={{ fontFamily: BODY }}
      className="relative flex min-h-[100svh] w-full flex-col justify-between overflow-hidden bg-[#0C0A08] py-10 px-5 md:px-[6vw] selection:bg-[#A9822F]/25 selection:text-[#EDE3CF]"
    >
      {/* Ambient background: warm ink vignette with a faint oxblood glow, not a blue tech glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(92,26,26,0.22),transparent_65%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(169,130,47,0.10),transparent_60%)]" />

      {/* Certificate-frame corner marks instead of a decorative grid */}
      <CornerMark className="pointer-events-none absolute left-4 top-4 h-8 w-8 md:left-6 md:top-6" />
      <CornerMark className="pointer-events-none absolute right-4 top-4 h-8 w-8 rotate-90 md:right-6 md:top-6" />
      <CornerMark className="pointer-events-none absolute bottom-4 left-4 h-8 w-8 -rotate-90 md:bottom-6 md:left-6" />
      <CornerMark className="pointer-events-none absolute bottom-4 right-4 h-8 w-8 rotate-180 md:bottom-6 md:right-6" />

      {/* TOP NAV BAR */}
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: EASE }}
        className="relative z-10 mx-auto flex w-full max-w-[1400px] items-center justify-between border-b border-[#A9822F]/20 pb-7 pt-3"
      >
        <div className="flex items-center gap-2.5">
          <span className="h-[7px] w-[7px] rounded-full bg-[#A9822F] shadow-[0_0_8px_rgba(169,130,47,0.7)]" />
          <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-[#EDE3CF]">
            We Promote India
          </span>
        </div>
        <div className="hidden font-mono text-[10px] uppercase tracking-[0.22em] text-[#8A8578] sm:flex items-center gap-6">
          <span>Est. 2026</span>
          <span className="text-[#A9822F]/50">—</span>
          <span>Chartered Growth Advisory</span>
        </div>
        <a
          href="/contact"
          className="group flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-[#EDE3CF] transition-colors duration-300 hover:text-[#D9BE84]"
        >
          <span>Request Consultation</span>
          <span className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
        </a>
      </motion.div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 mx-auto my-auto flex w-full max-w-[1000px] flex-col items-center py-12 text-center">
        <CharteredSeal prefersReducedMotion={prefersReducedMotion} />

        <motion.span
          initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
          className="mb-7 font-mono text-[10.5px] font-semibold uppercase tracking-[0.32em] text-[#A9822F]"
        >
          Advisors to India&rsquo;s Market Leaders
        </motion.span>

        <div className="mb-8 overflow-hidden md:mb-9">
          <motion.h1
            initial={prefersReducedMotion ? false : { opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.18, ease: EASE }}
            style={{ fontFamily: DISPLAY }}
            className="text-[clamp(2.6rem,6.4vw,6rem)] font-semibold leading-[0.98] tracking-[-0.02em] text-[#EDE3CF]"
          >
            <span className="block">Offline Legacy.</span>
            <span className="block font-normal italic text-[#D9BE84]">Online Authority.</span>
          </motion.h1>
        </div>

        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.28, ease: EASE }}
          className="flex w-full max-w-[540px] flex-col items-center gap-7"
        >
          <p className="text-[15px] font-light leading-relaxed text-[#B9B2A0] md:text-[16.5px]">
            For enterprises that have already earned trust in the real world, we
            architect a digital presence to match — considered, credible, and
            built to be inherited, not refreshed each season.
          </p>

          <div className="flex w-full flex-col items-center justify-center gap-3 pt-1 sm:flex-row">
            <a
              href="/contact"
              className="group inline-flex w-full items-center justify-between gap-6 rounded-[2px] border border-[#A9822F] bg-[#A9822F] px-7 py-3.5 text-[#0C0A08] shadow-[0_1px_0_rgba(217,190,132,0.4)_inset] transition-all duration-300 ease-out hover:bg-[#D9BE84] hover:border-[#D9BE84] sm:w-auto sm:justify-center"
            >
              <span className="font-mono text-[10.5px] font-semibold uppercase tracking-[0.22em]">
                Request a Consultation
              </span>
              <ArrowUpRight size={15} className="transition-transform duration-300 ease-out group-hover:translate-x-1" />
            </a>

            <a
              href="/work"
              className="group inline-flex items-center justify-center gap-2 px-4 py-3 font-mono text-[11.5px] uppercase tracking-[0.16em] text-[#8A8578] transition-colors duration-300 hover:text-[#EDE3CF]"
            >
              View Client Mandates
              <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* FOOTER — registry line + credibility markers, replacing generic "01 / SCROLL" pattern */}
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4, ease: EASE }}
        className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-col items-center justify-between gap-4 border-t border-[#A9822F]/20 pt-7 pb-2 md:flex-row"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#8A8578]">
          Reg. No. WPI / 2026 — Chartered Growth Advisory
        </span>
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 font-mono text-[10px] uppercase tracking-[0.2em] text-[#B9B2A0]">
          <span>50+ Enterprise Mandates</span>
          <span className="text-[#A9822F]/50">•</span>
          <span>₹100Cr+ Media Stewarded</span>
          <span className="text-[#A9822F]/50">•</span>
          <span>Pan-India Presence</span>
        </div>
      </motion.div>
    </section>
  );
}