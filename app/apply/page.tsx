import ApplyForm from "@/components/forms/ApplyForm";

export default function ApplyPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-semibold text-[#000066] mb-6">
        Apply for Services
      </h1>
      <ApplyForm />
    </div>
  );
}