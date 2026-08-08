"use client";

/**
 * Testimonials.jsx
 * ---------------------------------------------------------------
 * Awwwards-level cinematic "Client Stories" section for We Promote India.
 *
 * DESIGN CONCEPT
 * Maintains a high-contrast dark architectural canvas (#070707) infused 
 * with minimal, high-end neon/vibrant ambient lighting accents (electric violet 
 * and cyan gradients) to bring rich color depth without feeling loud or cluttered.
 *
 * Stack: React + Tailwind CSS + GSAP (core + ScrollTrigger)
 * Install: npm i gsap
 * ---------------------------------------------------------------
 */

import React, { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/* ============================================================
   TESTIMONIAL DATA (Placeholder ready for real approved quotes)
============================================================ */

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
    accentColor: "from-cyan-500/20 via-blue-500/10 to-transparent",
    badgeColor: "text-cyan-400 border-cyan-500/30 bg-cyan-950/40",
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
    accentColor: "from-violet-500/20 via-fuchsia-500/10 to-transparent",
    badgeColor: "text-violet-400 border-violet-500/30 bg-violet-950/40",
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
    accentColor: "from-emerald-500/20 via-teal-500/10 to-transparent",
    badgeColor: "text-emerald-400 border-emerald-500/30 bg-emerald-950/40",
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
    accentColor: "from-amber-500/20 via-rose-500/10 to-transparent",
    badgeColor: "text-amber-400 border-amber-500/30 bg-amber-950/40",
  },
];

/* ============================================================
   ROOT COMPONENT
============================================================ */

