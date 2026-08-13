"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const SERIF = "'Instrument Serif', 'Times New Roman', ui-serif, Georgia, serif";
const EASE = [0.76, 0, 0.24, 1];

export default function FinalCTA() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative flex min-h-[50svh] w-full flex-col justify-between overflow-hidden bg-[#020202] py-12 px-[6vw] lg:min-h-[58vh] md:py-16 font-sans selection:bg-[#EAB308]/20 selection:text-white">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_50%,rgba(20,60,170,0.15),transparent_70%)]" />

      {/* Vertical background grid lines */}
      <div className="pointer-events-none absolute inset-0 flex justify-evenly opacity-30">
        <div className="h-full w-px bg-white/10" />
        <div className="h-full w-px bg-white/10" />
        <div className="h-full w-px bg-white/10" />
        <div className="h-full w-px bg-white/10" />
      </div>

      {/* Top spacing spacer */}
      <div className="w-full" />

      {/* MAIN EDITORIAL CONTENT CONTAINER */}
      <div className="relative z-10 mx-auto my-auto flex w-full max-w-[1400px] flex-col items-center text-center">
        
        {/* Massive Editorial Headline */}
        <div className="mb-8 overflow-hidden md:mb-10">
          
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-5% 0px" }}
            transition={{ duration: 0.75, ease: EASE }}
          >
            <h2 className="text-[clamp(2.5rem,6.5vw,7rem)] font-semibold uppercase leading-[0.9] tracking-[-0.05em] text-white drop-shadow-md">
              
              <span className="block pb-1">
                Ready to be
              </span>

              <span 
                className="block pb-1 font-normal text-[#A1A1AA]"
                style={{ fontFamily: SERIF, fontStyle: "italic", textTransform: "none" }}
              >
                Impossible to ignore?
              </span>

            </h2>
          </motion.div>

        </div>

        {/* Supporting Copy & Action Hub */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-5% 0px" }}
          transition={{ duration: 0.75, delay: 0.1, ease: EASE }}
          className="flex w-full max-w-[420px] flex-col items-center gap-6"
        >
          
          <p className="text-[14px] md:text-[15px] font-light leading-relaxed text-[#D4D4D8]">
            Let&apos;s build something people can&apos;t look away from.
          </p>

          <div className="flex w-full flex-col items-center justify-center gap-3 sm:flex-row">
            
            {/* Primary CTA */}
            <a
              href="/contact"
              className="group relative inline-flex w-full sm:w-auto items-center justify-between sm:justify-center gap-6 rounded-xs border border-white/20 bg-white px-7 py-3.5 text-black shadow-md transition-all duration-300 ease-out hover:border-[#EAB308] hover:bg-[#EAB308] cursor-pointer"
            >
              <span className="font-mono text-[10px] md:text-[11px] font-medium uppercase tracking-[0.2em]">
                Start a Project
              </span>
              <span className="transition-transform duration-300 ease-out group-hover:translate-x-1">
                <ArrowUpRight size={15} />
              </span>
            </a>

            {/* Secondary Action */}
            <a
              href="/work"
              className="group inline-flex cursor-pointer items-center justify-center gap-2 px-4 py-3 font-mono text-[12px] uppercase tracking-[0.15em] text-[#A1A1AA] transition-colors duration-300 hover:text-white"
            >
              View our work <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
            </a>

          </div>

        </motion.div>

      </div>

      {/* SECTION FOOTER ACCENT */}
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: EASE }}
        className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-col items-center justify-between gap-4 border-t border-white/10 pt-10 md:flex-row"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#71717A]">
          WE PROMOTE INDIA — 2026
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#71717A]">
          ALL RIGHTS RESERVED
        </span>
      </motion.div>

    </section>
  );
}
