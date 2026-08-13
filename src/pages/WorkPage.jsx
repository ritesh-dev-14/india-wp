"use client";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowDown, Building2, Globe2, Sparkles, TrendingUp, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// ==========================================
// DATA STRUCTURES (CASE STUDIES & CAPABILITIES)
// ==========================================
const CAPABILITIES = [
  {
    num: "01",
    title: "STRATEGY",
    services: [
      "Brand Positioning",
      "Legacy Translation",
      "Digital Roadmap",
      "B2B Authority Architecture",
    ],
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop",
  },
  {
    num: "02",
    title: "CREATIVE",
    services: [
      "Editorial Brand Identity",
      "Grand Launch Campaigns",
      "UI / UX Design",
      "Visual Stature Systems",
    ],
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1600&auto=format&fit=crop",
  },
  {
    num: "03",
    title: "TECHNOLOGY",
    services: [
      "High-Performance Web Dev",
      "Immersive Showcases",
      "Scalable Digital Platforms",
      "Secure Infrastructure",
    ],
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1600&auto=format&fit=crop",
  },
  {
    num: "04",
    title: "GROWTH & HYPE",
    services: [
      "Pan-India Channel Scaling",
      "Distributor Acquisition",
      "Architectural Meet Systems",
      "Digital Hype & Authority",
    ],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop",
  },
];

const CASE_STUDIES = [
  {
    client: "Triveni — The Granite Studio",
    category: "Granite Architecture & Global Stone Showcase",
    scope: "Website Architecture & Complete Digital Presence",
    impact: "Elevated a premier offline stone legacy into a sleek, international digital destination reflecting timeless luxury.",
    desc: "Triveni possessed decades of physical mastery in natural stone, but their digital footprint lacked the architectural sophistication of their materials. We engineered a high-performance website and orchestrated their ongoing digital presence to mirror elite stone curation.",
    metrics: "Pan-India Architect Recognition • Global Digital Stature",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
  },
  {
    client: "Inne Lifts",
    category: "Vertical Mobility & Engineering Excellence",
    scope: "Website Architecture & Digital Brand Authority",
    impact: "Positioned precision elevator engineering with a digital experience defined by safety, elegance, and reliability.",
    desc: "For Inne Lifts, trust and technical precision are paramount. We built an immersive digital ecosystem that communicates high-grade engineering authority while seamlessly capturing high-intent builder and architect inquiries.",
    metrics: "Enhanced B2B Conversion • Premium Brand Equity",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1600&auto=format&fit=crop",
  },
  {
    client: "Handa Bangles",
    category: "Heritage Retail & Cultural Prestige",
    scope: "Grand Launch Campaigns, New City Hype & Digital Management",
    impact: "Engineered massive multi-city launch hypes that transformed traditional retail openings into cultural celebrations.",
    desc: "When Handa Bangles expanded into new cities, ordinary marketing wouldn't suffice. We designed explosive grand-launch campaigns, hype loops, and digital campaigns that drove record physical footfalls from day one.",
    metrics: "Record Opening Footfalls • Multi-City Brand Hype",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1600&auto=format&fit=crop",
  },
  {
    client: "Aesthetic Homez",
    category: "Home Furnishings & Pan-India Distribution",
    scope: "Manufacturer-to-Distributor Scaling & Digital Expansion",
    impact: "Built a robust pan-India distributor network for a premier sofa cover and bedsheet manufacturer.",
    desc: "Aesthetic Homez had exceptional manufacturing capabilities for sofa covers and bedsheets but needed scale. We built the digital acquisition funnel that connected them with tier-1 and tier-2 distributors across the entire country.",
    metrics: "Pan-India Distributor Network • Scalable B2B Funnels",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1600&auto=format&fit=crop",
  },
  {
    client: "Precision Metallurgy",
    category: "Industrial Rolling Mills & Heavy Manufacturing",
    scope: "Pan-India Authority, Digital Presence & B2B Credibility",
    impact: "Crafting unassailable industrial prestige for a leading supplier of TC Rings, HSS Rolls, and Composite Rolls.",
    desc: "As leading suppliers of Tungsten Carbide (TC) Rings, High Speed Steel (HSS) Rolls, and Composite Rolls for hot rolling mills, Precision Metallurgy operates at an elite industrial scale. Our mandate is simple yet vital: build absolute industrial respect and digital authority among heavy manufacturing giants.",
    metrics: "Pan-India B2B Reach • Elite Industrial Respect",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1600&auto=format&fit=crop",
  },
  {
    client: "HCS Home Luxury Surfaces & Bath Studio",
    category: "Designer Tiles & Premium Sanitaryware",
    scope: "Architect Meets, Luxury Presence & Curated Digital Engagement",
    impact: "Cemented HCS as the definitive luxury surface partner for elite interior architects and designers.",
    desc: "HCS deals in exquisite designer tiles and premium sanitaryware. To capture the high-end design market, we manage their luxury digital presence and curate exclusive architect meet systems that bridge physical product appreciation with elite specifiers.",
    metrics: "Exclusive Architect Partnerships • High-End Surface Stature",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1600&auto=format&fit=crop",
  },
];

