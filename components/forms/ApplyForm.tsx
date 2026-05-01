"use client";

import FormInput from "./FormInput";

export default function ApplyForm() {
  return (
    <form className="space-y-8">

      {/* ORGANIZATION */}
      <div>
        <h3 className="text-xl font-semibold text-[#000066] mb-4">
          Organization Details
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          <FormInput label="Organization Name" name="org_name" />
          <FormInput label="Email Address" name="email" type="email" />
          <FormInput label="Country" name="country" />
          <FormInput label="Sector" name="sector" placeholder="Health, Education..." />
        </div>
      </div>

      {/* PROGRAM */}
      <div>
        <h3 className="text-xl font-semibold text-[#000066] mb-4">
          Program Information
        </h3>

        <div className="mt-6">
          <label className="text-sm font-medium text-gray-700">Program Description</label>
          <textarea
            name="program"
            rows={5}
            className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#000066]"
          />
        </div>
      </div>

      {/* SUBMIT */}
      <button className="w-full py-4 bg-[#FEC619] text-black rounded-md hover:opacity-90 transition">
        Submit Application
      </button>

    </form>
  );
}