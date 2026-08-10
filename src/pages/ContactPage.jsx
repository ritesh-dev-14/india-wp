import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Sparkles, Terminal, Layers, ShieldCheck, Zap } from "lucide-react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

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
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
};

export default function WorkWithUsPage() {
  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "Full Stack MERN & Web Apps",
    message: "",
    budget: "₹1L – ₹3L"
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Scroll animation for final closing statement
  const closingRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: closingRef,
    offset: ["start end", "end start"]
  });

  const closingScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 1.01]);
  const closingOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Please share a brief description of your project.";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  return (
    <div className="bg-[#FAF8F5] text-[#1E1B18] min-h-screen selection:bg-[#E05A47] selection:text-white font-sans antialiased overflow-x-hidden">
      
      {/* Background Subtle Warm Mesh Grid Accent */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#EFECE6_1px,transparent_1px),linear-gradient(to_bottom,#EFECE6_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-60 pointer-events-none" />

      {/* =========================================
          01 / HERO SECTION
      ========================================= */}
      <section className="relative min-h-[60vh] flex flex-col justify-end px-6 md:px-12 lg:px-20 pb-12 pt-28 border-b border-[#E8E2D9]">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="max-w-[1400px] w-full mx-auto relative z-10"
        >
          <motion.div variants={fadeUp} className="flex items-center gap-2.5 mb-4">
            <span className="inline-flex items-center justify-center w-2 h-2 rounded-full bg-[#E05A47] animate-pulse" />
            <span className="font-mono text-xs tracking-[0.25em] uppercase text-[#E05A47] font-semibold">
              SiteSparkOne Partnerships // Q2 2026
            </span>
          </motion.div>

          <motion.h1 
            variants={fadeUp}
            className="text-[clamp(36px,6.5vw,96px)] leading-[1.08] tracking-tight font-extrabold mb-6 max-w-[1100px] text-[#1E1B18]"
          >
            Engineering digital assets <br />
            <span className="text-[#8C8375] font-light">that scale effortlessly.</span>
          </motion.h1>

          <motion.div variants={fadeUp} className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end pt-6 border-t border-[#E8E2D9]">
            <p className="lg:col-span-6 text-[#5C5346] text-base md:text-lg font-normal leading-relaxed">
              We partner with forward-thinking founders and teams to build high-performance MERN web applications, immersive e-commerce engines, and production-grade interfaces.
            </p>
            <div className="lg:col-span-6 flex flex-wrap gap-6 lg:justify-end text-xs font-mono text-[#5C5346] font-medium">
              <span className="flex items-center gap-2"><Terminal className="w-4 h-4 text-[#E05A47]" /> MERN & Next.js Stack</span>
              <span className="flex items-center gap-2"><Layers className="w-4 h-4 text-[#3B6A62]" /> Pixel-Perfect UI/UX</span>
              <span className="flex items-center gap-2"><Zap className="w-4 h-4 text-[#D97706]" /> Optimized Performance</span>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* =========================================
          02 / CONTACT INTERFACE & DETAILS
      ========================================= */}
      <section className="px-6 md:px-12 lg:px-20 py-16 bg-[#F3EFEA] relative">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT COLUMN: Agency Metadata */}
          <div className="lg:col-span-5 flex flex-col justify-between sticky top-8">
            <div className="flex flex-col gap-8">
              <div>
                <span className="font-mono text-xs tracking-[0.25em] uppercase text-[#8C8375] block mb-2 font-semibold">
                  Initiate Engagement
                </span>
                <h2 className="text-[clamp(26px,3vw,40px)] leading-[1.15] font-extrabold tracking-tight mb-4 text-[#1E1B18]">
                  Let's discuss your project parameters.
                </h2>
                <p className="text-[#5C5346] text-base font-normal leading-relaxed">
                  Fill out the scope document or reach out directly through our dedicated communication channels. All inquiries are evaluated by our principal engineering leads within 12 hours.
                </p>
              </div>

              {/* Direct Touchpoints */}
              <div className="border-t border-[#E8E2D9] pt-8 flex flex-col gap-6">
                <div>
                  <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#8C8375] block mb-1 font-semibold">
                    Direct Dispatch
                  </span>
                  <a 
                    href="mailto:contact@sitesparkone.com" 
                    className="text-lg md:text-xl font-medium text-[#1E1B18] hover:text-[#E05A47] transition-colors inline-flex items-center gap-2 group"
                  >
                    contact@sitesparkone.com
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-[#E05A47]" />
                  </a>
                </div>

                <div>
                  <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#8C8375] block mb-1 font-semibold">
                    WhatsApp Desk
                  </span>
                  <a 
                    href="https://wa.me/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-base font-medium text-[#1E1B18]/80 hover:text-[#1E1B18] transition-colors block"
                  >
                    Available upon inquiry
                  </a>
                </div>

                <div>
                  <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#8C8375] block mb-1 font-semibold">
                    Operational Base
                  </span>
                  <p className="text-[#5C5346] text-sm font-normal">
                    Gurugram & Remote // Serving Global Clients
                  </p>
                </div>
              </div>
            </div>

            {/* Trust badge */}
            <div className="mt-12 pt-6 border-t border-[#E8E2D9] flex items-center gap-2.5 text-xs font-mono text-[#5C5346]">
              <ShieldCheck className="w-4 h-4 text-[#3B6A62]" />
              <span>NDA-secured communications by default</span>
            </div>
          </div>

          {/* RIGHT COLUMN: Interactive Form / State Machine */}
          <div className="lg:col-span-7 bg-white p-6 md:p-10 border border-[#E8E2D9] rounded-2xl relative shadow-xl shadow-[#1E1B18]/[0.04]">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit} 
                  className="flex flex-col gap-6"
                >
                  {/* Field 01: Name */}
                  <div className="flex flex-col gap-1.5">
                    <label className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#8C8375] font-semibold">
                      01 / YOUR NAME <span className="text-[#E05A47]">*</span>
                    </label>
                    <input 
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Ritesh Sharma"
                      className="bg-transparent border-b border-[#E8E2D9] pb-2.5 text-base font-medium text-[#1E1B18] placeholder:text-[#8C8375]/40 focus:outline-none focus:border-[#E05A47] transition-colors"
                    />
                    {errors.name && <span className="font-mono text-xs text-[#E05A47] mt-0.5">{errors.name}</span>}
                  </div>

                  {/* Field 02: Email */}
                  <div className="flex flex-col gap-1.5">
                    <label className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#8C8375] font-semibold">
                      02 / WORK EMAIL <span className="text-[#E05A47]">*</span>
                    </label>
                    <input 
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@company.com"
                      className="bg-transparent border-b border-[#E8E2D9] pb-2.5 text-base font-medium text-[#1E1B18] placeholder:text-[#8C8375]/40 focus:outline-none focus:border-[#E05A47] transition-colors"
                    />
                    {errors.email && <span className="font-mono text-xs text-[#E05A47] mt-0.5">{errors.email}</span>}
                  </div>

                  {/* Field 03: Company */}
                  <div className="flex flex-col gap-1.5">
                    <label className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#8C8375] font-semibold">
                      03 / COMPANY OR STARTUP
                    </label>
                    <input 
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="e.g. SiteSparkOne"
                      className="bg-transparent border-b border-[#E8E2D9] pb-2.5 text-base font-medium text-[#1E1B18] placeholder:text-[#8C8375]/40 focus:outline-none focus:border-[#E05A47] transition-colors"
                    />
                  </div>

                  {/* Field 04: Phone / WhatsApp */}
                  <div className="flex flex-col gap-1.5">
                    <label className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#8C8375] font-semibold">
                      04 / PHONE / WHATSAPP
                    </label>
                    <input 
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      className="bg-transparent border-b border-[#E8E2D9] pb-2.5 text-base font-medium text-[#1E1B18] placeholder:text-[#8C8375]/40 focus:outline-none focus:border-[#E05A47] transition-colors"
                    />
                  </div>

                  {/* Field 05: Core Focus / Service */}
                  <div className="flex flex-col gap-1.5">
                    <label className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#8C8375] font-semibold">
                      05 / PRIMARY ENGAGEMENT FOCUS
                    </label>
                    <div className="relative">
                      <select 
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-[#E8E2D9] pb-2.5 text-base font-medium text-[#1E1B18] focus:outline-none focus:border-[#E05A47] transition-colors cursor-pointer appearance-none [&>option]:bg-white [&>option]:text-[#1E1B18]"
                      >
                        <option value="Full Stack MERN & Web Apps">Full Stack MERN & Web Apps</option>
                        <option value="Pixel-Perfect UI/UX & Tailwind">Pixel-Perfect UI/UX & Tailwind</option>
                        <option value="High-End E-Commerce Platform">High-End E-Commerce Platform</option>
                        <option value="Custom Software Engineering">Custom Software Engineering</option>
                        <option value="Automation & Web Scraping">Automation & Web Scraping</option>
                        <option value="Digital Branding & Creative">Digital Branding & Creative</option>
                      </select>
                    </div>
                  </div>

                  {/* Field 06: Description */}
                  <div className="flex flex-col gap-1.5">
                    <label className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#8C8375] font-semibold">
                      06 / PROJECT SCOPE & OBJECTIVES <span className="text-[#E05A47]">*</span>
                    </label>
                    <textarea 
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Share brief technical context, features, or architectural targets..."
                      className="bg-transparent border-b border-[#E8E2D9] pb-2.5 text-base font-medium text-[#1E1B18] placeholder:text-[#8C8375]/40 focus:outline-none focus:border-[#E05A47] transition-colors resize-none"
                    />
                    {errors.message && <span className="font-mono text-xs text-[#E05A47] mt-0.5">{errors.message}</span>}
                  </div>

                  {/* Field 07: Budget Range */}
                  <div className="flex flex-col gap-2 pt-1">
                    <label className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#8C8375] font-semibold">
                      07 / ALLOCATED BUDGET RANGE
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {["₹50K – ₹1L", "₹1L – ₹3L", "₹3L – ₹5L", "₹5L+", "Let's discuss"].map((bRange) => (
                        <button
                          type="button"
                          key={bRange}
                          onClick={() => setFormData(prev => ({ ...prev, budget: bRange }))}
                          className={`font-mono text-[11px] tracking-[0.15em] uppercase px-3.5 py-2 rounded-lg transition-all font-semibold ${
                            formData.budget === bRange
                              ? "bg-[#E05A47] text-white shadow-md shadow-[#E05A47]/20"
                              : "bg-[#F3EFEA] text-[#5C5346] hover:bg-[#E8E2D9] hover:text-[#1E1B18] border border-[#E8E2D9]"
                          }`}
                        >
                          {bRange}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Action CTA */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group relative inline-flex items-center justify-between w-full bg-[#1E1B18] text-white px-6 py-4 rounded-xl font-mono text-xs tracking-[0.15em] uppercase overflow-hidden cursor-pointer disabled:opacity-50 transition-transform active:scale-[0.99] shadow-lg shadow-[#1E1B18]/10"
                    >
                      <span className="relative z-10 flex items-center gap-2 font-bold">
                        {isSubmitting ? "Transmitting Scope..." : "Submit Project Brief"}
                      </span>
                      <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform text-[#E05A47]" />
                      <div className="absolute inset-0 bg-[#E05A47] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                    </button>
                  </div>

                </motion.form>
              ) : (
                /* SUCCESS STATE */
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="py-16 flex flex-col items-center text-center justify-center min-h-[420px]"
                >
                  <div className="w-14 h-14 rounded-full bg-[#EBF5F3] border border-[#3B6A62]/30 flex items-center justify-center mb-5">
                    <CheckCircle2 className="w-7 h-7 text-[#3B6A62] stroke-[1.5]" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-3 text-[#1E1B18]">
                    Brief transmitted successfully.
                  </h3>
                  <p className="text-[#5C5346] text-base font-normal max-w-md mb-8 leading-relaxed">
                    Thank you for your submission. Our technical leads are reviewing your specifications and will respond shortly.
                  </p>
                  
                  <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#8C8375] mb-8 font-semibold">
                    SITESPARKONE // ENGINEERING DESK
                  </div>

                  <Link 
                    to="/" 
                    className="inline-flex items-center justify-center bg-[#1E1B18] text-white px-7 py-3 rounded-xl font-mono text-xs tracking-[0.15em] uppercase transition-transform hover:bg-[#332F2A] font-bold shadow-md"
                  >
                    Return Home
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* =========================================
          03 / EXECUTION WORKFLOW
      ========================================= */}
      <section className="px-6 md:px-12 lg:px-20 py-20 border-t border-[#E8E2D9] bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="font-mono text-xs tracking-[0.25em] uppercase text-[#E05A47] block mb-1.5 font-semibold">
                Operational Framework
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-[#1E1B18]">Our Process</h2>
            </div>
            <p className="text-[#8C8375] text-xs font-mono max-w-xs font-medium">
              Structured for speed, precision, and zero friction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-[#E8E2D9] pt-12">
            {[
              { num: "01", title: "DISCOVERY & AUDIT", desc: "We evaluate your requirements, map out technical architecture, and establish clear delivery milestones." },
              { num: "02", title: "SPRINT EXECUTION", desc: "Rigorous coding, clean component patterns, and iterative UI refinements using modern MERN stacks." },
              { num: "03", title: "DEPLOY & SCALE", desc: "Performance benchmarking, thorough testing, and seamless handoff or continuous maintenance." }
            ].map((step, idx) => (
              <div 
                key={step.num} 
                className={`p-6 rounded-xl flex flex-col justify-between gap-6 group transition-all duration-300 border ${
                  idx === 0 ? "bg-[#FAF8F5] border-[#E8E2D9] hover:border-[#3B6A62]/40 shadow-sm" :
                  idx === 1 ? "bg-[#FDF6F5] border-[#F2DCD9] hover:border-[#E05A47]/40 shadow-sm" :
                  "bg-[#F4F9F8] border-[#D9ECE8] hover:border-[#3B6A62]/40 shadow-sm"
                }`}
              >
                <div className="flex flex-col gap-3">
                  <span className={`font-mono text-xs font-bold ${idx === 1 ? "text-[#E05A47]" : "text-[#3B6A62]"}`}>
                    {step.num}
                  </span>
                  <h3 className="text-lg font-bold tracking-tight text-[#1E1B18]">{step.title}</h3>
                  <p className="text-[#5C5346] text-sm font-normal leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          04 / SCROLL BREAK STATEMENT
      ========================================= */}
      <section ref={closingRef} className="h-[90vh] relative bg-[#F3EFEA] border-t border-[#E8E2D9] flex items-center justify-center overflow-hidden">
        <div className="sticky top-0 h-screen flex items-center justify-center px-6 w-full">
          <motion.h2 
            style={{ scale: closingScale, opacity: closingOpacity }}
            className="text-[clamp(28px,5vw,80px)] leading-[1.08] font-extrabold text-center tracking-tight text-[#1E1B18]"
          >
            Exceptional engineering <br />
            <span className="text-[#E05A47] italic font-serif lowercase block my-2 font-light">starts with</span>
            a conversation.
          </motion.h2>
        </div>
      </section>

      {/* =========================================
          05 / FINAL CTA SECTION
      ========================================= */}
      <section className="px-6 md:px-12 lg:px-20 py-24 bg-[#1E1B18] text-[#FAF8F5] text-center flex flex-col items-center justify-center border-t border-[#332F2A] relative z-10">
        <motion.div
           variants={staggerContainer}
           initial="hidden"
           whileInView="show"
           viewport={{ once: true }}
           className="flex flex-col items-center max-w-[800px]"
        >
          <span className="font-mono text-xs tracking-[0.25em] uppercase text-[#E05A47] mb-4 flex items-center gap-2 font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#E05A47]" /> Ready to build?
          </span>
          
          <h2 className="text-[clamp(36px,6vw,90px)] leading-[1.05] font-extrabold tracking-tight mb-8 text-white">
            Let's connect.
          </h2>

          <a 
            href="mailto:contact@sitesparkone.com" 
            className="group relative inline-flex items-center justify-center bg-[#E05A47] text-white px-8 py-4 rounded-xl font-mono text-xs tracking-[0.15em] uppercase overflow-hidden transition-transform hover:scale-105 font-bold shadow-xl shadow-[#E05A47]/20"
          >
            <span className="relative z-10 flex items-center gap-2 font-bold">
              Initialize Project <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-[#C94735] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          </a>
        </motion.div>
      </section>

    </div>
  );
}
