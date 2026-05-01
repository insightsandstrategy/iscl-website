import Image from "next/image";

export default function ProjectsPage() {
  const projects = [
    {
      title: "Health Program Impact Evaluation",
      sector: "NGO / Public Health",
      problem:
        "The organization lacked structured data to measure program impact across multiple regions.",
      solution:
        "We designed and implemented a full monitoring & evaluation framework with data dashboards.",
      outcome:
        "Improved reporting accuracy by 40% and enabled real-time decision-making.",
      img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef",
    },
    {
      title: "Government Data Strategy Framework",
      sector: "Government",
      problem:
        "Fragmented data systems prevented effective policy planning.",
      solution:
        "Developed a centralized data governance and analytics framework.",
      outcome:
        "Enabled data-driven policy decisions across 3 ministries.",
      img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    },
    {
      title: "NGO Digital Transformation",
      sector: "Development Sector",
      problem:
        "Manual data collection processes caused delays and inaccuracies.",
      solution:
        "Implemented digital tools for data collection and automated reporting.",
      outcome:
        "Reduced reporting time by 60% and improved data quality significantly.",
      img: "https://images.unsplash.com/photo-1552664730-d307ca884978",
    },
  ];

  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="py-20 text-center bg-[#000066] text-white">
        <h1 className="text-4xl font-bold">Our Projects</h1>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
          We partner with organizations to deliver measurable impact through data,
          research, and strategic insights.
        </p>
      </section>

      {/* PROJECTS */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 space-y-16">
          {projects.map((p, i) => (
            <div
              key={i}
              className="grid md:grid-cols-2 gap-10 items-center"
            >
              <Image
                src={p.img}
                alt={p.title}
                width={500}
                height={300}
                className="rounded-xl shadow-md"
              />

              <div>
                <p className="text-sm text-[#FEC619] font-semibold">
                  {p.sector}
                </p>

                <h2 className="text-2xl font-bold text-[#000066] mt-2">
                  {p.title}
                </h2>

                <p className="mt-4 text-gray-600">
                  <strong>Problem:</strong> {p.problem}
                </p>

                <p className="mt-2 text-gray-600">
                  <strong>Solution:</strong> {p.solution}
                </p>

                <p className="mt-2 text-gray-700 font-medium">
                  <strong>Outcome:</strong> {p.outcome}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* IMPACT STRIP */}
      <section className="py-16 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold text-[#000066]">
          Delivering Measurable Impact
        </h2>

        <div className="mt-10 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div>
            <p className="text-3xl font-bold text-[#000066]">10+</p>
            <p className="text-gray-600">Projects Delivered</p>
          </div>

          <div>
            <p className="text-3xl font-bold text-[#000066]">8+</p>
            <p className="text-gray-600">Sectors Covered</p>
          </div>

          <div>
            <p className="text-3xl font-bold text-[#000066]">100%</p>
            <p className="text-gray-600">Data-Driven Approach</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#000066] text-white text-center">
        <h2 className="text-3xl font-bold">
          Want Results Like These?
        </h2>

        <p className="mt-3 text-gray-300">
          Let’s work together to turn your data into meaningful impact.
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <button className="bg-[#FEC619] text-[#000066] px-6 py-3 rounded-md font-semibold">
            Start a Project
          </button>

          <button className="border border-white px-6 py-3 rounded-md">
            Apply for Services
          </button>
        </div>
      </section>

    </main>
  );
}