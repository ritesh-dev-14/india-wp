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
    number: 165,
    suffix: "+",
    label: "ACTIVE CLIENTS",
    description: "Ongoing mandates scaling aggressively across top-tier PR, authority building, and high-end digital growth.",
  },
  {
    number: 4500,
    suffix: "+",
    label: "PROJECTS DELIVERED",
    description: "Digital systems, elite media features, and platforms successfully deployed across diverse global markets.",
  },
  {
    number: 50,
    suffix: "+",
    label: "BRANDS & FOUNDERS",
    description: "Elevated into household names through dominant market visibility and institutional prestige.",
  },
  {
    number: 5,
    suffix: "+",
    label: "YEARS OF DOMINANCE",
    description: "Of relentless execution, category creation, and building unshakeable market trust.",
  },
  {
    number: null,
    suffix: "",
    displayValue: "∞",
    label: "IMPACT",
    description: "Uncompromised market authority built to leave competitors behind.",
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
      className="group relative border-t border-[#8C6A1E]/20 py-8 transition-colors duration-500 hover:bg-[#8C6A1E]/[0.03] md:py-12"
    >
      <div className="grid grid-cols-1 items-center gap-6 px-4 md:grid-cols-12 md:gap-12 md:px-8">
        {/* Large Number Section */}
        <div className="flex items-baseline gap-6 md:col-span-7 lg:col-span-8">
          <span className="font-mono text-[10px] font-bold tracking-[0.2em] text-[#78716C] transition-colors duration-300 group-hover:text-[#8C6A1E]">
            0{index + 1}
          </span>

          <span className="block select-none text-[clamp(4rem,7vw,7.5rem)] font-light leading-none tracking-tight text-[#1A1714] transition-colors duration-500 group-hover:text-[#8C6A1E]">
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
            <span className="font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-[#57534E] transition-colors duration-300 group-hover:text-[#1A1714]">
              {item.label}
            </span>

            <span className="font-mono text-xs text-[#8C6A1E] opacity-0 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:opacity-100">
              <ArrowUpRight size={18} />
            </span>
          </div>

          <p className="max-w-[34ch] text-[14px] font-light leading-relaxed text-[#78716C] transition-colors duration-300 group-hover:text-[#57534E]">
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
    <section className="relative flex min-h-[100svh] w-full flex-col items-center justify-center overflow-hidden bg-transparent py-24 font-sans selection:bg-[#8C6A1E]/20 selection:text-[#1A1714] md:py-32">
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
            <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-[#8C6A1E]/30 bg-[#8C6A1E]/5 px-5 py-2 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-[#8C6A1E] shadow-[0_0_10px_rgba(140,106,30,0.8)]" />
              <span className="font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-[#8C6A1E]">
                06 / PROOF OF DOMINANCE
              </span>
            </div>

            <h2 className="mb-6 text-[clamp(2.5rem,5vw,4.5rem)] font-light leading-[1.05] tracking-tight text-[#1A1714] drop-shadow-sm">
              Unrivaled scale.{" "}
              <span
                className="block md:inline font-normal text-[#8C6A1E]"
                style={{ fontFamily: SERIF, fontStyle: "italic" }}
              >
                Undisputed market authority.
              </span>
            </h2>

            <p className="max-w-2xl text-[15px] font-light leading-relaxed text-[#57534E] sm:text-lg">
              “We measure success by category domination. With hundreds of active mandates and thousands of tier-1 projects delivered, our track record speaks louder than promises.”
            </p>
          </motion.div>
        </div>

        {/* Strictly Aligned List */}
        <div className="flex flex-col border-b border-[#8C6A1E]/20 bg-[#FAF8F5]/40 backdrop-blur-sm">
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
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#78716C]">
            TRUSTED BY 165+ ONGOING CLIENTS GLOBALLY
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#1A1714]">
            Engineering Total Market Leadership
          </span>
        </motion.div>
      </div>
    </section>
  );
}
