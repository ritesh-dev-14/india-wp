"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const SERIF = "'Instrument Serif', 'Times New Roman', ui-serif, Georgia, serif";
const EASE = [0.76, 0, 0.24, 1];

const CAPABILITIES = [
  {
    id: "web",
    number: "01",
    title: "Web Development",
    subtitle: "Experiences built to perform.",
    description: "High-conversion pages to complex platforms — engineered for speed, clarity, and measurable outcomes.",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=1200&auto=format&fit=crop&q=75",
    tags: ["Product Design", "Frontend", "CMS"],
  },
  {
    id: "brand",
    number: "02",
    title: "Brand Identity",
    subtitle: "Identities impossible to overlook.",
    description: "Visual systems and positioning that give brands a distinct voice — built to scale across every touchpoint.",
    image: "https://images.unsplash.com/photo-1493612276216-ee3925520721?w=1200&auto=format&fit=crop&q=75",
    tags: ["Strategy", "Visual Systems", "Guidelines"],
  },
  {
    id: "performance",
    number: "03",
    title: "Performance Marketing",
    subtitle: "Growth you can measure.",
    description: "Campaign architecture around attention, acquisition, and ROI — every rupee accountable.",
    image: "https://plus.unsplash.com/premium_photo-1726804880693-8fcdd773ce80?w=1200&auto=format&fit=crop&q=75",
    tags: ["Paid Media", "Analytics", "CRO"],
  },
  {
    id: "social",
    number: "04",
    title: "Social Media",
    subtitle: "Audiences into communities.",
    description: "Content systems and editorial calendars that keep brands present, relevant, and conversation-worthy.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&auto=format&fit=crop&q=75",
    tags: ["Content", "Community", "Strategy"],
  },
  {
    id: "video",
    number: "05",
    title: "Video & Content",
    subtitle: "Stories that hold attention.",
    description: "Film, motion, and short-form content for the feed — cinematic quality without production bloat.",
    image: "https://images.unsplash.com/photo-1611784728558-6c7d9b409cdf?w=1200&auto=format&fit=crop&q=75",
    tags: ["Film", "Motion", "Production"],
  },
  {
    id: "ai",
    number: "06",
    title: "AI & Automation",
    subtitle: "Systems that move faster.",
    description: "Intelligent workflows and automation layers that reduce friction and multiply team output.",
    image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?w=1200&auto=format&fit=crop&q=75",
    tags: ["Automation", "Integrations", "AI Tools"],
  },
];

export default function WhatWeCreate() {
  const prefersReducedMotion = useReducedMotion();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-[#020202] py-24 md:py-32 font-sans">
      {/* Background radial gradient */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(20,60,170,0.15),transparent_65%)]" />

      {/* Vertical background grid lines (matching the Hero layout) */}
      <div className="pointer-events-none absolute inset-0 flex justify-evenly opacity-30">
        <div className="h-full w-px bg-white/10" />
        <div className="h-full w-px bg-white/10" />
        <div className="h-full w-px bg-white/10" />
        <div className="h-full w-px bg-white/10" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-[5vw]">
        {/* Centered Header Layout */}
        <div className="mx-auto mb-20 flex max-w-4xl flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: EASE }}
            className="flex flex-col items-center"
          >
            {/* Pill Badge */}
            <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/5 px-5 py-2 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-[#10B981] shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
              <span className="font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-[#EAB308]">
                02 / What We Create
              </span>
            </div>

            <h2 className="mb-6 text-[clamp(2.5rem,5vw,4.5rem)] font-light leading-[1.05] tracking-tight text-white drop-shadow-md">
              Six disciplines.{" "}
              <span
                className="font-normal text-[#A1A1AA]"
                style={{ fontFamily: SERIF, fontStyle: "italic" }}
              >
                One standard.
              </span>
            </h2>

            <p className="max-w-2xl text-[15px] font-light leading-relaxed text-[#D4D4D8] sm:text-lg">
              Strategy, design, engineering, and distribution — unified under one
              roof to build systems that scale and convert effortlessly.
            </p>
          </motion.div>
        </div>

        {/* Clean Minimalist Editorial Accordion / List Layout (Dark Theme) */}
        <div className="divide-y divide-white/10 border-y border-white/10 bg-[#020202]/40 backdrop-blur-sm">
          {CAPABILITIES.map((item, index) => {
            const isHovered = hoveredIndex === index;
            return (
              <div
                key={item.id}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative transition-colors duration-500 hover:bg-white/[0.03]"
              >
                <div className="grid grid-cols-1 items-center gap-6 py-8 md:grid-cols-12 md:py-10 lg:gap-12 px-4 md:px-8">
                  {/* Number & Title */}
                  <div className="flex items-center gap-6 md:col-span-5">
                    <span className="font-mono text-xs font-bold tracking-[0.2em] text-[#71717A] transition-colors group-hover:text-[#EAB308]">
                      {item.number}
                    </span>
                    <h3 className="text-2xl font-light tracking-tight text-white transition-transform duration-500 group-hover:translate-x-2 md:text-3xl">
                      {item.title}
                    </h3>
                  </div>

                  {/* Subtitle / Description Preview */}
                  <div className="md:col-span-5">
                    <p className="text-sm font-light leading-relaxed text-[#A1A1AA] md:text-base">
                      {item.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-[#A1A1AA] transition-colors group-hover:border-white/20 group-hover:text-[#D4D4D8]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Link / Arrow */}
                  <div className="flex md:col-span-2 md:justify-end">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-white transition-colors group-hover:text-[#EAB308]"
                    >
                      <span>Explore</span>
                      <ArrowRight
                        size={14}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </Link>
                  </div>
                </div>

                {/* Floating Preview Image on Hover (Desktop) */}
                <AnimatePresence>
                  {!prefersReducedMotion && isHovered && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: 10 }}
                      transition={{ duration: 0.25, ease: EASE }}
                      className="pointer-events-none absolute right-16 top-1/2 z-20 hidden h-[160px] w-[260px] -translate-y-1/2 overflow-hidden rounded-lg border border-white/10 shadow-2xl lg:block"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover opacity-80 brightness-75 contrast-125 transition-all duration-500 group-hover:opacity-100 group-hover:brightness-100"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Footer info bar */}
        <div className="mt-12 flex flex-col items-start justify-between gap-4 py-8 md:flex-row md:items-center">
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#71717A]">
            END-TO-END SYSTEMS THAT TURN ATTENTION INTO GROWTH
          </span>
          <Link
            to="/services"
            className="group inline-flex items-center gap-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-white transition-colors hover:text-[#EAB308]"
          >
            View all services
            <ArrowUpRight
              size={12}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
