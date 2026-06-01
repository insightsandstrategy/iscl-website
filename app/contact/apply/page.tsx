"use client";

import { useState } from "react";

export default function ApplyPage() {
const [form, setForm] = useState({
name: "",
email: "",
organization: "",
service: "",
reason: "",
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

const handleSubmit = (e: React.FormEvent) => {
e.preventDefault();

console.log("Application Submitted:", form);

setSubmitted(true);

setForm({
  name: "",
  email: "",
  organization: "",
  service: "",
  reason: "",
  consent: false,
});

};

return (
<main className="bg-gray-50 min-h-screen py-20 px-6">

  <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-md">

    {/* HEADER */}
    <h1 className="text-3xl font-bold text-[#000066]">
      Apply for Services
    </h1>

    <p className="mt-4 text-gray-600">
      Complete the form below to apply for one of our programmes,
      services, training opportunities or advisory engagements.
    </p>

    {/* SUCCESS MESSAGE */}
    {submitted && (
      <div className="mt-6 bg-green-50 border border-green-300 text-green-800 p-4 rounded-md">
        Thank you. Your application has been submitted successfully.
        Our team will review it and contact you if additional
        information is required.
      </div>
    )}

    {/* FORM */}
    <form onSubmit={handleSubmit} className="mt-8 space-y-6">

      {/* FULL NAME */}
      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Full Name"
        pattern="[A-Za-z\s]+"
        title="Please enter letters only"
        className="w-full border p-3 rounded-md"
        required
      />

      {/* EMAIL */}
      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Email Address"
        className="w-full border p-3 rounded-md"
        required
      />

      {/* ORGANIZATION */}
      <input
        type="text"
        name="organization"
        value={form.organization}
        onChange={handleChange}
        placeholder="Organization / Institution"
        className="w-full border p-3 rounded-md"
        required
      />

      {/* SERVICE */}
      <select
        name="service"
        value={form.service}
        onChange={handleChange}
        className="w-full border p-3 rounded-md"
        required
      >
        <option value="">Select Service</option>
        <option>Research & Data Collection</option>
        <option>Monitoring & Evaluation</option>
        <option>Data Analytics</option>
        <option>Training & Capacity Building</option>
        <option>Strategy & Advisory</option>
        <option>Technology & Innovation Consulting</option>
      </select>

      {/* REASON */}
      <textarea
        name="reason"
        value={form.reason}
        onChange={handleChange}
        placeholder="Tell us briefly why you are applying..."
        rows={5}
        minLength={20}
        className="w-full border p-3 rounded-md"
        required
      />

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
          to this application.
        </p>

      </div>

      {/* SUBMIT */}
      <button
        type="submit"
        className="w-full bg-[#000066] text-white py-3 rounded-md font-semibold hover:bg-[#00004d] transition"
      >
        Submit Application
      </button>

    </form>

  </div>

</main>

);
}