"use client";

import React from "react";
import {
  Phone,
  Mail,
  Linkedin,
  Twitter,
  Award,
  Globe,
  User,
  Briefcase,
  GraduationCap,
} from "lucide-react";

const TemplateThree = ({ data }) => {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div className="bg-blue-700 text-white w-20% p-8 flex flex-col space-y-8">
        {/* Profile */}
        <div>
          <h1 className="text-3xl font-bold">{data.name}</h1>
          <h2 className="text-lg mt-2">{data.title}</h2>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-2 underline flex items-center gap-2">
            <Phone className="w-5 h-5" />
            Contact
          </h3>
          <p>
            <Phone className="inline-block w-4 h-4 text-white mr-2" />
            {data.phone}
          </p>
          <p>
            <Mail className="inline-block w-4 h-4 text-white mr-2" />
            {data.email}
          </p>
          {data.twitter && (
            <p>
              <Twitter className="inline-block w-4 h-4 text-white mr-2" />
              {data.twitter}
            </p>
          )}
          {data.linkedin && (
            <p>
              <Linkedin className="inline-block w-4 h-4 text-white mr-2" />
              {data.linkedin}
            </p>
          )}
        </div>

        {/* Skills */}
        <div>
          <h3 className="text-lg font-semibold mb-2 underline flex items-center gap-2">
            <Award className="w-5 h-5" />
            Skills
          </h3>
          <ul className="list-disc list-inside text-sm space-y-1">
            {data.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>

        {/* Languages */}
        <div>
          <h3 className="text-lg font-semibold mb-2 underline flex items-center gap-2">
            <Globe className="w-5 h-5" />
            Languages
          </h3>
          <ul className="list-disc list-inside text-sm space-y-1">
            {data.languages.map((lang, index) => (
              <li key={index}>{lang}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-white p-10 space-y-10 ml-8">
        {/* Objective */}
        <div>
          <h3 className="text-2xl font-bold text-blue-700 mb-2 flex items-center gap-2">
            <User className="w-5 h-5 text-blue-600" />
            Objective
          </h3>
          <p className="text-gray-700">{data.objective}</p>
        </div>

        {/* Experience */}
        <div>
          <h3 className="text-2xl font-bold text-blue-700 mb-4 flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-blue-600" />
            Experience
          </h3>
          {data.experience.map((exp, index) => (
            <div key={index} className="mb-6">
              <h4 className="text-xl font-semibold text-gray-800">
                {exp.role}
              </h4>
              <p className="text-sm text-gray-500">
                {exp.company} — {exp.period}
              </p>
              <ul className="list-disc list-inside text-sm text-gray-700 mt-2">
                {exp.responsibilities.map((res, idx) => (
                  <li key={idx}>{res}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Education */}
        <div>
          <h3 className="text-2xl font-bold text-blue-700 mb-2 flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-blue-600" />
            Education
          </h3>
          <p className="text-gray-700">{data.education}</p>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-bold text-blue-700 mb-2 flex items-center gap-2">
            <Award className="w-5 h-5 text-blue-600" />
            Certifications
          </h3>
          <ul className="list-disc list-inside text-gray-700 text-sm">
            {data.certifications.map((cert, index) => (
              <li key={index}>{cert}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TemplateThree;
