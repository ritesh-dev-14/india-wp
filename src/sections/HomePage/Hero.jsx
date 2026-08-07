import { useState, useEffect, useRef } from "react";
import { ArrowUpRight, Play } from "lucide-react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import heroVideo from "../../assets/heroVideo.mp4";

const rowOnePartners = [
  { name: "Airbnb", path: "/partnerships/airbnb.webp" },
  { name: "Nike", path: "/partnerships/nike.webp" },
  { name: "LG", path: "/partnerships/lg.webp" },
  { name: "Daikin", path: "/partnerships/daikin.webp" },
  { name: "Haldirams", path: "/partnerships/haldirams.webp" },
  { name: "Kajaria", path: "/partnerships/kajaria.svg" },
];

const rowTwoPartners = [
  { name: "Jaquar", path: "/partnerships/jaquar.jpg" },
  { name: "Hettich", path: "/partnerships/hettich.webp" },
  { name: "Voltas", path: "/partnerships/voltas.webp" },
  { name: "Clarins", path: "/partnerships/clarins.svg" },
  { name: "Grohe", path: "/partnerships/grohe.webp" },
  { name: "Lapinoz", path: "/partnerships/lapinoz.webp" },
];

const Hero = () => {
  const customEase = [0.76, 0, 0.24, 1];
  const [isTextVisible, setIsTextVisible] = useState(true);
  const videoRef = useRef(null);
  const nextSectionRef = useRef(null);

  // High-end fluid magnetic mouse coordinates
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { damping: 40, stiffness: 250 });
  const smoothY = useSpring(mouseY, { damping: 40, stiffness: 250 });

  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    mouseX.set((e.clientX / innerWidth - 0.5) * 30);
    mouseY.set((e.clientY / innerHeight - 0.5) * 30);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTextVisible(false);
    }, 3800);
    return () => clearTimeout(timer);
  }, []);

  // Automatic transition when video ends
  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const handleVideoEnded = () => {
      nextSectionRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    };

    videoElement.addEventListener("ended", handleVideoEnded);
    return () => {
      videoElement.removeEventListener("ended", handleVideoEnded);
    };
  }, []);

  return (
    <div 
      onMouseMove={handleMouseMove}
      className="relative w-full bg-[#000000] selection:bg-[#CCFF00] selection:text-black overflow-x-hidden font-sans text-white"
    >
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
          <AnimatePresence>
            {isTextVisible && (
              <>
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
                    className="h-[3px] w-12 bg-[#CCFF00] sm:w-24 origin-left"
                  />
                  <motion.h1 
                    initial={{ y: "120%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.2, delay: 0.2, ease: customEase }}
                    className="text-[14vw] font-black tracking-tighter text-white sm:text-[12vw] leading-none uppercase"
                  >
                    FUTURES
                  </motion.h1>
                  <motion.span 
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 0.6, ease: customEase }}
                    className="h-[3px] w-12 bg-[#CCFF00] sm:w-24 origin-right"
                  />
                </motion.div>
              </>
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
          <button className="group relative flex w-fit items-center gap-4 overflow-hidden bg-white px-8 py-5 text-xs font-bold uppercase tracking-[0.3em] text-black transition-all duration-500 hover:bg-[#CCFF00] hover:shadow-[0_0_40px_rgba(204,255,0,0.4)]">
            <span className="relative z-10 flex items-center gap-3">
              Start Project
              <ArrowUpRight size={16} className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </span>
          </button>

          <button className="group flex w-fit items-center gap-4 pl-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/60 transition-all duration-500 hover:text-white">
            <div className="relative flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/50 backdrop-blur-md transition-all duration-500 group-hover:border-[#CCFF00] group-hover:scale-110">
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
            <div className="h-2 w-2 rounded-full bg-[#CCFF00] animate-pulse" />
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
          <span className="text-[9px] uppercase tracking-[0.5em] text-white/40 font-mono">
            SCROLL
          </span>
          <div className="h-12 w-[1px] bg-white/20 overflow-hidden relative">
            <motion.div 
              animate={{ y: ["-100%", "200%"] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="absolute inset-0 w-full bg-[#CCFF00]"
            />
          </div>
        </motion.div>
      </section>

      {/* ================= HIGH-CONTRAST DUAL MARQUEE SECTION ================= */}
      <section ref={nextSectionRef} className="relative z-20 py-32 border-t border-white/10 bg-[#000000] overflow-hidden">
        {/* Acid Green Ambient Mesh Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-[#CCFF00]/5 blur-[150px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-8 lg:px-16 mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-[#CCFF00]/30 bg-[#CCFF00]/5 mb-6 font-mono text-[10px] uppercase tracking-[0.3em] text-[#CCFF00]">
              [ CLIENT ROSTER ]
            </div>
            <h2 className="text-4xl sm:text-7xl font-light tracking-tighter text-white uppercase leading-none">
              SELECTED <br />
              <span className="font-black text-[#CCFF00]">PARTNERSHIPS.</span>
            </h2>
          </div>
          <div className="border-l border-white/20 pl-6 max-w-xs">
            <p className="text-xs text-white/50 font-mono tracking-wider uppercase leading-relaxed">
              BUILDING DIGITAL MONUMENTS FOR MARKET LEADERS ACROSS GLOBES.
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
              animate={{ x: ["-50%", "0%"] }}
              transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
            >
              {[...rowOnePartners, ...rowOnePartners, ...rowOnePartners].map((partner, index) => (
                <div 
                  key={`l1-${index}`}
                  className="group relative flex h-28 w-56 shrink-0 items-center justify-center border border-white/10 bg-white/[0.02] px-8 transition-all duration-500 hover:border-[#CCFF00] hover:bg-white/[0.05]"
                >
                  <img 
                    src={partner.path} 
                    alt={partner.name}
                    className="max-h-8 w-auto object-contain opacity-40 grayscale contrast-200 transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-110"
                  />
                  <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/30 transition-colors group-hover:border-[#CCFF00]" />
                  <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/30 transition-colors group-hover:border-[#CCFF00]" />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Lane 2 (Reverse) */}
          <div className="flex w-full overflow-hidden">
            <motion.div 
              className="flex items-center gap-6 shrink-0 pl-6"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
            >
              {[...rowTwoPartners, ...rowTwoPartners, ...rowTwoPartners].map((partner, index) => (
                <div 
                  key={`l2-${index}`}
                  className="group relative flex h-28 w-56 shrink-0 items-center justify-center border border-white/10 bg-white/[0.02] px-8 transition-all duration-500 hover:border-[#CCFF00] hover:bg-white/[0.05]"
                >
                  <img 
                    src={partner.path} 
                    alt={partner.name}
                    className="max-h-8 w-auto object-contain opacity-40 grayscale contrast-200 transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-110"
                  />
                  <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/30 transition-colors group-hover:border-[#CCFF00]" />
                  <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/30 transition-colors group-hover:border-[#CCFF00]" />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
