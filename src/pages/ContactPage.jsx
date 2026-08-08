import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
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
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

export default function ContactPage() {
  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "Branding",
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

  const closingScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1, 1.05]);
  const closingOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Please enter a valid email address.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Please tell us a little about your project.";
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
    // Simulate network submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  return (
    <div className="bg-[#070707] text-white min-h-screen selection:bg-white selection:text-black font-sans overflow-x-hidden">
      
      {/* =========================================
          01 / HERO
      ========================================= */}
      <section className="relative min-h-[75vh] flex flex-col justify-end px-[5vw] pb-[10vh] pt-32 overflow-hidden">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="max-w-[1400px] w-full mx-auto relative z-10"
        >
          <motion.div variants={fadeUp} className="mb-8">
            <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-white/50">
              Let's Talk
            </span>
          </motion.div>

          <motion.h1 
            variants={fadeUp}
            className="text-[clamp(48px,9vw,140px)] leading-[1.02] tracking-[-0.03em] font-medium mb-12 max-w-[1200px]"
          >
            Have something <br />
            <span className="text-white/40">worth building?</span>
          </motion.h1>

          <motion.div variants={fadeUp} className="flex flex-col md:flex-row md:items-end justify-between gap-10 border-t border-white/10 pt-10">
            <p className="text-white/60 text-lg md:text-xl max-w-md font-light leading-relaxed">
              Tell us what you're working on, where you want to go, and what you need help with.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* =========================================
          02 / CONTACT FORM & DIRECT CONTACT
      ========================================= */}
      <section className="px-[5vw] py-20 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* LEFT COLUMN: Agency Info / Context */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="flex flex-col gap-12">
              <div>
                <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40 block mb-4">
                  Start a Conversation
                </span>
                <h2 className="text-[clamp(32px,4vw,52px)] leading-[1.1] font-medium tracking-tight mb-6">
                  Tell us a little <br />
                  about your project.
                </h2>
                <p className="text-white/60 text-lg font-light leading-relaxed">
                  A few details are enough to get the conversation started. We'll take it from there.
                </p>
              </div>

              {/* Direct Contact Section */}
              <div className="border-t border-white/10 pt-12 flex flex-col gap-8">
                <div>
                  <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/40 block mb-2">
                    Prefer a direct conversation?
                  </span>
                  <a 
                    href="mailto:hello@wepromote.us" 
                    className="text-2xl md:text-3xl font-light hover:text-white/70 transition-colors block"
                  >
                    hello@wepromote.us
                  </a>
                </div>

                <div>
                  <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/40 block mb-2">
                    WhatsApp
                  </span>
                  <a 
                    href="https://wa.me/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xl md:text-2xl font-light text-white/80 hover:text-white transition-colors block"
                  >
                    Available upon inquiry
                  </a>
                </div>

                {/* Location */}
                <div>
                  <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/40 block mb-2">
                    Based in India
                  </span>
                  <p className="text-white/60 text-base font-light">
                    Working with ambitious businesses wherever they're building.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Minimal Form / Success State */}
          <div className="lg:col-span-7 bg-[#070707] p-8 md:p-16 border border-white/10 relative">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit} 
                  className="flex flex-col gap-10"
                >
                  {/* Field 01: Name */}
                  <div className="flex flex-col gap-2">
                    <label className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/50">
                      01 / NAME *
                    </label>
                    <input 
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="bg-transparent border-b border-white/20 pb-4 text-xl font-light text-white placeholder:text-white/20 focus:outline-none focus:border-white transition-colors"
                    />
                    {errors.name && <span className="font-mono text-[11px] text-red-400 mt-1">{errors.name}</span>}
                  </div>

                  {/* Field 02: Email */}
                  <div className="flex flex-col gap-2">
                    <label className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/50">
                      02 / WORK EMAIL *
                    </label>
                    <input 
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@company.com"
                      className="bg-transparent border-b border-white/20 pb-4 text-xl font-light text-white placeholder:text-white/20 focus:outline-none focus:border-white transition-colors"
                    />
                    {errors.email && <span className="font-mono text-[11px] text-red-400 mt-1">{errors.email}</span>}
                  </div>

                  {/* Field 03: Company */}
                  <div className="flex flex-col gap-2">
                    <label className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/50">
                      03 / COMPANY
                    </label>
                    <input 
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Company name or brand"
                      className="bg-transparent border-b border-white/20 pb-4 text-xl font-light text-white placeholder:text-white/20 focus:outline-none focus:border-white transition-colors"
                    />
                  </div>

                  {/* Field 04: Phone / WhatsApp */}
                  <div className="flex flex-col gap-2">
                    <label className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/50">
                      04 / PHONE / WHATSAPP
                    </label>
                    <input 
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      className="bg-transparent border-b border-white/20 pb-4 text-xl font-light text-white placeholder:text-white/20 focus:outline-none focus:border-white transition-colors"
                    />
                  </div>

                  {/* Field 05: Service Needed */}
                  <div className="flex flex-col gap-2">
                    <label className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/50">
                      05 / WHAT DO YOU NEED HELP WITH?
                    </label>
                    <select 
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="bg-transparent border-b border-white/20 pb-4 text-xl font-light text-white focus:outline-none focus:border-white transition-colors cursor-pointer [&>option]:bg-[#070707] [&>option]:text-white"
                    >
                      <option value="Branding">Branding</option>
                      <option value="Website / Digital Experience">Website / Digital Experience</option>
                      <option value="Digital Marketing">Digital Marketing</option>
                      <option value="Social Media">Social Media</option>
                      <option value="Video / Content">Video / Content</option>
                      <option value="AI / Automation">AI / Automation</option>
                      <option value="Something else">Something else</option>
                    </select>
                  </div>

                  {/* Field 06: Project Description */}
                  <div className="flex flex-col gap-2">
                    <label className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/50">
                      06 / TELL US ABOUT THE PROJECT *
                    </label>
                    <textarea 
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="What are you building, changing or trying to achieve?"
                      className="bg-transparent border-b border-white/20 pb-4 text-xl font-light text-white placeholder:text-white/20 focus:outline-none focus:border-white transition-colors resize-none"
                    />
                    {errors.message && <span className="font-mono text-[11px] text-red-400 mt-1">{errors.message}</span>}
                  </div>

                  {/* Field 07: Budget Range */}
                  <div className="flex flex-col gap-3">
                    <label className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/50">
                      07 / BUDGET RANGE
                    </label>
                    <div className="flex flex-wrap gap-3 pt-2">
                      {["₹50K – ₹1L", "₹1L – ₹3L", "₹3L – ₹5L", "₹5L+", "Let's discuss"].map((bRange) => (
                        <button
                          type="button"
                          key={bRange}
                          onClick={() => setFormData(prev => ({ ...prev, budget: bRange }))}
                          className={`font-mono text-[11px] tracking-[0.15em] uppercase px-4 py-3 rounded-[2px] transition-all ${
                            formData.budget === bRange
                              ? "bg-white text-black font-medium"
                              : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
                          }`}
                        >
                          {bRange}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-6">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group relative inline-flex items-center justify-between w-full bg-white text-black px-8 py-5 rounded-[4px] font-mono text-[12px] tracking-[0.15em] uppercase overflow-hidden cursor-pointer disabled:opacity-50"
                    >
                      <span className="relative z-10 flex items-center gap-3 font-medium">
                        {isSubmitting ? "Sending Enquiry..." : "Start the Conversation"}
                      </span>
                      <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                      <div className="absolute inset-0 bg-gray-200 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                    </button>
                  </div>

                </motion.form>
              ) : (
                /* SUCCESS STATE */
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="py-24 flex flex-col items-center text-center justify-center min-h-[500px]"
                >
                  <CheckCircle2 className="w-16 h-16 text-white/80 mb-8 stroke-[1.5]" />
                  <h3 className="text-[clamp(36px,5vw,60px)] font-medium tracking-tight mb-4">
                    You're on our list.
                  </h3>
                  <p className="text-white/60 text-xl font-light max-w-md mb-12">
                    Thanks for reaching out. We'll get back to you shortly.
                  </p>
                  
                  <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/40 mb-12">
                    WE PROMOTE / INDIA
                  </div>

                  <Link 
                    to="/" 
                    className="group relative inline-flex items-center justify-center bg-white text-black px-8 py-4 rounded-[4px] font-mono text-[11px] tracking-[0.15em] uppercase overflow-hidden"
                  >
                    <span className="relative z-10">Back to Home</span>
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* =========================================
          08 / EXPECTATION SETTING
      ========================================= */}
      <section className="px-[5vw] py-32 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-16">
            <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40 block mb-2">
              What Happens Next
            </span>
            <h2 className="text-3xl font-medium tracking-tight">Our Process</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/10 pt-16">
            {[
              { num: "01", title: "WE READ", desc: "We review your brief and understand what you're trying to achieve." },
              { num: "02", title: "WE TALK", desc: "We have a conversation about the opportunity." },
              { num: "03", title: "WE BUILD", desc: "If there's a fit, we figure out the right way forward." }
            ].map(step => (
              <div key={step.num} className="flex flex-col gap-4">
                <span className="font-mono text-xs text-white/30">{step.num}</span>
                <h3 className="text-2xl font-medium tracking-tight">{step.title}</h3>
                <p className="text-white/50 text-base font-light">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          09 / FINAL STATEMENT (SCROLL BREAK)
      ========================================= */}
      <section ref={closingRef} className="h-[140vh] relative bg-[#040404] border-t border-white/5">
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden px-[5vw]">
          <motion.h2 
            style={{ scale: closingScale, opacity: closingOpacity }}
            className="text-[clamp(40px,7vw,130px)] leading-[1.02] font-medium text-center uppercase tracking-tight"
          >
            Good things <br />
            <span className="text-white/40 italic font-serif lowercase block my-2">start with</span>
            a conversation.
          </motion.h2>
        </div>
      </section>

      {/* =========================================
          10 / FINAL CTA
      ========================================= */}
      <section className="px-[5vw] py-40 pb-60 bg-[#020202] text-center flex flex-col items-center justify-center border-t border-white/5 relative z-10">
        <motion.div
           variants={staggerContainer}
           initial="hidden"
           whileInView="show"
           viewport={{ once: true }}
           className="flex flex-col items-center max-w-[800px]"
        >
          <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40 mb-6">
            Ready?
          </span>
          
          <h2 className="text-[clamp(48px,8vw,120px)] leading-[1.05] font-medium tracking-tight mb-12">
            Let's talk.
          </h2>

          <a 
            href="mailto:hello@wepromote.us" 
            className="group relative inline-flex items-center justify-center bg-white text-black px-10 py-5 rounded-[4px] font-mono text-[12px] tracking-[0.15em] uppercase overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-3">
              Start a Project <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gray-200 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          </a>
        </motion.div>
      </section>

    </div>
  );
}
