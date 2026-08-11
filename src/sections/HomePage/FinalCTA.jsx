"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const SERIF = "'Instrument Serif', 'Times New Roman', ui-serif, Georgia, serif";
const EASE = [0.76, 0, 0.24, 1];

export default function FinalCTA() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative bg-white text-ink min-h-[50vh] lg:min-h-[58vh] py-12 md:py-16 px-[6vw] flex flex-col justify-between overflow-hidden selection:bg-indigo-100/20">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_50%,rgba(38,58,120,0.12),transparent_70%)]" />

      {/* Top spacing spacer */}
      <div className="w-full" />

      {/* MAIN EDITORIAL CONTENT CONTAINER */}
      <div className="relative z-10 mx-auto max-w-[1400px] w-full flex flex-col items-center text-center my-auto">
        
        {/* Massive Editorial Headline */}
        <div className="mb-8 md:mb-10 overflow-hidden">
          
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-5% 0px" }}
            transition={{ duration: 0.75, ease: EASE }}
          >
            <h2 className="font-semibold tracking-[-0.05em] leading-[0.9] text-[clamp(2.5rem,6.5vw,7rem)] uppercase">
              
              <span className="block pb-1">
                Ready to be
              </span>

              <span 
                className="block pb-1 text-ink/90 font-normal"
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
          className="flex flex-col items-center gap-6 max-w-[420px] w-full"
        >
          
          <p className="text-[14px] md:text-[15px] font-light leading-relaxed text-ink-secondary">
            Let&apos;s build something people can&apos;t look away from.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full">
            
            {/* Primary CTA */}
            <a
              href="/contact"
              className="group relative inline-flex items-center justify-between sm:justify-center gap-6 w-full sm:w-auto px-7 py-3.5 rounded-xs border border-border bg-ink text-white hover:border-ink hover:bg-ink-secondary transition-all duration-300 ease-out cursor-pointer shadow-md"
            >
              <span className="font-mono text-[10px] md:text-[11px] tracking-[0.2em] uppercase font-medium">
                Start a Project
              </span>
              <span className="transform group-hover:translate-x-1 transition-transform duration-300 ease-out">
                <ArrowUpRight size={15} />
              </span>
            </a>

            {/* Secondary Action */}
            <a
              href="/work"
              className="inline-flex items-center justify-center gap-2 px-4 py-3 text-[12px] font-mono tracking-[0.15em] uppercase text-ink-secondary hover:text-ink transition-colors duration-300 cursor-pointer group"
            >
              View our work <span className="transform group-hover:translate-x-0.5 transition-transform duration-300">→</span>
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
        className="relative z-10 mx-auto max-w-[1400px] w-full pt-10 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-border/80"
      >
        <span className="font-mono text-[10px] tracking-[0.22em] text-ink-secondary uppercase">
          WE PROMOTE  — 2026
        </span>
        <span className="font-mono text-[10px] tracking-[0.22em] text-ink-secondary uppercase">
          ALL RIGHTS RESERVED
        </span>
      </motion.div>

    </section>
  );
}
