import { projects } from "@/data/projects";
import ProjectCard from "../ui/ProjectCard";

export default function Projects() {
  return (
    <section id= "projects" className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-2xl">
          <h2 className="mt-4 text-4xl md:text-5xl font-black text-[#000066] leading-tight">
            Projects
          </h2>
          <p className="mt-4 text-gray-600">
            From complexity to clarity — we deliver actionable insights across sectors and programs.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
  key={index}
  title={project.title}
  description={project.description}
  slug={project.slug}
/>
          ))}
        </div>

      </div>
    </section>
  );
}