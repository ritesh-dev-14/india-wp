"use client";
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Phone, Mail, Sparkles, Clock, Globe, Building2 } from "lucide-react";
import { motion } from "framer-motion";

// ==========================================
// DATA STRUCTURES
// ==========================================
const STATS = [
  { value: "05+", label: "Years of Industry Mastery" },
  { value: "4,500+", label: "IT & Web Projects Delivered" },
  { value: "165+", label: "Active Ongoing Clients" },
  { value: "Forbes, TOI", label: "Top-Tier PR Placement Partners" },
];

const VALUES = [
  {
    num: "01",
    title: "Relentless Authority",
    desc: "We don't just build presence; we engineer dominant market authority that positions your brand as the undisputed leader.",
  },
  {
    num: "02",
    title: "Pixel & Code Perfection",
    desc: "Every digital touchpoint, interaction, and line of code is meticulously optimized for high-performance and aesthetic supremacy.",
  },
  {
    num: "03",
    title: "Absolute Transparency",
    desc: "No fluff, no vanity metrics. Every campaign, strategy, and deliverable is tied directly to your bottom line and real growth.",
  },
  {
    num: "04",
    title: "Long-Term Compounding",
    desc: "We construct foundational digital assets and PR ecosystems designed to compound in value long after launch day.",
  },
];

const MILESTONES = [
  {
    year: "2021",
    title: "The Inception",
    desc: "Started with a clear mission to bridge the gap between high-end digital engineering and aggressive media growth.",
  },
  {
    year: "2023",
    title: "Scaling Capabilities",
    desc: "Expanded into full-stack development, mobile UI/UX architectures, and premier national PR syndications.",
  },
  {
    year: "2024",
    title: "National Expansion",
    desc: "Established our dual footprint with our main headquarters in Mohali and strategic corporate operations in New Delhi.",
  },
  {
    year: "2026",
    title: "Industry Leadership",
    desc: "Managing over 165 ongoing active clients and 4,500+ successful project deliveries across global markets.",
  },
];

