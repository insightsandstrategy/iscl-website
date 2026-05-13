import Image from "next/image";

const partners = [
  {
    name: "ActionAid",
    logo: "/partners/actionaid.png",
  },
  {
    name: "SOAR Initiative",
    logo: "/partners/soar.png",
  },
  {
    name: "Leap Africa",
    logo: "/partners/leap.png",
  },
  {
    name: "RePHI",
    logo: "/partners/rephi.png",
  },
  {
    name: "CERPHC",
    logo: "/partners/cerphc.png",
  },
  {
    name: "NITDA",
    logo: "/partners/nitda.png"
  },
  {
    name: "Yiaga Africa",
    logo: "/partners/yiaga.png",
  },
  {
    name: "NPHCDA",
    logo: "/partners/nphcda.png",
  },
  {
    name: "Rhema Care",
    logo: "/partners/rhema.png",
  },
  {
    name: "Alliances for Africa",
    logo: "/partners/afa.png",
  },
  {
    name: "The Girl Child Initiative",
    logo: "/partners/girlchild.png",
  },
  {
    name: "German Cooperation",
    logo: "/partners/german.png",
  },
  {
    name: "GIZ",
    logo: "/partners/giz.png",
  },
  {
    name: "Digital Transformation Center Nigeria",
    logo: "/partners/dtcn.png",
  },
  {
    name: "Co-Founded",
    logo: "/partners/coFounded.png",
  },
  {
    name: "Terre des Hommes",
    logo: "/partners/tdh.png",
  },
];

export default function Partners() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="max-w-3xl">

          <p className="text-[#000066] text-sm font-semibold tracking-[0.3em] uppercase">
            Our
          </p>

          <h2 className="mt-2 text-4xl md:text-5xl font-black text-[#0B3AA4] leading-none">
            PARTNERS
          </h2>

          <div className="w-24 h-1 bg-[#FEC619] mt-4 rounded-full"></div>

        </div>

        {/* Logos */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-12 gap-y-16 items-center">

          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center grayscale hover:grayscale-0 hover:scale-105 transition duration-300"
            >

              <div className="relative w-[180px] h-[100px]">

                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain"
                />

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}