"use client";

import { motion, useReducedMotion } from "framer-motion";

const SERIF = "'Instrument Serif', 'Times New Roman', ui-serif, Georgia, serif";

const STEPS = [
  {
    step: "01",
    tag: "Blueprint",
    title: "Discovery & Strategy",
    text: "We audit your current positioning, dissect competitor landscapes, map precise user journeys, and lock down exact KPI metrics before writing a single line of code.",
    accent: "bg-[#EAB308]",
  },
  {
    step: "02",
    tag: "Aesthetic",
    title: "Identity & Visuals",
    text: "We craft an arresting visual language—merging bespoke typography, strict grid alignment, and micro-interactions that command immediate authority and trust.",
    accent: "bg-[#EAB308]",
  },
  {
    step: "03",
    tag: "Performance",
    title: "Engineering & Speed",
    text: "We build using modern, lightweight full-stack architecture designed for zero-latency loading, fluid navigation, and immaculate multi-device responsiveness.",
    accent: "bg-[#EAB308]",
  },
  {
    step: "04",
    tag: "Momentum",
    title: "Launch & Scale",
    text: "We deploy rigorous testing systems, configure automated analytics tracking, and establish scalable foundations engineered for high conversion rates.",
    accent: "bg-[#EAB308]",
  },
];

export default function TheDifference() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative w-full overflow-hidden bg-[#020202] py-24 md:py-32 font-sans selection:bg-[#EAB308]/20 selection:text-white">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_10%,rgba(20,60,170,0.15),transparent_70%)]" />

      {/* Vertical background grid lines (matching the layout) */}
      <div className="pointer-events-none absolute inset-0 flex justify-evenly opacity-30">
        <div className="h-full w-px bg-white/10" />
        <div className="h-full w-px bg-white/10" />
        <div className="h-full w-px bg-white/10" />
        <div className="h-full w-px bg-white/10" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-[5vw]">
        
        {/* Centered Header Layout */}
        <div className="mx-auto mb-20 flex max-w-4xl flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
            className="flex flex-col items-center"
          >
            {/* Pill Badge */}
            <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/5 px-5 py-2 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-[#10B981] shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
              <span className="font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-[#EAB308]">
                05 / THE FRAMEWORK
              </span>
            </div>

            <h2 className="mb-6 text-[clamp(2.5rem,5vw,4.5rem)] font-light leading-[1.05] tracking-tight text-white drop-shadow-md">
              How we turn vision into{" "}
              <span
                className="font-normal text-[#A1A1AA]"
                style={{ fontFamily: SERIF, fontStyle: "italic" }}
              >
                measurable reality.
              </span>
            </h2>

            <p className="max-w-2xl text-[15px] font-light leading-relaxed text-[#D4D4D8] sm:text-lg">
              A transparent, four-phase execution engine built to completely
              eliminate guesswork and ship elite-grade digital experiences.
            </p>
          </motion.div>
        </div>

        {/* Dark Glassmorphic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {STEPS.map((item, index) => (
            <motion.div
              key={item.step}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: index * 0.12, ease: [0.25, 1, 0.5, 1] }}
              className="relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-500 hover:border-white/20 hover:bg-white/[0.08] hover:shadow-[0_12px_32px_rgba(0,0,0,0.5)] group"
            >
              {/* Subtle top indicator border highlight on hover */}
              <div className="absolute left-0 right-0 top-0 h-[3px] bg-transparent transition-colors duration-300 group-hover:bg-[#EAB308]" />

              <div>
                {/* Header tag and big number */}
                <div className="mb-8 flex items-center justify-between">
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#A1A1AA] transition-colors duration-300 group-hover:border-white/20 group-hover:text-[#D4D4D8]">
                    {item.tag}
                  </span>
                  <span className="font-mono text-3xl font-black text-white/5 transition-colors duration-300 group-hover:text-white/20">
                    {item.step}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mb-4 text-xl font-light tracking-tight text-white transition-colors duration-300 group-hover:text-[#EAB308]">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-[14px] font-light leading-relaxed text-[#A1A1AA]">
                  {item.text}
                </p>
              </div>

              {/* Card Footer */}
              <div className="mt-12 flex items-center justify-between border-t border-white/10 pt-6">
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#71717A]">
                  Phase // {item.step}
                </span>
                <div className="h-2 w-2 rounded-full bg-white/10 transition-all duration-300 group-hover:scale-125 group-hover:bg-[#EAB308]" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
