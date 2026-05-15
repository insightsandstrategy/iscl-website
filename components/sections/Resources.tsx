export default function Resources() {
  const rows = [
    {
      function: "Data Collection",
      tools: ["SurveyCTO", "SurveyToGo", "Kobo Toolbox"],
    },
    {
      function: "Quantitative Analysis",
      tools: ["SPSS", "STATA", "R & Python"],
    },
    {
      function: "Qualitative Analysis",
      tools: ["Nvivo", "MaxDQA", "Dedoose"],
    },
    {
      function: "Data Visualisation",
      tools: ["Tableau", "Power BI", "Excel & Think-cell"],
    },
    {
      function: "Outputs",
      tools: [
        "Interactive Reports",
        "Dashboards AhaSlides, SketchWow",
        "Videos & Images",
      ],
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="max-w-3xl">

          <p className="text-[#000066] text-sm font-semibold tracking-[0.3em] uppercase">
            Our
          </p>

          <h2 className="mt-2 text-4xl md:text-5xl font-black text-[#0B3AA4] leading-none">
            TECHNOLOGY <br /> & TOOLS
          </h2>

          <div className="w-24 h-1 bg-[#FEC619] mt-4 rounded-full"></div>

          <p className="mt-6 text-gray-700 text-lg leading-relaxed">
            We utilise cutting-edge technology to ensure data accuracy,
            privacy, and real-time insights. Some of the tools we employ
            are presented below.
          </p>

        </div>

        {/* Table */}
<div className="mt-12 overflow-x-auto">

  <div className="min-w-[900px] overflow-hidden rounded-xl shadow-lg">

    {/* Header */}
    <div className="grid grid-cols-4">

      <div className="bg-[#0B3AA4] text-white p-6 text-xl font-semibold border border-white whitespace-normal break-words">
        Functions
      </div>

      <div className="bg-[#3D63B8] text-white p-6 text-xl font-semibold border border-white col-span-3 text-center whitespace-normal break-words">
        Technology & Tools
      </div>

    </div>

    {/* Rows */}
    {rows.map((row, index) => (
      <div
        key={index}
        className="grid grid-cols-4"
      >

        {/* Function */}
        <div className="bg-[#0B3AA4] text-white p-6 text-2xl leading-snug font-medium border border-white whitespace-normal break-words">
          {row.function}
        </div>

        {/* Tools */}
        {row.tools.map((tool, toolIndex) => (
          <div
            key={toolIndex}
            className={`p-6 text-white text-2xl leading-snug border border-white whitespace-normal break-words ${
              toolIndex % 2 === 0
                ? "bg-[#3D63B8]"
                : "bg-[#0B3AA4]"
            }`}
          >
            {tool}
          </div>
        ))}

      </div>
    ))}

  </div>

</div>
</div>
    </section>
  );
}