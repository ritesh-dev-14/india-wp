"use client";

/**
 * TheDifference.jsx
 * ---------------------------------------------------------------
 * Awwwards-level cinematic pinned section for We Promote.
 *
 * DESIGN CONCEPT
 * Explores "How We Think" rather than what is sold. Combines a 
 * 200vh pinned GSAP ScrollTrigger timeline, a split-screen editorial 
 * layout, progressive manifesto reveals, and a reactive image visual canvas 
 * that metamorphoses across the four core agency pillars:
 * Strategy -> Creativity -> Technology -> Growth.
 *
 * Stack: React + Tailwind CSS + GSAP (core + ScrollTrigger)
 * Install: npm i gsap
 * ---------------------------------------------------------------
 */

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/* ============================================================
   PRINCIPLES DATA & CURATED EDITORIAL IMAGES
============================================================ */

const PRINCIPLES = [
  {
    number: "01",
    title: "Strategy",
    description: "Before we make anything, we understand why it needs to exist.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1600&auto=format&fit=crop",
  },
  {
    number: "02",
    title: "Creativity",
    description: "Ideas that give brands a distinctive voice, visual language and presence.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
  },
  {
    number: "03",
    title: "Technology",
    description: "Technology that turns ideas into fast, useful and memorable experiences.",
    image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=1600&auto=format&fit=crop",
  },
  {
    number: "04",
    title: "Growth",
    description: "Everything we create is built to move the business forward.",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1600&auto=format&fit=crop",
  },
];

/* ============================================================
   ROOT COMPONENT
============================================================ */

