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
    <section className="relative overflow-hidden bg-[#FAF8F5] text-[#1E1B18] selection:bg-[#E05A47] selection:text-white py-20 md:py-28 border-b border-[#E8E2D9]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_10%,rgba(224,90,71,0.03),transparent_70%)]" />

      <div className="relative mx-auto max-w-[1400px] px-[6vw]">
        {/* Header */}
        <div className="mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between border-b border-[#E8E2D9] pb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: EASE }}
          >
            <span className="mb-3 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-[#E05A47] font-semibold">
              <span className="h-1.5 w-1.5 rounded-full bg-[#E05A47]" />
              02 / What We Create
            </span>

            <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-extrabold leading-[0.95] tracking-[-0.04em] text-[#1E1B18]">
              Six disciplines.{" "}
              <span
                className="text-[#5C5346] font-normal"
                style={{ fontFamily: SERIF, fontStyle: "italic" }}
              >
                One standard.
              </span>
            </h2>
          </motion.div>

          <p className="text-[14px] md:text-[15px] font-light leading-relaxed text-[#5C5346] max-w-[36ch]">
            Strategy, design, engineering, and distribution — unified under one roof to build systems that scale.
          </p>
        </div>

        {/* Clean Minimalist Editorial Accordion / List Layout */}
        <div className="divide-y divide-[#E8E2D9] border-t border-[#E8E2D9]">
          {CAPABILITIES.map((item, index) => {
            const isHovered = hoveredIndex === index;
            return (
              <div
                key={item.id}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative transition-colors duration-300 hover:bg-white/50"
              >
                <div className="py-8 md:py-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  
                  {/* Number & Title */}
                  <div className="lg:col-span-5 flex items-center gap-6">
                    <span className="font-mono text-xs tracking-[0.2em] text-[#5C5346] group-hover:text-[#E05A47] transition-colors font-bold">
                      {item.number}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-[#1E1B18] group-hover:translate-x-2 transition-transform duration-300">
                      {item.title}
                    </h3>
                  </div>

                  {/* Subtitle / Description Preview */}
                  <div className="lg:col-span-5">
                    <p className="text-sm md:text-base font-light text-[#5C5346] leading-relaxed">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-sm border border-[#E8E2D9] bg-white px-2 py-0.5 font-mono text-[8px] uppercase tracking-[0.18em] text-[#5C5346]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Link / Arrow */}
                  <div className="lg:col-span-2 flex lg:justify-end">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-[#1E1B18] group-hover:text-[#E05A47] transition-colors font-bold"
                    >
                      <span>Explore</span>
                      <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>

                </div>

                {/* Floating Preview Image on Hover (Desktop) */}
                {!prefersReducedMotion && isHovered && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 10 }}
                    transition={{ duration: 0.25, ease: EASE }}
                    className="hidden lg:block absolute right-12 top-1/2 -translate-y-1/2 z-20 w-[240px] h-[150px] rounded-lg overflow-hidden border border-[#E8E2D9] shadow-2xl pointer-events-none"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer info bar */}
        <div className="mt-16 pt-8 border-t border-[#E8E2D9] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <span className="font-mono text-[10px] tracking-[0.22em] text-[#5C5346] uppercase">
            END-TO-END SYSTEMS THAT TURN ATTENTION INTO GROWTH
          </span>
          <Link
            to="/services"
            className="group inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.24em] text-[#1E1B18] transition-colors hover:text-[#E05A47] font-bold"
          >
            View all services
            <ArrowUpRight size={12} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
