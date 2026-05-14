"use client";

import { useEffect, useState } from "react";

import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import WhyISCL from "@/components/sections/WhyISCL";
import Projects from "@/components/sections/Projects";
import Trust from "@/components/sections/Trust";
import CTA from "@/components/sections/CTA";
import Audience from "@/components/sections/Audience";
import Resources from "@/components/sections/Resources";
import Partners from "@/components/sections/Partners";
import Footer from "@/components/layout/Footer";
import PromoPopup from "@/components/ui/PromoPopup";

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* POPUP */}
      <PromoPopup
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
      />

      <Hero />
      <Services />
      <Audience />
      <Resources />
      <Process />
      <WhyISCL />
      <Projects />
      <Partners />
      <Trust />
      <CTA />
      <Footer />
    </>
  );
}