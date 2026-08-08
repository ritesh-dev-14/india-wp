import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative z-10 bg-[#070707] text-white">
      {/* Main Footer */}
      <div className="mx-auto max-w-[1600px] px-[5vw] pt-24 pb-8 md:pt-32">
        {/* Top */}
        <div className="grid gap-16 lg:grid-cols-[1.5fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <p className="max-w-[520px] text-[clamp(34px,4.5vw,68px)] leading-[0.95] tracking-[-0.05em]">
              We make brands
              <br />
              <span className="text-white/35">
                impossible to ignore.
              </span>
            </p>

            <Link
              to="/contact"
              className="
                group
                mt-10
                inline-flex
                items-center
                gap-3
                border-b
                border-white/30
                pb-2
                font-mono
                text-[11px]
                tracking-[0.16em]
                uppercase
                transition-colors
                hover:border-white
              "
            >
              Start a Project

              <ArrowUpRight
                className="
                  w-4
                  h-4
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              />
            </Link>
          </div>

          {/* Navigation */}
          <div>
            <p className="mb-6 font-mono text-[10px] tracking-[0.18em] uppercase text-white/30">
              Navigation
            </p>

            <nav className="flex flex-col items-start gap-3">
              <Link
                to="/work"
                className="text-sm text-white/60 transition-colors hover:text-white"
              >
                Work
              </Link>

              <Link
                to="/services"
                className="text-sm text-white/60 transition-colors hover:text-white"
              >
                Services
              </Link>

              <Link
                to="/about"
                className="text-sm text-white/60 transition-colors hover:text-white"
              >
                About
              </Link>

              <Link
                to="/industries"
                className="text-sm text-white/60 transition-colors hover:text-white"
              >
                Industries
              </Link>

              <Link
                to="/insights"
                className="text-sm text-white/60 transition-colors hover:text-white"
              >
                Insights
              </Link>

              <Link
                to="/contact"
                className="text-sm text-white/60 transition-colors hover:text-white"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-6 font-mono text-[10px] tracking-[0.18em] uppercase text-white/30">
              Get in touch
            </p>

            <a
              href="mailto:hello@wepromote.us"
              className="text-sm text-white/60 transition-colors hover:text-white"
            >
              hello@wepromote.us
            </a>

            <div className="mt-8 flex flex-col gap-3">
              <a
                href="#"
                className="flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
              >
                Instagram
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="#"
                className="flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
              >
                LinkedIn
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-24 border-t border-white/[0.1]" />

        {/* Bottom */}
        <div className="flex flex-col gap-4 pt-6 text-[10px] font-mono tracking-[0.12em] uppercase text-white/30 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} We Promote. All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link
              to="/privacy-policy"
              className="transition-colors hover:text-white"
            >
              Privacy
            </Link>

            <Link
              to="/terms-and-conditions"
              className="transition-colors hover:text-white"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;