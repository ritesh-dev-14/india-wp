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
    services: ["Brand Strategy", "Digital Strategy", "Market Positioning", "Creative Direction"],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop"
  },
  {
    num: "02",
    title: "CREATIVE",
    services: ["Brand Identity", "UI / UX Design", "Campaign Creative", "Content Direction"],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1600&auto=format&fit=crop"
  },
  {
    num: "03",
    title: "TECHNOLOGY",
    services: ["Web Design & Dev", "Web Applications", "Interactive Experiences", "Digital Products"],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1600&auto=format&fit=crop"
  },
  {
    num: "04",
    title: "GROWTH",
    services: ["Digital Marketing", "Social Media", "Performance Marketing", "SEO"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop"
  }
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
  "Marketing Systems"
];

const INDUSTRIES = [
  "Healthcare", "Real Estate", "Hospitality", "Education", 
  "Professional Services", "Lifestyle", "Technology", "Emerging Brands"
];

const PRINCIPLES = [
  { num: "01", title: "THINK BEFORE WE BUILD", desc: "Strategy dictates every creative and technical decision." },
  { num: "02", title: "DESIGN WITH PURPOSE", desc: "Aesthetics must serve function, clarity, and brand recall." },
  { num: "03", title: "TECHNOLOGY THAT PERFORMS", desc: "Fast, scalable, and responsive systems built for the modern web." },
  { num: "04", title: "CREATE FOR THE LONG TERM", desc: "We build digital foundations that evolve as your business grows." }
];

// ==========================================
// ANIMATION VARIANTS
// ==========================================
const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

