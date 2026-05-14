"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <header className="w-full bg-[#000066]/95 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="ISCL Logo"
            width={160}
            height={60}
            className="object-contain"
            priority
          />
        </Link>

        {/* RIGHT NAV */}
        <nav className="hidden md:flex items-center gap-10 ml-auto text-sm font-medium text-white/80">

          {/* HOME */}
          <Link
            href="/"
            className="hover:text-[#FEC619] transition"
          >
            Home
          </Link>

          {/* ABOUT DROPDOWN */}
          <div
            className="relative"
            onMouseEnter={() => setAboutOpen(true)}
            onMouseLeave={() => setAboutOpen(false)}
          >

            <button className="flex items-center gap-2 hover:text-[#FEC619] transition">

              About

              <span
                className={`transition duration-300 ${
                  aboutOpen ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>

            </button>

            {/* Dropdown */}
            <div
              className={`absolute top-full left-0 mt-4 w-64 bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] overflow-hidden transition-all duration-300 ${
                aboutOpen
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible -translate-y-2"
              }`}
            >

              <div className="py-3">

                <Link
                  href="/about"
                  className="block px-6 py-4 text-[#000066] hover:bg-[#F8F9FC] hover:text-[#0B3AA4] transition font-medium"
                >
                  About ISCL
                </Link>

                <Link
                  href="/about/team"
                  className="block px-6 py-4 text-[#000066] hover:bg-[#F8F9FC] hover:text-[#0B3AA4] transition font-medium"
                >
                  Team
                </Link>

                <Link
                  href="/media"
                  className="block px-6 py-4 text-[#000066] hover:bg-[#F8F9FC] hover:text-[#0B3AA4] transition font-medium"
                >
                  Media & Activities
                </Link>

                <Link
                  href="/partners"
                  className="block px-6 py-4 text-[#000066] hover:bg-[#F8F9FC] hover:text-[#0B3AA4] transition font-medium"
                >
                  Partners
                </Link>

              </div>

            </div>

          </div>

          {/* SERVICES */}
          <Link
            href="/services"
            className="hover:text-[#FEC619] transition"
          >
            Services
          </Link>

          {/* PROJECTS */}
          <Link
            href="/#projects"
            className="hover:text-[#FEC619] transition"
          >
            Projects
          </Link>

        </nav>

      </div>

    </header>
  );
}