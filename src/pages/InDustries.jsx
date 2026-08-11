import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowDown, Building2, Cpu, ShoppingBag, Landmark, HeartPulse, GraduationCap } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

// ==========================================
// INDUSTRIES DATA
// ==========================================
const INDUSTRIES = [
  {
    num: "01",
    tag: "FinTech & Web3",
    title: "Financial Technology & Banking",
    desc: "Engineering high-security, ultra-low latency digital platforms, AI-powered financial dashboards, and seamless banking portals that command institutional trust.",
    metric: "99.99% Uptime",
    icon: <Landmark className="w-5 h-5 text-[#E05A47]" />,
  },
  {
    num: "02",
    tag: "E-Commerce & D2C",
    title: "Luxury Retail & Commerce",
    desc: "Building bespoke, high-conversion e-commerce ecosystems with lightning-fast load times, immersive product storytelling, and frictionless checkout flows.",
    metric: "+42% Avg Conversion",
    icon: <ShoppingBag className="w-5 h-5 text-[#E05A47]" />,
  },
  {
    num: "03",
    tag: "SaaS & Enterprise",
    title: "B2B SaaS & Cloud Software",
    desc: "Transforming complex software architectures into intuitive, high-retention user experiences with robust MERN stack backends and pristine UI/UX design systems.",
    metric: "3.5x User Retention",
    icon: <Cpu className="w-5 h-5 text-[#E05A47]" />,
  },
  {
    num: "04",
    tag: "Real Estate & Hospitality",
    title: "Hospitality & Real Estate",
    desc: "Crafting immersive digital brand experiences, dynamic booking engines, and luxury property portfolios that convert digital lookers into high-value buyers.",
    metric: "2.8x Direct Bookings",
    icon: <Building2 className="w-5 h-5 text-[#E05A47]" />,
  },
  {
    num: "05",
    tag: "HealthTech & Wellness",
    title: "Healthcare & Digital Wellness",
    desc: "Developing HIPAA-compliant web applications, patient management portals, and modern wellness brand presences built with absolute reliability and empathy.",
    metric: "Zero-Latency Flows",
    icon: <HeartPulse className="w-5 h-5 text-[#E05A47]" />,
  },
  {
    num: "06",
    tag: "EdTech & Academics",
    title: "Education & EdTech Platforms",
    desc: "Designing interactive learning management systems, student dashboards, and community-driven knowledge platforms engineered for scale and engagement.",
    metric: "100k+ Active Users",
    icon: <GraduationCap className="w-5 h-5 text-[#E05A47]" />,
  },
];

