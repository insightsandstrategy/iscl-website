"use client";

import Image from "next/image";

export default function Services() {
  const services = [
    {
      title: "Research & Data Collection",
      desc: "Design surveys, polling, and field research to generate reliable insights.",
      color: "bg-[#1E3A8A]", // controlled blue (not random)
      img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    },
    {
      title: "Monitoring, Evaluation & Learning",
      desc: "Measure impact and improve program performance with structured frameworks.",
      color: "bg-[#166534]", // deep green (more professional)
      img: "https://images.unsplash.com/photo-1552664730-d307ca884978",
    },
    {
      title: "Data Analytics & Insights",
      desc: "Turn complex datasets into clear, actionable insights.",
      color: "bg-[#FEC619]", // brand yellow
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    },
    {
      title: "Strategy & Advisory",
      desc: "Guide policy and strategic decisions using data-driven insights.",
      color: "bg-[#EA580C]", // controlled orange (less harsh)
      img: "https://images.unsplash.com/photo-1556761175-b413da4baf72",
    },
  ];

  return (
    <section className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <h2 className="text-2xl md:text-3xl font-semibold text-center text-[#000066]">
          For NGOs, Governments, and Development Partners:
        </h2>

        {/* GRID */}
        <div className="mt-14 grid md:grid-cols-2 gap-8">
          {services.map((s, i) => (
            <div
              key={i}
              className="group grid md:grid-cols-2 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* TEXT SIDE */}
              <div className={`${s.color} p-8 flex flex-col justify-between`}>
                <div>
                  <h3
                    className={`font-semibold text-lg ${
                      s.color === "bg-[#FEC619]"
                        ? "text-black"
                        : "text-white"
                    }`}
                  >
                    {s.title}
                  </h3>

                  <p
                    className={`mt-3 text-sm ${
                      s.color === "bg-[#FEC619]"
                        ? "text-black/80"
                        : "text-white/90"
                    }`}
                  >
                    {s.desc}
                  </p>
                </div>

                <button className="mt-6 bg-white text-[#000066] px-4 py-2 rounded-md text-sm font-medium w-fit hover:scale-105 transition">
                  Request Service
                </button>
              </div>

              {/* IMAGE SIDE */}
              <div className="relative h-[220px] md:h-full overflow-hidden">
                <Image
                  src={s.img}
                  alt={s.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />

                {/* subtle overlay for consistency */}
                <div className="absolute inset-0 bg-[#000066]/10" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}