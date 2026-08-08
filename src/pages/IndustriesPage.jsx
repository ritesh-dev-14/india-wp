import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowDown } from "lucide-react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

// ==========================================
// DATA STRUCTURES
// ==========================================
const INDUSTRIES_LIST = [
  {
    num: "01",
    name: "HEALTHCARE",
    subtitle: "Healthcare / Digital Experience",
    description: "Building trust through clear communication, credible digital experiences and thoughtful branding.",
    tags: ["TRUST", "CLARITY", "CREDIBILITY"],
    detail: "Digital experiences where trust and clarity matter as much as creativity."
  },
  {
    num: "02",
    name: "REAL ESTATE",
    subtitle: "Real Estate / Brand Presence",
    description: "Turning properties and developments into brands people want to discover.",
    tags: ["DISCOVERY", "DESIRE", "CONVERSION"],
    detail: "Elevating architectural developments into magnetic digital destinations."
  },
  {
    num: "03",
    name: "HOSPITALITY",
    subtitle: "Hospitality / Brand & Web",
    description: "Creating digital experiences that make destinations, spaces and experiences more desirable.",
    tags: ["EXPERIENCE", "ATMOSPHERE", "BOOKING"],
    detail: "Translating physical atmosphere and service luxury into immersive web environments."
  },
  {
    num: "04",
    name: "RETAIL & E-COMMERCE",
    subtitle: "Retail / Digital Commerce",
    description: "Helping products compete for attention in a crowded digital world.",
    tags: ["ATTENTION", "DESIRE", "ACTION"],
    detail: "Crafting distinct commerce experiences built to capture attention and drive loyalty."
  },
  {
    num: "05",
    name: "EDUCATION",
    subtitle: "Education / Platform Design",
    description: "Making institutions and learning experiences more accessible, engaging and memorable.",
    tags: ["ACCESSIBILITY", "CLARITY", "IMPACT"],
    detail: "Structuring complex academic programs into intuitive, inspiring digital portals."
  },
  {
    num: "06",
    name: "PROFESSIONAL SERVICES",
    subtitle: "Services / Positioning & Web",
    description: "Turning expertise into a brand that communicates authority and trust.",
    tags: ["AUTHORITY", "TRUST", "PRECISION"],
    detail: "Translating complex institutional knowledge into clear, authoritative market positioning."
  },
  {
    num: "07",
    name: "FOOD & LIFESTYLE",
    subtitle: "Lifestyle / Creative Direction",
    description: "Creating visual identities and digital experiences built around desire and discovery.",
    tags: ["IDENTITY", "DESIRE", "CULTURE"],
    detail: "Visual identities and digital systems shaped by aesthetic gravity and cultural nuance."
  },
  {
    num: "08",
    name: "EMERGING BUSINESSES",
    subtitle: "Startups / Brand Systems",
    description: "Helping ambitious businesses establish their digital presence from the ground up.",
    tags: ["AMBITION", "FOUNDATION", "SCALE"],
    detail: "Giving high-potential ventures the digital infrastructure to compete with industry giants."
  }
];

const COMMON_THREAD = [
  { num: "01", title: "BE SEEN", desc: "Get the right attention." },
  { num: "02", title: "BE UNDERSTOOD", desc: "Make your value clear." },
  { num: "03", title: "BE REMEMBERED", desc: "Create a distinctive identity." },
  { num: "04", title: "BE CHOSEN", desc: "Turn attention into action." }
];

const ADAPT_FLOW = ["BUSINESS", "AUDIENCE", "CONTEXT", "STRATEGY", "EXPERIENCE"];

// ==========================================
// ANIMATION UTILITIES
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

