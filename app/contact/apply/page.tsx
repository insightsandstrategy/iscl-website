export default function ApplyPage() {
  return (
    <main className="py-20 max-w-3xl mx-auto px-6">
      <h1 className="text-3xl font-bold text-[#000066]">
        Apply for Services
      </h1>

      <p className="mt-4 text-gray-600">
        Apply to participate in our programs or services.
      </p>

      <form className="mt-8 space-y-4">
        <input className="w-full border p-3 rounded-md" placeholder="Full Name" />
        <input className="w-full border p-3 rounded-md" placeholder="Email" />
        <input className="w-full border p-3 rounded-md" placeholder="Organization" />

        <button className="bg-[#000066] text-white px-6 py-3 rounded-md">
          Submit Application
        </button>
      </form>
    </main>
  );
}