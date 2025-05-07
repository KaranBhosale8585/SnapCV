import React from "react";

const TemplateOne = ({ data }) => {
  if (!data) {
    return <div>Loading CV data...</div>;
  }

  return (
    <div className="min-h-screen bg-white py-10 px-6 flex justify-center">
      <div className="max-w-4xl w-full text-gray-800">
        {/* Name and Contact */}
        <div className="mb-6">
          <h1 className="text-4xl font-extrabold">{data.name}</h1>
          <div className="mt-2 text-sm text-gray-600 space-y-1">
            {data.phone && <p>📞 {data.phone}</p>}
            {data.email && <p>📧 {data.email}</p>}
            {data.github && <p>🐦 {data.github}</p>}
            {data.linkedin && <p>💼 {data.linkedin}</p>}
          </div>
        </div>

        {/* Title */}
        {data.title && (
          <h2 className="text-2xl font-semibold tracking-widest uppercase mb-6 text-blue-700">
            {data.title}
          </h2>
        )}

        {/* Skills Section */}
        <div className="mb-8">
          <h3 className="text-xl font-bold border-b border-gray-400 pb-1 mb-3">
            Skills
          </h3>
          <div className="grid grid-cols-2 gap-6">
            {data.skills?.frontend && (
              <div>
                <h4 className="font-semibold text-gray-700">Frontend</h4>
                <p>{data.skills.frontend}</p>
              </div>
            )}
            {data.skills?.backend && (
              <div>
                <h4 className="font-semibold text-gray-700">Backend</h4>
                <p>{data.skills.backend}</p>
              </div>
            )}
            {data.skills?.database && (
              <div>
                <h4 className="font-semibold text-gray-700">Database</h4>
                <p>{data.skills.database}</p>
              </div>
            )}
            {data.skills?.devops && (
              <div>
                <h4 className="font-semibold text-gray-700">DevOps</h4>
                <p>{data.skills.devops}</p>
              </div>
            )}
          </div>
        </div>

        {/* Education Section */}
        {data.education && (
          <div className="mb-8">
            <h3 className="text-xl font-bold border-b border-gray-400 pb-1 mb-3">
              Education
            </h3>
            <p>{data.education}</p>
          </div>
        )}

        {/* Projects Section */}
        <div>
          <h3 className="text-xl font-bold border-b border-gray-400 pb-1 mb-3">
            Projects
          </h3>
          <div className="space-y-6">
            {Array.isArray(data.projects) && data.projects.length > 0 ? (
              data.projects.map((project, index) => (
                <div key={index}>
                  <h4 className="text-lg font-semibold">{project.title}</h4>
                  <p className="text-gray-600">{project.description}</p>
                  <p className="text-sm text-gray-600 mt-1">
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
  );
};


TemplateOne.defaultProps = {
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

export default TemplateOne;
