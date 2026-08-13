"use client";
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Compass, Cpu, ShieldCheck, Rocket, Layers } from "lucide-react";
import { motion } from "framer-motion";

// ==========================================
// DATA STRUCTURES
// ==========================================
const PROCESS_STEPS = [
  {
    step: "01",
    title: "Deep-Dive Discovery & Audit",
    tagline: "Uncovering Bottlenecks & Opportunities",
    desc: "We start with an exhaustive analysis of your current digital ecosystem, competitive landscape, and revenue model. No guesswork—just precise data and strategic clarity.",
    deliverables: ["Comprehensive Tech & PR Audit", "Competitor Gap Analysis", "Growth Roadmap Architecture"],
    icon: Compass,
  },
  {
    step: "02",
    title: "Bespoke System Architecture",
    tagline: "Engineering for Scale & Elegance",
    desc: "Our senior engineers and creative directors design custom technical stacks and high-conversion UI/UX workflows tailored specifically to your brand's DNA.",
    deliverables: ["Full-Stack Wireframes & Prototypes", "UI/UX Design Systems (Tailwind/Framer)", "Secure Cloud Infrastructure Plan"],
    icon: Layers,
  },
  {
    step: "03",
    title: "Precision Full-Stack Execution",
    tagline: "Pixel-Perfect Development",
    desc: "We write clean, high-performance code and integrate dynamic features with absolute precision—ensuring lightning-fast load times and flawless mobile responsiveness.",
    deliverables: ["MERN / Next.js Development", "Rigorous QA & Performance Testing", "Local Storage & State Synchronization"],
    icon: Cpu,
  },
  {
    step: "04",
    title: "Authority Amplification & PR",
    tagline: "Forbes, TOI & National Syndication",
    desc: "While your digital assets are perfected, our media strategists secure top-tier PR placements and authority signals in premier publications to build instant market trust.",
    deliverables: ["Tier-1 Media Syndication", "Brand Authority Positioning", "Targeted Growth Campaigns"],
    icon: ShieldCheck,
  },
  {
    step: "05",
    title: "Launch, Scale & Compounding",
    tagline: "Dominating Your Market Long-Term",
    desc: "We deploy your ecosystem live into production, providing continuous optimization, active client management, and ongoing scaling support for exponential ROI.",
    deliverables: ["Live Production Deployment", "Ongoing Performance Optimization", "Active Support & Maintenance"],
    icon: Rocket,
  },
];

const PROCESS_METRICS = [
  { value: "05+", label: "Years of Refined Execution" },
  { value: "4,500+", label: "Projects Delivered Flawlessly" },
  { value: "165+", label: "Active Ongoing Client Partners" },
  { value: "100%", label: "In-House Quality Control" },
];

