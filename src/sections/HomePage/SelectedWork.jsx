"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useMotionValue,
  useTransform,
} from "framer-motion";

const SERIF = "'Instrument Serif', 'Times New Roman', ui-serif, Georgia, serif";
const EASE = [0.76, 0, 0.24, 1];
const SPRING = { type: "spring", stiffness: 380, damping: 32 };

const CAPABILITIES = [
  {
    id: "web",
    number: "01",
    title: "Web Development",
    headline: "Experiences built to perform.",
    description:
      "High-conversion pages to complex platforms — engineered for speed, clarity, and measurable outcomes.",
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?w=1200&auto=format&fit=crop&q=75",
    tags: ["Product Design", "Frontend", "CMS"],
  },
  {
    id: "brand",
    number: "02",
    title: "Brand Identity",
    headline: "Identities impossible to overlook.",
    description:
      "Visual systems and positioning that give brands a distinct voice — built to scale across every touchpoint.",
    image:
      "https://images.unsplash.com/photo-1493612276216-ee3925520721?w=1200&auto=format&fit=crop&q=75",
    tags: ["Strategy", "Visual Systems", "Guidelines"],
  },
  {
    id: "performance",
    number: "03",
    title: "Performance Marketing",
    headline: "Growth you can measure.",
    description:
      "Campaign architecture around attention, acquisition, and ROI — every rupee accountable.",
    image:
      "https://plus.unsplash.com/premium_photo-1726804880693-8fcdd773ce80?w=1200&auto=format&fit=crop&q=75",
    tags: ["Paid Media", "Analytics", "CRO"],
  },
  {
    id: "social",
    number: "04",
    title: "Social Media",
    headline: "Audiences into communities.",
    description:
      "Content systems and editorial calendars that keep brands present, relevant, and conversation-worthy.",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&auto=format&fit=crop&q=75",
    tags: ["Content", "Community", "Strategy"],
  },
  {
    id: "video",
    number: "05",
    title: "Video & Content",
    headline: "Stories that hold attention.",
    description:
      "Film, motion, and short-form content for the feed — cinematic quality without production bloat.",
    image:
      "https://images.unsplash.com/photo-1611784728558-6c7d9b409cdf?w=1200&auto=format&fit=crop&q=75",
    tags: ["Film", "Motion", "Production"],
  },
  {
    id: "ai",
    number: "06",
    title: "AI & Automation",
    headline: "Systems that move faster.",
    description:
      "Intelligent workflows and automation layers that reduce friction and multiply team output.",
    image:
      "https://images.unsplash.com/photo-1639762681057-408e52192e55?w=1200&auto=format&fit=crop&q=75",
    tags: ["Automation", "Integrations", "AI Tools"],
  },
];

