"use client";

import { motion, useReducedMotion } from "framer-motion";

const SERIF = "'Instrument Serif', 'Times New Roman', ui-serif, Georgia, serif";

const STEPS = [
  {
    step: "01",
    tag: "Blueprint",
    title: "Discovery & Strategy",
    text: "We audit your current positioning, dissect competitor landscapes, map precise user journeys, and lock down exact KPI metrics before writing a single line of code.",
    accent: "bg-[#E05A47]",
  },
  {
    step: "02",
    tag: "Aesthetic",
    title: "Identity & Visuals",
    text: "We craft an arresting visual language—merging bespoke typography, strict grid alignment, and micro-interactions that command immediate authority and trust.",
    accent: "bg-[#1E1B18]",
  },
  {
    step: "03",
    tag: "Performance",
    title: "Engineering & Speed",
    text: "We build using modern, lightweight full-stack architecture designed for zero-latency loading, fluid navigation, and immaculate multi-device responsiveness.",
    accent: "bg-[#E05A47]",
  },
  {
    step: "04",
    tag: "Momentum",
    title: "Launch & Scale",
    text: "We deploy rigorous testing systems, configure automated analytics tracking, and establish scalable foundations engineered for high conversion rates.",
    accent: "bg-[#8C8375]",
  },
];

export default function TheDifference() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative bg-[#FAF8F5] text-[#1E1B18] py-28 md:py-36 border-b border-[#E8E2D9] overflow-hidden selection:bg-[#E05A47]/20">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_10%,rgba(224,90,71,0.05),transparent_70%)]" />

      <div className="relative mx-auto max-w-[1300px] px-6 md:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20">
          <div className="max-w-2xl">
            <span className="mb-4 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.3em] text-[#E05A47] font-bold">
              <span className="h-1.5 w-1.5 rounded-full bg-[#E05A47]" />
              05 / THE FRAMEWORK
            </span>
            <h2 className="text-[clamp(2.4rem,4.5vw,4rem)] font-extrabold tracking-tight leading-[1.05] text-[#1E1B18]">
              How we turn vision into{" "}
              <span
                className="font-normal text-[#8C8375]"
                style={{ fontFamily: SERIF, fontStyle: "italic" }}
              >
                measurable reality.
              </span>
            </h2>
          </div>
          <p className="text-[15px] font-light text-[#5C5346] leading-relaxed max-w-md mt-6 md:mt-0">
            A transparent, four-phase execution engine built to completely eliminate guesswork and ship elite-grade digital experiences.
          </p>
        </div>

        {/* Beautiful, Elevated Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {STEPS.map((item, index) => (
            <motion.div
              key={item.step}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: index * 0.12, ease: [0.25, 1, 0.5, 1] }}
              className="relative bg-white rounded-2xl p-8 flex flex-col justify-between border border-[#E8E2D9] shadow-[0_4px_20px_rgba(30,27,24,0.03)] hover:shadow-[0_12px_32px_rgba(30,27,24,0.08)] hover:border-[#E05A47]/30 transition-all duration-500 group overflow-hidden"
            >
              {/* Subtle top indicator border highlight on hover */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-transparent group-hover:bg-[#E05A47] transition-colors duration-300" />

              <div>
                {/* Header tag and big number */}
                <div className="flex items-center justify-between mb-8">
                  <span className="font-mono text-[10px] tracking-[0.2em] uppercase font-bold text-[#8C8375] bg-[#FAF8F5] px-3 py-1 rounded-full border border-[#E8E2D9]">
                    {item.tag}
                  </span>
                  <span className="font-mono text-3xl font-black text-[#1E1B18]/10 group-hover:text-[#E05A47]/20 transition-colors duration-300">
                    {item.step}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold tracking-tight text-[#1E1B18] mb-4 group-hover:text-[#E05A47] transition-colors duration-300">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-[14px] font-light leading-relaxed text-[#5C5346]">
                  {item.text}
                </p>
              </div>

              {/* Card Footer */}
              <div className="mt-12 pt-6 border-t border-[#FAF8F5] flex items-center justify-between">
                <span className="font-mono text-[10px] tracking-[0.25em] text-[#8C8375] uppercase">
                  Phase // {item.step}
                </span>
                <div className="w-2 h-2 rounded-full bg-[#E8E2D9] group-hover:bg-[#E05A47] group-hover:scale-125 transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