// ==========================================
// ANIMATION UTILITIES
// ==========================================
const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function IndustriesPage() {
  const statementRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: statementRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1, 1.05]);
  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0, 1, 1, 0]);

  return (
    <div className="bg-[#FAF8F5] text-[#1E1B18] min-h-screen selection:bg-[#E05A47] selection:text-white font-sans overflow-x-hidden">
      
      {/* =========================================
          01 / HERO SECTION
      ========================================= */}
      <section className="relative min-h-[90vh] flex flex-col justify-between px-[5vw] pt-32 pb-16 overflow-hidden bg-[#FAF8F5] border-b border-[#E8E2D9]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_20%_20%,rgba(224,90,71,0.05),transparent_70%)]" />
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.3]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #EFECE6 1px, transparent 1px), linear-gradient(to bottom, #EFECE6 1px, transparent 1px)",
            backgroundSize: "5rem 5rem",
          }}
        />

        {/* Top Micro-Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[1400px] w-full mx-auto flex justify-between items-center border-b border-[#E8E2D9] pb-6 relative z-10"
        >
          <div className="flex items-center gap-2.5">
            <span className="inline-flex items-center justify-center w-2 h-2 rounded-full bg-[#E05A47] animate-pulse" />
            <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.25em] uppercase text-[#E05A47] font-bold">
              We Promote // Industries & Verticals
            </span>
          </div>
          <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-[#8C8375] hidden sm:inline-block font-semibold">
            Specialized Digital Architecture
          </span>
        </motion.div>

        {/* Hero Title & Intro */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="max-w-[1400px] w-full mx-auto my-auto py-16 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-end"
        >
          <div className="lg:col-span-8">
            <motion.div variants={fadeUp}>
              <span className="inline-block px-3.5 py-1 rounded-full bg-[#E05A47]/10 text-[#E05A47] font-mono text-xs tracking-widest uppercase font-bold mb-6">
                Sectors We Transform
              </span>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="text-[clamp(44px,8vw,120px)] leading-[0.98] tracking-[-0.03em] font-extrabold text-[#1E1B18]"
            >
              Tailored solutions for <br />
              <span
                className="text-[#E05A47] italic font-serif font-normal"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                ambitious markets.
              </span>
            </motion.h1>
          </div>

          <motion.div variants={fadeUp} className="lg:col-span-4 pb-2">
            <p className="text-[#5C5346] text-lg md:text-xl font-light leading-relaxed">
              We partner with category leaders across diverse industries, combining deep technical engineering with high-impact digital branding.
            </p>
          </motion.div>
        </motion.div>

        {/* Bottom Ticker */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="max-w-[1400px] w-full mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#E8E2D9] pt-6 relative z-10"
        >
          <div className="font-mono text-[11px] tracking-[0.2em] text-[#5C5346] uppercase font-semibold">
            FinTech • E-Commerce • SaaS • Real Estate • HealthTech • EdTech
          </div>
          <div className="font-mono text-[10px] tracking-[0.2em] text-[#8C8375] uppercase font-semibold flex items-center gap-2">
            Scroll to explore verticals <ArrowDown className="w-3 h-3 text-[#E05A47]" />
          </div>
        </motion.div>
      </section>

      {/* =========================================
          02 / INDUSTRIES GRID SECTION
      ========================================= */}
      <section className="px-[5vw] py-32 md:py-40 bg-[#F3EFEA] border-b border-[#E8E2D9]">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mb-20 max-w-2xl"
          >
            <motion.span
              variants={fadeUp}
              className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#E05A47] font-bold block mb-4"
            >
              01 / Core Verticals
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="text-[clamp(32px,4.5vw,56px)] leading-[1.1] font-extrabold tracking-tight text-[#1E1B18]"
            >
              Engineered for industry-specific dominance.
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {INDUSTRIES.map((item, index) => (
              <motion.div
                key={item.num}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                className="bg-white rounded-2xl p-10 border border-[#E8E2D9] shadow-sm hover:border-[#E05A47]/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#E8E2D9] group-hover:border-[#E05A47]/40 transition-colors">
                      {item.icon}
                    </div>
                    <span className="font-mono text-2xl font-black text-[#1E1B18]/15 group-hover:text-[#E05A47] transition-colors">
                      {item.num}
                    </span>
                  </div>

                  <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#E05A47] font-bold block mb-3">
                    {item.tag}
                  </span>

                  <h3 className="text-2xl font-bold tracking-tight text-[#1E1B18] mb-4 group-hover:text-[#E05A47] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-[#5C5346] text-base font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-12 pt-6 border-t border-[#FAF8F5] flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#8C8375]">
                    Impact Metric
                  </span>
                  <span className="font-mono text-xs font-bold text-[#1E1B18] bg-[#FAF8F5] px-3 py-1 rounded-full border border-[#E8E2D9]">
                    {item.metric}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          03 / IMMERSIVE SCROLL STATEMENT
      ========================================= */}
      <section
        ref={statementRef}
        className="h-[130vh] relative bg-[#FAF8F5] border-b border-[#E8E2D9]"
      >
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden px-[5vw]">
          <motion.h2
            style={{ scale, opacity }}
            className="text-[clamp(50px,9vw,160px)] leading-[0.95] font-extrabold text-center uppercase whitespace-nowrap text-[#1E1B18]"
          >
            Every sector requires <br />
            <span
              className="text-[#E05A47] italic font-serif lowercase font-normal"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              absolute precision.
            </span>
          </motion.h2>
        </div>
      </section>

      {/* =========================================
          04 / CTA SECTION
      ========================================= */}
      <section className="px-[5vw] py-36 bg-white text-center flex flex-col items-center justify-center border-t border-[#E8E2D9] relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_50%,rgba(224,90,71,0.04),transparent_70%)]" />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="flex flex-col items-center max-w-[900px] relative z-10"
        >
          <motion.span
            variants={fadeUp}
            className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#E05A47] mb-6 font-bold"
          >
            Ready to scale your vertical?
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="text-[clamp(36px,6.5vw,96px)] leading-[1.05] font-extrabold tracking-tight mb-6 text-[#1E1B18]"
          >
            Let's build your industry <br />
            <span
              className="text-[#E05A47] italic font-serif font-normal"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              benchmark.
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-[#5C5346] text-lg md:text-xl font-light mb-12 max-w-xl"
          >
            Schedule a discovery call to discuss your industry-specific requirements and growth roadmap.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <Link
              to="/contact"
              className="group relative inline-flex items-center justify-center bg-[#E05A47] text-white px-9 py-4 rounded-xl font-mono text-[12px] tracking-[0.15em] uppercase overflow-hidden shadow-lg shadow-[#E05A47]/20 font-bold transition-all hover:bg-[#C94735]"
            >
              <span className="relative z-10 flex items-center gap-3">
                Start a Project <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <Link
              to="/services"
              className="group inline-flex items-center gap-2 font-mono text-[12px] tracking-[0.15em] uppercase text-[#5C5346] hover:text-[#1E1B18] transition-colors py-4 px-6 font-semibold"
            >
              Explore All Services
            </Link>
          </motion.div>
        </motion.div>
      </section>

    </div>
  );
}
