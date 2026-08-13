"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useInView,
} from "framer-motion";

const SERIF = "'Instrument Serif', 'Times New Roman', ui-serif, Georgia, serif";
const EASE = [0.76, 0, 0.24, 1];

const RESULTS = [
  {
    number: 50,
    suffix: "+",
    label: "BRANDS",
    description: "Partners and companies elevated through strategic design and execution.",
  },
  {
    number: 100,
    suffix: "+",
    label: "PROJECTS",
    description: "Digital platforms, campaigns, and experiences shipped globally.",
  },
  {
    number: 12,
    suffix: "+",
    label: "INDUSTRIES",
    description: "From luxury e-commerce and fintech to deep tech and hospitality.",
  },
  {
    number: 3,
    suffix: "+",
    label: "YEARS",
    description: "Of relentless pursuit of digital excellence and craft.",
  },
  {
    number: null,
    suffix: "",
    displayValue: "∞",
    label: "IDEAS",
    description: "Uncompromised imagination built to move businesses forward.",
  },
];

function AnimatedCounter({ value, suffix, prefersReducedMotion }) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  useEffect(() => {
    if (value === null || prefersReducedMotion || !isInView) {
      if (value === null) setDisplayValue("∞");
      return;
    }

    let start = 0;
    const duration = 1200;
    const startTime = performance.now();

    const update = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(1, elapsed / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * value);

      setDisplayValue(current);

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    };

    requestAnimationFrame(update);
  }, [value, prefersReducedMotion, isInView]);

  return (
    <span ref={ref}>
      {value === null ? "∞" : displayValue}
      {suffix}
    </span>
  );
}

function ResultItem({ item, index, prefersReducedMotion }) {
  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: EASE }}
      className="group relative border-t border-white/10 py-8 transition-colors duration-500 hover:bg-white/[0.03] md:py-12"
    >
      <div className="grid grid-cols-1 items-center gap-6 px-4 md:grid-cols-12 md:gap-12 md:px-8">
        {/* Large Number Section */}
        <div className="flex items-baseline gap-6 md:col-span-7 lg:col-span-8">
          <span className="font-mono text-[10px] font-bold tracking-[0.2em] text-[#71717A] transition-colors duration-300 group-hover:text-[#EAB308]">
            0{index + 1}
          </span>

          <span className="block select-none text-[clamp(4rem,7vw,7.5rem)] font-light leading-none tracking-tight text-white transition-colors duration-500 group-hover:text-[#EAB308]">
            <AnimatedCounter
              value={item.number}
              suffix={item.suffix}
              prefersReducedMotion={prefersReducedMotion}
            />
          </span>
        </div>

        {/* Info Section */}
        <div className="flex flex-col justify-center md:col-span-5 lg:col-span-4">
          <div className="mb-4 flex items-center justify-between">
            <span className="font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-[#A1A1AA] transition-colors duration-300 group-hover:text-white">
              {item.label}
            </span>

            <span className="font-mono text-xs text-[#EAB308] opacity-0 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:opacity-100">
              <ArrowUpRight size={18} />
            </span>
          </div>

          <p className="max-w-[34ch] text-[14px] font-light leading-relaxed text-[#71717A] transition-colors duration-300 group-hover:text-[#D4D4D8]">
            {item.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Results() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative flex min-h-[100svh] w-full flex-col items-center justify-center overflow-hidden bg-[#020202] py-24 font-sans selection:bg-[#EAB308]/20 selection:text-white md:py-32">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(20,60,170,0.15),transparent_65%)]" />

      {/* Vertical background grid lines (matching the layout) */}
      <div className="pointer-events-none absolute inset-0 flex justify-evenly opacity-30">
        <div className="h-full w-px bg-white/10" />
        <div className="h-full w-px bg-white/10" />
        <div className="h-full w-px bg-white/10" />
        <div className="h-full w-px bg-white/10" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-[5vw]">
        
        {/* Centered Header Layout */}
        <div className="mx-auto mb-16 flex max-w-4xl flex-col items-center text-center md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: EASE }}
            className="flex flex-col items-center"
          >
            {/* Pill Badge */}
            <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/5 px-5 py-2 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-[#10B981] shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
              <span className="font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-[#EAB308]">
                06 / RESULTS
              </span>
            </div>

            <h2 className="mb-6 text-[clamp(2.5rem,5vw,4.5rem)] font-light leading-[1.05] tracking-tight text-white drop-shadow-md">
              Results,{" "}
              <span
                className="block md:inline font-normal text-[#A1A1AA]"
                style={{ fontFamily: SERIF, fontStyle: "italic" }}
              >
                not just deliverables.
              </span>
            </h2>

            <p className="max-w-2xl text-[15px] font-light leading-relaxed text-[#D4D4D8] sm:text-lg">
              “We measure success by what happens after the work goes live. Numbers tell part of the story. The work tells the rest.”
            </p>
          </motion.div>
        </div>

        {/* Stricty Aligned List */}
        <div className="flex flex-col border-b border-white/10 bg-[#020202]/40 backdrop-blur-sm">
          {RESULTS.map((item, index) => (
            <ResultItem
              key={item.label}
              item={item}
              index={index}
              prefersReducedMotion={prefersReducedMotion}
            />
          ))}
        </div>

        {/* Footer info bar */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE }}
          className="mt-12 flex flex-col items-start justify-between gap-4 py-8 md:flex-row md:items-center"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#71717A]">
            WE PROMOTE INDIA — PROOF OF IMPACT
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-white">
            End-To-End Systems That Scale
          </span>
        </motion.div>
      </div>
    </section>
  );
}