// ==========================================
// ANIMATION VARIANTS
// ==========================================
const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function ProcessPage() {
  return (
    <div className="bg-transparent text-[#1A1714] min-h-screen selection:bg-[#8C6A1E]/20 selection:text-[#1A1714] font-sans overflow-x-hidden">
      
      {/* =========================================
          SECTION 01: HERO
      ========================================= */}
      <section className="relative min-h-[80vh] flex flex-col justify-end px-[5vw] pb-20 pt-32 border-b border-[#8C6A1E]/20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="max-w-[1400px] w-full mx-auto"
        >
          <motion.div
            variants={fadeUp}
            className="mb-6 flex items-center gap-2.5"
          >
            <span className="inline-flex items-center justify-center w-2 h-2 rounded-full bg-[#8C6A1E] animate-pulse" />
            <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.25em] uppercase text-[#8C6A1E] font-bold">
              01 / Our Process // Authority-Driven Execution
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-[clamp(42px,8vw,120px)] leading-[1.05] tracking-[-0.02em] font-light mb-8 max-w-[1250px]"
            style={{ fontFamily: "var(--font-display, 'Fraunces'), serif" }}
          >
            A systematic blueprint for <br className="hidden md:block" />
            <span className="font-normal italic text-[#8C6A1E]">absolute market dominance.</span>
          </motion.h1>

          <motion.div
            variants={fadeUp}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-t border-[#8C6A1E]/20 pt-8"
          >
            <p className="text-[#57534E] text-lg md:text-xl max-w-xl font-light leading-relaxed">
              We don't rely on guesswork or generic templates. Over 5 years and 4,500+ projects delivered, we have perfected an authority-driven framework that bridges elite engineering with tier-1 media growth.
            </p>

            <div className="flex items-center gap-3 text-[#78716C] font-mono text-[10px] tracking-[0.2em] uppercase font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-[#8C6A1E]" /> 5-Stage Precision Protocol
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* =========================================
          SECTION 02: METRICS BAR
      ========================================= */}
      <section className="px-[5vw] py-16 border-b border-[#8C6A1E]/20 bg-[#FAF8F5]/40">
        <div className="max-w-[1400px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
          {PROCESS_METRICS.map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="flex flex-col gap-1"
            >
              <span 
                className="text-[clamp(28px,3vw,42px)] font-light text-[#1A1714]"
                style={{ fontFamily: "var(--font-display, 'Fraunces'), serif" }}
              >
                {item.value}
              </span>
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#57534E] font-medium">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* =========================================
          SECTION 03: THE 5-STAGE PROCESS TIMELINE
      ========================================= */}
      <section className="px-[5vw] py-28 border-b border-[#8C6A1E]/20">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mb-20 max-w-2xl"
          >
            <motion.span
              variants={fadeUp}
              className="block font-mono text-[11px] tracking-[0.25em] uppercase text-[#8C6A1E] mb-4 font-bold"
            >
              How We Work
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="text-[clamp(34px,4.5vw,60px)] leading-[1.1] font-light tracking-tight"
              style={{ fontFamily: "var(--font-display, 'Fraunces'), serif" }}
            >
              From initial discovery to <br />
              <span className="italic text-[#8C6A1E]">long-term compounding.</span>
            </motion.h2>
          </motion.div>

          <div className="flex flex-col gap-12">
            {PROCESS_STEPS.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="bg-[#FAF8F5] border border-[#8C6A1E]/20 rounded-sm p-8 md:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-start hover:border-[#8C6A1E]/50 transition-colors"
                >
                  <div className="lg:col-span-4 flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-[#8C6A1E] font-bold tracking-widest uppercase">
                        Stage {item.step} / Protocol
                      </span>
                      <div className="p-2.5 bg-[#8C6A1E]/10 rounded-sm text-[#8C6A1E]">
                        <IconComponent size={20} />
                      </div>
                    </div>
                    <span className="font-mono text-xs uppercase tracking-wider text-[#78716C] font-semibold">
                      {item.tagline}
                    </span>
                    <h3 
                      className="text-2xl md:text-3xl font-light tracking-tight text-[#1A1714]"
                      style={{ fontFamily: "var(--font-display, 'Fraunces'), serif" }}
                    >
                      {item.title}
                    </h3>
                  </div>

                  <div className="lg:col-span-8 flex flex-col justify-between gap-8 lg:border-l lg:border-[#8C6A1E]/15 lg:pl-12">
                    <p className="text-[#57534E] text-base md:text-lg font-light leading-relaxed">
                      {item.desc}
                    </p>

                    <div className="pt-6 border-t border-[#8C6A1E]/15">
                      <span className="font-mono text-xs uppercase tracking-widest text-[#8C6A1E] font-bold block mb-3">
                        Key Deliverables & Milestones:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {item.deliverables.map((deliv, idx) => (
                          <div key={idx} className="bg-[#FAF8F5]/80 border border-[#8C6A1E]/20 p-3 rounded-xs font-mono text-xs text-[#1A1714]">
                            ✓ {deliv}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 04: TRANSPARENCY & EXECUTION PROMISE
      ========================================= */}
      <section className="px-[5vw] py-28 bg-[#FAF8F5]/50 border-b border-[#8C6A1E]/20">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 text-[#8C6A1E] font-mono text-xs tracking-widest uppercase font-bold">
              <Sparkles size={14} /> Absolute Accountability
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="text-[clamp(34px,4.5vw,60px)] font-light leading-[1.08] tracking-tight text-[#1A1714]"
              style={{ fontFamily: "var(--font-display, 'Fraunces'), serif" }}
            >
              No fluff, no vanity metrics. <br />
              <span className="italic text-[#8C6A1E]">Tied directly to your bottom line.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-[#57534E] text-base md:text-lg font-light leading-relaxed">
              Managing over 165 active ongoing clients requires rigorous operational discipline. Every sprint, deliverable, and PR placement through our Mohali and New Delhi headquarters is tied directly to real revenue growth and enduring brand authority.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 bg-[#FAF8F5] p-8 md:p-10 border border-[#8C6A1E]/30 rounded-sm shadow-xl flex flex-col gap-6"
          >
            <h3 
              className="text-2xl font-light text-[#1A1714]"
              style={{ fontFamily: "var(--font-display, 'Fraunces'), serif" }}
            >
              Ready to experience a frictionless workflow?
            </h3>
            <p className="text-sm text-[#57534E] font-light leading-relaxed">
              Connect with our team today and let us map out your custom growth blueprint.
            </p>
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center bg-[#8C6A1E] text-white px-8 py-4 rounded-xs font-mono text-[11px] tracking-[0.2em] uppercase font-semibold hover:bg-[#1A1714] transition-colors shadow-lg shadow-[#8C6A1E]/20"
            >
              <span className="flex items-center gap-3">
                Initiate Project Roadmap <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* =========================================
          SECTION 05: FINAL CTA
      ========================================= */}
      <section className="px-[5vw] py-32 text-center flex flex-col items-center justify-center relative">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="flex flex-col items-center max-w-[1000px]"
        >
          <motion.span
            variants={fadeUp}
            className="font-mono text-[11px] tracking-[0.25em] uppercase text-[#8C6A1E] mb-6 font-bold"
          >
            Ready to scale your brand?
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="text-[clamp(38px,6.5vw,96px)] leading-[1.05] font-light tracking-tight mb-12 text-[#1A1714]"
            style={{ fontFamily: "var(--font-display, 'Fraunces'), serif" }}
          >
            Let&apos;s build <br />
            <span className="italic text-[#8C6A1E]">something impossible</span> <br />
            to ignore.
          </motion.h2>

          <motion.div variants={fadeUp}>
            <Link
              to="/contact"
              className="group relative inline-flex items-center justify-center bg-[#8C6A1E] text-white px-10 py-4 rounded-xs font-mono text-[11px] tracking-[0.2em] uppercase overflow-hidden shadow-xl shadow-[#8C6A1E]/25 font-semibold transition-colors duration-300 hover:bg-[#1A1714]"
            >
              <span className="relative z-10 flex items-center gap-3">
                Start a Conversation{" "}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </motion.div>

          <motion.a
            variants={fadeUp}
            href="mailto:hi@wepromoteindia.com"
            className="mt-8 font-mono text-xs tracking-widest text-[#78716C] hover:text-[#1A1714] transition-colors pb-1 border-b border-transparent hover:border-[#1A1714] font-semibold uppercase"
          >
            hi@wepromoteindia.com
          </motion.a>
        </motion.div>
      </section>
    </div>
  );
}
