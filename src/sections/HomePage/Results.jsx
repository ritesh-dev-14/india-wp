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
const SPRING = { type: "spring", stiffness: 380, damping: 32 };

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
      // Ease out cubic
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

function ResultItem({ item, index, isHovered, onHover, prefersReducedMotion }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      layout
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
      className="group relative border-t border-border/80 py-8 md:py-12 cursor-pointer transition-colors duration-300"
    >
      {isHovered && (
        <motion.span
          layoutId="result-active-bg"
          className="absolute inset-0 bg-ink/[0.03]"
          transition={SPRING}
        />
      )}
      
      <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        <div className={`lg:col-span-7 flex items-baseline gap-4 md:gap-8 ${isEven ? "" : "lg:order-2 lg:justify-end"}`}>
          <span className="font-mono text-[10px] tracking-[0.2em] text-ink-secondary">
            0{index + 1}
          </span>
          
          <motion.div
            animate={{ y: isHovered ? -4 : 0 }}
            transition={SPRING}
          >
            <span className="font-bold tracking-[-0.05em] text-[clamp(4.5rem,9vw,9rem)] leading-none text-ink block select-none">
              <AnimatedCounter
                value={item.number}
                suffix={item.suffix}
                prefersReducedMotion={prefersReducedMotion}
              />
            </span>
          </motion.div>
        </div>

        <div className={`lg:col-span-5 flex flex-col justify-center ${isEven ? "" : "lg:order-1"}`}>
          <div className="flex items-center justify-between mb-2">
            <motion.span
              animate={{ color: isHovered ? "#1C1917" : "#A8A29E" }}
              className="font-mono text-[10px] md:text-[11px] tracking-[0.2em] uppercase"
            >
              {item.label}
            </motion.span>

            <motion.span
              animate={{
                opacity: isHovered ? 1 : 0,
                x: isHovered ? 0 : -6,
              }}
              className="font-mono text-xs text-ink"
            >
              <ArrowUpRight size={13} />
            </motion.span>
          </div>

          <p className="text-[13px] md:text-[14px] font-light leading-relaxed text-ink-secondary max-w-[34ch]">
            {item.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Results() {
  const prefersReducedMotion = useReducedMotion();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="relative bg-white text-ink py-16 md:py-20 px-[6vw] overflow-hidden selection:bg-indigo-100/20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_35%_at_15%_80%,rgba(38,58,120,0.1),transparent_70%)]" />

      <div className="mx-auto max-w-[1400px] w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 mb-10 md:mb-14 items-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-5% 0px" }}
            transition={{ duration: 0.75, ease: EASE }}
            className="lg:col-span-7"
          >
            <span className="inline-flex items-center gap-2.5 font-mono text-[10px] tracking-[0.3em] uppercase text-ink-secondary mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-ink/70"></span>
              06 / RESULTS
            </span>

            <h2 className="font-semibold leading-[0.94] tracking-tight text-[clamp(2.4rem,5vw,4.5rem)] text-ink">
              Results,
              <br />
              <span
                className="text-ink/80 font-normal"
                style={{ fontFamily: SERIF, fontStyle: "italic" }}
              >
                not just deliverables.
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1, ease: EASE }}
            className="lg:col-span-5 pb-1"
          >
            <p className="text-[14px] md:text-[15px] font-light leading-relaxed text-ink-secondary max-w-[36ch]">
              &ldquo;We measure success by what happens after the work goes live.&rdquo;
            </p>
          </motion.div>
        </div>

        <div className="flex flex-col">
          {RESULTS.map((item, index) => (
            <ResultItem
              key={item.label}
              item={item}
              index={index}
              isHovered={hoveredIndex === index}
              onHover={setHoveredIndex}
              prefersReducedMotion={prefersReducedMotion}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE }}
          className="mt-14 md:mt-18 pt-8 border-t border-border/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
        >
          <span className="font-mono text-[10px] tracking-[0.22em] text-ink-secondary uppercase">
            WE PROMOTE INDIA — PROOF OF IMPACT
          </span>
          <p className="text-[13px] md:text-[14px] font-light text-ink-secondary">
            Numbers tell part of the story. The work tells the rest.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
