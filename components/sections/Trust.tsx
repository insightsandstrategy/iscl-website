export default function Trust() {
  return (
    <section className="relative overflow-hidden py-24 bg-[#000066]">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#FEC619]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto">

          <p className="text-[#FEC619] uppercase tracking-[0.3em] text-sm font-semibold">
            Our Reach & Impact
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-black text-white leading-tight">
            Results That Speak
            <br />
            For Themselves
          </h2>

          <p className="mt-6 text-white/70 text-lg leading-relaxed">
            Our work spans baseline studies, endline evaluations,
            polling operations, capacity development, and strategic
            advisory across Nigeria's 36 states and the FCT.
          </p>

          <div className="w-24 h-1 bg-[#FEC619] rounded-full mx-auto mt-8"></div>

        </div>

        {/* IMPACT STATS */}
        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* CARD 1 */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-10 text-center hover:-translate-y-2 transition duration-300 shadow-xl">

            <h3 className="text-5xl font-black text-[#FEC619]">
              600+
            </h3>

            <p className="mt-4 text-white text-xl font-semibold">
              Professionals
              <br />
              Trained
            </p>

          </div>

          {/* CARD 2 */}
          <div className="bg-[#FEC619] rounded-3xl p-10 text-center hover:-translate-y-2 transition duration-300 shadow-2xl">

            <h3 className="text-5xl font-black text-[#000066]">
              7
            </h3>

            <p className="mt-4 text-[#000066] text-xl font-bold">
              Evaluations
              <br />
              (Baseline & Endline)
            </p>

          </div>

          {/* CARD 3 */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-10 text-center hover:-translate-y-2 transition duration-300 shadow-xl">

            <h3 className="text-5xl font-black text-[#FEC619]">
              4
            </h3>

            <p className="mt-4 text-white text-xl font-semibold">
              Government Agencies
              <br />
              Served
            </p>

          </div>

          {/* CARD 4 */}
          <div className="bg-[#0B3AA4] rounded-3xl p-10 text-center hover:-translate-y-2 transition duration-300 shadow-2xl border border-white/10">

            <h3 className="text-5xl font-black text-[#FEC619]">
              100M+
            </h3>

            <p className="mt-4 text-white text-xl font-semibold">
              Verified Phone
              <br />
              Contacts
            </p>

          </div>

        </div>

        {/* REACH SECTION */}
        <div className="mt-24">

          <div className="text-center">

            <p className="text-[#FEC619] uppercase tracking-[0.3em] text-sm font-semibold">
              Our Reach
            </p>

            <h3 className="mt-4 text-3xl md:text-4xl font-black text-white">
              Operating Across Nigeria,
              <br />
              Positioned for Africa
            </h3>

            <div className="w-20 h-1 bg-[#FEC619] rounded-full mx-auto mt-6"></div>

          </div>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* Reach 1 */}
            <div className="bg-white rounded-2xl p-8 text-center shadow-xl">

              <p className="text-sm uppercase tracking-[0.2em] text-[#000066] font-semibold">
                Headquarters
              </p>

              <h4 className="mt-4 text-2xl font-black text-[#000066]">
                Abuja, FCT
              </h4>

            </div>

            {/* Reach 2 */}
            <div className="bg-white rounded-2xl p-8 text-center shadow-xl">

              <p className="text-sm uppercase tracking-[0.2em] text-[#000066] font-semibold">
                Coverage
              </p>

              <h4 className="mt-4 text-2xl font-black text-[#000066]">
                36 States + FCT
              </h4>

            </div>

            {/* Reach 3 */}
            <div className="bg-white rounded-2xl p-8 text-center shadow-xl">

              <p className="text-sm uppercase tracking-[0.2em] text-[#000066] font-semibold">
                Database Reach
              </p>

              <h4 className="mt-4 text-2xl font-black text-[#000066]">
                National, State,
                <br />
                LGA & Ward
              </h4>

            </div>

            {/* Reach 4 */}
            <div className="bg-white rounded-2xl p-8 text-center shadow-xl">

              <p className="text-sm uppercase tracking-[0.2em] text-[#000066] font-semibold">
                Vision
              </p>

              <h4 className="mt-4 text-2xl font-black text-[#000066]">
                Pan-African
                <br />
                Operations
              </h4>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}