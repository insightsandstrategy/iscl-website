export default function Process() {
  return (
    <section className="py-24 bg-[#F8F9FC] overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto">

          <p className="text-[#000066] uppercase tracking-[0.3em] text-sm font-semibold">
            Our Approach
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-black text-[#000066] leading-tight">
            A Structured Path from
            <br />
            Insight to Impact
          </h2>

          <div className="w-24 h-1 bg-[#FEC619] mx-auto rounded-full mt-6"></div>

        </div>

        {/* PROCESS */}
        <div className="mt-20 relative">

          {/* Connection Line */}
          <div className="hidden lg:block absolute top-10 left-0 w-full h-[2px] bg-[#000066]/10"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 relative">

            {/* STEP 1 */}
            <div className="relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition duration-300 border border-gray-100">

              <div className="w-20 h-20 rounded-full bg-[#000066] text-white flex items-center justify-center text-2xl font-black shadow-lg">
                01
              </div>

              <h3 className="mt-8 text-2xl font-bold text-[#000066]">
                Diagnose
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Landscape analysis, stakeholder mapping, needs assessment
              </p>

            </div>

            {/* STEP 2 */}
            <div className="relative bg-[#000066] rounded-3xl p-8 shadow-xl text-white hover:scale-[1.02] transition duration-300">

              <div className="w-20 h-20 rounded-full bg-[#FEC619] text-[#000066] flex items-center justify-center text-2xl font-black shadow-lg">
                02
              </div>

              <h3 className="mt-8 text-2xl font-bold">
                Design
              </h3>

              <p className="mt-4 text-white/80 leading-relaxed">
                Methodology development, tool design, sampling frameworks
              </p>

            </div>

            {/* STEP 3 */}
            <div className="relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition duration-300 border border-gray-100">

              <div className="w-20 h-20 rounded-full bg-[#000066] text-white flex items-center justify-center text-2xl font-black shadow-lg">
                03
              </div>

              <h3 className="mt-8 text-2xl font-bold text-[#000066]">
                Implement
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Field deployment, data collection (CAPI/CATI/CAWI), quality assurance
              </p>

            </div>

            {/* STEP 4 */}
            <div className="relative bg-[#FEC619] rounded-3xl p-8 shadow-xl hover:scale-[1.02] transition duration-300">

              <div className="w-20 h-20 rounded-full bg-[#000066] text-white flex items-center justify-center text-2xl font-black shadow-lg">
                04
              </div>

              <h3 className="mt-8 text-2xl font-bold text-[#000066]">
                Analyse
              </h3>

              <p className="mt-4 text-[#000066]/80 leading-relaxed">
                Statistical analysis, data visualisation, pattern recognition
              </p>

            </div>

            {/* STEP 5 */}
            <div className="relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition duration-300 border border-gray-100">

              <div className="w-20 h-20 rounded-full bg-[#000066] text-white flex items-center justify-center text-2xl font-black shadow-lg">
                05
              </div>

              <h3 className="mt-8 text-2xl font-bold text-[#000066]">
                Learn
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Evidence synthesis, recommendations, knowledge transfer
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}