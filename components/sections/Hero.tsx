"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[65vh]">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1556761175-b413da4baf72"
          alt="ISCL Team"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#000066]/75" />

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#000066]/60 via-[#000066]/70 to-[#000066]/95" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-14 md:pt-24 md:pb-16 grid md:grid-cols-2 gap-8 items-center">
        
        {/* LEFT */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Empowering Decisions Through{" "}
            <span className="text-[#FEC619]">Data-Driven</span> Insights
          </h1>

          <p className="mt-5 text-gray-300 max-w-lg">
            We help NGOs, governments, and organizations turn research and data
            into actionable strategies.
          </p>

          <div className="mt-7 flex flex-wrap gap-4">

  <Link href="/contact/start-project">
    <button className="bg-[#FEC619] text-[#000066] px-6 py-3 rounded-md font-semibold hover:opacity-90 transition">
      Start a Project
    </button>
  </Link>

  <Link href="/contact/apply">
    <button className="border border-white text-white px-6 py-3 rounded-md hover:bg-white hover:text-[#000066] transition">
      Apply for Services →
    </button>
  </Link>

</div>
        </div>

        {/* RIGHT */}
      <div className="relative flex justify-center">

  {/* Background shape (adds structure like Humentum) */}
  <div className="absolute w-[110%] h-[110%] bg-white/5 rounded-3xl blur-2xl" />

  {/* Main card */}
  <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-3 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
    <Image
      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
      alt="Analytics Dashboard"
      width={440}
      height={270}
      className="rounded-xl"
    />
  </div>

  {/* Floating card 1 */}
  <div className="absolute top-4 left-4 bg-white px-4 py-2 rounded-lg shadow-md text-xs">
    <p className="text-gray-500 leading-none">Growth</p>
    <p className="font-semibold text-[#000066] text-sm">+24%</p>
  </div>

  {/* Floating card 2 */}
  <div className="absolute bottom-4 right-4 bg-white px-4 py-2 rounded-lg shadow-md text-xs">
    <p className="text-gray-500 leading-none">Insights</p>
    <p className="font-semibold text-[#000066] text-sm">1.2K+</p>
  </div>

</div>
      </div>
    </section>
  );
}