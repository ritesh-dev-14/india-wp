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

  const springConfig = { damping: 30, stiffness: 350, mass: 0.1 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX + 24);
      mouseY.set(e.clientY - 85);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY, prefersReducedMotion]);

  return (
    <section className="relative flex min-h-[100svh] w-full flex-col items-center justify-center overflow-hidden bg-transparent py-24 font-sans selection:bg-[#8C6A1E]/20 selection:text-[#1A1714] md:py-32">
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-[5vw]">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-14">
          
          {/* LEFT COLUMN: Sticky Editorial Section Intro */}
          <div className="lg:col-span-5 lg:sticky lg:top-[140px]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-5% 0px" }}
              transition={{ duration: 0.7, ease: EASE }}
            >
              {/* Pill Badge */}
              <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-[#8C6A1E]/30 bg-[#8C6A1E]/5 px-5 py-2 backdrop-blur-md shadow-[0_2px_10px_rgba(140,106,30,0.05)]">
                <span className="h-2 w-2 rounded-full bg-[#8C6A1E] shadow-[0_0_10px_rgba(140,106,30,0.8)]" />
                <span className="font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-[#8C6A1E]">
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
              <h2 className="mb-6 text-[clamp(2.4rem,4.8vw,4.2rem)] font-light leading-[1.02] tracking-tight text-[#1A1714] drop-shadow-sm">
                Different industries.
                <br />
                <span
                  className="font-normal text-[#8C6A1E]"
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
              <p className="max-w-[34ch] text-[15px] md:text-[16px] font-light leading-relaxed text-[#57534E]">
                We bring creative, digital and growth thinking to businesses across diverse market landscapes.
              </p>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Editorial Industry Index List */}
          <div className="flex flex-col lg:col-span-7">
            {INDUSTRIES.map((item, index) => {
              const isActive = activeHoverIndex === index;
              const isAnyHovered = activeHoverIndex !== null;

              let opacityClass = "opacity-90";
              if (isAnyHovered) {
                opacityClass = isActive ? "opacity-100" : "opacity-35";
              }

              return (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-5% 0px" }}
                  transition={{ duration: 0.5, delay: index * 0.04, ease: EASE }}
                  className={`group relative border-t border-[#8C6A1E]/20 transition-all duration-300 ${opacityClass}`}
                  onMouseEnter={() => setActiveHoverIndex(index)}
                  onMouseLeave={() => setActiveHoverIndex(null)}
                >
                  <div className="flex cursor-pointer flex-col justify-between py-5 md:py-7">
                    
                    {/* Top Row: Number, Title, and Arrow */}
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-baseline gap-5 md:gap-9">
                        <span className="font-mono text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-[#78716C] transition-colors duration-300 group-hover:text-[#1A1714]">
                          {item.number}
                        </span>

                        <h3 className="text-[clamp(1.6rem,2.8vw,2.75rem)] font-light tracking-[-0.03em] text-[#1A1714] transition-transform duration-300 ease-out group-hover:translate-x-2">
                          {item.title}
                        </h3>
                      </div>

                      {/* Interactive Reveal Arrow */}
                      <span className="-translate-x-3 text-[#8C6A1E] opacity-0 transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-100">
                        <ArrowUpRight size={20} />
                      </span>
                    </div>

                    {/* Bottom Row / Accordion Description */}
                    <div 
                      className={`grid overflow-hidden transition-all duration-300 ease-out ${
                        isActive ? "grid-rows-[1fr] opacity-100 mt-2.5" : "grid-rows-[0fr] opacity-0 mt-0"
                      } lg:grid-rows-[1fr] lg:opacity-100 lg:mt-2.5`}
                    >
                      <div className="overflow-hidden">
                        <p className="max-w-[44ch] pl-[calc(11px+2.25rem)] text-[13px] md:text-[14px] font-light leading-relaxed text-[#57534E] md:pl-[calc(11px+2.75rem)]">
                          {item.description}
                        </p>
                      </div>
                    </div>

                  </div>
                </motion.div>
              );
            })}
            
            <div className="border-t border-[#8C6A1E]/20" />
          </div>

        </div>
      </div>

      {/* FLOATING CURSOR IMAGE PREVIEW (Desktop Only) */}
      {!prefersReducedMotion && (
        <motion.div
          style={{ x: cursorX, y: cursorY }}
          className="pointer-events-none fixed left-0 top-0 z-50 hidden h-[150px] w-[220px] overflow-hidden rounded-sm border border-[#8C6A1E]/30 bg-[#FAF8F5]/90 p-1.5 shadow-[0_12px_30px_rgba(26,23,20,0.12)] backdrop-blur-md lg:block"
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
                className="absolute inset-1.5 h-[calc(100%-12px)] w-[calc(100%-12px)] rounded-[2px] object-cover object-center filter contrast-105"
                loading="lazy"
              />
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </section>
  );
}
