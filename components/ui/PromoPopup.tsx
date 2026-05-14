"use client";

import Image from "next/image";
import { useEffect } from "react";

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Popup({
  isOpen,
  onClose,
}: PopupProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">

      {/* MODAL */}
      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-2xl bg-white shadow-[0_20px_80px_rgba(0,0,0,0.35)]">

        {/* CLOSE BUTTON */}
        <div className="sticky top-0 z-50 flex justify-end p-4 bg-white">

          <button
            onClick={onClose}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-[#000066] text-white text-xl font-bold shadow-lg hover:scale-105 transition"
          >
            ✕
          </button>

        </div>

        {/* CONTENT */}
        <div className="px-4 pb-6 md:px-8 md:pb-10">

          {/* IMAGE */}
          <div className="relative w-full h-[260px] md:h-[600px] rounded-2xl overflow-hidden">

            <Image
              src="/popup/promo.jpg"
              alt="ISCL Popup"
              fill
              priority
              className="object-cover"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-[#000066]/40" />

            {/* TEXT */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">

              <p className="uppercase tracking-[0.3em] text-[#FEC619] text-xs md:text-sm font-semibold">
                Insights & Strategy Consulting Limited
              </p>

              <h2 className="mt-4 text-3xl md:text-6xl font-black text-white leading-tight">
                Building Data-Driven
                <br />
                Impact Across Africa
              </h2>

              <p className="mt-4 md:mt-6 text-sm md:text-lg text-white/85 max-w-2xl leading-relaxed">
                Research · Monitoring & Evaluation · Policy Advisory ·
                Data Analytics · Development Consulting
              </p>

              <button className="mt-6 md:mt-8 bg-[#FEC619] text-[#000066] px-6 py-3 md:px-8 md:py-4 rounded-full font-bold text-sm md:text-base hover:scale-105 transition shadow-xl">
                Explore ISCL
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}