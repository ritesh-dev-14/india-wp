"use client";

import React, { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
  useMotionValue,
  useSpring,
} from "framer-motion";

const SERIF = "'Instrument Serif', 'Times New Roman', ui-serif, Georgia, serif";
const EASE = [0.76, 0, 0.24, 1];

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
    image: "https://images.unsplash.com/photo-1581726707445-75cbe4efc586?q=80&w=1752&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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

export default function Industries() {
  const prefersReducedMotion = useReducedMotion();
  const [activeHoverIndex, setActiveHoverIndex] = useState(null);

  // Smooth spring-physics coordinates for floating cursor image
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 300, mass: 0.1 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX + 20);
      mouseY.set(e.clientY - 75);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY, prefersReducedMotion]);

  return (
    <section className="relative flex min-h-[100svh] w-full flex-col items-center justify-center overflow-hidden bg-[#020202] py-24 font-sans selection:bg-[#EAB308]/20 selection:text-white md:py-32">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(20,60,170,0.15),transparent_65%)]" />

      {/* Vertical background grid lines */}
      <div className="pointer-events-none absolute inset-0 flex justify-evenly opacity-30">
        <div className="h-full w-px bg-white/10" />
        <div className="h-full w-px bg-white/10" />
        <div className="h-full w-px bg-white/10" />
        <div className="h-full w-px bg-white/10" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-[5vw]">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-14">
          
          {/* LEFT COLUMN: Sticky Editorial Section Intro */}
          <div className="lg:col-span-5 lg:sticky lg:top-[120px]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-5% 0px" }}
              transition={{ duration: 0.7, ease: EASE }}
            >
              {/* Pill Badge */}
              <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/5 px-5 py-2 backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-[#10B981] shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
                <span className="font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-[#EAB308]">
                  09 / INDUSTRIES
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-5% 0px" }}
              transition={{ duration: 0.7, delay: 0.08, ease: EASE }}
            >
              <h2 className="mb-5 text-[clamp(2.4rem,5vw,4.5rem)] font-light leading-[0.96] tracking-tight text-white drop-shadow-md">
                Different industries.
                <br />
                <span
                  className="font-normal text-[#A1A1AA]"
                  style={{ fontFamily: SERIF, fontStyle: "italic" }}
                >
                  One way of thinking.
                </span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-5% 0px" }}
              transition={{ duration: 0.7, delay: 0.16, ease: EASE }}
            >
              <p className="max-w-[34ch] text-[14px] md:text-[15px] font-light leading-relaxed text-[#D4D4D8]">
                We bring creative, digital and growth thinking to businesses across industries.
              </p>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Editorial Industry Index List */}
          <div className="flex flex-col lg:col-span-7">
            {INDUSTRIES.map((item, index) => {
              const isActive = activeHoverIndex === index;
              const isAnyHovered = activeHoverIndex !== null;

              let opacityClass = "opacity-85";
              if (isAnyHovered) {
                opacityClass = isActive ? "opacity-100" : "opacity-30";
              }

              return (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-5% 0px" }}
                  transition={{ duration: 0.5, delay: index * 0.04, ease: EASE }}
                  className={`group relative border-t border-white/10 transition-opacity duration-300 ${opacityClass}`}
                  onMouseEnter={() => setActiveHoverIndex(index)}
                  onMouseLeave={() => setActiveHoverIndex(null)}
                >
                  <div className="flex cursor-pointer flex-col justify-between py-4 md:py-6">
                    
                    {/* Top Row: Number, Title, and Arrow */}
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-baseline gap-4 md:gap-8">
                        <span className="font-mono text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-[#71717A] transition-colors duration-300 group-hover:text-white">
                          {item.number}
                        </span>

                        <h3 className="text-[clamp(1.7rem,3.1vw,3rem)] font-light tracking-[-0.04em] text-white transition-transform duration-300 ease-out group-hover:translate-x-1.5">
                          {item.title}
                        </h3>
                      </div>

                      {/* Interactive Reveal Arrow */}
                      <span className="-translate-x-2 text-[#EAB308] opacity-0 transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-100">
                        <ArrowUpRight size={18} />
                      </span>
                    </div>

                    {/* Bottom Row / Accordion Description */}
                    <div 
                      className={`grid overflow-hidden transition-all duration-300 ease-out ${
                        isActive ? "grid-rows-[1fr] opacity-100 mt-2" : "grid-rows-[0fr] opacity-0 mt-0"
                      } lg:grid-rows-[1fr] lg:opacity-100 lg:mt-2`}
                    >
                      <div className="overflow-hidden">
                        <p className="max-w-[44ch] pl-[calc(10px+2rem)] text-[13px] md:text-[14px] font-light text-[#A1A1AA] md:pl-[calc(11px+2.8rem)]">
                          {item.description}
                        </p>
                      </div>
                    </div>

                  </div>
                </motion.div>
              );
            })}
            
            <div className="border-t border-white/10" />
          </div>

        </div>
      </div>

      {/* FLOATING CURSOR IMAGE PREVIEW (Desktop Only) */}
      {!prefersReducedMotion && (
        <motion.div
          style={{ x: cursorX, y: cursorY }}
          className="pointer-events-none fixed left-0 top-0 z-50 hidden h-[140px] w-[210px] overflow-hidden rounded-xs border border-white/15 bg-black/80 p-1.5 shadow-2xl backdrop-blur-md lg:block"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{
            opacity: activeHoverIndex !== null ? 1 : 0,
            scale: activeHoverIndex !== null ? 1 : 0.95,
          }}
          transition={{ duration: 0.2, ease: EASE }}
        >
          <AnimatePresence mode="wait">
            {activeHoverIndex !== null && (
              <motion.img
                key={activeHoverIndex}
                src={INDUSTRIES[activeHoverIndex].image}
                alt={INDUSTRIES[activeHoverIndex].imageAlt}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3, ease: EASE }}
                className="absolute inset-1.5 h-[calc(100%-12px)] w-[calc(100%-12px)] rounded-xs object-cover object-center filter brightness-90 contrast-110"
                loading="lazy"
              />
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </section>
  );
}
