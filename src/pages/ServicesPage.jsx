"use client";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowDown, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// ==========================================
// DATA STRUCTURES (EXPANDED SERVICES & CAPABILITIES)
// ==========================================
const CAPABILITIES = [
  {
    num: "01",
    title: "STRATEGY & CONSULTING",
    services: [
      "Creative & Digital Strategy",
      "Consulting Services",
      "Media Planning & Buying",
      "Market Positioning",
    ],
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop",
  },
  {
    num: "02",
    title: "BRANDING & CREATIVE",
    services: [
      "Branding & Marketing Communications",
      "Content Creation",
      "Video Production",
      "Influencer Management",
    ],
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1600&auto=format&fit=crop",
  },
  {
    num: "03",
    title: "TECHNOLOGY & DIGITAL",
    services: [
      "Mobile & Website UI/UX",
      "Web Development",
      "E-Commerce Experiences",
      "Visual Effects",
    ],
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1600&auto=format&fit=crop",
  },
  {
    num: "04",
    title: "PR, AUTHORITY & GROWTH",
    services: [
      "PR & Print Features (Forbes, TOI, HT)",
      "Authority Building & Aggressive Awareness",
      "Social Video & Paid Marketing",
      "Analytics & SEO",
    ],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop",
  },
];


const FLOW = ["DISCOVER", "DEFINE", "CREATE", "BUILD", "LAUNCH", "GROW"];

const DELIVERABLES = [
  "PR & Top Magazine Features",
  "Brand Authority Systems",
  "High-Performance Websites",
  "E-Commerce Experiences",
  "Mobile & Web UI/UX",
  "Video Production & VFX",
  "Influencer Campaigns",
  "Media Planning & Buying",
  "Paid Marketing & Social Video",
  "Advanced Analytics & SEO",
];

const INDUSTRIES = [
  "Healthcare",
  "Real Estate",
  "Hospitality",
  "Education",
  "Professional Services",
  "Lifestyle",
  "Technology",
  "Emerging Brands",
];

