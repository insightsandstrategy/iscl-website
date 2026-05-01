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
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    console.log("Form Submitted:", form);

    alert("Project request submitted!");
  };

  return (
    <main className="bg-gray-50 min-h-screen py-20 px-6">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-md">

        {/* HEADER */}
        <h1 className="text-3xl font-bold text-[#000066]">
          Start a Project
        </h1>
        <p className="mt-2 text-gray-600">
          Tell us about your project and we’ll get back to you.
        </p>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="mt-8 space-y-8">

          {/* CONTACT INFO */}
          <div>
            <h2 className="text-lg font-semibold text-[#000066]">
              Contact Information
            </h2>

            <div className="mt-4 space-y-4">
              <input
                name="name"
                placeholder="Full Name"
                onChange={handleChange}
                className="w-full border p-3 rounded-md"
                required
              />

              <input
                name="email"
                type="email"
                placeholder="Email Address"
                onChange={handleChange}
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
              placeholder="Organization Name"
              onChange={handleChange}
              className="w-full mt-4 border p-3 rounded-md"
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
                placeholder="Describe your project..."
                onChange={handleChange}
                className="w-full border p-3 rounded-md"
                rows={4}
                required
              />
            </div>
          </div>

          {/* BUDGET + TIMELINE */}
          <div>
            <h2 className="text-lg font-semibold text-[#000066]">
              Budget & Timeline
            </h2>

            <div className="mt-4 grid md:grid-cols-2 gap-4">
              <select
                name="budget"
                onChange={handleChange}
                className="w-full border p-3 rounded-md"
              >
                <option value="">Select Budget</option>
                <option>$1k - $5k</option>
                <option>$5k - $20k</option>
                <option>$20k+</option>
              </select>

              <select
                name="timeline"
                onChange={handleChange}
                className="w-full border p-3 rounded-md"
              >
                <option value="">Select Timeline</option>
                <option>1-2 Weeks</option>
                <option>1 Month</option>
                <option>3+ Months</option>
              </select>
            </div>
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