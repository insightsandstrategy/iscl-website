import Link from "next/link";

export default function CEOInsights() {
  return (
    <section className="py-20 bg-[#F8F9FC]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="max-w-3xl">

          <p className="uppercase tracking-[0.3em] text-[#FEC619] text-sm font-semibold">
            Leadership Insights
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-black text-[#000066] leading-tight">
            Insights From Our CEO
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Explore articles, reflections, and thought leadership pieces by
            Samuel Ikani on Monitoring & Evaluation, public polic,
            governance, research methods, development systems, and
            evidence-based decision making.
          </p>

        </div>

        <div className="mt-12">

          <div className="bg-white rounded-3xl border border-gray-200 p-10 shadow-lg hover:shadow-2xl transition duration-300">

            <p className="text-[#FEC619] uppercase tracking-[0.25em] text-sm font-semibold">
              Publications & Thought Leadership
            </p>

            <h3 className="mt-4 text-3xl font-bold text-[#000066]">
              Samuel Ikani Articles & Publications
            </h3>

            <p className="mt-6 text-gray-600 leading-relaxed">
              Access practical insights, research perspectives, policy
              commentary, and professional reflections from Samuel Ikani,
              covering governance, development practice, MERL systems,
              organizational learning, and strategic decision-making.
            </p>

            <div className="mt-8">

              <Link
                href="https://samuelikani.org/blog.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-[#000066] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#0B3AA4] transition shadow-lg"
              >
                Read Articles →
              </Link>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}