export default function ServicesPage() {
  const [hoveredCapability, setHoveredCapability] = useState(null);

  return (
    <div className="bg-[#070707] text-white min-h-screen selection:bg-white selection:text-black font-sans overflow-x-hidden">
      
      {/* =========================================
          SECTION 01: HERO
      ========================================= */}
      <section className="relative min-h-[90vh] flex flex-col justify-end px-[5vw] pb-[10vh] pt-32">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="max-w-[1400px] w-full mx-auto"
        >
          <motion.div variants={fadeUp} className="mb-8">
            <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-white/50">
              02 / Services
            </span>
          </motion.div>

          <motion.h1 
            variants={fadeUp}
            className="text-[clamp(48px,9vw,130px)] leading-[1.05] tracking-[-0.03em] font-medium mb-12 max-w-[1200px]"
          >
            We build brands <br className="hidden md:block" />
            <span className="text-white/40">people remember.</span>
          </motion.h1>

          <motion.div variants={fadeUp} className="flex flex-col md:flex-row md:items-end justify-between gap-10 border-t border-white/10 pt-10">
            <p className="text-white/60 text-lg md:text-xl max-w-md font-light leading-relaxed">
              Strategy, creativity, technology and growth — brought together under one roof.
            </p>
            
            <div className="flex items-center gap-3 text-white/40 font-mono text-[10px] tracking-[0.2em] uppercase animate-pulse">
              Explore Services <ArrowDown className="w-3 h-3" />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* =========================================
          SECTION 02: CORE CAPABILITIES (HOVER ROWS)
      ========================================= */}
      <section className="px-[5vw] py-32">
        <div className="max-w-[1400px] mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mb-24"
          >
            <motion.span variants={fadeUp} className="block font-mono text-[11px] tracking-[0.2em] uppercase text-white/40 mb-8">
              What We Do
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-[clamp(32px,4vw,64px)] leading-[1.1] font-medium tracking-tight">
              From the first idea <br/> to the final interaction.
            </motion.h2>
          </motion.div>

          <div className="relative border-t border-white/10">
            {CAPABILITIES.map((cap, i) => (
              <motion.div 
                key={cap.num}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUp}
                onMouseEnter={() => setHoveredCapability(i)}
                onMouseLeave={() => setHoveredCapability(null)}
                className="group relative flex flex-col md:flex-row md:items-center justify-between border-b border-white/10 py-10 md:py-14 cursor-pointer transition-colors duration-500 hover:bg-white/[0.02]"
              >
                <div className="flex items-baseline gap-6 md:gap-12 md:w-1/3 z-10 px-4 md:px-0">
                  <span className="font-mono text-sm text-white/30 group-hover:text-white/60 transition-colors">
                    {cap.num}
                  </span>
                  <h3 className="text-[clamp(32px,5vw,72px)] font-medium tracking-tight group-hover:translate-x-4 transition-transform duration-500 ease-out">
                    {cap.title}
                  </h3>
                </div>

                <div className="hidden md:flex flex-col gap-2 w-1/3 z-10 opacity-40 group-hover:opacity-100 transition-opacity duration-500">
                  {cap.services.map(service => (
                    <span key={service} className="font-mono text-[11px] tracking-[0.1em] uppercase">
                      {service}
                    </span>
                  ))}
                </div>

                <div className="hidden md:flex items-center justify-end w-1/4 z-10 pr-8">
                  <ArrowRight className="w-8 h-8 text-white/0 -translate-x-8 group-hover:text-white group-hover:translate-x-0 transition-all duration-500 ease-out" strokeWidth={1} />
                </div>

                {/* Desktop Visual Reveal */}
                <AnimatePresence>
                  {hoveredCapability === i && (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="hidden lg:block absolute right-[10%] top-1/2 -translate-y-1/2 w-[300px] h-[200px] overflow-hidden pointer-events-none z-0"
                    >
                      <img src={cap.image} alt={cap.title} className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-700" />
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
      <section className="px-[5vw] py-32 flex flex-col gap-40">
        
        {/* 01: STRATEGY (Asymmetric Text) */}
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="max-w-[1400px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8">
          <div className="flex flex-col gap-8">
            <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">01 / Strategy</span>
            <h2 className="text-[clamp(40px,5vw,80px)] leading-[1.05] tracking-tight font-medium">Start with<br/>the right direction.</h2>
          </div>
          <div className="flex flex-col justify-end gap-10 md:pl-20">
            <p className="text-white/60 text-lg md:text-xl font-light leading-relaxed">
              We turn business goals, audience insights and market opportunities into clear digital and creative direction.
            </p>
            <ul className="flex flex-col gap-4 font-mono text-[11px] tracking-[0.15em] uppercase text-white/40 border-l border-white/20 pl-6">
              <li>Brand Strategy</li>
              <li>Digital Strategy</li>
              <li>Market Research</li>
              <li>Positioning</li>
              <li>Creative Direction</li>
            </ul>
            <Link to="/contact" className="inline-flex items-center gap-3 font-mono text-[11px] tracking-[0.2em] uppercase mt-4 hover:text-white/60 transition-colors">
              Explore Strategy <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>

        {/* 02: CREATIVE (Large Visual + Text) */}
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="max-w-[1400px] mx-auto w-full flex flex-col md:flex-row-reverse gap-16 md:gap-24 items-center">
          <div className="w-full md:w-1/2 flex flex-col gap-8">
            <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">02 / Creative</span>
            <h2 className="text-[clamp(40px,5vw,80px)] leading-[1.05] tracking-tight font-medium">Make people<br/>stop scrolling.</h2>
            <p className="text-white/60 text-lg md:text-xl font-light leading-relaxed max-w-md">
              We create identities, campaigns and visual systems designed to make brands recognizable and impossible to overlook.
            </p>
            <div className="flex flex-wrap gap-x-8 gap-y-4 font-mono text-[11px] tracking-[0.15em] uppercase text-white/40 pt-4">
              <span>Brand Identity</span> <span>Art Direction</span> <span>UI / UX</span> <span>Campaign Design</span>
            </div>
            <Link to="/contact" className="inline-flex items-center gap-3 font-mono text-[11px] tracking-[0.2em] uppercase mt-4 hover:text-white/60 transition-colors">
              Explore Creative <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="w-full md:w-1/2 aspect-[4/5] md:aspect-square bg-[#111] overflow-hidden">
            <img src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1200&auto=format&fit=crop" alt="Creative Design" className="w-full h-full object-cover opacity-80" />
          </div>
        </motion.div>

        {/* 03: TECHNOLOGY (Dark Technical Vibe) */}
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="max-w-[1400px] mx-auto w-full bg-[#0a0a0a] p-10 md:p-24 border border-white/5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
             <div className="flex flex-col gap-8">
                <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#ff4a00]">03 / Technology</span>
                <h2 className="text-[clamp(40px,5vw,80px)] leading-[1.05] tracking-tight font-medium">Turn ideas into<br/>experiences.</h2>
             </div>
             <div className="flex flex-col justify-end gap-10">
                <p className="text-white/60 text-lg md:text-xl font-light leading-relaxed">
                  We design and build fast, responsive and memorable digital experiences that connect creativity with technology.
                </p>
                <div className="grid grid-cols-2 gap-4 font-mono text-[11px] tracking-[0.15em] uppercase text-white/50">
                  <span className="border border-white/10 p-4">Website Development</span>
                  <span className="border border-white/10 p-4">Web Applications</span>
                  <span className="border border-white/10 p-4">Interactive Experiences</span>
                  <span className="border border-white/10 p-4">Digital Products</span>
                </div>
                <Link to="/contact" className="inline-flex items-center gap-3 font-mono text-[11px] tracking-[0.2em] uppercase mt-4 hover:text-white/60 transition-colors">
                  Explore Technology <ArrowRight className="w-4 h-4" />
                </Link>
             </div>
          </div>
        </motion.div>

        {/* 04: GROWTH (Huge Typography Block) */}
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="max-w-[1400px] mx-auto w-full text-center flex flex-col items-center justify-center gap-10">
           <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">04 / Growth</span>
           <h2 className="text-[clamp(40px,7vw,110px)] leading-[0.95] tracking-tight font-medium max-w-5xl uppercase">
             Create attention.<br/>
             <span className="text-white/30 italic font-serif lowercase">Then create</span> momentum.
           </h2>
           <p className="text-white/60 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto mt-6">
              We help brands turn digital presence into consistent visibility, engagement and growth.
           </p>
           <div className="flex flex-wrap justify-center gap-8 font-mono text-[11px] tracking-[0.15em] uppercase text-white/40 mt-8">
              <span>Social Media</span> <span>Digital Marketing</span> <span>Performance</span> <span>SEO</span>
           </div>
           <Link to="/contact" className="inline-flex items-center gap-3 font-mono text-[11px] tracking-[0.2em] uppercase mt-8 border-b border-white pb-2 hover:text-white/60 transition-colors">
              Explore Growth <ArrowRight className="w-4 h-4" />
           </Link>
        </motion.div>

      </section>

      {/* =========================================
          SECTION 04: THE SYSTEM FLOW
      ========================================= */}
      <section className="px-[5vw] py-32 bg-black border-y border-white/5 overflow-hidden">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={staggerContainer} className="max-w-[1400px] mx-auto flex flex-col items-center text-center">
          <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40 mb-10">
            The We Promote System
          </span>
          <h2 className="text-[clamp(28px,4vw,56px)] leading-[1.1] font-medium tracking-tight mb-20 text-white/60">
            Strategy. Creativity. Technology. Growth.
          </h2>
          
          <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-5xl gap-4 md:gap-0">
            {FLOW.map((step, i) => (
              <React.Fragment key={step}>
                <motion.div variants={fadeUp} className="flex flex-col items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-white/20 mb-6" />
                  <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white">
                    {step}
                  </span>
                </motion.div>
                {i !== FLOW.length - 1 && (
                  <motion.div variants={fadeUp} className="w-px h-12 md:w-full md:h-px bg-white/10 md:flex-1 mx-4" />
                )}
              </React.Fragment>
            ))}
          </div>
        </motion.div>
      </section>

      {/* =========================================
          SECTION 05: DELIVERABLES
      ========================================= */}
      <section className="px-[5vw] py-40">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="md:col-span-4">
             <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40 sticky top-40">
               Built for modern brands
             </span>
          </motion.div>
          <div className="md:col-span-8 flex flex-col">
            {DELIVERABLES.map((item, index) => (
              <motion.div 
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                className="group flex items-center justify-between border-b border-white/10 py-6 md:py-8 cursor-pointer"
              >
                <div className="flex items-center gap-8">
                  <span className="font-mono text-[10px] text-white/20">{(index + 1).toString().padStart(2, '0')}</span>
                  <span className="text-[clamp(24px,3vw,48px)] font-medium tracking-tight group-hover:translate-x-4 transition-transform duration-300">
                    {item}
                  </span>
                </div>
                <ArrowRight className="w-6 h-6 text-white/0 -translate-x-4 group-hover:text-white/40 group-hover:translate-x-0 transition-all duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 06: WHO WE WORK WITH
      ========================================= */}
      <section className="px-[5vw] py-32 bg-[#050505]">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="max-w-[1400px] mx-auto">
          <motion.span variants={fadeUp} className="block font-mono text-[11px] tracking-[0.2em] uppercase text-white/40 mb-8">
            Industries
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-[clamp(32px,4vw,64px)] leading-[1.1] font-medium tracking-tight mb-20">
            Different industries. <br/><span className="text-white/40">Same ambition.</span>
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8 border-t border-white/10 pt-16">
            {INDUSTRIES.map(industry => (
              <motion.div key={industry} variants={fadeUp} className="flex flex-col">
                <span className="text-xl md:text-2xl font-light tracking-tight">{industry}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* =========================================
          SECTION 07: PRINCIPLES
      ========================================= */}
      <section className="px-[5vw] py-40">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="max-w-[1400px] mx-auto">
          <motion.div variants={fadeUp} className="mb-24">
            <span className="block font-mono text-[11px] tracking-[0.2em] uppercase text-white/40 mb-8">
              Why We Promote
            </span>
            <h2 className="text-[clamp(40px,5vw,80px)] leading-[1.05] tracking-tight font-medium max-w-3xl">
              One team.<br/>One direction.<br/><span className="text-white/40">One digital experience.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
             {PRINCIPLES.map(principle => (
               <motion.div key={principle.num} variants={fadeUp} className="flex flex-col gap-6">
                 <span className="font-mono text-[11px] text-white/30 border-b border-white/10 pb-4">{principle.num}</span>
                 <h3 className="text-2xl md:text-3xl font-medium tracking-tight">{principle.title}</h3>
                 <p className="text-white/50 text-lg font-light leading-relaxed max-w-sm">
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
      <section className="px-[5vw] py-40 pb-60 bg-[#020202] text-center flex flex-col items-center justify-center border-t border-white/5">
        <motion.div
           initial="hidden"
           whileInView="show"
           viewport={{ once: true }}
           variants={staggerContainer}
           className="flex flex-col items-center max-w-[1000px]"
        >
          <motion.span variants={fadeUp} className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40 mb-8">
            Have a project in mind?
          </motion.span>
          
          <motion.h2 variants={fadeUp} className="text-[clamp(40px,7vw,110px)] leading-[1.05] font-medium tracking-tight mb-16">
            Let's build <br/>
            <span className="text-white/40 italic font-serif">something impossible</span> <br/>
            to ignore.
          </motion.h2>

          <motion.div variants={fadeUp}>
            <Link 
              to="/contact" 
              className="group relative inline-flex items-center justify-center bg-white text-black px-12 py-5 rounded-[4px] font-mono text-[13px] tracking-[0.15em] uppercase overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                Start a Project <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gray-200 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            </Link>
          </motion.div>

          <motion.a 
            variants={fadeUp}
            href="mailto:hello@wepromote.us"
            className="mt-12 font-mono text-sm tracking-widest text-white/40 hover:text-white transition-colors pb-1 border-b border-transparent hover:border-white"
          >
            hello@wepromote.us
          </motion.a>
        </motion.div>
      </section>
    </div>
  );
}
