import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowDown, CheckCircle2 } from "lucide-react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

// ==========================================
// DATA STRUCTURES
// ==========================================
const FAQS = [
  {
    category: "PROJECTS & SCOPE",
    q: "What types of projects do you typically take on?",
    a: "We partner with ambitious startups, scale-ups, and established enterprises on comprehensive brand transformations, high-performance web applications (MERN stack, modern UI/UX), bespoke e-commerce platforms, and ongoing digital growth strategies."
  },
  {
    category: "PROJECTS & SCOPE",
    q: "Can you help define our strategy if we only have a rough idea?",
    a: "Absolutely. Most of our partnerships begin right at the conceptual phase. We specialize in mapping raw ideas into concrete product scopes, technical architectures, and high-conversion positioning models before writing a single line of code."
  },
  {
    category: "PROCESS & TIMELINE",
    q: "How long does a typical project take from start to launch?",
    a: "Timelines vary based on scope. A focused brand identity or landing page system typically takes 3 to 4 weeks, while full-scale custom web platforms, e-commerce stores, or multi-page corporate systems range from 6 to 12 weeks."
  },
  {
    category: "PROCESS & TIMELINE",
    q: "What does your collaboration and communication process look like?",
    a: "We maintain absolute transparency through dedicated project boards, asynchronous update channels, and milestone reviews. You work directly with the creators and engineers building your product—no layers of account managers."
  },
  {
    category: "TECHNOLOGY & DESIGN",
    q: "What technologies and design stacks do you use?",
    a: "We build modern, lightning-fast digital products using React, Node.js, Tailwind CSS v4, Framer Motion, and robust headless architectures. Our design ecosystem is powered by Figma, focusing on pixel-perfect UI/UX design systems."
  },
  {
    category: "TECHNOLOGY & DESIGN",
    q: "Will our website be fully responsive and optimized for search engines?",
    a: "Yes. Every digital experience we build is engineered for flawless responsiveness across all devices, strict accessibility standards, and clean, search-engine-optimized codebases."
  },
  {
    category: "PARTNERSHIP & SUPPORT",
    q: "Do you offer ongoing support after the project launches?",
    a: "Yes. We view launch as day one. We offer retainer and maintenance partnerships focused on continuous feature iteration, performance optimization, and scaling your digital presence alongside your business growth."
  },
  {
    category: "PARTNERSHIP & SUPPORT",
    q: "How do we get started and what is the first step?",
    a: "Simply reach out through our contact form with a brief overview of what you are working on. We’ll schedule an introductory discovery call to discuss your goals, explore alignment, and outline a tailored roadmap."
  }
];

