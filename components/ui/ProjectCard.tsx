export default function ProjectCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl transition duration-300">
      
      <h3 className="text-lg font-semibold text-[#000066]">
        {title}
      </h3>

      <p className="mt-3 text-gray-600 leading-relaxed">
        {description}
      </p>

      <button className="mt-5 text-sm font-medium text-[#000066] hover:underline">
        View Case Study →
      </button>

    </div>
  );
}