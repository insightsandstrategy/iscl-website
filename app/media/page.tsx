import Image from "next/image";
import Link from "next/link";

const featuredEvent = {
  title: " The Main Ingredient For Policy Development",
  description:
    "Policy development is a structured, iterative process of creating, implementing, and evaluating guidelines to address specific issues or govern behaviour, usually consisting of identifying problems, setting agendas, formulating solutions, implementing, and evaluating outcomes. It transforms goals into actionable rules to ensure compliance, mitigate risks, and enhance effectiveness.",
  image: "/media.jpg",
  date: "April 2026",
  location: "Abuja, Nigeria",
};

const activities = [
  {
    title: "BUILDING BETTER POLICIES STARTS WITH THE RIGHT SKILL",
    category: "Training",
    date: "April 2026",
    image: "/media/activity1.jpg",
  },
  {
    title: "Field Data Collection Exercise",
    category: "Research",
    date: "March 2026",
    image: "/media/activity2.jpg",
  },
  {
    title: "Stakeholder Policy Dialogue",
    category: "Governance",
    date: "February 2026",
    image: "/media/activity3.jpg",
  },
  {
    title: "Monitoring & Evaluation Workshop",
    category: "M&E",
    date: "January 2026",
    image: "/media/activity4.jpg",
  },
  {
    title: "Development Research Conference",
    category: "Conference",
    date: "December 2025",
    image: "/media/activity5.jpg",
  },
  {
    title: "Community Engagement Programme",
    category: "Community",
    date: "November 2025",
    image: "/media/activity6.jpg",
  },
];

export default function MediaPage() {
  return (
    <main className="bg-[#F8F9FC] overflow-hidden">

      {/* HERO */}
      <section className="relative py-28 overflow-hidden bg-[#000066] text-white">

        {/* Glow Effects */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#FEC619]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 text-center">

          <p className="uppercase tracking-[0.35em] text-[#FEC619] text-sm font-semibold">
            ISCL In Action
          </p>

          <h1 className="mt-6 text-5xl md:text-6xl font-black leading-tight">
            Media & Activities
          </h1>

          <p className="mt-8 text-lg md:text-xl text-white/75 leading-relaxed max-w-3xl mx-auto">
            Explore official activities, stakeholder engagements,
            trainings, field operations, workshops, conferences,
            and development initiatives led by ISCL.
          </p>

        </div>

      </section>

      {/* FEATURED EVENT */}
      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* IMAGE */}
            <div className="relative overflow-hidden rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.15)]">

              <Image
                src={featuredEvent.image}
                alt={featuredEvent.title}
                width={900}
                height={700}
                className="w-full h-[300px] md:h-[550px] object-cover"
              />

            </div>

            {/* CONTENT */}
            <div>

              <p className="uppercase tracking-[0.3em] text-[#000066] text-sm font-semibold">
                Featured Activity
              </p>

              <h2 className="mt-6 text-4xl md:text-5xl font-black text-[#000066] leading-tight">
                {featuredEvent.title}
              </h2>

              <div className="w-24 h-1 bg-[#FEC619] rounded-full mt-6"></div>

              <div className="mt-8 flex flex-wrap gap-4 text-sm font-medium">

                <div className="bg-white px-5 py-3 rounded-full shadow-sm border border-gray-100 text-[#000066]">
                  {featuredEvent.date}
                </div>

                <div className="bg-white px-5 py-3 rounded-full shadow-sm border border-gray-100 text-[#000066]">
                  {featuredEvent.location}
                </div>

              </div>

              <p className="mt-8 text-gray-600 text-lg leading-relaxed">
                {featuredEvent.description}
              </p>

              <div className="mt-10">

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-[#000066] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#0B3AA4] transition shadow-xl"
                >
                  Request Consultation
                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ACTIVITIES GRID */}
      <section className="pb-24">

        <div className="max-w-7xl mx-auto px-6">

          {/* HEADER */}
          <div className="text-center max-w-3xl mx-auto">

            <p className="uppercase tracking-[0.35em] text-[#000066] text-sm font-semibold">
              Official Activities
            </p>

            <h2 className="mt-6 text-4xl md:text-5xl font-black text-[#000066] leading-tight">
              Events, Trainings &
              <br />
              Field Engagements
            </h2>

            <div className="w-24 h-1 bg-[#FEC619] rounded-full mx-auto mt-6"></div>

          </div>

          {/* GRID */}
          <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

            {activities.map((activity, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition duration-300"
              >

                {/* IMAGE */}
                <div className="relative overflow-hidden">

                  <Image
                    src={activity.image}
                    alt={activity.title}
                    width={700}
                    height={500}
                    className="w-full h-[260px] object-cover group-hover:scale-105 transition duration-500"
                  />

                </div>

                {/* CONTENT */}
                <div className="p-8">

                  <div className="flex items-center justify-between gap-4 flex-wrap">

                    <span className="bg-[#000066]/5 text-[#000066] px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wide">
                      {activity.category}
                    </span>

                    <span className="text-gray-500 text-sm">
                      {activity.date}
                    </span>

                  </div>

                  <h3 className="mt-6 text-2xl font-bold text-[#000066] leading-tight">
                    {activity.title}
                  </h3>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="relative py-24 bg-[#000066] overflow-hidden text-white">

        {/* Glow */}
        <div className="absolute top-0 left-0 w-80 h-80 bg-[#FEC619]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl" />

        <div className="relative max-w-5xl mx-auto px-6 text-center">

          <p className="uppercase tracking-[0.35em] text-[#FEC619] text-sm font-semibold">
            Let’s Build The Future Together
          </p>

          <h2 className="mt-6 text-4xl md:text-5xl font-black leading-tight">
            Partner With ISCL
            <br />
            For Impact-Driven Solutions
          </h2>

          <p className="mt-8 text-lg md:text-xl text-white/75 leading-relaxed max-w-3xl mx-auto">
            From research and monitoring to policy advisory and
            stakeholder engagement, ISCL delivers evidence-based
            solutions that drive meaningful development outcomes.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-6">

            <Link
              href="/contact"
              className="bg-[#FEC619] text-[#000066] px-8 py-4 rounded-full font-semibold hover:scale-[1.03] transition shadow-xl"
            >
              Request Consultation
            </Link>

            <Link
              href="/services"
              className="border border-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#000066] transition"
            >
              Explore Services
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}