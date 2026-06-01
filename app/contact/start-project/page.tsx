"use client";

import { useState } from "react";

export default function StartProjectPage() {
const [form, setForm] = useState({
name: "",
email: "",
organization: "",
projectType: "",
budget: "",
timeline: "",
description: "",
consent: false,
});

const [submitted, setSubmitted] = useState(false);

const handleChange = (
e: React.ChangeEvent<
HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
>
) => {
const { name, value, type } = e.target;

setForm({
  ...form,
  [name]:
    type === "checkbox"
      ? (e.target as HTMLInputElement).checked
      : value,
});

};

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const response = await fetch("/api/start-project", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    if (!response.ok) {
      throw new Error("Failed");
    }

    setSubmitted(true);

    setForm({
      name: "",
      email: "",
      organization: "",
      projectType: "",
      budget: "",
      timeline: "",
      description: "",
      consent: false,
    });
  } catch (error) {
    alert("Unable to submit form. Please try again.");
  }
};

return (
<main className="bg-gray-50 min-h-screen py-20 px-6">
<div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-md">

    <h1 className="text-3xl font-bold text-[#000066]">
      Start a Project
    </h1>

    <p className="mt-2 text-gray-600">
      Tell us about your project and we'll get back to you.
    </p>

    {submitted && (
      <div className="mt-6 bg-green-50 border border-green-300 text-green-800 p-4 rounded-md">
        Thank you. Your project request has been submitted successfully.
        Our team will contact you shortly.
      </div>
    )}

    <form onSubmit={handleSubmit} className="mt-8 space-y-8">

      {/* CONTACT INFORMATION */}
      <div>

        <h2 className="text-lg font-semibold text-[#000066]">
          Contact Information
        </h2>

        <div className="mt-4 space-y-4">

          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Full Name"
            pattern="[A-Za-z\s]+"
            title="Please enter letters only"
            className="w-full border p-3 rounded-md"
            required
          />

          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="w-full border p-3 rounded-md"
            required
          />

        </div>

      </div>

      {/* ORGANIZATION */}
      <div>

        <h2 className="text-lg font-semibold text-[#000066]">
          Organization
        </h2>

        <input
          name="organization"
          value={form.organization}
          onChange={handleChange}
          placeholder="Organization Name"
          className="w-full mt-4 border p-3 rounded-md"
          required
        />

      </div>

      {/* PROJECT DETAILS */}
      <div>

        <h2 className="text-lg font-semibold text-[#000066]">
          Project Details
        </h2>

        <div className="mt-4 space-y-4">

          <select
            name="projectType"
            value={form.projectType}
            onChange={handleChange}
            className="w-full border p-3 rounded-md"
            required
          >
            <option value="">Select Project Type</option>
            <option>Research & Data Collection</option>
            <option>Monitoring & Evaluation</option>
            <option>Data Analytics</option>
            <option>Strategy & Advisory</option>
          </select>

          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Describe your project..."
            className="w-full border p-3 rounded-md"
            rows={5}
            minLength={20}
            required
          />

        </div>

      </div>

      {/* BUDGET & TIMELINE */}
      <div>

        <h2 className="text-lg font-semibold text-[#000066]">
          Budget & Timeline
        </h2>

        <div className="mt-4 grid md:grid-cols-2 gap-4">

          <input
  type="text"
  name="budget"
  value={form.budget}
  onChange={handleChange}
  placeholder="Estimated Budget"
  className="w-full border p-3 rounded-md"
/>

          <select
            name="timeline"
            value={form.timeline}
            onChange={handleChange}
            className="w-full border p-3 rounded-md"
            required
          >
            <option value="">Select Timeline</option>
            <option>1-2 Weeks</option>
            <option>1 Month</option>
            <option>3+ Months</option>
          </select>

        </div>

      </div>

      {/* PRIVACY CONSENT */}
      <div className="flex items-start gap-3">

        <input
          type="checkbox"
          name="consent"
          checked={form.consent}
          onChange={handleChange}
          className="mt-1"
          required
        />

        <p className="text-sm text-gray-600">
          I agree to the Privacy Policy and consent to the collection,
          storage and processing of my information for purposes related
          to this project request.
        </p>

      </div>

      {/* SUBMIT */}
      <button
        type="submit"
        className="w-full bg-[#000066] text-white py-3 rounded-md font-semibold hover:bg-[#00004d] transition"
      >
        Submit Project Request
      </button>

    </form>

  </div>
</main>

);
}