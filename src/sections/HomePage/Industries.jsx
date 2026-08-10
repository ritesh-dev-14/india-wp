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
    <section className="relative bg-white text-ink py-12 md:py-16 px-[6vw] overflow-hidden selection:bg-indigo-100/20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_35%_at_20%_60%,rgba(38,58,120,0.1),transparent_70%)]" />

      <div className="mx-auto max-w-[1400px] w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          
          {/* LEFT COLUMN: Sticky Editorial Section Intro */}
          <div className="lg:col-span-5 lg:sticky lg:top-[120px]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-5% 0px" }}
              transition={{ duration: 0.7, ease: EASE }}
            >
              <span className="inline-flex items-center gap-2.5 font-mono text-[10px] tracking-[0.3em] uppercase text-ink-secondary mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-ink/70"></span>
                09 / INDUSTRIES
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-5% 0px" }}
              transition={{ duration: 0.7, delay: 0.08, ease: EASE }}
            >
              <h2 className="font-semibold leading-[0.96] tracking-tight text-[clamp(2.4rem,5vw,4.5rem)] text-ink mb-5">
                Different industries.
                <br />
                <span
                  className="text-ink/80 font-normal"
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
              <p className="text-[14px] md:text-[15px] font-light leading-relaxed text-ink-secondary max-w-[34ch]">
                We bring creative, digital and growth thinking to businesses across industries.
              </p>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Editorial Industry Index List */}
          <div className="lg:col-span-7 flex flex-col">
            {INDUSTRIES.map((item, index) => {
              const isActive = activeHoverIndex === index;
              const isAnyHovered = activeHoverIndex !== null;

              let opacityClass = "opacity-85";
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
                  className={`group relative border-t border-border/80 transition-opacity duration-300 ${opacityClass}`}
                  onMouseEnter={() => setActiveHoverIndex(index)}
                  onMouseLeave={() => setActiveHoverIndex(null)}
                >
                  <div className="py-4 md:py-6 flex flex-col justify-between cursor-pointer">
                    
                    {/* Top Row: Number, Title, and Arrow */}
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-baseline gap-4 md:gap-8">
                        <span className="font-mono text-[10px] md:text-[11px] tracking-[0.2em] uppercase text-ink-secondary group-hover:text-ink transition-colors duration-300">
                          {item.number}
                        </span>

                        <h3 className="font-normal tracking-[-0.04em] text-[clamp(1.7rem,3.1vw,3rem)] text-ink group-hover:translate-x-1.5 transition-transform duration-300 ease-out">
                          {item.title}
                        </h3>
                      </div>

                      {/* Interactive Reveal Arrow */}
                      <span className="text-ink opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-2 transition-all duration-300 ease-out">
                        <ArrowUpRight size={18} />
                      </span>
                    </div>

                    {/* Bottom Row / Accordion Description */}
                    <div 
                      className={`grid transition-all duration-300 ease-out overflow-hidden ${
                        isActive ? "grid-rows-[1fr] opacity-100 mt-2" : "grid-rows-[0fr] opacity-0 mt-0"
                      } lg:grid-rows-[1fr] lg:opacity-100 lg:mt-2`}
                    >
                      <div className="overflow-hidden">
                        <p className="text-[13px] md:text-[14px] font-light text-ink-secondary pl-[calc(10px+2rem)] md:pl-[calc(11px+2.8rem)] max-w-[44ch]">
                          {item.description}
                        </p>
                      </div>
                    </div>

                  </div>
                </motion.div>
              );
            })}
            
            <div className="border-t border-border/80" />
          </div>

        </div>
      </div>

      {/* FLOATING CURSOR IMAGE PREVIEW (Desktop Only) */}
      {!prefersReducedMotion && (
        <motion.div
          style={{ x: cursorX, y: cursorY }}
          className="hidden lg:block pointer-events-none fixed top-0 left-0 z-50 w-[210px] h-[140px] rounded-xs overflow-hidden border border-border shadow-2xl bg-surface-muted p-1.5"
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
                className="absolute inset-1.5 w-[calc(100%-12px)] h-[calc(100%-12px)] object-cover object-center filter brightness-90 rounded-xs"
                loading="lazy"
              />
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </section>
  );
}
