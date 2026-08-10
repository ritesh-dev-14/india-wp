import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Play } from "lucide-react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import heroVideo from "../../assets/heroVideo.mp4";

const SERIF = "'Instrument Serif', 'Times New Roman', ui-serif, Georgia, serif";
const EASE = [0.76, 0, 0.24, 1];

const PARTNERS_ROW_ONE = [
  { name: "Airbnb", path: "/partnerships/airbnb.webp" },
  { name: "Nike", path: "/partnerships/nike.webp" },
  { name: "LG", path: "/partnerships/lg.webp" },
  { name: "Daikin", path: "/partnerships/daikin.webp" },
  { name: "Haldirams", path: "/partnerships/haldirams.webp" },
  { name: "Kajaria", path: "/partnerships/kajaria.svg" },
];

const PARTNERS_ROW_TWO = [
  { name: "Jaquar", path: "/partnerships/jaquar.png" },
  { name: "Hettich", path: "/partnerships/hettich.webp" },
  { name: "Voltas", path: "/partnerships/voltas.webp" },
  { name: "Clarins", path: "/partnerships/clarins.svg" },
  { name: "Lapinoz", path: "/partnerships/lapinoz.webp" },
];

const MANIFESTO =
  "Design that interrupts the scroll — Engineering that survives contact — Motion that means something — ";

const STATS = [
  { value: "12+", label: "Active partnerships" },
  { value: "4", label: "Continents" },
  { value: "2019", label: "Est." },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.1, delay, ease: EASE },
});

