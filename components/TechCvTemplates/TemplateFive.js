"use client";

import React from "react";

const TemplateFive = ({ data }) => {
  return (
    <div className="min-h-screen text-black bg-gray-50 py-12 px-8 flex justify-center">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-xl overflow-hidden">
        {/* Header Section */}
        <div className="bg-gray-800 text-white text-center py-10 px-6">
          <h1 className="text-5xl font-bold">{data.name}</h1>
          <h2 className="text-2xl mt-2 italic">{data.title}</h2>
          <div className="mt-4 space-y-2 text-sm">
            <p>📞 {data.phone}</p>
            <p>📧 {data.email}</p>
            {data.github && <p>🐦 {data.github}</p>}
            {data.linkedin && <p>💼 {data.linkedin}</p>}
          </div>
        </div>

        {/* Main Content Body */}
        <div className="grid grid-cols-3 gap-12 p-8">
          {/* Skills Section */}
          <div className="col-span-2 bg-teal-100 p-6 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold mb-4">Skills</h3>
            <div className="space-y-4">
              {Object.entries(data.skills).map(([key, value], index) => (
                <div key={index}>
                  <h4 className="font-semibold text-teal-600">{key}</h4>
                  <p>{value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div className="bg-gray-200 p-6 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold mb-4">Education</h3>
            <p>{data.education}</p>
          </div>

          {/* Projects Section */}
          <div className="col-span-3 bg-gray-100 p-6 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold mb-4">Projects</h3>
            <div className="space-y-6">
              {data.projects.map((project, index) => (
                <div key={index}>
                  <h4 className="text-xl font-semibold text-teal-600">
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
                        className="text-teal-600 hover:underline"
                      >
                        Live Demo
                      </a>
                    )}
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        className="text-teal-600 hover:underline"
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
  );
};


TemplateFive.defaultProps = {
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

export default TemplateFive;
