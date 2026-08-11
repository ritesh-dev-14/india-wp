import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";

const EASE = [0.76, 0, 0.24, 1];

const Footer = () => {
  return (
    <footer className="relative z-10 bg-surface text-ink border-t border-border">
      {/* Main Footer */}
      <div className="mx-auto max-w-[1600px] px-[5vw] pt-14 pb-6 md:pt-18">
        {/* Top: Redesigned Layout with Logo integration */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          
          {/* Brand & Logo Column (Span 6) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE }}
            className="lg:col-span-6 flex flex-col items-start justify-between h-full"
          >
            <div className="mb-8">
              <Link to="/" className="inline-block mb-6 group">
                <img 
                  src={logo} 
                  alt="We Promote Logo" 
                  className="h-8 md:h-10 w-auto object-contain brightness-90 group-hover:brightness-100 transition-all duration-300" 
                />
              </Link>
              <p className="max-w-[480px] text-[clamp(28px,3.8vw,54px)] leading-[0.96] tracking-[-0.04em] text-ink">
                We make brands
                <br />
                <span className="text-ink-muted font-normal" style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic" }}>
                  impossible to ignore.
                </span>
              </p>
            </div>

            <Link
              to="/contact"
              className="
                group
                inline-flex
                items-center
                gap-3
                border-b
                border-border
                pb-2
                font-mono
                text-[11px]
                tracking-[0.16em]
                uppercase
                transition-colors
                hover:border-ink
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
          </motion.div>

          {/* Navigation & Contact Columns wrapper (Span 6) */}
          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-8 pt-2 lg:pt-0">
            
            {/* Navigation Column 1 */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.08, ease: EASE }}
            >
              <p className="mb-4 font-mono text-[10px] tracking-[0.18em] uppercase text-ink-muted">
                Navigation
              </p>

              <nav className="flex flex-col items-start gap-2.5">
                <Link to="/work" className="text-sm text-ink-secondary transition-colors hover:text-ink">
                  Work
                </Link>
                <Link to="/services" className="text-sm text-ink-secondary transition-colors hover:text-ink">
                  Services
                </Link>
                <Link to="/about" className="text-sm text-ink-secondary transition-colors hover:text-ink">
                  About
                </Link>
                <Link to="/industries" className="text-sm text-ink-secondary transition-colors hover:text-ink">
                  Industries
                </Link>
              </nav>
            </motion.div>

            {/* Navigation Column 2 */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.12, ease: EASE }}
            >
              <p className="mb-4 font-mono text-[10px] tracking-[0.18em] uppercase text-ink-muted">
                More
              </p>

              <nav className="flex flex-col items-start gap-2.5">
                <Link to="/insights" className="text-sm text-ink-secondary transition-colors hover:text-ink">
                  Insights
                </Link>
                <Link to="/contact" className="text-sm text-ink-secondary transition-colors hover:text-ink">
                  Contact
                </Link>
              </nav>
            </motion.div>

            {/* Socials & Connect Column */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.16, ease: EASE }}
              className="col-span-2 sm:col-span-1"
            >
              <p className="mb-4 font-mono text-[10px] tracking-[0.18em] uppercase text-ink-muted">
                Get in touch
              </p>

              <a
                href="mailto:hello@wepromote.us"
                className="block text-sm text-ink-secondary transition-colors hover:text-ink mb-4"
              >
                hello@wepromoteindia.com
              </a>

              <div className="flex flex-col gap-2">
                <a
                  href="#"
                  className="flex items-center gap-1.5 text-sm text-ink-secondary transition-colors hover:text-ink group"
                >
                  Instagram
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                <a
                  href="#"
                  className="flex items-center gap-1.5 text-sm text-ink-secondary transition-colors hover:text-ink group"
                >
                  LinkedIn
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </motion.div>

          </div>

        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-border" />

        {/* Bottom */}
        <div className="flex flex-col gap-4 pt-5 text-[10px] font-mono tracking-[0.12em] uppercase text-ink-muted md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} We Promote. All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link
              to="/privacy-policy"
              className="transition-colors hover:text-ink"
            >
              Privacy
            </Link>

            <Link
              to="/terms-and-conditions"
              className="transition-colors hover:text-ink"
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
