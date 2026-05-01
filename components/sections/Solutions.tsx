import Image from "next/image";

export default function Solutions() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <h2 className="text-center text-2xl md:text-3xl font-semibold text-[#000066]">
          For nonprofits, NGOs, and their funders:
        </h2>

        {/* GRID */}
        <div className="mt-12 grid md:grid-cols-2 gap-6">

          {/* CARD 1 */}
          <div className="grid md:grid-cols-2 rounded-xl overflow-hidden shadow-sm">

            <div className="bg-blue-500 text-white p-8">
              <h3 className="text-lg font-semibold">
                Research & Data Collection
              </h3>

              <p className="mt-3 text-sm opacity-90">
                Surveys, polling, and field data collection to generate reliable insights.
              </p>

              <button className="mt-6 bg-white text-[#000066] px-4 py-2 rounded-md text-sm font-medium">
                Get started
              </button>
            </div>

            <div className="relative h-[220px]">
              <Image
                src="https://images.unsplash.com/photo-1581091870627-3b5de59a89c1?q=80&w=800"
                alt=""
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* CARD 2 */}
          <div className="grid md:grid-cols-2 rounded-xl overflow-hidden shadow-sm">

            <div className="bg-green-600 text-white p-8">
              <h3 className="text-lg font-semibold">
                Monitoring & Evaluation
              </h3>

              <p className="mt-3 text-sm opacity-90">
                Measure impact and improve program performance with structured frameworks.
              </p>

              <button className="mt-6 bg-white text-[#000066] px-4 py-2 rounded-md text-sm font-medium">
                Get started
              </button>
            </div>

            <div className="relative h-[220px]">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800"
                alt=""
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* CARD 3 */}
          <div className="grid md:grid-cols-2 rounded-xl overflow-hidden shadow-sm">

            <div className="bg-yellow-600 text-white p-8">
              <h3 className="text-lg font-semibold">
                Data Analytics & Insights
              </h3>

              <p className="mt-3 text-sm opacity-90">
                Transform complex datasets into clear, actionable insights.
              </p>

              <button className="mt-6 bg-white text-[#000066] px-4 py-2 rounded-md text-sm font-medium">
                Get started
              </button>
            </div>

            <div className="relative h-[220px]">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800"
                alt=""
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* CARD 4 */}
          <div className="grid md:grid-cols-2 rounded-xl overflow-hidden shadow-sm">

            <div className="bg-orange-500 text-white p-8">
              <h3 className="text-lg font-semibold">
                Strategy & Advisory
              </h3>

              <p className="mt-3 text-sm opacity-90">
                Data-driven strategy and policy advisory for better decisions.
              </p>

              <button className="mt-6 bg-white text-[#000066] px-4 py-2 rounded-md text-sm font-medium">
                Get started
              </button>
            </div>

            <div className="relative h-[220px]">
              <Image
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=800"
                alt=""
                fill
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}