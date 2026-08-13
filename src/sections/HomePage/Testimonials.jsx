"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const SERIF = "'Instrument Serif', 'Times New Roman', ui-serif, Georgia, serif";
const EASE = [0.76, 0, 0.24, 1];

const TESTIMONIALS = [
  {
    id: "01",
    quote:
      "WePromote transformed our entire digital presence. From comprehensive website engineering to high-impact branding, they redefined how our luxury line is perceived in the market.",
    name: "TRIVENI - The Granite Studio",
    role: "Managing Director",
    company: "Triveni Granite Studio",
    project: "Full-Stack Website & Global Branding",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1600&auto=format&fit=crop",
    imageAlt: "Triveni luxury retail and brand showcase",
  },
  {
    id: "02",
    quote:
      "Absolute mastery in execution. They took over our complete digital ecosystem, delivering a seamless blend of elite architecture and visual storytelling that sets us apart from competitors.",
    name: "INNE Lifts",
    role: "Chief Executive Officer",
    company: "Inne Lifts",
    project: "End-to-End Digital Ecosystem & Strategy",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop",
    imageAlt: "Inne corporate architecture and digital ecosystem",
  },
  {
    id: "03",
    quote:
      "When we launched our flagship showroom in a brand-new city, WePromote engineered a grand launch hype that drove immense footfall and immediate market dominance from day one.",
    name: "HANDA BANGLES",
    role: "Founder & Director",
    company: "Handa Bangles",
    project: "Grand Launch Hype & City Expansion Campaign",
    image:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1600&auto=format&fit=crop",
    imageAlt: "Handa Bangles grand showroom launch event",
  },
  {
    id: "04",
    quote:
      "As an aesthetic manufacturer, finding quality pan-India distributors used to be a challenge. Their strategic positioning and outreach built us a robust network across the entire country.",
    name: "Aesthetic Homes",
    role: "Managing Director",
    company: "Aesthetic Homes",
    project: "Pan-India Distributor Acquisition & Growth",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1600&auto=format&fit=crop",
    imageAlt: "Aesthetic manufacturing and distribution network",
  },
  {
    id: "05",
    quote:
      "In the B2B metallurgy space, credibility is everything. Their high-end website overhaul and targeted social media campaigns established total market authority and unmatched brand respect.",
    name: "Precision Metallurgy",
    role: "Director of Operations",
    company: "Precision Metallurgy",
    project: "Pan-India B2B Branding & Digital Flagship",
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1600&auto=format&fit=crop",
    imageAlt: "Precision metallurgy and industrial manufacturing flagship",
  },
  {
    id: "06",
    quote:
      "Managing high-profile architect meets and digital brand presence requires absolute precision. They manage our elite architect engagements flawlessly, cementing our leadership position.",
    name: "HCS Homes",
    role: "Head of Marketing",
    company: "HCS Homes",
    project: "Architect Meet Management & Brand Presence",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
    imageAlt: "HCS Homes architectural excellence and elite meets",
  },
];

