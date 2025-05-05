"use client";

import React from "react";
import {
  Phone,
  Mail,
  Linkedin,
  Twitter,
  Award,
  Briefcase,
  Globe,
  GraduationCap,
  User,
} from "lucide-react";

const TemplateFour = ({ data }) => {
  return (
    <div className="min-h-screen bg-white text-gray-800 py-10 px-6">
      {/* Header */}
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-indigo-700">{data.name}</h1>
        <p className="text-lg text-gray-600">{data.title}</p>
        <div className="mt-2 text-sm text-gray-500 space-x-3">
          <span>
            <Phone className="inline-block w-4 h-4 text-gray-600 mr-1" />
            {data.phone}
          </span>
          <span>
            <Mail className="inline-block w-4 h-4 text-gray-600 mr-1" />
            {data.email}
          </span>
          {data.twitter && (
            <span>
              <Twitter className="inline-block w-4 h-4 text-gray-600 mr-1" />
              {data.twitter}
            </span>
          )}
          {data.linkedin && (
            <span>
              <Linkedin className="inline-block w-4 h-4 text-gray-600 mr-1" />
              {data.linkedin}
            </span>
          )}
        </div>
      </header>

      {/* Objective */}
      {data.objective && (
        <section className="mb-10 text-center">
          <h2 className="text-2xl font-semibold text-indigo-700 mb-2 flex justify-center items-center gap-2">
            <User className="w-6 h-6 text-indigo-700" />
            Objective
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto">{data.objective}</p>
        </section>
      )}

      {/* Skills & Education */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 max-w-5xl mx-auto">
        {data.skills?.length > 0 && (
          <div>
            <h3 className="text-xl font-semibold text-indigo-700 border-b pb-2 mb-4 flex items-center gap-2">
              <Award className="w-5 h-5 text-indigo-700" />
              Skills
            </h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              {data.skills.map((skill, idx) => (
                <li key={idx}>{skill}</li>
              ))}
            </ul>
          </div>
        )}

        {data.education && (
          <div>
            <h3 className="text-xl font-semibold text-indigo-700 border-b pb-2 mb-4 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-indigo-700" />
              Education
            </h3>
            <p className="text-gray-700">{data.education}</p>
          </div>
        )}
      </section>

      {/* Experience */}
      {data.experience?.length > 0 && (
        <section className="mb-10 max-w-5xl mx-auto">
          <h3 className="text-xl font-semibold text-indigo-700 border-b pb-2 mb-6 flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-indigo-700" />
            Experience
          </h3>
          <div className="space-y-6">
            {data.experience.map((exp, idx) => (
              <div key={idx}>
                <h4 className="text-lg font-semibold text-gray-800">
                  {exp.role} @ {exp.company}
                </h4>
                <p className="text-sm text-gray-500">{exp.period}</p>
                <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                  {exp.responsibilities.map((res, i) => (
                    <li key={i}>{res}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Languages */}
      {data.languages?.length > 0 && (
        <section className="mb-10 max-w-5xl mx-auto">
          <h3 className="text-xl font-semibold text-indigo-700 border-b pb-2 mb-4 flex items-center gap-2">
            <Globe className="w-5 h-5 text-indigo-700" />
            Languages
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {data.languages.map((lang, idx) => (
              <li key={idx}>{lang}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Certifications */}
      {data.certifications?.length > 0 && (
        <section className="mb-6 max-w-5xl mx-auto">
          <h3 className="text-xl font-semibold text-indigo-700 border-b pb-2 mb-4 flex items-center gap-2">
            <Award className="w-5 h-5 text-indigo-700" />
            Certifications
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            {data.certifications.map((cert, idx) => (
              <li key={idx}>{cert}</li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
};

export default TemplateFour;
