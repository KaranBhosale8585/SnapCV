"use client";

import React from "react";

const TemplateSix = ({ data }) => {
  return (
    <div className="min-h-screen text-black bg-gray-100 py-12 px-8 flex justify-center">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Header Section */}
        <div className="bg-gray-800 text-white text-center py-10 px-6">
          <h1 className="text-5xl font-bold">{data.name}</h1>
          <h2 className="text-2xl mt-2 italic">{data.title}</h2>
        </div>

        {/* Main Content Body */}
        <div className="flex space-x-12 p-8">
          {/* Left Column (Contact) */}
          <div className="w-77 bg-gray-200 p-5  rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-center mb-4">Contact</h3>
            <div className="space-y-4">
              <p>
                <span className="font-bold">📞</span> {data.phone}
              </p>
              <p>
                <span className="font-bold">📧</span> {data.email}
              </p>
              {data.github && (
                <p>
                  <span className="font-bold">🐦</span> {data.github}
                </p>
              )}
              {data.linkedin && (
                <p>
                  <span className="font-bold">💼</span> {data.linkedin}
                </p>
              )}
            </div>
          </div>

          {/* Right Column (Content) */}
          <div className="w-3/4 space-y-8">
            {/* Skills Section */}
            <div>
              <h3 className="text-2xl font-semibold border-b-2 pb-2 mb-4">
                Skills
              </h3>
              <div className="space-y-4">
                {Object.entries(data.skills).map(([key, value], index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <span className="text-2xl">
                      {key === "Frontend"
                        ? "⚡"
                        : key === "Backend"
                        ? "🔙"
                        : "💻"}
                    </span>
                    <p>{value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Section */}
            <div>
              <h3 className="text-2xl font-semibold border-b-2 pb-2 mb-4">
                Education
              </h3>
              <p>{data.education}</p>
            </div>

            {/* Projects Section */}
            <div>
              <h3 className="text-2xl font-semibold border-b-2 pb-2 mb-4">
                Projects
              </h3>
              <div className="space-y-6">
                {data.projects.map((project, index) => (
                  <div key={index}>
                    <h4 className="text-xl font-semibold text-gray-800">
                      {project.title}
                    </h4>
                    <p>{project.description}</p>
                    <p className="text-sm text-gray-500 mt-1">
                      <strong>Stack:</strong> {project.stack}
                    </p>
                    <div className="flex gap-4 text-sm mt-2">
                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          className="text-indigo-600 hover:underline"
                        >
                          Live Demo
                        </a>
                      )}
                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          className="text-indigo-600 hover:underline"
                        >
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


TemplateSix.defaultProps = {
  data: {
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
    projects: [],
  },
};

export default TemplateSix;
