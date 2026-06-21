"use client";

import { useState } from "react";
import FormInput from "./FormInput";

export default function ApplyForm() {
  const [form, setForm] = useState({
    org_name: "",
    email: "",
    country: "",
    sector: "",
    program: "",
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
        sheet: "Service Applications",

        name: "",

        email: form.email,

        phone: "",

        organization: form.org_name,

        service: `${form.sector} (${form.country})`,

        message: form.program,
      }),
    });

    setMessage("Application submitted successfully.");

    setForm({
      org_name: "",
      email: "",
      country: "",
      sector: "",
      program: "",
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

      {/* ORGANIZATION */}
      <div>
        <h3 className="text-xl font-semibold text-[#000066] mb-4">
          Organization Details
        </h3>

        <div className="grid md:grid-cols-2 gap-6">

          <FormInput
            label="Organization Name"
            name="org_name"
            value={form.org_name}
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
            label="Country"
            name="country"
            value={form.country}
            onChange={handleChange}
            required
          />

          <FormInput
            label="Sector"
            name="sector"
            placeholder="Health, Education..."
            value={form.sector}
            onChange={handleChange}
            required
          />

        </div>
      </div>

      {/* PROGRAM */}
      <div>
        <h3 className="text-xl font-semibold text-[#000066] mb-4">
          Program Information
        </h3>

        <div>

          <label className="text-sm font-medium text-gray-700">
            Program Description
          </label>

          <textarea
            name="program"
            rows={5}
            value={form.program}
            onChange={handleChange}
            required
            className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#000066]"
          />

        </div>
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
        className="w-full py-4 bg-[#FEC619] text-black rounded-md hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? "Submitting..." : "Submit Application"}
      </button>

    </form>
  );
}