function VisualStage({ active, prefersReducedMotion }) {
  const item = CAPABILITIES[active];
  const progress = useMotionValue(0);
  const width = useTransform(progress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    if (prefersReducedMotion) return undefined;
    progress.set(0);
    const controls = { cancelled: false };
    const start = performance.now();
    const duration = 5200;

    const tick = (now) => {
      if (controls.cancelled) return;
      const t = Math.min(1, (now - start) / duration);
      progress.set(t);
      if (t < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
    return () => {
      controls.cancelled = true;
    };
  }, [active, prefersReducedMotion, progress]);

  return (
    <div className="relative h-[220px] w-full overflow-hidden rounded-sm border border-border/80 bg-white/80 sm:h-[260px] lg:h-[340px] shadow-sm">
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-white/95 via-white/50 to-transparent" />
      <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(ellipse_70%_50%_at_80%_10%,rgba(224,90,71,0.15),transparent_60%)]" />

      <AnimatePresence mode="wait">
        <motion.div
          key={item.id}
          initial={prefersReducedMotion ? false : { clipPath: "inset(0 100% 0 0)", opacity: 0.6 }}
          animate={{ clipPath: "inset(0 0% 0 0)", opacity: 1 }}
          exit={prefersReducedMotion ? undefined : { clipPath: "inset(0 0 0 100%)", opacity: 0.6 }}
          transition={{ duration: 0.55, ease: EASE }}
          className="absolute inset-0 overflow-hidden"
        >
          <motion.img
            src={item.image}
            alt={item.title}
            className="h-full w-full object-cover"
            initial={false}
            animate={
              prefersReducedMotion
                ? { scale: 1 }
                : { scale: [1, 1.06, 1], x: [0, -8, 0] }
            }
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </AnimatePresence>

      {!prefersReducedMotion && (
        <motion.div
          className="pointer-events-none absolute inset-x-0 top-0 z-20 h-px bg-gradient-to-r from-transparent via-border/60 to-transparent"
          animate={{ y: [0, 340] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
        />
      )}

      <div className="absolute inset-x-0 bottom-0 z-20 p-4 md:p-5">
        <AnimatePresence mode="wait">
          <motion.div
            key={item.id}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={prefersReducedMotion ? undefined : { opacity: 0, y: -6 }}
            transition={{ duration: 0.35, ease: EASE }}
          >
            <p
              className="mb-2 text-base leading-snug text-ink md:text-lg font-medium"
              style={{ fontFamily: SERIF, fontStyle: "italic" }}
            >
              {item.headline}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {item.tags.map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={prefersReducedMotion ? false : { opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.35, ease: EASE }}
                  className="rounded-sm border border-border/60 bg-surface-muted/80 px-2 py-0.5 font-mono text-[8px] uppercase tracking-[0.18em] text-ink-secondary"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <motion.span
        key={`num-${item.id}`}
        aria-hidden="true"
        initial={prefersReducedMotion ? false : { opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="pointer-events-none absolute right-3 top-2 z-0 select-none font-mono text-[3.5rem] font-light leading-none tracking-tighter text-ink/[0.06] lg:text-[4.5rem]"
      >
        {item.number}
      </motion.span>

      <div className="absolute inset-x-0 bottom-0 z-30 h-[2px] bg-border/80">
        <motion.div className="h-full origin-left bg-[#E05A47]" style={{ width }} />
      </div>
    </div>
  );
}

function ProgressRail({ total, active, onSelect }) {
  return (
    <div className="flex items-center gap-1.5">
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          type="button"
          aria-label={`View capability ${i + 1}`}
          onClick={() => onSelect(i)}
          className="group relative h-5 w-5 cursor-pointer"
        >
          <span className="absolute inset-0 flex items-center justify-center font-mono text-[8px] text-ink-secondary transition-colors group-hover:text-ink">
            {String(i + 1).padStart(2, "0")}
          </span>
          {active === i && (
            <motion.span
              layoutId="capability-progress"
              className="absolute inset-0 rounded-full border border-[#E05A47] bg-[#E05A47]/15"
              transition={SPRING}
            />
          )}
        </button>
      ))}
    </div>
  );
}

function CapabilityRow({ item, index, isActive, onActivate, prefersReducedMotion }) {
  return (
    <motion.div layout className="relative w-full border-b border-border/80">
      {isActive && (
        <motion.span
          layoutId="capability-active-bg"
          className="absolute inset-0 bg-[#E05A47]/[0.04]"
          transition={SPRING}
        />
      )}
      <button
        type="button"
        id={`capability-${item.id}`}
        onMouseEnter={() => onActivate(index)}
        onFocus={() => onActivate(index)}
        onClick={() => onActivate(index)}
        className="group relative w-full text-left focus:outline-none cursor-pointer"
      >
        <div
          className={[
            "relative grid grid-cols-[40px_1fr_auto] items-center gap-3 px-1 md:grid-cols-[48px_1fr_auto] md:gap-4",
            isActive ? "py-4 md:py-5" : "py-3 md:py-3.5",
          ].join(" ")}
        >
          <motion.span
            animate={{
              color: isActive ? "#E05A47" : "var(--ink-secondary, #5C5346)",
              scale: isActive ? 1.05 : 1,
            }}
            transition={{ duration: 0.3 }}
            className="font-mono text-[10px] tabular-nums tracking-[0.2em] font-semibold"
          >
            {item.number}
          </motion.span>

          <div className="min-w-0">
            <motion.h3
              animate={{
                x: isActive ? 6 : 0,
                color: isActive ? "var(--ink, #1E1B18)" : "rgba(30,27,24,0.5)",
              }}
              transition={SPRING}
              className="text-[clamp(1.1rem,2.2vw,1.75rem)] font-bold leading-tight tracking-[-0.02em]"
            >
              {item.title}
            </motion.h3>

            <AnimatePresence initial={false}>
              {isActive && (
                <motion.p
                  initial={prefersReducedMotion ? false : { opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={prefersReducedMotion ? undefined : { opacity: 0, height: 0 }}
                  transition={{ duration: 0.35, ease: EASE }}
                  className="mt-1.5 max-w-[46ch] overflow-hidden text-[13px] leading-relaxed text-ink-secondary"
                >
                  {item.description}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          <motion.span
            animate={{
              rotate: isActive ? -45 : 0,
              color: isActive ? "#E05A47" : "rgba(30,27,24,0.25)",
              x: isActive ? 2 : 0,
            }}
            transition={SPRING}
            aria-hidden="true"
            className="font-mono text-sm md:text-base font-bold"
          >
            →
          </motion.span>
        </div>
      </button>
    </motion.div>
  );
}

export default function WhatWeCreate() {
  const prefersReducedMotion = useReducedMotion();
  const sectionRef = useRef(null);
  const rowRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const isManualOverride = useRef(false);
  const overrideTimer = useRef(null);

  const setActive = useCallback((index) => {
    isManualOverride.current = true;
    setActiveIndex(index);
    if (overrideTimer.current) clearTimeout(overrideTimer.current);
    overrideTimer.current = setTimeout(() => {
      isManualOverride.current = false;
    }, 1200);
  }, []);

  useEffect(() => {
    const rows = rowRefs.current.filter(Boolean);
    if (!rows.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        if (isManualOverride.current) return;

        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (!visible.length) return;

        const index = rows.indexOf(visible[0].target);
        if (index >= 0) setActiveIndex(index);
      },
      {
        root: null,
        rootMargin: "-15% 0px -50% 0px",
        threshold: [0.1, 0.4, 0.7],
      }
    );

    rows.forEach((row) => observer.observe(row));
    return () => {
      observer.disconnect();
      if (overrideTimer.current) clearTimeout(overrideTimer.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-white text-ink py-16 md:py-24 selection:bg-[#E05A47] selection:text-white"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_40%_at_100%_0%,rgba(224,90,71,0.08),transparent_65%)]" />

      <div className="relative mx-auto max-w-[1400px] px-[6vw]">
        <div className="mb-8 flex flex-col gap-6 lg:mb-12 lg:flex-row lg:items-end lg:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-5% 0px" }}
            transition={{ duration: 0.75, ease: EASE }}
          >
            <span className="mb-3 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-[#E05A47] font-semibold">
              <motion.span
                animate={prefersReducedMotion ? {} : { scale: [1, 1.4, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="h-1.5 w-1.5 rounded-full bg-[#E05A47]"
              />
              02 / What We Create
            </span>

            <h2 className="text-[clamp(1.85rem,4.5vw,3.5rem)] font-extrabold leading-[0.95] tracking-[-0.04em] text-ink">
              {"Six disciplines.".split(" ").map((word, i) => (
                <motion.span
                  key={word}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.55, ease: EASE }}
                  className="mr-[0.28em] inline-block"
                >
                  {word}
                </motion.span>
              ))}
              <br />
              <span
                className="text-ink/85 font-normal"
                style={{ fontFamily: SERIF, fontStyle: "italic" }}
              >
                One standard.
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1, ease: EASE }}
            className="flex flex-col gap-3 lg:max-w-[320px] lg:items-end lg:text-right"
          >
            <p className="text-[13px] leading-relaxed text-ink-secondary">
              Strategy, design, engineering, and distribution — unified under one roof.
            </p>
            <div className="flex items-center gap-4 lg:justify-end">
              <ProgressRail total={CAPABILITIES.length} active={activeIndex} onSelect={setActive} />
              <Link
                to="/services"
                className="group inline-flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.24em] text-ink/75 transition-colors hover:text-[#E05A47] font-bold"
              >
                All services
                <ArrowUpRight size={12} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,360px)_1fr] lg:gap-12">
          <div className="order-1 lg:sticky lg:top-[11vh] lg:self-start">
            <VisualStage active={activeIndex} prefersReducedMotion={prefersReducedMotion} />
            <motion.p
              key={activeIndex}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-3 font-mono text-[9px] uppercase tracking-[0.22em] text-ink-secondary font-medium"
            >
              {CAPABILITIES[activeIndex].title} — {CAPABILITIES[activeIndex].number}
            </motion.p>
          </div>

          <div className="order-2">
            <div className="border-t border-border/80">
              {CAPABILITIES.map((item, index) => (
                <div
                  key={item.id}
                  ref={(el) => {
                    rowRefs.current[index] = el;
                  }}
                >
                  <CapabilityRow
                    item={item}
                    index={index}
                    isActive={activeIndex === index}
                    onActivate={setActive}
                    prefersReducedMotion={prefersReducedMotion}
                  />
                </div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: EASE }}
              className="mt-8 flex flex-col gap-4 border-t border-border/80 pt-6 sm:flex-row sm:items-center sm:justify-between"
            >
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-ink-secondary">
                End-to-end systems that turn attention into growth
              </p>
              <Link
                to="/contact"
                className="group inline-flex w-fit items-center gap-2 rounded-sm border border-[#E05A47] bg-[#E05A47] px-5 py-3 text-[9px] font-bold uppercase tracking-[0.22em] text-white transition-all hover:bg-transparent hover:text-ink shadow-md shadow-[#E05A47]/15"
              >
                Start a project
                <ArrowUpRight size={12} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
