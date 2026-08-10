import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import logo from "../assets/logo.png";

const NAV_LINKS = [
  { label: "Work", path: "/work" },
  { label: "Services", path: "/services" },
  { label: "About", path: "/about" },
  { label: "Industries", path: "/industries" },
  { label: "Insights", path: "/insights" },
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
              ? "bg-[#FAF8F5]/95 backdrop-blur-xl border-b border-[#E8E2D9]"
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
            aria-label="SiteSparkOne — Home"
            className="relative z-[110] flex items-center shrink-0"
          >
            <img
              src={logo}
              alt="SiteSparkOne"
              className="h-8 md:h-9 w-auto object-contain"
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
                    ${active ? "text-[#1E1B18] font-bold" : "text-[#5C5346] hover:text-[#1E1B18]"}
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
                      bg-[#E05A47]
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
                border-[#E05A47]
                bg-[#E05A47]
                px-5
                py-3
                text-white
                font-mono
                text-[11px]
                tracking-[0.14em]
                uppercase
                font-bold
                transition-all
                duration-300
                hover:bg-transparent
                hover:text-[#1E1B18]
                hover:border-[#1E1B18]/40
                shadow-md
                shadow-[#E05A47]/15
              "
            >
              <span>Let's Talk</span>
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
              text-[#1E1B18]
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
              tracking-[0.2em]
              uppercase
              text-[#E05A47]
              font-semibold
              transition-all
              duration-500
              ${
                menuOpen
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-4 opacity-0"
              }
            `}
          >
            Navigation // SiteSparkOne
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
                  border-[#E8E2D9]
                  py-5
                  text-[#1E1B18]
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
                <span className="text-[clamp(30px,8vw,48px)] font-extrabold tracking-tight">
                  {item.label}
                </span>

                <ArrowRight
                  className="
                    w-5
                    h-5
                    text-[#8C8375]
                    transition-all
                    duration-300
                    group-hover:text-[#E05A47]
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
                bg-[#E05A47]
                px-6
                py-5
                text-white
                font-mono
                text-[11px]
                tracking-[0.16em]
                uppercase
                font-bold
                shadow-lg
                shadow-[#E05A47]/20
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

            <div className="mt-6 flex items-center justify-between font-mono text-[9px] tracking-[0.12em] uppercase text-[#8C8375]">
              <span>hello@sitesparkone.com</span>
              <span>Global</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