export default function IndustriesPage() {
  const [activeIndustry, setActiveIndustry] = useState(0);
  const [mobileAccordion, setMobileAccordion] = useState(null);

  // For visual statement scroll animation
  const statementRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: statementRef,
    offset: ["start end", "end start"]
  });

  const statementScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1, 1.05]);
  const statementOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <div className="bg-[#070707] text-white min-h-screen selection:bg-white selection:text-black font-sans overflow-x-hidden">
      
      {/* =========================================
          01 / HERO
      ========================================= */}
      <section className="relative min-h-[90vh] flex flex-col justify-end px-[5vw] pb-[10vh] pt-32 overflow-hidden">
        {/* Subtle moving background words */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] select-none flex flex-col justify-around overflow-hidden z-0">
          <motion.div 
            animate={{ x: [-200, 100] }} 
            transition={{ repeat: Infinity, repeatType: "reverse", duration: 25, ease: "linear" }}
            className="text-[12vw] font-bold whitespace-nowrap uppercase tracking-tighter"
          >
            HEALTHCARE REAL ESTATE HOSPITALITY RETAIL
          </motion.div>
          <motion.div 
            animate={{ x: [100, -200] }} 
            transition={{ repeat: Infinity, repeatType: "reverse", duration: 30, ease: "linear" }}
            className="text-[12vw] font-bold whitespace-nowrap uppercase tracking-tighter"
          >
            EDUCATION PROFESSIONAL SERVICES LIFESTYLE
          </motion.div>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="max-w-[1400px] w-full mx-auto relative z-10"
        >
          <motion.div variants={fadeUp} className="mb-8">
            <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-white/50">
              Industries
            </span>
          </motion.div>

          <motion.h1 
            variants={fadeUp}
            className="text-[clamp(42px,8vw,120px)] leading-[1.05] tracking-[-0.03em] font-medium mb-12 max-w-[1200px]"
          >
            Different industries. <br />
            Different challenges. <br />
            <span className="text-white/40">One digital mindset.</span>
          </motion.h1>

          <motion.div variants={fadeUp} className="flex flex-col md:flex-row md:items-end justify-between gap-10 border-t border-white/10 pt-10">
            <p className="text-white/60 text-lg md:text-xl max-w-md font-light leading-relaxed">
              We combine strategy, creativity and technology to create digital experiences that fit the business behind the brand.
            </p>
            
            <div className="flex items-center gap-3 text-white/40 font-mono text-[10px] tracking-[0.2em] uppercase animate-pulse">
              Explore Sectors <ArrowDown className="w-3 h-3" />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* =========================================
          02 / INTRODUCTION
      ========================================= */}
      <section className="px-[5vw] py-32 md:py-48 bg-[#0a0a0a]">
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8"
        >
          <motion.div variants={fadeUp} className="md:col-span-4">
            <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">
              01 / Industry Thinking
            </span>
          </motion.div>
          
          <div className="md:col-span-8 flex flex-col gap-10">
            <motion.h2 variants={fadeUp} className="text-[clamp(32px,4vw,64px)] leading-[1.1] font-medium tracking-tight text-white">
              Every industry has a different audience, a different journey, and a different reason to choose you.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/50 text-xl md:text-2xl font-light leading-relaxed max-w-2xl">
              That is why we don't approach every project with the same playbook. We adapt strategy, creative and digital execution around the realities of the business.
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* =========================================
          03 / INDUSTRIES DIRECTORY (EDITORIAL LIST)
      ========================================= */}
      <section className="px-[5vw] py-32">
        <div className="max-w-[1400px] mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mb-20"
          >
            <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">
              02 / Where We Work
            </span>
            <p className="text-white/30 text-xs font-mono uppercase mt-2 tracking-widest">
              Industries we work across
            </p>
          </motion.div>

          <div className="border-t border-white/10 flex flex-col">
            {INDUSTRIES_LIST.map((ind, index) => (
              <motion.div 
                key={ind.name}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUp}
                className="group border-b border-white/10 py-10 md:py-14 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-white/[0.01] transition-colors duration-300 px-4 md:px-0"
              >
                <div className="flex items-baseline gap-6 md:gap-12 md:w-1/3">
                  <span className="font-mono text-sm text-white/30 group-hover:text-white/60 transition-colors">
                    {ind.num}
                  </span>
                  <h3 className="text-[clamp(28px,4vw,56px)] font-medium tracking-tight group-hover:translate-x-3 transition-transform duration-500 ease-out">
                    {ind.name}
                  </h3>
                </div>

                <div className="md:w-1/2">
                  <p className="text-white/60 text-base md:text-lg font-light leading-relaxed max-w-xl">
                    {ind.description}
                  </p>
                </div>

                <div className="md:w-auto flex items-center justify-end">
                  <Link to="/contact" className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.15em] uppercase text-white/40 group-hover:text-white transition-colors">
                    <span>Explore</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          04 / INTERACTIVE INDUSTRY EXPERIENCE (SPLIT DESKTOP / ACCORDION MOBILE)
      ========================================= */}
      <section className="px-[5vw] py-32 bg-[#050505] border-y border-white/5">
        <div className="max-w-[1400px] mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mb-20"
          >
            <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">
              03 / One Business. Different Journey.
            </span>
          </motion.div>

          {/* Desktop Split-Screen Interaction */}
          <div className="hidden lg:grid grid-cols-12 gap-16 min-h-[600px] items-center">
            {/* Left List */}
            <div className="col-span-5 flex flex-col border-l border-white/10">
              {INDUSTRIES_LIST.map((ind, idx) => (
                <div 
                  key={ind.name}
                  onMouseEnter={() => setActiveIndustry(idx)}
                  className={`py-6 pl-8 cursor-pointer transition-all duration-300 border-l-2 ${
                    activeIndustry === idx 
                      ? "border-white text-white bg-white/[0.03]" 
                      : "border-transparent text-white/30 hover:text-white/70"
                  }`}
                >
                  <span className="font-mono text-xs tracking-widest block mb-1">0{idx + 1}</span>
                  <h4 className="text-3xl font-medium tracking-tight">{ind.name}</h4>
                </div>
              ))}
            </div>

            {/* Right Dynamic Panel */}
            <div className="col-span-7 bg-[#0a0a0a] p-16 border border-white/10 relative overflow-hidden min-h-[500px] flex flex-col justify-between">
              <div className="absolute top-0 right-0 p-8 opacity-10 font-mono text-8xl font-bold select-none">
                0{activeIndustry + 1}
              </div>

              <div className="relative z-10">
                <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#ff4a00] mb-4 block">
                  {INDUSTRIES_LIST[activeIndustry].subtitle}
                </span>
                
                <div className="flex flex-wrap gap-3 my-8">
                  {INDUSTRIES_LIST[activeIndustry].tags.map(tag => (
                    <span key={tag} className="font-mono text-[10px] tracking-[0.2em] uppercase border border-white/20 px-3 py-1 bg-white/5">
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-2xl md:text-3xl font-light leading-relaxed text-white/90 max-w-xl">
                  "{INDUSTRIES_LIST[activeIndustry].detail}"
                </p>
              </div>

              <div className="relative z-10 pt-12 border-t border-white/10 flex items-center justify-between">
                <span className="font-mono text-xs tracking-widest text-white/40 uppercase">Strategic Focus</span>
                <Link to="/contact" className="inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase hover:text-white/60 transition-colors">
                  <span>Start a Conversation</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile Accordion Alternative */}
          <div className="lg:hidden flex flex-col border-t border-white/10">
            {INDUSTRIES_LIST.map((ind, idx) => (
              <div key={ind.name} className="border-b border-white/10 py-6">
                <div 
                  onClick={() => setMobileAccordion(mobileAccordion === idx ? null : idx)}
                  className="flex items-center justify-between cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs text-white/30">0{idx + 1}</span>
                    <h4 className="text-xl font-medium">{ind.name}</h4>
                  </div>
                  <span className="font-mono text-lg text-white/50">{mobileAccordion === idx ? "—" : "+"}</span>
                </div>

                <AnimatePresence>
                  {mobileAccordion === idx && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden pt-6"
                    >
                      <div className="bg-[#0a0a0a] p-6 border border-white/10 flex flex-col gap-4">
                        <span className="font-mono text-[10px] uppercase text-[#ff4a00]">{ind.subtitle}</span>
                        <div className="flex flex-wrap gap-2">
                          {ind.tags.map(tag => (
                            <span key={tag} className="font-mono text-[9px] border border-white/20 px-2 py-0.5">{tag}</span>
                          ))}
                        </div>
                        <p className="text-white/80 text-sm font-light">{ind.detail}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================
          05 / THE COMMON THREAD
      ========================================= */}
      <section className="px-[5vw] py-32">
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-[1400px] mx-auto"
        >
          <motion.div variants={fadeUp} className="mb-20">
            <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40 block mb-6">
              04 / The Common Thread
            </span>
            <h2 className="text-[clamp(32px,4vw,64px)] leading-[1.1] font-medium tracking-tight">
              Different businesses. <br />
              <span className="text-white/40">Same ambition.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-t border-white/10 pt-16">
            {COMMON_THREAD.map(item => (
              <motion.div key={item.num} variants={fadeUp} className="flex flex-col gap-4">
                <span className="font-mono text-xs text-white/30">{item.num}</span>
                <h3 className="text-2xl md:text-3xl font-medium tracking-tight">{item.title}</h3>
                <p className="text-white/50 text-base font-light">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* =========================================
          06 / HOW WE ADAPT (APPROACH FLOW)
      ========================================= */}
      <section className="px-[5vw] py-32 bg-[#0a0a0a] border-t border-white/5">
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-[1400px] mx-auto flex flex-col items-center text-center"
        >
          <motion.span variants={fadeUp} className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40 mb-8">
            05 / Our Approach
          </motion.span>
          
          <motion.h2 variants={fadeUp} className="text-[clamp(32px,4vw,56px)] leading-[1.1] font-medium tracking-tight mb-8">
            We don't force businesses into a template.
          </motion.h2>

          <motion.p variants={fadeUp} className="text-white/50 text-lg md:text-xl font-light max-w-xl mb-24">
            We look at the business, its audience and its market before deciding what the digital experience should look like.
          </motion.p>

          <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-5xl gap-4 md:gap-0">
            {ADAPT_FLOW.map((step, i) => (
              <React.Fragment key={step}>
                <motion.div variants={fadeUp} className="flex flex-col items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-white/20 mb-6" />
                  <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white">
                    {step}
                  </span>
                </motion.div>
                {i !== ADAPT_FLOW.length - 1 && (
                  <motion.div variants={fadeUp} className="w-px h-12 md:w-full md:h-px bg-white/10 md:flex-1 mx-4" />
                )}
              </React.Fragment>
            ))}
          </div>
        </motion.div>
      </section>

      {/* =========================================
          07 / INDUSTRY STATEMENT (SCROLL BREAK)
      ========================================= */}
      <section ref={statementRef} className="h-[140vh] relative bg-[#040404]">
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden px-[5vw]">
          <motion.h2 
            style={{ scale: statementScale, opacity: statementOpacity }}
            className="text-[clamp(36px,6vw,110px)] leading-[1.1] font-medium text-center uppercase tracking-tight"
          >
            <span className="text-white/40 block">Your industry is the context.</span>
            <span className="text-white block mt-4">Your brand is the difference.</span>
          </motion.h2>
        </div>
      </section>

      {/* =========================================
          08 / CTA
      ========================================= */}
      <section className="px-[5vw] py-40 pb-60 bg-[#020202] text-center flex flex-col items-center justify-center border-t border-white/5 relative z-10">
        <motion.div
           initial="hidden"
           whileInView="show"
           viewport={{ once: true }}
           variants={staggerContainer}
           className="flex flex-col items-center max-w-[1000px]"
        >
          <motion.span variants={fadeUp} className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40 mb-8">
            Your industry. Your ambition.
          </motion.span>
          
          <motion.h2 variants={fadeUp} className="text-[clamp(40px,7vw,110px)] leading-[1.05] font-medium tracking-tight mb-8">
            Let's make your <br />
            <span className="text-white/40 italic font-serif">business impossible</span> <br />
            to ignore.
          </motion.h2>

          <motion.p variants={fadeUp} className="text-white/50 text-xl font-light mb-16">
            Tell us what you're building and we'll figure out where to take it next.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center gap-6">
            <Link 
              to="/contact" 
              className="group relative inline-flex items-center justify-center bg-white text-black px-10 py-5 rounded-[4px] font-mono text-[12px] tracking-[0.15em] uppercase overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                Start a Project <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gray-200 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            </Link>

            <Link 
              to="/services" 
              className="group inline-flex items-center gap-3 font-mono text-[12px] tracking-[0.15em] uppercase text-white/60 hover:text-white transition-colors py-5 px-6"
            >
              View our Services
            </Link>
          </motion.div>
        </motion.div>
      </section>

    </div>
  );
}
