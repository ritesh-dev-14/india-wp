import { useState, useEffect, useRef } from "react";
import { ArrowUpRight, Play } from "lucide-react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useScroll,
  useReducedMotion,
} from "framer-motion";
import heroVideo from "../../assets/heroVideo.mp4";

/*
  Type note: the italic accent face below is set with a serif fallback
  stack. For the intended look, add Instrument Serif to your <head>:
  <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet">
*/
const SERIF = "'Instrument Serif', 'Times New Roman', ui-serif, Georgia, serif";

const rowOnePartners = [
  { name: "Airbnb", path: "/partnerships/airbnb.webp" },
  { name: "Nike", path: "/partnerships/nike.webp" },
  { name: "LG", path: "/partnerships/lg.webp" },
  { name: "Daikin", path: "/partnerships/daikin.webp" },
  { name: "Haldirams", path: "/partnerships/haldirams.webp" },
  { name: "Kajaria", path: "/partnerships/kajaria.svg" },
];

const rowTwoPartners = [
  { name: "Jaquar", path: "/partnerships/jaquar.png" },
  { name: "Hettich", path: "/partnerships/hettich.webp" },
  { name: "Voltas", path: "/partnerships/voltas.webp" },
  { name: "Clarins", path: "/partnerships/clarins.svg" },
  // { name: "Grohe", path: "/partnerships/grohe.webp" },
  { name: "Lapinoz", path: "/partnerships/lapinoz.webp" },
];

const manifestoLine =
  "DESIGN THAT INTERRUPTS THE SCROLL   ✺   ENGINEERING THAT SURVIVES CONTACT   ✺   MOTION THAT MEANS SOMETHING   ✺   ";

const PartnerLogo = ({ id, partner, hoveredId, onHover, onLeave }) => {
  const isActive = hoveredId === id;
  const isDimmed = hoveredId !== null && !isActive;

  return (
    <div
      onMouseEnter={() => onHover(id)}
      onMouseLeave={onLeave}
      className={`group relative flex h-28 w-56 shrink-0 items-center justify-center border px-8 transition-all duration-500 ease-out ${
        isActive
          ? "z-10 scale-105 border-white bg-white/[0.06] shadow-[0_0_30px_rgba(255,255,255,0.15)]"
          : isDimmed
          ? "scale-95 border-white/5 bg-white/[0.01] opacity-30"
          : "border-white/10 bg-white/[0.02] opacity-100"
      }`}
    >
      <img
        src={partner.path}
        alt={partner.name}
        className={`max-h-18 w-auto object-contain transition-all duration-500 ease-out ${
          isActive ? "scale-110 opacity-100 grayscale-0" : "opacity-100  contrast-200"
        }`}
      />
      <div
        className={`absolute top-0 right-0 w-2 h-2 border-t border-r transition-colors duration-500 ${
          isActive ? "border-white" : "border-white/30"
        }`}
      />
      <div
        className={`absolute bottom-0 left-0 w-2 h-2 border-b border-l transition-colors duration-500 ${
          isActive ? "border-white" : "border-white/30"
        }`}
      />
    </div>
  );
};

