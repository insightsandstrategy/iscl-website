"use client";

import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-10 bg-gradient-to-r from-[#000066] to-[#001a99] text-center text-white">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold">
          Ready to Turn Data Into Actionable Insights?
        </h2>

        <p className="mt-4 text-gray-300">
          Whether you're seeking expert consulting or looking to participate in
          our programs, ISCL provides the insights and tools to help you move
          forward.
        </p>

        <div className="mt-8 flex justify-center gap-4">

          {/* Start Project */}
          <Link href="/contact/start-project">
            <button className="bg-[#FEC619] text-[#000066] px-6 py-3 rounded-md font-semibold hover:opacity-90 transition">
              Start a Project
            </button>
          </Link>

          {/* Apply */}
          <Link href="/contact/apply">
            <button className="border border-white px-6 py-3 rounded-md hover:bg-white hover:text-[#000066] transition">
              Apply for Services
            </button>
          </Link>

        </div>
      </div>
    </section>
  );
}