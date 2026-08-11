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
      className={`absolute h-3 w-3 text-ink/25 pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <path d="M1 1 H8 M1 1 V8" stroke="currentColor" strokeWidth="1" fill="none" />
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
    <section className="relative bg-[#FAF8F5] text-ink py-16 md:py-20 px-[5vw] overflow-hidden selection:bg-indigo-100/25 border-b border-border">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_10%,rgba(224,90,71,0.03),transparent_70%)]" />

      <div className="mx-auto max-w-[1400px] w-full">
        {/* Compact Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-border/80">
          <div>
            <span className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.3em] uppercase text-ink-secondary mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E05A47]"></span>
              07 / HOW WE WORK
            </span>

            <h2 className="font-extrabold leading-[0.94] tracking-tight text-[clamp(2.2rem,4.5vw,4rem)] text-ink">
              From idea to{" "}
              <span
                className="text-ink-secondary font-normal"
                style={{ fontFamily: SERIF, fontStyle: "italic" }}
              >
                profound impact.
              </span>
            </h2>
          </div>

          <p className="text-[13px] md:text-[14px] font-light leading-relaxed text-ink-secondary max-w-[34ch]">
            &ldquo;Every project starts with understanding. Then we turn direction into something memorable.&rdquo;
          </p>
        </div>

        {/* Compact Horizontal Cards Grid System */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mb-10">
          {PROCESS.map((stage, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={stage.number}
                onClick={() => setActiveIndex(index)}
                className={`group relative text-left p-5 rounded-xl border transition-all duration-300 flex flex-col justify-between h-[150px] overflow-hidden ${
                  isActive
                    ? "bg-white border-[#E05A47]/40 shadow-[0_12px_30px_rgba(224,90,71,0.08)] ring-1 ring-[#E05A47]/20"
                    : "bg-white/60 border-border hover:bg-white hover:border-border/80"
                }`}
              >
                {isActive && (
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#E05A47]" />
                )}

                <div className="flex items-center justify-between w-full">
                  <span className={`font-mono text-xs tracking-[0.2em] font-bold ${isActive ? "text-[#E05A47]" : "text-ink-secondary"}`}>
                    {stage.number}
                  </span>
                  <span className={`w-2 h-2 rounded-full transition-all duration-300 ${isActive ? "bg-[#E05A47] scale-125" : "bg-border"}`} />
                </div>

                <div>
                  <h3 className={`text-xl font-bold tracking-tight transition-colors ${isActive ? "text-ink" : "text-ink-secondary group-hover:text-ink"}`}>
                    {stage.title}
                  </h3>
                  <p className="text-[11px] font-mono uppercase tracking-[0.15em] text-ink-secondary mt-1 truncate">
                    {stage.subtitle}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Stage Expanded Detail Card */}
        <div className="relative bg-white border border-border rounded-xl p-6 md:p-8 shadow-sm overflow-hidden">
          <Corner className="left-4 top-4 z-20" />
          <Corner className="right-4 top-4 rotate-90 z-20" />
          <Corner className="bottom-4 left-4 -rotate-90 z-20" />
          <Corner className="bottom-4 right-4 rotate-180 z-20" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-3">
                <span className="font-mono text-[10px] tracking-[0.2em] text-[#E05A47] font-bold uppercase bg-[#E05A47]/10 px-2.5 py-0.5 rounded-xs">
                  {activeStage.tag}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-secondary">
                  STAGE {activeStage.number} / 05
                </span>
              </div>

              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-secondary block mb-1">
                {activeStage.subtitle}
              </span>

              <h3 className="font-bold tracking-tight text-3xl md:text-4xl text-ink mb-3">
                {activeStage.title}
              </h3>

              <p className="text-[14px] md:text-[15px] font-light leading-relaxed text-ink-secondary max-w-[50ch] mb-6">
                {activeStage.description}
              </p>

              <div className="flex items-center gap-3">
                <button
                  onClick={handlePrev}
                  aria-label="Previous stage"
                  className="p-2.5 rounded-full border border-border bg-[#FAF8F5] hover:bg-ink hover:text-white transition-all duration-300 text-ink"
                >
                  <ArrowLeft size={15} />
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Next stage"
                  className="p-2.5 rounded-full border border-border bg-[#FAF8F5] hover:bg-ink hover:text-white transition-all duration-300 text-ink"
                >
                  <ArrowRight size={15} />
                </button>
                <span className="ml-2 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-secondary">
                  Use arrows to navigate
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 relative w-full h-[220px] md:h-[260px] rounded-lg overflow-hidden border border-border/80 shadow-inner">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeStage.number}
                  src={activeStage.image}
                  alt={activeStage.imageAlt}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: EASE }}
                  className="absolute inset-0 w-full h-full object-cover object-center filter brightness-95"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>

          </div>
        </div>

        {/* Compact Footer Note */}
        <div className="mt-8 pt-6 border-t border-border flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <span className="font-mono text-[10px] tracking-[0.22em] text-ink-secondary uppercase">
            WE PROMOTE  — THE PROCESS
          </span>
          <p className="text-[12px] md:text-[13px] font-light text-ink-secondary">
            The launch is only the beginning. Built to keep moving.
          </p>
        </div>
      </div>
    </section>
  );
}
