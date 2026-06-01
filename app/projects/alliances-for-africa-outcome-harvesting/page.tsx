import Link from "next/link";
import Image from "next/image";

export default function AlliancesForAfricaCaseStudyPage() {
  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="relative py-24 overflow-hidden bg-[#000066] text-white">

        <div className="absolute top-0 left-0 w-96 h-96 bg-[#FEC619]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

        <div className="relative max-w-5xl mx-auto px-6 text-center">

          <p className="uppercase tracking-[0.35em] text-[#FEC619] text-sm font-semibold">
            Case Study
          </p>

          <h1 className="mt-6 text-5xl md:text-6xl font-black leading-tight">
            Outcome Harvesting
            <br />
            Alliances for Africa
          </h1>

          <p className="mt-8 text-xl text-white/75 max-w-3xl mx-auto">
            Capturing programme achievements, learning outcomes and
            strategic impact through outcome harvesting methodologies.
          </p>

        </div>

      </section>

      {/* OVERVIEW */}
      <section className="py-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            <div>

              <p className="uppercase tracking-[0.25em] text-[#FEC619] text-sm font-semibold">
                Project Overview
              </p>

              <h2 className="mt-4 text-4xl font-black text-[#000066]">
                Outcome Harvesting for Alliances for Africa
              </h2>

              <p className="mt-8 text-gray-700 leading-relaxed">
                Alliances for Africa sought to identify, document and
                validate significant programme outcomes beyond
                traditional performance indicators.
              </p>

              <p className="mt-5 text-gray-700 leading-relaxed">
                ISCL implemented an outcome harvesting exercise designed
                to uncover meaningful changes, lessons learned, and
                evidence of impact generated through programme activities.
              </p>

            </div>

            <div className="bg-[#000066] p-5 rounded-3xl shadow-2xl">

              <Image
                src="/alliances-africa.jpg"
                alt="Outcome Harvesting for Alliances for Africa"
                width={800}
                height={600}
                className="rounded-2xl"
              />

            </div>

          </div>

        </div>

      </section>

      {/* DETAILS */}
      <section className="py-20 bg-[#F8F9FC]">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white rounded-3xl p-8 shadow-sm">

              <div className="w-14 h-14 rounded-full bg-[#000066] text-white flex items-center justify-center font-bold text-xl">
                1
              </div>

              <h3 className="mt-6 text-2xl font-bold text-[#000066]">
                Challenge
              </h3>

              <p className="mt-5 text-gray-600 leading-relaxed">
                Traditional monitoring systems did not fully capture
                the breadth of programme outcomes, behavioural changes,
                and unexpected achievements.
              </p>

            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm">

              <div className="w-14 h-14 rounded-full bg-[#000066] text-white flex items-center justify-center font-bold text-xl">
                2
              </div>

              <h3 className="mt-6 text-2xl font-bold text-[#000066]">
                Approach
              </h3>

              <p className="mt-5 text-gray-600 leading-relaxed">
                ISCL applied outcome harvesting methodologies involving
                stakeholder engagement, evidence gathering, validation,
                and systematic documentation of programme results.
              </p>

            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm">

              <div className="w-14 h-14 rounded-full bg-[#000066] text-white flex items-center justify-center font-bold text-xl">
                3
              </div>

              <h3 className="mt-6 text-2xl font-bold text-[#000066]">
                Outcome
              </h3>

              <p className="mt-5 text-gray-600 leading-relaxed">
                The exercise identified key programme achievements,
                generated valuable learning insights, and provided
                strategic recommendations for future interventions.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* IMPACT */}
      <section className="py-20">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <p className="uppercase tracking-[0.3em] text-[#FEC619] text-sm font-semibold">
            Impact
          </p>

          <h2 className="mt-4 text-4xl font-black text-[#000066]">
            Capturing Change Beyond Indicators
          </h2>

          <p className="mt-8 text-xl text-gray-600 leading-relaxed">
            ISCL's outcome harvesting approach helped uncover meaningful
            programme changes and strengthened evidence-based learning
            for future decision-making.
          </p>

        </div>

      </section>

      {/* CTA */}
      <section className="py-20 bg-[#000066] text-white text-center">

        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-4xl font-black">
            Need Outcome Harvesting Support?
          </h2>

          <p className="mt-6 text-white/75 text-lg">
            ISCL helps organisations identify, validate and learn from
            programme outcomes through robust evaluation methodologies.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <Link
              href="/contact"
              className="bg-[#FEC619] text-[#000066] px-8 py-4 rounded-full font-semibold hover:opacity-90 transition"
            >
              Request Consultation
            </Link>

            <Link
              href="/projects"
              className="border border-white px-8 py-4 rounded-full hover:bg-white hover:text-[#000066] transition"
            >
              View More Projects
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}