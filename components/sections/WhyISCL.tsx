import { features } from "@/data/features";
import FeatureCard from "../ui/FeatureCard";

export default function WhyISCL() {
  return (
    <section className="py-10 bg-[#000066]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto text-white">
          <h2 className="text-3xl md:text-4xl font-bold">
            Why ISCL
          </h2>
          <p className="mt-4 text-white/80">
            We combine data, expertise, and innovation to deliver impactful solutions across sectors.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              bgColor={feature.bgColor}
            />
          ))}
        </div>

      </div>
    </section>
  );
}