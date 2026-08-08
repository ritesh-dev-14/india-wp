"use client";
import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/* ============================================================
   CENTRALIZED PROJECT DATA (Full 5 Curated Exhibition Items)
============================================================ */

const PROJECTS = [
  {
    number: "01",
    name: "TRIVENI",
    subtitle: "The Granite Studio",
    categories: ["Brand Identity", "Website", "Digital Experience"],
    media: "https://res.cloudinary.com/vochf18f/image/upload/v1785387960/triveni2022_aiktgs.png",
    type: "image",
    href: "/work/triveni",
  },
  {
    number: "02",
    name: "NOVIX",
    subtitle: "Healthcare",
    categories: ["Brand Strategy", "Web Experience", "Digital Presence"],
    media: "https://res.cloudinary.com/gumevfef/image/upload/v1786181258/Screenshot_2026-08-08_at_1.49.13_PM_ejo63s.png",
    type: "image",
    href: "/work/novix",
  },
  
];

/* ============================================================
   ROOT COMPONENT
============================================================ */

export default function SelectedWork() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cursorRef = useRef(null);

  const [hoveredProject, setHoveredProject] = useState(null);
  const reduceMotionRef = useRef(false);

  // GSAP quickTo coordinate refs for buttery smooth, zero-latency custom cursor
  const cursorCoords = useRef({ x: 0, y: 0 });
  const cursorMoveX = useRef(null);
  const cursorMoveY = useRef(null);

  /* Global GSAP scroll setup & reduced motion check */
  useLayoutEffect(() => {
    reduceMotionRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      const headerEls = headerRef.current ? headerRef.current.querySelectorAll("[data-reveal]") : [];

      if (reduceMotionRef.current) {
        gsap.set(headerEls, { opacity: 1, y: 0 });
      } else {
        gsap.set(headerEls, { opacity: 0, y: 35 });

        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
          onEnter: () => {
            gsap.to(headerEls, {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power3.out",
              stagger: 0.1,
            });
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  /* Zero-latency magnetic cursor follower configuration via GSAP quickTo */
  useEffect(() => {
    if (reduceMotionRef.current || !cursorRef.current) return;

    cursorMoveX.current = gsap.quickTo(cursorRef.current, "x", { duration: 0.4, ease: "power3.out" });
    cursorMoveY.current = gsap.quickTo(cursorRef.current, "y", { duration: 0.4, ease: "power3.out" });

    const handleMouseMove = (e) => {
      cursorCoords.current = { x: e.clientX, y: e.clientY };
      cursorMoveX.current(e.clientX);
      cursorMoveY.current(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#000000] text-[#F5F5F5] py-[18vh] overflow-hidden selection:bg-white/20"
    >
      {/* ============================================================
         SECTION HEADER (Editorial Asymmetric Layout)
      ============================================================ */}
      <div className="mx-auto max-w-[1400px] px-[6vw] mb-[18vh]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          
          {/* Left Column: Eyebrow + Huge Statement Headline + Supporting Copy */}
          <div ref={headerRef} className="lg:col-span-8">
            <span
              data-reveal
              className="inline-flex items-center gap-3 text-[11px] font-mono tracking-[0.32em] uppercase text-[#8A8A8A] mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white/60"></span>
              SELECTED WORK
            </span>

            <h2
              data-reveal
              className="font-semibold leading-[0.92] tracking-tight text-[clamp(56px,8.2vw,140px)] mb-8"
            >
              Work that
              <br />
              speaks.
            </h2>

            <p
              data-reveal
              className="max-w-[44ch] text-[16px] leading-relaxed text-[#8A8A8A]"
            >
              A selection of digital experiences, identities and campaigns
              created to make brands impossible to ignore.
            </p>
          </div>

          {/* Right Column: Vertical Counter Index */}
          <div className="lg:col-span-4 lg:flex lg:justify-end hidden">
            <div className="font-mono text-[11px] tracking-[0.25em] text-[#8A8A8A] uppercase flex flex-col items-end gap-2">
              <span>01 — {String(PROJECTS.length).padStart(2, "0")}</span>
              <span className="text-[#F5F5F5]">SELECTED PROJECTS</span>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================
         PROJECT EXHIBITION STREAM
      ============================================================ */}
      <div className="mx-auto max-w-[1400px] px-[6vw] flex flex-col gap-[24vh]">
        {PROJECTS.map((project, index) => (
          <ProjectItem
            key={project.number}
            project={project}
            index={index}
            totalProjects={PROJECTS.length}
            onHover={setHoveredProject}
            reduceMotion={reduceMotionRef.current}
          />
        ))}
      </div>

      {/* ============================================================
         FINAL CALL TO ACTION
      ============================================================ */}
      <div className="mx-auto max-w-[1400px] px-[6vw] mt-[26vh] text-center">
        <p className="font-mono text-[12px] uppercase tracking-[0.25em] text-[#8A8A8A] mb-6">
          See everything we&apos;ve made.
        </p>
        <a
          href="/work"
          className="group inline-flex items-center gap-4 text-[14px] font-medium uppercase tracking-[0.2em] text-[#F5F5F5] border-b border-white/20 pb-2 transition-all duration-300 hover:border-white hover:text-white"
        >
          <span>VIEW ALL WORK</span>
          <span className="transition-transform duration-300 group-hover:translate-x-2">
            →
          </span>
        </a>
      </div>

      {/* ============================================================
         CUSTOM DESKTOP HOVER CURSOR ("VIEW CASE STUDY ↗")
      ============================================================ */}
      <div
        ref={cursorRef}
        className="pointer-events-none fixed top-0 left-0 z-50 hidden lg:flex items-center gap-2.5 bg-[#F5F5F5] text-[#000000] px-4.5 py-2.5 rounded-full font-mono text-[10px] tracking-[0.18em] uppercase shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-opacity duration-300"
        style={{
          transform: "translate(-50%, -50%)",
          opacity: hoveredProject !== null ? 1 : 0,
        }}
        aria-hidden="true"
      >
        <span>VIEW CASE STUDY</span>
        <span className="text-xs">↗</span>
      </div>
    </section>
  );
}

/* ============================================================
   INDIVIDUAL PROJECT ITEM COMPONENT
============================================================ */

function ProjectItem({ project, index, totalProjects, onHover, reduceMotion }) {
  const itemRef = useRef(null);
  const imageWrapperRef = useRef(null);
  const contentRef = useRef(null);

  /* GSAP Scroll Reveal and subtle parallax setup */
  useLayoutEffect(() => {
    if (reduceMotion) return;

    const ctx = gsap.context(() => {
      const imgContainer = imageWrapperRef.current;
      const details = contentRef.current;

      // Initial entry trigger with smooth scale & opacity
      gsap.fromTo(
        imgContainer,
        { scale: 0.86, opacity: 0, y: 90 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 1.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: itemRef.current,
            start: "top 82%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        details,
        { opacity: 0, y: 45 },
        {
          opacity: 1,
          y: 0,
          duration: 1.1,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: itemRef.current,
            start: "top 76%",
            once: true,
          },
        }
      );

      // Subtle vertical parallax movement across scroll stream
      gsap.to(imgContainer, {
        y: -35,
        ease: "none",
        scrollTrigger: {
          trigger: itemRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, itemRef);

    return () => ctx.revert();
  }, [reduceMotion]);

  return (
    <article
      ref={itemRef}
      className="group relative flex flex-col items-center"
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
    >
      {/* Clickable wrapper linking directly to the project case study */}
      <a
        href={project.href}
        className="block w-full focus:outline-none focus:ring-1 focus:ring-white/40 rounded-lg"
      >
        {/* ============================================================
           LARGE PROJECT VISUAL (65-75vw width, 58-70vh height)
        ============================================================ */}
        <div
          ref={imageWrapperRef}
          className="relative w-full max-w-[76vw] h-[60vh] md:h-[70vh] mx-auto overflow-hidden bg-[#121212] rounded-[6px] border border-white/[0.08]"
        >
          <ProjectMedia project={project} />
        </div>

        {/* ============================================================
           PROJECT METADATA & CASE STUDY INFORMATION (Asymmetric Layout)
        ============================================================ */}
        <div
          ref={contentRef}
          className="w-full max-w-[76vw] mx-auto mt-9 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          {/* Left Block: Number + Title + Subtitle */}
          <div>
            <div className="flex items-center gap-3 mb-2.5">
              <span className="font-mono text-[12px] tracking-[0.2em] text-[#8A8A8A]">
                {project.number} / {String(totalProjects).padStart(2, "0")}
              </span>
            </div>
            <h3 className="font-semibold text-[clamp(44px,5.5vw,76px)] tracking-tight leading-none mb-1.5 text-[#F5F5F5] group-hover:text-white transition-colors duration-300">
              {project.name}
            </h3>
            <p className="text-[15px] text-[#8A8A8A] font-medium tracking-wide">
              {project.subtitle}
            </p>
          </div>

          {/* Right Block: Categories & Action Arrow */}
          <div className="flex flex-col md:items-end gap-4">
            <ul className="flex flex-wrap md:justify-end gap-x-4 gap-y-1.5 max-w-[340px]">
              {project.categories.map((cat, catIdx) => (
                <li
                  key={catIdx}
                  className="font-mono text-[12px] uppercase tracking-[0.16em] text-[#8A8A8A]"
                >
                  {cat}{catIdx < project.categories.length - 1 ? " /" : ""}
                </li>
              ))}
            </ul>

            <div className="inline-flex items-center gap-2 text-[13px] font-mono uppercase tracking-[0.2em] text-[#F5F5F5] pt-1">
              <span>VIEW CASE STUDY</span>
              <span className="transition-transform duration-300 group-hover:translate-x-2">
                →
              </span>
            </div>
          </div>
        </div>
      </a>
    </article>
  );
}

/* ============================================================
   REUSABLE PROJECT MEDIA COMPONENT
============================================================ */

function ProjectMedia({ project }) {
  const mediaRef = useRef(null);

  useEffect(() => {
    if (project.type !== "video") return;

    const element = mediaRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.play().catch(() => {});
        } else {
          element.pause();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [project.type]);

  if (project.type === "video") {
    return (
      <video
        ref={mediaRef}
        src={project.media}
        muted
        loop
        playsInline
        preload="none"
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        alt={`${project.name} - ${project.subtitle}`}
      />
    );
  }

  return (
    <img
      src={project.media}
      alt={`${project.name} - ${project.subtitle}`}
      loading="lazy"
      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
    />
  );
}
