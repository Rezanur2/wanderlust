import Link from "next/link";
import { ArrowUpRight, X } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 pt-12 md:pt-14 pb-8">
        {/* Brand block */}
        <div className="mb-10 md:mb-12">
          <h2 className="text-4xl sm:text-6xl md:text-[7rem] font-bold text-white leading-none tracking-tight mb-3 wrap-break-word">
            Wanderlast
          </h2>
          <p className="text-white/50 text-xs sm:text-sm">
            Your gateway to extraordinary travel experiences around the world.
          </p>
        </div>

        {/* 4-column grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-20 lg:gap-10 mb-10 md:mb-14">
          {/* Newsletter */}
          <div>
            <h4 className="text-[0.65rem] font-bold tracking-[0.18em] uppercase text-white mb-2">
              Newsletter
            </h4>
            <p className="text-white/50 text-xs mb-4 leading-relaxed">
              Subscribe for exclusive travel deals and inspiration.
            </p>
            <div className="flex items-center border border-white/15 bg-white/5 rounded-sm overflow-hidden">
              <input
                type="email"
                placeholder="Enter email"
                className="flex-1 min-w-0 bg-transparent text-white/70 placeholder:text-white/35 text-xs sm:text-sm px-3.5 py-2.5 sm:py-3 outline-none"
              />
              <button
                aria-label="Subscribe"
                className="px-3.5 py-2.5 sm:py-3 text-white/60 hover:text-white transition-colors"
              >
                <ArrowUpRight size={17} />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[0.65rem] font-bold tracking-[0.18em] uppercase text-white mb-3 sm:mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 sm:space-y-3">
              {["Home", "Destinations", "My Bookings", "My Profile"].map(
                (label) => (
                  <li key={label}>
                    <Link
                      href="#"
                      className="text-white/50 hover:text-white text-xs sm:text-sm transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-[0.65rem] font-bold tracking-[0.18em] uppercase text-white mb-3 sm:mb-4">
              Support
            </h4>
            <ul className="space-y-2.5 sm:space-y-3">
              {["Help Center", "Terms of Service", "Privacy Policy"].map(
                (label) => (
                  <li key={label}>
                    <Link
                      href="#"
                      className="text-white/50 hover:text-white text-xs sm:text-sm transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-[0.65rem] font-bold tracking-[0.18em] uppercase text-white mb-3 sm:mb-4">
              Contact Us
            </h4>
            <ul className="space-y-2.5 sm:space-y-3">
              <li className="text-white/50 text-xs sm:text-sm">786 901 1622</li>
              <li className="text-white/50 text-xs sm:text-sm">info@wandarland.com</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-white/40 text-xs">
            © 2026 Wanderlust. All rights reserved.
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-5">
            {/* X / Twitter */}
            <button
              aria-label="X (Twitter)"
              className="text-white/50 hover:text-white transition-colors"
            >
              <X size={16} strokeWidth={2} />
            </button>

            {/* LinkedIn */}
            <button
              aria-label="LinkedIn"
              className="text-white/50 hover:text-white transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </button>

            {/* Instagram */}
            <button
              aria-label="Instagram"
              className="text-white/50 hover:text-white transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
