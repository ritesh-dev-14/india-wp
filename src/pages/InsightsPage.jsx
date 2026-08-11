import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, X, ChevronRight, Activity, ArrowRight, Target, Compass, Sparkles, Rocket, BarChart3, TrendingUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// ==========================================
// DATA STRUCTURES
// ==========================================
const CATEGORIES = [
  "ALL PHASES",
  "UNDERSTAND",
  "STRATEGIZE",
  "CREATE",
  "ACTIVATE",
  "OPTIMIZE",
  "GROW"
];

const APPROACH_PHASES = [
  {
    id: "01",
    category: "UNDERSTAND",
    eyebrow: "01 / UNDERSTAND",
    title: "Before We Create, We Understand.",
    excerpt: "Every strong idea starts with understanding. We study your business, audience, market, competitors, and objectives to identify where the real opportunity lies.",
    date: "PHASE",
    readTime: "01",
    author: "Strategy Team",
    icon: Target,
    fullContent: (
      <div className="space-y-8 text-[#1A1A1A]">
        <p className="text-2xl leading-snug font-light text-[#4A4A4A]">
          Every strong idea starts with understanding. We study your business, audience, market, competitors, and objectives to identify where the real opportunity lies.
        </p>
        <div className="w-full h-px bg-[#E2DFD8]" />
        <p className="text-lg leading-relaxed">
          Before we write a line of code or design a single screen, we immerse ourselves in your world. This foundational step ensures that our creative and technical decisions are grounded in actual business realities and audience needs.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
          <div className="p-6 bg-[#F7F6F2] border border-[#E2DFD8]">
            <h4 className="font-mono text-[11px] uppercase tracking-widest text-[#CF3626] font-semibold mb-2">Market Mapping</h4>
            <p className="text-sm text-[#68635B] font-light leading-relaxed">Analyzing competitive landscapes and positioning gaps to secure your market advantage.</p>
          </div>
          <div className="p-6 bg-[#F7F6F2] border border-[#E2DFD8]">
            <h4 className="font-mono text-[11px] uppercase tracking-widest text-[#CF3626] font-semibold mb-2">Audience Psychology</h4>
            <p className="text-sm text-[#68635B] font-light leading-relaxed">Mapping customer motivations, friction points, and behavioral drivers with absolute precision.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "02",
    category: "STRATEGIZE",
    eyebrow: "02 / STRATEGIZE",
    title: "Ideas Need Direction.",
    excerpt: "We turn insights into a clear strategic direction. From positioning and communication to digital campaigns and experiences, every decision has a purpose.",
    date: "PHASE",
    readTime: "02",
    author: "Strategy Team",
    icon: Compass,
    fullContent: (
      <div className="space-y-8 text-[#1A1A1A]">
        <p className="text-2xl leading-snug font-light text-[#4A4A4A]">
          We turn insights into a clear strategic direction. From positioning and communication to digital campaigns and experiences, every decision has a purpose.
        </p>
        <div className="w-full h-px bg-[#E2DFD8]" />
        <p className="text-lg leading-relaxed">
          Strategy separates random execution from deliberate momentum. We establish rigorous frameworks, clear messaging architectures, and comprehensive roadmaps that align your internal team and captivate your market.
        </p>
      </div>
    ),
  },
  {
    id: "03",
    category: "CREATE",
    eyebrow: "03 / CREATE",
    title: "Make It Impossible to Ignore.",
    excerpt: "We bring strategy to life through design, content, technology, and creative execution. Every touchpoint is built to be distinctive, relevant, and memorable.",
    date: "PHASE",
    readTime: "03",
    author: "Creative Team",
    icon: Sparkles,
    fullContent: (
      <div className="space-y-8 text-[#1A1A1A]">
        <p className="text-2xl leading-snug font-light text-[#4A4A4A]">
          We bring strategy to life through design, content, technology, and creative execution. Every touchpoint is built to be distinctive, relevant, and memorable.
        </p>
        <div className="w-full h-px bg-[#E2DFD8]" />
        <p className="text-lg leading-relaxed">
          Great design is both aesthetic and functional. We engineer digital interfaces, high-impact content, and robust codebases that elevate your brand presence above the noise of modern digital saturation.
        </p>
      </div>
    ),
  },
  {
    id: "04",
    category: "ACTIVATE",
    eyebrow: "04 / ACTIVATE",
    title: "Take the Idea to the Market.",
    excerpt: "Great work should move beyond the screen. We create and launch digital campaigns, websites, social experiences, and brand activations designed to connect with the right audience.",
    date: "PHASE",
    readTime: "04",
    author: "Activation Team",
    icon: Rocket,
    fullContent: (
      <div className="space-y-8 text-[#1A1A1A]">
        <p className="text-2xl leading-snug font-light text-[#4A4A4A]">
          Great work should move beyond the screen. We create and launch digital campaigns, websites, social experiences, and brand activations designed to connect with the right audience.
        </p>
        <div className="w-full h-px bg-[#E2DFD8]" />
        <p className="text-lg leading-relaxed">
          Launch is just the beginning of the journey. We orchestrate cross-channel rollouts, performance media, and immersive digital deployments calibrated to capture attention from day one.
        </p>
      </div>
    ),
  },
  {
    id: "05",
    category: "OPTIMIZE",
    eyebrow: "05 / OPTIMIZE",
    title: "Build. Learn. Improve.",
    excerpt: "We pay attention to what happens after launch. Performance, audience behaviour, and real-world response help us refine what works and improve what doesn’t.",
    date: "PHASE",
    readTime: "05",
    author: "Performance Team",
    icon: BarChart3,
    fullContent: (
      <div className="space-y-8 text-[#1A1A1A]">
        <p className="text-2xl leading-snug font-light text-[#4A4A4A]">
          We pay attention to what happens after launch. Performance, audience behaviour, and real-world response help us refine what works and improve what doesn’t.
        </p>
        <div className="w-full h-px bg-[#E2DFD8]" />
        <p className="text-lg leading-relaxed">
          Complacency kills momentum. Through rigorous data analysis, user testing, and conversion rate optimization, we continuously fine-tune your digital ecosystem for maximum impact.
        </p>
      </div>
    ),
  },
  {
    id: "06",
    category: "GROW",
    eyebrow: "06 / GROW",
    title: "Turn Momentum Into Growth.",
    excerpt: "The goal isn’t simply to launch something impressive. It’s to build digital systems and brand experiences that create lasting momentum and support the next stage of growth.",
    date: "PHASE",
    readTime: "06",
    author: "Growth Team",
    icon: TrendingUp,
    fullContent: (
      <div className="space-y-8 text-[#1A1A1A]">
        <p className="text-2xl leading-snug font-light text-[#4A4A4A]">
          The goal isn’t simply to launch something impressive. It’s to build digital systems and brand experiences that create lasting momentum and support the next stage of growth.
        </p>
        <div className="w-full h-px bg-[#E2DFD8]" />
        <p className="text-lg leading-relaxed">
          Sustainable scale requires robust architecture and continuous strategic expansion. We partner with you long-term to turn early wins into compounding market leadership.
        </p>
      </div>
    ),
  },
];

// ==========================================
// PILLARS ROW DATA (Replaces METRICS to align with Agency Approach context)
// ==========================================
const APPROACH_PILLARS = [
  { label: "Clarity of Purpose", value: "01" },
  { label: "Strategic Discipline", value: "02" },
  { label: "Creative Distinction", value: "03" },
  { label: "Measurable Impact", value: "04" },
];

// ==========================================
// ANIMATION VARIANTS
// ==========================================
const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 20 } }
};

