"use client";

import React from "react";

const TemplateThree = ({ data }) => {
  return (
    <div className="min-h-screen text-black bg-gray-100 py-8 px-6 flex justify-center">
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Top Header */}
        <div className="bg-blue-700 text-white text-center py-8 px-6">
          <h1 className="text-4xl font-bold">{data.name}</h1>
          <h2 className="text-lg mt-2 tracking-widest uppercase">
            {data.title}
          </h2>
          <div className="mt-4 space-y-1 text-sm">
            <p>📞 {data.phone}</p>
            <p>📧 {data.email}</p>
            {data.twitter && <p>🐦 {data.twitter}</p>}
            {data.linkedin && <p>💼 {data.linkedin}</p>}
          </div>
        </div>

        {/* Body */}
        <div className="p-8 space-y-8">
          {/* Skills */}
          <div>
            <h3 className="text-2xl font-semibold border-b pb-2 mb-4">
              Skills
            </h3>
            <div className="grid grid-cols-2 gap-4 text-gray-700">
              <div>
                <h4 className="font-semibold">Frontend</h4>
                <p>{data.skills.frontend}</p>
              </div>
              <div>
                <h4 className="font-semibold">Backend</h4>
                <p>{data.skills.backend}</p>
              </div>
              <div>
                <h4 className="font-semibold">Database</h4>
                <p>{data.skills.database}</p>
              </div>
              <div>
                <h4 className="font-semibold">DevOps</h4>
                <p>{data.skills.devops}</p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold border-b pb-2 mb-4">
              Education
            </h3>
            <p className="text-gray-700">{data.education}</p>
          </div>

          {/* Projects */}
          <div>
            <h3 className="text-2xl font-semibold border-b pb-2 mb-4">
              Projects
            </h3>
            <div className="space-y-6">
              {data.projects.map((project, index) => (
                <div key={index}>
                  <h4 className="text-lg font-bold">{project.title}</h4>
                  <p className="text-gray-600">{project.description}</p>
                  <p className="text-sm text-gray-500 mt-1">
                    <strong>Stack:</strong> {project.stack}
                  </p>
                  <div className="flex gap-4 text-sm mt-1">
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        className="text-blue-600 underline"
                      >
                        Live Demo
                      </a>
                    )}
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        className="text-blue-600 underline"
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


TemplateThree.defaultProps = {
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

export default TemplateThree;