export default function TheDifference() {
  const sectionRef = useRef(null);
  const pinContainerRef = useRef(null);
  const manifestoRef = useRef(null);
  
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const reduceMotionRef = useRef(false);

  /* Pinned ScrollTrigger setup & progressive reveal timeline */
  useLayoutEffect(() => {
    reduceMotionRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotionRef.current) return;

    const ctx = gsap.context(() => {
      const section = sectionRef.current;
      const manifesto = manifestoRef.current;

      // 200vh pinned timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=200%",
          pin: true,
          scrub: 0.8,
          anticipatePin: 1,
        },
      });

      // Phase 1: Manifesto text reveal
      tl.fromTo(
        manifesto.querySelectorAll("[data-manifesto-line]"),
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.25, stagger: 0.1 },
        0.05
      );

      // Phase 2: Progress through principles via scroll thresholds
      tl.to(
        {},
        {
          duration: 0.7,
          onUpdate: function () {
            const progress = this.progress();
            // Map 0 -> 1 progress across 4 indices (0, 1, 2, 3)
            let current = Math.floor(progress * 4);
            if (current > 3) current = 3;
            setActiveIndex(current);
          },
        },
        0.3
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#000000] text-[#F5F5F5] overflow-hidden selection:bg-white/20"
    >
      {/* Desktop Pinned Container / Mobile Flow Container */}
      <div
        ref={pinContainerRef}
        className="relative min-h-screen lg:h-screen w-full flex flex-col justify-center py-[12vh] lg:py-0"
      >
        <div className="mx-auto max-w-[1400px] w-full px-[6vw]">
          
          {/* ============================================================
             DESKTOP SPLIT LAYOUT (LEFT 45% text, RIGHT 55% image visual)
          ============================================================ */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* LEFT COLUMN: Eyebrow + Title + Manifesto + Principles List */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              
              {/* Eyebrow */}
              <span className="inline-flex items-center gap-3 text-[11px] font-mono tracking-[0.32em] uppercase text-[#8A8A8A] mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-white/60"></span>
                05 / THE DIFFERENCE
              </span>

              {/* Main Headline */}
              <h2 className="font-semibold leading-[0.92] tracking-tight text-[clamp(48px,7vw,110px)] mb-8">
                THE WE
                <br />
                PROMOTE
                <br />
                DIFFERENCE.
              </h2>

              {/* Manifesto Statement */}
              <div ref={manifestoRef} className="mb-12 max-w-[42ch]">
                <p data-manifesto-line className="text-[17px] md:text-[19px] font-light leading-relaxed text-[#F5F5F5] mb-2">
                  &ldquo;We don&apos;t work in silos.
                </p>
                <p data-manifesto-line className="text-[17px] md:text-[19px] font-light leading-relaxed text-[#8A8A8A]">
                  We build the whole picture.&rdquo;
                </p>
              </div>

              {/* Four Principles Sequence */}
              <div className="flex flex-col gap-4 border-t border-white/[0.12] pt-6">
                {PRINCIPLES.map((principle, index) => {
                  const isActive = activeIndex === index;
                  const isHovered = hoveredIndex === index;

                  return (
                    <div
                      key={principle.number}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      className="group relative cursor-pointer py-3 transition-all duration-300"
                    >
                      <div className="flex items-baseline justify-between">
                        <div
                          className="flex items-baseline gap-4 transition-transform duration-300"
                          style={{
                            transform: isHovered ? "translateX(10px)" : "translateX(0px)",
                          }}
                        >
                          <span
                            className="font-mono text-[12px] tracking-[0.2em] transition-colors duration-300"
                            style={{
                              color: isActive ? "#F5F5F5" : "#8A8A8A",
                              opacity: isActive ? 1 : 0.6,
                            }}
                          >
                            {principle.number}
                          </span>

                          <h3
                            className="font-semibold tracking-tight transition-all duration-300 text-[clamp(28px,3.5vw,46px)]"
                            style={{
                              color: isActive ? "#F5F5F5" : "#666",
                              opacity: isActive ? 1 : 0.4,
                            }}
                          >
                            {principle.title}
                          </h3>
                        </div>

                        {/* Micro-arrow indicator */}
                        <span
                          className="font-mono text-sm transition-all duration-300 text-white"
                          style={{
                            opacity: isHovered || isActive ? 1 : 0,
                            transform: isHovered ? "translateX(0px)" : "translateX(-8px)",
                          }}
                        >
                          →
                        </span>
                      </div>

                      {/* Expandable description when active */}
                      <div
                        className="overflow-hidden transition-all duration-500 ease-out"
                        style={{
                          maxHeight: isActive ? "120px" : "0px",
                          opacity: isActive ? 1 : 0,
                          marginTop: isActive ? "8px" : "0px",
                        }}
                      >
                        <p className="max-w-[38ch] text-[14px] leading-relaxed text-[#8A8A8A] pl-10">
                          {principle.description}
                        </p>
                      </div>

                      {/* Thin expanding bottom border line on hover/active */}
                      <div
                        className="absolute bottom-0 left-0 h-[1px] bg-white/20 transition-all duration-500 w-full"
                        style={{
                          opacity: isActive ? 1 : 0.2,
                          transform: isActive || isHovered ? "scaleX(1)" : "scaleX(0.96)",
                          transformOrigin: "left",
                        }}
                      />
                    </div>
                  );
                })}
              </div>

            </div>

            {/* RIGHT COLUMN: The Metamorphosing Image Visual Canvas */}
            <div className="lg:col-span-6 flex items-center justify-center relative min-h-[420px] lg:min-h-[580px] bg-[#050505] border border-white/[0.08] rounded-[6px] overflow-hidden p-8">
              
              {/* Corner framing brackets */}
              <Corner className="left-3 top-3" />
              <Corner className="right-3 top-3 rotate-90" />
              <Corner className="bottom-3 left-3 -rotate-90" />
              <Corner className="bottom-3 right-3 rotate-180" />

              {/* Dynamic Image Canvas State Render */}
              <div className="w-full h-full flex items-center justify-center relative">
                <ImageVisualCanvas activeIndex={activeIndex} />
              </div>

              {/* Floating Active Stage Badge */}
              <div className="absolute bottom-6 left-6 font-mono text-[10px] uppercase tracking-[0.25em] text-[#8A8A8A] bg-[#000000]/60 px-3 py-1.5 backdrop-blur-md rounded-sm border border-white/10 z-20">
                STAGE 0{activeIndex + 1} // {PRINCIPLES[activeIndex].title.toUpperCase()}
              </div>

              <div className="absolute top-6 right-6 font-mono text-[10px] uppercase tracking-[0.25em] text-[#555] z-20">
                WE PROMOTE SYSTEM v2.6
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

/* ============================================================
   METAMORPHOSING IMAGE VISUAL CANVAS COMPONENT
============================================================ */

function ImageVisualCanvas({ activeIndex }) {
  return (
    <div className="relative w-full h-[380px] lg:h-[480px] rounded-[4px] overflow-hidden">
      {PRINCIPLES.map((principle, index) => {
        const isActive = activeIndex === index;

        return (
          <div
            key={principle.number}
            className="absolute inset-0 transition-all duration-1000 ease-in-out"
            style={{
              opacity: isActive ? 1 : 0,
              transform: isActive ? "scale(1)" : "scale(1.05)",
              pointerEvents: isActive ? "auto" : "none",
            }}
          >
            {/* Cinematic Overlay Gradient for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-black/30 z-10 opacity-70" />

            <img
              src={principle.image}
              alt={principle.title}
              className="w-full h-full object-cover filter grayscale contrast-125 transition-transform duration-1000 ease-out"
              loading="lazy"
            />
          </div>
        );
      })}
    </div>
  );
}

/* ============================================================
   CORNER ACCENT HELPER
============================================================ */

function Corner({ className = "" }) {
  return (
    <svg
      viewBox="0 0 16 16"
      className={`absolute h-4 w-4 text-white/30 ${className}`}
      aria-hidden="true"
    >
      <path d="M1 1 H8 M1 1 V8" stroke="currentColor" strokeWidth="1" fill="none" />
    </svg>
  );
}