const CATEGORIES = ["ALL QUESTIONS", "PROJECTS & SCOPE", "PROCESS & TIMELINE", "TECHNOLOGY & DESIGN", "PARTNERSHIP & SUPPORT"];

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

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("ALL QUESTIONS");
  const [openIndex, setOpenIndex] = useState(0);

  // Filter FAQs based on category
  const filteredFaqs = activeCategory === "ALL QUESTIONS" 
    ? FAQS 
    : FAQS.filter(f => f.category === activeCategory);

  // Scroll statement animation
  const statementRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: statementRef,
    offset: ["start end", "end start"]
  });

  const statementScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1, 1.05]);
  const statementOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <div className="bg-[#FAF8F5] text-[#1E1B18] min-h-screen selection:bg-[#E05A47] selection:text-white font-sans overflow-x-hidden">
      
      {/* =========================================
          01 / HERO
      ========================================= */}
      <section className="relative min-h-[85vh] flex flex-col justify-end px-[5vw] pb-[10vh] pt-32 overflow-hidden border-b border-[#E8E2D9]">
        {/* Subtle background grid lines */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.4]" style={{ backgroundImage: "linear-gradient(to right, #EFECE6 1px, transparent 1px), linear-gradient(to bottom, #EFECE6 1px, transparent 1px)", backgroundSize: "6rem 6rem" }} />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="max-w-[1400px] w-full mx-auto relative z-10"
        >
          <motion.div variants={fadeUp} className="mb-8 flex items-center gap-2.5">
            <span className="inline-flex items-center justify-center w-2 h-2 rounded-full bg-[#E05A47] animate-pulse" />
            <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-[#E05A47] font-semibold">
              Frequently Asked Questions // SiteSparkOne
            </span>
          </motion.div>

          <motion.h1 
            variants={fadeUp}
            className="text-[clamp(42px,8vw,120px)] leading-[1.05] tracking-[-0.03em] font-extrabold mb-12 max-w-[1200px]"
          >
            Everything you need to know <br />
            about working with us. <br />
            <span className="text-[#E05A47] italic font-serif font-normal" style={{ fontFamily: "'Instrument Serif', serif" }}>No guesswork.</span>
          </motion.h1>

          <motion.div variants={fadeUp} className="flex flex-col md:flex-row md:items-end justify-between gap-10 border-t border-[#E8E2D9] pt-10">
            <p className="text-[#5C5346] text-lg md:text-xl max-w-md font-light leading-relaxed">
              Clear answers regarding our process, timelines, technology stack, and collaborative engagement model.
            </p>
            
            <div className="flex items-center gap-3 text-[#8C8375] font-mono text-[10px] tracking-[0.2em] uppercase animate-pulse font-semibold">
              Explore FAQs <ArrowDown className="w-3 h-3 text-[#E05A47]" />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* =========================================
          02 / CATEGORY FILTER & ACCORDION LIST
      ========================================= */}
      <section className="px-[5vw] py-32 bg-[#F3EFEA] border-t border-[#E8E2D9]">
        <div className="max-w-[1400px] mx-auto">
          
          {/* Category Tabs */}
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex flex-wrap gap-3 mb-20 border-b border-[#E8E2D9] pb-8"
          >
            {CATEGORIES.map(cat => (
              <motion.button
                key={cat}
                variants={fadeUp}
                onClick={() => {
                  setActiveCategory(cat);
                  setOpenIndex(0);
                }}
                className={`font-mono text-[11px] tracking-[0.15em] uppercase px-5 py-3 rounded-lg transition-all duration-300 border font-semibold ${
                  activeCategory === cat
                    ? "bg-[#1E1B18] text-white border-[#1E1B18] shadow-md"
                    : "bg-white text-[#5C5346] border-[#E8E2D9] hover:border-[#3B6A62]/40 hover:text-[#1E1B18]"
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </motion.div>

          {/* FAQ List */}
          <div className="flex flex-col border-t border-[#E8E2D9]">
            {filteredFaqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <motion.div 
                  key={faq.q}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="border-b border-[#E8E2D9] group bg-white rounded-xl mb-4 px-8 md:px-12 shadow-sm transition-all hover:border-[#3B6A62]/30"
                >
                  <div 
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="py-8 md:py-10 flex items-center justify-between gap-8 cursor-pointer select-none"
                  >
                    <div className="flex items-baseline gap-6 md:gap-12">
                      <span className="font-mono text-xs text-[#8C8375] group-hover:text-[#3B6A62] transition-colors font-bold">
                        0{index + 1}
                      </span>
                      <h3 className="text-[clamp(18px,2.5vw,30px)] font-extrabold tracking-tight text-[#1E1B18] group-hover:text-[#E05A47] transition-colors">
                        {faq.q}
                      </h3>
                    </div>

                    <div className={`w-10 h-10 rounded-full border border-[#E8E2D9] flex items-center justify-center shrink-0 transition-colors ${isOpen ? "bg-[#1E1B18] text-white border-[#1E1B18]" : "group-hover:border-[#E05A47] text-[#1E1B18]"}`}>
                      <span className="font-mono text-lg font-bold">{isOpen ? "—" : "+"}</span>
                    </div>
                  </div>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden pb-10 pl-12 md:pl-20 pr-6"
                      >
                        <div className="max-w-3xl border-l-2 border-[#E05A47] pl-6 py-2">
                          <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#E05A47] block mb-3 font-bold">
                            {faq.category}
                          </span>
                          <p className="text-[#5C5346] text-lg md:text-xl font-light leading-relaxed">
                            {faq.a}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================
          03 / STILL HAVE QUESTIONS SECTION
      ========================================= */}
      <section className="px-[5vw] py-32 bg-white">
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center bg-[#FAF8F5] p-12 md:p-24 border border-[#E8E2D9] rounded-2xl shadow-xl shadow-[#1E1B18]/[0.02]"
        >
          <div className="md:col-span-8 flex flex-col gap-6">
            <motion.span variants={fadeUp} className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#E05A47] font-semibold">
              Need Direct Assistance?
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-[clamp(32px,4vw,56px)] leading-[1.1] font-extrabold tracking-tight text-[#1E1B18]">
              Have a specific question we didn't cover here?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-[#5C5346] text-lg font-light max-w-xl">
              Drop us a message directly. We are always happy to discuss your goals, technical requirements, and how we can help.
            </motion.p>
          </div>

          <motion.div variants={fadeUp} className="md:col-span-4 flex justify-start md:justify-end">
            <Link 
              to="/contact" 
              className="group relative inline-flex items-center justify-center bg-[#1E1B18] text-white px-10 py-5 rounded-xl font-mono text-[12px] tracking-[0.15em] uppercase overflow-hidden shadow-xl font-bold"
            >
              <span className="relative z-10 flex items-center gap-3">
                Get in Touch <ArrowRight className="w-4 h-4 text-[#E05A47] group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-[#332F2A] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

   

      {/* =========================================
          05 / CTA
      ========================================= */}
      <section className="px-[5vw] py-40 pb-60 bg-white text-center flex flex-col items-center justify-center border-t border-[#E8E2D9] relative z-10">
        <motion.div
           initial="hidden"
           whileInView="show"
           viewport={{ once: true }}
           variants={staggerContainer}
           className="flex flex-col items-center max-w-[1000px]"
        >
          <motion.span variants={fadeUp} className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#E05A47] mb-8 font-semibold">
            Ready when you are
          </motion.span>
          
          <motion.h2 variants={fadeUp} className="text-[clamp(40px,7vw,110px)] leading-[1.05] font-extrabold tracking-tight mb-8 text-[#1E1B18]">
            Let's build something <br />
            <span className="text-[#E05A47] italic font-serif font-normal" style={{ fontFamily: "'Instrument Serif', serif" }}>exceptional</span> together.
          </motion.h2>

          <motion.p variants={fadeUp} className="text-[#5C5346] text-xl font-light mb-16">
            Tell us about your next project and let's get started.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center gap-6">
            <Link 
              to="/contact" 
              className="group relative inline-flex items-center justify-center bg-[#E05A47] text-white px-10 py-5 rounded-xl font-mono text-[12px] tracking-[0.15em] uppercase overflow-hidden shadow-xl shadow-[#E05A47]/20 font-bold"
            >
              <span className="relative z-10 flex items-center gap-3">
                Start a Project <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-[#C94735] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            </Link>

            <Link 
              to="/services" 
              className="group inline-flex items-center gap-3 font-mono text-[12px] tracking-[0.15em] uppercase text-[#5C5346] hover:text-[#1E1B18] transition-colors py-5 px-6 font-semibold"
            >
              View our Services
            </Link>
          </motion.div>
        </motion.div>
      </section>

    </div>
  );
}