const FLOW = ["DISCOVER", "DEFINE", "CREATE", "BUILD", "LAUNCH", "GROW"];

const INDUSTRIES = [
  "Granite & Stone Architecture",
  "Vertical Mobility & Engineering",
  "Heritage Retail & Lifestyle",
  "Home Furnishings & Manufacturing",
  "Industrial Metallurgy & B2B",
  "Luxury Tiles & Sanitaryware",
  "Real Estate & Hospitality",
  "Emerging Market Leaders",
];

const PRINCIPLES = [
  {
    num: "01",
    title: "TRANSLATING OFFLINE LEGACY",
    desc: "We take decades of physical market dominance and give it the digital stature it commands.",
  },
  {
    num: "02",
    title: "DESIGN WITH PURPOSE",
    desc: "Aesthetics must serve function, credibility, and immediate brand recall for elite buyers.",
  },
  {
    num: "03",
    title: "TECHNOLOGY THAT PERFORMS",
    desc: "Fast, scalable, and responsive digital infrastructure built for modern enterprises.",
  },
  {
    num: "04",
    title: "BUILDING REAL MOMENTUM",
    desc: "From pan-India distributor acquisition to grand city launches, we engineer measurable business growth.",
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
              01 / Mandates & Capabilities // We Promote India
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-[clamp(42px,8vw,120px)] leading-[1.05] tracking-[-0.02em] font-light mb-8 max-w-[1250px]"
            style={{ fontFamily: "var(--font-display, 'Fraunces'), serif" }}
          >
            You have a legendary offline empire. <br className="hidden md:block" />
            <span className="font-normal italic text-[#8C6A1E]">We make your online audience see it.</span>
          </motion.h1>

          <motion.div
            variants={fadeUp}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-t border-[#8C6A1E]/20 pt-8"
          >
            <p className="text-[#57534E] text-lg md:text-xl max-w-xl font-light leading-relaxed">
              For 40-year industrial powerhouses, luxury surface studios, and multi-city retail titans — we engineer digital authority, pan-India distribution, and unassailable market stature.
            </p>

            <div className="flex items-center gap-3 text-[#78716C] font-mono text-[10px] tracking-[0.2em] uppercase animate-pulse font-semibold">
              Explore Case Studies <ArrowDown className="w-3 h-3 text-[#8C6A1E]" />
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
              Translating real-world mastery <br />
              <span className="italic text-[#8C6A1E]">into digital dominance.</span>
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
                <div className="flex items-baseline gap-6 lg:gap-10 lg:w-[38%] z-10">
                  <span className="font-mono text-xs text-[#8C6A1E] font-bold shrink-0">
                    {cap.num}
                  </span>
                  <h3 
                    className="text-[clamp(26px,3.5vw,56px)] font-light tracking-tight group-hover:translate-x-3 transition-transform duration-500 ease-out text-[#1A1714]"
                    style={{ fontFamily: "var(--font-display, 'Fraunces'), serif" }}
                  >
                    {cap.title}
                  </h3>
                </div>

                <div className="hidden lg:flex flex-col gap-1.5 lg:w-[32%] z-10 opacity-70 group-hover:opacity-100 transition-opacity duration-500">
                  {cap.services.map((service) => (
                    <span
                      key={service}
                      className="font-mono text-[11px] tracking-[0.12em] uppercase text-[#57534E]"
                    >
                      {service}
                    </span>
                  ))}
                </div>

                <div className="hidden lg:flex items-center justify-end lg:w-[15%] z-10 pr-8">
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
          SECTION 03: FEATURED CASE STUDIES & CLIENTS
      ========================================= */}
      <section className="px-[5vw] py-28 border-b border-[#8C6A1E]/20">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
          >
            <div>
              <span className="block font-mono text-[11px] tracking-[0.25em] uppercase text-[#8C6A1E] mb-3 font-bold">
                Proven Track Record // Case Studies
              </span>
              <h2 
                className="text-[clamp(34px,4.5vw,68px)] font-light leading-[1.08] tracking-tight text-[#1A1714]"
                style={{ fontFamily: "var(--font-display, 'Fraunces'), serif" }}
              >
                How we elevate <br />
                <span className="italic text-[#8C6A1E]">industry leaders online.</span>
              </h2>
            </div>
            <p className="text-[#57534E] text-sm md:text-base font-light max-w-md leading-relaxed">
              Explore how we transformed traditional manufacturing titans, luxury surface studios, and heritage retail giants into digital icons.
            </p>
          </motion.div>

          {/* CASE STUDIES GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {CASE_STUDIES.map((item, index) => (
              <motion.div
                key={item.client}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                className="group flex flex-col bg-[#FAF8F5]/80 border border-[#8C6A1E]/20 rounded-sm overflow-hidden shadow-[0_4px_25px_rgba(26,23,20,0.03)] backdrop-blur-md transition-all duration-500 hover:border-[#8C6A1E]/50"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-[#1A1714]">
                  <img
                    src={item.image}
                    alt={item.client}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter contrast-105 opacity-90"
                  />
                  <div className="absolute top-4 left-4 bg-[#1A1714]/80 backdrop-blur-md px-3 py-1 border border-[#8C6A1E]/30 rounded-xs">
                    <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-[#FAF8F5] font-medium">
                      {item.category}
                    </span>
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-grow justify-between gap-6">
                  <div className="flex flex-col gap-3">
                    <span className="font-mono text-[10.5px] tracking-[0.2em] uppercase text-[#8C6A1E] font-bold">
                      Mandate // {item.scope}
                    </span>
                    <h3 
                      className="text-2xl md:text-3xl font-light text-[#1A1714] tracking-tight"
                      style={{ fontFamily: "var(--font-display, 'Fraunces'), serif" }}
                    >
                      {item.client}
                    </h3>
                    <p className="text-[#57534E] text-sm md:text-base font-light leading-relaxed pt-2">
                      {item.desc}
                    </p>
                  </div>

                  <div className="flex flex-col gap-4 pt-6 border-t border-[#8C6A1E]/15">
                    <div className="flex items-center gap-2 text-xs font-mono text-[#8C6A1E] font-semibold tracking-wider uppercase">
                      <Sparkles size={13} /> {item.impact}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10.5px] uppercase tracking-wider text-[#78716C]">
                        {item.metrics}
                      </span>
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.15em] text-[#1A1714] group-hover:text-[#8C6A1E] font-bold transition-colors"
                      >
                        <span>Discuss Similar Project</span>
                        <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 04: THE SYSTEM FLOW
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
            The We Promote India System
          </span>
          <h2 
            className="text-[clamp(28px,3.8vw,52px)] leading-[1.1] font-light tracking-tight mb-16 text-[#57534E]"
            style={{ fontFamily: "var(--font-display, 'Fraunces'), serif" }}
          >
            Strategy. Authority. Technology. Growth.
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
          SECTION 05: WHO WE WORK WITH (INDUSTRIES)
      ========================================= */}
      <section className="px-[5vw] py-24 border-b border-[#8C6A1E]/20">
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
            Industries We Elevate
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="text-[clamp(32px,4vw,64px)] leading-[1.1] font-light tracking-tight mb-12"
            style={{ fontFamily: "var(--font-display, 'Fraunces'), serif" }}
          >
            Traditional giants. <br />
            <span className="italic text-[#8C6A1E]">Modern digital authority.</span>
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 border-t border-[#8C6A1E]/20 pt-12">
            {INDUSTRIES.map((industry) => (
              <motion.div
                key={industry}
                variants={fadeUp}
                className="flex flex-col bg-[#FAF8F5]/80 p-6 rounded-xs border border-[#8C6A1E]/20 shadow-xs backdrop-blur-md"
              >
                <Building2 size={18} className="text-[#8C6A1E] mb-3" />
                <span className="text-base md:text-lg font-light tracking-tight text-[#1A1714]">
                  {industry}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* =========================================
          SECTION 06: PRINCIPLES
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
              The We Promote Standard
            </span>
            <h2 
              className="text-[clamp(34px,4.5vw,72px)] leading-[1.05] tracking-tight font-light max-w-3xl"
              style={{ fontFamily: "var(--font-display, 'Fraunces'), serif" }}
            >
              One team.
              <br />
              Uncompromising rigor.
              <br />
              <span className="italic text-[#8C6A1E]">
                A legacy that commands respect online.
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
          SECTION 07: FINAL CTA
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
            Ready to establish your digital authority?
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="text-[clamp(38px,6.5vw,96px)] leading-[1.05] font-light tracking-tight mb-12 text-[#1A1714]"
            style={{ fontFamily: "var(--font-display, 'Fraunces'), serif" }}
          >
            Let&apos;s make your offline legacy <br />
            <span className="italic text-[#8C6A1E]">impossible to ignore online.</span>
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
