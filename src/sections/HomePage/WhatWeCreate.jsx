"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const SERIF = "'Instrument Serif', 'Times New Roman', ui-serif, Georgia, serif";
const EASE = [0.76, 0, 0.24, 1];

const CAPABILITIES = [
  {
    id: "pr-media",
    number: "01",
    title: "Tier-1 Media & PR",
    subtitle: "Forbes, Times of India, Hindustan Times.",
    description: "We help get your business featured in top magazines and newspapers like Forbes, Times of India, and Hindustan Times to establish instant elite credibility.",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200&auto=format&fit=crop&q=75",
    tags: ["Forbes", "Times of India", "Hindustan Times"],
  },
  {
    id: "authority",
    number: "02",
    title: "Authority Building",
    subtitle: "Make your brand impossible to ignore.",
    description: "Position your leadership and enterprise as the definitive category benchmark through curated narrative engineering.",
    image: "https://images.unsplash.com/photo-1493612276216-ee3925520721?w=1200&auto=format&fit=crop&q=75",
    tags: ["Thought Leadership", "Positioning", "Legacy"],
  },
  {
    id: "awareness",
    number: "03",
    title: "Aggressive Awareness",
    subtitle: "Omnipresent market visibility.",
    description: "Saturate digital and physical channels with high-impact campaigns designed to command total mindshare.",
    image: "https://plus.unsplash.com/premium_photo-1726804880693-8fcdd773ce80?w=1200&auto=format&fit=crop&q=75",
    tags: ["Scale", "Visibility", "Impact"],
  },
  {
    id: "digital-ecosystems",
    number: "04",
    title: "High-End Digital Platforms",
    subtitle: "Experiences built to convert.",
    description: "World-class web architectures and digital flagships engineered for speed, prestige, and seamless client acquisition.",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=1200&auto=format&fit=crop&q=75",
    tags: ["Web Engineering", "UI/UX", "Conversion"],
  },
  {
    id: "reputation",
    number: "05",
    title: "Reputation Engineering",
    subtitle: "Perception engineered for market leaders.",
    description: "Proactive governance of your public image, crisis readiness, and elite stakeholder narrative frameworks.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&auto=format&fit=crop&q=75",
    tags: ["Perception", "Governance", "Advisory"],
  },
  {
    id: "growth-systems",
    number: "06",
    title: "Growth & Performance",
    subtitle: "Measurable commercial outcomes.",
    description: "Unified acquisition engines and distribution channels that turn massive public awareness into bottom-line revenue.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1200&auto=format&fit=crop&q=75",
    tags: ["Paid Media", "Funnels", "ROI"],
  },
];

export default function WhatWeCreate() {
  const prefersReducedMotion = useReducedMotion();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-transparent py-24 md:py-32 font-sans">
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
            <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-[#8C6A1E]/30 bg-[#8C6A1E]/5 px-5 py-2 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-[#8C6A1E] shadow-[0_0_10px_rgba(140,106,30,0.8)]" />
              <span className="font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-[#8C6A1E]">
                02 / Core Mandates
              </span>
            </div>

            <h2 className="mb-6 text-[clamp(2.5rem,5vw,4.5rem)] font-light leading-[1.05] tracking-tight text-[#1A1714] drop-shadow-sm">
              Absolute authority.{" "}
              <span
                className="font-normal text-[#8C6A1E]"
                style={{ fontFamily: SERIF, fontStyle: "italic" }}
              >
                Aggressive scale.
              </span>
            </h2>

            <p className="max-w-2xl text-[15px] font-light leading-relaxed text-[#57534E] sm:text-lg">
              We help get your business featured in top magazines and newspapers like Forbes, Times of India, and Hindustan Times — building unshakeable market trust and total category dominance.
            </p>
          </motion.div>
        </div>

        {/* Clean Minimalist Editorial Accordion / List Layout */}
        <div className="divide-y divide-[#8C6A1E]/20 border-y border-[#8C6A1E]/20 bg-[#FAF8F5]/40 backdrop-blur-sm">
          {CAPABILITIES.map((item, index) => {
            const isHovered = hoveredIndex === index;
            return (
              <div
                key={item.id}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative transition-colors duration-500 hover:bg-[#8C6A1E]/[0.03]"
              >
                <div className="grid grid-cols-1 items-center gap-6 py-8 md:grid-cols-12 md:py-10 lg:gap-12 px-4 md:px-8">
                  {/* Number & Title */}
                  <div className="flex items-center gap-6 md:col-span-5">
                    <span className="font-mono text-xs font-bold tracking-[0.2em] text-[#78716C] transition-colors group-hover:text-[#8C6A1E]">
                      {item.number}
                    </span>
                    <h3 className="text-2xl font-light tracking-tight text-[#1A1714] transition-transform duration-500 group-hover:translate-x-2 md:text-3xl">
                      {item.title}
                    </h3>
                  </div>

                  {/* Subtitle / Description Preview */}
                  <div className="md:col-span-5">
                    <p className="text-sm font-light leading-relaxed text-[#57534E] md:text-base">
                      {item.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded border border-[#8C6A1E]/20 bg-[#8C6A1E]/5 px-2.5 py-1 font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-[#78716C] transition-colors group-hover:border-[#8C6A1E]/40 group-hover:text-[#1A1714]"
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
                      className="inline-flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#1A1714] transition-colors group-hover:text-[#8C6A1E]"
                    >
                      <span>Secure Feature</span>
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
                      className="pointer-events-none absolute right-16 top-1/2 z-20 hidden h-[160px] w-[260px] -translate-y-1/2 overflow-hidden rounded-lg border border-[#8C6A1E]/30 shadow-2xl lg:block"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover opacity-90 transition-all duration-500 group-hover:opacity-100 group-hover:scale-105"
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
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#78716C]">
            FEATURED IN FORBES, TIMES OF INDIA, HINDUSTAN TIMES & MORE
          </span>
          <Link
            to="/services"
            className="group inline-flex items-center gap-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-[#1A1714] transition-colors hover:text-[#8C6A1E]"
          >
            Explore all capabilities
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
