import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

// --- DATA ---
const PROJECTS = [
  {
    id: "novix",
    number: "01",
    title: "NOVIX",
    category: "Healthcare / Digital Experience",
    label: "CONCEPT PROJECT",
    description: "A digital identity and web experience built around precision, trust and scientific innovation.",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2000&auto=format&fit=crop",
    layout: "left", 
  },
  {
    id: "triveni",
    number: "02",
    title: "TRIVENI",
    category: "Luxury / Brand Experience",
    label: "CREATIVE EXPLORATION",
    description: "Redefining digital luxury through minimal interfaces, cinematic motion, and refined typography.",
    image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop",
    layout: "right",
  },
  {
    id: "aadiquo",
    number: "03",
    title: "AADIQUO",
    category: "Interiors / Digital Presence",
    label: "CONCEPT PROJECT",
    description: "An immersive showcase of spatial design, focusing on light, texture, and architectural geometry.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop",
    layout: "full",
  },
  {
    id: "expert-immigration",
    number: "04",
    title: "EXPERT IMMIGRATION",
    category: "Professional Services / Digital Experience",
    label: "SELECTED WORK",
    description: "Streamlining complex legal pathways into an accessible, authoritative, and human-centric digital platform.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop",
    layout: "left",
  },
  {
    id: "concept-06",
    number: "05",
    title: "CONCEPT 06",
    category: "Brand Exploration / Digital Experience",
    label: "CREATIVE EXPLORATION",
    description: "Pushing the boundaries of interaction design with experimental navigation and WebGL integration.",
    image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2000&auto=format&fit=crop",
    layout: "right",
  }
];

const PROJECT_TYPES = [
  "BRAND EXPERIENCES",
  "DIGITAL EXPERIENCES",
  "CAMPAIGNS",
  "CREATIVE SYSTEMS",
  "CONTENT",
  "DIGITAL PRODUCTS"
];

// --- ANIMATION VARIANTS ---
const fadeUpStagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const fadeUpItem = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } },
};

const lineTransition = {
  hidden: { width: "0%" },
  show: { width: "100%", transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1] } }
};

