import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="relative py-24 overflow-hidden">

        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="/team.jpg"
            alt="ISCL Team"
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 bg-[#000066]/85" />
        </div>

        <div className="relative max-w-5xl mx-auto px-6 text-center text-white">

          <p className="uppercase tracking-[0.25em] text-[#FEC619] text-sm font-semibold">
            About ISCL
          </p>

          <h1 className="mt-5 text-5xl md:text-6xl font-bold leading-tight">
            Insights & Strategy Consulting Limited
          </h1>

          <p className="mt-6 text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
            Empowering Policies, Organisations & People with Insights
          </p>

        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

          {/* LEFT */}
          <div>

            <p className="uppercase tracking-[0.2em] text-[#FEC619] text-sm font-semibold">
              Who We Are
            </p>

            <h2 className="mt-4 text-4xl font-bold text-[#000066] leading-tight">
              Leading Research, Evaluation & Strategic Consulting Firm
            </h2>

            <p className="mt-6 text-gray-700 leading-relaxed">
              Insights & Strategy Consulting Limited (ISCL) is a leading Polling,
              Monitoring & Evaluation, Research, Survey, Business Intelligence,
              Training and Data Analytics Firm legally registered with the
              Corporate Affairs Commission in Nigeria with RC No. 7483575.
            </p>

            <p className="mt-5 text-gray-700 leading-relaxed">
              ISCL is committed to delivering high-quality insights that drive
              strategic decisions for governments, non-profits, and private
              organisations.
            </p>

            <p className="mt-5 text-gray-700 leading-relaxed">
              Our unique approach combines innovative methodologies, advanced
              data analytics, sound ethical approaches and actionable insights
              to ensure that our clients make informed, impactful decisions.
            </p>

          </div>



          {/* RIGHT */}
          <div className="relative">

            <div className="bg-[#000066] rounded-3xl p-5 shadow-2xl">
              <Image
                src="/insight.jpg"
                alt="ISCL Team"
                width={650}
                height={500}
                className="rounded-2xl"
              />
            </div>

            {/* Floating stats */}
            <div className="absolute -top-5 -left-5 bg-white rounded-xl shadow-lg px-5 py-4">
              <p className="text-gray-500 text-sm">Research Reach</p>
              <p className="text-[#000066] text-2xl font-bold">10M+</p>
            </div>

            <div className="absolute -bottom-5 -right-5 bg-[#FEC619] rounded-xl shadow-lg px-5 py-4 text-[#000066]">
              <p className="text-sm font-medium">Strategic Insights</p>
              <p className="text-2xl font-bold">Data-Driven</p>
            </div>

          </div>
        </div>
      </section>

<div className="flex justify-center mt-12">

  <Link
    href="/about/team"
    className="w-full max-w-xl inline-flex items-center justify-center bg-[#000066] text-white px-8 py-5 rounded-full font-semibold text-lg hover:bg-[#0B3AA4] transition duration-300 shadow-lg hover:shadow-2xl"
  >
    Meet Our Team
  </Link>

</div>

      {/* MISSION / VISION */}
      <section className="py-20 bg-gray-50">

        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center">
            <p className="uppercase tracking-[0.2em] text-[#FEC619] text-sm font-semibold">
              Vision & Mission
            </p>

            <h2 className="mt-4 text-4xl font-bold text-[#000066]">
              What Drives Us
            </h2>
          </div>

          <div className="mt-14 grid md:grid-cols-2 gap-10">

            {/* Vision */}
            <div className="bg-white rounded-2xl p-10 shadow-sm border border-gray-100">
              <div className="w-16 h-16 rounded-full bg-[#000066] text-white flex items-center justify-center text-2xl font-bold">
                V
              </div>

              <h3 className="mt-6 text-3xl font-bold text-[#000066]">
                Vision
              </h3>

              <p className="mt-5 text-gray-600 leading-relaxed">
                To lead in providing transformative insights for strategic
                decisions across Africa.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-[#000066] rounded-2xl p-10 text-white shadow-xl">
              <div className="w-16 h-16 rounded-full bg-[#FEC619] text-[#000066] flex items-center justify-center text-2xl font-bold">
                M
              </div>

              <h3 className="mt-6 text-3xl font-bold">
                Mission
              </h3>

              <p className="mt-5 text-gray-300 leading-relaxed">
                To deliver actionable research & evaluation that drives informed
                decision-making for sustainable development in Africa.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">
            <p className="uppercase tracking-[0.2em] text-[#FEC619] text-sm font-semibold">
              Core Values
            </p>

            <h2 className="mt-4 text-4xl font-bold text-[#000066]">
              Our Core Values
            </h2>
          </div>

          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              {
                title: "Integrity",
                desc: "We maintain the highest standards of honesty and transparency in all our engagements.",
              },
              {
                title: "Excellence",
                desc: "We strive to deliver world-class solutions and insights for every project we manage.",
              },
              {
                title: "Innovation",
                desc: "We leverage cutting-edge technologies and methodologies to provide forward-thinking solutions.",
              },
              {
                title: "Sustainability",
                desc: "We are committed to promoting sustainable practices in our research and consulting services.",
              },
            ].map((value, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition"
              >

                <div className="w-14 h-14 rounded-full bg-[#000066] text-white flex items-center justify-center font-bold text-xl">
                  {i + 1}
                </div>

                <h3 className="mt-6 text-2xl font-bold text-[#000066]">
                  {value.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-relaxed text-sm">
                  {value.desc}
                </p>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* WHY ISCL */}
      <section className="py-20 bg-[#000066] text-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">
            <p className="uppercase tracking-[0.2em] text-[#FEC619] text-sm font-semibold">
              Why ISCL
            </p>

            <h2 className="mt-4 text-4xl font-bold">
              Why Partner With Us
            </h2>
          </div>

          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              "Strong & Rigorous Methodologies",
              "Over 100million active Nigerian phone numbers in our Database",
              "Strong Quality Control Checks & Measures",
              "Electronic & Tech Aided Data Collection (CAPI, CATI, CAWI)",
              "Strict Adherence to Ethical Practices",
              "Accredited by NCMD & Approved training partner with PM4NGOs",
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/10 border border-white/10 rounded-2xl p-8"
              >

                <div className="w-12 h-12 rounded-full bg-[#FEC619] text-[#000066] flex items-center justify-center font-bold">
                  {i + 1}
                </div>

                <p className="mt-6 text-lg leading-relaxed font-medium">
                  {item}
                </p>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center bg-white">

        <div className="max-w-4xl mx-auto px-6">

          <p className="uppercase tracking-[0.2em] text-[#FEC619] text-sm font-semibold">
            Let’s Work Together
          </p>

          <h2 className="mt-4 text-4xl font-bold text-[#000066] leading-tight">
            Empowering Policies, Organisations & People with Insights
          </h2>

          <p className="mt-6 text-gray-600 leading-relaxed">
            ISCL combines innovative methodologies, advanced data analytics,
            sound ethical approaches and actionable insights to ensure clients
            make informed and impactful decisions.
          </p>

          <div className="mt-8 flex justify-center flex-wrap gap-4">

            <Link
              href="/start-project"
              className="bg-[#FEC619] text-[#000066] px-6 py-3 rounded-md font-semibold hover:opacity-90 transition"
            >
              Start a Project
            </Link>

            <Link
              href="/contact"
              className="border border-[#000066] text-[#000066] px-6 py-3 rounded-md hover:bg-[#000066] hover:text-white transition"
            >
              Contact Us
            </Link>

          </div>
        </div>
      </section>

    </main>
  );
}