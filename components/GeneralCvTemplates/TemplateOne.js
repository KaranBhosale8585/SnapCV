"use client";

import React from "react";
import {
  Phone,
  Mail,
  Linkedin,
  Twitter,
  BadgeCheck,
  Languages,
  Briefcase,
  GraduationCap,
  Info,
} from "lucide-react";

const TemplateOne = ({ data }) => {
  return (
    <div
      id="cv-preview"
      className="bg-white py-8 px-4 flex justify-center"
      style={{ width: "100%", backgroundColor: "#fff" }}
    >
      <div
        className="bg-white shadow-md rounded-lg p-8 grid grid-cols-1 md:grid-cols-3 gap-6 border border-gray-300"
        style={{ width: "794px" }} // A4 width
      >
        {/* Left Side - Contact & Skills */}
        <div className="md:border-r md:pr-6 space-y-6">
          {/* Profile */}
          <div>
            <h1 className="text-3xl font-extrabold text-blue-700 mb-1">
              {data.name}
            </h1>
            <h2 className="text-lg font-semibold text-gray-600 mb-3">
              {data.title}
            </h2>
            <div className="text-sm space-y-2 text-gray-600">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-600" />
                <span>{data.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-600" />
                <span>{data.email}</span>
              </div>
              {data.twitter && (
                <div className="flex items-center gap-2">
                  <Twitter className="w-4 h-4 text-blue-600" />
                  <span>{data.twitter}</span>
                </div>
              )}
              {data.linkedin && (
                <div className="flex items-center gap-2">
                  <Linkedin className="w-4 h-4 text-blue-600" />
                  <span>{data.linkedin}</span>
                </div>
              )}
            </div>
          </div>

          {/* Skills */}
          {data.skills?.length > 0 && (
            <div>
              <h3 className="text-xl font-bold text-blue-700 border-b pb-1 mb-2">
                Skills
              </h3>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                {data.skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Certifications */}
          {data.certifications?.length > 0 && (
            <div>
              <h3 className="flex items-center gap-2 text-xl font-bold text-blue-700 border-b pb-1 mb-2">
                <BadgeCheck className="w-5 h-5" />
                Certifications
              </h3>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                {data.certifications.map((cert, index) => (
                  <li key={index}>{cert}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Languages */}
          {data.languages?.length > 0 && (
            <div>
              <h3 className="flex items-center gap-2 text-xl font-bold text-blue-700 border-b pb-1 mb-2">
                <Languages className="w-5 h-5" />
                Languages
              </h3>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                {data.languages.map((lang, index) => (
                  <li key={index}>{lang}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Right Side - Objective, Experience, Education, Additional Info */}
        <div className="md:col-span-2 space-y-8">
          {/* Objective */}
          {data.objective && (
            <div>
              <h3 className="text-xl font-bold text-blue-700 border-b pb-1 mb-2">
                Objective
              </h3>
              <p className="text-gray-700 text-sm">{data.objective}</p>
            </div>
          )}

          {/* Experience */}
          {data.experience?.length > 0 && (
            <div>
              <h3 className="flex items-center gap-2 text-xl font-bold text-blue-700 border-b pb-1 mb-2">
                <Briefcase className="w-5 h-5" />
                Professional Experience
              </h3>
              <div className="space-y-4">
                {data.experience.map((exp, index) => (
                  <div key={index}>
                    <h4 className="text-lg font-semibold text-gray-800">
                      {exp.role}
                    </h4>
                    <p className="text-sm text-gray-500">
                      {exp.company} — {exp.period}
                    </p>
                    <ul className="list-disc list-inside text-gray-700 text-sm mt-1 space-y-1">
                      {exp.responsibilities.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Education */}
          {data.education && (
            <div>
              <h3 className="flex items-center gap-2 text-xl font-bold text-blue-700 border-b pb-1 mb-2">
                <GraduationCap className="w-5 h-5" />
                Education
              </h3>
              <p className="text-gray-700 text-sm">{data.education}</p>
            </div>
          )}

          {/* Additional Info */}
          {data.additionalInfo?.length > 0 && (
            <div>
              <h3 className="flex items-center gap-2 text-xl font-bold text-blue-700 border-b pb-1 mb-2">
                <Info className="w-5 h-5" />
                Additional Information
              </h3>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                {data.additionalInfo.map((info, index) => (
                  <li key={index}>{info}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TemplateOne;
