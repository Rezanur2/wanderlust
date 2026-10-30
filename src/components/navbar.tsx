"use client";

import { useState } from "react";
import Link from "next/link";
import { CircleUserRound, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-8 h-14 flex items-center justify-between relative">
        {/* Left — Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-7">
          <Link
            href="/"
            className="text-sm font-medium text-[#0BBCD6] border-b-2 border-[#0BBCD6] pb-0.5 leading-none"
          >
            Home
          </Link>
          <Link
            href="/destinations"
            className="text-sm font-medium text-foreground hover:text-[#0BBCD6] transition-colors"
          >
            Destinations
          </Link>
          <Link
            href="/add-destination"
            className="text-sm font-medium text-foreground hover:text-[#0BBCD6] transition-colors"
          >
            Add Destination
          </Link>
          <Link
            href="/bookings"
            className="text-sm font-medium text-foreground hover:text-[#0BBCD6] transition-colors"
          >
            My Bookings
          </Link>
        </div>

        {/* Mobile: Brand logo on the left; Desktop: centered logo */}
        <div className="md:absolute md:left-1/2 md:-translate-x-1/2">
          <Link
            href="/"
            className="text-[#0BBCD6] text-xl sm:text-2xl font-bold tracking-wide"
          >
            Wanderlast
          </Link>
        </div>

        {/* Right — Desktop Auth Actions */}
        <div className="hidden md:flex items-center gap-5">
          <button className="flex items-center gap-1.5 text-sm text-foreground hover:text-[#0BBCD6] transition-colors">
            <CircleUserRound size={15} strokeWidth={1.8} />
            Profile
          </button>
          <button className="text-sm text-foreground hover:text-[#0BBCD6] transition-colors">
            Login
          </button>
          <button className="text-sm text-foreground hover:text-[#0BBCD6] transition-colors font-medium">
            Sign Up
          </button>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            className="p-2 text-foreground hover:text-[#0BBCD6] hover:bg-gray-100 rounded-md transition-colors"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-white px-6 py-5 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-4">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="text-sm font-medium text-[#0BBCD6] py-1 border-l-2 border-[#0BBCD6] pl-3"
            >
              Home
            </Link>
            <Link
              href="/destinations"
              onClick={() => setIsOpen(false)}
              className="text-sm font-medium text-foreground hover:text-[#0BBCD6] py-1 pl-3 transition-colors"
            >
              Destinations
            </Link>
            <Link
              href="/bookings"
              onClick={() => setIsOpen(false)}
              className="text-sm font-medium text-foreground hover:text-[#0BBCD6] py-1 pl-3 transition-colors"
            >
              My Bookings
            </Link>
            <Link
              href="/admin"
              onClick={() => setIsOpen(false)}
              className="text-sm font-medium text-foreground hover:text-[#0BBCD6] py-1 pl-3 transition-colors"
            >
              Admin
            </Link>

            <div className="border-t border-gray-100 pt-4 mt-2 flex flex-col space-y-3">
              <button
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 text-sm text-foreground hover:text-[#0BBCD6] py-1 pl-3 transition-colors text-left"
              >
                <CircleUserRound size={16} strokeWidth={1.8} />
                Profile
              </button>
              <div className="grid grid-cols-2 gap-3 pt-2">
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center py-2 text-sm font-medium border border-border rounded-md text-foreground hover:bg-gray-50 transition-colors"
                >
                  Login
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center py-2 text-sm font-medium bg-[#0BBCD6] text-white rounded-md hover:bg-[#09a8c0] transition-colors"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
