"use client";

/**
 * WhatWeCreate.jsx
 * ---------------------------------------------------------------
 * Minimal editorial services section with image reveals.
 *
 * DESIGN CONCEPT
 * Typography and whitespace drive the layout. The right-hand list 
 * acts as an index. On hover (desktop) or scroll (mobile), a sleek 
 * image frame reveals the associated visual context. The floating 
 * preview tracks the mouse using GSAP quickTo for zero-latency 
 * movement, while keeping a strict, technical outer chrome.
 *
 * Stack: React + Tailwind CSS + GSAP (core + ScrollTrigger)
 * Install: npm i gsap
 * ---------------------------------------------------------------
 */

import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/* ============================================================
   DATA — Updated with high-res Unsplash placeholders
============================================================ */

const SERVICES = [
  {
    number: "01",
    title: "Web Development",
    description: "We design and build digital experiences made to perform.",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D",
  },
  {
    number: "02",
    title: "Brand Identity",
    description: "Distinctive identities built to make brands impossible to overlook.",
    image: "https://images.unsplash.com/photo-1493612276216-ee3925520721?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YnJhbmQlMjBpZGVudGl0eXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    number: "03",
    title: "Performance Marketing",
    description: "Campaigns engineered around attention, acquisition and measurable growth.",
    image: "https://plus.unsplash.com/premium_photo-1726804880693-8fcdd773ce80?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBlcmZvcm1hbmNlJTIwbWFya2V0aW5nfGVufDB8fDB8fHww",
  },
  {
    number: "04",
    title: "Social Media",
    description: "Content systems that turn audiences into active communities.",
    image: "https://plus.unsplash.com/premium_vector-1716988352248-db21bc245a2f?w=352&dpr=2&h=367&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
  },
  {
    number: "05",
    title: "Video & Content",
    description: "Visual stories designed to capture attention and create connection.",
    image: "https://images.unsplash.com/photo-1611784728558-6c7d9b409cdf?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dmlkZW8lMjBhbmQlMjBjb250ZW50fGVufDB8fDB8fHww",
  },
  {
    number: "06",
    title: "AI & Automation",
    description: "Smarter systems that reduce friction and help businesses move faster.",
    image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

/* ============================================================
   ROOT COMPONENT
============================================================ */

export default function WhatWeCreate() {
  const sectionRef = useRef(null);
  const headRef = useRef(null);
  const rowRefs = useRef([]);
  const previewRef = useRef(null);

  const reduceMotionRef = useRef(false);
  const quick = useRef({ x: null, y: null, rot: null });

  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState(null);
  const [previewVisible, setPreviewVisible] = useState(false);

  const displayIndex = hoverIndex ?? activeIndex;

  /* Scroll reveal + active-row detection */
  useLayoutEffect(() => {
    reduceMotionRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      const rows = rowRefs.current.filter(Boolean);
      const revealEls = headRef.current ? headRef.current.querySelectorAll("[data-reveal]") : [];

      if (reduceMotionRef.current) {
        gsap.set(revealEls, { opacity: 1, y: 0 });
        gsap.set(rows, { opacity: 1, y: 0 });
      } else {
        gsap.set(revealEls, { opacity: 0, y: 22 });
        gsap.set(rows, { opacity: 0, y: 28 });

        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top 78%",
          once: true,
          onEnter: () => {
            gsap.to(revealEls, {
              opacity: 1,
              y: 0,
              duration: 0.9,
              ease: "power3.out",
              stagger: 0.08,
            });
            gsap.to(rows, {
              opacity: 1,
              y: 0,
              duration: 0.75,
              ease: "power3.out",
              stagger: 0.07,
              delay: 0.15,
            });
          },
        });
      }

      rows.forEach((row, i) => {
        ScrollTrigger.create({
          trigger: row,
          start: "top center",
          end: "bottom center",
          onEnter: () => setActiveIndex(i),
          onEnterBack: () => setActiveIndex(i),
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  /* quickTo setters for the floating image preview */
  useEffect(() => {
    if (!previewRef.current || reduceMotionRef.current) return;
    
    // Set the base vertical centering natively via GSAP so it doesn't conflict with inline scales
    gsap.set(previewRef.current, { yPercent: -50, top: "50%" });

    quick.current.x = gsap.quickTo(previewRef.current, "x", { duration: 0.5, ease: "power3.out" });
    quick.current.y = gsap.quickTo(previewRef.current, "y", { duration: 0.5, ease: "power3.out" });
    quick.current.rot = gsap.quickTo(previewRef.current, "rotate", { duration: 0.6, ease: "power3.out" });
  }, []);

  const handleRowEnter = useCallback((i) => {
    if (window.innerWidth < 1024) return;
    setHoverIndex(i);
    setPreviewVisible(true);
  }, []);

  const handleRowMove = useCallback((e) => {
    if (window.innerWidth < 1024 || reduceMotionRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const py = (e.clientY - rect.top) / rect.height;
    const mx = e.clientX / window.innerWidth;
    
    quick.current.y?.((py - 0.5) * 40);
    quick.current.rot?.((mx - 0.5) * 10);
  }, []);

  const handleRowLeave = useCallback(() => {
    setHoverIndex(null);
    setPreviewVisible(false);
    quick.current.y?.(0);
    quick.current.rot?.(0);
  }, []);

  return (
    // Removed `overflow-hidden` to prevent the parent section from clipping the fixed floating image
    <section ref={sectionRef} className="relative bg-[#000000] text-[#F5F5F5]">
      <div className="relative mx-auto max-w-[1400px] px-[6vw] py-[13vh]">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,420px)_1fr] gap-x-20 gap-y-16">
          
          {/* ============ LEFT — sticky heading ============ */}
          <div ref={headRef} className="lg:sticky lg:top-[16vh] lg:self-start z-10">
            <span
              data-reveal
              className="block text-[11px] font-medium tracking-[0.32em] uppercase text-[#8A8A8A] mb-8"
            >
              What We Create
            </span>

            <h2
              data-reveal
              className="font-semibold leading-[0.98] tracking-tight text-[clamp(44px,7.2vw,120px)]"
            >
              Built to
              <br />
              move brands.
            </h2>

            <p data-reveal className="mt-8 max-w-[38ch] text-[15px] leading-relaxed text-[#8A8A8A]">
              Strategy, creativity and technology — working together to turn
              attention into meaningful growth.
            </p>
          </div>

          {/* ============ RIGHT — service index ============ */}
          <div className="relative border-t border-white/[0.12] z-20">
            {SERVICES.map((service, i) => {
              const isActive = i === displayIndex;
              return (
                <button
                  key={service.number}
                  ref={(el) => (rowRefs.current[i] = el)}
                  type="button"
                  onMouseEnter={() => handleRowEnter(i)}
                  onMouseMove={handleRowMove}
                  onMouseLeave={handleRowLeave}
                  onFocus={() => handleRowEnter(i)}
                  onBlur={handleRowLeave}
                  className="group relative flex w-full items-baseline gap-6 border-b border-white/[0.12] py-9 text-left transition-opacity duration-500 focus:outline-none"
                  style={{ opacity: isActive ? 1 : 0.4 }}
                >
                  <span
                    className="w-9 flex-none font-mono text-[12px] tabular-nums transition-colors duration-500"
                    style={{ color: isActive ? "#F5F5F5" : "#8A8A8A" }}
                  >
                    {service.number}
                  </span>

                  <span className="flex-1 min-w-0">
                    <span
                      className="block font-semibold tracking-tight transition-transform duration-500 ease-out text-[clamp(28px,3.4vw,48px)] group-hover:translate-x-3"
                      style={{ transform: isActive ? "translateX(8px)" : undefined }}
                    >
                      {service.title}
                    </span>
                    <span
                      className="mt-2 block max-w-[40ch] text-[13.5px] leading-relaxed text-[#8A8A8A] transition-opacity duration-500"
                      style={{ opacity: isActive ? 1 : 0 }}
                    >
                      {service.description}
                    </span>

                    {/* mobile-only inline image frame, shown for the active row */}
                    <span
                      className="mt-6 block w-full max-w-[320px] transition-all duration-500 lg:hidden overflow-hidden"
                      style={{ 
                        opacity: isActive ? 1 : 0,
                        maxHeight: isActive ? "180px" : "0px",
                        marginTop: isActive ? "24px" : "0px"
                      }}
                      aria-hidden="true"
                    >
                      <div className="h-[180px]">
                        <PreviewFrame number={service.number} title={service.title} imgSrc={service.image} />
                      </div>
                    </span>
                  </span>

                  <span
                    className="flex-none font-mono text-xl transition-transform duration-500 ease-out group-hover:translate-x-2"
                    style={{ color: isActive ? "#F5F5F5" : "#8A8A8A" }}
                  >
                    →
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ============ Floating Image Preview — desktop only ============ */}
      <div
        ref={previewRef}
        className="pointer-events-none fixed right-[8vw] z-50 hidden lg:block"
        style={{ width: 440, height: "min(560px, 70vh)" }}
      >
        {/* Inner wrapper separates the GSAP tracking from the CSS scale animation */}
        <div
          className="relative h-full w-full origin-center"
          style={{
            opacity: previewVisible ? 1 : 0,
            transform: previewVisible ? "scale(1)" : "scale(0.92)",
            transition: "opacity 0.4s ease, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          {SERVICES.map((service, i) => (
            <div
              key={service.number}
              className="absolute inset-0 transition-opacity duration-500 ease-in-out"
              style={{ opacity: i === displayIndex ? 1 : 0 }}
            >
              <PreviewFrame 
                number={service.number} 
                title={service.title} 
                imgSrc={service.image}
                large 
                isActive={i === displayIndex}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   PREVIEW FRAME — Structural chrome framing the images
============================================================ */

function PreviewFrame({ number, title, imgSrc, large = false, isActive = false }) {
  return (
    <div className="relative h-full w-full border border-white/[0.12] bg-[#050505] overflow-hidden group">
      {/* corner ticks */}
      <Corner className="left-0 top-0 z-10" />
      <Corner className="right-0 top-0 rotate-90 z-10" />
      <Corner className="bottom-0 left-0 -rotate-90 z-10" />
      <Corner className="bottom-0 right-0 rotate-180 z-10" />

      {/* Image container with scale effect */}
      <div className="absolute inset-[1px] overflow-hidden">
        <div className="absolute inset-0 bg-black/20 z-10 transition-opacity duration-500 group-hover:opacity-0" />
        <img 
          src={imgSrc} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out opacity-90"
          style={{ 
            transform: isActive ? "scale(1.05)" : "scale(1)",
            filter: "grayscale(20%) contrast(1.1)"
          }}
        />
      </div>

      {/* Technical Labels */}
      <div
        className={[
          "absolute left-4 top-4 font-mono uppercase tracking-[0.2em] text-white/80 z-20 bg-black/40 px-2 py-1 backdrop-blur-sm rounded-sm",
          large ? "text-[10px]" : "text-[9px]",
        ].join(" ")}
      >
        FIG. {number}
      </div>
      <div
        className={[
          "absolute bottom-4 right-4 font-mono uppercase tracking-[0.2em] text-white/80 z-20 bg-black/40 px-2 py-1 backdrop-blur-sm rounded-sm",
          large ? "text-[10px]" : "text-[9px]",
        ].join(" ")}
      >
        {title}
      </div>
    </div>
  );
}

function Corner({ className = "" }) {
  return (
    <svg
      viewBox="0 0 16 16"
      className={`absolute h-4 w-4 text-white/40 ${className}`}
      aria-hidden="true"
    >
      <path d="M1 1 H8 M1 1 V8" stroke="currentColor" strokeWidth="1" fill="none" />
    </svg>
  );
}
