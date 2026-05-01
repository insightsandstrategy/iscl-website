import Image from "next/image";

const resources = [
  {
    type: "GUIDE",
    title: "Monitoring & Evaluation Framework Guide",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
  },
  {
    type: "TEMPLATE",
    title: "Baseline Survey Questionnaire Template",
    image:
      "https://images.unsplash.com/photo-1581091870627-3b5de59a89c1?q=80&w=800&auto=format&fit=crop",
  },
  {
    type: "TOOL",
    title: "Data Quality Assessment Checklist",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop",
  },
  {
    type: "GUIDE",
    title: "Using Data for Policy & Decision Making",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=800&auto=format&fit=crop",
  },
];

export default function Resources() {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="flex items-center justify-between">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#000066]">
            Insights, Resources & Tools
          </h2>

          <button className="border border-gray-300 px-4 py-2 rounded-md text-sm hover:bg-gray-100">
            View All
          </button>
        </div>

        {/* GRID */}
        <div className="mt-10 grid md:grid-cols-4 gap-6">

          {resources.map((item, index) => (
            <div
              key={index}
              className="group cursor-pointer"
            >
              {/* IMAGE */}
              <div className="relative h-[140px] rounded-lg overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition"
                />
              </div>

              {/* TYPE */}
              <span className="inline-block mt-4 text-xs font-medium px-2 py-1 bg-gray-100 rounded">
                {item.type}
              </span>

              {/* TITLE */}
              <h3 className="mt-3 text-sm font-semibold text-gray-800 group-hover:text-[#000066]">
                {item.title}
              </h3>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}