const PRINCIPLES = [
  {
    num: "01",
    title: "THINK BEFORE WE BUILD",
    desc: "Strategy and deep market positioning dictate every creative and technical decision.",
  },
  {
    num: "02",
    title: "PR & AGGRESSIVE AWARENESS",
    desc: "Placing your business in top publications like Forbes, Times of India, and Hindustan Times to build unassailable authority.",
  },
  {
    num: "03",
    title: "TECHNOLOGY THAT PERFORMS",
    desc: "Fast, scalable, and responsive digital products built for modern web supremacy.",
  },
  {
    num: "04",
    title: "CREATE FOR THE LONG TERM",
    desc: "We build digital foundations and authority ecosystems that compound as your business scales.",
  },
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

export default function ServicesPage() {
  const [hoveredCapability, setHoveredCapability] = useState(null);

  return (
    <div className="bg-transparent text-[#1A1714] min-h-screen selection:bg-[#8C6A1E]/20 selection:text-[#1A1714] font-sans overflow-x-hidden">
      
      {/* =========================================
          SECTION 01: HERO
      ========================================= */}
      <section className="relative min-h-[85vh] flex flex-col justify-end px-[5vw] pb-20 pt-32 border-b border-[#8C6A1E]/20">
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
              02 / Services // We Promote India
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-[clamp(42px,8vw,120px)] leading-[1.05] tracking-[-0.02em] font-light mb-8 max-w-[1250px]"
            style={{ fontFamily: "var(--font-display, 'Fraunces'), serif" }}
          >
            We build brands, engineer authority, <br className="hidden md:block" />
            <span className="font-normal italic text-[#8C6A1E]">and secure top-tier PR.</span>
          </motion.h1>

          <motion.div
            variants={fadeUp}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-t border-[#8C6A1E]/20 pt-8"
          >
            <p className="text-[#57534E] text-lg md:text-xl max-w-xl font-light leading-relaxed">
              From elite PR features in Forbes, Times of India, and Hindustan Times to aggressive market awareness, UI/UX, and performance marketing — brought together under one roof.
            </p>

            <div className="flex items-center gap-3 text-[#78716C] font-mono text-[10px] tracking-[0.2em] uppercase animate-pulse font-semibold">
              Explore Services <ArrowDown className="w-3 h-3 text-[#8C6A1E]" />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* =========================================
          SECTION 02: CORE CAPABILITIES (HOVER ROWS)
      ========================================= */}
      <section className="px-[5vw] py-24 border-b border-[#8C6A1E]/20">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mb-16"
          >
            <motion.span
              variants={fadeUp}
              className="block font-mono text-[11px] tracking-[0.25em] uppercase text-[#8C6A1E] mb-4 font-bold"
            >
              What We Do
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="text-[clamp(32px,4vw,64px)] leading-[1.1] font-light tracking-tight"
              style={{ fontFamily: "var(--font-display, 'Fraunces'), serif" }}
            >
              From the first strategic spark <br />
              <span className="italic text-[#8C6A1E]">to aggressive global awareness.</span>
            </motion.h2>
          </motion.div>

          <div className="relative border-t border-[#8C6A1E]/20">
            {CAPABILITIES.map((cap, i) => (
              <motion.div
                key={cap.num}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUp}
                onMouseEnter={() => setHoveredCapability(i)}
                onMouseLeave={() => setHoveredCapability(null)}
                className="group relative flex flex-col lg:flex-row lg:items-center justify-between border-b border-[#8C6A1E]/20 py-8 lg:py-10 cursor-pointer transition-colors duration-500 hover:bg-[#FAF8F5]/60 gap-6 lg:gap-0 px-2"
              >
                <div className="flex items-baseline gap-6 lg:gap-12 lg:w-1/3 z-10">
                  <span className="font-mono text-xs text-[#8C6A1E] font-bold shrink-0">
                    {cap.num}
                  </span>
                  <h3 
                    className="text-[clamp(24px,3.2vw,50px)] font-light tracking-tight group-hover:translate-x-3 transition-transform duration-500 ease-out text-[#1A1714] leading-none"
                    style={{ fontFamily: "var(--font-display, 'Fraunces'), serif" }}
                  >
                    {cap.title}
                  </h3>
                </div>

                <div className="flex flex-col gap-1.5 lg:w-1/3 z-10 opacity-75 group-hover:opacity-100 transition-opacity duration-500">
                  {cap.services.map((service) => (
                    <span
                      key={service}
                      className="font-mono text-[11px] tracking-[0.12em] uppercase text-[#57534E]"
                    >
                      {service}
                    </span>
                  ))}
                </div>

                <div className="hidden lg:flex items-center justify-end w-1/4 z-10 pr-8">
                  <ArrowRight
                    className="w-7 h-7 text-transparent -translate-x-6 group-hover:text-[#8C6A1E] group-hover:translate-x-0 transition-all duration-500 ease-out"
                    strokeWidth={1.5}
                  />
                </div>

                {/* Desktop Visual Reveal */}
                <AnimatePresence>
                  {hoveredCapability === i && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="hidden lg:block absolute right-[10%] top-1/2 -translate-y-1/2 w-[320px] h-[210px] overflow-hidden pointer-events-none z-20 rounded-sm border border-[#8C6A1E]/30 shadow-2xl"
                    >
                      <img
                        src={cap.image}
                        alt={cap.title}
                        className="w-full h-full object-cover filter contrast-105"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 03: FEATURED SERVICE FOCUS (PR & AUTHORITY)
      ========================================= */}
      <section className="px-[5vw] py-24 bg-[#FAF8F5]/50 border-b border-[#8C6A1E]/20">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex flex-col gap-6"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 text-[#8C6A1E] font-mono text-xs tracking-widest uppercase font-bold">
              <Sparkles size={14} /> Spotlight Capability
            </motion.div>
            <motion.h2 
              variants={fadeUp}
              className="text-[clamp(34px,4.5vw,60px)] font-light leading-[1.08] tracking-tight text-[#1A1714]"
              style={{ fontFamily: "var(--font-display, 'Fraunces'), serif" }}
            >
              Elite PR & Aggressive <br />
              <span className="italic text-[#8C6A1E]">Brand Authority Building.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-[#57534E] text-base md:text-lg font-light leading-relaxed">
              We position your business where it matters most. Get featured in top-tier publications like <strong className="text-[#1A1714] font-medium">Forbes, Times of India, and Hindustan Times</strong>, backed by aggressive awareness strategies that turn your brand into an undeniable industry leader.
            </motion.p>
            <motion.div variants={fadeUp} className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 font-mono text-[11px] tracking-[0.2em] uppercase text-[#8C6A1E] hover:text-[#1A1714] transition-colors font-bold"
              >
                Launch Your PR Campaign <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="bg-[#FAF8F5] p-6 border border-[#8C6A1E]/20 rounded-sm flex flex-col justify-between gap-8 shadow-sm">
              <span className="font-mono text-xs text-[#8C6A1E] font-bold">01 / PUBLICATIONS</span>
              <div>
                <h4 className="text-xl font-light mb-1" style={{ fontFamily: "var(--font-display, 'Fraunces'), serif" }}>Top Media Outlets</h4>
                <p className="text-xs text-[#57534E] font-light">Forbes, TOI, HT, and leading national print & digital syndicates.</p>
              </div>
            </div>
            <div className="bg-[#FAF8F5] p-6 border border-[#8C6A1E]/20 rounded-sm flex flex-col justify-between gap-8 shadow-sm mt-6">
              <span className="font-mono text-xs text-[#8C6A1E] font-bold">02 / MOMENTUM</span>
              <div>
                <h4 className="text-xl font-light mb-1" style={{ fontFamily: "var(--font-display, 'Fraunces'), serif" }}>Aggressive Awareness</h4>
                <p className="text-xs text-[#57534E] font-light">Omnichannel saturation campaigns engineered for maximum market capture.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================
          SECTION 04: SERVICE DETAIL (EDITORIAL)
      ========================================= */}
      <section className="px-[5vw] py-24 flex flex-col gap-28 border-b border-[#8C6A1E]/20">
        
        {/* STRATEGY & CONSULTING */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-[1400px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 items-center"
        >
          <div className="flex flex-col gap-6">
            <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-[#8C6A1E] font-bold">
              01 / Strategy & Consulting
            </span>
            <h2 
              className="text-[clamp(36px,4.5vw,72px)] leading-[1.08] tracking-tight font-light text-[#1A1714]"
              style={{ fontFamily: "var(--font-display, 'Fraunces'), serif" }}
            >
              Start with clarity.
              <br />
              <span className="italic text-[#8C6A1E]">Scale with precision.</span>
            </h2>
          </div>
          <div className="flex flex-col justify-end gap-8 md:pl-16">
            <p className="text-[#57534E] text-lg md:text-xl font-light leading-relaxed">
              We turn business goals, market opportunities, and media insights into robust creative roadmaps and high-impact media plans.
            </p>
            <ul className="flex flex-col gap-3 font-mono text-[11px] tracking-[0.15em] uppercase text-[#57534E] border-l-2 border-[#8C6A1E]/40 pl-6 font-medium">
              <li>Creative & Digital Strategy</li>
              <li>Consulting Services</li>
              <li>Media Planning & Buying</li>
              <li>Market Positioning</li>
            </ul>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 font-mono text-[11px] tracking-[0.2em] uppercase text-[#8C6A1E] hover:text-[#1A1714] transition-colors font-bold mt-2"
            >
              Explore Strategy <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>

        {/* BRANDING & CREATIVE */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-[1400px] mx-auto w-full flex flex-col md:flex-row-reverse gap-12 md:gap-20 items-center"
        >
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-[#8C6A1E] font-bold">
              02 / Branding & Creative
            </span>
            <h2 
              className="text-[clamp(36px,4.5vw,72px)] leading-[1.08] tracking-tight font-light text-[#1A1714]"
              style={{ fontFamily: "var(--font-display, 'Fraunces'), serif" }}
            >
              Make people
              <br />
              <span className="italic text-[#8C6A1E]">stop scrolling.</span>
            </h2>
            <p className="text-[#57534E] text-lg md:text-xl font-light leading-relaxed max-w-md">
              From cinematic video production to influencer management and distinctive brand communications, we craft unforgettable visual identities.
            </p>
            <div className="flex flex-wrap gap-x-3 gap-y-2 font-mono text-[11px] tracking-[0.12em] uppercase text-[#57534E] font-medium pt-2">
              <span className="bg-[#FAF8F5] px-3 py-1.5 rounded-xs border border-[#8C6A1E]/20">Branding & Comms</span>
              <span className="bg-[#FAF8F5] px-3 py-1.5 rounded-xs border border-[#8C6A1E]/20">Content Creation</span>
              <span className="bg-[#FAF8F5] px-3 py-1.5 rounded-xs border border-[#8C6A1E]/20">Video Production</span>
              <span className="bg-[#FAF8F5] px-3 py-1.5 rounded-xs border border-[#8C6A1E]/20">Influencer Management</span>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 font-mono text-[11px] tracking-[0.2em] uppercase text-[#8C6A1E] hover:text-[#1A1714] transition-colors font-bold mt-2"
            >
              Explore Creative <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="w-full md:w-1/2 aspect-[4/3] overflow-hidden rounded-sm border border-[#8C6A1E]/20 shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1200&auto=format&fit=crop"
              alt="Creative Design"
              className="w-full h-full object-cover filter contrast-105"
            />
          </div>
        </motion.div>

        {/* TECHNOLOGY & DIGITAL */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-[1400px] mx-auto w-full bg-[#FAF8F5]/80 p-8 md:p-16 border border-[#8C6A1E]/20 rounded-sm shadow-sm backdrop-blur-md"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-6">
              <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-[#8C6A1E] font-bold">
                03 / Technology & Digital
              </span>
              <h2 
                className="text-[clamp(36px,4.5vw,72px)] leading-[1.08] tracking-tight font-light text-[#1A1714]"
                style={{ fontFamily: "var(--font-display, 'Fraunces'), serif" }}
              >
                Turn ideas into
                <br />
                <span className="italic text-[#8C6A1E]">immersive web experiences.</span>
              </h2>
            </div>
            <div className="flex flex-col justify-end gap-8">
              <p className="text-[#57534E] text-lg md:text-xl font-light leading-relaxed">
                We design and build fast, responsive web applications, mobile interfaces, e-commerce stores, and stunning visual effects.
              </p>
              <div className="grid grid-cols-2 gap-4 font-mono text-[11px] tracking-[0.12em] uppercase text-[#57534E] font-medium">
                <span className="border border-[#8C6A1E]/20 bg-[#FAF8F5] p-4 rounded-xs">Mobile & Web UI/UX</span>
                <span className="border border-[#8C6A1E]/20 bg-[#FAF8F5] p-4 rounded-xs">Web Development</span>
                <span className="border border-[#8C6A1E]/20 bg-[#FAF8F5] p-4 rounded-xs">E-Commerce Experiences</span>
                <span className="border border-[#8C6A1E]/20 bg-[#FAF8F5] p-4 rounded-xs">Visual Effects</span>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 font-mono text-[11px] tracking-[0.2em] uppercase text-[#8C6A1E] hover:text-[#1A1714] transition-colors font-bold mt-2"
              >
                Explore Technology <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* PR, AUTHORITY & GROWTH */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-[1400px] mx-auto w-full text-center flex flex-col items-center justify-center gap-8"
        >
          <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-[#8C6A1E] font-bold">
            04 / PR, Authority & Growth
          </span>
          <h2 
            className="text-[clamp(36px,6vw,88px)] leading-[1.05] tracking-tight font-light max-w-5xl uppercase text-[#1A1714]"
            style={{ fontFamily: "var(--font-display, 'Fraunces'), serif" }}
          >
            Create major attention.
            <br />
            <span
              className="text-[#8C6A1E] italic font-serif lowercase font-normal"
              style={{ fontFamily: "var(--font-display, 'Fraunces'), serif" }}
            >
              Then secure
            </span>{" "}
            lasting authority.
          </h2>
          <p className="text-[#57534E] text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
            We syndicate your brand across top magazines like Forbes, TOI, and HT while driving performance marketing, social video, and SEO momentum.
          </p>
          <div className="flex flex-wrap justify-center gap-4 font-mono text-[11px] tracking-[0.12em] uppercase text-[#57534E] font-medium">
            <span className="bg-[#FAF8F5] px-4 py-2 rounded-xs border border-[#8C6A1E]/20">PR & Print Features</span>
            <span className="bg-[#FAF8F5] px-4 py-2 rounded-xs border border-[#8C6A1E]/20">Authority Building</span>
            <span className="bg-[#FAF8F5] px-4 py-2 rounded-xs border border-[#8C6A1E]/20">Social Video</span>
            <span className="bg-white px-4 py-2 rounded-xs border border-[#8C6A1E]/20">Paid Marketing</span>
            <span className="bg-[#FAF8F5] px-4 py-2 rounded-xs border border-[#8C6A1E]/20">Analytics & SEO</span>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 font-mono text-[11px] tracking-[0.2em] uppercase mt-4 text-[#8C6A1E] hover:text-[#1A1714] font-bold transition-colors"
          >
            Explore Growth & PR <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </section>

      {/* =========================================
          SECTION 05: THE SYSTEM FLOW
      ========================================= */}
      <section className="px-[5vw] py-24 bg-[#FAF8F5]/40 border-b border-[#8C6A1E]/20 overflow-hidden">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-[1400px] mx-auto flex flex-col items-center text-center"
        >
          <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-[#8C6A1E] mb-6 font-bold">
            The We Promote System
          </span>
          <h2 
            className="text-[clamp(28px,3.8vw,52px)] leading-[1.1] font-light tracking-tight mb-16 text-[#57534E]"
            style={{ fontFamily: "var(--font-display, 'Fraunces'), serif" }}
          >
            Strategy. PR & Authority. Technology. Growth.
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-5xl gap-4 md:gap-0">
            {FLOW.map((step, i) => (
              <React.Fragment key={step}>
                <motion.div
                  variants={fadeUp}
                  className="flex flex-col items-center justify-center bg-[#FAF8F5] px-6 py-4 rounded-xs border border-[#8C6A1E]/25 shadow-xs w-full md:w-auto backdrop-blur-md"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#8C6A1E] mb-2" />
                  <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#1A1714] font-bold">
                    {step}
                  </span>
                </motion.div>
                {i !== FLOW.length - 1 && (
                  <motion.div
                    variants={fadeUp}
                    className="w-0.5 h-6 md:w-full md:h-0.5 bg-[#8C6A1E]/30 md:flex-1 mx-2"
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </motion.div>
      </section>

      {/* =========================================
          SECTION 06: DELIVERABLES
      ========================================= */}
      <section className="px-[5vw] py-28 border-b border-[#8C6A1E]/20">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="md:col-span-4"
          >
            <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-[#8C6A1E] sticky top-32 font-bold">
              Built for modern brands
            </span>
          </motion.div>
          <div className="md:col-span-8 flex flex-col">
            {DELIVERABLES.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03, duration: 0.4 }}
                className="group flex items-center justify-between border-b border-[#8C6A1E]/20 py-5 md:py-6 cursor-pointer"
              >
                <div className="flex items-center gap-8">
                  <span className="font-mono text-xs text-[#8C6A1E] font-bold">
                    {(index + 1).toString().padStart(2, "0")}
                  </span>
                  <span 
                    className="text-[clamp(20px,2.2vw,36px)] font-light tracking-tight text-[#1A1714] group-hover:translate-x-4 transition-transform duration-300"
                    style={{ fontFamily: "var(--font-display, 'Fraunces'), serif" }}
                  >
                    {item}
                  </span>
                </div>
                <ArrowRight className="w-5 h-5 text-transparent -translate-x-4 group-hover:text-[#8C6A1E] group-hover:translate-x-0 transition-all duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 07: WHO WE WORK WITH
      ========================================= */}
      <section className="px-[5vw] py-24 bg-[#FAF8F5]/40 border-b border-[#8C6A1E]/20">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-[1400px] mx-auto"
        >
          <motion.span
            variants={fadeUp}
            className="block font-mono text-[11px] tracking-[0.25em] uppercase text-[#8C6A1E] mb-4 font-bold"
          >
            Industries
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="text-[clamp(32px,4vw,64px)] leading-[1.1] font-light tracking-tight mb-12"
            style={{ fontFamily: "var(--font-display, 'Fraunces'), serif" }}
          >
            Different industries. <br />
            <span className="italic text-[#8C6A1E]">Same ambition.</span>
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-[#8C6A1E]/20 pt-12">
            {INDUSTRIES.map((industry) => (
              <motion.div
                key={industry}
                variants={fadeUp}
                className="flex flex-col bg-[#FAF8F5] p-6 rounded-xs border border-[#8C6A1E]/20 shadow-xs backdrop-blur-md"
              >
                <span className="text-base md:text-lg font-light tracking-tight text-[#1A1714]">
                  {industry}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* =========================================
          SECTION 08: PRINCIPLES
      ========================================= */}
      <section className="px-[5vw] py-28 border-b border-[#8C6A1E]/20">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-[1400px] mx-auto"
        >
          <motion.div variants={fadeUp} className="mb-16">
            <span className="block font-mono text-[11px] tracking-[0.25em] uppercase text-[#8C6A1E] mb-4 font-bold">
              Why We Promote India
            </span>
            <h2 
              className="text-[clamp(34px,4.5vw,72px)] leading-[1.05] tracking-tight font-light max-w-3xl"
              style={{ fontFamily: "var(--font-display, 'Fraunces'), serif" }}
            >
              One team.
              <br />
              Uncompromising authority.
              <br />
              <span className="italic text-[#8C6A1E]">
                Unmatched market presence.
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PRINCIPLES.map((principle) => (
              <motion.div
                key={principle.num}
                variants={fadeUp}
                className="flex flex-col gap-4 bg-[#FAF8F5]/80 p-8 rounded-xs border border-[#8C6A1E]/20 shadow-sm backdrop-blur-md"
              >
                <span className="font-mono text-xs text-[#8C6A1E] font-bold">
                  {principle.num}
                </span>
                <h3 
                  className="text-xl md:text-2xl font-light tracking-tight text-[#1A1714]"
                  style={{ fontFamily: "var(--font-display, 'Fraunces'), serif" }}
                >
                  {principle.title}
                </h3>
                <p className="text-[#57534E] text-sm md:text-base font-light leading-relaxed">
                  {principle.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* =========================================
          SECTION 09: FINAL CTA
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
            Have a project or PR goal in mind?
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
                Start a Project{" "}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </motion.div>

          <motion.a
            variants={fadeUp}
            href="mailto:hello@wepromoteindia.com"
            className="mt-8 font-mono text-xs tracking-widest text-[#78716C] hover:text-[#1A1714] transition-colors pb-1 border-b border-transparent hover:border-[#1A1714] font-semibold uppercase"
          >
            hello@wepromoteindia.com
          </motion.a>
        </motion.div>
      </section>
    </div>
  );
}
