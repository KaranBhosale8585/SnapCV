"use client";

import React from "react";

const TemplateTwo = ({ data }) => {
  return (
    <div className="min-h-screen text-black bg-gray-50 py-10 px-6 flex justify-center">
      <div className="max-w-6xl w-full bg-white shadow-lg p-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Side - Skills */}
        <div className="md:border-r md:pr-6">
          {/* Profile */}
          <h1 className="text-3xl font-extrabold text-blue-700 mb-2">
            {data.name}
          </h1>
          <h2 className="text-lg font-semibold text-gray-600 mb-4">
            {data.title}
          </h2>
          <div className="text-sm space-y-1 text-gray-500 mb-8">
            <p>📞 {data.phone}</p>
            <p>📧 {data.email}</p>
            {data.twitter && <p>🐦 {data.twitter}</p>}
            {data.linkedin && <p>💼 {data.linkedin}</p>}
          </div>

          {/* Skills */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold border-b pb-1 mb-2">Skills</h3>
            <div>
              <h4 className="font-semibold text-gray-700">Frontend</h4>
              <p className="text-sm">{data.skills.frontend}</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-700">Backend</h4>
              <p className="text-sm">{data.skills.backend}</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-700">Database</h4>
              <p className="text-sm">{data.skills.database}</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-700">DevOps</h4>
              <p className="text-sm">{data.skills.devops}</p>
            </div>
          </div>
        </div>

        {/* Right Side - Main Content */}
        <div className="md:col-span-2 space-y-10">
          {/* Education */}
          <div>
            <h3 className="text-xl font-bold border-b pb-1 mb-3 text-blue-700">
              Education
            </h3>
            <p className="text-gray-700">{data.education}</p>
          </div>

          {/* Projects */}
          <div>
            <h3 className="text-xl font-bold border-b pb-1 mb-3 text-blue-700">
              Projects
            </h3>
            <div className="space-y-6">
              {Array.isArray(data.projects) && data.projects.length > 0 ? (
                data.projects.map((project, index) => (
                  <div key={index}>
                    <h4 className="text-lg font-semibold">{project.title}</h4>
                    <p className="text-gray-600">{project.description}</p>
                    <p className="text-sm text-gray-500 mt-1">
                      <strong>Stack:</strong> {project.stack}
                    </p>
                    <div className="flex gap-4 text-sm mt-1">
                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 underline"
                        >
                          Live Demo
                        </a>
                      )}
                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 underline"
                        >
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-500">No projects available.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

TemplateTwo.defaultProps = {
  data: {
    name: "",
    title: "",
    phone: "",
    email: "",
    twitter: "",
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

export default TemplateTwo;
