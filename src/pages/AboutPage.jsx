import React, { useRef } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Sparkles,
  TrendingUp,
  Users,
  Zap,
  ShieldCheck,
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

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

// ==========================================
// SECTIONS FOR "WE PROMOTE"
// ==========================================

const PromoteHero = () => {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between px-[5vw] pt-32 pb-16 overflow-hidden bg-[#FAF8F5] text-[#1E1B18] border-b border-[#E8E2D9]">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_20%,rgba(224,90,71,0.05),transparent_70%)]" />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.3]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #EFECE6 1px, transparent 1px), linear-gradient(to bottom, #EFECE6 1px, transparent 1px)",
          backgroundSize: "4rem 4rem",
        }}
      />

      {/* Top micro-header info */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-[1400px] w-full mx-auto flex justify-between items-center border-b border-[#E8E2D9] pb-6 relative z-10"
      >
        <div className="flex items-center gap-2.5">
          <span className="inline-flex items-center justify-center w-2 h-2 rounded-full bg-[#E05A47] animate-pulse" />
          <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.25em] uppercase text-[#E05A47] font-bold">
             We Promote // Growth & Promotion Engine
          </span>
        </div>
        <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-[#8C8375] hidden sm:inline-block font-semibold">
          High-Velocity Scale & Reach
        </span>
      </motion.div>

      {/* Hero Core Content - Asymmetric Layout */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="max-w-[1400px] w-full mx-auto my-auto py-16 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
      >
        <div className="lg:col-span-7 flex flex-col gap-6">
          <motion.div variants={fadeUp}>
            <span className="inline-block px-3.5 py-1 rounded-full bg-[#E05A47]/10 text-[#E05A47] font-mono text-xs tracking-widest uppercase font-bold mb-4">
We Promote
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-[clamp(44px,7.5vw,110px)] leading-[0.98] tracking-[-0.03em] font-extrabold text-[#1E1B18]"
          >
            Amplifying your brand to <br />
            <span
              className="text-[#E05A47] italic font-serif font-normal"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              dominate markets.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-[#5C5346] text-lg md:text-xl font-light leading-relaxed max-w-xl"
          >
            We engineer precision-targeted promotional campaigns, organic
            momentum, and high-conversion acquisition funnels that put your
            brand directly in front of high-intent buyers.
          </motion.p>
        </div>

        {/* Right side floating metric cards */}
        <motion.div
          variants={fadeUp}
          className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          <div className="bg-white p-6 rounded-2xl border border-[#E8E2D9] shadow-sm flex flex-col justify-between">
            <span className="font-mono text-[11px] text-[#8C8375] uppercase tracking-wider">
              Average ROI
            </span>
            <div className="my-6">
              <span className="text-4xl font-extrabold tracking-tight text-[#1E1B18]">
                3.8x
              </span>
              <span className="text-[#E05A47] font-mono text-xs ml-2 font-bold">
                +28% YoY
              </span>
            </div>
            <p className="text-xs text-[#5C5346] font-light">
              Direct attribution across paid and organic channels.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#E8E2D9] shadow-sm flex flex-col justify-between">
            <span className="font-mono text-[11px] text-[#8C8375] uppercase tracking-wider">
              Reach Efficiency
            </span>
            <div className="my-6">
              <span className="text-4xl font-extrabold tracking-tight text-[#1E1B18]">
                99.4%
              </span>
              <span className="text-[#E05A47] font-mono text-xs ml-2 font-bold">
                Zero Waste
              </span>
            </div>
            <p className="text-xs text-[#5C5346] font-light">
              Hyper-segmented audience targeting models.
            </p>
          </div>
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
          Performance Marketing • Paid Media • Creator Partnerships • SEO
          Dominance
        </div>
        <div className="font-mono text-[10px] tracking-[0.2em] text-[#E05A47] uppercase font-bold flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5" /> Built for Scale
        </div>
      </motion.div>
    </section>
  );
};

const PromotionPillars = () => {
  const pillars = [
    {
      num: "01",
      title: "Targeted Paid Acquisition",
      desc: "Stop burning budget on vanity clicks. We deploy laser-focused ad architectures across Meta, Google, and LinkedIn engineered strictly for profitable CAC and high LTV.",
      icon: <Zap className="w-5 h-5 text-[#E05A47]" />,
    },
    {
      num: "02",
      title: "Organic Authority & SEO",
      desc: "Own your industry search rankings. We build compounding organic traffic engines that capture high-intent search volume day in and day out without ad fatigue.",
      icon: <TrendingUp className="w-5 h-5 text-[#E05A47]" />,
    },
    {
      num: "03",
      title: "Creator & Influencer Ecosystems",
      desc: "Tap into trusted voices. We source, vet, and manage high-impact creator partnerships that give your brand instant social proof and authentic consumer scale.",
      icon: <Users className="w-5 h-5 text-[#E05A47]" />,
    },
    {
      num: "04",
      title: "Conversion Architecture",
      desc: "Traffic means nothing if visitors bounce. We optimize every landing page, funnel step, and hook to maximize conversion rates and revenue capture.",
      icon: <ShieldCheck className="w-5 h-5 text-[#E05A47]" />,
    },
  ];

  return (
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
            01 / Strategic Pillars
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="text-[clamp(32px,4.5vw,56px)] leading-[1.1] font-extrabold tracking-tight text-[#1E1B18]"
          >
            Multi-channel promotion built for compounding returns.
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((item, index) => (
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
                <h3 className="text-2xl font-bold tracking-tight text-[#1E1B18] mb-4">
                  {item.title}
                </h3>
                <p className="text-[#5C5346] text-base font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-12 pt-6 border-t border-[#FAF8F5] flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#8C8375]">
                  Execution Core
                </span>
                <span className="font-mono text-xs font-bold text-[#E05A47]">
                  Active Optimization
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PromotionProcess = () => {
  const steps = [
    {
      num: "01",
      title: "Audit & Positioning",
      desc: "We analyze your historical metrics, competitor positioning, and untapped market opportunities.",
    },
    {
      num: "02",
      title: "Asset & Funnel Setup",
      desc: "We build high-converting creatives, landing pages, and tracking infrastructure.",
    },
    {
      num: "03",
      title: "Launch & Scale",
      desc: "We deploy controlled budget spikes, test messaging variants, and aggressively scale what wins.",
    },
    {
      num: "04",
      title: "Data & Iteration",
      desc: "Continuous refinement, cohort analysis, and ROAS enhancement to ensure long-term stability.",
    },
  ];

  return (
    <section className="px-[5vw] py-36 bg-white border-b border-[#E8E2D9]">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8"
        >
          <div>
            <motion.span
              variants={fadeUp}
              className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#E05A47] font-bold block mb-4"
            >
              02 / The Growth Framework
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="text-[clamp(32px,4vw,52px)] font-extrabold tracking-tight text-[#1E1B18]"
            >
              How we scale your brand systematically.
            </motion.h2>
          </div>
          <motion.p
            variants={fadeUp}
            className="text-[#5C5346] text-base font-light max-w-md"
          >
            No guessing games. Every promotional campaign follows a rigorous,
            data-backed roadmap designed for predictable scaling.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-[#FAF8F5] p-8 rounded-xl border border-[#E8E2D9] flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-xs font-bold text-[#E05A47] mb-6 block">
                  STEP // {step.num}
                </span>
                <h3 className="text-xl font-bold tracking-tight text-[#1E1B18] mb-3">
                  {step.title}
                </h3>
                <p className="text-sm font-light text-[#5C5346] leading-relaxed">
                  {step.desc}
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-[#E8E2D9] flex items-center justify-between">
                <span className="font-mono text-[10px] text-[#8C8375] uppercase">
                  Phase {step.num}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#E05A47]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const VisualStatement = () => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1, 1.05]);
  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={container}
      className="h-[130vh] relative bg-[#F3EFEA] border-b border-[#E8E2D9]"
    >
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden px-[5vw]">
        <motion.h2
          style={{ scale, opacity }}
          className="text-[clamp(50px,9vw,170px)] leading-[0.95] font-extrabold text-center uppercase whitespace-nowrap text-[#1E1B18]"
        >
          Stop whispering. <br />
          <span
            className="text-[#E05A47] italic font-serif lowercase font-normal"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Start echoing.
          </span>
        </motion.h2>
      </div>
    </section>
  );
};

const PromoteCTA = () => {
  return (
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
          Ready for lift-off?
        </motion.span>

        <motion.h2
          variants={fadeUp}
          className="text-[clamp(36px,6.5vw,96px)] leading-[1.05] font-extrabold tracking-tight mb-6 text-[#1E1B18]"
        >
          Let's amplify your <br />
          <span
            className="text-[#E05A47] italic font-serif font-normal"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            growth metrics.
          </span>
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="text-[#5C5346] text-lg md:text-xl font-light mb-12 max-w-xl"
        >
          Schedule a strategy call and let's map out your custom promotional
          growth engine.
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
              Launch Campaign{" "}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
  );
};

// ==========================================
// MAIN PAGE EXPORT
// ==========================================

export default function WePromotePage() {
  return (
    <div className="bg-[#FAF8F5] text-[#1E1B18] min-h-screen selection:bg-[#E05A47] selection:text-white font-sans overflow-x-hidden">
      <PromoteHero />
      <PromotionPillars />
      <PromotionProcess />
      <VisualStatement />
      <PromoteCTA />
    </div>
  );
}