function Corner({ className = "" }) {
  return (
    <svg
      viewBox="0 0 16 16"
      className={`absolute h-3 w-3 text-[#8C6A1E]/40 pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <path
        d="M1 1 H8 M1 1 V8"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
    </svg>
  );
}

export default function Testimonials() {
  const prefersReducedMotion = useReducedMotion();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const activeTestimonial = TESTIMONIALS[currentIndex];

  const handleIndexChange = (newIndex) => {
    if (newIndex === currentIndex) return;
    setDirection(newIndex > currentIndex ? 1 : -1);
    setCurrentIndex(newIndex);
  };

  const nextTestimonial = () => {
    const next = (currentIndex + 1) % TESTIMONIALS.length;
    handleIndexChange(next);
  };

  const prevTestimonial = () => {
    const prev = (currentIndex - 1 + TESTIMONIALS.length) % TESTIMONIALS.length;
    handleIndexChange(prev);
  };

  return (
    <section className="relative flex min-h-[100svh] w-full flex-col items-center justify-center overflow-hidden bg-transparent py-24 font-sans selection:bg-[#8C6A1E]/20 selection:text-[#1A1714] md:py-32">
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-[5vw]">
        {/* Centered Header Layout */}
        <div className="mx-auto mb-16 flex max-w-4xl flex-col items-center text-center md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: EASE }}
            className="flex flex-col items-center"
          >
            {/* Pill Badge */}
            <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-[#8C6A1E]/30 bg-[#8C6A1E]/5 px-5 py-2 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-[#8C6A1E] shadow-[0_0_10px_rgba(140,106,30,0.8)]" />
              <span className="font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-[#8C6A1E]">
                08 / CLIENT STORIES & PARTNERSHIPS
              </span>
            </div>

            <h2 className="mb-6 text-[clamp(2.5rem,5vw,4.5rem)] font-light leading-[1.05] tracking-tight text-[#1A1714] drop-shadow-sm">
              Trusted by industry{" "}
              <span
                className="block md:inline font-normal text-[#8C6A1E]"
                style={{ fontFamily: SERIF, fontStyle: "italic" }}
              >
                leaders & titans.
              </span>
            </h2>

            <p className="max-w-2xl text-[15px] font-light leading-relaxed text-[#57534E] sm:text-lg">
              “From nationwide B2B manufacturers and luxury brands to grand city
              launches, discover how we engineer unshakeable market respect and
              tangible growth.”
            </p>
          </motion.div>
        </div>

        {/* DYNAMIC EDITORIAL STAGE (Light Theme Glassmorphic Card) */}
        <div className="relative overflow-hidden rounded-2xl border border-[#8C6A1E]/20 bg-[#FAF8F5]/60 p-6 backdrop-blur-sm md:p-12">
          <Corner className="left-5 top-5 z-20" />
          <Corner className="right-5 top-5 z-20 rotate-90" />
          <Corner className="bottom-5 left-5 z-20 -rotate-90" />
          <Corner className="bottom-5 right-5 z-20 rotate-180" />

          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
            {/* LEFT: Editorial Visual Frame */}
            <div className="relative min-h-[300px] overflow-hidden rounded-xl border border-[#8C6A1E]/20 bg-[#FAF8F5] p-4 lg:col-span-6 md:min-h-[380px]">
              <div className="relative h-[260px] w-full overflow-hidden rounded-lg md:h-[330px]">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeTestimonial.id}
                    src={activeTestimonial.image}
                    alt={activeTestimonial.imageAlt}
                    loading="lazy"
                    initial={
                      prefersReducedMotion ? false : { opacity: 0, scale: 1.04 }
                    }
                    animate={{ opacity: 1, scale: 1 }}
                    exit={
                      prefersReducedMotion
                        ? undefined
                        : { opacity: 0, scale: 0.98 }
                    }
                    transition={{ duration: 0.5, ease: EASE }}
                    className="absolute inset-0 h-full w-full object-cover object-center filter contrast-105"
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1714]/60 via-[#1A1714]/10 to-transparent pointer-events-none" />
              </div>

              <div className="absolute bottom-6 left-6 z-25 rounded-md border border-[#8C6A1E]/20 bg-[#FAF8F5]/90 px-3.5 py-1.5 font-mono text-[9px] uppercase tracking-[0.25em] text-[#57534E] backdrop-blur-md">
                // PARTNERSHIP 0{currentIndex + 1} — {activeTestimonial.company}
              </div>
            </div>

            {/* RIGHT: Testimonial Quote & Interactive Controls */}
            <div className="flex flex-col justify-between py-1 lg:col-span-6">
              <div className="mb-8 min-h-[140px] md:min-h-[160px]">
                <span
                  className="block font-serif text-[60px] leading-none text-[#8C6A1E]/20 mb-[-25px] select-none"
                  aria-hidden="true"
                >
                  &ldquo;
                </span>

                <AnimatePresence mode="wait">
                  <motion.blockquote
                    key={activeTestimonial.id}
                    initial={
                      prefersReducedMotion
                        ? false
                        : { opacity: 0, y: direction * 12 }
                    }
                    animate={{ opacity: 1, y: 0 }}
                    exit={
                      prefersReducedMotion
                        ? undefined
                        : { opacity: 0, y: direction * -12 }
                    }
                    transition={{ duration: 0.4, ease: EASE }}
                    className="max-w-[28ch] text-[clamp(1.2rem,1.9vw,1.75rem)] font-light leading-[1.25] tracking-tight text-[#1A1714]"
                  >
                    {activeTestimonial.quote}
                  </motion.blockquote>
                </AnimatePresence>
              </div>

              {/* Client Metadata & Navigation Hub */}
              <div className="flex flex-col gap-6 border-t border-[#8C6A1E]/20 pt-6 sm:flex-row sm:items-end sm:justify-between">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTestimonial.id}
                    initial={prefersReducedMotion ? false : { opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={prefersReducedMotion ? undefined : { opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <cite className="mb-1 block text-[16px] font-semibold tracking-tight not-italic text-[#1A1714]">
                      {activeTestimonial.name}
                    </cite>
                    <p className="mb-0.5 font-mono text-[10px] uppercase tracking-[0.15em] text-[#57534E] md:text-[11px]">
                      {activeTestimonial.role},{" "}
                      <span className="text-[#1A1714]">
                        {activeTestimonial.company}
                      </span>
                    </p>
                    <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#78716C] md:text-[10px]">
                      {activeTestimonial.project}
                    </p>
                  </motion.div>
                </AnimatePresence>

                {/* Progress Line & Navigation Controls */}
                <div className="flex items-center gap-5">
                  <div className="flex flex-col items-end gap-1.5">
                    <span className="font-mono text-[10px] tracking-widest text-[#1A1714]">
                      0{currentIndex + 1}
                    </span>
                    <div className="relative h-[2px] w-16 overflow-hidden rounded-full bg-[#8C6A1E]/20">
                      <motion.div
                        className="absolute left-0 top-0 h-full bg-[#8C6A1E]"
                        animate={{
                          width: `${((currentIndex + 1) / TESTIMONIALS.length) * 100}%`,
                        }}
                        transition={{ duration: 0.4, ease: EASE }}
                      />
                    </div>
                    <span className="font-mono text-[10px] tracking-widest text-[#78716C]">
                      0{TESTIMONIALS.length}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={prevTestimonial}
                      aria-label="Previous testimonial"
                      className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-[#8C6A1E]/25 bg-[#FAF8F5] text-[#1A1714] transition-all duration-300 hover:border-[#8C6A1E] hover:bg-[#8C6A1E] hover:text-white group shadow-sm"
                    >
                      <span className="transform transition-transform duration-300 group-hover:-translate-x-0.5">
                        <ArrowLeft size={15} />
                      </span>
                    </button>
                    <button
                      onClick={nextTestimonial}
                      aria-label="Next testimonial"
                      className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-[#8C6A1E]/25 bg-[#FAF8F5] text-[#1A1714] transition-all duration-300 hover:border-[#8C6A1E] hover:bg-[#8C6A1E] hover:text-white group shadow-sm"
                    >
                      <span className="transform transition-transform duration-300 group-hover:translate-x-0.5">
                        <ArrowRight size={15} />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer info bar with Contact Details */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE }}
          className="mt-12 flex flex-col items-start justify-between gap-4 py-8 md:flex-row md:items-center border-t border-[#8C6A1E]/20"
        >
          <div className="flex flex-col gap-1">
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-[#78716C]">
              WePromote — MOHALI, INDIA
            </span>
            <span className="font-mono text-[10px] text-[#57534E]">
              Email: info@wepromoteindia.com | Phone: +91 7009404727
            </span>
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#1A1714]">
            Built together. Dominating together.
          </span>
        </motion.div>
      </div>
    </section>
  );
}
