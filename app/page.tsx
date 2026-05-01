import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import WhyISCL from "@/components/sections/WhyISCL";
import Projects from "@/components/sections/Projects";
import Trust from "@/components/sections/Trust";
import CTA from "@/components/sections/CTA";
import Audience from "@/components/sections/Audience";
import Solutions from "@/components/sections/Solutions";
import Resources from "@/components/sections/Resources";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Audience />  
      <Resources />
      <Process />
      <WhyISCL />
      <Projects />
      <Trust />
      <CTA />
    </>
  );
}