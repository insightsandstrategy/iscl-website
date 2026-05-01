import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="py-20 text-center bg-[#000066] text-white">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
          Tell us how we can help. Choose an option below to get started.
        </p>
      </section>

      {/* OPTIONS */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-8">

          {/* START PROJECT */}
          <div className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition">
            <h2 className="text-xl font-bold text-[#000066]">
              Start a Project
            </h2>

            <p className="mt-3 text-gray-600">
              Have a project in mind? Let’s work together to design and deliver
              data-driven solutions.
            </p>

            <Link href="/contact/start-project">
              <button className="mt-6 bg-[#FEC619] text-[#000066] px-5 py-2 rounded-md font-semibold">
                Get Started →
              </button>
            </Link>
          </div>

          {/* APPLY */}
          <div className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition">
            <h2 className="text-xl font-bold text-[#000066]">
              Apply for Services
            </h2>

            <p className="mt-3 text-gray-600">
              Interested in participating in our programs or services? Submit an application.
            </p>

            <Link href="/contact/apply">
              <button className="mt-6 border border-[#000066] text-[#000066] px-5 py-2 rounded-md font-semibold hover:bg-[#000066] hover:text-white transition">
                Apply Now →
              </button>
            </Link>
          </div>

        </div>
      </section>

    </main>
  );
}