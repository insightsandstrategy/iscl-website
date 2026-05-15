import Image from "next/image";

export default function Resources() {
  const rows = [
    {
      function: "Data Collection",
      tools: [
        {
          name: "SurveyCTO",
          logo: "/surveycto.png",
        },
        {
          name: "SurveyToGo",
          logo: "/surveytogo.png",
        },
        {
          name: "Kobo Toolbox",
          logo: "/kobo.png",
        },
      ],
    },

    {
      function: "Quantitative Analysis",
      tools: [
        {
          name: "SPSS",
          logo: "/spss.png",
        },
        {
          name: "STATA",
          logo: "/stata.png",
        },
        {
          name: "R & Python",
          logo: "/python.png",
        },
      ],
    },

    {
      function: "Qualitative Analysis",
      tools: [
        {
          name: "Nvivo",
          logo: "/nvivo.png",
        },
        {
          name: "MaxDQA",
          logo: "/maxqda.png",
        },
        {
          name: "Dedoose",
          logo: "/dedoose.png",
        },
      ],
    },

    {
      function: "Data Visualisation",
      tools: [
        {
          name: "Tableau",
          logo: "/tableau.png",
        },
        {
          name: "Power BI",
          logo: "/powerbi.png",
        },
        {
          name: "Excel & Think-cell",
          logo: "/excelbell.png",
        },
      ],
    },

    {
      function: "Outputs",
      tools: [
        {
          name: "Interactive Reports",
          logo: "/report.png",
        },
        {
          name: "AhaSlides & SketchWow",
          logo: "/ahaslides.png",
        },
        {
          name: "Videos & Images",
          logo: "/video.png",
        },
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

          <div className="min-w-[900px] overflow-hidden rounded-2xl shadow-2xl border border-gray-200">

            {/* Header */}
            <div className="grid grid-cols-4">

              <div className="bg-[#0B3AA4] text-white p-5 md:p-6 text-lg md:text-xl font-semibold border border-white">
                Functions
              </div>

              <div className="bg-[#3D63B8] text-white p-5 md:p-6 text-lg md:text-xl font-semibold border border-white col-span-3 text-center">
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
                <div className="bg-[#0B3AA4] text-white p-5 md:p-6 text-lg md:text-2xl leading-snug font-medium border border-white flex items-center">
                  {row.function}
                </div>

                {/* Tools */}
                {row.tools.map((tool, toolIndex) => (
                  <div
                    key={toolIndex}
                    className={`p-4 md:p-6 text-white border border-white flex items-center gap-3 ${
                      toolIndex % 2 === 0
                        ? "bg-[#3D63B8]"
                        : "bg-[#0B3AA4]"
                    }`}
                  >

                    <div className="relative w-10 h-10 md:w-14 md:h-14 shrink-0">

                      <Image
                        src={tool.logo}
                        alt={tool.name}
                        fill
                        className="object-contain"
                      />

                    </div>

                    <span className="text-sm md:text-xl leading-snug font-medium">
                      {tool.name}
                    </span>

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