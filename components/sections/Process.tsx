export default function Process() {
  return (
    <section className="bg-gray-50 py-10">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* HEADER */}
        <h2 className="text-3xl font-semibold text-[#000066]">
          How We Work
        </h2>

        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Our structured approach ensures clarity, accuracy, and measurable impact at every stage.
        </p>

        {/* STEPS */}
        <div className="mt-16 grid md:grid-cols-4 gap-10">

          {/* STEP 1 */}
          <div>
            <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-[#000066] text-white font-bold">
              1
            </div>
            <h3 className="mt-6 font-semibold text-lg">Discovery</h3>
            <p className="mt-2 text-sm text-gray-600">
              We understand your goals, challenges, and data needs.
            </p>
          </div>

          {/* STEP 2 */}
          <div>
            <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-[#000066] text-white font-bold">
              2
            </div>
            <h3 className="mt-6 font-semibold text-lg">Data Collection</h3>
            <p className="mt-2 text-sm text-gray-600">
              We gather high-quality data using proven methodologies.
            </p>
          </div>

          {/* STEP 3 */}
          <div>
            <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-[#000066] text-white font-bold">
              3
            </div>
            <h3 className="mt-6 font-semibold text-lg">Analysis</h3>
            <p className="mt-2 text-sm text-gray-600">
              We transform data into meaningful insights and recommendations.
            </p>
          </div>

          {/* STEP 4 */}
          <div>
            <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-[#000066] text-white font-bold">
              4
            </div>
            <h3 className="mt-6 font-semibold text-lg">Delivery</h3>
            <p className="mt-2 text-sm text-gray-600">
              We present actionable results to support strategic decisions.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}