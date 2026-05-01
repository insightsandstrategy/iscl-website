export default function Trust() {
  return (
    <section className="py-10 bg-white text-center">
      <h2 className="text-3xl font-bold text-[#000066]">
        Trusted by Leading Organizations
      </h2>

      <p className="text-gray-500 mt-3">
        Delivering data-driven insights across NGOs and public institutions.
      </p>

      <div className="flex justify-center gap-4 mt-6 flex-wrap">
        {["ActionAid Nigeria", "Yiaga Africa", "Alliances for Africa"].map(
          (org, i) => (
            <span
              key={i}
              className="px-4 py-2 border rounded-full text-sm text-gray-600"
            >
              {org}
            </span>
          )
        )}
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
        {[
          ["5+", "Years Experience"],
          ["10+", "Projects Delivered"],
          ["8+", "Sectors Covered"],
          ["100%", "Data-Driven"],
        ].map(([num, label], i) => (
          <div key={i}>
            <h3 className="text-3xl font-bold text-[#000066]">{num}</h3>
            <p className="text-gray-500 text-sm">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}