export default function Approach() {
  const [activeCategory, setActiveCategory] = useState("ALL PHASES");
  const [selectedArticle, setSelectedArticle] = useState(null);

  useEffect(() => {
    if (selectedArticle) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
  }, [selectedArticle]);

  const filteredPhases = activeCategory === "ALL PHASES" 
    ? APPROACH_PHASES 
    : APPROACH_PHASES.filter(a => a.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#F7F6F2] text-[#121212] font-sans selection:bg-[#CF3626] selection:text-white relative overflow-hidden">
      
      {/* Background Grid Pattern (Subtle) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" 
           style={{ backgroundImage: 'linear-gradient(#121212 1px, transparent 1px), linear-gradient(90deg, #121212 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      {/* ================= HERO SECTION ================= */}
      <section className="px-6 lg:px-12 pt-32 pb-24 border-b border-[#E2DFD8] mx-auto relative z-10">
        <motion.div initial="hidden" animate="show" variants={staggerContainer} className="max-w-[1600px] mx-auto">
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-12">
            <Activity className="w-4 h-4 text-[#CF3626] animate-pulse" />
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#CF3626] font-semibold">
              OUR APPROACH
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-end">
            <motion.div variants={fadeUp} className="lg:col-span-9">
              <h1 className="text-[4rem] sm:text-[6rem] lg:text-[7.5rem] font-medium tracking-tighter leading-[0.85] text-[#121212]">
                Strategy That <br />
                <span className="text-[#8A857D] italic font-light">Moves Brands</span> <br />
                Forward.
              </h1>
            </motion.div>
            <motion.div variants={fadeUp} className="lg:col-span-3 pb-6 border-l border-[#E2DFD8] pl-6 lg:pl-12">
              <p className="text-[#68635B] text-lg leading-relaxed font-light">
                We combine strategy, creativity, technology, and performance to build digital experiences that help ambitious brands move with clarity and purpose.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ================= PILLARS ROW ================= */}
      <div className="border-b border-[#E2DFD8] bg-[#F7F6F2] relative z-10">
        <div className="max-w-[1600px] mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-[#E2DFD8]">
          {APPROACH_PILLARS.map((pillar, i) => (
            <div key={i} className="p-8 lg:p-12 hover:bg-[#F0EFEA] transition-colors duration-500 group">
              <p className="text-4xl lg:text-6xl font-light tracking-tighter text-[#121212] mb-4 group-hover:text-[#CF3626] transition-colors duration-500">{pillar.value}</p>
              <p className="font-mono text-[10px] text-[#8A857D] uppercase tracking-widest font-semibold">{pillar.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ================= CORE PROTOCOLS / PILLARS PREVIEW ================= */}
      <section className="px-6 lg:px-12 py-24 border-b border-[#E2DFD8] bg-[#FDFCFB] relative z-10">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div>
              <span className="font-mono text-[10px] tracking-widest text-[#CF3626] font-semibold block mb-4">FRAMEWORK</span>
              <h2 className="text-3xl lg:text-4xl font-medium tracking-tight">The 6-Stage Methodology</h2>
            </div>
            <Link to="/contact" className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest font-semibold text-[#CF3626] hover:text-[#121212] transition-colors">
              Start Your Project <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#E2DFD8] border border-[#E2DFD8]">
            {APPROACH_PHASES.slice(0, 3).map((phase, i) => {
              const IconComp = phase.icon;
              return (
                <div key={i} onClick={() => setSelectedArticle(phase)} className="bg-[#FDFCFB] p-10 lg:p-14 hover:bg-[#F7F6F2] transition-colors duration-500 cursor-pointer group">
                  <div className="flex items-center justify-between mb-8">
                    <IconComp className="w-8 h-8 text-[#121212] group-hover:text-[#CF3626] transition-colors" strokeWidth={1.5} />
                    <span className="font-mono text-[10px] text-[#8A857D] tracking-widest">{phase.id}</span>
                  </div>
                  <h3 className="text-xl font-medium tracking-tight mb-4 group-hover:text-[#CF3626] transition-colors">{phase.title}</h3>
                  <p className="text-[#68635B] leading-relaxed font-light text-sm line-clamp-3">{phase.excerpt}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= MANIFESTO ================= */}
      <section className="px-6 lg:px-12 py-32 bg-[#121212] text-[#F7F6F2] relative z-10 selection:bg-[#CF3626] selection:text-[#121212]">
        <motion.div 
          initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
          className="max-w-[1200px] mx-auto text-center"
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#8A857D] font-semibold mb-12">
            Our Philosophy
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-medium tracking-tighter leading-[1.1] mb-12">
            We don’t chase trends. <br className="hidden lg:block"/>
            We build <span className="text-[#CF3626] italic">lasting digital presence</span> <br className="hidden lg:block"/>
            for ambitious brands.
          </h2>
          <div className="w-px h-24 bg-[#333] mx-auto" />
        </motion.div>
      </section>

      {/* ================= CONTENT ARCHIVE (THE APPROACH PHASES) ================= */}
      <section className="px-6 lg:px-12 py-24 max-w-[1600px] mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 border-b border-[#E2DFD8] pb-8">
          <div>
            <span className="font-mono text-[10px] tracking-widest text-[#CF3626] font-semibold block mb-4">DEEP DIVE</span>
            <h2 className="text-3xl lg:text-4xl font-medium tracking-tight">Explore Our Phases</h2>
          </div>
          
          <div className="flex flex-wrap items-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-mono text-[10px] uppercase tracking-widest px-5 py-2.5 transition-all duration-300 rounded-full ${
                  activeCategory === cat ? "bg-[#121212] text-white" : "bg-transparent text-[#68635B] hover:text-[#121212] hover:bg-[#EAE8E1]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="min-h-[400px]">
          <AnimatePresence mode="popLayout">
            {filteredPhases.map((phase) => (
              <motion.div 
                layout initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, filter: "blur(4px)" }} transition={{ duration: 0.4 }}
                key={phase.id} onClick={() => setSelectedArticle(phase)}
                className="group border-b border-[#E2DFD8] py-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center cursor-pointer hover:bg-[#F0EFEA] -mx-6 px-6 lg:-mx-12 lg:px-12 transition-colors duration-500"
              >
                <div className="lg:col-span-3 flex flex-col gap-2">
                  <span className="font-mono text-[10px] tracking-widest text-[#CF3626] font-semibold">{phase.eyebrow}</span>
                  <div className="font-mono text-[10px] tracking-widest text-[#8A857D] flex gap-3">
                    <span>{phase.date}</span> <span>•</span> <span>{phase.readTime}</span>
                  </div>
                </div>
                <div className="lg:col-span-7 pr-8">
                  <h3 className="text-2xl lg:text-3xl font-medium tracking-tight text-[#121212] group-hover:text-[#CF3626] transition-colors duration-300 mb-3">
                    {phase.title}
                  </h3>
                  <p className="text-[#68635B] text-base font-light leading-relaxed max-w-2xl line-clamp-2">{phase.excerpt}</p>
                </div>
                <div className="lg:col-span-2 flex justify-end hidden lg:flex">
                  <div className="w-12 h-12 rounded-full border border-[#E2DFD8] flex items-center justify-center bg-white group-hover:bg-[#121212] group-hover:border-[#121212] text-[#121212] group-hover:text-white transition-all duration-300 transform group-hover:scale-110">
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:rotate-45" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* ================= CLOSING CTA & FOOTER ================= */}
      <footer className="bg-[#121212] text-[#F7F6F2] relative z-10 pt-24 pb-12 px-6 lg:px-12">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 border-b border-[#333] pb-24">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-[#CF3626] font-semibold mb-6">
                READY TO MOVE FORWARD?
              </p>
              <h2 className="text-3xl lg:text-5xl font-medium tracking-tight mb-6">Let’s Build What’s Next.</h2>
              <p className="text-[#8A857D] font-light text-lg max-w-md">Have a challenge, an idea, or a brand ready for its next chapter? Let’s turn it into something people remember.</p>
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex flex-wrap items-center gap-4 w-full max-w-lg">
                <Link to="/contact" className="group flex items-center gap-3 bg-[#CF3626] text-white px-8 py-4 rounded-full hover:bg-[#F7F6F2] hover:text-[#121212] transition-colors shrink-0">
                  <span className="font-mono text-[10px] uppercase tracking-widest font-semibold">Start a Conversation</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link to="/work" className="group flex items-center gap-3 border border-[#333] text-[#F7F6F2] px-8 py-4 rounded-full hover:bg-[#F7F6F2] hover:text-[#121212] transition-colors shrink-0">
                  <span className="font-mono text-[10px] uppercase tracking-widest font-semibold">View Our Work</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
              </div>
            </div>
          </div>
          
          <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-6 font-mono text-[10px] uppercase tracking-widest text-[#8A857D]">
            <p>© 2026 WE PROMOTE INDIA.</p>
            <div className="flex gap-8">
              <Link to="/privacy" className="hover:text-[#F7F6F2] transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-[#F7F6F2] transition-colors">Terms of Use</Link>
              <Link to="/contact" className="hover:text-[#F7F6F2] transition-colors">Contact Us</Link>
            </div>
          </div>
        </div>
      </footer>

      {/* ================= ARTICLE READER DRAWER ================= */}
      <AnimatePresence>
        {selectedArticle && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}
              onClick={() => setSelectedArticle(null)}
              className="fixed inset-0 z-40 bg-[#121212]/40 backdrop-blur-sm cursor-pointer"
            />
            <motion.div
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 z-50 w-full md:w-[600px] lg:w-[800px] h-screen bg-[#FDFCFB] shadow-2xl flex flex-col border-l border-[#E2DFD8] overflow-hidden"
            >
              <div className="flex items-center justify-between px-8 py-6 border-b border-[#E2DFD8] bg-[#FDFCFB]">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#8A857D] font-semibold">Viewing Phase {selectedArticle.id}</span>
                <button onClick={() => setSelectedArticle(null)} className="w-10 h-10 rounded-full border border-[#E2DFD8] flex items-center justify-center hover:bg-[#121212] hover:text-white transition-all">
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-8 py-12 lg:px-16 lg:py-16">
                <div className="mb-12">
                  <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-widest text-[#CF3626] font-semibold mb-6">
                    <span>{selectedArticle.category}</span>
                    <span className="text-[#8A857D]">/</span>
                    <span className="text-[#8A857D]">PHASE {selectedArticle.readTime}</span>
                  </div>
                  <h1 className="text-4xl lg:text-5xl font-medium tracking-tight leading-[1.1] text-[#121212] mb-8">
                    {selectedArticle.title}
                  </h1>
                  <div className="flex items-center gap-4 border-t border-b border-[#E2DFD8] py-4 font-mono text-[10px] uppercase tracking-widest text-[#8A857D]">
                    <span>By {selectedArticle.author}</span> <span>•</span> <span>APPROACH</span>
                  </div>
                </div>
                <div className="prose prose-lg prose-neutral max-w-none">
                  {selectedArticle.fullContent}
                </div>
              </div>

              {/* SIMPLIFIED CONTACT SECTION RE-ROUTE */}
              <div className="p-8 border-t border-[#E2DFD8] bg-[#F7F6F2] flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-[#121212] mb-1">Ready to start this phase?</p>
                  <p className="text-sm text-[#68635B] font-light">Get in touch with our team.</p>
                </div>
                <Link to="/contact" onClick={() => setSelectedArticle(null)} className="group flex items-center gap-2 bg-[#CF3626] text-white px-6 py-3 rounded-full hover:bg-[#B32D1F] transition-colors">
                  <span className="font-mono text-[10px] uppercase tracking-widest font-semibold">Start a Conversation</span>
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
