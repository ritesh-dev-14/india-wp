import { useRef } from "react";
import { Play, ArrowUpRight, Palette, Wand2, Volume2 } from "lucide-react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/*
  Type note: matches the italic accent face used elsewhere on the page.
  Add Instrument Serif to your <head> for the intended look:
  <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet">
*/
const SERIF = "'Instrument Serif', 'Times New Roman', ui-serif, Georgia, serif";

// Swap these for your real assets — public paths, not bundled imports,
// so this section works even before the media is dropped in.
const featuredProject = {
  name: "Nocturne",
  type: "Commercial Edit",
  duration: "45 SEC",
  video: "/media/featured-reel.mp4",
  poster: "/media/featured-poster.jpg",
  href: "/work/nocturne",
  tags: [
    { label: "Color Grading", icon: Palette },
    { label: "Motion Graphics", icon: Wand2 },
    { label: "Sound Design", icon: Volume2 },
  ],
};

const FeaturedProjects = () => {
  const cardRef = useRef(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { damping: 30, stiffness: 200, mass: 0.6 });
  const springY = useSpring(rotateY, { damping: 30, stiffness: 200, mass: 0.6 });

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    rotateY.set(px * 5);
    rotateX.set(py * -5);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <section className="relative z-20 overflow-hidden border-t border-white/10 bg-black py-32">
      {/* Acid Green Ambient Mesh Glow */}
      <div className="pointer-events-none absolute top-1/3 left-1/2 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-[#CCFF00]/5 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-8 lg:px-16">
        {/* Top hairline */}
        <div className="mb-16 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />

        {/* Section header */}
        <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded border border-[#CCFF00]/30 bg-[#CCFF00]/5 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.3em] text-[#CCFF00]">
              [ FEATURED SHOWREEL ]
            </div>
            <h2 className="text-4xl font-light uppercase leading-none tracking-tighter text-white sm:text-7xl">
              FEATURED <br />
              <span className="font-black text-[#CCFF00]">PROJECT.</span>
            </h2>
          </div>
          <div className="max-w-xs border-l border-white/20 pl-6">
            <p className="font-mono text-xs uppercase leading-relaxed tracking-wider text-white/50">
              One story, cut, graded, and scored until every frame earns its place.
            </p>
          </div>
        </div>

        {/* Netflix-style featured card */}
        <motion.a
          ref={cardRef}
          href={featuredProject.href}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ rotateX: springX, rotateY: springY, transformPerspective: 1200 }}
          className="group relative block aspect-video w-full overflow-hidden border border-white/10 bg-[#0a0a0a] [transform-style:preserve-3d]"
        >
          {/* Media — desaturated at rest, graded to full color on hover */}
          <video
            autoPlay
            muted
            loop
            playsInline
            poster={featuredProject.poster}
            className="absolute inset-0 h-full w-full object-cover grayscale-[0.6] brightness-75 saturate-[0.6] transition-all duration-[1200ms] ease-out group-hover:scale-[1.06] group-hover:grayscale-0 group-hover:brightness-100 group-hover:saturate-100"
          >
            <source src={featuredProject.video} type="video/mp4" />
          </video>

          {/* Cinematic vignette / legibility gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/10 transition-all duration-700 group-hover:from-black/90" />

          {/* Light-sweep, the signature cinematic hover cue */}
          <div className="pointer-events-none absolute inset-0 -translate-x-[120%] skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-[1100ms] ease-out group-hover:translate-x-[120%]" />

          {/* Corner brackets, echoing the partner-logo cards */}
          <div className="absolute right-6 top-6 h-3 w-3 border-r border-t border-white/30 transition-colors duration-500 group-hover:border-[#CCFF00]" />
          <div className="absolute bottom-6 left-6 h-3 w-3 border-b border-l border-white/30 transition-colors duration-500 group-hover:border-[#CCFF00]" />

          {/* Featured / duration meta, top-left */}
          <div className="absolute left-6 top-6 flex items-center gap-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/60">Featured</span>
            <span className="h-1 w-1 rounded-full bg-[#CCFF00]" />
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/60">
              {featuredProject.duration}
            </span>
          </div>

          {/* Play control */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="absolute h-20 w-20 rounded-full border border-[#CCFF00]/40 opacity-0 transition-opacity duration-500 group-hover:animate-ping group-hover:opacity-100" />
            <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-white/30 bg-black/40 backdrop-blur-md transition-all duration-500 ease-out group-hover:scale-110 group-hover:border-[#CCFF00] group-hover:bg-[#CCFF00]">
              <Play
                size={22}
                fill="currentColor"
                className="ml-1 text-white transition-colors duration-500 group-hover:text-black"
              />
            </div>
          </div>

          {/* Bottom content block */}
          <div className="absolute inset-x-0 bottom-0 p-8 sm:p-12">
            <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.3em] text-white/50">
              {featuredProject.type}
            </p>
            <h3
              className="mb-6 text-4xl leading-none text-white transition-transform duration-700 ease-out group-hover:-translate-y-1 sm:text-6xl"
              style={{ fontFamily: SERIF, fontStyle: "italic", fontWeight: 400 }}
            >
              {featuredProject.name}
            </h3>

            {/* Tags reveal on hover */}
            <div className="mb-6 flex flex-wrap items-center gap-3 opacity-0 translate-y-3 transition-all duration-500 delay-100 ease-out group-hover:translate-y-0 group-hover:opacity-100">
              {featuredProject.tags.map((tag) => (
                <span
                  key={tag.label}
                  className="inline-flex items-center gap-1.5 border border-white/15 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-white/70"
                >
                  <tag.icon size={11} />
                  {tag.label}
                </span>
              ))}
            </div>

            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.3em] text-white transition-all duration-500 group-hover:gap-4 group-hover:text-[#CCFF00]">
              View Case Study
              <ArrowUpRight size={14} />
            </span>
          </div>
        </motion.a>

        {/* Bottom hairline */}
        <div className="mt-16 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      </div>
    </section>
  );
};

export default FeaturedProjects;