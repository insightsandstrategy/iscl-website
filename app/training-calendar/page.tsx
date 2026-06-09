import Link from "next/link";

export default function TrainingCalendarPage() {
const programmes = [
{
month: "July 2026",
theme: "Foundations of Development Excellence",
programme: "Project DPro Certification",
dates: "20th – 31st July (22nd & 29th excluded)",
audience: "Programme Officers, Project Managers",
competency: "Project Cycle, Design, Planning",
},
{
month: "August 2026",
theme: "Data Intelligence and Analytics",
programme: "Data Analytics for Development",
dates: "19th – 31st August (21st, 25th & 28th excluded)",
audience: "Data Analysts, MEL Professionals",
competency: "Power BI, Data Storytelling, Business Intelligence",
},
{
month: "September 2026",
theme: "Evidence Generation and Research Quality",
programme: "Research Design Masterclass",
dates: "17th – 30th September (20th, 23rd & 27th excluded)",
audience: "Researchers, Policy Advisors",
competency: "Research Methods, Evidence Translation",
},
{
month: "October 2026",
theme: "MEAL — Systems That Drive Learning",
programme: "MEAL DPro Certification",
dates: "20th – 31st October (23rd, 26th & 30th excluded)",
audience: "MEL Officers, Programme Managers",
competency: "MEAL Frameworks, Adaptive Management",
},
{
month: "November 2026",
theme: "Programme Strategy and Scale",
programme: "Program DPro Certification",
dates: "17th – 30th November",
audience: "Programme Directors, Senior Managers",
competency: "Portfolio Management, Strategy, Scale",
},
{
month: "December 2026",
theme: "Financial Stewardship and Accountability",
programme: "Finance DPro Certification",
dates: "18th – 31st December",
audience: "Finance Officers, Programme Managers",
competency: "Budgeting, Donor Reporting, Audit",
},
{
month: "January 2027",
theme: "Organisational Strategy and Leadership",
programme: "Strategic Planning Masterclass",
dates: "18th – 30th January",
audience: "Executive Directors, Country Directors",
competency: "Scenario Planning, Results Frameworks",
},
{
month: "February 2027",
theme: "AI and Digital Transformation",
programme: "AI for Development Certification",
dates: "15th – 28th February",
audience: "MEL/Data Professionals, Innovators",
competency: "AI Tools, Ethics, Digital Workflows",
},
{
month: "March 2027",
theme: "Leadership and Organisational Development",
programme: "Development Leadership Programme",
dates: "18th – 30th March",
audience: "Senior Leaders, Emerging Executives",
competency: "Adaptive Leadership, Talent, Culture",
},
{
month: "April 2027",
theme: "Surveys, Polling and Community Evidence",
programme: "Survey Design and Polling Masterclass",
dates: "19th – 30th April",
audience: "Researchers, Social Scientists",
competency: "Survey Design, Sampling, Mobile Data",
},
{
month: "May 2027",
theme: "Governance, Policy and Accountability",
programme: "Governance and Public Policy Masterclass",
dates: "18th – 31st May",
audience: "Policy Analysts, NGO Governance Officers",
competency: "Policy Analysis, Social Accountability",
},
{
month: "June 2027",
theme: "Social Good, Impact and Future Skills",
programme: "Social Good DPro Certification",
dates: "17th – 29th June",
audience: "Development Innovators, All Professionals",
competency: "Impact Measurement, Social Value, Human-Centred Design",
},
];

return (
<main className="bg-white">

  <section className="bg-[#000066] text-white py-24">
    <div className="max-w-6xl mx-auto px-6 text-center">

      <p className="uppercase tracking-[0.3em] text-[#FEC619] text-sm font-semibold">
        Capacity Development
      </p>

      <h1 className="mt-4 text-5xl md:text-6xl font-black">
        Training Calendar
      </h1>

      <p className="mt-6 max-w-3xl mx-auto text-white/80 text-lg">
        Explore ISCL's annual professional development programmes,
        certifications, masterclasses, and leadership learning opportunities.
      </p>

    </div>
  </section>

  <section className="py-20">
    <div className="max-w-7xl mx-auto px-6">

      <div className="grid gap-8">

        {programmes.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm hover:shadow-lg transition"
          >
            <div className="flex flex-wrap gap-3 items-center">

              <span className="bg-[#FEC619] text-[#000066] px-4 py-2 rounded-full font-semibold">
                {item.month}
              </span>

              <span className="bg-[#000066] text-white px-4 py-2 rounded-full">
                {item.programme}
              </span>

            </div>

            <h2 className="mt-6 text-3xl font-bold text-[#000066]">
              {item.theme}
            </h2>

            <div className="mt-6 grid md:grid-cols-3 gap-6">

              <div>
                <h3 className="font-semibold text-[#000066]">Dates</h3>
                <p className="text-gray-600 mt-2">{item.dates}</p>
              </div>

              <div>
                <h3 className="font-semibold text-[#000066]">Audience</h3>
                <p className="text-gray-600 mt-2">{item.audience}</p>
              </div>

              <div>
                <h3 className="font-semibold text-[#000066]">
                  Competencies
                </h3>
                <p className="text-gray-600 mt-2">{item.competency}</p>
              </div>

            </div>
          </div>
        ))}

      </div>

      <div className="mt-16 text-center">

        <Link
          href="/contact"
          className="bg-[#000066] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#0B3AA4] transition"
        >
          Register Interest
        </Link>

      </div>

    </div>
  </section>

</main>

);
}