"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[70vh]">

      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/team.jpg"
          alt="ISCL Team"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#000066]/80" />

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#000066]/60 via-[#000066]/75 to-[#000066]/95" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-16 md:pt-24 md:pb-20 grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT */}
        <div>

         

          <h1 className="mt-5 text-4xl md:text-6xl font-bold text-white leading-tight">
            Empowering Policies, Economy & Development Through Insights
          </h1>

          <p className="mt-6 text-gray-300 max-w-xl leading-relaxed text-lg">
            Polling | Monitoring & Evaluation | Research | Surveys | RCTs |
            Programme & Project Management | Training & Capacity Building |
            Entrepreneurship & Tech Consulting | Development Science Advisory
          </p>

         <div className="mt-7 flex flex-wrap gap-4">

  <Link href="/training-calendar">
    <button className="bg-[#FEC619] text-[#000066] px-6 py-3 rounded-md font-semibold hover:opacity-90 transition">
      Training Calendar
    </button>
  </Link>

  <Link href="/contact">
    <button className="border border-white text-white px-6 py-3 rounded-md hover:bg-white hover:text-[#000066] transition">
      Request for Consultation →
    </button>
  </Link>

</div>
        </div>

        {/* RIGHT */}
        <div className="relative flex justify-center">

          {/* Background Glow */}
          <div className="absolute w-[115%] h-[115%] bg-white/5 rounded-3xl blur-3xl" />

          {/* Main Card */}
          <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-4 border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">

            <Image
             src="/popup-image.png"
                alt="ISCL"
                width={420}
                height={420}
              className="rounded-2xl"
            />
          </div>

          {/* Floating Card 1 */}
          <div className="absolute top-2 left-2 bg-white px-5 py-3 rounded-xl shadow-lg">
            <p className="text-gray-500 text-sm">Research Reach</p>
            <p className="font-bold text-[#000066] text-xl">
              100M+
            </p>
          </div>

          {/* Floating Card 2 */}
          <div className="absolute bottom-2 right-2 bg-white px-5 py-3 rounded-xl shadow-lg">
            <p className="text-gray-500 text-sm">Data Insights</p>
            <p className="font-bold text-[#000066] text-xl">
              Real-Time
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}