const Hero = () => {
  const customEase = [0.76, 0, 0.24, 1];
  const prefersReducedMotion = useReducedMotion();

  const [isTextVisible, setIsTextVisible] = useState(true);
  const [cursorHover, setCursorHover] = useState(false);
  const [isTouch, setIsTouch] = useState(true);
  const [hoveredLogo, setHoveredLogo] = useState(null);
  const videoRef = useRef(null);
  const nextSectionRef = useRef(null);

  // Fluid magnetic mouse coordinates (drives the parallax headline)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { damping: 40, stiffness: 250 });
  const smoothY = useSpring(mouseY, { damping: 40, stiffness: 250 });

  // Raw cursor coordinates (drives the custom cursor dot)
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const cursorXSpring = useSpring(cursorX, { damping: 28, stiffness: 320, mass: 0.4 });
  const cursorYSpring = useSpring(cursorY, { damping: 28, stiffness: 320, mass: 0.4 });

  // Top-of-page scroll progress
  const { scrollYProgress } = useScroll();
  const progressBar = useSpring(scrollYProgress, { damping: 30, stiffness: 200, mass: 0.3 });

  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    mouseX.set((e.clientX / innerWidth - 0.5) * 30);
    mouseY.set((e.clientY / innerHeight - 0.5) * 30);
    cursorX.set(e.clientX);
    cursorY.set(e.clientY);
  };

  useEffect(() => {
    setIsTouch(window.matchMedia("(hover: none)").matches);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsTextVisible(false), 3800);
    return () => clearTimeout(timer);
  }, []);

  // Automatic transition when video ends
  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const handleVideoEnded = () => {
      nextSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    videoElement.addEventListener("ended", handleVideoEnded);
    return () => videoElement.removeEventListener("ended", handleVideoEnded);
  }, []);

  const magnetic = {
    onMouseEnter: () => setCursorHover(true),
    onMouseLeave: () => setCursorHover(false),
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className={`relative w-full bg-[#000000] selection:bg-white selection:text-black overflow-x-hidden font-sans text-white ${
        !isTouch ? "lg:cursor-none" : ""
      }`}
    >
      {/* ================= SCROLL PROGRESS ================= */}
      <motion.div
        style={{ scaleX: progressBar }}
        className="fixed left-0 top-0 z-[60] h-[2px] w-full origin-left bg-white"
      />

      {/* ================= CUSTOM CURSOR (desktop only) ================= */}
      {!isTouch && (
        <motion.div
          aria-hidden="true"
          style={{ x: cursorXSpring, y: cursorYSpring }}
          animate={{
            scale: cursorHover ? 2.4 : 1,
            backgroundColor: cursorHover ? "#ffffff" : "#ffffff",
          }}
          transition={{ duration: 0.25, ease: customEase }}
          className="pointer-events-none fixed left-0 top-0 z-[70] hidden h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full mix-blend-difference lg:block"
        />
      )}

      {/* ================= GRAIN OVERLAY ================= */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[55] opacity-[0.05] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        {/* 1. Raw Clean Video Background */}
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover filter contrast-125 brightness-90"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

        {/* 2. Custom High-End Cinematic Vignette Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.85)_100%)] pointer-events-none" />

        {/* 3. Brutalist Parallax Typographic Core */}
        <motion.div
          style={{ x: smoothX, y: smoothY }}
          className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none"
        >
          <AnimatePresence mode="wait">
            {isTextVisible ? (
              <div key="intro">
                <motion.div
                  key="crafting"
                  exit={{ x: "-50vw", opacity: 0, filter: "blur(20px)" }}
                  transition={{ duration: 1.2, ease: customEase }}
                  className="overflow-hidden"
                >
                  <motion.h1
                    initial={{ y: "120%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.2, delay: 0.1, ease: customEase }}
                    className="text-[14vw] font-black tracking-tighter text-white sm:text-[12vw] leading-none uppercase"
                  >
                    CRAFTING
                  </motion.h1>
                </motion.div>

                <motion.div
                  key="futures"
                  exit={{ x: "50vw", opacity: 0, filter: "blur(20px)" }}
                  transition={{ duration: 1.2, ease: customEase }}
                  className="overflow-hidden flex items-center gap-6 sm:gap-10"
                >
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 0.6, ease: customEase }}
                    className="h-[3px] w-12 bg-white sm:w-24 origin-left"
                  />
                  <motion.h1
                    initial={{ y: "120%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.2, delay: 0.2, ease: customEase }}
                    className="text-[14vw] font-black tracking-tighter sm:text-[12vw] leading-none uppercase"
                    style={{ fontFamily: SERIF, fontStyle: "italic", fontWeight: 400 }}
                  >
                    FUTURES
                  </motion.h1>
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 0.6, ease: customEase }}
                    className="h-[3px] w-12 bg-white sm:w-24 origin-right"
                  />
                </motion.div>
              </div>
            ) : (
              // What's left behind once the headline exits — the void gets a job,
              // not just empty video.
              <motion.div
                key="residue"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: customEase }}
                className="flex flex-col items-center gap-4"
              >
                <div className="flex items-center gap-4 sm:gap-6">
                  <span className="h-px w-8 bg-white/30 sm:w-16" />
                  <p
                    className="text-lg text-white/70 sm:text-2xl"
                    style={{ fontFamily: SERIF, fontStyle: "italic", fontWeight: 400 }}
                  >
                    A studio for the ones who scroll fast and stop rarely
                  </p>
                  <span className="h-px w-8 bg-white/30 sm:w-16" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* 4. High-Contrast Magnetic CTAs */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: customEase }}
          className="absolute left-8 top-1/2 z-30 flex -translate-y-1/2 flex-col gap-5 lg:left-16"
        >
          <button
            {...magnetic}
            className="group relative flex w-fit items-center gap-4 overflow-hidden bg-white px-8 py-5 text-xs font-bold uppercase tracking-[0.3em] text-black transition-all duration-500 hover:bg-white hover:shadow-[0_0_40px_rgba(255,255,255,0.4)]"
          >
            <span className="relative z-10 flex items-center gap-3">
              Start Project
              <ArrowUpRight
                size={16}
                className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </span>
          </button>

          <button
            {...magnetic}
            className="group flex w-fit items-center gap-4 pl-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/60 transition-all duration-500 hover:text-white"
          >
            <div className="relative flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/50 backdrop-blur-md transition-all duration-500 group-hover:border-white group-hover:scale-110">
              <Play size={14} className="ml-0.5 text-white transition-transform duration-500 group-hover:scale-110" />
            </div>
            Showreel '26
          </button>
        </motion.div>

        {/* 5. Bottom Left Live Telemetry Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1, ease: customEase }}
          className="absolute bottom-10 left-8 z-30 lg:left-16"
        >
          <div className="flex items-center gap-3">
            <div className="h-2 w-2 rounded-full bg-white animate-pulse" />
            <p className="text-[10px] uppercase tracking-[0.4em] text-white/50 font-mono">
              AWWWARDS SOTD CONTENDER // 2026 EDITION
            </p>
          </div>
        </motion.div>

        {/* 6. Minimal Scroll Cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2, ease: customEase }}
          className="absolute bottom-0 left-1/2 z-30 flex -translate-x-1/2 flex-col items-center gap-3 pb-8 pointer-events-none"
        >
          <span className="text-[9px] uppercase tracking-[0.5em] text-white/40 font-mono">SCROLL</span>
          <div className="h-12 w-[1px] bg-white/20 overflow-hidden relative">
            <motion.div
              animate={prefersReducedMotion ? {} : { y: ["-100%", "200%"] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="absolute inset-0 w-full bg-white"
            />
          </div>
        </motion.div>
      </section>

      {/* ================= CONTRAST MANIFESTO BAND ================= */}
      <section className="relative z-20 border-y border-black bg-white/5 backdrop-blur-md py-6 overflow-hidden">
        <div className="flex w-full overflow-hidden">
          <motion.div
            className="flex shrink-0 items-center whitespace-nowrap"
            animate={prefersReducedMotion ? {} : { x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 26, ease: "linear" }}
          >
            {[0, 1].map((rep) => (
              <p
                key={rep}
                className="pr-0 text-3xl font-medium italic text-white sm:text-5xl"
                style={{ fontFamily: SERIF }}
              >
                {manifestoLine.repeat(2)}
              </p>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= HIGH-CONTRAST DUAL MARQUEE SECTION ================= */}
      <section ref={nextSectionRef} className="relative z-20 py-32 border-t border-white/10 bg-[#000000] overflow-hidden">
        {/* Acid Green Ambient Mesh Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-white/5 blur-[150px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-8 lg:px-16 mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-white/30 bg-white/5 mb-6 font-mono text-[10px] uppercase tracking-[0.3em] text-white">
              [ CLIENT ROSTER — 12 ACTIVE ]
            </div>
            <h2 className="text-4xl sm:text-7xl font-light tracking-tighter text-white uppercase leading-none">
              SELECTED <br />
              <span className="font-black text-white">PARTNERSHIPS.</span>
            </h2>
          </div>
          <div className="border-l border-white/20 pl-6 max-w-xs">
            <p className="text-xs text-white/50 font-mono tracking-wider uppercase leading-relaxed">
              Twelve brands, four continents, one standard: work that outperforms the brief.
            </p>
          </div>
        </div>

        {/* Dual Lane High-Contrast Marquee */}
        <div className="relative w-full overflow-hidden flex flex-col gap-4 py-4">
          {/* Edge Fade Masks */}
          <div className="absolute left-0 inset-y-0 w-32 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 inset-y-0 w-32 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none" />

          {/* Lane 1 */}
          <div className="flex w-full overflow-hidden">
            <motion.div
              className="flex items-center gap-6 shrink-0 pl-6"
              animate={prefersReducedMotion ? {} : { x: ["-50%", "0%"] }}
              transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
            >
              {[...rowOnePartners, ...rowOnePartners, ...rowOnePartners].map((partner, index) => (
                <PartnerLogo
                  key={`l1-${index}`}
                  id={`l1-${index}`}
                  partner={partner}
                  hoveredId={hoveredLogo}
                  onHover={(id) => {
                    setHoveredLogo(id);
                    setCursorHover(true);
                  }}
                  onLeave={() => {
                    setHoveredLogo(null);
                    setCursorHover(false);
                  }}
                />
              ))}
            </motion.div>
          </div>

          {/* Lane 2 (Reverse) */}
          <div className="flex w-full overflow-hidden">
            <motion.div
              className="flex items-center gap-6 shrink-0 pl-6"
              animate={prefersReducedMotion ? {} : { x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
            >
              {[...rowTwoPartners, ...rowTwoPartners, ...rowTwoPartners].map((partner, index) => (
                <PartnerLogo
                  key={`l2-${index}`}
                  id={`l2-${index}`}
                  partner={partner}
                  hoveredId={hoveredLogo}
                  onHover={(id) => {
                    setHoveredLogo(id);
                    setCursorHover(true);
                  }}
                  onLeave={() => {
                    setHoveredLogo(null);
                    setCursorHover(false);
                  }}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;