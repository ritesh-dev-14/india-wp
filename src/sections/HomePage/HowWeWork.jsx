"use client";

import React, { useState } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from "framer-motion";

const SERIF = "'Instrument Serif', 'Times New Roman', ui-serif, Georgia, serif";
const EASE = [0.76, 0, 0.24, 1];

const PROCESS = [
  {
    number: "01",
    title: "Audit & Position",
    subtitle: "Mapping category dominance",
    description: "We dissect your current market landscape, analyze elite competitor gaps, and map the precise PR and authority blueprint before execution.",
    tag: "// AUTHORITY BLUEPRINT",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Audit phase strategy planning and market positioning",
  },
  {
    number: "02",
    title: "Tier-1 Media PR",
    subtitle: "Forbes, ToI, Hindustan Times",
    description: "We secure high-impact features in top newspapers and elite business magazines to establish instant institutional credibility and trust.",
    tag: "// ELITE SPOTLIGHT",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Media feature placement and PR execution",
  },
  {
    number: "03",
    title: "Aggressive Scale",
    subtitle: "Omnipresent awareness",
    description: "Deploy high-intensity digital distribution and world-class web ecosystems designed to capture total market attention.",
    tag: "// TOTAL MINDSHARE",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Scale phase digital growth and omnipresence",
  },
  {
    number: "04",
    title: "Convert & Engineer",
    subtitle: "High-end platforms",
    description: "Build robust, high-performance web architectures that seamlessly turn massive public awareness into bottom-line revenue.",
    tag: "// DIGITAL FLAGSHIP",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Engineering high-end web platforms and funnels",
  },
  {
    number: "05",
    title: "Dominate & Grow",
    subtitle: "Continuous market leadership",
    description: "Govern your brand's public reputation and scale ongoing acquisition engines for permanent category leadership.",
    tag: "// UNRIVALED LEADERSHIP",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Growth phase scaling and continuous brand dominance",
  },
];

