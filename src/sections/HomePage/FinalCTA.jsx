"use client";

/**
 * FinalCTA.jsx
 * ---------------------------------------------------------------
 * Awwwards-level cinematic "Final CTA" section for We Promote India.
 *
 * DESIGN CONCEPT
 * Serves as the ultimate statement of the homepage journey. 
 * Features massive editorial clamp typography ("READY TO BE / IMPOSSIBLE / TO IGNORE?"),
 * subtle GSAP clip-path scroll reveals, a sophisticated hover-animated CTA button,
 * and Option D (a soft ambient backdrop spotlight) as the cinematic visual detail.
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
   ROOT COMPONENT
============================================================ */

export default function FinalCTA() {
  const sectionRef = useRef(null);
  const headlineRef = useRef(null);
  const contentRef = useRef(null);
  const reduceMotionRef = useRef(false);

  useLayoutEffect(() => {
    reduceMotionRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotionRef.current) return;

    const ctx = gsap.context(() => {
      // Cinematic clip-path / line-by-line reveal for headline words
      const lines = headlineRef.current.querySelectorAll(".cta-line");

      gsap.fromTo(
        lines,
        {
          opacity: 0,
          y: 80,
          clipPath: "inset(100% 0 0 0)",
        },
        {
          opacity: 1,
          y: 0,
          clipPath: "inset(0% 0 0% 0)",
          duration: 1.2,
          stagger: 0.12,
          ease: "power4.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
          },
        }
      );

      // Fade in supporting copy and actions
      gsap.fromTo(
        contentRef.current.children,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#070707] text-[#FAFAFA] min-h-[85vh] lg:min-h-[95vh] py-[120px] md:py-[160px] px-[6vw] flex flex-col justify-between overflow-hidden selection:bg-white selection:text-black"
    >
      {/* ============================================================
         CINEMATIC VISUAL DETAIL (Option D: Soft Ambient Spotlight)
      ============================================================ */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-white/[0.03] blur-[160px] pointer-events-none z-0"
        aria-hidden="true"
      />

      {/* Top spacing spacer */}
      <div className="w-full" />

      {/* ============================================================
         MAIN EDITORIAL CONTENT CONTAINER
      ============================================================ */}
      <div className="relative z-10 mx-auto max-w-[1400px] w-full flex flex-col items-center text-center my-auto">
        
        {/* Massive Editorial Headline */}
        <div ref={headlineRef} className="mb-12 md:mb-16">
          
          <h2 className="font-semibold tracking-[-0.06em] leading-[0.88] text-[clamp(52px,11vw,165px)] uppercase">
            
            <span className="cta-line block overflow-hidden pb-2">
              Ready to be
            </span>

            <span className="cta-line block overflow-hidden pb-2 text-white hover:tracking-[-0.04em] transition-all duration-500 cursor-default">
              Impossible
            </span>

            <span className="cta-line block overflow-hidden pb-2 text-white/90">
              to ignore?
            </span>

          </h2>

        </div>

        {/* Supporting Copy & Action Hub */}
        <div ref={contentRef} className="flex flex-col items-center gap-10 max-w-[480px] w-full">
          
          <p className="text-[16px] md:text-[18px] font-light leading-relaxed text-[#999999]">
            Let&apos;s build something people can&apos;t look away from.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full">
            
            {/* Primary CTA */}
            <a
              href="/contact"
              className="group relative inline-flex items-center justify-between sm:justify-center gap-8 w-full sm:w-auto px-9 py-5 rounded-[4px] border border-white/20 bg-white/[0.03] text-white hover:border-white hover:bg-white hover:text-black transition-all duration-300 ease-out cursor-pointer shadow-2xl"
            >
              <span className="font-mono text-[13px] tracking-[0.2em] uppercase font-medium">
                Start a Project
              </span>
              <span className="transform group-hover:translate-x-1.5 transition-transform duration-300 ease-out text-lg">
                →
              </span>
            </a>

            {/* Secondary Action */}
            <a
              href="/work"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 text-[14px] font-mono tracking-[0.15em] uppercase text-[#888888] hover:text-white transition-colors duration-300 cursor-pointer"
            >
              View our work →
            </a>

          </div>

        </div>

      </div>

      {/* ============================================================
         SECTION FOOTER ACCENT
      ============================================================ */}
      <div className="relative z-10 mx-auto max-w-[1400px] w-full pt-16 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-white/[0.08]">
        <span className="font-mono text-[11px] tracking-[0.25em] text-[#737373] uppercase">
          WE PROMOTE INDIA — 2026
        </span>
        <span className="font-mono text-[11px] tracking-[0.25em] text-[#737373] uppercase">
          ALL RIGHTS RESERVED
        </span>
      </div>

    </section>
  );
}
