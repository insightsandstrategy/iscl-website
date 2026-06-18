"use client";

import { useState } from "react";
import FormInput from "./FormInput";

export default function ProjectForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    organization: "",
    phone: "",
    type: "",
    timeline: "",
    description: "",
    budget: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    try {
      const scriptUrl = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;

      if (!scriptUrl) {
        throw new Error(
          "NEXT_PUBLIC_GOOGLE_SCRIPT_URL is not defined."
        );
      }

      await fetch(scriptUrl, {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify({
          sheet: "Project Requests",
          ...form,
        }),
      });

      setMessage("Project request submitted successfully.");

      setForm({
        name: "",
        email: "",
        organization: "",
        phone: "",
        type: "",
        timeline: "",
        description: "",
        budget: "",
      });
    } catch (error) {
      console.error(error);
      setMessage("Unable to submit form. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">

      {/* SECTION 1: BASIC INFO */}
      <div>
        <h3 className="text-xl font-semibold text-[#000066] mb-4">
          Basic Information
        </h3>

        <div className="grid md:grid-cols-2 gap-6">

          <FormInput
            label="Full Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <FormInput
            label="Email Address"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <FormInput
            label="Organization"
            name="organization"
            value={form.organization}
            onChange={handleChange}
          />

          <FormInput
            label="Phone Number"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
          />

        </div>
      </div>

      {/* SECTION 2: PROJECT DETAILS */}
      <div>
        <h3 className="text-xl font-semibold text-[#000066] mb-4">
          Projectsdhhh Details
        </h3>

        <div className="grid md:grid-cols-2 gap-6">

          <FormInput
            label="Project Type"
            name="type"
            placeholder="e.g. Evaluation, Survey..."
            value={form.type}
            onChange={handleChange}
            required
          />

          <FormInput
            label="Timeline"
            name="timeline"
            placeholder="e.g. 3 months"
            value={form.timeline}
            onChange={handleChange}
          />

        </div>

        <div className="mt-6">

          <label className="text-sm font-medium text-gray-700">
            Project Description
          </label>

          <textarea
            name="description"
            rows={5}
            value={form.description}
            onChange={handleChange}
            required
            className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#000066]"
          />

        </div>
      </div>

      {/* SECTION 3: BUDGET */}
      <div>
        <h3 className="text-xl font-semibold text-[#000066] mb-4">
          Budget & Scope
        </h3>

        <FormInput
          label="Estimated Budget"
          name="budget"
          placeholder="$5,000 - $20,000"
          value={form.budget}
          onChange={handleChange}
        />
      </div>

      {/* MESSAGE */}
      {message && (
        <div
          className={`rounded-md p-4 text-sm ${
            message.includes("successfully")
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {message}
        </div>
      )}

      {/* SUBMIT */}
      <button
        type="submit"
        disabled={loading}
        className="w-full py-4 bg-[#000066] text-white rounded-md hover:bg-opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? "Submitting..." : "Submit Projecgggt Request"}
      </button>

    </form>
  );
}