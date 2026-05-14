import Image from "next/image";

export default function Audience() {
  return (
    <section className="bg-white py-14">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#000066]">
            Who We Work With
          </h2>

          <p className="mt-4 text-gray-600 leading-relaxed">
            ISCL partners with governments, NGOs, development institutions,
            donor agencies, and private sector organizations to deliver
            evidence-based insights and impactful development solutions.
          </p>
        </div>

        {/* GRID */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* NGOs */}
          <div className="group rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition bg-white">

            <div className="relative h-[190px]">
              <Image
                src="/ngo.png"
                alt="NGOs & Development Partners"
                fill
                className="object-cover group-hover:scale-105 transition duration-500"
              />
            </div>

            <div className="p-6">
              <p className="text-xs font-semibold tracking-[0.15em] text-[#FEC619] uppercase">
                NGOs
              </p>

              <h3 className="mt-3 font-semibold text-[#000066] text-lg leading-snug">
                NGOs & Development Organizations
              </h3>

              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                Supporting programme implementation, monitoring, evaluation,
                impact assessment, and sustainable development initiatives.
              </p>
            </div>
          </div>

          {/* Government */}
          <div className="group rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition bg-white">

            <div className="relative h-[190px]">
              <Image
                src="/government.png"
                alt="Government & Public Institutions"
                fill
                className="object-cover group-hover:scale-105 transition duration-500"
              />
            </div>

            <div className="p-6">
              <p className="text-xs font-semibold tracking-[0.15em] text-[#FEC619] uppercase">
                Government
              </p>

              <h3 className="mt-3 font-semibold text-[#000066] text-lg leading-snug">
                Government & Public Institutions
              </h3>

              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                Delivering policy research, governance insights, polling,
                surveys, and evidence-based strategic recommendations.
              </p>
            </div>
          </div>

          {/* Development Partners */}
          <div className="group rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition bg-white">

            <div className="relative h-[190px]">
              <Image
                src="/development.png"
                alt="Development Partners"
                fill
                className="object-cover group-hover:scale-105 transition duration-500"
              />
            </div>

            <div className="p-6">
              <p className="text-xs font-semibold tracking-[0.15em] text-[#FEC619] uppercase">
                Academia
              </p>

              <h3 className="mt-3 font-semibold text-[#000066] text-lg leading-snug">
                Academia and Research institue 
              </h3>

              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                Enabling data-backed programme evaluation, accountability
                systems, and measurable development outcomes.
              </p>
            </div>
          </div>

          {/* Private Sector */}
          <div className="group rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition bg-white">

            <div className="relative h-[190px]">
              <Image
                src="/private.png"
                alt="Private Sector Organizations"
                fill
                className="object-cover group-hover:scale-105 transition duration-500"
              />
            </div>

            <div className="p-6">
              <p className="text-xs font-semibold tracking-[0.15em] text-[#FEC619] uppercase">
                Corporate Sector
              </p>

              <h3 className="mt-3 font-semibold text-[#000066] text-lg leading-snug">
                Private Sector & Enterprises
              </h3>

              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                Supporting organizations with market research, business
                intelligence, analytics, and strategic consulting solutions.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}