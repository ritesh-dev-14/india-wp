"use client";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, MapPin, Phone, Mail, Clock, Send, CheckCircle2, Globe, Building2, ShieldCheck, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

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

export default function ContactPage() {
  const [formState, setFormState] = useState({
    fullName: "",
    email: "",
    phone: "",
    service: "Full-Stack Web Development",
    budget: "₹1,00,000 - ₹3,00,000",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  return (
    <div className="bg-transparent text-[#1A1714] min-h-screen selection:bg-[#8C6A1E]/20 selection:text-[#1A1714] font-sans overflow-x-hidden">
      
      {/* =========================================
          SECTION 01: HERO
      ========================================= */}
      <section className="relative min-h-[75vh] flex flex-col justify-end px-[5vw] pb-20 pt-32 border-b border-[#8C6A1E]/20">
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
              01 / Contact Us // Let&apos;s Connect in India
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-[clamp(42px,8vw,120px)] leading-[1.05] tracking-[-0.02em] font-light mb-8 max-w-[1250px]"
            style={{ fontFamily: "var(--font-display, 'Fraunces'), serif" }}
          >
            Let&apos;s scale your business <br className="hidden md:block" />
            <span className="font-normal italic text-[#8C6A1E]">across India & beyond.</span>
          </motion.h1>

          <motion.div
            variants={fadeUp}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-t border-[#8C6A1E]/20 pt-8"
          >
            <p className="text-[#57534E] text-lg md:text-xl max-w-xl font-light leading-relaxed">
              Based out of Mohali, we collaborate with ambitious startups and enterprises pan-India to engineer elite digital platforms and establish authoritative market presence.
            </p>

            <div className="flex items-center gap-3 text-[#78716C] font-mono text-[10px] tracking-[0.2em] uppercase font-semibold">
              <Globe className="w-3.5 h-3.5 text-[#8C6A1E]" /> Pan-India Operations & Support
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* =========================================
          SECTION 02: CONTACT FORM & DETAILED INFO GRID
      ========================================= */}
      <section className="px-[5vw] py-28 border-b border-[#8C6A1E]/20">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* LEFT COLUMN: DETAILED INDIAN CONTACT INFO CARDS */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="lg:col-span-5 flex flex-col gap-8"
          >
            <motion.div variants={fadeUp} className="flex flex-col gap-4">
              <span className="font-mono text-xs uppercase tracking-widest text-[#8C6A1E] font-bold">
                Direct Headquarters Contact
              </span>
              <h2 
                className="text-[clamp(32px,4vw,48px)] font-light leading-[1.1] tracking-tight text-[#1A1714]"
                style={{ fontFamily: "var(--font-display, 'Fraunces'), serif" }}
              >
                Connect with our <br />
                <span className="italic text-[#8C6A1E]">Mohali leadership team.</span>
              </h2>
              <p className="text-[#57534E] text-sm md:text-base font-light leading-relaxed">
                Whether you prefer a quick phone call, a WhatsApp chat, or dropping by our office in Phase 8B, our team is readily accessible to discuss your custom project requirements.
              </p>
            </motion.div>

            {/* EXPANDED INFO CARDS */}
            <motion.div variants={fadeUp} className="flex flex-col gap-4">
              <div className="bg-[#FAF8F5] p-6 border border-[#8C6A1E]/20 rounded-sm flex items-start gap-4">
                <div className="p-3 bg-[#8C6A1E]/10 rounded-sm text-[#8C6A1E] mt-1 shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <h4 className="font-mono text-[11px] uppercase tracking-widest text-[#8C6A1E] font-bold mb-1">Office Address</h4>
                  <p className="text-sm text-[#1A1714] font-light leading-relaxed">
                    Nasib Tower, Phase 8B, Industrial Area, Sector 74, Mohali, Punjab 160055
                  </p>
                </div>
              </div>

              <div className="bg-[#FAF8F5] p-6 border border-[#8C6A1E]/20 rounded-sm flex items-start gap-4">
                <div className="p-3 bg-[#8C6A1E]/10 rounded-sm text-[#8C6A1E] mt-1 shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <h4 className="font-mono text-[11px] uppercase tracking-widest text-[#8C6A1E] font-bold mb-1">Direct Phone & WhatsApp</h4>
                  <a href="tel:+917009404727" className="text-sm text-[#1A1714] font-light hover:text-[#8C6A1E] transition-colors block mb-0.5">
                    +91 70094 04727
                  </a>
                  <span className="font-mono text-[10px] text-[#78716C] uppercase tracking-wider">Available Mon–Sat (9 AM – 7 PM IST)</span>
                </div>
              </div>

              <div className="bg-[#FAF8F5] p-6 border border-[#8C6A1E]/20 rounded-sm flex items-start gap-4">
                <div className="p-3 bg-[#8C6A1E]/10 rounded-sm text-[#8C6A1E] mt-1 shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <h4 className="font-mono text-[11px] uppercase tracking-widest text-[#8C6A1E] font-bold mb-1">Official Email</h4>
                  <a href="mailto:hi@wepromoteindia.com" className="text-sm text-[#1A1714] font-light hover:text-[#8C6A1E] transition-colors">
                    hi@wepromoteindia.com
                  </a>
                </div>
              </div>

              <div className="bg-[#FAF8F5] p-6 border border-[#8C6A1E]/20 rounded-sm flex items-start gap-4">
                <div className="p-3 bg-[#8C6A1E]/10 rounded-sm text-[#8C6A1E] mt-1 shrink-0">
                  <Clock size={18} />
                </div>
                <div>
                  <h4 className="font-mono text-[11px] uppercase tracking-widest text-[#8C6A1E] font-bold mb-1">Business Hours</h4>
                  <p className="text-sm text-[#1A1714] font-light">Monday – Saturday: 9:00 AM – 7:00 PM (IST)</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN: LARGER EXPANDED INTERACTIVE FORM */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-[#FAF8F5] p-8 md:p-14 border border-[#8C6A1E]/25 rounded-sm shadow-2xl relative"
          >
            {isSubmitted ? (
              <div className="py-24 flex flex-col items-center justify-center text-center gap-6">
                <div className="w-16 h-16 bg-[#8C6A1E]/10 text-[#8C6A1E] rounded-full flex items-center justify-center">
                  <CheckCircle2 size={36} />
                </div>
                <h3 
                  className="text-3xl font-light text-[#1A1714]"
                  style={{ fontFamily: "var(--font-display, 'Fraunces'), serif" }}
                >
                  Inquiry Received Successfully!
                </h3>
                <p className="text-[#57534E] text-base font-light max-w-md leading-relaxed">
                  Thank you for connecting with We Promote India. Our Mohali strategy team is reviewing your requirements and will get back to you within 24 business hours.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 font-mono text-xs uppercase tracking-widest text-[#8C6A1E] font-bold border-b border-[#8C6A1E] pb-1 hover:text-[#1A1714] transition-colors cursor-pointer"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <span className="font-mono text-xs uppercase tracking-widest text-[#8C6A1E] font-bold">
                    Comprehensive Project Form
                  </span>
                  <h3 
                    className="text-2xl md:text-3xl font-light text-[#1A1714]"
                    style={{ fontFamily: "var(--font-display, 'Fraunces'), serif" }}
                  >
                    Let&apos;s map out your requirements.
                  </h3>
                  <p className="text-[#57534E] text-sm font-light">
                    Provide your details below and our technical leads will reach out via call or WhatsApp.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                  <div className="flex flex-col gap-2">
                    <label className="font-mono text-xs uppercase tracking-wider text-[#57534E] font-medium">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formState.fullName}
                      onChange={handleChange}
                      placeholder="e.g. First Last"
                      className="bg-transparent border border-[#8C6A1E]/30 rounded-xs px-4 py-3.5 text-sm text-[#1A1714] focus:outline-none focus:border-[#8C6A1E] transition-colors font-light"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="font-mono text-xs uppercase tracking-wider text-[#57534E] font-medium">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="name@example.com"
                      className="bg-transparent border border-[#8C6A1E]/30 rounded-xs px-4 py-3.5 text-sm text-[#1A1714] focus:outline-none focus:border-[#8C6A1E] transition-colors font-light"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="font-mono text-xs uppercase tracking-wider text-[#57534E] font-medium">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formState.phone}
                      onChange={handleChange}
                      placeholder="+91 70094 04727"
                      className="bg-transparent border border-[#8C6A1E]/30 rounded-xs px-4 py-3.5 text-sm text-[#1A1714] focus:outline-none focus:border-[#8C6A1E] transition-colors font-light"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="font-mono text-xs uppercase tracking-wider text-[#57534E] font-medium">
                      Primary Service Needed
                    </label>
                    <select
                      name="service"
                      value={formState.service}
                      onChange={handleChange}
                      className="bg-[#FAF8F5] border border-[#8C6A1E]/30 rounded-xs px-4 py-3.5 text-sm text-[#1A1714] focus:outline-none focus:border-[#8C6A1E] transition-colors font-light"
                    >
                      <option value="Full-Stack Web Development">Full-Stack Web Development (MERN / Next.js)</option>
                      <option value="E-Commerce Ecosystems">E-Commerce Ecosystems & Stores</option>
                      <option value="Branding & Creative Design">Branding & Creative UI/UX Design</option>
                      <option value="PR & Authority Building">PR & National Media Placements</option>
                      <option value="Enterprise Growth & SEO">Enterprise Growth & Scaling</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-mono text-xs uppercase tracking-wider text-[#57534E] font-medium">
                    Estimated Project Budget (INR)
                  </label>
                  <select
                    name="budget"
                    value={formState.budget}
                    onChange={handleChange}
                    className="bg-[#FAF8F5] border border-[#8C6A1E]/30 rounded-xs px-4 py-3.5 text-sm text-[#1A1714] focus:outline-none focus:border-[#8C6A1E] transition-colors font-light"
                  >
                    <option value="₹50,000 - ₹1,00,000">₹50,000 – ₹1,00,000</option>
                    <option value="₹1,00,000 - ₹3,00,000">₹1,00,000 – ₹3,00,000</option>
                    <option value="₹3,00,000 - ₹7,50,000">₹3,00,000 – ₹7,50,000</option>
                    <option value="₹7,50,000+">₹7,50,000+ Enterprise Tier</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-mono text-xs uppercase tracking-wider text-[#57534E] font-medium">
                    Project Details & Scope *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Tell us about your startup or business, your current tech or branding goals, and what you aim to achieve..."
                    className="bg-transparent border border-[#8C6A1E]/30 rounded-xs px-4 py-3.5 text-sm text-[#1A1714] focus:outline-none focus:border-[#8C6A1E] transition-colors font-light resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative inline-flex items-center justify-center bg-[#8C6A1E] text-white px-8 py-4 rounded-xs font-mono text-[11px] tracking-[0.2em] uppercase overflow-hidden shadow-lg shadow-[#8C6A1E]/20 font-semibold transition-colors duration-300 hover:bg-[#1A1714] cursor-pointer mt-2"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    {isSubmitting ? "Transmitting Proposal to Mohali..." : "Submit Indian Project Inquiry"} 
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* =========================================
          SECTION 03: QUICK WHATSAPP / DIRECT CALL CALLOUT
      ========================================= */}
      <section className="px-[5vw] py-16 bg-[#FAF8F5]/60 border-b border-[#8C6A1E]/20">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="flex flex-col gap-2">
            <span className="font-mono text-xs uppercase tracking-widest text-[#8C6A1E] font-bold">
              Immediate Assistance
            </span>
            <h3 
              className="text-2xl md:text-3xl font-light text-[#1A1714]"
              style={{ fontFamily: "var(--font-display, 'Fraunces'), serif" }}
            >
              Need to talk right away? Call or WhatsApp our direct line.
            </h3>
          </div>
          <div className="flex items-center gap-4 shrink-0">
            <a
              href="https://wa.me/917009404727"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-[#1A1714] text-white px-6 py-3.5 rounded-xs font-mono text-xs uppercase tracking-widest font-semibold hover:bg-[#8C6A1E] transition-colors shadow-md"
            >
              <MessageCircle size={16} /> WhatsApp Us (+91 70094 04727)
            </a>
            <a
              href="tel:+917009404727"
              className="inline-flex items-center gap-2.5 bg-[#8C6A1E] text-white px-6 py-3.5 rounded-xs font-mono text-xs uppercase tracking-widest font-semibold hover:bg-[#1A1714] transition-colors shadow-md"
            >
              <Phone size={16} /> Direct Call
            </a>
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 04: FINAL CTA
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
            Partner with India&apos;s growing elite agency
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
