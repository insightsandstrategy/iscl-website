"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
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

          <Link
            href="/"
            className="hover:text-[#FEC619] transition"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="hover:text-[#FEC619] transition"
          >
            About
          </Link>

          <Link
            href="/services"
            className="hover:text-[#FEC619] transition"
          >
            Services
          </Link>

          <Link
            href="/projects"
            className="hover:text-[#FEC619] transition"
          >
            Project
          </Link>

        </nav>

      </div>

    </header>
  );
}