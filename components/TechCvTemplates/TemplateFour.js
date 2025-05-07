"use client";

import React from "react";

const TemplateFour = ({ data }) => {
  return (
    <div className="min-h-screen text-black bg-gray-50 py-10 px-8 flex justify-center">
      <div className="max-w-3xl w-full bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-500 to-teal-400 text-white text-center py-6 px-8">
          <h1 className="text-4xl font-extrabold">{data.name}</h1>
          <h2 className="text-lg mt-2 italic uppercase">{data.title}</h2>
          <div className="mt-4 space-y-2 text-sm">
            <p>📞 {data.phone}</p>
            <p>📧 {data.email}</p>
            {data.github && <p>🐦 {data.github}</p>}
            {data.linkedin && <p>💼 {data.linkedin}</p>}
          </div>
        </div>

        {/* Main Content Body */}
        <div className="p-6 space-y-8">
          {/* Skills Section */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold border-b-2 pb-3 mb-4">
              Skills
            </h3>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-blue-600">Frontend</h4>
                <p>{data.skills.frontend}</p>
              </div>
              <div>
                <h4 className="font-medium text-blue-600">Backend</h4>
                <p>{data.skills.backend}</p>
              </div>
              <div>
                <h4 className="font-medium text-blue-600">Database</h4>
                <p>{data.skills.database}</p>
              </div>
              <div>
                <h4 className="font-medium text-blue-600">DevOps</h4>
                <p>{data.skills.devops}</p>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold border-b-2 pb-3 mb-4">
              Education
            </h3>
            <p className="text-gray-700">{data.education}</p>
          </div>

          {/* Projects Section */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold border-b-2 pb-3 mb-4">
              Projects
            </h3>
            <div className="space-y-6">
              {data.projects.map((project, index) => (
                <div key={index} className="space-y-3">
                  <h4 className="text-xl font-semibold text-blue-600">
                    {project.title}
                  </h4>
                  <p className="text-gray-600">{project.description}</p>
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


TemplateFour.defaultProps = {
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

export default TemplateFour;
