import Image from "next/image";
import Link from "next/link";

const teamMembers = [
  {
    name: "Victoria Ikani",
    role: "Chief Finance & Operating Officer",
    image: "/victoriaceo.jpg",
    linkedin: "https://www.linkedin.com/in/victoria-ikani-73b54262",

  },
    {
    name: "Samuel Ikani",
    role: "Managing Partner/CEO",
    image: "/samuel.jpg",
    linkedin: "https://www.linkedin.com/in/samuel-ikani-b015bb41",
  },
  {
  name: "Favour Alor",
  role: "Faculty Lead:Training & Capacity Building",
  department: "Training & Capacity Building",
  image: "/alor.jpg",
  linkedin: "https://www.linkedin.com/in/favouralor",
},
  {
    name: "Elizabeth Apah",
    role: "Finance Manager",
    image: "/apeh.jpg",
    linkedin: "https://www.linkedin.com/in/elizabeth-apah-0378961ba",
  },
  {
    name: "Collins Ademola",
    role: "Media Manager",
    image: "/ca.jpg",
    linkedin: "https://www.linkedin.com/in/ademola-collins",
  },
{
  name: "Timothy Amana",
  role: "Data Management Officer",
  image: "/amana.jpg",
  linkedin: "https://www.linkedin.com/in/timothy-amana-8492421a1",
},

{
  name: "Stephanie Simon",
  role: "Communication Officer",
  image: "/simon.jpg",
  linkedin: "https://www.linkedin.com/in/stephanie-simon-4b58a2171",
},

{
  name: "Dr. Aderonke Folagbade",
  role: "Volunteer Advisor",
  image: "/ade.jpg",
},

{
  name: "Michael Oyinlola",
  role: "Volunteer Advisor",
  image: "/michael.jpg",
  linkedin: "https://www.linkedin.com/in/michaeloyinlolamonitoringandevaluationspecialist",
},

{
  name: "Victoria",
  role: "Program Officer - NGO",
  image: "/victoriango.jpg",
  linkedin: "",
},

{
  name: "Isah Babale",
  role: "Volunteer Advisor",
  image: "/isah.jpg",
  linkedin: "",
},

{
  name: "Humphrey Anyichie",
  role: "Intern",
  image: "/humphrey.jpg",
  linkedin: "https://www.linkedin.com/in/humphrey-anyichie-583853403",
},

{
  name: "Samson Antony",
  role: "Intern",
  image: "/antony.jpg",
  linkedin: "",
},

{
  name: "Sarah Kwewum",
  role: "Intern",
  image: "/sarah.jpg",
  linkedin: "https://www.linkedin.com/in/sarah-kwewum-743793199",
},
];

export default function TeamPage() {
  return (
    <main className="bg-[#F8F9FC] overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative h-[420px] flex items-center overflow-hidden">

        {/* Background Image */}
        <Image
          src="/team.jpg"
          alt="ISCL Team"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#000066]/80" />

        {/* Glow Effect */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#FEC619]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-6 w-full">

          <p className="uppercase tracking-[0.35em] text-[#FEC619] text-sm font-semibold">
            About ISCL
          </p>

          <h1 className="mt-6 text-5xl md:text-6xl font-black text-white leading-tight">
            Our Team
          </h1>

          <div className="mt-6 flex items-center gap-3 text-white/80 text-sm md:text-base">

            <Link
              href="/"
              className="hover:text-[#FEC619] transition"
            >
              Home
            </Link>

            <span className="text-[#FEC619]">›</span>

            <Link
              href="/about"
              className="hover:text-[#FEC619] transition"
            >
              About Us
            </Link>

            <span className="text-[#FEC619]">›</span>

            <span className="text-white font-semibold">
              Team
            </span>

          </div>

        </div>

      </section>

      {/* TEAM SECTION */}
      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          {/* Header */}
          <div className="text-center max-w-3xl mx-auto">

            <p className="uppercase tracking-[0.3em] text-[#000066] text-sm font-semibold">
              Leadership · Senior Consultants · Advisors · Core Team
            </p>

            <h2 className="mt-6 text-4xl md:text-5xl font-black text-[#000066] leading-tight">
              Meet The Professionals
              <br />
              Driving Impact
            </h2>

            <div className="w-24 h-1 bg-[#FEC619] rounded-full mx-auto mt-6"></div>

            <p className="mt-8 text-gray-600 text-lg leading-relaxed">
              Our multidisciplinary team combines expertise in research,
              monitoring & evaluation, analytics, public policy,
              governance, and development consulting.
            </p>

          </div>

          {/* Team Grid */}
          <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group bg-[#000066] rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.15)] hover:-translate-y-2 transition duration-300"
              >

                {/* Image */}
                <div className="relative h-[420px] overflow-hidden">

                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-500"
                  />

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#000066]/40 to-transparent" />

                </div>

                {/* Content */}
                <div className="relative p-8 text-center">

                  {/* Accent Line */}
                  <div className="w-16 h-1 bg-[#FEC619] rounded-full mx-auto"></div>

                  <h3 className="mt-6 text-2xl font-bold text-white">
                    {member.name}
                  </h3>

                  <p className="mt-3 text-white/75 text-lg">
                    {member.role}
                  </p>

                  {/* Social Icons */}
                  <div className="mt-8 flex justify-center gap-4">

                 <a
  href={member.linkedin}
  target="_blank"
  rel="noopener noreferrer"
  className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center text-white hover:bg-[#FEC619] hover:text-[#000066] transition"
>
  in
</a>

                   

                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* CTA SECTION */}
      <section className="relative py-24 bg-[#000066] overflow-hidden">

        {/* Background Glow */}
        <div className="absolute top-0 left-0 w-80 h-80 bg-[#FEC619]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl" />

        <div className="relative max-w-5xl mx-auto px-6 text-center">

          <p className="uppercase tracking-[0.35em] text-[#FEC619] text-sm font-semibold">
            Let’s Build The Future Together
          </p>

          <h2 className="mt-6 text-4xl md:text-5xl font-black text-white leading-tight">
            Work With A Team
            <br />
            That Delivers Results
          </h2>

          <p className="mt-8 text-xl text-white/75 leading-relaxed">
            ISCL combines data, strategy, innovation, and sector expertise
            to support organizations, governments, and development partners
            across Africa.
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