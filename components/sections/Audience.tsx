import Image from "next/image";

export default function Audience() {
  return (
    <section className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#000066]">
            Who We Work With
          </h2>

          <p className="mt-4 text-gray-600">
            We partner with organizations across sectors to deliver data-driven insights
            that drive meaningful impact.
          </p>
        </div>

        {/* GRID */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* NGOs */}
          <div className="group rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition">

            <div className="relative h-[180px]">
              <Image
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop"
                alt="NGOs"
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6">
              <h3 className="font-semibold text-[#000066]">
                NGOs & Development Organizations
              </h3>

              <p className="mt-3 text-sm text-gray-600">
                Supporting program design, evaluation, and impact measurement.
              </p>
            </div>
          </div>

          {/* Government */}
          <div className="group rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition">

            <div className="relative h-[180px]">
              <Image
                src="https://images.unsplash.com/photo-1555374018-13a8994ab246?q=80&w=800&auto=format&fit=crop"
                alt="Government"
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6">
              <h3 className="font-semibold text-[#000066]">
                Government & Public Sector
              </h3>

              <p className="mt-3 text-sm text-gray-600">
                Providing policy insights, research, and data-driven governance solutions.
              </p>
            </div>
          </div>

          {/* Development Partners */}
          <div className="group rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition">

            <div className="relative h-[180px]">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop"
                alt="Development Partners"
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6">
              <h3 className="font-semibold text-[#000066]">
                Development Partners
              </h3>

              <p className="mt-3 text-sm text-gray-600">
                Enabling data-backed decision-making for large-scale programs and initiatives.
              </p>
            </div>
          </div>

          {/* Corporates */}
          <div className="group rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition">

            <div className="relative h-[180px]">
              <Image
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800&auto=format&fit=crop"
                alt="Corporate"
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6">
              <h3 className="font-semibold text-[#000066]">
                Corporate Organizations
              </h3>

              <p className="mt-3 text-sm text-gray-600">
                Delivering insights to guide strategy, operations, and growth decisions.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}