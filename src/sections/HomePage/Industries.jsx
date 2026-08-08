"use client";

/**
 * Industries.jsx
 * ---------------------------------------------------------------
 * Awwwards-level cinematic "Industry Index" section for We Promote India.
 *
 * DESIGN CONCEPT
 * Replaces standard grid cards with an editorial, high-end typography 
 * index. Features sticky left-column metadata and a fluid, butter-smooth 
 * GSAP quickTo-powered floating cursor preview image system.
 *
 * Stack: React + Tailwind CSS + GSAP (core + ScrollTrigger)
 * Install: npm i gsap
 * ---------------------------------------------------------------
 */

import React, { useLayoutEffect, useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/* ============================================================
   INDUSTRY DATA 
   (Centralized dataset - easily maintainable and replaceable)
============================================================ */

const INDUSTRIES = [
  {
    number: "01",
    title: "Healthcare",
    description: "Building clarity and trust in complex healthcare markets.",
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=1600&auto=format&fit=crop",
    imageAlt: "Healthcare industry project editorial preview",
  },
  {
    number: "02",
    title: "Real Estate",
    description: "Creating digital experiences for properties and places.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
    imageAlt: "Real estate industry project editorial preview",
  },
  {
    number: "03",
    title: "Hospitality",
    description: "Turning spaces and experiences into memorable brands.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1600&auto=format&fit=crop",
    imageAlt: "Hospitality industry project editorial preview",
  },
  {
    number: "04",
    title: "Education",
    description: "Making institutions and ideas easier to discover and connect with.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1600&auto=format&fit=crop",
    imageAlt: "Education industry project editorial preview",
  },
  {
    number: "05",
    title: "Retail & D2C",
    description: "Building brands that move from attention to action.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1600&auto=format&fit=crop",
    imageAlt: "Retail & D2C industry project editorial preview",
  },
  {
    number: "06",
    title: "Technology",
    description: "Making complex products easier to understand and adopt.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop",
    imageAlt: "Technology industry project editorial preview",
  },
  {
    number: "07",
    title: "Professional Services",
    description: "Creating credible digital identities for expertise-led businesses.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop",
    imageAlt: "Professional services industry project editorial preview",
  },
  {
    number: "08",
    title: "And More",
    description: "If there is an ambitious idea, we want to hear it.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop",
    imageAlt: "Ambitious ideas project editorial preview",
  },
];

/* ============================================================
   ROOT COMPONENT
============================================================ */

export default function Industries() {
  const sectionRef = useRef(null);
  const listRef = useRef(null);
  const floatingImageRef = useRef(null);
  
  const [activeHoverIndex, setActiveHoverIndex] = useState(null);
  const [isImageVisible, setIsImageVisible] = useState(false);
  const reduceMotionRef = useRef(false);

  // GSAP quickTo setters for high-performance fluid mouse tracking
  const xSetter = useRef(null);
  const ySetter = useRef(null);

  useLayoutEffect(() => {
    reduceMotionRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!reduceMotionRef.current && floatingImageRef.current) {
      // Initialize zero-lag buttery smooth quickTo animation controllers
      xSetter.current = gsap.quickTo(floatingImageRef.current, "x", { duration: 0.4, ease: "power3.out" });
      ySetter.current = gsap.quickTo(floatingImageRef.current, "y", { duration: 0.4, ease: "power3.out" });
    }

    if (reduceMotionRef.current) return;

    const ctx = gsap.context(() => {
      // Entry animation for section header elements
      gsap.fromTo(
        sectionRef.current.querySelectorAll(".animate-header"),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );

      // Staggered entry for industry list items
      gsap.fromTo(
        listRef.current.querySelectorAll(".industry-item-row"),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: listRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Window mousemove handler using window-relative client coordinates for perfect cursor synchronization
  useEffect(() => {
    if (reduceMotionRef.current) return;

    const handleMouseMove = (e) => {
      if (!isImageVisible || !xSetter.current || !ySetter.current) return;
      // Offset slightly to the bottom-right of the cursor pointer
      xSetter.current(e.clientX + 24);
      ySetter.current(e.clientY - 90);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isImageVisible]);

  const handleMouseEnter = (index) => {
    if (reduceMotionRef.current) return;
    setActiveHoverIndex(index);
    setIsImageVisible(true);

    if (floatingImageRef.current) {
      gsap.to(floatingImageRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  };

  const handleMouseLeave = () => {
    if (reduceMotionRef.current) return;
    setActiveHoverIndex(null);
    setIsImageVisible(false);

    if (floatingImageRef.current) {
      gsap.to(floatingImageRef.current, {
        opacity: 0,
        scale: 0.95,
        duration: 0.25,
        ease: "power2.in",
      });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#070707] text-[#FAFAFA] py-[140px] md:py-[180px] px-[6vw] overflow-hidden selection:bg-white selection:text-black"
    >
      <div className="mx-auto max-w-[1400px] w-full">
        
        {/* ============================================================
           DESKTOP TWO-COLUMN EDITORIAL LAYOUT & MOBILE STACK
        ============================================================ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
          
          {/* LEFT COLUMN: Sticky Editorial Section Intro */}
          <div className="lg:col-span-5 lg:sticky lg:top-[140px]">
            <div className="animate-header">
              <span className="inline-flex items-center gap-3 text-[11px] font-mono tracking-[0.2em] uppercase text-[#888888] mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                09 / INDUSTRIES
              </span>
            </div>

            <div className="animate-header">
              <h2 className="font-semibold leading-[0.96] tracking-tight text-[clamp(40px,5vw,72px)] text-[#FAFAFA] mb-8">
                Different industries.
                <br />
                One way
                <br />
                of thinking.
              </h2>
            </div>

            <div className="animate-header">
              <p className="text-[15px] md:text-[16px] font-light leading-relaxed text-[#999999] max-w-[34ch]">
                We bring creative, digital and growth thinking to businesses across industries.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN: Editorial Industry Index List */}
          <div ref={listRef} className="lg:col-span-7 flex flex-col">
            {INDUSTRIES.map((item, index) => {
              const isActive = activeHoverIndex === index;
              const isAnyHovered = activeHoverIndex !== null;

              // Calculate dimming state for non-hovered items
              let opacityClass = "opacity-80";
              if (isAnyHovered) {
                opacityClass = isActive ? "opacity-100" : "opacity-35";
              }

              return (
                <div
                  key={item.number}
                  className={`industry-item-row group relative border-t border-white/[0.08] transition-opacity duration-300 ${opacityClass}`}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="py-7 md:py-9 flex flex-col justify-between cursor-pointer">
                    
                    {/* Top Row: Number, Title, and Arrow */}
                    <div className="flex items-center justify-between gap-4">
                      
                      <div className="flex items-baseline gap-6 md:gap-12">
                        <span className="font-mono text-[11px] md:text-[12px] tracking-[0.2em] uppercase text-[#737373] group-hover:text-white transition-colors duration-300">
                          {item.number}
                        </span>

                        <h3 className="font-normal tracking-[-0.045em] text-[clamp(32px,4.2vw,64px)] text-[#FAFAFA] group-hover:translate-x-2 transition-transform duration-300 ease-out">
                          {item.title}
                        </h3>
                      </div>

                      {/* Interactive Reveal Arrow */}
                      <span className="text-[20px] md:text-[24px] font-light text-white/0 group-hover:text-white group-hover:translate-x-0 -translate-x-3 transition-all duration-300 ease-out">
                        →
                      </span>

                    </div>

                    {/* Bottom Row / Accordion Description: Visible on hover (desktop) or standard block (mobile) */}
                    <div 
                      className={`grid transition-all duration-300 ease-out overflow-hidden ${
                        isActive ? "grid-rows-[1fr] opacity-100 mt-3 md:mt-4" : "grid-rows-[0fr] opacity-0 mt-0"
                      } lg:grid-rows-[1fr] lg:opacity-100 lg:mt-3`}
                    >
                      <div className="overflow-hidden">
                        <p className="text-[14px] md:text-[15px] font-light text-[#999999] pl-[calc(11px+1.5rem)] md:pl-[calc(12px+3rem)] max-w-[46ch]">
                          {item.description}
                        </p>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
            
            {/* Bottom border cap for final item */}
            <div className="border-t border-white/[0.08]" />
          </div>

        </div>

      </div>

      {/* ============================================================
         FLOATING CURSOR IMAGE PREVIEW (Desktop Only)
      ============================================================ */}
      <div
        ref={floatingImageRef}
        className="hidden lg:block pointer-events-none fixed top-0 left-0 z-50 w-[240px] h-[160px] rounded-[6px] overflow-hidden border border-white/20 shadow-2xl bg-[#111111] opacity-0 scale-95 will-change-transform"
      >
        {activeHoverIndex !== null && (
          <img
            src={INDUSTRIES[activeHoverIndex].image}
            alt={INDUSTRIES[activeHoverIndex].imageAlt}
            className="w-full h-full object-cover object-center grayscale contrast-110"
            loading="lazy"
          />
        )}
      </div>
    </section>
  );
}
