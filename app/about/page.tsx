export default function AboutPage() {
  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="py-20 text-center bg-[#000066] text-white">
        <h1 className="text-4xl font-bold">About ISCL</h1>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
          Empowering decisions through data-driven insights and strategic expertise.
        </p>
      </section>

      {/* WHO WE ARE */}
      <section className="py-16 max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-[#000066]">Who We Are</h2>

        <p className="mt-4 text-gray-600 leading-relaxed">
          Insights & Strategy Consulting Limited (ISCL) is a development consulting
          firm dedicated to helping organizations make better decisions through
          research, data, and analytics.
        </p>

        <p className="mt-4 text-gray-600 leading-relaxed">
          We work with NGOs, governments, and development partners to design,
          evaluate, and improve programs that drive measurable impact.
        </p>
      </section>

      {/* WHAT WE DO */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#000066] text-center">
            What We Do
          </h2>

          <div className="mt-10 grid md:grid-cols-3 gap-8">
            {[
              "Research & Evaluation",
              "Data Collection & Analysis",
              "Monitoring & Learning Systems",
              "Policy & Strategy Advisory",
              "Technology Integration",
              "Capacity Building",
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-sm">
                <p className="font-medium text-gray-800">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION / VISION */}
      <section className="py-16 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-xl font-bold text-[#000066]">Our Mission</h3>
          <p className="mt-3 text-gray-600">
            To deliver actionable research and evaluation that drives informed
            decision-making for sustainable development in Africa.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-[#000066]">Our Vision</h3>
          <p className="mt-3 text-gray-600">
            To lead in providing transformative insights for strategic decisions
            across Africa.
          </p>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-16 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold text-[#000066]">Our Core Values</h2>

        <div className="mt-10 grid md:grid-cols-4 gap-6 max-w-6xl mx-auto px-6">
          {["Integrity", "Excellence", "Innovation", "Sustainability"].map(
            (val, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-sm">
                <p className="font-semibold text-[#000066]">{val}</p>
              </div>
            )
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#000066] text-white text-center">
        <h2 className="text-3xl font-bold">
          Partner With Us
        </h2>

        <p className="mt-3 text-gray-300">
          Let’s work together to drive meaningful impact through data.
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <button className="bg-[#FEC619] text-[#000066] px-6 py-3 rounded-md font-semibold">
            Start a Project
          </button>

          <button className="border border-white px-6 py-3 rounded-md">
            Contact Us
          </button>
        </div>
      </section>

    </main>
  );
}