import ProjectForm from "@/components/forms/ProjectForm";

export default function StartProjectPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-semibold text-[#000066] mb-6">
        Start a Project
      </h1>
      <ProjectForm />
    </div>
  );
}