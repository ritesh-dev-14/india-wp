"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";

const SERIF = "'Instrument Serif', 'Times New Roman', ui-serif, Georgia, serif";
const EASE = [0.76, 0, 0.24, 1];

const TESTIMONIALS = [
  {
    id: "01",
    quote: "Client testimonial goes here. Replace this with the exact approved quote from the client.",
    name: "RAHUL SHARMA",
    role: "Founder",
    company: "Company Name",
    project: "Brand Identity / Website",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1600&auto=format&fit=crop",
    imageAlt: "Client project preview visual one",
  },
  {
    id: "02",
    quote: "Client testimonial goes here. Replace this with the exact approved quote from the client.",
    name: "PRIYA VERMA",
    role: "Managing Director",
    company: "Enterprise Brand",
    project: "Digital Experience & Strategy",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",
    imageAlt: "Client project preview visual two",
  },
  {
    id: "03",
    quote: "Client testimonial goes here. Replace this with the exact approved quote from the client.",
    name: "AMIT PATEL",
    role: "Chief Executive Officer",
    company: "Venture Studio",
    project: "Full-Stack Web Architecture",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop",
    imageAlt: "Client project preview visual three",
  },
  {
    id: "04",
    quote: "Client testimonial goes here. Replace this with the exact approved quote from the client.",
    name: "NEHA GUPTA",
    role: "Creative Director",
    company: "Design Group",
    project: "Brand Positioning & UI/UX",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1600&auto=format&fit=crop",
    imageAlt: "Client project preview visual four",
  },
];

