"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

/* ============================================================
   CONFIG
============================================================ */

const FRAME_CONFIG = {
  basePath: "/assets/background/frames",
  prefix: "frame-",
  extension: ".webp",
  totalFrames: 120,
  padLength: 3,
  initialPreload: 15,
  batchSize: 20,
};

const PALETTE = {
  ivory: "#FAFAF9",
  dark: "#F5F5F4",
  secondary: "#D6D3D1",
  accent: "#6366F1",
  warm: "#E7E5E4",
};

const SECTION_THEMES = {
  hero: {
    canvasOpacity: 0.06,
    baseMix: 0.08,
    accentIntensity: 0.18,
    warmth: 0.05,
    scale: 1.03,
    lightX: 52,
    lightY: 38,
    vignette: 0.82,
    frameBias: 0,
    heroDarkness: 0.92,
  },
  create: {
    canvasOpacity: 0.38,
    baseMix: 0.42,
    accentIntensity: 0.12,
    warmth: 0.35,
    scale: 1.01,
    lightX: 38,
    lightY: 45,
    vignette: 0.55,
    frameBias: 0.12,
    heroDarkness: 0.35,
  },
  work: {
    canvasOpacity: 0.48,
    baseMix: 0.52,
    accentIntensity: 0.2,
    warmth: 0.22,
    scale: 1.04,
    lightX: 65,
    lightY: 42,
    vignette: 0.62,
    frameBias: 0.28,
    heroDarkness: 0.2,
  },
  difference: {
    canvasOpacity: 0.44,
    baseMix: 0.48,
    accentIntensity: 0.1,
    warmth: 0.48,
    scale: 1,
    lightX: 45,
    lightY: 35,
    vignette: 0.48,
    frameBias: 0.42,
    heroDarkness: 0.12,
  },
  results: {
    canvasOpacity: 0.36,
    baseMix: 0.4,
    accentIntensity: 0.08,
    warmth: 0.42,
    scale: 1,
    lightX: 50,
    lightY: 50,
    vignette: 0.42,
    frameBias: 0.55,
    heroDarkness: 0.08,
  },
  process: {
    canvasOpacity: 0.5,
    baseMix: 0.58,
    accentIntensity: 0.14,
    warmth: 0.18,
    scale: 1.02,
    lightX: 30,
    lightY: 55,
    vignette: 0.68,
    frameBias: 0.68,
    heroDarkness: 0.25,
  },
  testimonials: {
    canvasOpacity: 0.34,
    baseMix: 0.38,
    accentIntensity: 0.09,
    warmth: 0.38,
    scale: 1,
    lightX: 55,
    lightY: 48,
    vignette: 0.5,
    frameBias: 0.78,
    heroDarkness: 0.1,
  },
  industries: {
    canvasOpacity: 0.46,
    baseMix: 0.5,
    accentIntensity: 0.32,
    warmth: 0.28,
    scale: 1.02,
    lightX: 72,
    lightY: 40,
    vignette: 0.58,
    frameBias: 0.88,
    heroDarkness: 0.15,
  },
  cta: {
    canvasOpacity: 0.58,
    baseMix: 0.62,
    accentIntensity: 0.28,
    warmth: 0.32,
    scale: 1.05,
    lightX: 50,
    lightY: 42,
    vignette: 0.72,
    frameBias: 1,
    heroDarkness: 0.18,
  },
};

const DEFAULT_THEME = SECTION_THEMES.hero;

