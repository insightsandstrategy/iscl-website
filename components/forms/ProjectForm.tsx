"use client";

import FormInput from "./FormInput";

export default function ProjectForm() {
  return (
    <form className="space-y-8">

      {/* SECTION 1: BASIC INFO */}
      <div>
        <h3 className="text-xl font-semibold text-[#000066] mb-4">
          Basic Information
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          <FormInput label="Full Name" name="name" />
          <FormInput label="Email Address" name="email" type="email" />
          <FormInput label="Organization" name="organization" />
          <FormInput label="Phone Number" name="phone" />
        </div>
      </div>

      {/* SECTION 2: PROJECT DETAILS */}
      <div>
        <h3 className="text-xl font-semibold text-[#000066] mb-4">
          Project Details
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          <FormInput label="Project Type" name="type" placeholder="e.g. Evaluation, Survey..." />
          <FormInput label="Timeline" name="timeline" placeholder="e.g. 3 months" />
        </div>

        <div className="mt-6">
          <label className="text-sm font-medium text-gray-700">Project Description</label>
          <textarea
            name="description"
            rows={5}
            className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#000066]"
          />
        </div>
      </div>

      {/* SECTION 3: BUDGET */}
      <div>
        <h3 className="text-xl font-semibold text-[#000066] mb-4">
          Budget & Scope
        </h3>

        <FormInput label="Estimated Budget" name="budget" placeholder="$5,000 - $20,000" />
      </div>

      {/* SUBMIT */}
      <button className="w-full py-4 bg-[#000066] text-white rounded-md hover:bg-opacity-90 transition">
        Submit Project Request
      </button>

    </form>
  );
}