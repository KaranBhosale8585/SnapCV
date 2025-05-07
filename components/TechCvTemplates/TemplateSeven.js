"use client";

import React from "react";

const TemplateSeven = ({ data }) => {
  return (
    <div className="min-h-screen text-black bg-gray-100 py-12 px-8 flex justify-center">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg overflow-hidden flex">
        {/* Sidebar */}
        <div className="w-77 bg-teal-600 text-white p-5 flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-bold">{data.name}</h1>
            <h2 className="text-xl mt-2 italic">{data.title}</h2>
            <div className="mt-6 space-y-2">
              <p>📞 {data.phone}</p>
              <p>📧 {data.email}</p>
              {data.github && <p>🐦 {data.github}</p>}
              {data.linkedin && <p>💼 {data.linkedin}</p>}
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="w-2/3 p-8 space-y-8">
          {/* Skills Section */}
          <div>
            <h3 className="text-2xl font-semibold border-b-2 pb-2 mb-4">
              Skills
            </h3>
            <div className="grid grid-cols-2 gap-6">
              {Object.entries(data.skills).map(([key, value], index) => (
                <div key={index}>
                  <h4 className="font-semibold text-teal-600">{key}</h4>
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


TemplateSeven.defaultProps = {
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

export default TemplateSeven;
