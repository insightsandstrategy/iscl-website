import {
  Briefcase,
  Landmark,
  GraduationCap,
  HeartPulse,
  Tractor,
  Cpu,
  ShieldCheck,
  Clapperboard,
  FileText,
} from "lucide-react";

const sectors = [
  {
    title: "NGOs/\nDevelopment\nSector",
    icon: Briefcase,
  },
  {
    title: "Public\nPolicy",
    icon: FileText,
  },
  {
    title: "Governance\n& Politics",
    icon: Landmark,
  },
  {
    title: "Education\n& Academia",
    icon: GraduationCap,
  },
  {
    title: "Health\nEconomics\n& Policy",
    icon: HeartPulse,
  },
  {
    title: "Agriculture &\nAgro Business",
    icon: Tractor,
  },
  {
    title: "Tech &\nStart-Ups",
    icon: Cpu,
  },
  {
    title: "Security &\nGender",
    icon: ShieldCheck,
  },
  {
    title: "Entertainment &\nMedia",
    icon: Clapperboard,
  },
];

export default function Sectors() {
  return (
    <section className="py-20 bg-[#F7F7F7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Blue Bar */}
        <div className="h-6 bg-[#0B3AA4] w-full"></div>

        {/* Heading */}
        <div className="-mt-2 inline-block bg-[#0B3AA4] px-10 py-6 rounded-b-[40px] rounded-tr-[40px]">

          <h2 className="text-4xl md:text-5xl font-black text-white">
            SECTORS WE SERVE
          </h2>

          <div className="w-28 h-1 bg-[#FEC619] mt-5 mx-auto rounded-full"></div>

        </div>

        {/* Diagram */}
        <div className="mt-20 relative">

          {/* Row 1 */}
          <div className="grid md:grid-cols-3 gap-12">

            {sectors.slice(0, 3).map((sector, index) => {
              const Icon = sector.icon;

              return (
                <div
                  key={index}
                  className="relative flex items-center"
                >

                  {/* Icon Circle */}
                  <div className="absolute -left-5 z-10 w-20 h-20 rounded-full bg-[#0B3AA4] border-4 border-[#7C93D6] flex items-center justify-center shadow-lg">

                    <Icon className="text-white w-9 h-9" />

                  </div>

                  {/* Card */}
                  <div className="bg-[#0B3AA4] rounded-[24px] py-6 pl-20 pr-8 w-full shadow-md">

                    <h3 className="text-white text-2xl font-bold leading-tight whitespace-pre-line">
                      {sector.title}
                    </h3>

                  </div>

                </div>
              );
            })}

          </div>

          {/* Connector */}
          <div className="hidden md:block w-full h-[2px] bg-[#7C93D6] mt-[-70px]"></div>

          {/* Row 2 */}
          <div className="grid md:grid-cols-3 gap-12 mt-20">

            {sectors.slice(3, 6).map((sector, index) => {
              const Icon = sector.icon;

              return (
                <div
                  key={index}
                  className="relative flex items-center"
                >

                  {/* Icon Circle */}
                  <div className="absolute -left-5 z-10 w-20 h-20 rounded-full bg-[#0B3AA4] border-4 border-[#7C93D6] flex items-center justify-center shadow-lg">

                    <Icon className="text-white w-9 h-9" />

                  </div>

                  {/* Card */}
                  <div className="bg-[#0B3AA4] rounded-[24px] py-6 pl-20 pr-8 w-full shadow-md">

                    <h3 className="text-white text-2xl font-bold leading-tight whitespace-pre-line">
                      {sector.title}
                    </h3>

                  </div>

                </div>
              );
            })}

          </div>

          {/* Connector */}
          <div className="hidden md:block w-full h-[2px] bg-[#7C93D6] mt-[-70px]"></div>

          {/* Row 3 */}
          <div className="grid md:grid-cols-3 gap-12 mt-20">

            {sectors.slice(6, 9).map((sector, index) => {
              const Icon = sector.icon;

              return (
                <div
                  key={index}
                  className="relative flex items-center"
                >

                  {/* Icon Circle */}
                  <div className="absolute -left-5 z-10 w-20 h-20 rounded-full bg-[#0B3AA4] border-4 border-[#7C93D6] flex items-center justify-center shadow-lg">

                    <Icon className="text-white w-9 h-9" />

                  </div>

                  {/* Card */}
                  <div className="bg-[#0B3AA4] rounded-[24px] py-6 pl-20 pr-8 w-full shadow-md">

                    <h3 className="text-white text-2xl font-bold leading-tight whitespace-pre-line">
                      {sector.title}
                    </h3>

                  </div>

                </div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}