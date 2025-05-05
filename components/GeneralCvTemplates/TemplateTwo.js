"use client";

import React from "react";
import {
  Phone,
  Mail,
  Linkedin,
  Twitter,
  Briefcase,
  BadgeCheck,
  Languages,
  User,
  Award,
  GraduationCap,  // Import the GraduationCap icon
  Info,
} from "lucide-react";

const TemplateTwo = ({ data }) => {
  return (
    <div className="min-h-screen bg-white p-10 flex flex-col items-center">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800">{data.name}</h1>
        <h2 className="text-lg text-blue-600">{data.title}</h2>
      </div>

      {/* Main Body */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 w-full max-w-6xl">
        {/* Left Side */}
        <div className="md:col-span-1 space-y-8 mr-2">
          {/* Contact Info */}
          <div className="">
            <h3 className="font-bold text-gray-700 mb-2 flex items-center gap-2">
              <Phone className="w-5 h-5 text-blue-600" />
              Contact
            </h3>
            <p className="text-sm text-gray-600">
              <Phone className="inline-block w-4 h-4 text-blue-600 mr-2" />
              {data.phone}
            </p>
            <p className="text-sm text-gray-600">
              <Mail className="inline-block w-4 h-4 text-blue-600 mr-2" />
              {data.email}
            </p>
            {data.twitter && (
              <p className="text-sm text-gray-600">
                <Twitter className="inline-block w-4 h-4 text-blue-600 mr-2" />
                {data.twitter}
              </p>
            )}
            {data.linkedin && (
              <p className="text-sm text-gray-600">
                <Linkedin className="inline-block w-4 h-4 text-blue-600 mr-2" />
                {data.linkedin}
              </p>
            )}
          </div>

          {/* Skills */}
          <div>
            <h3 className="font-bold text-gray-700 mb-2 flex items-center gap-2">
              <BadgeCheck className="w-5 h-5 text-blue-600" />
              Skills
            </h3>
            <ul className="list-disc list-inside text-sm text-gray-600">
              {data.skills?.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="font-bold text-gray-700 mb-2 flex items-center gap-2">
              <Award className="w-5 h-5 text-blue-600" />
              Certifications
            </h3>
            <ul className="list-disc list-inside text-sm text-gray-600">
              {data.certifications?.map((cert, index) => (
                <li key={index}>{cert}</li>
              ))}
            </ul>
          </div>

          {/* Languages */}
          <div>
            <h3 className="font-bold text-gray-700 mb-2 flex items-center gap-2">
              <Languages className="w-5 h-5 text-blue-600" />
              Languages
            </h3>
            <ul className="list-disc list-inside text-sm text-gray-600">
              {data.languages?.map((lang, index) => (
                <li key={index}>{lang}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Side */}
        <div className="md:col-span-3 space-y-10 ml-8">
          {/* Objective */}
          <div>
            <h3 className="text-xl font-bold text-blue-700 mb-2 flex items-center gap-2">
              <User className="w-5 h-5 text-blue-600" />
              Objective
            </h3>
            <p className="text-gray-700">{data.objective}</p>
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-xl font-bold text-blue-700 mb-2 flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-blue-600" />
              Experience
            </h3>
            <div className="space-y-6">
              {data.experience?.map((exp, index) => (
                <div key={index}>
                  <h4 className="text-lg font-semibold text-gray-800">
                    {exp.role}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {exp.company} — {exp.period}
                  </p>
                  <ul className="list-disc list-inside text-sm text-gray-700 mt-2">
                    {exp.responsibilities?.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-xl font-bold text-blue-700 mb-2 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-blue-600" />
              Education
            </h3>
            <p className="text-gray-700">{data.education}</p>
          </div>

          {/* Additional Info */}
          {data.additionalInfo?.length > 0 && (
            <div>
              <h3 className="text-xl font-bold text-blue-700 mb-2 flex items-center gap-2">
                <Info className="w-5 h-5 text-blue-600" />
                Additional Information
              </h3>
              <ul className="list-disc list-inside text-sm text-gray-700">
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

export default TemplateTwo;
