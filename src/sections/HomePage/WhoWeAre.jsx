"use client";

import React from "react";
import { ArrowUpRight, Award, Compass, Landmark } from "lucide-react";
import { motion } from "framer-motion";

const DISPLAY = "var(--font-display, 'Fraunces'), 'Times New Roman', ui-serif, Georgia, serif";
const BODY = "var(--font-body, 'Inter'), ui-sans-serif, system-ui, sans-serif";
const EASE = [0.76, 0, 0.24, 1];

export default function WhoWeAre() {
  return (
    <section
      style={{ fontFamily: BODY }}
      className="relative flex w-full flex-col justify-center overflow-hidden bg-transparent py-24 px-[6vw] md:py-32 selection:bg-[#8C6A1E]/20 selection:text-[#1A1714]"
    >
      <div className="relative z-10 mx-auto w-full max-w-[1400px]">
        
        {/* SECTION HEADER */}
        <div className="mb-14 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-5% 0px" }}
            transition={{ duration: 0.7, ease: EASE }}
            className="mb-4 inline-flex items-center gap-2.5 rounded-full border border-[#8C6A1E]/30 bg-[#8C6A1E]/5 px-5 py-2 backdrop-blur-md shadow-[0_2px_10px_rgba(140,106,30,0.05)]"
          >
            <Compass size={13} className="text-[#8C6A1E]" />
            <span className="font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-[#8C6A1E]">
              02 / WHO WE ARE
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-5% 0px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
            style={{ fontFamily: DISPLAY }}
            className="text-[clamp(2.4rem,5.2vw,4.8rem)] font-light leading-[1.05] tracking-tight text-[#1A1714]"
          >
            You have a 40-year legacy offline.
            <br />
            <span className="font-normal italic text-[#8C6A1E]">
              Your online audience just doesn&apos;t know it yet.
            </span>
          </motion.h2>
        </div>

        {/* TWO COLUMN GRID CONTENT */}
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          
          {/* LEFT COLUMN: THE NARRATIVE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-5% 0px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
            className="flex flex-col gap-6 lg:col-span-6"
          >
            <p className="text-[17px] md:text-[19px] font-normal leading-relaxed text-[#1A1714]">
              For decades, your enterprise has built monumental trust through brick-and-mortar excellence, unmatched craftsmanship, and deep-rooted client relationships.
            </p>
            <p className="text-[15px] md:text-[16px] font-light leading-relaxed text-[#57534E]">
              Yet, in today&apos;s digital-first landscape, modern consumers judge authority by what they see on screen. If your online presence doesn&apos;t mirror your real-world stature, you risk losing market share to younger, louder competitors who lack your heritage.
            </p>
            <p className="text-[15px] md:text-[16px] font-light leading-relaxed text-[#57534E]">
              <strong className="font-medium text-[#1A1714]">We Promote</strong> bridges this gap. We translate decades of offline dominance into unassailable online authority—building digital ecosystems that your legacy always deserved.
            </p>

            <div className="pt-4">
              <a
                href="/about"
                className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-[#8C6A1E] transition-colors duration-300 hover:text-[#1A1714]"
              >
             
               
              </a>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: CORE PILLARS CARD DECK */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-5% 0px" }}
            transition={{ duration: 0.7, delay: 0.3, ease: EASE }}
            className="flex flex-col gap-4 lg:col-span-6"
          >
            
            {/* CARD 1 */}
            <div className="group relative rounded-sm border border-[#8C6A1E]/20 bg-[#FAF8F5]/80 p-7 md:p-8 shadow-[0_4px_20px_rgba(26,23,20,0.03)] backdrop-blur-md transition-all duration-300 hover:border-[#8C6A1E]/50">
              <div className="flex items-start justify-between gap-4 mb-4">
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#78716C]">
                  01 // THE CHALLENGE
                </span>
                <Landmark size={18} className="text-[#8C6A1E]" />
              </div>
              <h3 className="text-[1.35rem] font-light tracking-tight text-[#1A1714] mb-2">
                Offline Titan, Digital Ghost
              </h3>
              <p className="text-[14px] font-light leading-relaxed text-[#57534E]">
                Traditional market leaders often suffer from outdated web identities that fail to capture the scale, stability, and prestige of their physical operations.
              </p>
            </div>

            {/* CARD 2 */}
            <div className="group relative rounded-sm border border-[#8C6A1E]/20 bg-[#FAF8F5]/80 p-7 md:p-8 shadow-[0_4px_20px_rgba(26,23,20,0.03)] backdrop-blur-md transition-all duration-300 hover:border-[#8C6A1E]/50">
              <div className="flex items-start justify-between gap-4 mb-4">
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#78716C]">
                  02 // OUR SOLUTION
                </span>
                <Award size={18} className="text-[#8C6A1E]" />
              </div>
              <h3 className="text-[1.35rem] font-light tracking-tight text-[#1A1714] mb-2">
                Translating Heritage into Stature
              </h3>
              <p className="text-[14px] font-light leading-relaxed text-[#57534E]">
                We architect bespoke digital experiences, high-end editorial branding, and credibility loops that prove your market leadership instantly to online prospects.
              </p>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
