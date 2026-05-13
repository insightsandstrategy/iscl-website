"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function PromoPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">

      {/* Modal */}
      <div className="relative w-full max-w-3xl animate-[fadeIn_.4s_ease]">

        {/* Close Button */}
        <button
          onClick={() => setOpen(false)}
          className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-white text-[#000066] font-bold shadow-lg hover:scale-110 transition z-10"
        >
          ✕
        </button>

        {/* Popup Card */}
        <div className="relative overflow-hidden rounded-3xl bg-[#000066] shadow-[0_20px_80px_rgba(0,0,0,0.45)] border border-white/10">

          {/* Background Glow */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-[#FEC619]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl" />

          <div className="relative grid md:grid-cols-2 items-center gap-10 p-10">

            {/* LEFT */}
            <div>

              <p className="uppercase tracking-[0.35em] text-[#FEC619] text-sm font-semibold">
                Insights & Strategy Consulting
              </p>

              <h2 className="mt-6 text-5xl font-black text-white leading-tight">
                LET’S BUILD
                <br />
                THE FUTURE
                <br />
                TOGETHER
              </h2>

              <p className="mt-6 text-white/75 text-lg leading-relaxed">
                Empowering Policies, Economies & Development
                through Insights.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">

                <a
                  href="/services"
                  className="bg-[#FEC619] text-[#000066] px-6 py-3 rounded-full font-semibold hover:scale-[1.03] transition"
                >
                  Explore Services
                </a>

                <a
                  href="/contact"
                  className="border border-white/30 text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-[#000066] transition"
                >
                  Contact Us
                </a>

              </div>

            </div>

            {/* RIGHT */}
            <div className="relative flex justify-center">

              <div className="absolute w-[320px] h-[320px] bg-[#FEC619]/20 rounded-full blur-3xl"></div>

              <Image
                src="/popup.png"
                alt="ISCL"
                width={420}
                height={420}
                className="relative object-contain drop-shadow-2xl"
                priority
              />

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}