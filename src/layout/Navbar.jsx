"use client";

import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import logo from "../assets/logo.png";

const NAV_LINKS = [
  { label: "Work", path: "/work" },
  { label: "Services", path: "/services" },
  { label: "About", path: "/about" },
  { label: "Industries", path: "/industries" },
  { label: "Process", path: "/process" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll(); // Check on mount
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      {/* =====================================================
          DESKTOP / MOBILE NAVBAR
      ====================================================== */}
      <header
        className={`
          fixed top-0 left-0 w-full z-[100]
          transition-all duration-500 ease-out
          px-[5vw]
          ${
            menuOpen
              ? "bg-transparent border-transparent" // Blends with mobile menu when open
              : scrolled
                ? "bg-[#FAF8F5]/95 backdrop-blur-xl border-b border-[#8C6A1E]/20"
                : "bg-transparent" // Allows hero to show underneath
          }
        `}
      >
        <div
          className={`
            mx-auto
            max-w-[1400px]
            h-[76px]
            flex items-center justify-between
            transition-all duration-500
            ${scrolled && !menuOpen ? "h-[68px]" : ""}
          `}
        >
          {/* LOGO */}
          <Link
            to="/"
            aria-label="We Promote India — Home"
            className="relative z-[110] flex items-center shrink-0"
          >
            <img
              src={logo}
              alt="We Promote India"
              className="h-8 md:h-9 w-auto object-contain filter contrast-105"
            />
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav
            className="hidden lg:flex items-center gap-8 xl:gap-10"
            aria-label="Primary navigation"
          >
            {NAV_LINKS.map((item) => {
              const active = location.pathname === item.path;

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`
                    relative
                    py-2
                    font-mono
                    text-[11px]
                    xl:text-[12px]
                    tracking-[0.16em]
                    uppercase
                    transition-colors duration-300
                    ${active ? "text-[#1A1714] font-bold" : "text-[#78716C] hover:text-[#1A1714]"}
                  `}
                >
                  {item.label}

                  {/* Active indicator */}
                  <span
                    className={`
                      absolute
                      left-0
                      right-0
                      -bottom-1
                      h-px
                      bg-[#8C6A1E]
                      transition-transform duration-300 origin-left
                      ${active ? "scale-x-100" : "scale-x-0"}
                    `}
                  />
                </Link>
              );
            })}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex">
            <Link
              to="/contact"
              className="
                group
                inline-flex
                items-center
                gap-3
                border
                border-[#8C6A1E]/30
                bg-[#1A1714]
                px-6
                py-3
                text-[#FAF8F5]
                font-mono
                text-[11px]
                tracking-[0.18em]
                uppercase
                font-medium
                transition-all
                duration-300
                hover:border-[#8C6A1E]
                hover:bg-[#8C6A1E]
                shadow-[0_4px_16px_rgba(26,23,20,0.08)]
              "
            >
              <span>Let&apos;s Talk</span>
              <ArrowRight
                className="
                  w-3.5
                  h-3.5
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="
              lg:hidden
              relative
              z-[110]
              flex
              items-center
              justify-center
              w-10
              h-10
              text-[#1A1714]
              focus:outline-none
            "
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <X className="w-6 h-6" strokeWidth={1.5} />
            ) : (
              <Menu className="w-6 h-6" strokeWidth={1.5} />
            )}
          </button>
        </div>
      </header>

      {/* =====================================================
          MOBILE MENU
      ====================================================== */}
      <div
        className={`
          fixed
          inset-0
          z-[90]
          bg-[#FAF8F5]
          lg:hidden
          transition-all
          duration-500
          ease-[cubic-bezier(0.76,0,0.24,1)]
          ${
            menuOpen
              ? "opacity-100 visible pointer-events-auto"
              : "opacity-0 invisible pointer-events-none"
          }
        `}
      >
        <div className="h-full flex flex-col px-[7vw] pt-[120px] pb-8 overflow-y-auto">
          {/* Label */}
          <div
            className={`
              mb-10
              font-mono
              text-[10px]
              tracking-[0.25em]
              uppercase
              text-[#8C6A1E]
              font-bold
              transition-all
              duration-500
              ${
                menuOpen
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-4 opacity-0"
              }
            `}
          >
            Navigation // We Promote India
          </div>

          {/* Links */}
          <nav className="flex flex-col">
            {NAV_LINKS.map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                className={`
                  group
                  flex
                  items-center
                  justify-between
                  border-b
                  border-[#8C6A1E]/20
                  py-5
                  text-[#1A1714]
                  transition-all
                  duration-500
                  ${
                    menuOpen
                      ? "translate-y-0 opacity-100"
                      : "translate-y-6 opacity-0"
                  }
                `}
                style={{
                  transitionDelay: menuOpen ? `${index * 60 + 100}ms` : "0ms",
                }}
              >
                <span className="text-[clamp(30px,8vw,48px)] font-light tracking-tight">
                  {item.label}
                </span>

                <ArrowRight
                  className="
                    w-5
                    h-5
                    text-[#78716C]
                    transition-all
                    duration-300
                    group-hover:text-[#8C6A1E]
                    group-hover:translate-x-1
                  "
                />
              </Link>
            ))}
          </nav>

          {/* Bottom CTA */}
          <div
            className={`
              mt-auto pt-10
              transition-all
              duration-500
              ${
                menuOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }
            `}
            style={{ transitionDelay: menuOpen ? "400ms" : "0ms" }}
          >
            <Link
              to="/contact"
              className="
                group
                flex
                items-center
                justify-between
                w-full
                border
                border-[#8C6A1E]/30
                bg-[#1A1714]
                px-6
                py-5
                text-[#FAF8F5]
                font-mono
                text-[11px]
                tracking-[0.2em]
                uppercase
                font-medium
                shadow-[0_4px_20px_rgba(26,23,20,0.12)]
                hover:bg-[#8C6A1E]
                transition-all
                duration-300
              "
            >
              <span>Start a Project</span>

              <ArrowRight
                className="
                  w-4
                  h-4
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </Link>

            <div className="mt-6 flex items-center justify-between font-mono text-[10px] tracking-[0.15em] uppercase text-[#78716C]">
              <span>hello@wepromoteindia.com</span>
              <span>Global Mandates</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
