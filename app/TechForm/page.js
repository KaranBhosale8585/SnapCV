"use client";

import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSession } from "next-auth/react";

export default function TechCVForm() {
  const { data: session } = useSession();
  const userId = session?.user?.email;
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    userId: userId,
    name: "",
    title: "",
    phone: "",
    email: "",
    github: "",
    linkedin: "",
    skills: {
      frontend: "",
      backend: "",
      database: "",
      devops: "",
    },
    education: "",
    projects: [
      {
        title: "",
        description: "",
        stack: "",
        liveLink: "",
        githubLink: "",
      },
    ],
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSkillChange = (category, value) => {
    setFormData((prev) => ({
      ...prev,
      skills: { ...prev.skills, [category]: value },
    }));
  };

  const handleProjectChange = (i, key, value) => {
    const updated = [...formData.projects];
    updated[i][key] = value;
    setFormData((prev) => ({ ...prev, projects: updated }));
  };

  const addProject = () => {
    setFormData((prev) => ({
      ...prev,
      projects: [
        ...prev.projects,
        {
          title: "",
          description: "",
          stack: "",
          liveLink: "",
          githubLink: "",
        },
      ],
    }));
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
      const response = await fetch("/api/SaveTechData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      setLoading(false);

      console.log(formData)

      if (response.ok) {
        toast.success("Tech CV Data saved successfully");
        setFormData({
          userId:userId,
          name: "",
          title: "",
          phone: "",
          email: "",
          github: "",
          linkedin: "",
          skills: {
            frontend: "",
            backend: "",
            database: "",
            devops: "",
          },
          education: "",
          projects: [
            {
              title: "",
              description: "",
              stack: "",
              liveLink: "",
              githubLink: "",
            },
          ],
        });
      } else {
        toast.error(data.message || "Error saving tech CV data");
      }
    } catch (error) {
      toast.error("Unexpected error occurred");
      setLoading(false);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto p-8 bg-white rounded-lg shadow-lg space-y-8"
      >
        <h1 className="text-3xl font-bold text-center text-blue-700">
          SnapCV Tech Profile Builder
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
            placeholder="1234567890"
          />
          <InputField
            label="Email"
            type="email"
            value={formData.email}
            onChange={(val) => handleChange("email", val)}
            placeholder="johndoe@example.com"
          />
          <InputField
            label="Github"
            value={formData.github}
            onChange={(val) => handleChange("github", val)}
            placeholder="github.com/JohnDoe"
          />
          <InputField
            label="LinkedIn"
            value={formData.linkedin}
            onChange={(val) => handleChange("linkedin", val)}
            placeholder="linkedin.com/in/johndoe"
          />
        </div>

        {/* Skills Section */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">Skills</h2>
          <InputField
            label="Frontend"
            value={formData.skills.frontend}
            onChange={(val) => handleSkillChange("frontend", val)}
            placeholder="React, Next.js, Tailwind CSS, HTML, CSS, JavaScript"
          />
          <InputField
            label="Backend"
            value={formData.skills.backend}
            onChange={(val) => handleSkillChange("backend", val)}
            placeholder="Node.js, Express.js, MongoDB, REST APIs"
          />
          <InputField
            label="Database"
            value={formData.skills.database}
            onChange={(val) => handleSkillChange("database", val)}
            placeholder="MongoDB, PostgreSQL, MySQL"
          />
          <InputField
            label="DevOps"
            value={formData.skills.devops}
            onChange={(val) => handleSkillChange("devops", val)}
            placeholder="Git, GitHub, Docker, CI/CD"
          />
        </div>

        {/* Education */}
        <InputField
          label="Education"
          value={formData.education}
          onChange={(val) => handleChange("education", val)}
          placeholder="B.Tech in Computer Science - Example University"
        />

        {/* Projects */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-gray-800">Projects</h2>
          {formData.projects.map((project, i) => (
            <div key={i} className="space-y-3 border p-4 rounded bg-gray-50">
              <InputField
                label="Project Title"
                value={project.title}
                onChange={(val) => handleProjectChange(i, "title", val)}
                placeholder="TaskMaster"
              />
              <InputField
                label="Description"
                value={project.description}
                onChange={(val) => handleProjectChange(i, "description", val)}
                placeholder="A task management app with due dates and priorities"
              />
              <InputField
                label="Tech Stack"
                value={project.stack}
                onChange={(val) => handleProjectChange(i, "stack", val)}
                placeholder="React, Node.js, MongoDB"
              />
              <InputField
                label="Live Link"
                value={project.liveLink}
                onChange={(val) => handleProjectChange(i, "liveLink", val)}
                placeholder="https://taskmaster.example.com"
              />
              <InputField
                label="GitHub Link"
                value={project.githubLink}
                onChange={(val) => handleProjectChange(i, "githubLink", val)}
                placeholder="https://github.com/JohnDoe/TaskMaster"
              />
            </div>
          ))}
          <button
            type="button"
            onClick={addProject}
            className="text-blue-600 text-sm underline"
          >
            + Add Project
          </button>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition"
        >
          {loading ? "Saving..." : "Submit Tech CV Data"}
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
