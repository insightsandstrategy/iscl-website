const features = [
  {
    title: "Strong & Rigorous on Methodologies",
    description:
      "We apply well-defined, reliable, and systematic methodologies to ensure accurate and credible results.",
  },
  {
    title: "Over 100million active Nigerian phone numbers in our Database",
    description:
      "We have a structured (National, State, L.G.A, Ward) and verified database, enabling extensive and targeted reach for research and insights.",
  },
  {
    title: "Strong Quality Control Checks & Measures",
    description:
      "We have advanced systems in place to maintain accuracy and reliability across all stages of data collection and analysis.",
  },
  {
    title: "Electronic & Tech Aided Data Collection (CAPI, CATI, CAWI)",
    description:
      "We make use of advanced digital tools to streamline our data collection process for efficiency, accuracy, and real-time insights.",
  },
  {
    title: "Strict Adherence to Ethical Practices",
    description:
      "Our work adheres to strict ethical guidelines for research while ensuring data integrity and confidentiality.",
  },
  {
    title: "Accredited by NCMD & Approved training partner with PM4NGOs",
    description:
      "ISCL is accredited as a Management Training Firm in Nigeria by the Nigerian Council for Management Development. & Approved for PM4NGOs",
  },
];

export default function WhyISCL() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="max-w-3xl">

          <p className="text-[#000066] text-sm font-semibold tracking-[0.3em] uppercase">
            Why
          </p>

          <h2 className="mt-2 text-4xl md:text-5xl font-black text-[#0B3AA4] leading-none">
            PARTNER WITH US
          </h2>

          <div className="w-24 h-1 bg-[#FEC619] mt-4 rounded-full"></div>

        </div>

        {/* Cards */}
        <div className="mt-14 grid md:grid-cols-2 gap-8">

          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-[28px] bg-[#000066] shadow-[0_10px_40px_rgba(0,0,0,0.12)] hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.2)] transition duration-300"
            >

              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-60"></div>

              {/* Top section */}
              <div className="relative bg-gradient-to-r from-[#0B3AA4] to-[#002B9A] px-8 py-6">

                <div className="absolute top-0 left-0 w-full h-full bg-white/5"></div>

                <h3 className="relative text-white text-2xl font-bold leading-tight text-center">
                  {feature.title}
                </h3>

              </div>

              {/* Bottom */}
              <div className="relative px-8 py-7">

                <p className="text-white/95 text-lg leading-relaxed">
                  {feature.description}
                </p>

              </div>

              {/* Accent line */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-[#FEC619] scale-x-0 group-hover:scale-x-100 transition duration-300 origin-left"></div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}