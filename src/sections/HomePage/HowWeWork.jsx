"use client";

/**
 * HowWeWork.jsx
 * ---------------------------------------------------------------
 * Awwwards-level editorial sequential section for We Promote India.
 *
 * DESIGN CONCEPT
 * Staggered vertical editorial progression where each stage (01 to 05) 
 * expands sequentially. Features high-impact typography, alternating 
 * layout rows, and dynamic image containers per phase with smooth 
 * scroll-triggered entrance animations. (Standard React + Vite/CRA setup).
 *
 * Stack: React + Tailwind CSS + GSAP (core + ScrollTrigger)
 * Install: npm i gsap
 * ---------------------------------------------------------------
 */

import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/* ============================================================
   PROCESS DATA WITH IMAGE ASSETS
============================================================ */

const PROCESS = [
  {
    number: "01",
    title: "Discover",
    subtitle: "Understanding the landscape",
    description: "Understand the business, audience, market and ambition before making anything.",
    tag: "// SCATTERED INSIGHTS",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Discover phase data analysis and market research",
  },
  {
    number: "02",
    title: "Define",
    subtitle: "Finding direction",
    description: "Turn insight into a clear strategy, creative direction and roadmap.",
    tag: "// STRUCTURE EMERGES",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Define phase strategy planning and wireframing",
  },
  {
    number: "03",
    title: "Create",
    subtitle: "Making it real",
    description: "Design, develop and produce the experiences that bring the idea to life.",
    tag: "// TANGIBLE SYSTEM",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Create phase UI/UX design and engineering",
  },
  {
    number: "04",
    title: "Launch",
    subtitle: "Putting work into the world",
    description: "Bring everything together and put the work into the world.",
    tag: "// MOMENTUM OUTWARD",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Launch phase deployment and performance metrics",
  },
  {
    number: "05",
    title: "Grow",
    subtitle: "Infinite expansion",
    description: "Measure, learn and continuously improve what comes next.",
    tag: "// BUILT TO KEEP MOVING",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Grow phase scaling and continuous optimization",
  },
];

/* ============================================================
   ROOT COMPONENT
============================================================ */