export default function WorkPage() {
  return (
    <div className="bg-[#070707] text-white min-h-screen selection:bg-white selection:text-black font-sans overflow-x-hidden">
      
      {/* =========================================
          SECTION 01: HERO
      ========================================= */}
      <section className="relative min-h-[90vh] flex flex-col justify-end px-[5vw] pb-[10vh] pt-32">
        <motion.div
          variants={fadeUpStagger}
          initial="hidden"
          animate="show"
          className="max-w-[1400px] w-full mx-auto"
        >
          <motion.div variants={fadeUpItem} className="mb-8">
            <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-white/50">
              Work / Selected Projects
            </span>
          </motion.div>

          <motion.h1 
            variants={fadeUpItem}
            className="text-[clamp(48px,8vw,120px)] leading-[1.05] tracking-[-0.03em] font-medium mb-12 max-w-[1200px]"
          >
            Work that makes <br className="hidden md:block" />
            <span className="text-white/70">brands impossible</span> <br className="hidden md:block" />
            to ignore.
          </motion.h1>

          <motion.div variants={fadeUpItem} className="flex flex-col md:flex-row md:items-end justify-between gap-10 border-t border-white/10 pt-10">
            <p className="text-white/60 text-lg md:text-xl max-w-md font-light leading-relaxed">
              A selection of digital experiences, brand systems and creative explorations by We Promote.
            </p>
            
            <div className="flex items-center gap-3 text-white/40 font-mono text-[10px] tracking-[0.2em] uppercase animate-pulse">
              Scroll to explore <ArrowDown className="w-3 h-3" />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* =========================================
          SECTION 02: FEATURED WORK
      ========================================= */}
      <section className="px-[5vw] py-20 pb-40">
        <div className="max-w-[1600px] mx-auto flex flex-col gap-32 md:gap-48">
          {PROJECTS.map((project, index) => (
            <motion.article 
              key={project.id}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUpStagger}
              className={`flex flex-col gap-10 md:gap-16 group cursor-pointer ${
                project.layout === "left" ? "md:flex-row" : 
                project.layout === "right" ? "md:flex-row-reverse" : 
                "md:flex-col"
              }`}
            >
              {/* Image Area */}
              <motion.div 
                variants={fadeUpItem}
                className={`relative overflow-hidden bg-[#111] ${
                  project.layout === "full" ? "w-full aspect-[21/9] md:aspect-[2.5/1]" : "w-full md:w-3/5 aspect-[4/5] md:aspect-[4/3]"
                }`}
              >
                <div className="absolute inset-0 bg-black/10 z-10 group-hover:bg-transparent transition-colors duration-700" />
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transform scale-[1.02] group-hover:scale-105 transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)]"
                />
              </motion.div>

              {/* Info Area */}
              <motion.div 
                variants={fadeUpItem}
                className={`flex flex-col justify-center ${
                  project.layout === "full" ? "w-full md:flex-row md:items-end md:justify-between" : "w-full md:w-2/5"
                }`}
              >
                <div className={`${project.layout === "full" ? "max-w-xl" : ""}`}>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="font-mono text-[11px] tracking-[0.2em] text-white/40">{project.number}</span>
                    <div className="h-px w-8 bg-white/20" />
                    <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#ff4a00] border border-[#ff4a00]/30 px-2 py-1 rounded-[2px] bg-[#ff4a00]/5">
                      {project.label}
                    </span>
                  </div>

                  <h2 className="text-[clamp(40px,5vw,72px)] leading-none font-medium tracking-tight mb-4 group-hover:translate-x-2 transition-transform duration-500 ease-out">
                    {project.title}
                  </h2>
                  <h3 className="text-white/50 text-sm md:text-base mb-8 uppercase tracking-widest font-mono">
                    {project.category}
                  </h3>
                  
                  <p className="text-white/70 text-lg md:text-xl font-light leading-relaxed mb-10 max-w-md">
                    {project.description}
                  </p>
                </div>

                <div className="flex">
                  <Link to="/contact" className="inline-flex items-center gap-3 font-mono text-[11px] tracking-[0.2em] uppercase border-b border-white/20 pb-2 group-hover:border-white transition-colors duration-300">
                    <span>View Project</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </Link>
                </div>
              </motion.div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* =========================================
          SECTION 03: CREATIVE APPROACH
      ========================================= */}
      <section className="px-[5vw] py-32 bg-[#0a0a0a]">
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpStagger}
          className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between gap-16 md:gap-24"
        >
          <div className="w-full md:w-1/2">
            <motion.span variants={fadeUpItem} className="block font-mono text-[11px] tracking-[0.2em] uppercase text-white/40 mb-10">
              How We Think
            </motion.span>
            <motion.h2 variants={fadeUpItem} className="text-[clamp(32px,4vw,64px)] leading-[1.1] font-medium tracking-tight mb-8">
              We don't create <br/>for the sake of being seen. <br/>
              <span className="text-white/40">We create to be remembered.</span>
            </motion.h2>
            <motion.p variants={fadeUpItem} className="text-white/60 text-lg md:text-xl font-light leading-relaxed max-w-md">
              Strategy, design, technology and storytelling come together to create digital experiences with a reason to exist.
            </motion.p>
          </div>
          
          <div className="w-full md:w-1/3 flex flex-col justify-end gap-6 font-mono text-sm md:text-base tracking-[0.15em] text-white/50 uppercase">
            {["Strategy", "Design", "Technology", "Story"].map((word, i) => (
              <motion.div key={word} variants={fadeUpItem} className="border-b border-white/10 pb-4 flex items-center justify-between hover:text-white transition-colors duration-300">
                <span>{word}</span>
                <span className="text-white/20">0{i+1}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* =========================================
          SECTION 04: PROJECT TYPES
      ========================================= */}
      <section className="px-[5vw] py-40">
        <div className="max-w-[1400px] mx-auto">
          <motion.div 
             initial="hidden"
             whileInView="show"
             viewport={{ once: true }}
             variants={fadeUpStagger}
             className="mb-20"
          >
            <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">
              What We Create
            </span>
          </motion.div>

          <div className="flex flex-col">
            {PROJECT_TYPES.map((type, index) => (
              <motion.div 
                key={type}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUpStagger}
                className="group relative block border-b border-white/10 last:border-b-0 cursor-pointer overflow-hidden"
              >
                <div className="relative z-10 flex items-center justify-between py-8 md:py-12 transition-transform duration-500 group-hover:translate-x-4">
                  <div className="flex items-baseline gap-6 md:gap-12">
                    <span className="font-mono text-sm md:text-xl text-white/30 transition-colors duration-300 group-hover:text-white/60">
                      0{index + 1}
                    </span>
                    <h3 className="text-[clamp(28px,4vw,72px)] font-medium tracking-tight">
                      {type}
                    </h3>
                  </div>
                  <ArrowRight className="w-8 h-8 md:w-12 md:h-12 text-white/0 -translate-x-8 group-hover:text-white group-hover:translate-x-0 transition-all duration-500 ease-out" strokeWidth={1} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 05: FINAL CTA
      ========================================= */}
      <section className="px-[5vw] py-40 pb-60 bg-[#040404] text-center flex flex-col items-center justify-center">
        <motion.div
           initial="hidden"
           whileInView="show"
           viewport={{ once: true }}
           variants={fadeUpStagger}
           className="flex flex-col items-center max-w-[1000px]"
        >
          <motion.span variants={fadeUpItem} className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40 mb-8">
            Have something in mind?
          </motion.span>
          
          <motion.h2 variants={fadeUpItem} className="text-[clamp(40px,7vw,110px)] leading-[1.05] font-medium tracking-tight mb-16">
            Let's make <br/>
            <span className="text-white/40 italic font-serif">something impossible</span> <br/>
            to ignore.
          </motion.h2>

          <motion.div variants={fadeUpItem}>
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
            variants={fadeUpItem}
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
