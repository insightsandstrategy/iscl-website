import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-[#F8F9FC] to-white pt-20">

      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#000066]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#FEC619]/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-3 gap-12 items-start">

          {/* CONTACT CARD */}
          <div className="bg-white border border-[#FEC619] rounded-[32px] p-8 shadow-[0_10px_40px_rgba(0,0,102,0.08)] hover:shadow-[0_20px_60px_rgba(0,0,102,0.12)] transition duration-300">

            {/* Icon */}
            <div className="w-16 h-16 rounded-full bg-[#FEC619]/20 flex items-center justify-center shadow-inner">
              <div className="w-10 h-10 rounded-full bg-[#FEC619] flex items-center justify-center text-[#000066] text-lg font-bold">
                ☎
              </div>
            </div>

            {/* Phone */}
            <h2 className="mt-8 text-3xl md:text-4xl font-black leading-tight text-[#000066]">
              Call us:
              <br />
              <span className="text-[#0B3AA4]">
                +(234) 902-303-5548
              </span>
            </h2>

            {/* Divider */}
            <div className="w-16 h-1 bg-[#FEC619] rounded-full mt-6"></div>

            {/* Text */}
            <p className="mt-6 text-gray-600 text-lg leading-relaxed">
  Let’s Build The Future Together.
</p>

            {/* Button */}
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center justify-center bg-[#000066] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#0B3AA4] hover:scale-[1.02] transition duration-300 shadow-lg"
            >
              BOOK A CONSULTATION →
            </Link>

          </div>

          {/* WORKING HOURS */}
          <div className="pt-6">

            <div className="w-16 h-16 rounded-full bg-[#000066]/5 flex items-center justify-center">
              <span className="text-2xl">🕒</span>
            </div>

            <h3 className="mt-6 text-[#000066] uppercase tracking-[0.25em] text-sm font-bold">
              WORKING HOURS:
            </h3>

            <div className="w-14 h-1 bg-[#FEC619] rounded-full mt-4"></div>

            <div className="mt-8 space-y-6">

              <div className="pb-4 border-b border-gray-200">
                <p className="text-2xl font-medium text-[#111827]">
                  Mon–Fri: 9am – 5pm
                </p>
              </div>

              <div className="pb-4 border-b border-gray-200">
                <p className="text-2xl font-medium text-[#111827]">
                  Sat: Closed
                </p>
              </div>

              <div>
                <p className="text-2xl font-medium text-[#111827]">
                  Sun: Closed
                </p>
              </div>

            </div>

          </div>

          {/* ADDRESS */}
          <div className="pt-6">

            <div className="w-16 h-16 rounded-full bg-[#000066]/5 flex items-center justify-center">
              <span className="text-2xl">📍</span>
            </div>

            <h3 className="mt-6 text-[#000066] uppercase tracking-[0.25em] text-sm font-bold">
              OUR ADDRESS:
            </h3>

            <div className="w-14 h-1 bg-[#FEC619] rounded-full mt-4"></div>

            <div className="mt-8 space-y-6">

              <div className="pb-4 border-b border-gray-200">
                <p className="text-xl leading-relaxed text-[#111827]">
                  Suite C7 Silverline Plaza,
                  <br />
                  Garki II, FCT, Abuja
                </p>
              </div>

              <div className="pb-4 border-b border-gray-200">
                <p className="text-lg text-gray-600 break-all">
                  info@insightsandstrategy.org
                </p>
              </div>

            </div>

            {/* SOCIALS */}
            <div className="mt-10 flex flex-wrap gap-4">

              <a
                href="https://www.instagram.com/insightandstrategy?igsh=YnNobmI3MDVqODF4"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-full border border-[#000066] text-[#000066] hover:bg-[#000066] hover:text-white transition duration-300 text-sm font-semibold shadow-sm hover:shadow-lg"
              >
                Instagram
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=61560471916580&mibextid=rS40aB7S9Ucbxw6v"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-full border border-[#000066] text-[#000066] hover:bg-[#000066] hover:text-white transition duration-300 text-sm font-semibold shadow-sm hover:shadow-lg"
              >
                Facebook
              </a>

              <a
                href="https://www.linkedin.com/company/insights-strategy-consulting/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-full border border-[#000066] text-[#000066] hover:bg-[#000066] hover:text-white transition duration-300 text-sm font-semibold shadow-sm hover:shadow-lg"
              >
                LinkedIn
              </a>

            </div>

          </div>

        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="mt-20 bg-[#000066] border-t-4 border-[#FEC619]">

        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-center gap-4 text-center">

          <div className="w-10 h-10 rounded-full border border-[#FEC619] flex items-center justify-center text-[#FEC619] text-lg">
            i
          </div>

          <p className="text-white text-sm md:text-base">
            © 2026 Insights & Strategy Consulting Limited | All Rights Reserved
          </p>

        </div>

      </div>

    </footer>
  );
}