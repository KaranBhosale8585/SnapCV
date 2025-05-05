"use client";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { useSession } from "next-auth/react";

export default function CVForm() {
  const { data: session } = useSession();
  const userId = session?.user?.email;
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    userId: userId,
    name: "",
    title: "",
    phone: "",
    email: "",
    linkedin: "",
    objective: "",
    experience: [
      {
        role: "",
        company: "",
        period: "",
        responsibilities: [""],
      },
    ],
    education: "",
    skills: [""],
    certifications: [""],
    languages: [""],
    additionalInfo: [""],
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleExperienceChange = (i, key, value) => {
    const updated = [...formData.experience];
    updated[i][key] = value;
    setFormData((prev) => ({ ...prev, experience: updated }));
  };

  const handleResponsibilityChange = (i, j, value) => {
    const updated = [...formData.experience];
    updated[i].responsibilities[j] = value;
    setFormData((prev) => ({ ...prev, experience: updated }));
  };

  const addResponsibility = (i) => {
    const updated = [...formData.experience];
    updated[i].responsibilities.push("");
    setFormData((prev) => ({ ...prev, experience: updated }));
  };

  const addExperience = () => {
    setFormData((prev) => ({
      ...prev,
      experience: [
        ...prev.experience,
        { role: "", company: "", period: "", responsibilities: [""] },
      ],
    }));
  };

  const handleArrayField = (field, index, value) => {
    const updated = [...formData[field]];
    updated[index] = value.trim();
    setFormData((prev) => ({ ...prev, [field]: updated }));
  };

  const addArrayField = (field) => {
    setFormData((prev) => ({ ...prev, [field]: [...prev[field], ""] }));
  };

  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.phone) {
      toast.error("Name, email, and phone are required.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;
    setLoading(true);

    try {
      const response = await fetch("api/SaveGeneralData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      setLoading(false);
      if (response.ok) {
        toast.success("Data saved successfully");
        setFormData({
          userId:userId,
          name: "",
          title: "",
          phone: "",
          email: "",
          linkedin: "",
          objective: "",
          experience: [
            {
              role: "",
              company: "",
              period: "",
              responsibilities: [""],
            },
          ],
          education: "",
          skills: [""],
          certifications: [""],
          languages: [""],
          additionalInfo: [""],
        });
      } else {
        toast.error(data.message || "Error saving data");
      }
    } catch (error) {
      toast.error("An unexpected error occurred");
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto p-8 bg-white rounded-lg shadow-lg space-y-8"
      >
        <h1 className="text-3xl font-bold text-center text-blue-700">
          SnapCV Profile Builder
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputField
            label="Name"
            value={formData.name}
            onChange={(val) => handleChange("name", val)}
            placeholder="John Doe"
          />
          <InputField
            label="Title"
            value={formData.title}
            onChange={(val) => handleChange("title", val)}
            placeholder="Full Stack Developer"
          />
          <InputField
            label="Phone"
            value={formData.phone}
            onChange={(val) => handleChange("phone", val)}
            placeholder="(123) 456-7890"
          />
          <InputField
            label="Email"
            type="email"
            value={formData.email}
            onChange={(val) => handleChange("email", val)}
            placeholder="john@example.com"
          />
          <InputField
            label="LinkedIn"
            value={formData.linkedin}
            onChange={(val) => handleChange("linkedin", val)}
            placeholder="https://linkedin.com/in/username"
          />
        </div>

        <div>
          <label className="block text-gray-800 font-semibold">Objective</label>
          <textarea
            value={formData.objective}
            onChange={(e) => handleChange("objective", e.target.value)}
            placeholder="A brief summary of your career goals and skills."
            className="w-full p-4 border border-gray-300 rounded-md text-black focus:ring-2 focus:ring-blue-600 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-gray-800 font-semibold mb-2">
            Experience
          </label>
          {formData.experience.map((exp, i) => (
            <div
              key={i}
              className="space-y-3 mb-6 border p-4 rounded bg-gray-50"
            >
              <InputField
                label="Role"
                value={exp.role}
                onChange={(val) => handleExperienceChange(i, "role", val)}
                placeholder="Software Engineer"
              />
              <InputField
                label="Company"
                value={exp.company}
                onChange={(val) => handleExperienceChange(i, "company", val)}
                placeholder="Google"
              />
              <InputField
                label="Period"
                value={exp.period}
                onChange={(val) => handleExperienceChange(i, "period", val)}
                placeholder="Jan 2020 - Dec 2023"
              />
              {exp.responsibilities.map((res, j) => (
                <InputField
                  key={j}
                  label={`Responsibility ${j + 1}`}
                  value={res}
                  onChange={(val) => handleResponsibilityChange(i, j, val)}
                  placeholder="Built and deployed scalable web applications"
                />
              ))}
              <button
                type="button"
                onClick={() => addResponsibility(i)}
                className="text-blue-600 text-sm underline"
              >
                + Add Responsibility
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addExperience}
            className="text-blue-600 text-sm underline"
          >
            + Add Experience
          </button>
        </div>

        <InputField
          label="Education"
          value={formData.education}
          onChange={(val) => handleChange("education", val)}
          placeholder="B.Tech in Computer Science - ABC University"
        />

        <InputField
          label="Skills"
          value={formData.skills.join(", ")}
          onChange={(val) =>
            handleChange(
              "skills",
              val.split(",").map((v) => v.trim())
            )
          }
          placeholder="React, Node.js, MongoDB"
        />

        <InputField
          label="Certifications"
          value={formData.certifications.join(", ")}
          onChange={(val) =>
            handleChange(
              "certifications",
              val.split(",").map((v) => v.trim())
            )
          }
          placeholder="AWS Certified, Google Cloud, Scrum Master"
        />

        <InputField
          label="Languages"
          value={formData.languages.join(", ")}
          onChange={(val) =>
            handleChange(
              "languages",
              val.split(",").map((v) => v.trim())
            )
          }
          placeholder="English, Hindi, Marathi"
        />

        <div>
          <label className="block text-gray-800 font-semibold">
            Additional Info
          </label>
          {formData.additionalInfo.map((item, index) => (
            <InputField
              key={index}
              value={item}
              onChange={(val) => handleArrayField("additionalInfo", index, val)}
              placeholder="E.g., Available for relocation"
            />
          ))}
          <button
            type="button"
            onClick={() => addArrayField("additionalInfo")}
            className="text-blue-600 text-sm underline"
          >
            + Add Additional Info
          </button>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition"
          disabled={loading}
        >
          {loading ? <span>Loading...</span> : "Submit CV Data"}
        </button>
      </form>
      <ToastContainer />
    </>
  );
}

const InputField = ({ label, type = "text", value, onChange, placeholder }) => (
  <div>
    {label && (
      <label className="block text-gray-800 font-semibold mb-1">{label}</label>
    )}
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full p-4 border border-gray-300 rounded-md text-black focus:ring-2 focus:ring-blue-600 focus:outline-none"
    />
  </div>
);
