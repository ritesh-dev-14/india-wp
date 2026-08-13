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
    title: "Discover",
    subtitle: "Understanding the landscape",
    description: "Understand the business, audience, market and ambition before making anything.",
    tag: "// SCATTERED INSIGHTS",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Discover phase data analysis and market research",
  },
  {
    number: "02",
    title: "Define",
    subtitle: "Finding direction",
    description: "Turn insight into a clear strategy, creative direction and roadmap.",
    tag: "// STRUCTURE EMERGES",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Define phase strategy planning and wireframing",
  },
  {
    number: "03",
    title: "Create",
    subtitle: "Making it real",
    description: "Design, develop and produce the experiences that bring the idea to life.",
    tag: "// TANGIBLE SYSTEM",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Create phase UI/UX design and engineering",
  },
  {
    number: "04",
    title: "Launch",
    subtitle: "Putting work into the world",
    description: "Bring everything together and put the work into the world.",
    tag: "// MOMENTUM OUTWARD",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Launch phase deployment and performance metrics",
  },
  {
    number: "05",
    title: "Grow",
    subtitle: "Infinite expansion",
    description: "Measure, learn and continuously improve what comes next.",
    tag: "// BUILT TO KEEP MOVING",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Grow phase scaling and continuous optimization",
  },
];

function Corner({ className = "" }) {
  return (
    <svg
      viewBox="0 0 16 16"
      className={`absolute h-3 w-3 text-white/20 pointer-events-none ${className}`}
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
    <section className="relative flex min-h-[100svh] w-full flex-col items-center justify-center overflow-hidden bg-[#020202] py-24 font-sans selection:bg-[#EAB308]/20 selection:text-white md:py-32">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(20,60,170,0.15),transparent_60%)]" />

      {/* Vertical background grid lines (Dark Theme) */}
      <div className="pointer-events-none absolute inset-0 flex justify-evenly opacity-30">
        <div className="h-full w-px bg-white/10" />
        <div className="h-full w-px bg-white/10" />
        <div className="h-full w-px bg-white/10" />
        <div className="h-full w-px bg-white/10" />
      </div>

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
            {/* Pill Badge (Dark Theme) */}
            <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/5 px-5 py-2 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-[#10B981] shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
              <span className="font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-[#EAB308]">
                07 / HOW WE WORK
              </span>
            </div>

            <h2 className="mb-6 text-[clamp(2.5rem,5vw,4.5rem)] font-light leading-[1.05] tracking-tight text-white drop-shadow-md">
              From idea to{" "}
              <span
                className="block md:inline font-normal text-[#A1A1AA]"
                style={{ fontFamily: SERIF, fontStyle: "italic" }}
              >
                profound impact.
              </span>
            </h2>

            <p className="max-w-2xl text-[15px] font-light leading-relaxed text-[#D4D4D8] sm:text-lg">
              “Every project starts with absolute understanding. Then we engineer that direction into something undeniable.”
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
                    ? "border-white/20 bg-white/[0.07] shadow-[0_12px_30px_rgba(0,0,0,0.5)] ring-1 ring-white/10 backdrop-blur-md"
                    : "border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/20 backdrop-blur-sm"
                }`}
              >
                {/* Top active indicator line */}
                {isActive && (
                  <motion.div 
                    layoutId="active-process-line-dark"
                    className="absolute left-0 right-0 top-0 h-[3px] bg-[#EAB308]" 
                  />
                )}

                <div className="flex w-full items-center justify-between">
                  <span
                    className={`font-mono text-xs font-bold tracking-[0.2em] transition-colors duration-300 ${
                      isActive ? "text-[#EAB308]" : "text-[#71717A] group-hover:text-[#A1A1AA]"
                    }`}
                  >
                    {stage.number}
                  </span>
                  <span
                    className={`h-2 w-2 rounded-full transition-all duration-300 ${
                      isActive ? "scale-125 bg-[#EAB308]" : "bg-white/20"
                    }`}
                  />
                </div>

                <div>
                  <h3
                    className={`text-xl font-light tracking-tight transition-colors duration-300 ${
                      isActive ? "text-white" : "text-[#A1A1AA] group-hover:text-white"
                    }`}
                  >
                    {stage.title}
                  </h3>
                  <p className="mt-1 truncate font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-[#71717A]">
                    {stage.subtitle}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Stage Expanded Detail Card */}
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm md:p-12">
          <Corner className="left-5 top-5 z-20" />
          <Corner className="right-5 top-5 z-20 rotate-90" />
          <Corner className="bottom-5 left-5 z-20 -rotate-90" />
          <Corner className="bottom-5 right-5 z-20 rotate-180" />

          <div className="relative z-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="flex flex-col justify-center lg:col-span-7">
              <div className="mb-4 flex items-center gap-3">
                <span className="rounded bg-[#EAB308]/10 px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#EAB308]">
                  {activeStage.tag}
                </span>
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-[#71717A]">
                  STAGE {activeStage.number} / 05
                </span>
              </div>

              <span className="mb-2 block font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-[#A1A1AA]">
                {activeStage.subtitle}
              </span>

              <h3 className="mb-4 text-3xl font-light tracking-tight text-white md:text-4xl">
                {activeStage.title}
              </h3>

              <p className="mb-8 max-w-[50ch] text-[15px] font-light leading-relaxed text-[#D4D4D8]">
                {activeStage.description}
              </p>

              <div className="flex items-center gap-3">
                <button
                  onClick={handlePrev}
                  aria-label="Previous stage"
                  className="rounded-full border border-white/10 bg-white/5 p-3 text-white transition-all duration-300 hover:border-[#EAB308] hover:bg-[#EAB308] hover:text-black cursor-pointer shadow-sm"
                >
                  <ArrowLeft size={16} />
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Next stage"
                  className="rounded-full border border-white/10 bg-white/5 p-3 text-white transition-all duration-300 hover:border-[#EAB308] hover:bg-[#EAB308] hover:text-black cursor-pointer shadow-sm"
                >
                  <ArrowRight size={16} />
                </button>
                <span className="ml-3 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#71717A]">
                  Navigate stages
                </span>
              </div>
            </div>

            <div className="relative h-[240px] w-full overflow-hidden rounded-xl border border-white/10 bg-black/40 p-1.5 shadow-sm lg:col-span-5 md:h-[300px]">
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
                    className="absolute inset-0 h-full w-full object-cover object-center filter brightness-90 contrast-110"
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
          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-[#71717A]">
            WE PROMOTE INDIA — THE PROCESS
          </span>
          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-white">
            The launch is only the beginning
          </span>
        </motion.div>
      </div>
    </section>
  );
}
