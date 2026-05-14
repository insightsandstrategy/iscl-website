"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);

  return (
    <header className="w-full bg-[#000066]/95 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="ISCL Logo"
            width={150}
            height={55}
            className="object-contain w-[130px] md:w-[160px]"
            priority
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-10 ml-auto text-sm font-medium text-white/80">

          <Link
            href="/"
            className="hover:text-[#FEC619] transition"
          >
            Home
          </Link>

          {/* ABOUT */}
          <div
            className="relative"
            onMouseEnter={() => setAboutOpen(true)}
            onMouseLeave={() => setAboutOpen(false)}
          >

            <button className="flex items-center gap-2 hover:text-[#FEC619] transition">
              About

              <ChevronDown
                size={16}
                className={`transition duration-300 ${
                  aboutOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* DESKTOP DROPDOWN */}
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
                  className="block px-6 py-4 text-[#000066] hover:bg-[#F8F9FC]"
                >
                  About ISCL
                </Link>

                <Link
                  href="/about/team"
                  className="block px-6 py-4 text-[#000066] hover:bg-[#F8F9FC]"
                >
                  Team
                </Link>

                <Link
                  href="/media"
                  className="block px-6 py-4 text-[#000066] hover:bg-[#F8F9FC]"
                >
                  Media & Activities
                </Link>

                <Link
                  href="/partners"
                  className="block px-6 py-4 text-[#000066] hover:bg-[#F8F9FC]"
                >
                  Partners
                </Link>

              </div>

            </div>

          </div>

          <Link
            href="/services"
            className="hover:text-[#FEC619] transition"
          >
            Services
          </Link>

          <Link
            href="/#projects"
            className="hover:text-[#FEC619] transition"
          >
            Projects
          </Link>

        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white"
        >
          {mobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-[#000066] border-t border-white/10 ${
          mobileMenuOpen
            ? "max-h-[500px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >

        <div className="px-6 py-6 flex flex-col gap-6 text-white text-xl font-medium">

          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-[#FEC619]"
          >
            Home
          </Link>

          {/* MOBILE ABOUT */}
          <div>

            <button
              onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
              className="flex items-center justify-between w-full hover:text-[#FEC619]"
            >
              About

              <ChevronDown
                size={18}
                className={`transition ${
                  mobileAboutOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                mobileAboutOpen
                  ? "max-h-[300px] mt-3"
                  : "max-h-0"
              }`}
            >

              <div className="flex flex-col gap-3 pl-4 text-white/80 text-sm">

                <Link
                  href="/about"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About ISCL
                </Link>

                <Link
                  href="/about/team"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Team
                </Link>

                <Link
                  href="/media"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Media & Activities
                </Link>

                <Link
                  href="/partners"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Partners
                </Link>

              </div>

            </div>

          </div>

          <Link
            href="/services"
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-[#FEC619]"
          >
            Services
          </Link>

          <Link
            href="/#projects"
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-[#FEC619]"
          >
            Projects
          </Link>

        </div>

      </div>

    </header>
  );
}