function PartnerCard({ partner, isActive, isDimmed, onEnter, onLeave }) {
  return (
    <div
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className={[
        "group relative flex h-24 w-48 shrink-0 items-center justify-center rounded-xl border px-6 transition-all duration-500 ease-out md:h-28 md:w-56 md:px-8",
        isActive
          ? "z-10 scale-[1.03] border-[#E05A47]/60 bg-white shadow-[0_20px_60px_rgba(224,90,71,0.2)]"
          : isDimmed
          ? "scale-[0.98] border-[#D1C9BC] bg-[#FAF8F5]/60 opacity-35"
          : "border-[#D1C9BC] bg-white opacity-100 shadow-sm",
      ].join(" ")}
    >
      <img
        src={partner.path}
        alt={partner.name}
        className={[
          "max-h-14 w-auto object-contain transition-all duration-500 md:max-h-16",
          isActive ? "scale-110 opacity-100 filter contrast-125" : "opacity-90 filter grayscale hover:grayscale-0",
        ].join(" ")}
      />
    </div>
  );
}

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const heroRef = useRef(null);
  const videoRef = useRef(null);
  const [activePartner, setActivePartner] = useState(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.play().catch(() => {});
  }, []);

  return (
    <div className="relative w-full overflow-x-hidden bg-[#FAF8F5] text-[#11100F] selection:bg-[#E05A47] selection:text-white font-sans">
      
      {/* Background ambient lighting */}


      {/* ── ACT I · CINEMATIC OPEN ───────────────────────────── */}
      <section
        ref={heroRef}
        className="relative min-h-[100svh] w-full overflow-hidden border-b border-[#D1C9BC]"
      >
        {/* Video */}
        <motion.div style={{ scale: videoScale }} className="absolute inset-0">
          <video
            ref={videoRef}
            autoPlay
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 h-full w-full object-cover brightness-[0.62] contrast-[1.12] saturate-[0.95]"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
        </motion.div>

        {/* Cinematic dark gradients for maximum text contrast */}
        {/* <div className="pointer-events-none absolute inset-0 bg-black/45" /> */}
        {/* <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_75%_15%,rgba(224,90,71,0.25),transparent_60%)]" /> */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_75%_at_50%_100%,rgba(17,16,15,0.98),rgba(17,16,15,0.65)_50%,transparent_80%)]" />

        {/* Content */}
        <motion.div
          style={{ opacity: heroOpacity, y: prefersReducedMotion ? 0 : heroY }}
          className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1400px] flex-col px-[5vw] pb-12 pt-28 md:pb-16 md:pt-32"
        >
          {/* Headline grid */}
          <div className="mt-auto grid flex-1 grid-cols-1 items-end gap-12 pb-8 pt-16 lg:grid-cols-12 lg:gap-16 lg:pb-12 lg:pt-20">
            <div className="lg:col-span-8">
              <motion.div
                {...(prefersReducedMotion ? {} : fadeUp(0.2))}
                className="mb-6 flex items-center gap-2.5"
              >
                <span className="inline-flex items-center justify-center w-2.5 h-2.5 rounded-full bg-[#FF6B57] animate-pulse shadow-[0_0_12px_rgba(255,107,87,0.8)]" />
                <span className="font-mono text-[11px] sm:text-[12px] tracking-[0.25em] uppercase text-[#FF6B57] font-bold">
                  SiteSparkOne // Digital Agency
                </span>
              </motion.div>

              <div className="overflow-hidden">
                <motion.h1
                  {...(prefersReducedMotion ? {} : fadeUp(0.28))}
                  className="text-[clamp(3.2rem,8.5vw,7.5rem)] font-extrabold leading-[0.92] tracking-[-0.03em] text-white drop-shadow-lg"
                >
                  Digital work
                </motion.h1>
              </div>

              <div className="overflow-hidden">
                <motion.p
                  {...(prefersReducedMotion ? {} : fadeUp(0.38))}
                  className="mt-2 text-[clamp(2.8rem,7.5vw,6.5rem)] leading-[0.95] tracking-[-0.03em] text-[#F5F2EC] drop-shadow-md"
                  style={{ fontFamily: SERIF, fontStyle: "italic", fontWeight: 400 }}
                >
                  worth stopping for.
                </motion.p>
              </div>

              <motion.div
                {...(prefersReducedMotion ? {} : fadeUp(0.5))}
                className="mt-10 flex max-w-xl flex-col gap-5 sm:flex-row sm:items-center"
              >
                <Link
                  to="/contact"
                  className="group inline-flex w-fit items-center gap-3 rounded-xl bg-[#E05A47] px-8 py-5 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-[#F06854] shadow-2xl shadow-[#E05A47]/40"
                >
                  Start a project
                  <ArrowUpRight
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>

                <button
                  type="button"
                  className="group inline-flex w-fit items-center gap-4 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#F5F2EC] transition-colors duration-300 hover:text-white"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/15 backdrop-blur-md transition-all duration-300 group-hover:border-white/70 group-hover:bg-white/30 text-white shadow-md">
                    <Play size={13} className="ml-0.5" />
                  </span>
                  Showcased Work
                </button>
              </motion.div>
            </div>

            <motion.div
              {...(prefersReducedMotion ? {} : fadeUp(0.45))}
              className="lg:col-span-4 lg:pb-2"
            >
              <div className="border-l-2 border-white/30 pl-6 md:pl-8">
                <p className="text-[15px] sm:text-base leading-relaxed text-[#F5F2EC] font-normal drop-shadow">
                  A studio for brands that refuse to blend in. We design, build, and
                  launch digital experiences engineered to earn attention — and keep it.
                </p>

                <div className="mt-8 grid grid-cols-3 gap-4 border-t border-white/20 pt-6">
                  {STATS.map((stat) => (
                    <div key={stat.label}>
                      <p className="text-2xl font-extrabold tracking-tight text-white md:text-3xl drop-shadow">
                        {stat.value}
                      </p>
                      <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.22em] text-[#FF6B57] font-bold">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Scroll cue */}
          <motion.div
            {...(prefersReducedMotion ? {} : fadeUp(0.65))}
            className="flex items-end justify-between gap-6"
          >
            <p className="max-w-[220px] font-mono text-[10px] uppercase leading-relaxed tracking-[0.24em] text-[#F5F2EC] font-semibold drop-shadow">
              Scroll to enter the work
            </p>
            <div className="flex flex-col items-center gap-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-white font-bold drop-shadow">
                Scroll
              </span>
              <div className="relative h-14 w-px overflow-hidden bg-white/30">
                {!prefersReducedMotion && (
                  <motion.div
                    animate={{ y: ["-100%", "200%"] }}
                    transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
                    className="absolute inset-0 w-full bg-[#FF6B57]"
                  />
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ── ACT II · MANIFESTO BAND ──────────────────────────── */}
      <section className="relative z-20 overflow-hidden border-b border-[#D1C9BC] bg-[#EFEBE4] py-6 shadow-inner">
        <div className="flex w-full overflow-hidden">
          <motion.div
            className="flex shrink-0 items-center whitespace-nowrap"
            animate={prefersReducedMotion ? {} : { x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 32, ease: "linear" }}
          >
            {[0, 1].map((rep) => (
              <p
                key={rep}
                className="pr-8 text-2xl text-[#11100F] sm:text-4xl font-normal tracking-tight"
                style={{ fontFamily: SERIF, fontStyle: "italic" }}
              >
                {MANIFESTO.repeat(3)}
              </p>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── ACT III · PARTNERSHIPS ───────────────────────────── */}
      <section className="relative z-20 overflow-hidden bg-[#FAF8F5] py-20 md:py-28 border-b border-[#D1C9BC]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(224,90,71,0.04),transparent_70%)]" />

        <div className="relative mx-auto max-w-[1400px] px-[5vw]">
          <div className="mb-14 grid grid-cols-1 gap-10 md:mb-20 lg:grid-cols-12 lg:items-end lg:gap-16">
            <div className="lg:col-span-7">
              <span className="mb-5 inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.32em] text-[#C94735] font-bold">
                <span className="h-2 w-2 rounded-full bg-[#C94735]" />
                Client roster
              </span>
              <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-extrabold leading-[0.95] tracking-[-0.03em] text-[#11100F]">
                Selected{" "}
                <span className="text-[#665D52] font-normal" style={{ fontFamily: SERIF, fontStyle: "italic" }}>partnerships.</span>
              </h2>
            </div>
            <div className="border-l-2 border-[#C94735]/60 pl-6 lg:col-span-5 lg:pl-8">
              <p className="font-mono text-[11px] uppercase leading-relaxed tracking-[0.18em] text-[#3D3730] font-semibold">
                Twelve brands across four continents — one standard: work that
                outperforms the brief and survives first contact with the market.
              </p>
            </div>
          </div>

          <div className="relative flex flex-col gap-6 py-2">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#FAF8F5] to-transparent md:w-32" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#FAF8F5] to-transparent md:w-32" />

            <div className="overflow-hidden">
              <motion.div
                className="flex w-max items-center gap-6 pl-[5vw]"
                animate={prefersReducedMotion ? {} : { x: ["-50%", "0%"] }}
                transition={{ repeat: Infinity, duration: 34, ease: "linear" }}
              >
                {[...PARTNERS_ROW_ONE, ...PARTNERS_ROW_ONE, ...PARTNERS_ROW_ONE].map(
                  (partner, index) => (
                    <PartnerCard
                      key={`row-one-${partner.name}-${index}`}
                      partner={partner}
                      isActive={activePartner === `one-${index}`}
                      isDimmed={activePartner !== null && activePartner !== `one-${index}`}
                      onEnter={() => setActivePartner(`one-${index}`)}
                      onLeave={() => setActivePartner(null)}
                    />
                  )
                )}
              </motion.div>
            </div>

            <div className="overflow-hidden">
              <motion.div
                className="flex w-max items-center gap-6 pl-[5vw]"
                animate={prefersReducedMotion ? {} : { x: ["0%", "-50%"] }}
                transition={{ repeat: Infinity, duration: 38, ease: "linear" }}
              >
                {[...PARTNERS_ROW_TWO, ...PARTNERS_ROW_TWO, ...PARTNERS_ROW_TWO].map(
                  (partner, index) => (
                    <PartnerCard
                      key={`row-two-${partner.name}-${index}`}
                      partner={partner}
                      isActive={activePartner === `two-${index}`}
                      isDimmed={activePartner !== null && activePartner !== `two-${index}`}
                      onEnter={() => setActivePartner(`two-${index}`)}
                      onLeave={() => setActivePartner(null)}
                    />
                  )
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
