"use client";
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, TrendingUp, ShoppingBag, Stethoscope, Landmark, Building, GraduationCap, Utensils, Plane } from "lucide-react";
import { motion } from "framer-motion";

// ==========================================
// DATA STRUCTURES
// ==========================================
const INDUSTRIES = [
  {
    id: "01",
    title: "E-Commerce & Retail",
    tagline: "High-Converting Digital storefronts",
    desc: "We engineer lightning-fast e-commerce ecosystems, bespoke UI/UX, and performance marketing frameworks designed to scale transaction volume and brand loyalty.",
    metrics: "3.4x Average ROAS Boost",
    icon: ShoppingBag,
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "02",
    title: "Healthcare & Biotech",
    tagline: "Trust-Driven Digital Architecture",
    desc: "Building secure, HIPAA-compliant platforms and authoritative PR campaigns that establish medical institutions and health tech innovators as industry leaders.",
    metrics: "99.9% Patient Trust Index",
    icon: Stethoscope,
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "03",
    title: "Fintech & Banking",
    tagline: "Secure, Scalable Financial Systems",
    desc: "From AI-powered finance dashboards to enterprise-grade banking applications, we build secure digital touchpoints backed by top-tier national PR placements.",
    metrics: "$120M+ Transactions Secured",
    icon: Landmark,
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "04",
    title: "Real Estate & Architecture",
    tagline: "Cinematic Presence & Lead Generation",
    desc: "Showcase luxury properties and real estate developments with immersive digital interfaces, interactive 3D floorplans, and high-net-worth client acquisition funnels.",
    metrics: "45% Lower Cost Per Lead",
    icon: Building,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "05",
    title: "EdTech & Academics",
    tagline: "Next-Gen Learning Portals",
    desc: "Scalable learning management systems (LMS), student portals, and student acquisition campaigns designed for modern educational institutions and course creators.",
    metrics: "500k+ Active Students Scaled",
    icon: GraduationCap,
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "06",
    title: "Hospitality & Tourism",
    tagline: "Immersive Booking & Brand Stories",
    desc: "Dynamic hotel booking engines, resort experiences, and targeted digital positioning that turn casual travelers into lifelong brand advocates.",
    metrics: "2.8x Direct Booking Growth",
    icon: Utensils,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop",
  },
];

