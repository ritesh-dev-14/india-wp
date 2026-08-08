import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowDown } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

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
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const lineTransition = {
  hidden: { width: "0%" },
  show: { width: "100%", transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
};

// ==========================================
// SECTIONS
// ==========================================

const AboutHero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-end px-[5vw] pb-[10vh] pt-32 overflow-hidden bg-[#070707]">
      {/* Subtle Abstract Background Animation */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <motion.div
          animate={{
            backgroundPosition: ["0px 0px", "100px 100px"],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "mirror",
            duration: 20,
            ease: "linear",
          }}
          className="w-full h-full"
          style={{
            backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "4rem 4rem"
          }}
        />
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="max-w-[1400px] w-full mx-auto relative z-10"
      >
        <motion.div variants={fadeUp} className="mb-8">
          <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-white/50">
            About We Promote
          </span>
        </motion.div>

        <motion.h1 
          variants={fadeUp}
          className="text-[clamp(48px,9vw,140px)] leading-[1.02] tracking-[-0.03em] font-medium mb-12 max-w-[1200px]"
        >
          We build brands <br className="hidden md:block" />
          <span className="text-white/40">people remember.</span>
        </motion.h1>

        <motion.div variants={fadeUp} className="flex flex-col md:flex-row md:items-end justify-between gap-10 border-t border-white/10 pt-10">
          <p className="text-white/60 text-lg md:text-xl max-w-md font-light leading-relaxed">
            Strategy, creativity and technology working together to make brands impossible to ignore.
          </p>
          
          <div className="flex items-center gap-3 text-white/40 font-mono text-[10px] tracking-[0.2em] uppercase animate-pulse">
            Scroll to explore <ArrowDown className="w-3 h-3" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

const WhoWeAre = () => {
  return (
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
            01 / Who We Are
          </span>
        </motion.div>
        
        <div className="md:col-span-8 flex flex-col gap-10">
          <motion.h2 variants={fadeUp} className="text-[clamp(32px,4vw,64px)] leading-[1.1] font-medium tracking-tight text-white">
            We are a digital-first creative agency built for brands that want to move forward.
          </motion.h2>
          <motion.p variants={fadeUp} className="text-white/50 text-xl md:text-2xl font-light leading-relaxed max-w-2xl">
            We Promote brings strategy, creative thinking, technology and digital execution together to help businesses build stronger brands and better digital experiences.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
};

const OurBelief = () => {
  return (
    <section className="px-[5vw] py-40 md:py-60 flex items-center justify-center text-center bg-[#070707] border-y border-white/5">
      <motion.div 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="max-w-[1200px] mx-auto flex flex-col items-center"
      >
        <motion.span variants={fadeUp} className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/30 mb-12">
          02 / Our Belief
        </motion.span>
        
        <motion.h2 variants={fadeUp} className="text-[clamp(40px,6vw,96px)] leading-[1.05] font-medium tracking-tight mb-12 uppercase">
          Good marketing gets attention. <br/>
          <span className="text-white/40 italic font-serif lowercase">Great brands</span> stay remembered.
        </motion.h2>

        <motion.p variants={fadeUp} className="text-white/50 text-lg md:text-xl font-light max-w-2xl leading-relaxed">
          We believe in clarity over clutter. We focus on consistent, meaningful digital experiences that create lasting impressions rather than temporary spikes.
        </motion.p>
      </motion.div>
    </section>
  );
};

const OurApproach = () => {
  const steps = [
    { num: "01", title: "THINK", desc: "Understand the business, audience and opportunity." },
    { num: "02", title: "CREATE", desc: "Turn strategy into distinctive creative ideas." },
    { num: "03", title: "BUILD", desc: "Create digital experiences that actually work." },
    { num: "04", title: "GROW", desc: "Improve, evolve and scale what works." }
  ];

  return (
    <section className="px-[5vw] py-32 bg-[#0a0a0a]">
      <motion.div 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="max-w-[1400px] mx-auto"
      >
        <motion.div variants={fadeUp} className="mb-24">
          <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">
            03 / How We Think
          </span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-x-8 gap-y-16">
          {steps.map((step, index) => (
            <motion.div key={step.num} variants={fadeUp} className="flex flex-col">
              <div className="h-[1px] w-full bg-white/10 mb-8 relative overflow-hidden">
                <motion.div 
                  variants={lineTransition} 
                  className="absolute top-0 left-0 h-full bg-white/60"
                />
              </div>
              <span className="font-mono text-sm text-white/40 mb-6">{step.num} — {step.title}</span>
              <p className="text-xl md:text-2xl font-light tracking-tight text-white/80 leading-snug">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

const TheDifference = () => {
  const principles = [
    { title: "STRATEGY", desc: "We start with the problem, not the deliverable." },
    { title: "CREATIVITY", desc: "Ideas should be distinctive enough to be remembered." },
    { title: "TECHNOLOGY", desc: "Digital experiences should be fast, useful and beautiful." },
    { title: "GROWTH", desc: "Everything should ultimately move the business forward." }
  ];

  return (
    <section className="px-[5vw] py-40">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row gap-20">
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="md:w-1/3"
        >
          <motion.span variants={fadeUp} className="block font-mono text-[11px] tracking-[0.2em] uppercase text-white/40 mb-8">
            04 / The Difference
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-[clamp(40px,4vw,64px)] leading-[1.05] tracking-tight font-medium sticky top-32">
            Not just another <br/>agency.
          </motion.h2>
        </motion.div>

        <div className="md:w-2/3 flex flex-col">
          {principles.map((p, i) => (
            <motion.div 
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="group relative border-b border-white/10 py-12 md:py-16 flex flex-col md:flex-row md:items-baseline gap-4 md:gap-16 cursor-pointer"
            >
              <div className="absolute inset-0 bg-white/[0.02] scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500 ease-out pointer-events-none" />
              
              <span className="font-mono text-sm text-white/30 group-hover:text-white/60 transition-colors">
                0{i + 1}
              </span>
              <div className="flex flex-col gap-4">
                <h3 className="text-[clamp(32px,3vw,48px)] font-medium tracking-tight group-hover:translate-x-4 transition-transform duration-500 ease-out">
                  {p.title}
                </h3>
                <p className="text-white/50 text-lg max-w-md font-light group-hover:translate-x-4 transition-transform duration-500 delay-75 ease-out">
                  {p.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Capabilities = () => {
  const capabilities = [
    { title: "Brand Strategy", desc: "Positioning, messaging and identity systems." },
    { title: "Creative & Design", desc: "Art direction, UI/UX and campaign creative." },
    { title: "Web Experiences", desc: "High-performance websites and digital products." },
    { title: "Digital Marketing", desc: "Performance marketing, SEO and media buying." },
    { title: "Social Media", desc: "Content strategy, community and execution." },
    { title: "Technology", desc: "Web applications, platforms and robust architectures." }
  ];

  return (
    <section className="px-[5vw] py-32 bg-[#050505]">
      <motion.div 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="max-w-[1400px] mx-auto"
      >
        <motion.div variants={fadeUp} className="mb-20">
          <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">
            05 / Capabilities
          </span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {capabilities.map((cap, i) => (
            <motion.div key={cap.title} variants={fadeUp} className="group cursor-default flex flex-col gap-4 border-l border-white/10 pl-6 hover:border-white/40 transition-colors duration-500">
              <span className="font-mono text-[10px] text-white/30">0{i + 1}</span>
              <h3 className="text-2xl font-medium tracking-tight">{cap.title}</h3>
              <p className="text-white/50 text-sm font-light leading-relaxed">{cap.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

const Partnership = () => {
  return (
    <section className="px-[5vw] py-40">
      <motion.div 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="max-w-[1400px] mx-auto flex flex-col items-center text-center"
      >
        <motion.span variants={fadeUp} className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40 mb-8">
          06 / Partnership
        </motion.span>
        
        <motion.h2 variants={fadeUp} className="text-[clamp(32px,5vw,72px)] leading-[1.05] tracking-tight font-medium mb-8">
          Built around your ambition.
        </motion.h2>

        <motion.p variants={fadeUp} className="text-white/50 text-lg md:text-xl font-light max-w-2xl mb-24">
          Every project starts with understanding where you are, where you want to go, and what needs to happen next.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
          {[
            { title: "UNDERSTAND", desc: "We learn the business." },
            { title: "BUILD", desc: "We turn ideas into execution." },
            { title: "EVOLVE", desc: "We continue improving what works." }
          ].map((step, i) => (
             <motion.div key={step.title} variants={fadeUp} className="bg-[#0a0a0a] p-12 flex flex-col items-center justify-center border border-white/5">
                <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/30 mb-6">Phase 0{i + 1}</span>
                <h3 className="text-2xl font-medium tracking-tight mb-4">{step.title}</h3>
                <p className="text-white/50 text-sm font-light">{step.desc}</p>
             </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

const VisualStatement = () => {
  const container = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0, 1, 1, 0]);
  const letterSpacing = useTransform(scrollYProgress, [0, 1], ["-0.05em", "0em"]);

  return (
    <section ref={container} className="h-[150vh] relative bg-[#040404]">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden px-[5vw]">
        <motion.h2 
          style={{ scale, opacity, letterSpacing }}
          className="text-[clamp(60px,10vw,200px)] leading-[0.9] font-medium text-center uppercase whitespace-nowrap"
        >
          Make something <br/>
          <span className="text-white/30 italic font-serif lowercase">worth noticing.</span>
        </motion.h2>
      </div>
    </section>
  );
};

const AboutCTA = () => {
  return (
    <section className="px-[5vw] py-40 pb-60 bg-[#020202] text-center flex flex-col items-center justify-center border-t border-white/5 z-10 relative">
      <motion.div
         initial="hidden"
         whileInView="show"
         viewport={{ once: true }}
         variants={staggerContainer}
         className="flex flex-col items-center max-w-[1000px]"
      >
        <motion.span variants={fadeUp} className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40 mb-8">
          Let's build something
        </motion.span>
        
        <motion.h2 variants={fadeUp} className="text-[clamp(40px,7vw,110px)] leading-[1.05] font-medium tracking-tight mb-8">
          Have something <br/>
          worth building?
        </motion.h2>

        <motion.p variants={fadeUp} className="text-white/50 text-xl font-light mb-16">
          Tell us what you're working on.
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
  );
};

// ==========================================
// MAIN PAGE EXPORT
// ==========================================

export default function AboutPage() {
  return (
    <div className="bg-[#070707] text-white min-h-screen selection:bg-white selection:text-black font-sans overflow-x-hidden">
      <AboutHero />
      <WhoWeAre />
      <OurBelief />
      <OurApproach />
      <TheDifference />
      <Capabilities />
      <Partnership />
      <VisualStatement />
      <AboutCTA />
    </div>
  );
}
