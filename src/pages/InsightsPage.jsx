import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowDown, Sparkles, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// ==========================================
// DATA STRUCTURES
// ==========================================
const SERVICE_OPTIONS = [
  "Brand Identity & Strategy",
  "High-Performance Web App",
  "UI/UX Design System",
  "E-Commerce Platform",
  "Digital Growth & SEO",
  "Custom Software / MERN"
];

const BUDGET_RANGES = [
  "₹50K – ₹1L",
  "₹1L – ₹3L",
  "₹3L – ₹5L",
  "₹5L+"
];

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

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    services: [],
    budget: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const toggleService = (service) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API request/submission latency
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <div className="bg-[#FAF8F5] text-[#1E1B18] min-h-screen selection:bg-[#E05A47] selection:text-white font-sans overflow-x-hidden">

      {/* =========================================
          01 / HERO HEADER
      ========================================= */}
      <section className="relative min-h-[75vh] flex flex-col justify-end px-[5vw] pb-[10vh] pt-32 overflow-hidden border-b border-[#E8E2D9]">
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
              Start A Conversation // SiteSparkOne
            </span>
          </motion.div>

          <motion.h1 
            variants={fadeUp}
            className="text-[clamp(48px,9vw,140px)] leading-[1.02] tracking-[-0.03em] font-extrabold mb-12 max-w-[1200px]"
          >
            Let's build <br />
            <span className="text-[#E05A47] italic font-serif font-normal" style={{ fontFamily: "'Instrument Serif', serif" }}>something</span> extraordinary.
          </motion.h1>

          <motion.div variants={fadeUp} className="flex flex-col md:flex-row md:items-end justify-between gap-10 border-t border-[#E8E2D9] pt-10">
            <p className="text-[#5C5346] text-lg md:text-xl max-w-md font-light leading-relaxed">
              Tell us about your ambition, project scope, or vision. We are ready to listen and execute.
            </p>
            
            <div className="flex items-center gap-3 text-[#8C8375] font-mono text-[10px] tracking-[0.2em] uppercase animate-pulse font-semibold">
              Fill out the brief <ArrowDown className="w-3 h-3 text-[#E05A47]" />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* =========================================
          02 / INTERACTIVE BRIEF FORM
      ========================================= */}
      <section className="px-[5vw] py-32 bg-[#F3EFEA] border-t border-[#E8E2D9]">
        <div className="max-w-[1400px] mx-auto">
          
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white p-12 md:p-24 border border-[#E8E2D9] flex flex-col items-center text-center max-w-3xl mx-auto my-20 shadow-xl shadow-[#1E1B18]/[0.04] rounded-2xl"
              >
                <div className="w-20 h-20 rounded-full bg-[#EBF5F3] border border-[#3B6A62]/30 flex items-center justify-center text-[#3B6A62] mb-8">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <span className="font-mono text-xs tracking-[0.2em] uppercase text-[#E05A47] mb-4 font-semibold">Brief Received Successfully</span>
                <h2 className="text-[clamp(32px,4vw,52px)] font-extrabold tracking-tight mb-6 text-[#1E1B18]">
                  Thank you, {formData.name || "partner"}.
                </h2>
                <p className="text-[#5C5346] text-lg font-light max-w-lg mb-12 leading-relaxed">
                  We have received your project scope and requirements. Our team will review your submission and reach out via email within 24 hours.
                </p>
                <Link 
                  to="/" 
                  className="inline-flex items-center gap-3 bg-[#1E1B18] text-white px-8 py-4 font-mono text-xs tracking-widest uppercase rounded-xl hover:bg-[#332F2A] transition-colors font-bold shadow-lg"
                >
                  Return to Home <ArrowRight className="w-4 h-4 text-[#E05A47]" />
                </Link>
              </motion.div>
            ) : (
              <motion.form 
                initial="hidden"
                animate="show"
                variants={staggerContainer}
                onSubmit={handleSubmit}
                className="bg-white p-8 md:p-20 border border-[#E8E2D9] grid grid-cols-1 lg:grid-cols-12 gap-16 rounded-2xl shadow-xl shadow-[#1E1B18]/[0.03]"
              >
                {/* Left Column: Direct Inputs */}
                <div className="lg:col-span-6 flex flex-col gap-12">
                  <div>
                    <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#8C8375] block mb-3 font-semibold">
                      01 / Your Information
                    </span>
                    <h3 className="text-2xl font-extrabold tracking-tight text-[#1E1B18]">Who are we speaking with?</h3>
                  </div>

                  <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-2">
                      <label className="font-mono text-xs uppercase tracking-wider text-[#5C5346] font-semibold">Your Name *</label>
                      <input 
                        type="text" 
                        required
                        placeholder="e.g. Ritesh Sharma"
                        value={formData.name}
                        onChange={e => setFormData({...formData, name: e.target.value})}
                        className="bg-[#FAF8F5] border border-[#E8E2D9] px-6 py-4 font-mono text-xs tracking-widest text-[#1E1B18] placeholder:text-[#8C8375]/40 focus:outline-none focus:border-[#E05A47] transition-colors rounded-lg"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="font-mono text-xs uppercase tracking-wider text-[#5C5346] font-semibold">Email Address *</label>
                      <input 
                        type="email" 
                        required
                        placeholder="e.g. ritesh@sitesparkone.com"
                        value={formData.email}
                        onChange={e => setFormData({...formData, email: e.target.value})}
                        className="bg-[#FAF8F5] border border-[#E8E2D9] px-6 py-4 font-mono text-xs tracking-widest text-[#1E1B18] placeholder:text-[#8C8375]/40 focus:outline-none focus:border-[#E05A47] transition-colors rounded-lg"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="font-mono text-xs uppercase tracking-wider text-[#5C5346] font-semibold">Company / Startup Name</label>
                      <input 
                        type="text" 
                        placeholder="e.g. SiteSparkOne"
                        value={formData.company}
                        onChange={e => setFormData({...formData, company: e.target.value})}
                        className="bg-[#FAF8F5] border border-[#E8E2D9] px-6 py-4 font-mono text-xs tracking-widest text-[#1E1B18] placeholder:text-[#8C8375]/40 focus:outline-none focus:border-[#E05A47] transition-colors rounded-lg"
                      />
                    </div>
                  </div>
                </div>

                {/* Right Column: Services & Scope */}
                <div className="lg:col-span-6 flex flex-col justify-between gap-12">
                  <div className="flex flex-col gap-10">
                    <div>
                      <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#8C8375] block mb-3 font-semibold">
                        02 / Scope of Work
                      </span>
                      <h3 className="text-2xl font-extrabold tracking-tight mb-4 text-[#1E1B18]">What services do you require?</h3>
                      <p className="text-[#5C5346] text-sm font-light">Select all areas that apply to your project.</p>
                    </div>

                    <div className="flex flex-wrap gap-2.5">
                      {SERVICE_OPTIONS.map(service => {
                        const isSelected = formData.services.includes(service);
                        return (
                          <button
                            type="button"
                            key={service}
                            onClick={() => toggleService(service)}
                            className={`font-mono text-[11px] tracking-[0.15em] uppercase px-5 py-3 rounded-lg border transition-all font-semibold ${
                              isSelected
                                ? "bg-[#E05A47] text-white border-[#E05A47] shadow-md shadow-[#E05A47]/20"
                                : "bg-[#FAF8F5] text-[#5C5346] border-[#E8E2D9] hover:border-[#3B6A62]/40 hover:text-[#1E1B18]"
                            }`}
                          >
                            {isSelected ? "✓ " : "+ "} {service}
                          </button>
                        );
                      })}
                    </div>

                    {/* Budget Range Selection */}
                    <div className="flex flex-col gap-4 pt-6 border-t border-[#E8E2D9]">
                      <label className="font-mono text-xs uppercase tracking-wider text-[#5C5346] font-semibold">Estimated Budget Range</label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {BUDGET_RANGES.map(range => {
                          const isSelected = formData.budget === range;
                          return (
                            <button
                              type="button"
                              key={range}
                              onClick={() => setFormData({...formData, budget: range})}
                              className={`font-mono text-[11px] tracking-widest py-3 px-2 border text-center transition-all rounded-lg font-semibold ${
                                isSelected 
                                  ? "bg-[#1E1B18] text-white border-[#1E1B18] shadow-md" 
                                  : "bg-[#FAF8F5] text-[#5C5346] border-[#E8E2D9] hover:border-[#3B6A62]/40 hover:text-[#1E1B18]"
                              }`}
                            >
                              {range}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Message / Details */}
                    <div className="flex flex-col gap-2 pt-6 border-t border-[#E8E2D9]">
                      <label className="font-mono text-xs uppercase tracking-wider text-[#5C5346] font-semibold">Project Overview / Message *</label>
                      <textarea 
                        rows={4}
                        required
                        placeholder="Tell us about your vision, goals, timeline, and current bottlenecks..."
                        value={formData.message}
                        onChange={e => setFormData({...formData, message: e.target.value})}
                        className="bg-[#FAF8F5] border border-[#E8E2D9] px-6 py-4 font-mono text-xs tracking-widest text-[#1E1B18] placeholder:text-[#8C8375]/40 focus:outline-none focus:border-[#E05A47] transition-colors resize-none rounded-lg"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-8 border-t border-[#E8E2D9] flex items-center justify-between">
                    <span className="font-mono text-[10px] text-[#8C8375] tracking-widest uppercase font-semibold">
                      * Required fields
                    </span>

                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="group relative inline-flex items-center justify-center bg-[#E05A47] text-white px-10 py-4 rounded-xl font-mono text-[12px] tracking-[0.15em] uppercase overflow-hidden shadow-xl shadow-[#E05A47]/20 disabled:opacity-50 font-bold"
                    >
                      <span className="relative z-10 flex items-center gap-3">
                        {isSubmitting ? "Transmitting..." : "Send Project Brief"} 
                        {!isSubmitting && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                      </span>
                      <div className="absolute inset-0 bg-[#C94735] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                    </button>
                  </div>
                </div>
              </motion.form>
            )}
          </AnimatePresence>

        </div>
      </section>

      {/* =========================================
          03 / ALTERNATIVE CONTACT CHANNELS
      ========================================= */}
      <section className="px-[5vw] py-32 bg-white border-t border-[#E8E2D9]">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-16">
            <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#E05A47] font-semibold">
              Direct Channels
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight mt-2 text-[#1E1B18]">Prefer direct communication?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-10 bg-[#FAF8F5] border border-[#E8E2D9] rounded-2xl flex flex-col justify-between h-56 shadow-sm hover:border-[#3B6A62]/40 transition-colors">
              <span className="font-mono text-xs text-[#3B6A62] uppercase font-bold">General Inquiries</span>
              <div>
                <h3 className="text-xl font-extrabold tracking-tight mb-2 text-[#1E1B18]">contact@sitesparkone.com</h3>
                <p className="text-[#5C5346] text-xs font-mono font-medium">Response within 12 hours</p>
              </div>
            </div>

            <div className="p-10 bg-[#FAF8F5] border border-[#E8E2D9] rounded-2xl flex flex-col justify-between h-56 shadow-sm hover:border-[#E05A47]/40 transition-colors">
              <span className="font-mono text-xs text-[#E05A47] uppercase font-bold">Partnerships & Press</span>
              <div>
                <h3 className="text-xl font-extrabold tracking-tight mb-2 text-[#1E1B18]">partners@sitesparkone.com</h3>
                <p className="text-[#5C5346] text-xs font-mono font-medium">Collaborations & Media</p>
              </div>
            </div>

            <div className="p-10 bg-[#FAF8F5] border border-[#E8E2D9] rounded-2xl flex flex-col justify-between h-56 shadow-sm hover:border-[#3B6A62]/40 transition-colors">
              <span className="font-mono text-xs text-[#3B6A62] uppercase font-bold">Office Location</span>
              <div>
                <h3 className="text-xl font-extrabold tracking-tight mb-2 text-[#1E1B18]">Gurugram, Haryana</h3>
                <p className="text-[#5C5346] text-xs font-mono font-medium">Available Worldwide (Remote & On-Site)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
