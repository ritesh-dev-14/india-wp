"use client";

/**
 * Results.jsx
 * ---------------------------------------------------------------
 * Awwwards-level minimal editorial section for We Promote India.
 *
 * DESIGN CONCEPT
 * Follows "The We Promote Difference" to provide simple, credible proof.
 * Uses a Swiss editorial layout with massive typography, thin horizontal 
 * rules, staggered GSAP ScrollTrigger number/counter reveals, and subtle hover interactions.
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
   RESULTS DATA
============================================================ */

const RESULTS = [
  {
    number: "50+",
    numericValue: 50,
    suffix: "+",
    label: "BRANDS",
    description: "Partners and companies elevated through strategic design and execution.",
  },
  {
    number: "100+",
    numericValue: 100,
    suffix: "+",
    label: "PROJECTS",
    description: "Digital platforms, campaigns, and experiences shipped globally.",
  },
  {
    number: "12+",
    numericValue: 12,
    suffix: "+",
    label: "INDUSTRIES",
    description: "From luxury e-commerce and fintech to deep tech and hospitality.",
  },
  {
    number: "3+",
    numericValue: 3,
    suffix: "+",
    label: "YEARS",
    description: "Of relentless pursuit of digital excellence and craft.",
  },
  {
    number: "∞",
    numericValue: null,
    suffix: "",
    label: "IDEAS",
    description: "Uncompromised imagination built to move businesses forward.",
  },
];

/* ============================================================
   ROOT COMPONENT
============================================================ */

export default function Results() {
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

      // Intro animation
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

      // Result items sequence animation
      itemsRef.current.forEach((el) => {
        if (!el) return;
        const numberEl = el.querySelector("[data-result-number]");
        const numericVal = el.getAttribute("data-numeric-value");
        const suffix = el.getAttribute("data-suffix") || "";

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });

        // Entrance animation for the entire item block
        tl.fromTo(
          el,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
        );

        // Counter animation if numeric
        if (numericVal !== "null" && numberEl) {
          const targetNum = parseInt(numericVal, 10);
          const obj = { val: 0 };

          tl.to(
            obj,
            {
              val: targetNum,
              duration: 1.5,
              ease: "power3.out",
              onUpdate: () => {
                numberEl.textContent = Math.floor(obj.val) + suffix;
              },
            },
            0
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#080808] text-[#F5F5F5] py-[140px] md:py-[180px] px-[6vw] overflow-hidden selection:bg-white/20"
    >
      <div className="mx-auto max-w-[1400px] w-full">
        
        {/* ============================================================
           RESULTS INTRO (Desktop: Left-aligned split / Mobile: Stacked)
        ============================================================ */}
        <div ref={introRef} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-24 md:mb-32 items-end">
          
          <div className="lg:col-span-7">
            {/* Eyebrow */}
            <span
              data-intro-animate
              className="inline-flex items-center gap-3 text-[11px] font-mono tracking-[0.32em] uppercase text-[#8A8A8A] mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white/60"></span>
              06 / RESULTS
            </span>

            {/* Main Heading */}
            <h2
              data-intro-animate
              className="font-semibold leading-[0.94] tracking-tight text-[clamp(48px,7vw,100px)] text-[#F5F5F5]"
            >
              Results,
              <br />
              not just
              <br />
              deliverables.
            </h2>
          </div>

          <div className="lg:col-span-5 pb-2">
            <p
              data-intro-animate
              className="text-[18px] md:text-[20px] font-light leading-relaxed text-[#8A8A8A] max-w-[36ch]"
            >
              &ldquo;We measure success by what happens after the work goes live.&rdquo;
            </p>
          </div>

        </div>

        {/* ============================================================
           RESULTS EDITORIAL GRID
        ============================================================ */}
        <div className="flex flex-col">
          {RESULTS.map((item, index) => (
            <ResultItem
              key={item.label}
              item={item}
              index={index}
              ref={(el) => (itemsRef.current[index] = el)}
            />
          ))}
        </div>

        {/* ============================================================
           CLOSING SUBTLE STATEMENT
        ============================================================ */}
        <div className="mt-28 md:mt-36 pt-12 border-t border-white/[0.08] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <span className="font-mono text-[11px] tracking-[0.25em] text-[#666] uppercase">
            WE PROMOTE INDIA — PROOF OF IMPACT
          </span>
          <p className="text-[15px] font-light text-[#8A8A8A]">
            Numbers tell part of the story. The work tells the rest.
          </p>
        </div>

      </div>
    </section>
  );
}

/* ============================================================
   INDIVIDUAL RESULT ITEM COMPONENT
============================================================ */

const ResultItem = React.forwardRef(({ item, index }, ref) => {
  const [isHovered, setIsHovered] = useState(false);

  // Alternate layout alignment for Awwwards editorial rhythm
  // Even items push label/description to the right side on desktop
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      data-numeric-value={item.numericValue !== null ? item.numericValue : "null"}
      data-suffix={item.suffix}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative border-t border-white/[0.12] py-12 md:py-16 transition-colors duration-300"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* NUMBER COLUMN */}
        <div className={`lg:col-span-7 flex items-baseline gap-6 md:gap-12 ${isEven ? "" : "lg:order-2 lg:justify-end"}`}>
          <span className="font-mono text-[13px] tracking-[0.2em] text-[#666]">
            0{index + 1}
          </span>
          
          <div
            className="transition-transform duration-500 ease-out"
            style={{
              transform: isHovered ? "translateY(-6px)" : "translateY(0px)",
            }}
          >
            <span
              data-result-number
              className="font-bold tracking-[-0.06em] text-[clamp(64px,11vw,160px)] leading-none text-[#F5F5F5] block select-none transition-colors duration-300 group-hover:text-white"
            >
              {item.number}
            </span>
          </div>
        </div>

        {/* LABEL & DESCRIPTION COLUMN */}
        <div className={`lg:col-span-5 flex flex-col justify-center ${isEven ? "" : "lg:order-1"}`}>
          <div className="flex items-center justify-between mb-3">
            <span
              className="font-mono text-[12px] md:text-[13px] tracking-[0.2em] uppercase transition-colors duration-300"
              style={{
                color: isHovered ? "#F5F5F5" : "#8A8A8A",
              }}
            >
              {item.label}
            </span>

            {/* Hover arrow indicator */}
            <span
              className="font-mono text-sm text-white transition-all duration-300"
              style={{
                opacity: isHovered ? 1 : 0,
                transform: isHovered ? "translateX(0px)" : "translateX(-10px)",
              }}
            >
              →
            </span>
          </div>

          <p className="text-[14px] md:text-[15px] font-light leading-relaxed text-[#737373] max-w-[34ch] transition-colors duration-300 group-hover:text-[#999]">
            {item.description}
          </p>
        </div>

      </div>

      {/* Bottom subtle baseline highlight on hover */}
      <div
        className="absolute bottom-0 left-0 h-[1px] bg-white/20 transition-all duration-500 w-full"
        style={{
          opacity: isHovered ? 1 : 0.2,
          transform: isHovered ? "scaleX(1)" : "scaleX(0.98)",
          transformOrigin: "left",
        }}
      />
    </div>
  );
});

ResultItem.displayName = "ResultItem";
