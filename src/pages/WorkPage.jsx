import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// ==========================================
// DATA STRUCTURES
// ==========================================
const CAPABILITIES = [
  {
    num: "01",
    title: "STRATEGY",
    services: [
      "Brand Strategy",
      "Digital Strategy",
      "Market Positioning",
      "Creative Direction",
    ],
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop",
  },
  {
    num: "02",
    title: "CREATIVE",
    services: [
      "Brand Identity",
      "UI / UX Design",
      "Campaign Creative",
      "Content Direction",
    ],
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1600&auto=format&fit=crop",
  },
  {
    num: "03",
    title: "TECHNOLOGY",
    services: [
      "Web Design & Dev",
      "Web Applications",
      "Interactive Experiences",
      "Digital Products",
    ],
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1600&auto=format&fit=crop",
  },
  {
    num: "04",
    title: "GROWTH",
    services: [
      "Digital Marketing",
      "Social Media",
      "Performance Marketing",
      "SEO",
    ],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop",
  },
];

const FLOW = ["DISCOVER", "DEFINE", "CREATE", "BUILD", "LAUNCH", "GROW"];

const DELIVERABLES = [
  "Brand Identities",
  "Websites",
  "E-Commerce Experiences",
  "Landing Pages",
  "Web Applications",
  "Campaigns",
  "Social Content",
  "Digital Products",
  "Interactive Experiences",
  "Marketing Systems",
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
    desc: "Strategy dictates every creative and technical decision.",
  },
  {
    num: "02",
    title: "DESIGN WITH PURPOSE",
    desc: "Aesthetics must serve function, clarity, and brand recall.",
  },
  {
    num: "03",
    title: "TECHNOLOGY THAT PERFORMS",
    desc: "Fast, scalable, and responsive systems built for the modern web.",
  },
  {
    num: "04",
    title: "CREATE FOR THE LONG TERM",
    desc: "We build digital foundations that evolve as your business grows.",
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
    <div className="bg-[#FAF8F5] text-[#1E1B18] min-h-screen selection:bg-[#E05A47] selection:text-white font-sans overflow-x-hidden">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_40%_30%_at_50%_20%,rgba(224,90,71,0.02),transparent_70%)]" />

      {/* =========================================
          SECTION 01: HERO
      ========================================= */}
      <section className="relative min-h-[85vh] flex flex-col justify-end px-[5vw] pb-20 pt-32 border-b border-[#E8E2D9]">
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
            <span className="inline-flex items-center justify-center w-2 h-2 rounded-full bg-[#E05A47] animate-pulse" />
            <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-[#E05A47] font-semibold">
              01 / Work // We Promote
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-[clamp(48px,9vw,130px)] leading-[1.05] tracking-[-0.03em] font-extrabold mb-8 max-w-[1200px]"
          >
            We build brands <br className="hidden md:block" />
            <span className="text-[#8C8375] font-normal">people remember.</span>
          </motion.h1>

          <motion.div
            variants={fadeUp}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-t border-[#E8E2D9] pt-8"
          >
            <p className="text-[#5C5346] text-lg md:text-xl max-w-md font-light leading-relaxed">
              Strategy, creativity, technology and growth — brought together
              under one roof.
            </p>

            <div className="flex items-center gap-3 text-[#8C8375] font-mono text-[10px] tracking-[0.2em] uppercase animate-pulse font-semibold">
              Explore Services <ArrowDown className="w-3 h-3 text-[#E05A47]" />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* =========================================
          SECTION 02: CORE CAPABILITIES (HOVER ROWS)
      ========================================= */}
      <section className="px-[5vw] py-24 border-b border-[#E8E2D9]">
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
              className="block font-mono text-[11px] tracking-[0.2em] uppercase text-[#E05A47] mb-4 font-semibold"
            >
              What We Do
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="text-[clamp(32px,4vw,64px)] leading-[1.1] font-extrabold tracking-tight"
            >
              From the first idea <br /> to the final interaction.
            </motion.h2>
          </motion.div>

          <div className="relative border-t border-[#E8E2D9]">
            {CAPABILITIES.map((cap, i) => (
              <motion.div
                key={cap.num}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUp}
                onMouseEnter={() => setHoveredCapability(i)}
                onMouseLeave={() => setHoveredCapability(null)}
                className="group relative flex flex-col md:flex-row md:items-center justify-between border-b border-[#E8E2D9] py-8 md:py-10 cursor-pointer transition-colors duration-500 hover:bg-white"
              >
                <div className="flex items-baseline gap-6 md:gap-12 md:w-1/3 z-10 px-4 md:px-0">
                  <span className="font-mono text-sm text-[#3B6A62] group-hover:text-[#E05A47] transition-colors font-bold">
                    {cap.num}
                  </span>
                  <h3 className="text-[clamp(32px,5vw,72px)] font-extrabold tracking-tight group-hover:translate-x-4 transition-transform duration-500 ease-out text-[#1E1B18]">
                    {cap.title}
                  </h3>
                </div>

                <div className="hidden md:flex flex-col gap-2 w-1/3 z-10 opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                  {cap.services.map((service) => (
                    <span
                      key={service}
                      className="font-mono text-[11px] tracking-[0.1em] uppercase text-[#5C5346]"
                    >
                      {service}
                    </span>
                  ))}
                </div>

                <div className="hidden md:flex items-center justify-end w-1/4 z-10 pr-8">
                  <ArrowRight
                    className="w-8 h-8 text-transparent -translate-x-8 group-hover:text-[#E05A47] group-hover:translate-x-0 transition-all duration-500 ease-out"
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
                      className="hidden lg:block absolute right-[10%] top-1/2 -translate-y-1/2 w-[300px] h-[200px] overflow-hidden pointer-events-none z-0 rounded-xl border border-[#E8E2D9] shadow-xl"
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
          SECTION 03: SERVICE DETAIL (EDITORIAL)
      ========================================= */}
      <section className="px-[5vw] py-24 flex flex-col gap-28 border-b border-[#E8E2D9]">
        {/* 01: STRATEGY (Asymmetric Text) */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-[1400px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 items-center"
        >
          <div className="flex flex-col gap-6">
            <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#E05A47] font-semibold">
              01 / Strategy
            </span>
            <h2 className="text-[clamp(40px,5vw,80px)] leading-[1.05] tracking-tight font-extrabold text-[#1E1B18]">
              Start with
              <br />
              the right direction.
            </h2>
          </div>
          <div className="flex flex-col justify-end gap-8 md:pl-16">
            <p className="text-[#5C5346] text-lg md:text-xl font-light leading-relaxed">
              We turn business goals, audience insights and market opportunities
              into clear digital and creative direction.
            </p>
            <ul className="flex flex-col gap-3 font-mono text-[11px] tracking-[0.15em] uppercase text-[#5C5346] border-l-2 border-[#E05A47]/40 pl-6 font-medium">
              <li>Brand Strategy</li>
              <li>Digital Strategy</li>
              <li>Market Research</li>
              <li>Positioning</li>
              <li>Creative Direction</li>
            </ul>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 font-mono text-[11px] tracking-[0.2em] uppercase text-[#E05A47] hover:text-[#1E1B18] transition-colors font-bold mt-2"
            >
              Explore Strategy <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>

        {/* 02: CREATIVE (Large Visual + Text) */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-[1400px] mx-auto w-full flex flex-col md:flex-row-reverse gap-12 md:gap-20 items-center"
        >
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#E05A47] font-semibold">
              02 / Creative
            </span>
            <h2 className="text-[clamp(40px,5vw,80px)] leading-[1.05] tracking-tight font-extrabold text-[#1E1B18]">
              Make people
              <br />
              stop scrolling.
            </h2>
            <p className="text-[#5C5346] text-lg md:text-xl font-light leading-relaxed max-w-md">
              We create identities, campaigns and visual systems designed to
              make brands recognizable and impossible to overlook.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-3 font-mono text-[11px] tracking-[0.15em] uppercase text-[#5C5346] font-medium pt-2">
              <span className="bg-white px-3 py-1 rounded-md border border-[#E8E2D9]">
                Brand Identity
              </span>
              <span className="bg-white px-3 py-1 rounded-md border border-[#E8E2D9]">
                Art Direction
              </span>
              <span className="bg-white px-3 py-1 rounded-md border border-[#E8E2D9]">
                UI / UX
              </span>
              <span className="bg-white px-3 py-1 rounded-md border border-[#E8E2D9]">
                Campaign Design
              </span>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 font-mono text-[11px] tracking-[0.2em] uppercase text-[#E05A47] hover:text-[#1E1B18] transition-colors font-bold mt-2"
            >
              Explore Creative <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="w-full md:w-1/2 aspect-[4/3] md:aspect-[4/3] overflow-hidden rounded-2xl border border-[#E8E2D9] shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1200&auto=format&fit=crop"
              alt="Creative Design"
              className="w-full h-full object-cover filter contrast-105"
            />
          </div>
        </motion.div>

        {/* 03: TECHNOLOGY (Clean Technical Vibe) */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-[1400px] mx-auto w-full bg-white p-8 md:p-16 border border-[#E8E2D9] rounded-2xl shadow-sm"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-6">
              <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#E05A47] font-semibold">
                03 / Technology
              </span>
              <h2 className="text-[clamp(40px,5vw,80px)] leading-[1.05] tracking-tight font-extrabold text-[#1E1B18]">
                Turn ideas into
                <br />
                experiences.
              </h2>
            </div>
            <div className="flex flex-col justify-end gap-8">
              <p className="text-[#5C5346] text-lg md:text-xl font-light leading-relaxed">
                We design and build fast, responsive and memorable digital
                experiences that connect creativity with technology.
              </p>
              <div className="grid grid-cols-2 gap-4 font-mono text-[11px] tracking-[0.15em] uppercase text-[#5C5346] font-medium">
                <span className="border border-[#E8E2D9] bg-[#FAF8F5] p-4 rounded-xl">
                  Website Development
                </span>
                <span className="border border-[#E8E2D9] bg-[#FAF8F5] p-4 rounded-xl">
                  Web Applications
                </span>
                <span className="border border-[#E8E2D9] bg-[#FAF8F5] p-4 rounded-xl">
                  Interactive Experiences
                </span>
                <span className="border border-[#E8E2D9] bg-[#FAF8F5] p-4 rounded-xl">
                  Digital Products
                </span>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 font-mono text-[11px] tracking-[0.2em] uppercase text-[#E05A47] hover:text-[#1E1B18] transition-colors font-bold mt-2"
              >
                Explore Technology <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* 04: GROWTH (Huge Typography Block) */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-[1400px] mx-auto w-full text-center flex flex-col items-center justify-center gap-8"
        >
          <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#E05A47] font-semibold">
            04 / Growth
          </span>
          <h2 className="text-[clamp(40px,7vw,100px)] leading-[0.95] tracking-tight font-extrabold max-w-5xl uppercase text-[#1E1B18]">
            Create attention.
            <br />
            <span
              className="text-[#E05A47] italic font-serif lowercase font-normal"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              Then create
            </span>{" "}
            momentum.
          </h2>
          <p className="text-[#5C5346] text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
            We help brands turn digital presence into consistent visibility,
            engagement and growth.
          </p>
          <div className="flex flex-wrap justify-center gap-6 font-mono text-[11px] tracking-[0.15em] uppercase text-[#5C5346] font-medium">
            <span className="bg-white px-4 py-2 rounded-md border border-[#E8E2D9]">
              Social Media
            </span>
            <span className="bg-white px-4 py-2 rounded-md border border-[#E8E2D9]">
              Digital Marketing
            </span>
            <span className="bg-white px-4 py-2 rounded-md border border-[#E8E2D9]">
              Performance
            </span>
            <span className="bg-white px-4 py-2 rounded-md border border-[#E8E2D9]">
              SEO
            </span>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 font-mono text-[11px] tracking-[0.2em] uppercase mt-4 text-[#E05A47] hover:text-[#1E1B18] font-bold transition-colors"
          >
            Explore Growth <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </section>

      {/* =========================================
          SECTION 04: THE SYSTEM FLOW
      ========================================= */}
      <section className="px-[5vw] py-24 bg-[#F3EFEA] border-b border-[#E8E2D9] overflow-hidden">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-[1400px] mx-auto flex flex-col items-center text-center"
        >
          <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#E05A47] mb-6 font-semibold">
            The We Promote System
          </span>
          <h2 className="text-[clamp(28px,4vw,52px)] leading-[1.1] font-extrabold tracking-tight mb-16 text-[#5C5346]">
            Strategy. Creativity. Technology. Growth.
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-5xl gap-4 md:gap-0">
            {FLOW.map((step, i) => (
              <React.Fragment key={step}>
                <motion.div
                  variants={fadeUp}
                  className="flex flex-col items-center justify-center bg-white px-6 py-4 rounded-xl border border-[#E8E2D9] shadow-xs w-full md:w-auto"
                >
                  <div className="w-2 h-2 rounded-full bg-[#E05A47] mb-2" />
                  <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#1E1B18] font-bold">
                    {step}
                  </span>
                </motion.div>
                {i !== FLOW.length - 1 && (
                  <motion.div
                    variants={fadeUp}
                    className="w-0.5 h-6 md:w-full md:h-0.5 bg-[#E8E2D9] md:flex-1 mx-2"
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </motion.div>
      </section>

      {/* =========================================
          SECTION 05: DELIVERABLES
      ========================================= */}
      <section className="px-[5vw] py-28 border-b border-[#E8E2D9]">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="md:col-span-4"
          >
            <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#E05A47] sticky top-32 font-semibold">
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
                className="group flex items-center justify-between border-b border-[#E8E2D9] py-5 md:py-6 cursor-pointer"
              >
                <div className="flex items-center gap-8">
                  <span className="font-mono text-xs text-[#3B6A62] font-bold">
                    {(index + 1).toString().padStart(2, "0")}
                  </span>
                  <span className="text-[clamp(22px,2.5vw,40px)] font-extrabold tracking-tight text-[#1E1B18] group-hover:translate-x-4 transition-transform duration-300">
                    {item}
                  </span>
                </div>
                <ArrowRight className="w-5 h-5 text-transparent -translate-x-4 group-hover:text-[#E05A47] group-hover:translate-x-0 transition-all duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 06: WHO WE WORK WITH
      ========================================= */}
      <section className="px-[5vw] py-24 bg-[#F3EFEA] border-b border-[#E8E2D9]">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-[1400px] mx-auto"
        >
          <motion.span
            variants={fadeUp}
            className="block font-mono text-[11px] tracking-[0.2em] uppercase text-[#E05A47] mb-4 font-semibold"
          >
            Industries
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="text-[clamp(32px,4vw,64px)] leading-[1.1] font-extrabold tracking-tight mb-12"
          >
            Different industries. <br />
            <span className="text-[#5C5346] font-normal">Same ambition.</span>
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-[#E8E2D9] pt-12">
            {INDUSTRIES.map((industry) => (
              <motion.div
                key={industry}
                variants={fadeUp}
                className="flex flex-col bg-white p-6 rounded-xl border border-[#E8E2D9] shadow-xs"
              >
                <span className="text-lg md:text-xl font-bold tracking-tight text-[#1E1B18]">
                  {industry}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* =========================================
          SECTION 07: PRINCIPLES
      ========================================= */}
      <section className="px-[5vw] py-28 border-b border-[#E8E2D9]">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-[1400px] mx-auto"
        >
          <motion.div variants={fadeUp} className="mb-16">
            <span className="block font-mono text-[11px] tracking-[0.2em] uppercase text-[#E05A47] mb-4 font-semibold">
              Why We Promote
            </span>
            <h2 className="text-[clamp(36px,4vw,72px)] leading-[1.05] tracking-tight font-extrabold max-w-3xl">
              One team.
              <br />
              One direction.
              <br />
              <span className="text-[#5C5346] font-normal">
                One digital experience.
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PRINCIPLES.map((principle) => (
              <motion.div
                key={principle.num}
                variants={fadeUp}
                className="flex flex-col gap-4 bg-white p-8 rounded-2xl border border-[#E8E2D9] shadow-sm"
              >
                <span className="font-mono text-xs text-[#3B6A62] font-bold">
                  {principle.num}
                </span>
                <h3 className="text-xl md:text-2xl font-extrabold tracking-tight text-[#1E1B18]">
                  {principle.title}
                </h3>
                <p className="text-[#5C5346] text-base font-light leading-relaxed">
                  {principle.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* =========================================
          SECTION 08: FINAL CTA
      ========================================= */}
      <section className="px-[5vw] py-32 bg-white text-center flex flex-col items-center justify-center relative">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="flex flex-col items-center max-w-[1000px]"
        >
          <motion.span
            variants={fadeUp}
            className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#E05A47] mb-6 font-semibold"
          >
            Have a project in mind?
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="text-[clamp(40px,7vw,100px)] leading-[1.05] font-extrabold tracking-tight mb-12 text-[#1E1B18]"
          >
            Let's build <br />
            <span
              className="text-[#E05A47] italic font-serif font-normal"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              something impossible
            </span>{" "}
            <br />
            to ignore.
          </motion.h2>

          <motion.div variants={fadeUp}>
            <Link
              to="/contact"
              className="group relative inline-flex items-center justify-center bg-[#E05A47] text-white px-12 py-5 rounded-xl font-mono text-[13px] tracking-[0.15em] uppercase overflow-hidden shadow-xl shadow-[#E05A47]/20 font-bold"
            >
              <span className="relative z-10 flex items-center gap-3">
                Start a Project{" "}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-[#C94735] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            </Link>
          </motion.div>

          <motion.a
            variants={fadeUp}
            href="mailto:hello@wepromoteindia.com"
            className="mt-8 font-mono text-sm tracking-widest text-[#5C5346] hover:text-[#1E1B18] transition-colors pb-1 border-b border-transparent hover:border-[#1E1B18] font-semibold"
          >
            hello@wepromoteindia.com
          </motion.a>
        </motion.div>
      </section>
    </div>
  );
}