const OFFICES = [
  {
    city: "Mohali (Main Headquarters)",
    address: "Ground Floor, Office 01, We Promote, Nasib Tower, PM5M+2MP, Phase 8B, Industrial Area, Sector 74, Sahibzada Ajit Singh Nagar, Punjab 140307",
    primary: true,
  },
  {
    city: "New Delhi",
    address: "Corporate Branch Office, New Delhi, India",
    primary: false,
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

export default function AboutPage() {
  return (
    <div className="bg-transparent text-[#1A1714] min-h-screen selection:bg-[#8C6A1E]/20 selection:text-[#1A1714] font-sans overflow-x-hidden">
      
      {/* =========================================
          SECTION 01: HERO
      ========================================= */}
      <section className="relative min-h-[85vh] flex flex-col justify-end px-[5vw] pb-20 pt-32 border-b border-[#8C6A1E]/20">
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
            <span className="inline-flex items-center justify-center w-2 h-2 rounded-full bg-[#8C6A1E] animate-pulse" />
            <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.25em] uppercase text-[#8C6A1E] font-bold">
              01 / About Us // We Promote India
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-[clamp(42px,8vw,120px)] leading-[1.05] tracking-[-0.02em] font-light mb-8 max-w-[1250px]"
            style={{ fontFamily: "var(--font-display, 'Fraunces'), serif" }}
          >
            We are the architects of <br className="hidden md:block" />
            <span className="font-normal italic text-[#8C6A1E]">modern brand authority.</span>
          </motion.h1>

          <motion.div
            variants={fadeUp}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-t border-[#8C6A1E]/20 pt-8"
          >
            <p className="text-[#57534E] text-lg md:text-xl max-w-xl font-light leading-relaxed">
              With our main headquarters in Mohali and operations across New Delhi, We Promote India is a powerhouse of digital engineers, creative strategists, and PR specialists dedicated to making brands impossible to ignore.
            </p>

            <div className="flex items-center gap-3 text-[#78716C] font-mono text-[10px] tracking-[0.2em] uppercase font-semibold">
              <Globe className="w-3.5 h-3.5 text-[#8C6A1E]" /> Mohali & New Delhi, India
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* =========================================
          SECTION 02: STATS GRID
      ========================================= */}
      <section className="px-[5vw] py-20 border-b border-[#8C6A1E]/20 bg-[#FAF8F5]/40">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-[#FAF8F5] p-8 border border-[#8C6A1E]/20 rounded-sm shadow-xs flex flex-col justify-between gap-6"
            >
              <span className="font-mono text-xs text-[#8C6A1E] font-bold">0{i + 1} / METRIC</span>
              <div>
                <h3 
                  className="text-[clamp(32px,3.5vw,48px)] font-light tracking-tight text-[#1A1714] mb-2"
                  style={{ fontFamily: "var(--font-display, 'Fraunces'), serif" }}
                >
                  {stat.value}
                </h3>
                <p className="text-xs text-[#57534E] font-mono uppercase tracking-[0.1em]">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* =========================================
          SECTION 03: OUR STORY & MANIFESTO
      ========================================= */}
      <section className="px-[5vw] py-28 border-b border-[#8C6A1E]/20">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="lg:col-span-6 flex flex-col gap-6"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 text-[#8C6A1E] font-mono text-xs tracking-widest uppercase font-bold">
              <Sparkles size={14} /> Our Manifesto
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="text-[clamp(34px,4.5vw,60px)] font-light leading-[1.08] tracking-tight text-[#1A1714]"
              style={{ fontFamily: "var(--font-display, 'Fraunces'), serif" }}
            >
              Excellence isn't an act. <br />
              <span className="italic text-[#8C6A1E]">It's our standard operating system.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-[#57534E] text-base md:text-lg font-light leading-relaxed">
              Over the past 5 years, we have successfully delivered more than 4,500 IT and web projects while maintaining active ongoing partnerships with over 165 clients globally. At We Promote India, we merge world-class full-stack engineering, stunning UI/UX, and powerhouse PR placements in Forbes, TOI, and HT to build absolute market dominance.
            </motion.p>
            <motion.p variants={fadeUp} className="text-[#57534E] text-base md:text-lg font-light leading-relaxed">
              Operating out of our main headquarters in Mohali and our branch in New Delhi, we empower ambitious enterprises and emerging disruptors to transform vision into legacy.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 relative"
          >
            <div className="aspect-[4/3] overflow-hidden rounded-sm border border-[#8C6A1E]/30 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop"
                alt="Workspace"
                className="w-full h-full object-cover filter contrast-105"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-[#FAF8F5] p-6 border border-[#8C6A1E]/30 rounded-sm shadow-xl hidden sm:block max-w-xs">
              <span className="font-mono text-[10px] text-[#8C6A1E] uppercase tracking-widest font-bold block mb-1">Main Headquarters</span>
              <p className="text-xs text-[#57534E] font-light">Sahibzada Ajit Singh Nagar, Phase 8B, Industrial Area, Punjab</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================
          SECTION 04: CORE VALUES
      ========================================= */}
      <section className="px-[5vw] py-28 bg-[#FAF8F5]/50 border-b border-[#8C6A1E]/20">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mb-16"
          >
            <motion.span
              variants={fadeUp}
              className="block font-mono text-[11px] tracking-[0.25em] uppercase text-[#8C6A1E] mb-4 font-bold"
            >
              How We Operate
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="text-[clamp(32px,4vw,64px)] leading-[1.1] font-light tracking-tight"
              style={{ fontFamily: "var(--font-display, 'Fraunces'), serif" }}
            >
              Driven by principles. <br />
              <span className="italic text-[#8C6A1E]">Defined by results.</span>
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {VALUES.map((val) => (
              <motion.div
                key={val.num}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUp}
                className="flex flex-col gap-4 bg-[#FAF8F5] p-8 rounded-sm border border-[#8C6A1E]/20 shadow-sm backdrop-blur-md"
              >
                <span className="font-mono text-xs text-[#8C6A1E] font-bold">
                  {val.num} / CORE VALUE
                </span>
                <h3 
                  className="text-2xl font-light tracking-tight text-[#1A1714]"
                  style={{ fontFamily: "var(--font-display, 'Fraunces'), serif" }}
                >
                  {val.title}
                </h3>
                <p className="text-[#57534E] text-sm md:text-base font-light leading-relaxed">
                  {val.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 05: TIMELINE / MILESTONES
      ========================================= */}
      <section className="px-[5vw] py-28 border-b border-[#8C6A1E]/20">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mb-16 text-center max-w-3xl mx-auto"
          >
            <motion.span
              variants={fadeUp}
              className="block font-mono text-[11px] tracking-[0.25em] uppercase text-[#8C6A1E] mb-4 font-bold"
            >
              Our Evolution
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="text-[clamp(32px,4vw,64px)] leading-[1.1] font-light tracking-tight"
              style={{ fontFamily: "var(--font-display, 'Fraunces'), serif" }}
            >
              Milestones along the journey.
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 border-t border-[#8C6A1E]/20 pt-16">
            {MILESTONES.map((item, idx) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="flex flex-col gap-4 bg-[#FAF8F5]/60 p-6 rounded-sm border border-[#8C6A1E]/20"
              >
                <span className="font-mono text-sm text-[#8C6A1E] font-bold">{item.year}</span>
                <h4 
                  className="text-xl font-light tracking-tight text-[#1A1714]"
                  style={{ fontFamily: "var(--font-display, 'Fraunces'), serif" }}
                >
                  {item.title}
                </h4>
                <p className="text-xs text-[#57534E] font-light leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 06: OFFICES & CONTACT DETAILS CARD
      ========================================= */}
      <section className="px-[5vw] py-28 bg-[#FAF8F5]/40 border-b border-[#8C6A1E]/20">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex flex-col gap-6"
          >
            <motion.span variants={fadeUp} className="font-mono text-[11px] tracking-[0.25em] uppercase text-[#8C6A1E] font-bold">
              Our Locations
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="text-[clamp(34px,4.5vw,60px)] font-light leading-[1.08] tracking-tight text-[#1A1714]"
              style={{ fontFamily: "var(--font-display, 'Fraunces'), serif" }}
            >
              Visit our offices in <br />
              <span className="italic text-[#8C6A1E]">Mohali & New Delhi.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-[#57534E] text-base font-light leading-relaxed">
              Drop by our main headquarters or branch office, or get in touch via direct channels. Our team is always ready to discuss your next big growth phase.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col gap-4 pt-4">
              {OFFICES.map((off) => (
                <div key={off.city} className="p-4 bg-[#FAF8F5] border border-[#8C6A1E]/20 rounded-sm flex items-start gap-3">
                  <Building2 size={18} className="text-[#8C6A1E] mt-0.5 shrink-0" />
                  <div>
                    <h5 className="font-mono text-xs uppercase tracking-wider text-[#1A1714] font-bold mb-1">
                      {off.city} {off.primary && <span className="text-[#8C6A1E] font-normal">(Main)</span>}
                    </h5>
                    <p className="text-xs text-[#57534E] font-light leading-relaxed">{off.address}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#FAF8F5] p-8 md:p-12 border border-[#8C6A1E]/25 rounded-sm shadow-xl flex flex-col gap-8"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#8C6A1E]/10 rounded-sm text-[#8C6A1E] mt-1 shrink-0">
                <MapPin size={20} />
              </div>
              <div>
                <h4 className="font-mono text-xs uppercase tracking-widest text-[#8C6A1E] font-bold mb-1">HQ Address</h4>
                <p className="text-sm text-[#1A1714] font-light leading-relaxed">
                  Ground Floor, Office 01, We Promote, Nasib Tower, PM5M+2MP, Phase 8B, Industrial Area, Sector 74, Sahibzada Ajit Singh Nagar, Punjab 140307
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 border-t border-[#8C6A1E]/15 pt-6">
              <div className="p-3 bg-[#8C6A1E]/10 rounded-sm text-[#8C6A1E] mt-1 shrink-0">
                <Phone size={20} />
              </div>
              <div>
                <h4 className="font-mono text-xs uppercase tracking-widest text-[#8C6A1E] font-bold mb-1">Direct Line</h4>
                <a href="tel:7009404727" className="text-sm text-[#1A1714] font-light hover:text-[#8C6A1E] transition-colors">
                  +91 70094 04727
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 border-t border-[#8C6A1E]/15 pt-6">
              <div className="p-3 bg-[#8C6A1E]/10 rounded-sm text-[#8C6A1E] mt-1 shrink-0">
                <Mail size={20} />
              </div>
              <div>
                <h4 className="font-mono text-xs uppercase tracking-widest text-[#8C6A1E] font-bold mb-1">Email Inquiry</h4>
                <a href="mailto:hi@wepromoteindia.com" className="text-sm text-[#1A1714] font-light hover:text-[#8C6A1E] transition-colors">
                  hi@wepromoteindia.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 border-t border-[#8C6A1E]/15 pt-6">
              <div className="p-3 bg-[#8C6A1E]/10 rounded-sm text-[#8C6A1E] mt-1 shrink-0">
                <Clock size={20} />
              </div>
              <div>
                <h4 className="font-mono text-xs uppercase tracking-widest text-[#8C6A1E] font-bold mb-1">Working Hours</h4>
                <p className="text-sm text-[#1A1714] font-light">Monday – Saturday: 9:30 AM – 6:30 PM</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================
          SECTION 07: FINAL CTA
      ========================================= */}
      <section className="px-[5vw] py-32 text-center flex flex-col items-center justify-center relative">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="flex flex-col items-center max-w-[1000px]"
        >
          <motion.span
            variants={fadeUp}
            className="font-mono text-[11px] tracking-[0.25em] uppercase text-[#8C6A1E] mb-6 font-bold"
          >
            Ready to scale your brand?
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="text-[clamp(38px,6.5vw,96px)] leading-[1.05] font-light tracking-tight mb-12 text-[#1A1714]"
            style={{ fontFamily: "var(--font-display, 'Fraunces'), serif" }}
          >
            Let&apos;s build <br />
            <span className="italic text-[#8C6A1E]">something impossible</span> <br />
            to ignore.
          </motion.h2>

          <motion.div variants={fadeUp}>
            <Link
              to="/contact"
              className="group relative inline-flex items-center justify-center bg-[#8C6A1E] text-white px-10 py-4 rounded-xs font-mono text-[11px] tracking-[0.2em] uppercase overflow-hidden shadow-xl shadow-[#8C6A1E]/25 font-semibold transition-colors duration-300 hover:bg-[#1A1714]"
            >
              <span className="relative z-10 flex items-center gap-3">
                Start a Conversation{" "}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </motion.div>

          <motion.a
            variants={fadeUp}
            href="mailto:hi@wepromoteindia.com"
            className="mt-8 font-mono text-xs tracking-widest text-[#78716C] hover:text-[#1A1714] transition-colors pb-1 border-b border-transparent hover:border-[#1A1714] font-semibold uppercase"
          >
            hi@wepromoteindia.com
          </motion.a>
        </motion.div>
      </section>
    </div>
  );
}