function Corner({ className = "" }) {
  return (
    <svg
      viewBox="0 0 16 16"
      className={`absolute h-3 w-3 text-white/20 pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <path d="M1 1 H8 M1 1 V8" stroke="currentColor" strokeWidth="1.5" fill="none" />
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
    <section className="relative flex min-h-[100svh] w-full flex-col items-center justify-center overflow-hidden bg-[#020202] py-24 font-sans selection:bg-[#EAB308]/20 selection:text-white md:py-32">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(20,60,170,0.15),transparent_65%)]" />

      {/* Vertical background grid lines (matching layout) */}
      <div className="pointer-events-none absolute inset-0 flex justify-evenly opacity-30">
        <div className="h-full w-px bg-white/10" />
        <div className="h-full w-px bg-white/10" />
        <div className="h-full w-px bg-white/10" />
        <div className="h-full w-px bg-white/10" />
      </div>

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
            <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/5 px-5 py-2 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-[#10B981] shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
              <span className="font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-[#EAB308]">
                08 / CLIENT STORIES
              </span>
            </div>

            <h2 className="mb-6 text-[clamp(2.5rem,5vw,4.5rem)] font-light leading-[1.05] tracking-tight text-white drop-shadow-md">
              Don&apos;t take{" "}
              <span
                className="block md:inline font-normal text-[#A1A1AA]"
                style={{ fontFamily: SERIF, fontStyle: "italic" }}
              >
                our word for it.
              </span>
            </h2>

            <p className="max-w-2xl text-[15px] font-light leading-relaxed text-[#D4D4D8] sm:text-lg">
              “The best part of the work is hearing what it changed for the people we built it with.”
            </p>
          </motion.div>
        </div>

        {/* DYNAMIC EDITORIAL STAGE (Dark Theme Glassmorphic Card) */}
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm md:p-12">
          <Corner className="left-5 top-5 z-20" />
          <Corner className="right-5 top-5 z-20 rotate-90" />
          <Corner className="bottom-5 left-5 z-20 -rotate-90" />
          <Corner className="bottom-5 right-5 z-20 rotate-180" />

          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
            
            {/* LEFT: Editorial Visual Frame */}
            <div className="relative min-h-[300px] overflow-hidden rounded-xl border border-white/10 bg-black/40 p-4 lg:col-span-6 md:min-h-[380px]">
              <div className="relative h-[260px] w-full overflow-hidden rounded-lg md:h-[330px]">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeTestimonial.id}
                    src={activeTestimonial.image}
                    alt={activeTestimonial.imageAlt}
                    loading="lazy"
                    initial={prefersReducedMotion ? false : { opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={prefersReducedMotion ? undefined : { opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.5, ease: EASE }}
                    className="absolute inset-0 h-full w-full object-cover object-center filter brightness-90 contrast-110"
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
              </div>

              <div className="absolute bottom-6 left-6 z-25 rounded-md border border-white/10 bg-black/60 px-3.5 py-1.5 font-mono text-[9px] uppercase tracking-[0.25em] text-[#A1A1AA] backdrop-blur-md">
                // CASE 0{currentIndex + 1} — {activeTestimonial.company}
              </div>
            </div>

            {/* RIGHT: Testimonial Quote & Interactive Controls */}
            <div className="flex flex-col justify-between py-1 lg:col-span-6">
              
              <div className="mb-8 min-h-[140px] md:min-h-[160px]">
                <span className="block font-serif text-[60px] leading-none text-white/10 mb-[-25px] select-none" aria-hidden="true">
                  &ldquo;
                </span>

                <AnimatePresence mode="wait">
                  <motion.blockquote
                    key={activeTestimonial.id}
                    initial={prefersReducedMotion ? false : { opacity: 0, y: direction * 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={prefersReducedMotion ? undefined : { opacity: 0, y: direction * -12 }}
                    transition={{ duration: 0.4, ease: EASE }}
                    className="max-w-[24ch] text-[clamp(1.25rem,2.1vw,1.9rem)] font-light leading-[1.2] tracking-tight text-white"
                  >
                    {activeTestimonial.quote}
                  </motion.blockquote>
                </AnimatePresence>
              </div>

              {/* Client Metadata & Navigation Hub */}
              <div className="flex flex-col gap-6 border-t border-white/10 pt-6 sm:flex-row sm:items-end sm:justify-between">
                
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTestimonial.id}
                    initial={prefersReducedMotion ? false : { opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={prefersReducedMotion ? undefined : { opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <cite className="mb-1 block text-[16px] font-semibold tracking-tight not-italic text-white">
                      {activeTestimonial.name}
                    </cite>
                    <p className="mb-0.5 font-mono text-[10px] uppercase tracking-[0.15em] text-[#A1A1AA] md:text-[11px]">
                      {activeTestimonial.role}, <span className="text-white">{activeTestimonial.company}</span>
                    </p>
                    <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#71717A] md:text-[10px]">
                      {activeTestimonial.project}
                    </p>
                  </motion.div>
                </AnimatePresence>

                {/* Progress Line & Navigation Controls */}
                <div className="flex items-center gap-5">
                  <div className="flex flex-col items-end gap-1.5">
                    <span className="font-mono text-[10px] tracking-widest text-white">
                      0{currentIndex + 1}
                    </span>
                    <div className="relative h-[2px] w-16 overflow-hidden rounded-full bg-white/10">
                      <motion.div
                        className="absolute left-0 top-0 h-full bg-[#EAB308]"
                        animate={{
                          width: `${((currentIndex + 1) / TESTIMONIALS.length) * 100}%`,
                        }}
                        transition={{ duration: 0.4, ease: EASE }}
                      />
                    </div>
                    <span className="font-mono text-[10px] tracking-widest text-[#71717A]">
                      0{TESTIMONIALS.length}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={prevTestimonial}
                      aria-label="Previous testimonial"
                      className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all duration-300 hover:border-[#EAB308] hover:bg-[#EAB308] hover:text-black group shadow-sm"
                    >
                      <span className="transform transition-transform duration-300 group-hover:-translate-x-0.5">
                        <ArrowLeft size={15} />
                      </span>
                    </button>
                    <button
                      onClick={nextTestimonial}
                      aria-label="Next testimonial"
                      className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all duration-300 hover:border-[#EAB308] hover:bg-[#EAB308] hover:text-black group shadow-sm"
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

        {/* Footer info bar */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE }}
          className="mt-12 flex flex-col items-start justify-between gap-4 py-8 md:flex-row md:items-center"
        >
          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-[#71717A]">
            WE PROMOTE INDIA — CLIENT STORIES
          </span>
          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-white">
            Built together. Remembered together.
          </span>
        </motion.div>

      </div>
    </section>
  );
}