function Corner({ className = "" }) {
  return (
    <svg
      viewBox="0 0 16 16"
      className={`absolute h-3 w-3 text-[#8C6A1E]/40 pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <path d="M1 1 H8 M1 1 V8" stroke="currentColor" strokeWidth="1.5" fill="none" />
    </svg>
  );
}

export default function HowWeWork() {
  const prefersReducedMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);

  const activeStage = PROCESS[activeIndex];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % PROCESS.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + PROCESS.length) % PROCESS.length);
  };

  return (
    <section className="relative flex min-h-[100svh] w-full flex-col items-center justify-center overflow-hidden bg-transparent py-24 font-sans selection:bg-[#8C6A1E]/20 selection:text-[#1A1714] md:py-32">
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-[5vw]">
        
        {/* Centered Header Layout */}
        <div className="mx-auto mb-16 flex max-w-4xl flex-col items-center text-center md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: EASE }}
            className="flex flex-col items-center"
          >
            {/* Pill Badge */}
            <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-[#8C6A1E]/30 bg-[#8C6A1E]/5 px-5 py-2 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-[#8C6A1E] shadow-[0_0_10px_rgba(140,106,30,0.8)]" />
              <span className="font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-[#8C6A1E]">
                07 / THE DOMINANCE FRAMEWORK
              </span>
            </div>

            <h2 className="mb-6 text-[clamp(2.5rem,5vw,4.5rem)] font-light leading-[1.05] tracking-tight text-[#1A1714] drop-shadow-sm">
              From market player to{" "}
              <span
                className="block md:inline font-normal text-[#8C6A1E]"
                style={{ fontFamily: SERIF, fontStyle: "italic" }}
              >
                industry titan.
              </span>
            </h2>

            <p className="max-w-2xl text-[15px] font-light leading-relaxed text-[#57534E] sm:text-lg">
              “Our proven five-step execution engine transforms standard businesses into category benchmarks with tier-1 PR and aggressive digital scale.”
            </p>
          </motion.div>
        </div>

        {/* Compact Horizontal Cards Grid System */}
        <div className="mb-8 grid grid-cols-1 gap-3 md:grid-cols-5 lg:gap-4">
          {PROCESS.map((stage, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={stage.number}
                onClick={() => setActiveIndex(index)}
                className={`group relative flex h-[140px] flex-col justify-between overflow-hidden rounded-xl border p-5 text-left transition-all duration-300 md:h-[160px] ${
                  isActive
                    ? "border-[#8C6A1E]/40 bg-[#FAF8F5]/90 shadow-[0_12px_30px_rgba(140,106,30,0.1)] ring-1 ring-[#8C6A1E]/20 backdrop-blur-md"
                    : "border-[#8C6A1E]/20 bg-[#FAF8F5]/40 hover:bg-[#FAF8F5]/70 hover:border-[#8C6A1E]/30 backdrop-blur-sm"
                }`}
              >
                {/* Top active indicator line */}
                {isActive && (
                  <motion.div 
                    layoutId="active-process-line-light"
                    className="absolute left-0 right-0 top-0 h-[3px] bg-[#8C6A1E]" 
                  />
                )}

                <div className="flex w-full items-center justify-between">
                  <span
                    className={`font-mono text-xs font-bold tracking-[0.2em] transition-colors duration-300 ${
                      isActive ? "text-[#8C6A1E]" : "text-[#78716C] group-hover:text-[#57534E]"
                    }`}
                  >
                    {stage.number}
                  </span>
                  <span
                    className={`h-2 w-2 rounded-full transition-all duration-300 ${
                      isActive ? "scale-125 bg-[#8C6A1E]" : "bg-[#8C6A1E]/20"
                    }`}
                  />
                </div>

                <div>
                  <h3
                    className={`text-xl font-light tracking-tight transition-colors duration-300 ${
                      isActive ? "text-[#1A1714]" : "text-[#57534E] group-hover:text-[#1A1714]"
                    }`}
                  >
                    {stage.title}
                  </h3>
                  <p className="mt-1 truncate font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-[#78716C]">
                    {stage.subtitle}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Stage Expanded Detail Card */}
        <div className="relative overflow-hidden rounded-2xl border border-[#8C6A1E]/20 bg-[#FAF8F5]/60 p-6 backdrop-blur-sm md:p-12">
          <Corner className="left-5 top-5 z-20" />
          <Corner className="right-5 top-5 z-20 rotate-90" />
          <Corner className="bottom-5 left-5 z-20 -rotate-90" />
          <Corner className="bottom-5 right-5 z-20 rotate-180" />

          <div className="relative z-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="flex flex-col justify-center lg:col-span-7">
              <div className="mb-4 flex items-center gap-3">
                <span className="rounded bg-[#8C6A1E]/10 px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#8C6A1E]">
                  {activeStage.tag}
                </span>
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-[#78716C]">
                  STAGE {activeStage.number} / 05
                </span>
              </div>

              <span className="mb-2 block font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-[#57534E]">
                {activeStage.subtitle}
              </span>

              <h3 className="mb-4 text-3xl font-light tracking-tight text-[#1A1714] md:text-4xl">
                {activeStage.title}
              </h3>

              <p className="mb-8 max-w-[50ch] text-[15px] font-light leading-relaxed text-[#57534E]">
                {activeStage.description}
              </p>

              <div className="flex items-center gap-3">
                <button
                  onClick={handlePrev}
                  aria-label="Previous stage"
                  className="rounded-full border border-[#8C6A1E]/25 bg-[#FAF8F5] p-3 text-[#1A1714] transition-all duration-300 hover:border-[#8C6A1E] hover:bg-[#8C6A1E] hover:text-white cursor-pointer shadow-sm"
                >
                  <ArrowLeft size={16} />
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Next stage"
                  className="rounded-full border border-[#8C6A1E]/25 bg-[#FAF8F5] p-3 text-[#1A1714] transition-all duration-300 hover:border-[#8C6A1E] hover:bg-[#8C6A1E] hover:text-white cursor-pointer shadow-sm"
                >
                  <ArrowRight size={16} />
                </button>
                <span className="ml-3 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#78716C]">
                  Navigate stages
                </span>
              </div>
            </div>

            <div className="relative h-[240px] w-full overflow-hidden rounded-xl border border-[#8C6A1E]/20 bg-[#FAF8F5] p-1.5 shadow-sm lg:col-span-5 md:h-[300px]">
              <div className="relative h-full w-full overflow-hidden rounded-lg">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeStage.number}
                    src={activeStage.image}
                    alt={activeStage.imageAlt}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, ease: EASE }}
                    className="absolute inset-0 h-full w-full object-cover object-center filter contrast-105"
                  />
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

        {/* Footer info bar */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE }}
          className="mt-12 flex flex-col items-start justify-between gap-4 py-8 md:flex-row md:items-center"
        >
          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-[#78716C]">
            FORBES, TIMES OF INDIA & HINDUSTAN TIMES PARTNERSHIP PIPELINE
          </span>
          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-[#1A1714]">
            Engineering Category Titans
          </span>
        </motion.div>
      </div>
    </section>
  );
}