export default function HowWeWork() {
  const sectionRef = useRef(null);
  const introRef = useRef(null);
  const itemsRef = useRef([]);
  const reduceMotionRef = useRef(false);

  useLayoutEffect(() => {
    reduceMotionRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotionRef.current) return;

    const ctx = gsap.context(() => {
      const section = sectionRef.current;
      const intro = introRef.current;

      // Intro reveal animation
      gsap.fromTo(
        intro.querySelectorAll("[data-intro-animate]"),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: intro,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // Sequential item reveal animations down the page
      itemsRef.current.forEach((el) => {
        if (!el) return;

        gsap.fromTo(
          el,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#000000] text-[#F5F5F5] py-[140px] md:py-[180px] px-[6vw] overflow-hidden selection:bg-white/20"
    >
      <div className="mx-auto max-w-[1400px] w-full">
        
        {/* ============================================================
           SECTION INTRO (Editorial Split)
        ============================================================ */}
        <div ref={introRef} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-28 md:mb-36 items-end">
          
          <div className="lg:col-span-7">
            {/* Eyebrow */}
            <span
              data-intro-animate
              className="inline-flex items-center gap-3 text-[11px] font-mono tracking-[0.32em] uppercase text-[#8A8A8A] mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white/60"></span>
              07 / HOW WE WORK
            </span>

            {/* Main Headline */}
            <h2
              data-intro-animate
              className="font-semibold leading-[0.94] tracking-tight text-[clamp(48px,7vw,100px)] text-[#F5F5F5]"
            >
              From idea
              <br />
              to impact.
            </h2>
          </div>

          <div className="lg:col-span-5 pb-2">
            <p
              data-intro-animate
              className="text-[18px] md:text-[20px] font-light leading-relaxed text-[#8A8A8A] max-w-[38ch]"
            >
              &ldquo;Every project starts with understanding. Then we turn direction into something people can see, experience and remember.&rdquo;
            </p>
          </div>

        </div>

        {/* ============================================================
           SEQUENTIAL EDITORIAL STAGES CONTAINER
        ============================================================ */}
        <div className="flex flex-col gap-24 md:gap-32">
          {PROCESS.map((stage, index) => (
            <ProcessStageItem
              key={stage.number}
              stage={stage}
              index={index}
              ref={(el) => (itemsRef.current[index] = el)}
            />
          ))}
        </div>

        {/* ============================================================
           CLOSING STATEMENT
        ============================================================ */}
        <div className="mt-32 md:mt-40 pt-12 border-t border-white/[0.08] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <span className="font-mono text-[11px] tracking-[0.25em] text-[#666] uppercase">
            WE PROMOTE INDIA — THE PROCESS
          </span>
          <p className="text-[15px] font-light text-[#8A8A8A]">
            The launch is only the beginning. Built to keep moving.
          </p>
        </div>

      </div>
    </section>
  );
}

/* ============================================================
   INDIVIDUAL PROCESS STAGE ROW COMPONENT
============================================================ */

const ProcessStageItem = React.forwardRef(({ stage, index }, ref) => {
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className="border-t border-white/[0.12] pt-12 md:pt-16 group"
    >
      <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${isEven ? "" : "lg:grid-flow-dense"}`}>
        
        {/* TEXT COLUMN */}
        <div className={`lg:col-span-6 flex flex-col justify-center ${isEven ? "" : "lg:col-start-7"}`}>
          
          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono text-[13px] tracking-[0.2em] text-[#8A8A8A]">
              {stage.number}
            </span>
            <span className="w-8 h-[1px] bg-white/20" />
            <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-[#666]">
              {stage.subtitle}
            </span>
          </div>

          <h3 className="font-semibold tracking-tight text-[clamp(40px,5vw,72px)] leading-[1.05] text-[#F5F5F5] mb-6 group-hover:text-white transition-colors duration-300">
            {stage.title}
          </h3>

          <p className="text-[16px] md:text-[18px] font-light leading-relaxed text-[#8A8A8A] max-w-[42ch]">
            {stage.description}
          </p>

        </div>

        {/* IMAGE CONTAINER COLUMN */}
        <div className={`lg:col-span-6 flex items-center justify-center relative min-h-[340px] lg:min-h-[420px] bg-[#050505] border border-white/[0.08] rounded-[6px] overflow-hidden ${isEven ? "" : "lg:col-start-1"}`}>
          
          {/* Corner framing brackets */}
          <Corner className="left-3 top-3 z-20" />
          <Corner className="right-3 top-3 rotate-90 z-20" />
          <Corner className="bottom-3 left-3 -rotate-90 z-20" />
          <Corner className="bottom-3 right-3 rotate-180 z-20" />

          {/* Phase Image with smooth hover scaling using standard HTML img tag */}
          <div className="relative w-full h-full min-h-[340px] lg:min-h-[420px] overflow-hidden">
            <img
              src={stage.image}
              alt={stage.imageAlt}
              className="absolute inset-0 w-full h-full object-cover object-center grayscale contrast-125 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 ease-out"
            />
            {/* Cinematic dark overlay gradient for mood matching */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
          </div>

          {/* Stage identifier badge */}
          <div className="absolute bottom-6 left-6 font-mono text-[10px] uppercase tracking-[0.25em] text-[#8A8A8A] bg-[#000000]/70 px-3 py-1.5 backdrop-blur-md rounded-sm border border-white/10 z-20">
            {stage.tag}
          </div>

          <div className="absolute top-6 right-6 font-mono text-[10px] uppercase tracking-[0.25em] text-white/70 bg-[#000000]/60 px-2.5 py-1 backdrop-blur-md rounded-sm border border-white/10 z-20">
            STAGE 0{index + 1}
          </div>

        </div>

      </div>
    </div>
  );
});

ProcessStageItem.displayName = "ProcessStageItem";

/* ============================================================
   CORNER ACCENT HELPER
============================================================ */

function Corner({ className = "" }) {
  return (
    <svg
      viewBox="0 0 16 16"
      className={`absolute h-4 w-4 text-white/40 pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <path d="M1 1 H8 M1 1 V8" stroke="currentColor" strokeWidth="1" fill="none" />
    </svg>
  );
}
