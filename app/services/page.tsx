import Image from "next/image";

export default function ServicesPage() {
  const services = [
    {
      title: "Research & Data Collection",
      desc: "We design surveys, field studies, and research frameworks to generate reliable insights.",
      points: [
        "Survey design & implementation",
        "Field data collection",
        "Baseline & endline studies",
      ],
      img: "https://images.unsplash.com/photo-1559027615-cd4628902d4a",
    },
    {
      title: "Monitoring, Evaluation & Learning",
      desc: "Measure impact and improve performance with structured evaluation systems.",
      points: [
        "Impact measurement frameworks",
        "Performance tracking",
        "Learning systems",
      ],
      img: "https://images.unsplash.com/photo-1552664730-d307ca884978",
    },
    {
      title: "Data Analytics & Insights",
      desc: "Transform complex datasets into clear, actionable insights.",
      points: [
        "Dashboards & visualization",
        "Data modeling",
        "Decision support systems",
      ],
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    },
    {
      title: "Strategy & Advisory",
      desc: "Guide policy and strategic decisions using data-driven insights.",
      points: [
        "Policy advisory",
        "Strategic planning",
        "Organizational development",
      ],
      img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    },
  ];

  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="py-10 text-center bg-[#000066] text-white">
        <h1 className="text-4xl font-bold">Our Services</h1>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
          We provide data-driven solutions to help organizations make better decisions,
          improve performance, and drive measurable impact.
        </p>
      </section>

      {/* SERVICES LIST */}
      <section className="py-10">
        <div className="max-w-6xl mx-auto px-6 space-y-16">
          {services.map((s, i) => (
            <div
              key={i}
              className="grid md:grid-cols-2 gap-10 items-center"
            >
              <Image
                src={s.img}
                alt={s.title}
                width={500}
                height={300}
                className="rounded-xl shadow-md"
              />

              <div>
                <h2 className="text-2xl font-bold text-[#000066]">{s.title}</h2>
                <p className="mt-3 text-gray-600">{s.desc}</p>

                <ul className="mt-4 space-y-2 text-gray-700">
                  {s.points.map((p, idx) => (
                    <li key={idx}>• {p}</li>
                  ))}
                </ul>

                <button className="mt-6 bg-[#FEC619] text-[#000066] px-5 py-2 rounded-md font-semibold">
                  Request Service
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="py-10 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold text-[#000066]">How We Work</h2>

        <div className="mt-10 grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {["Discovery", "Data Collection", "Analysis", "Delivery"].map(
            (step, i) => (
              <div key={i}>
                <div className="w-12 h-12 mx-auto bg-[#000066] text-white rounded-full flex items-center justify-center">
                  {i + 1}
                </div>
                <p className="mt-3 font-medium">{step}</p>
              </div>
            )
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 bg-[#000066] text-white text-center">
        <h2 className="text-3xl font-bold">
          Ready to Turn Data Into Actionable Insights?
        </h2>

        <div className="mt-6 flex justify-center gap-4">
          <button className="bg-[#FEC619] text-[#000066] px-6 py-3 rounded-md font-semibold">
            Start a Project
          </button>

          <button className="border border-white px-6 py-3 rounded-md">
            Apply for Services
          </button>
        </div>
      </section>
    </main>
  );
}