import Image from "next/image";
import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      title: "Polling & Survey Services",
      desc: "Public Opinion Polling, Electability Surveys, Election Monitoring, and Market Research services powered by rigorous methodologies and extensive database reach.",
      points: [
        "Public Opinion Polling",
        "Electability Surveys",
        "Election Monitoring",
        "Market Research",
      ],
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    },

    {
      title: "Data Analytics & Research",
      desc: "Advanced quantitative and qualitative research, predictive analytics, and evidence-based data science solutions for strategic decision-making.",
      points: [
        "Quantitative & Qualitative Research",
        "Predictive Analytics",
        "Political Economy Analysis (PEA)",
        "Data Science & Insights",
      ],
      img: "/data.jpg",
    },

    {
      title: "Monitoring & Evaluation",
      desc: "Comprehensive M&E systems design, impact evaluation, randomized control trials, and third-party monitoring services.",
      points: [
        "M&E Systems Design",
        "Impact Evaluation",
        "RCTs",
        "Third-Party Monitoring",
      ],
      img: "/monitor.jpg",
    },

    {
      title: "Capacity Building & Training",
      desc: "NCMD-accredited training programmes focused on research methodology, data management, AI, and technology-enabled learning.",
      points: [
        "Research Methodology Workshops",
        "Data Management Training",
        "Artificial Intelligence Training",
        "Custom Capacity Building",
      ],
      img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    },

    {
      title: "Management, Technology & Strategic Consulting",
      desc: "Strategic advisory services supporting organisations with policy development, technology consulting, grant writing, and project management.",
      points: [
        "Project Management",
        "Technology Consulting",
        "Policy Development",
        "Grant Writing",
      ],
      img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    },

    {
      title: "Entrepreneurship Consulting",
      desc: "Business development and entrepreneurship advisory services supporting startups, institutions, and emerging leaders.",
      points: [
        "Business Plans",
        "Feasibility Studies",
        "Leadership Development",
        "Startup Incubation",
      ],
      img: "/entrepreneur.jpg",
    },
  ];

  return (
    <main className="bg-white overflow-hidden">

      {/* HERO */}
      <section className="relative py-28 bg-[#000066] text-white overflow-hidden">

        {/* Background Effects */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#FEC619]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

        <div className="relative max-w-5xl mx-auto px-6 text-center">

          <p className="uppercase tracking-[0.35em] text-[#FEC619] text-sm font-semibold">
            Our Expertise
          </p>

          <h1 className="mt-6 text-5xl md:text-6xl font-black leading-tight">
            Data-Driven Solutions
            <br />
            Across Multiple Sectors
          </h1>

          <p className="mt-8 text-xl text-white/75 leading-relaxed max-w-3xl mx-auto">
            Insights & Strategy Consulting Limited provides research,
            monitoring & evaluation, analytics, training, and strategic
            consulting services designed to empower policies,
            economies, and development through evidence-based insights.
          </p>

        </div>

      </section>

      {/* SERVICES */}
      <section className="py-24 bg-[#F8F9FC]">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid gap-16">

            {services.map((service, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >

                {/* IMAGE */}
                <div className="relative group">

                  <div className="absolute inset-0 bg-[#000066]/10 rounded-3xl blur-2xl group-hover:blur-3xl transition duration-300"></div>

                  <Image
                    src={service.img}
                    alt={service.title}
                    width={700}
                    height={500}
                    className="relative rounded-3xl shadow-2xl object-cover h-[420px] w-full"
                  />

                </div>

                {/* CONTENT */}
                <div>

                  <p className="uppercase tracking-[0.25em] text-[#000066] text-sm font-semibold">
                    Service {index + 1}
                  </p>

                  <h2 className="mt-4 text-4xl font-black text-[#000066] leading-tight">
                    {service.title}
                  </h2>

                  <div className="w-20 h-1 bg-[#FEC619] rounded-full mt-6"></div>

                  <p className="mt-8 text-lg text-gray-600 leading-relaxed">
                    {service.desc}
                  </p>

                  <div className="mt-8 grid sm:grid-cols-2 gap-4">

                    {service.points.map((point, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
                      >

                        <div className="w-7 h-7 rounded-full bg-[#000066] text-white flex items-center justify-center text-sm font-bold shrink-0">
                          ✓
                        </div>

                        <p className="text-gray-700 font-medium leading-relaxed">
                          {point}
                        </p>

                      </div>
                    ))}

                  </div>

                  <div className="mt-10 flex flex-wrap gap-4">

                    <Link
                      href="/contact"
                      className="bg-[#000066] text-white px-7 py-4 rounded-full font-semibold hover:bg-[#0B3AA4] transition shadow-lg"
                    >
                      Request Consultation
                    </Link>

                    <Link
                      href="/training-calendar"
                      className="border-2 border-[#000066] text-[#000066] px-7 py-4 rounded-full font-semibold hover:bg-[#000066] hover:text-white transition"
                    >
                      Training Calendar
                    </Link>

                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* OUR APPROACH */}
      <section className="py-24 bg-[#000066] text-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-3xl mx-auto">

            <p className="uppercase tracking-[0.35em] text-[#FEC619] text-sm font-semibold">
              Our Approach
            </p>

            <h2 className="mt-6 text-4xl md:text-5xl font-black">
              A Structured Path from
              <br />
              Insight to Impact
            </h2>

          </div>

          <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-5 gap-8">

            {[
              {
                title: "Diagnose",
                desc: "Landscape analysis, stakeholder mapping, needs assessment",
              },
              {
                title: "Design",
                desc: "Methodology development, tool design, sampling frameworks",
              },
              {
                title: "Implement",
                desc: "Field deployment, data collection, quality assurance",
              },
              {
                title: "Analyse",
                desc: "Statistical analysis, data visualisation, pattern recognition",
              },
              {
                title: "Learn",
                desc: "Evidence synthesis, recommendations, knowledge transfer",
              },
            ].map((step, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md hover:-translate-y-2 transition duration-300"
              >

                <div className="w-16 h-16 rounded-full bg-[#FEC619] text-[#000066] flex items-center justify-center text-2xl font-black">
                  {`0${i + 1}`}
                </div>

                <h3 className="mt-8 text-2xl font-bold">
                  {step.title}
                </h3>

                <p className="mt-4 text-white/70 leading-relaxed">
                  {step.desc}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden bg-[#F8F9FC]">

        <div className="absolute top-0 left-0 w-80 h-80 bg-[#FEC619]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#000066]/5 rounded-full blur-3xl" />

        <div className="relative max-w-5xl mx-auto px-6 text-center">

          <p className="uppercase tracking-[0.35em] text-[#000066] text-sm font-semibold">
            Let’s Build The Future Together
          </p>

          <h2 className="mt-6 text-4xl md:text-5xl font-black text-[#000066] leading-tight">
            Ready to Turn Evidence
            <br />
            Into Strategic Impact?
          </h2>

          <p className="mt-8 text-xl text-gray-600 leading-relaxed">
            Whether you need rigorous evaluation, strategic advisory,
            capacity development, or data-driven insights —
            ISCL is your partner for impact.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-6">

            <Link
              href="/contact"
              className="bg-[#000066] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#0B3AA4] transition shadow-xl"
            >
              Request Consultation
            </Link>

            <Link
              href="/training-calendar"
              className="border-2 border-[#000066] text-[#000066] px-8 py-4 rounded-full font-semibold hover:bg-[#000066] hover:text-white transition"
            >
              Training Calendar
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}