export default function Testimonials() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const reduceMotionRef = useRef(false);

  const activeTestimonial = TESTIMONIALS[currentIndex];

  useLayoutEffect(() => {
    reduceMotionRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotionRef.current) return;

    const ctx = gsap.context(() => {
      // Entry animation for section header
      gsap.fromTo(
        sectionRef.current.querySelector(".section-header"),
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleIndexChange = (newIndex) => {
    if (isAnimating || newIndex === currentIndex) return;
    setIsAnimating(true);

    if (reduceMotionRef.current) {
      setCurrentIndex(newIndex);
      setIsAnimating(false);
      return;
    }

    const contentEl = contentRef.current;
    const imageEl = imageRef.current;

    // Fluid high-end crossfade transition
    gsap.to([contentEl, imageEl], {
      opacity: 0,
      y: 15,
      duration: 0.3,
      ease: "power2.in",
      onComplete: () => {
        setCurrentIndex(newIndex);

        gsap.fromTo(
          [contentEl, imageEl],
          { opacity: 0, y: -15 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
            onComplete: () => setIsAnimating(false),
          }
        );
      },
    });
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
    <section
      ref={sectionRef}
      className="relative bg-[#070707] text-[#FAFAFA] py-[140px] md:py-[180px] px-[6vw] overflow-hidden selection:bg-white selection:text-black"
    >
      {/* Ambient Background Glow Accent based on current slide */}
      <div 
        className={`absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-tr ${activeTestimonial.accentColor} blur-[140px] pointer-events-none transition-all duration-1000 ease-out z-0`} 
      />

      <div className="relative z-10 mx-auto max-w-[1400px] w-full">
        
        {/* ============================================================
           SECTION INTRO (Editorial Split Header)
        ============================================================ */}
        <div className="section-header grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-24 md:mb-32 items-end border-b border-white/[0.08] pb-16">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-3 text-[11px] font-mono tracking-[0.32em] uppercase text-[#888888] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
              08 / CLIENT STORIES
            </span>

            <h2 className="font-semibold leading-[0.94] tracking-tight text-[clamp(44px,6.5vw,96px)] text-[#FAFAFA]">
              Don&apos;t take
              <br />
              our word for it.
            </h2>
          </div>

          <div className="lg:col-span-5 pb-2">
            <p className="text-[18px] md:text-[20px] font-light leading-relaxed text-[#999999] max-w-[38ch]">
              &ldquo;The best part of the work is hearing what it changed for the people we built it with.&rdquo;
            </p>
          </div>
        </div>

        {/* ============================================================
           DYNAMIC EDITORIAL STAGE (Asymmetric Split Layout)
        ============================================================ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center min-h-[520px]">
          
          {/* LEFT: Large Editorial Visual Frame */}
          <div ref={imageRef} className="lg:col-span-6 relative min-h-[400px] md:min-h-[500px] bg-[#111111] border border-white/[0.1] rounded-[8px] overflow-hidden group shadow-2xl">
            <Corner className="left-4 top-4 z-20 text-white/30" />
            <Corner className="right-4 top-4 rotate-90 z-20 text-white/30" />
            <Corner className="bottom-4 left-4 -rotate-90 z-20 text-white/30" />
            <Corner className="bottom-4 right-4 rotate-180 z-20 text-white/30" />

            <div className="relative w-full h-full min-h-[400px] md:min-h-[500px] overflow-hidden">
              <img
                src={activeTestimonial.image}
                alt={activeTestimonial.imageAlt}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover object-center grayscale contrast-125 opacity-75 group-hover:scale-105 group-hover:opacity-95 group-hover:grayscale-0 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-transparent to-transparent pointer-events-none" />
            </div>

            <div className={`absolute bottom-6 left-6 font-mono text-[10px] uppercase tracking-[0.25em] px-3.5 py-1.5 backdrop-blur-md rounded-sm border z-20 transition-colors duration-500 ${activeTestimonial.badgeColor}`}>
              // CASE 0{currentIndex + 1} — {activeTestimonial.company}
            </div>
          </div>

          {/* RIGHT: Testimonial Quote & Interactive Controls */}
          <div ref={contentRef} className="lg:col-span-6 flex flex-col justify-between py-2">
            
            <div className="mb-12">
              <span className="block font-serif text-[80px] leading-none text-white/10 mb-[-30px] select-none" aria-hidden="true">
                &ldquo;
              </span>

              <blockquote className="font-light tracking-[-0.03em] leading-[1.12] text-[clamp(26px,3.2vw,50px)] text-[#FAFAFA] max-w-[21ch]">
                {activeTestimonial.quote}
              </blockquote>
            </div>

            {/* Client Metadata & Navigation Hub */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8 pt-8 border-t border-white/[0.08]">
              
              <div>
                <cite className="not-italic block font-semibold text-[17px] md:text-[19px] tracking-tight text-[#FAFAFA] mb-1">
                  {activeTestimonial.name}
                </cite>
                <p className="font-mono text-[12px] tracking-[0.15em] text-[#888888] uppercase mb-1">
                  {activeTestimonial.role}, <span className="text-white/90">{activeTestimonial.company}</span>
                </p>
                <p className="font-mono text-[11px] tracking-[0.2em] text-[#666666] uppercase">
                  {activeTestimonial.project}
                </p>
              </div>

              {/* Progress Line & Navigation Controls */}
              <div className="flex items-center gap-6">
                
                <div className="flex flex-col items-end gap-2">
                  <span className="font-mono text-[11px] tracking-widest text-white">
                    0{currentIndex + 1}
                  </span>
                  <div className="w-20 h-[2px] bg-white/10 relative overflow-hidden rounded-full">
                    <div
                      className="absolute top-0 left-0 h-full bg-white transition-all duration-500 ease-out"
                      style={{
                        width: `${((currentIndex + 1) / TESTIMONIALS.length) * 100}%`,
                      }}
                    />
                  </div>
                  <span className="font-mono text-[11px] tracking-widest text-[#666666]">
                    0{TESTIMONIALS.length}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={prevTestimonial}
                    aria-label="Previous testimonial"
                    className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-white hover:bg-white hover:text-black transition-all duration-300 group cursor-pointer shadow-lg"
                  >
                    <span className="transform group-hover:-translate-x-1 transition-transform duration-300">
                      ←
                    </span>
                  </button>
                  <button
                    onClick={nextTestimonial}
                    aria-label="Next testimonial"
                    className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-white hover:bg-white hover:text-black transition-all duration-300 group cursor-pointer shadow-lg"
                  >
                    <span className="transform group-hover:translate-x-1 transition-transform duration-300">
                      →
                    </span>
                  </button>
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* ============================================================
           SECTION CLOSING
        ============================================================ */}
        <div className="mt-32 md:mt-40 pt-12 border-t border-white/[0.08] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <span className="font-mono text-[11px] tracking-[0.25em] text-[#888888] uppercase">
            WE PROMOTE INDIA — CLIENT STORIES
          </span>
          <p className="text-[14px] font-light tracking-wide text-[#888888]">
            Built together. Remembered together.
          </p>
        </div>

      </div>
    </section>
  );
}

/* ============================================================
   CORNER ACCENT HELPER
============================================================ */

function Corner({ className = "" }) {
  return (
    <svg
      viewBox="0 0 16 16"
      className={`absolute h-4 w-4 pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <path d="M1 1 H8 M1 1 V8" stroke="currentColor" strokeWidth="1" fill="none" />
    </svg>
  );
}
