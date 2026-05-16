"use client";

import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

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
            Empowering Policies, Organisations & People with Insights
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

          {/* SLIDER CARD */}
          <div className="relative w-full max-w-[620px] bg-white/10 backdrop-blur-lg rounded-3xl p-3 md:p-4 border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.35)] overflow-hidden">

            <Swiper
              modules={[Autoplay, Pagination]}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              className="rounded-2xl overflow-hidden"
            >

              {[
                "/slideh1.jpg",
                "/slideh2.jpg",
                "/slideh9.jpg",
                "/slide10.jpg",
                "/pm.jpg",
                "/slide11.jpg",
                "/slide15.jpg",
                "/slideh3.jpg",
                "/dslides.jpg",
                "/capacity.jpg",
              ].map((slide, index) => (

                <SwiperSlide key={index}>

                  <div className="relative w-full h-[280px] md:h-[520px]">

                    <Image
                      src={slide}
                      alt={`ISCL Slide ${index + 1}`}
                      fill
                      className="object-cover"
                      priority
                    />

                  </div>

                </SwiperSlide>

              ))}

            </Swiper>

          </div>

          {/* Floating Card 1 */}
          <div className="absolute top-2 left-2 md:top-4 md:left-4 bg-white px-4 py-2 md:px-5 md:py-3 rounded-xl shadow-lg">

            <p className="text-gray-500 text-xs md:text-sm">
              Research Reach
            </p>

            <p className="font-bold text-[#000066] text-lg md:text-xl">
              10M+
            </p>

          </div>

          {/* Floating Card 2 */}
          <div className="absolute bottom-2 right-2 md:bottom-4 md:right-4 bg-white px-4 py-2 md:px-5 md:py-3 rounded-xl shadow-lg">

            <p className="text-gray-500 text-xs md:text-sm">
              Data Insights
            </p>

            <p className="font-bold text-[#000066] text-lg md:text-xl">
              Real-Time
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}