const GRAIN_SVG = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`;

/* ============================================================
   HELPERS
============================================================ */

function getFramePath(index) {
  const num = String(index).padStart(FRAME_CONFIG.padLength, "0");
  return `${FRAME_CONFIG.basePath}/${FRAME_CONFIG.prefix}${num}${FRAME_CONFIG.extension}`;
}

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function lerpTheme(from, to, t) {
  const result = {};
  for (const key of Object.keys(from)) {
    result[key] = lerp(from[key], to[key], t);
  }
  return result;
}

function getMaxDpr(isMobile) {
  return isMobile ? 1.25 : Math.min(window.devicePixelRatio || 1, 2);
}

function drawImageCover(ctx, img, width, height, scale = 1) {
  if (!img?.complete || !img.naturalWidth) return;

  const imgRatio = img.naturalWidth / img.naturalHeight;
  const canvasRatio = width / height;
  let drawWidth;
  let drawHeight;

  if (imgRatio > canvasRatio) {
    drawHeight = height * scale;
    drawWidth = drawHeight * imgRatio;
  } else {
    drawWidth = width * scale;
    drawHeight = drawWidth / imgRatio;
  }

  const offsetX = (width - drawWidth) / 2;
  const offsetY = (height - drawHeight) / 2;
  ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
}

function hexToRgb(hex) {
  const normalized = hex.replace("#", "");
  const value = parseInt(normalized, 16);
  return {
    r: (value >> 16) & 255,
    g: (value >> 8) & 255,
    b: value & 255,
  };
}

function mixHex(a, b, t) {
  const c1 = hexToRgb(a);
  const c2 = hexToRgb(b);
  const r = Math.round(lerp(c1.r, c2.r, t));
  const g = Math.round(lerp(c1.g, c2.g, t));
  const bVal = Math.round(lerp(c1.b, c2.b, t));
  return `rgb(${r}, ${g}, ${bVal})`;
}

function drawFallbackAtmosphere(ctx, width, height, theme, time, reduceMotion) {
  const baseMix = theme.baseMix;
  const baseColor = mixHex(PALETTE.dark, PALETTE.ivory, baseMix);
  ctx.fillStyle = baseColor;
  ctx.fillRect(0, 0, width, height);

  const drift = reduceMotion ? 0 : time * 0.00004;
  const lightX = width * (theme.lightX / 100) + Math.sin(drift) * width * 0.03;
  const lightY = height * (theme.lightY / 100) + Math.cos(drift * 0.85) * height * 0.025;

  const accent = ctx.createRadialGradient(
    lightX,
    lightY,
    0,
    lightX,
    lightY,
    Math.max(width, height) * 0.65
  );
  accent.addColorStop(0, `rgba(38, 58, 120, ${0.14 * theme.accentIntensity})`);
  accent.addColorStop(0.45, `rgba(38, 58, 120, ${0.04 * theme.accentIntensity})`);
  accent.addColorStop(1, "rgba(38, 58, 120, 0)");
  ctx.fillStyle = accent;
  ctx.fillRect(0, 0, width, height);

  const warmX = width * (1 - theme.lightX / 100) + Math.cos(drift * 0.7) * width * 0.04;
  const warmY = height * 0.72 + Math.sin(drift * 0.6) * height * 0.03;
  const warm = ctx.createRadialGradient(
    warmX,
    warmY,
    0,
    warmX,
    warmY,
    Math.max(width, height) * 0.5
  );
  warm.addColorStop(0, `rgba(196, 184, 168, ${0.12 * theme.warmth})`);
  warm.addColorStop(1, "rgba(196, 184, 168, 0)");
  ctx.fillStyle = warm;
  ctx.fillRect(0, 0, width, height);

  const shapeX = width * 0.78 + Math.sin(drift * 0.5) * 30;
  const shapeY = height * 0.28 + Math.cos(drift * 0.45) * 25;
  const shape = ctx.createRadialGradient(shapeX, shapeY, 0, shapeX, shapeY, width * 0.35);
  shape.addColorStop(0, `rgba(95, 92, 86, ${0.06 * theme.warmth})`);
  shape.addColorStop(1, "rgba(95, 92, 86, 0)");
  ctx.fillStyle = shape;
  ctx.fillRect(0, 0, width, height);
}

/* ============================================================
   FRAME LOADER
============================================================ */

function createFrameLoader(onFrameLoaded) {
  const cache = new Map();
  const loading = new Set();
  let available = null;
  let highestLoaded = 0;

  const loadFrame = (index) => {
    if (cache.has(index) || loading.has(index)) return Promise.resolve(cache.get(index) ?? null);
    if (index < 1 || index > FRAME_CONFIG.totalFrames) return Promise.resolve(null);

    loading.add(index);
    return new Promise((resolve) => {
      const img = new Image();
      img.decoding = "async";
      img.onload = () => {
        cache.set(index, img);
        loading.delete(index);
        highestLoaded = Math.max(highestLoaded, index);
        onFrameLoaded?.(index);
        resolve(img);
      };
      img.onerror = () => {
        loading.delete(index);
        resolve(null);
      };
      img.src = getFramePath(index);
    });
  };

  const checkAvailability = async () => {
    if (available !== null) return available;
    const img = await loadFrame(1);
    available = Boolean(img);
    return available;
  };

  const preloadInitial = async () => {
    const hasFrames = await checkAvailability();
    if (!hasFrames) return false;

    const end = Math.min(FRAME_CONFIG.initialPreload, FRAME_CONFIG.totalFrames);
    await Promise.all(Array.from({ length: end }, (_, i) => loadFrame(i + 1)));
    preloadRemaining(false);
    return true;
  };

  const preloadAhead = (currentIndex, isMobile) => {
    if (!available) return;
    const step = isMobile ? 3 : 1;
    const start = Math.max(1, currentIndex - 2 * step);
    const end = Math.min(FRAME_CONFIG.totalFrames, currentIndex + FRAME_CONFIG.batchSize * step);

    for (let i = start; i <= end; i += step) {
      loadFrame(i);
    }
  };

  const getNearestFrame = (index, isMobile) => {
    const step = isMobile ? 3 : 1;
    const snapped = isMobile ? Math.round(index / step) * step || step : index;
    const clamped = Math.min(FRAME_CONFIG.totalFrames, Math.max(1, snapped));

    if (cache.has(clamped)) return cache.get(clamped);
    for (let offset = 0; offset <= step * 4; offset += step) {
      if (cache.has(clamped - offset)) return cache.get(clamped - offset);
      if (cache.has(clamped + offset)) return cache.get(clamped + offset);
    }
    return cache.get(1) ?? null;
  };

  const preloadRemaining = (isMobile) => {
    const step = isMobile ? 3 : 1;
    let index = FRAME_CONFIG.initialPreload + 1;

    const loadNextBatch = () => {
      if (!available || index > FRAME_CONFIG.totalFrames) return;

      const end = Math.min(index + FRAME_CONFIG.batchSize * step, FRAME_CONFIG.totalFrames);
      for (let i = index; i <= end; i += step) {
        loadFrame(i);
      }
      index = end + step;

      const schedule =
        typeof requestIdleCallback === "function"
          ? (cb) => requestIdleCallback(cb, { timeout: 2000 })
          : (cb) => setTimeout(cb, 250);

      schedule(loadNextBatch);
    };

    loadNextBatch();
  };

  return {
    checkAvailability,
    preloadInitial,
    preloadRemaining,
    preloadAhead,
    getNearestFrame,
    get hasFrames() {
      return available;
    },
  };
}

/* ============================================================
   COMPONENT
============================================================ */

export default function HomepageBackground() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const rafRef = useRef(null);
  const scrollProgressRef = useRef(0);
  const smoothFrameRef = useRef(1);
  const themeRef = useRef({ ...DEFAULT_THEME });
  const targetThemeRef = useRef({ ...DEFAULT_THEME });
  const timeRef = useRef(0);
  const sizeRef = useRef({ width: 0, height: 0, dpr: 1 });
  const loaderRef = useRef(null);
  const reduceMotionRef = useRef(false);
  const paintRef = useRef(null);

  const [useFrames, setUseFrames] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const { scrollYProgress } = useScroll();

  const applyThemeToDom = useCallback((theme) => {
    const root = containerRef.current;
    if (!root) return;

    const baseStart = mixHex(PALETTE.ivory, PALETTE.dark, 1 - theme.baseMix);
    const baseMid = mixHex(PALETTE.ivory, PALETTE.accent, 0.15);
    const baseEnd = mixHex(PALETTE.dark, PALETTE.ivory, theme.baseMix * 0.5);

    root.style.setProperty("--bg-canvas-opacity", String(theme.canvasOpacity));
    root.style.setProperty("--bg-hero-darkness", String(theme.heroDarkness * 0.85));
    root.style.setProperty("--bg-gradient-opacity", String(0.35 + theme.baseMix * 0.25));
    root.style.setProperty("--bg-gradient", `linear-gradient(165deg, ${baseStart} 0%, ${baseMid} 48%, ${baseEnd} 100%)`);
    root.style.setProperty("--bg-grid-opacity", String(0.018 + theme.warmth * 0.012));
    root.style.setProperty("--bg-vignette-opacity", String(theme.vignette * 0.55));
  }, []);

  const paint = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const { width, height, dpr } = sizeRef.current;
    if (!width || !height) return;

    themeRef.current = lerpTheme(themeRef.current, targetThemeRef.current, 0.035);
    const theme = themeRef.current;
    applyThemeToDom(theme);

    const progress = scrollProgressRef.current;
    const frameStep = isMobile ? 3 : 1;
    const maxFrame = FRAME_CONFIG.totalFrames;
    const biasedProgress = Math.min(1, Math.max(0, progress * 0.85 + theme.frameBias * 0.15));
    const targetFrame = 1 + biasedProgress * (maxFrame - 1);
    smoothFrameRef.current = lerp(smoothFrameRef.current, targetFrame, reduceMotion ? 1 : 0.06);

    const frameIndex = Math.round(smoothFrameRef.current / frameStep) * frameStep;
    loaderRef.current?.preloadAhead(frameIndex, isMobile);

    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, width, height);

    const loader = loaderRef.current;
    const hasFrames = useFrames && loader?.hasFrames;
    const frame = hasFrames ? loader.getNearestFrame(frameIndex, isMobile) : null;

    if (frame) {
      drawImageCover(ctx, frame, width, height, theme.scale);
    } else {
      drawFallbackAtmosphere(ctx, width, height, themeRef.current, timeRef.current, reduceMotion);
    }

    timeRef.current += 16;
  }, [applyThemeToDom, isMobile, reduceMotion, useFrames]);

  paintRef.current = paint;

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    scrollProgressRef.current = value;
    if (reduceMotion) {
      paintRef.current?.();
    }
  });

  const startLoop = useCallback(() => {
    if (rafRef.current) return;

    const tick = () => {
      paint();
      if (!reduceMotion) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        rafRef.current = null;
      }
    };

    rafRef.current = requestAnimationFrame(tick);
  }, [paint, reduceMotion]);

  const stopLoop = useCallback(() => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
  }, []);

  const handleResize = useCallback(() => {
    sizeRef.current = {
      width: window.innerWidth,
      height: window.innerHeight,
      dpr: getMaxDpr(window.matchMedia("(max-width: 768px)").matches),
    };
    paint();
  }, [paint]);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mobileQuery = window.matchMedia("(max-width: 768px)");

    const applyMotion = () => setReduceMotion(motionQuery.matches);
    const applyMobile = () => setIsMobile(mobileQuery.matches);

    applyMotion();
    applyMobile();

    motionQuery.addEventListener("change", applyMotion);
    mobileQuery.addEventListener("change", applyMobile);

    return () => {
      motionQuery.removeEventListener("change", applyMotion);
      mobileQuery.removeEventListener("change", applyMobile);
    };
  }, []);

  useEffect(() => {
    reduceMotionRef.current = reduceMotion;
  }, [reduceMotion]);

  useEffect(() => {
    loaderRef.current = createFrameLoader(() => paintRef.current?.());

    const init = async () => {
      if (isMobile) {
        setUseFrames(false);
        return;
      }

      const ready = await loaderRef.current.preloadInitial();
      setUseFrames(ready);
    };

    init();
  }, [isMobile]);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize, { passive: true });
    stopLoop();
    startLoop();

    return () => {
      window.removeEventListener("resize", handleResize);
      stopLoop();
    };
  }, [handleResize, startLoop, stopLoop, reduceMotion]);

  useEffect(() => {
    if (reduceMotion) {
      scrollProgressRef.current = scrollYProgress.get();
      paint();
    }
  }, [reduceMotion, paint, scrollYProgress]);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("[data-bg-section]"));
    if (!sections.length) {
      targetThemeRef.current = { ...SECTION_THEMES.hero };
      return undefined;
    }

    const ratios = new Map();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          ratios.set(entry.target, entry.isIntersecting ? entry.intersectionRatio : 0);
        });

        let bestEl = sections[0];
        let bestRatio = 0;

        sections.forEach((section) => {
          const ratio = ratios.get(section) ?? 0;
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestEl = section;
          }
        });

        const themeKey = bestEl.getAttribute("data-bg-theme") || "create";
        targetThemeRef.current = { ...(SECTION_THEMES[themeKey] ?? DEFAULT_THEME) };
        if (reduceMotionRef.current) {
          paintRef.current?.();
        }
      },
      {
        threshold: [0, 0.1, 0.25, 0.4, 0.55, 0.7, 0.85, 1],
        rootMargin: "-10% 0px -10% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      style={{
        backgroundColor: PALETTE.dark,
        "--bg-canvas-opacity": DEFAULT_THEME.canvasOpacity,
        "--bg-hero-darkness": DEFAULT_THEME.heroDarkness * 0.85,
        "--bg-gradient-opacity": 0.35 + DEFAULT_THEME.baseMix * 0.25,
        "--bg-gradient": `linear-gradient(165deg, ${PALETTE.dark} 0%, ${PALETTE.accent}15 48%, ${PALETTE.dark} 100%)`,
        "--bg-grid-opacity": 0.018 + DEFAULT_THEME.warmth * 0.012,
        "--bg-vignette-opacity": DEFAULT_THEME.vignette * 0.55,
      }}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full"
        style={{ opacity: "var(--bg-canvas-opacity)" }}
      />

      <div
        className="absolute inset-0"
        style={{
          opacity: "var(--bg-hero-darkness)",
          background:
            "radial-gradient(ellipse 90% 70% at 50% 40%, rgba(245,245,244,0) 0%, rgba(245,245,244,0.55) 55%, rgba(245,245,244,0.92) 100%)",
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          opacity: "var(--bg-gradient-opacity)",
          background: "var(--bg-gradient)",
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          opacity: "var(--bg-grid-opacity)",
          backgroundImage: `
            linear-gradient(to right, ${PALETTE.secondary} 1px, transparent 1px),
            linear-gradient(to bottom, ${PALETTE.secondary} 1px, transparent 1px)
          `,
          backgroundSize: "120px 120px",
          maskImage: "radial-gradient(ellipse 80% 70% at 50% 50%, black 20%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 50% 50%, black 20%, transparent 100%)",
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          opacity: "var(--bg-vignette-opacity)",
          background: "radial-gradient(ellipse at center, transparent 35%, rgba(245,245,244,0.75) 100%)",
        }}
      />

      <div
        className="absolute inset-0 mix-blend-overlay"
        style={{
          opacity: 0.03,
          backgroundImage: GRAIN_SVG,
          backgroundSize: "200px 200px",
        }}
      />
    </div>
  );
}
