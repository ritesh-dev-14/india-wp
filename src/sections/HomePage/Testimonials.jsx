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
      className={`absolute h-3 w-3 pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <path d="M1 1 H8 M1 1 V8" stroke="currentColor" strokeWidth="1" fill="none" />
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
    <section className="relative bg-white text-ink py-12 md:py-16 px-[6vw] overflow-hidden selection:bg-indigo-100/20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_35%_at_50%_40%,rgba(38,58,120,0.1),transparent_70%)]" />

      <div className="relative z-10 mx-auto max-w-[1400px] w-full">
        
        {/* SECTION INTRO */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 mb-8 md:mb-10 items-end border-b border-border/80 pb-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-5% 0px" }}
            transition={{ duration: 0.75, ease: EASE }}
            className="lg:col-span-7"
          >
            <span className="inline-flex items-center gap-2.5 font-mono text-[10px] tracking-[0.3em] uppercase text-ink-secondary mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-ink/70 animate-pulse"></span>
              08 / CLIENT STORIES
            </span>

            <h2 className="font-semibold leading-[0.94] tracking-tight text-[clamp(2.4rem,5vw,4.5rem)] text-ink">
              Don&apos;t take
              <br />
              <span
                className="text-ink/80 font-normal"
                style={{ fontFamily: SERIF, fontStyle: "italic" }}
              >
                our word for it.
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1, ease: EASE }}
            className="lg:col-span-5 pb-1"
          >
            <p className="text-[14px] md:text-[15px] font-light leading-relaxed text-ink-secondary max-w-[38ch]">
              &ldquo;The best part of the work is hearing what it changed for the people we built it with.&rdquo;
            </p>
          </motion.div>
        </div>

        {/* DYNAMIC EDITORIAL STAGE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT: Editorial Visual Frame */}
          <div className="lg:col-span-6 relative min-h-[300px] md:min-h-[380px] bg-surface-muted border border-border/80 rounded-xs overflow-hidden group shadow-sm p-4">
            <Corner className="left-3 top-3 z-20 text-ink/25" />
            <Corner className="right-3 top-3 rotate-90 z-20 text-ink/25" />
            <Corner className="bottom-3 left-3 -rotate-90 z-20 text-ink/25" />
            <Corner className="bottom-3 right-3 rotate-180 z-20 text-ink/25" />

            <div className="relative w-full h-[260px] md:h-[330px] overflow-hidden rounded-xs">
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
                  className="absolute inset-0 w-full h-full object-cover object-center filter brightness-90"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
            </div>

            <div className="absolute bottom-4 left-4 font-mono text-[9px] uppercase tracking-[0.25em] text-ink-secondary bg-surface/80 px-3 py-1 backdrop-blur-md rounded-xs border border-border z-25">
              // CASE 0{currentIndex + 1} — {activeTestimonial.company}
            </div>
          </div>

          {/* RIGHT: Testimonial Quote & Interactive Controls */}
          <div className="lg:col-span-6 flex flex-col justify-between py-1">
            
            <div className="mb-6 min-h-[140px] md:min-h-[160px]">
              <span className="block font-serif text-[50px] leading-none text-ink/10 mb-[-20px] select-none" aria-hidden="true">
                &ldquo;
              </span>

              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={activeTestimonial.id}
                  initial={prefersReducedMotion ? false : { opacity: 0, y: direction * 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={prefersReducedMotion ? undefined : { opacity: 0, y: direction * -12 }}
                  transition={{ duration: 0.4, ease: EASE }}
                  className="font-light tracking-[-0.02em] leading-[1.15] text-[clamp(1.25rem,2.1vw,1.9rem)] text-ink max-w-[21ch]"
                >
                  {activeTestimonial.quote}
                </motion.blockquote>
              </AnimatePresence>
            </div>

            {/* Client Metadata & Navigation Hub */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pt-5 border-t border-border/80">
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial.id}
                  initial={prefersReducedMotion ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={prefersReducedMotion ? undefined : { opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <cite className="not-italic block font-semibold text-[15px] md:text-[16px] tracking-tight text-ink mb-0.5">
                    {activeTestimonial.name}
                  </cite>
                  <p className="font-mono text-[10px] md:text-[11px] tracking-[0.15em] text-ink-secondary uppercase mb-0.5">
                    {activeTestimonial.role}, <span className="text-ink/90">{activeTestimonial.company}</span>
                  </p>
                  <p className="font-mono text-[9px] md:text-[10px] tracking-[0.2em] text-ink-secondary uppercase">
                    {activeTestimonial.project}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Progress Line & Navigation Controls */}
              <div className="flex items-center gap-5">
                
                <div className="flex flex-col items-end gap-1.5">
                  <span className="font-mono text-[10px] tracking-widest text-ink">
                    0{currentIndex + 1}
                  </span>
                  <div className="w-16 h-[2px] bg-ink/10 relative overflow-hidden rounded-full">
                    <motion.div
                      className="absolute top-0 left-0 h-full bg-ink"
                      animate={{
                        width: `${((currentIndex + 1) / TESTIMONIALS.length) * 100}%`,
                      }}
                      transition={{ duration: 0.4, ease: EASE }}
                    />
                  </div>
                  <span className="font-mono text-[10px] tracking-widest text-ink-secondary">
                    0{TESTIMONIALS.length}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={prevTestimonial}
                    aria-label="Previous testimonial"
                    className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-ink hover:border-ink hover:bg-ink hover:text-white transition-all duration-300 group cursor-pointer shadow-sm"
                  >
                    <span className="transform group-hover:-translate-x-0.5 transition-transform duration-300">
                      <ArrowLeft size={15} />
                    </span>
                  </button>
                  <button
                    onClick={nextTestimonial}
                    aria-label="Next testimonial"
                    className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-ink hover:border-ink hover:bg-ink hover:text-white transition-all duration-300 group cursor-pointer shadow-sm"
                  >
                    <span className="transform group-hover:translate-x-0.5 transition-transform duration-300">
                      <ArrowRight size={15} />
                    </span>
                  </button>
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* SECTION CLOSING */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE }}
          className="mt-10 md:mt-14 pt-6 border-t border-border/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
        >
          <span className="font-mono text-[10px] tracking-[0.22em] text-ink-secondary uppercase">
            WE PROMOTE INDIA — CLIENT STORIES
          </span>
          <p className="text-[13px] md:text-[14px] font-light text-ink-secondary">
            Built together. Remembered together.
          </p>
        </motion.div>

      </div>
    </section>
  );
}