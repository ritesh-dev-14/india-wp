import React, { useEffect, useRef, useState, useCallback } from "react";
import { Link } from "react-router-dom"; // Use 'next/link' if using Next.js
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "framer-motion";
import {
  ChevronDown,
  ArrowRight,
  Menu,
  X,
  Info,
  ShieldCheck,
  FileText,
  Megaphone,
  Share2,
  Search,
  Sparkles,
  TrendingUp,
  Video,
  PenTool,
  Layout,
  Globe,
  Code2,
  Smartphone,
  ShoppingCart,
} from "lucide-react";
import logo from "../assets/logo.webp";

// Memoized Icons for performance
const Instagram = React.memo(({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
));

const Facebook = React.memo(({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 3h-2a4 4 0 0 0-4 4v3H6v4h3v7h4v-7h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
));

const Linkedin = React.memo(({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
    <path d="M10 9v12" />
    <path d="M10 13a4 4 0 0 1 8 0v8" />
  </svg>
));

const Youtube = React.memo(({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 8.5a4 4 0 0 0-2.8-2.9C17.4 5 12 5 12 5s-5.4 0-7.2.6A4 4 0 0 0 2 8.5 41 41 0 0 0 2 12a41 41 0 0 0 0 3.5 4 4 0 0 0 2.8 2.9C6.6 19 12 19 12 19s5.4 0 7.2-.6a4 4 0 0 0 2.8-2.9A41 41 0 0 0 22 12a41 41 0 0 0 0-3.5z" />
    <path d="M10 9.5v5l4.5-2.5z" fill="currentColor" stroke="none" />
  </svg>
));

const Twitter = React.memo(({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M4 4l7.7 10.3L4.4 20H6l6-5.7 4.6 5.7H21l-8.1-10.9L19.6 4H18l-5.5 5.3L8.4 4z" />
  </svg>
));

/* ------------------------------------------------------------------ */
/*  Navigation data (Kept outside component to avoid re-creation)      */
/* ------------------------------------------------------------------ */

const companyItems = [
  { label: "About Us", href: "/about", icon: Info },
  { label: "Privacy Policy", href: "/privacy-policy", icon: ShieldCheck },
  { label: "Terms & Conditions", href: "/terms", icon: FileText },
];

const serviceItems = [
  { label: "Digital Marketing", description: "Full-funnel growth strategy across every channel.", href: "/services/digital-marketing", icon: Megaphone },
  { label: "Social Media", description: "Build a scroll-stopping presence that converts.", href: "/services/social-media-marketing", icon: Share2 },
  { label: "SEO Optimization", description: "Rank higher, get found, stay ahead of search.", href: "/services/seo-optimization", icon: Search },
  { label: "Branding", description: "Craft an identity that people actually remember.", href: "/services/branding", icon: Sparkles },
  { label: "Performance Marketing", description: "Paid campaigns engineered for measurable ROI.", href: "/services/performance-marketing", icon: TrendingUp },
  { label: "Video Production", description: "Cinematic content that tells your story right.", href: "/services/video-production", icon: Video },
  { label: "Graphic Design", description: "Visual design that gives every asset an edge.", href: "/services/graphic-designing", icon: PenTool },
];

const softwareItems = [
  { label: "UI / UX Design", description: "Interfaces people enjoy using, not just tolerate.", href: "/software/ui-ux-designing", icon: Layout },
  { label: "Website Design", description: "Sites that look sharp and load even sharper.", href: "/software/website-design", icon: Globe },
  { label: "Web Development", description: "Robust, scalable builds on modern frameworks.", href: "/software/web-development", icon: Code2 },
  { label: "Software Dev", description: "Custom systems engineered around your workflow.", href: "/software/software-development", icon: Code2 },
  { label: "Mobile Apps", description: "Native-feel apps for iOS and Android alike.", href: "/software/mobile-app-development", icon: Smartphone },
  { label: "E-commerce", description: "Storefronts built to turn browsers into buyers.", href: "/software/ecommerce-development", icon: ShoppingCart },
];

const navigation = [
  { kind: "link", label: "Home", href: "/" },
  { kind: "dropdown", label: "Company", items: companyItems },
  { kind: "mega", label: "Services", columns: 2, items: serviceItems },
  { kind: "mega", label: "Software", columns: 2, items: softwareItems },
  { kind: "link", label: "Contact", href: "/contact" },
];

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com", icon: Instagram },
  { label: "Facebook", href: "https://facebook.com", icon: Facebook },
  { label: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
  { label: "X", href: "https://x.com", icon: Twitter },
  { label: "YouTube", href: "https://youtube.com", icon: Youtube },
];

/* ------------------------------------------------------------------ */
/*  Motion variants (Kept outside to avoid recreation)                 */
/* ------------------------------------------------------------------ */

const dropdownVariants = {
  hidden: { opacity: 0, y: 10, scale: 0.95, filter: "blur(4px)" },
  visible: {
    opacity: 1, y: 0, scale: 1, filter: "blur(0px)",
    transition: { type: "spring", bounce: 0, duration: 0.4, staggerChildren: 0.04 },
  },
  exit: { opacity: 0, y: 5, scale: 0.95, filter: "blur(4px)", transition: { duration: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0, transition: { type: "spring", bounce: 0 } },
};

const mobilePanelVariants = {
  hidden: { opacity: 0, y: "-100%" },
  visible: {
    opacity: 1, y: "0%",
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1], staggerChildren: 0.05, delayChildren: 0.1 },
  },
  exit: { opacity: 0, y: "-100%", transition: { duration: 0.3, ease: [0.4, 0, 1, 1] } },
};

const mobileItemVariants = {
  hidden: { opacity: 0, y: -12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

const Navbar = () => {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState(null);
  
  const lastScrollY = useRef(0);
  const closeTimer = useRef(null);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 24);

    const previous = lastScrollY.current;
    if (latest > previous && latest > 120) {
      setHidden(true);
      setOpenMenu(null);
    } else {
      setHidden(false);
    }
    lastScrollY.current = latest;
  });

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Optimized handlers using useCallback
  const handleEnter = useCallback((label) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMenu(label);
  }, []);

  const handleLeave = useCallback(() => {
    closeTimer.current = setTimeout(() => setOpenMenu(null), 120);
  }, []);

  const toggleMobileAccordion = useCallback((label) => {
    setMobileAccordion((current) => (current === label ? null : label));
  }, []);

  const closeMobileMenu = useCallback(() => {
    setMobileOpen(false);
  }, []);

  return (
    <>
      <motion.header
        animate={{ y: hidden ? -120 : 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-x-0 top-4 z-50 flex justify-center px-4"
      >
        <motion.nav
          animate={{
            height: scrolled ? 64 : 76,
            backgroundColor: scrolled ? "rgba(10, 14, 31, 0.9)" : "rgba(10, 14, 31, 0.7)",
          }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex w-full max-w-[1200px] items-center justify-between rounded-full border border-white/[0.08] px-5 shadow-2xl backdrop-blur-xl sm:px-6"
          onMouseLeave={handleLeave}
        >
          {/* Logo */}
          <Link
            to="/"
            className="group flex shrink-0 items-center py-2 outline-none"
            aria-label="We Promote home"
          >
           <img 
              src={logo} 
              alt="We Promote Logo" 
              className="h-8 md:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
            />
          </Link>

          {/* Center navigation (desktop) */}
          <ul className="hidden items-center gap-2 lg:flex" role="menubar">
            {navigation.map((entry) => {
              if (entry.kind === "link") {
                return (
                  <li key={entry.label} role="none">
                    <Link
                      role="menuitem"
                      to={entry.href}
                      className="group relative inline-block px-4 py-2 text-sm font-medium text-slate-300 outline-none transition-colors duration-200 hover:text-white focus-visible:text-white"
                    >
                      {entry.label}
                      <span className="pointer-events-none absolute inset-x-4 -bottom-0 h-px origin-left scale-x-0 bg-blue-400 transition-transform duration-300 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100" />
                    </Link>
                  </li>
                );
              }

              const isOpen = openMenu === entry.label;

              return (
                <li
                  key={entry.label}
                  role="none"
                  className="relative"
                  onMouseEnter={() => handleEnter(entry.label)}
                >
                  <button
                    type="button"
                    role="menuitem"
                    aria-haspopup="true"
                    aria-expanded={isOpen}
                    onClick={() => setOpenMenu(isOpen ? null : entry.label)}
                    className="group inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-slate-300 outline-none transition-colors duration-200 hover:text-white focus-visible:text-white"
                  >
                    {entry.label}
                    <ChevronDown
                      className={`h-3.5 w-3.5 transition-transform duration-300 ${
                        isOpen ? "-rotate-180 text-blue-400" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && entry.kind === "dropdown" && (
                      <motion.div
                        variants={dropdownVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="absolute left-1/2 top-full z-20 mt-4 w-64 -translate-x-1/2 overflow-hidden rounded-2xl border border-white/10 bg-[#0a0e1f]/95 p-2 shadow-2xl backdrop-blur-xl"
                        role="menu"
                      >
                        {entry.items.map((item) => (
                          <motion.div key={item.label} variants={itemVariants}>
                            <Link
                              to={item.href}
                              role="menuitem"
                              className="group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-slate-300 outline-none transition-all duration-200 hover:bg-white/10 hover:text-white"
                            >
                              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-blue-400 transition-colors duration-200 group-hover:bg-blue-500 group-hover:text-white">
                                <item.icon className="h-4 w-4" />
                              </span>
                              {item.label}
                            </Link>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}

                    {isOpen && entry.kind === "mega" && (
                      <motion.div
                        variants={dropdownVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="fixed left-1/2 top-[5rem] z-20 w-[min(46rem,calc(100vw-2rem))] -translate-x-1/2 overflow-hidden rounded-3xl border border-white/10 bg-[#0a0e1f]/95 p-4 shadow-2xl backdrop-blur-xl"
                        role="menu"
                      >
                        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                          {entry.items.map((item) => (
                            <motion.div key={item.label} variants={itemVariants}>
                              <Link
                                to={item.href}
                                role="menuitem"
                                className="group relative flex items-start gap-3 rounded-2xl p-3 outline-none transition-all duration-300 hover:bg-white/5"
                              >
                                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 text-blue-400 transition-transform duration-300 group-hover:scale-110 group-hover:bg-blue-500/20 group-hover:text-blue-300">
                                  <item.icon className="h-5 w-5" />
                                </span>
                                <span className="flex-1">
                                  <span className="flex items-center justify-between text-sm font-semibold text-white">
                                    {item.label}
                                    <ArrowRight className="h-3.5 w-3.5 -translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                                  </span>
                                  <span className="mt-0.5 block text-[13px] leading-relaxed text-slate-400">
                                    {item.description}
                                  </span>
                                </span>
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>

          {/* Right section (desktop) */}
          <div className="hidden items-center gap-4 lg:flex">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-1.5 rounded-full bg-blue-600 px-5 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]"
            >
              Let's Talk
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Mobile trigger */}
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white outline-none transition-transform duration-200 hover:scale-105 lg:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </motion.nav>
      </motion.header>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            variants={mobilePanelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-40 flex flex-col overflow-y-auto bg-[#0a0e1f]/95 px-6 pb-8 pt-28 backdrop-blur-2xl lg:hidden"
          >
            <ul className="flex flex-1 flex-col gap-1">
              {navigation.map((entry) => {
                if (entry.kind === "link") {
                  return (
                    <motion.li key={entry.label} variants={mobileItemVariants} className="border-b border-white/5">
                      <Link
                        to={entry.href}
                        onClick={closeMobileMenu}
                        className="block py-4 text-lg font-medium text-white"
                      >
                        {entry.label}
                      </Link>
                    </motion.li>
                  );
                }

                const isExpanded = mobileAccordion === entry.label;
                const items = entry.items;

                return (
                  <motion.li key={entry.label} variants={mobileItemVariants} className="border-b border-white/5">
                    <button
                      type="button"
                      onClick={() => toggleMobileAccordion(entry.label)}
                      aria-expanded={isExpanded}
                      className="flex w-full items-center justify-between py-4 text-lg font-medium text-white"
                    >
                      {entry.label}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-300 ${
                          isExpanded ? "-rotate-180 text-blue-400" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.ul
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden pb-2"
                        >
                          {items.map((item) => (
                            <li key={item.label}>
                              <Link
                                to={item.href}
                                onClick={closeMobileMenu}
                                className="flex items-center gap-3 rounded-xl px-2 py-3 text-sm text-slate-400 transition-colors duration-200 hover:text-white"
                              >
                                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-blue-400">
                                  <item.icon className="h-4 w-4" />
                                </span>
                                {item.label}
                              </Link>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </motion.li>
                );
              })}
            </ul>

            <motion.div variants={mobileItemVariants} className="mt-6 flex items-center justify-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:bg-blue-600 hover:text-white"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </motion.div>

            <motion.div variants={mobileItemVariants}>
              <Link
                to="/contact"
                onClick={closeMobileMenu}
                className="mt-6 flex items-center justify-center gap-2 rounded-full bg-blue-600 px-5 py-4 text-base font-semibold text-white shadow-lg transition-all hover:bg-blue-500"
              >
                Let's Talk
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