const EXPERTISE_METRICS = [
  { value: "4,500+", label: "IT & Web Projects Delivered" },
  { value: "165+", label: "Active Ongoing Clients" },
  { value: "05+", label: "Years of Cross-Industry Mastery" },
  { value: "100%", label: "Tailored Sector Strategies" },
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

export default function IndustriesPage() {
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
              01 / Industries // Sector Expertise
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-[clamp(42px,8vw,120px)] leading-[1.05] tracking-[-0.02em] font-light mb-8 max-w-[1250px]"
            style={{ fontFamily: "var(--font-display, 'Fraunces'), serif" }}
          >
            Engineered for impact across <br className="hidden md:block" />
            <span className="font-normal italic text-[#8C6A1E]">diverse market sectors.</span>
          </motion.h1>

          <motion.div
            variants={fadeUp}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-t border-[#8C6A1E]/20 pt-8"
          >
            <p className="text-[#57534E] text-lg md:text-xl max-w-xl font-light leading-relaxed">
              We combine deep domain expertise with high-end full-stack engineering and tier-1 PR execution to deliver specialized solutions tailored to your industry's unique demands.
            </p>

            <div className="flex items-center gap-3 text-[#78716C] font-mono text-[10px] tracking-[0.2em] uppercase font-semibold">
              <TrendingUp className="w-3.5 h-3.5 text-[#8C6A1E]" /> Domain-Specific Scalability
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* =========================================
          SECTION 02: METRICS BAR
      ========================================= */}
      <section className="px-[5vw] py-16 border-b border-[#8C6A1E]/20 bg-[#FAF8F5]/40">
        <div className="max-w-[1400px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
          {EXPERTISE_METRICS.map((item, idx) => (
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
          SECTION 03: INDUSTRIES GRID / SHOWCASE
      ========================================= */}
      <section className="px-[5vw] py-28 border-b border-[#8C6A1E]/20">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mb-16 max-w-2xl"
          >
            <motion.span
              variants={fadeUp}
              className="block font-mono text-[11px] tracking-[0.25em] uppercase text-[#8C6A1E] mb-4 font-bold"
            >
              Sectors We Transform
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="text-[clamp(34px,4.5vw,60px)] leading-[1.1] font-light tracking-tight"
              style={{ fontFamily: "var(--font-display, 'Fraunces'), serif" }}
            >
              Specialized execution for <br />
              <span className="italic text-[#8C6A1E]">ambitious enterprises.</span>
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {INDUSTRIES.map((ind, index) => {
              const IconComponent = ind.icon;
              return (
                <motion.div
                  key={ind.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="bg-[#FAF8F5] border border-[#8C6A1E]/20 rounded-sm overflow-hidden shadow-sm flex flex-col justify-between group hover:border-[#8C6A1E]/50 transition-colors"
                >
                  <div className="relative aspect-[16/9] overflow-hidden bg-[#FAF8F5]/80">
                    <img
                      src={ind.image}
                      alt={ind.title}
                      className="w-full h-full object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-[#FAF8F5]/90 backdrop-blur-md px-3 py-1.5 border border-[#8C6A1E]/30 rounded-xs flex items-center gap-2">
                      <IconComponent size={14} className="text-[#8C6A1E]" />
                      <span className="font-mono text-[10px] uppercase tracking-widest text-[#1A1714] font-bold">
                        Sector {ind.id}
                      </span>
                    </div>
                    <div className="absolute bottom-4 right-4 bg-[#1A1714] text-white px-3 py-1 rounded-xs font-mono text-[10px] tracking-wider uppercase">
                      {ind.metrics}
                    </div>
                  </div>

                  <div className="p-8 md:p-10 flex flex-col gap-6 flex-grow justify-between">
                    <div>
                      <span className="font-mono text-xs text-[#8C6A1E] font-bold uppercase tracking-widest block mb-2">
                        {ind.tagline}
                      </span>
                      <h3 
                        className="text-2xl md:text-3xl font-light tracking-tight text-[#1A1714] mb-4"
                        style={{ fontFamily: "var(--font-display, 'Fraunces'), serif" }}
                      >
                        {ind.title}
                      </h3>
                      <p className="text-[#57534E] text-sm md:text-base font-light leading-relaxed">
                        {ind.desc}
                      </p>
                    </div>

                    <div className="pt-6 border-t border-[#8C6A1E]/15 flex items-center justify-between">
                      <span className="font-mono text-xs text-[#78716C] uppercase tracking-wider">
                        Custom Tech & PR Suite
                      </span>
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 font-mono text-xs text-[#8C6A1E] uppercase tracking-widest font-bold hover:text-[#1A1714] transition-colors"
                      >
                        Discuss Project <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 04: CUSTOM SOLUTIONS CALLOUT
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
              <Sparkles size={14} /> Tailored Architecture
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="text-[clamp(34px,4.5vw,60px)] font-light leading-[1.08] tracking-tight text-[#1A1714]"
              style={{ fontFamily: "var(--font-display, 'Fraunces'), serif" }}
            >
              Don't see your industry listed? <br />
              <span className="italic text-[#8C6A1E]">We engineer bespoke solutions.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-[#57534E] text-base md:text-lg font-light leading-relaxed">
              With over 4,500 projects delivered across 5 years, our engineering and strategy teams specialize in adapting to niche markets, complex workflows, and disruptive business models.
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
              Ready to dominate your market?
            </h3>
            <p className="text-sm text-[#57534E] font-light leading-relaxed">
              Connect with our technical architects in Mohali or New Delhi to discuss your custom roadmap today.
            </p>
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center bg-[#8C6A1E] text-white px-8 py-4 rounded-xs font-mono text-[11px] tracking-[0.2em] uppercase font-semibold hover:bg-[#1A1714] transition-colors shadow-lg shadow-[#8C6A1E]/20"
            >
              <span className="flex items-center gap-3">
                Schedule Consultation <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
            Partner with industry leaders
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
