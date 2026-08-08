import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { INSIGHTS, TOPICS_LIST, CATEGORIES_LIST } from "../data/insights";

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

export default function InsightsPage() {
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [emailInput, setEmailInput] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  // Filter articles based on active category
  const filteredArticles = selectedCategory === "ALL" 
    ? INSIGHTS 
    : INSIGHTS.filter(item => item.category.toUpperCase() === selectedCategory);

  const featuredArticle = INSIGHTS.find(item => item.featured) || INSIGHTS[0];

  // Editorial Statement Scroll Animation
  const statementRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: statementRef,
    offset: ["start end", "end start"]
  });

  const statementScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1, 1.05]);
  const statementOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
      setEmailInput("");
    }
  };

  return (
    <div className="bg-[#070707] text-white min-h-screen selection:bg-white selection:text-black font-sans overflow-x-hidden">

      {/* =========================================
          01 / HERO
      ========================================= */}
      <section className="relative min-h-[85vh] flex flex-col justify-end px-[5vw] pb-[10vh] pt-32 overflow-hidden">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="max-w-[1400px] w-full mx-auto relative z-10"
        >
          <motion.div variants={fadeUp} className="mb-8">
            <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-white/50">
              Insights
            </span>
          </motion.div>

          <motion.h1 
            variants={fadeUp}
            className="text-[clamp(48px,9vw,140px)] leading-[1.02] tracking-[-0.03em] font-medium mb-12 max-w-[1200px]"
          >
            Ideas worth <br />
            <span className="text-white/40">thinking about.</span>
          </motion.h1>

          <motion.div variants={fadeUp} className="flex flex-col md:flex-row md:items-end justify-between gap-10 border-t border-white/10 pt-10">
            <p className="text-white/60 text-lg md:text-xl max-w-md font-light leading-relaxed">
              Perspectives on branding, digital experiences, marketing, technology and growth.
            </p>
            
            <div className="flex items-center gap-3 text-white/40 font-mono text-[10px] tracking-[0.2em] uppercase">
              Editorial Journal — 2026
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* =========================================
          02 / FEATURED INSIGHT
      ========================================= */}
      <section className="px-[5vw] py-20 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-12">
            <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">
              Featured Perspective
            </span>
          </div>

          <Link 
            to={`/insights/${featuredArticle.slug}`}
            className="group grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-[#070707] p-8 md:p-16 border border-white/10 hover:border-white/30 transition-colors duration-500"
          >
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#ff4a00]">FEATURED</span>
                <span className="text-white/20">•</span>
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/50">{featuredArticle.category.toUpperCase()}</span>
              </div>

              <h2 className="text-[clamp(32px,4vw,56px)] leading-[1.08] font-medium tracking-tight group-hover:translate-x-2 transition-transform duration-500 ease-out">
                {featuredArticle.title}
              </h2>

              <p className="text-white/60 text-lg font-light leading-relaxed max-w-xl">
                {featuredArticle.excerpt}
              </p>

              <div className="pt-6 flex items-center gap-3 font-mono text-[11px] tracking-[0.15em] uppercase text-white group-hover:text-white/80">
                <span>Read Article</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </div>

            <div className="lg:col-span-5 h-[350px] md:h-[420px] bg-[#111111] border border-white/10 relative overflow-hidden flex items-center justify-center p-8">
              {/* Abstract minimalist editorial graphic representation */}
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]" />
              <motion.div 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 text-center flex flex-col items-center justify-center gap-4"
              >
                <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center text-white/40 font-mono text-xs">
                  WP
                </div>
                <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/40">We Promote Journal</span>
              </motion.div>
            </div>
          </Link>
        </div>
      </section>

      {/* =========================================
          04 / FILTER SYSTEM & 03 / ARTICLE DIRECTORY
      ========================================= */}
      <section className="px-[5vw] py-32">
        <div className="max-w-[1400px] mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 border-b border-white/10 pb-8">
            <div>
              <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40 block mb-2">
                Latest Thinking
              </span>
              <h2 className="text-3xl font-medium tracking-tight">Explore Perspectives</h2>
            </div>

            {/* Minimal Filter Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
              {CATEGORIES_LIST.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`font-mono text-[11px] tracking-[0.15em] uppercase px-4 py-2 rounded-[2px] transition-all whitespace-nowrap ${
                      isActive 
                        ? "bg-white text-black font-medium" 
                        : "bg-white/5 text-white/60 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Vertical Article List */}
          <motion.div layout className="flex flex-col border-t border-white/10">
            <AnimatePresence>
              {filteredArticles.map((article, index) => (
                <motion.div
                  key={article.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <Link 
                    to={`/insights/${article.slug}`}
                    className="group py-12 md:py-16 border-b border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-8 hover:bg-white/[0.01] transition-colors px-2 md:px-4"
                  >
                    <div className="flex items-baseline gap-6 md:gap-12 md:w-2/3">
                      <span className="font-mono text-sm text-white/30 group-hover:text-white/60 transition-colors">
                        {article.id}
                      </span>
                      
                      <div className="flex flex-col gap-3">
                        <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#ff4a00]">
                          {article.category}
                        </span>
                        
                        <h3 className="text-[clamp(24px,3vw,42px)] font-medium tracking-tight group-hover:translate-x-2 transition-transform duration-300 ease-out">
                          {article.title}
                        </h3>

                        <p className="text-white/50 text-base font-light max-w-xl">
                          {article.excerpt}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between md:justify-end gap-12 md:w-1/3">
                      <span className="font-mono text-xs text-white/40">{article.date}</span>
                      
                      <div className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.15em] uppercase text-white/40 group-hover:text-white transition-colors">
                        <span>Read</span>
                        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>

            {filteredArticles.length === 0 && (
              <div className="py-20 text-center text-white/40 font-mono text-sm">
                No articles found in this category.
              </div>
            )}
          </motion.div>

        </div>
      </section>

      {/* =========================================
          05 / EDITORIAL FEATURE (STATEMENT BREAK)
      ========================================= */}
      <section ref={statementRef} className="h-[140vh] relative bg-[#040404] border-t border-white/5">
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden px-[5vw]">
          <motion.div 
            style={{ scale: statementScale, opacity: statementOpacity }}
            className="text-center max-w-4xl"
          >
            <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40 block mb-8">
              The We Promote View
            </span>
            <h2 className="text-[clamp(32px,5vw,72px)] leading-[1.1] font-medium tracking-tight uppercase">
              Good marketing isn't about saying more. <br />
              <span className="text-white/40 italic font-serif lowercase mt-4 block">
                It's about making the right thing impossible to ignore.
              </span>
            </h2>
          </motion.div>
        </div>
      </section>

      {/* =========================================
          06 / TOPICS DIRECTORY
      ========================================= */}
      <section className="px-[5vw] py-32 bg-[#0a0a0a]">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-16">
            <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">
              Explore Topics
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TOPICS_LIST.map((topic, i) => (
              <div 
                key={topic}
                onClick={() => setSelectedCategory(topic === "DIGITAL EXPERIENCES" ? "DIGITAL" : topic)}
                className="group p-10 bg-[#070707] border border-white/10 hover:border-white/40 transition-all duration-300 cursor-pointer flex flex-col justify-between h-48"
              >
                <span className="font-mono text-xs text-white/30">0{i + 1}</span>
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-medium tracking-tight group-hover:translate-x-2 transition-transform duration-300">
                    {topic}
                  </h3>
                  <ArrowRight className="w-5 h-5 text-white/30 group-hover:text-white group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          07 / NEWSLETTER SECTION
      ========================================= */}
      <section className="px-[5vw] py-32 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 flex flex-col gap-4">
            <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">
              From Time To Time
            </span>
            <h2 className="text-[clamp(32px,4vw,52px)] leading-[1.1] font-medium tracking-tight">
              Ideas in your inbox. <br />
              <span className="text-white/40">Nothing unnecessary.</span>
            </h2>
            <p className="text-white/60 text-base font-light max-w-md">
              Occasional insights on branding, digital, creativity and growth. No spam, ever.
            </p>
          </div>

          <div className="lg:col-span-6">
            {subscribed ? (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-8 bg-white/5 border border-white/10 font-mono text-xs tracking-widest text-white/80 uppercase"
              >
                ✓ Thank you for subscribing. You're on the list.
              </motion.div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  required
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="YOUR EMAIL"
                  className="bg-transparent border border-white/20 px-6 py-4 font-mono text-xs tracking-widest text-white placeholder:text-white/30 focus:outline-none focus:border-white flex-1 transition-colors"
                />
                <button 
                  type="submit" 
                  className="bg-white text-black px-8 py-4 font-mono text-xs tracking-widest uppercase hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* =========================================
          08 / FINAL CLOSING CTA
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
            Have a project in mind?
          </motion.span>
          
          <motion.h2 variants={fadeUp} className="text-[clamp(40px,7vw,110px)] leading-[1.05] font-medium tracking-tight mb-8">
            Let's turn an idea <br />
            <span className="text-white/40 italic font-serif">into something</span> <br />
            worth noticing.
          </motion.h2>

          <motion.p variants={fadeUp} className="text-white/50 text-xl font-light mb-16">
            Tell us what you're building.
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
              to="/work" 
              className="group inline-flex items-center gap-3 font-mono text-[12px] tracking-[0.15em] uppercase text-white/60 hover:text-white transition-colors py-5 px-6"
            >
              View our Work
            </Link>
          </motion.div>
        </motion.div>
      </section>

    </div>
  );
}
