"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("iscl-cookie-consent");

    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("iscl-cookie-consent", "accepted");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9999] bg-[#000066] text-white shadow-2xl border-t border-white/20">

      <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col lg:flex-row gap-4 items-center justify-between">

        <div className="max-w-3xl">

          <h3 className="font-semibold text-lg">
            Cookie Notice
          </h3>

          <p className="text-white/80 text-sm mt-1">
            We use cookies and similar technologies to improve your browsing
            experience, analyze website traffic, and enhance our services.
            By continuing to use this website, you agree to our use of cookies.
          </p>

        </div>

        <div className="flex flex-wrap gap-3">

          <Link
            href="/about/privacy-policy"
            className="border border-white px-4 py-2 rounded-lg hover:bg-white hover:text-[#000066] transition"
          >
            Privacy Policy
          </Link>

          <button
            onClick={acceptCookies}
            className="bg-[#FEC619] text-[#000066] px-5 py-2 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Accept
          </button>

        </div>

      </div>

    </div>
  );
}