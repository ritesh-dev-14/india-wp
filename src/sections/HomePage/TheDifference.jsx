"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ShieldCheck, TrendingUp, Award, Zap } from "lucide-react";

const SERIF = "'Instrument Serif', 'Times New Roman', ui-serif, Georgia, serif";

const STEPS = [
  {
    step: "01",
    tag: "Audit & Blueprint",
    title: "Authority Positioning Audit",
    text: "We dissect your current market standing, analyze Tier-1 competitor gaps, and engineer the narrative blueprint required to position your brand as an undisputed industry leader.",
    accent: "bg-[#8C6A1E]",
    icon: ShieldCheck,
    metric: "100% Clarity",
  },
  {
    step: "02",
    tag: "Media & PR",
    title: "Tier-1 Spotlight Integration",
    text: "We secure high-impact features in elite publications like Forbes, Times of India, and Hindustan Times, building immediate public trust and institutional credibility.",
    accent: "bg-[#8C6A1E]",
    icon: Award,
    metric: "Forbes & ToI Backing",
  },
  {
    step: "03",
    tag: "Dominance",
    title: "Aggressive Awareness Engine",
    text: "We deploy omnipresent digital distribution and high-end platform architectures designed to capture total market attention and command absolute category mindshare.",
    accent: "bg-[#8C6A1E]",
    icon: Zap,
    metric: "Omnipresent Reach",
  },
  {
    step: "04",
    tag: "Conversion",
    title: "Monetization & Scale",
    text: "We channel massive market authority and incoming public awareness straight into precision conversion systems—turning prestige into measurable revenue.",
    accent: "bg-[#8C6A1E]",
    icon: TrendingUp,
    metric: "Maximized ROI",
  },
];

export default function TheDifference() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative w-full overflow-hidden bg-transparent py-24 md:py-32 font-sans selection:bg-[#8C6A1E]/20 selection:text-[#1A1714]">
      <div className="relative z-10 mx-auto max-w-[1400px] px-[5vw]">
        
        {/* Centered Header Layout */}
        <div className="mx-auto mb-20 flex max-w-4xl flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
            className="flex flex-col items-center"
          >
            {/* Pill Badge */}
            <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-[#8C6A1E]/30 bg-[#8C6A1E]/5 px-5 py-2 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-[#8C6A1E] shadow-[0_0_10px_rgba(140,106,30,0.8)]" />
              <span className="font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-[#8C6A1E]">
                05 / THE AUTHORITY FRAMEWORK
              </span>
            </div>

            <h2 className="mb-6 text-[clamp(2.5rem,5vw,4.5rem)] font-light leading-[1.05] tracking-tight text-[#1A1714] drop-shadow-sm">
              How we build undeniable{" "}
              <span
                className="font-normal text-[#8C6A1E]"
                style={{ fontFamily: SERIF, fontStyle: "italic" }}
              >
                brand authority.
              </span>
            </h2>

            <p className="max-w-2xl text-[15px] font-light leading-relaxed text-[#57534E] sm:text-lg">
              A high-impact, four-phase blueprint engineered to transition your business from standard market player to recognized Tier-1 category leader.
            </p>
          </motion.div>
        </div>

        {/* Light Glassmorphic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {STEPS.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.step}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: index * 0.12, ease: [0.25, 1, 0.5, 1] }}
                className="relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[#8C6A1E]/20 bg-[#FAF8F5]/60 p-8 backdrop-blur-sm transition-all duration-500 hover:border-[#8C6A1E]/40 hover:bg-[#FAF8F5]/90 hover:shadow-[0_12px_32px_rgba(140,106,30,0.1)] group"
              >
                {/* Subtle top indicator border highlight on hover */}
                <div className="absolute left-0 right-0 top-0 h-[3px] bg-transparent transition-colors duration-300 group-hover:bg-[#8C6A1E]" />

                <div>
                  {/* Header tag, Icon and big number */}
                  <div className="mb-8 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#8C6A1E]/20 bg-[#8C6A1E]/5 text-[#8C6A1E] transition-colors duration-300 group-hover:border-[#8C6A1E]/40 group-hover:bg-[#8C6A1E]/10">
                        <IconComponent size={16} />
                      </span>
                      <span className="rounded-full border border-[#8C6A1E]/20 bg-[#8C6A1E]/5 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#78716C] transition-colors duration-300 group-hover:border-[#8C6A1E]/40 group-hover:text-[#1A1714]">
                        {item.tag}
                      </span>
                    </div>
                    <span className="font-mono text-3xl font-black text-[#8C6A1E]/10 transition-colors duration-300 group-hover:text-[#8C6A1E]/25">
                      {item.step}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="mb-4 text-xl font-light tracking-tight text-[#1A1714] transition-colors duration-300 group-hover:text-[#8C6A1E]">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[14px] font-light leading-relaxed text-[#57534E]">
                    {item.text}
                  </p>
                </div>

                {/* Card Footer with Visual Authority Metric */}
                <div className="mt-12 flex items-center justify-between border-t border-[#8C6A1E]/20 pt-6">
                  <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8C6A1E]">
                    {item.metric}
                  </span>
                  <div className="h-2 w-2 rounded-full bg-[#8C6A1E]/20 transition-all duration-300 group-hover:scale-125 group-hover:bg-[#8C6A1E]" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
