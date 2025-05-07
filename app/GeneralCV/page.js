"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FileText, Loader2, LayoutTemplate } from "lucide-react";

import CvTempletOne from "@/components/GeneralCvTemplates/TemplateOne";
import CvTempletTwo from "@/components/GeneralCvTemplates/TemplateTwo";
import CvTempletThree from "@/components/GeneralCvTemplates/TemplateThree";
import CvTempletFour from "@/components/GeneralCvTemplates/TemplateFour";

const templateList = [
  { id: "TemplateOne", Component: CvTempletOne },
  { id: "TemplateTwo", Component: CvTempletTwo },
  { id: "TemplateThree", Component: CvTempletThree },
  { id: "TemplateFour", Component: CvTempletFour },
];

export default function Page() {
  const [formData, setFormData] = useState(null);
  const router = useRouter();

  useEffect(() => {
    fetch("/api/GenDummyData")
      .then((res) => res.json())
      .then(setFormData)
      .catch((err) => console.error("Error fetching general CV data:", err));
  }, []);

  const handleSelectTemplate = (templateId) => {
    router.push(`/Download?template=${templateId}&type=General`);
  };

  if (!formData) {
    return (
      <div className="flex justify-center items-center gap-2 text-gray-600 py-10 text-lg">
        <Loader2 className="animate-spin text-blue-600" />
        Loading templates...
      </div>
    );
  }

  return (
    <main className="flex flex-col items-center p-6 sm:p-10">
      <h1 className="text-3xl font-semibold mb-8 flex items-center gap-3">
        <LayoutTemplate className="text-blue-600" />
        Choose a General CV Template
      </h1>

      {templateList.map(({ id, Component }) => (
        <div
          key={id}
          className="relative bg-white p-6 rounded-xl shadow-lg max-w-4xl w-full mb-6"
        >
          <button
            onClick={() => handleSelectTemplate(id)}
            className="absolute top-2 right-2 px-4 py-2 bg-blue-600 text-white rounded-md text-sm sm:text-base flex items-center gap-2 hover:bg-blue-700 transition"
          >
            <FileText size={18} />
            Use This Template
          </button>

          <div className="bg-gray-50 p-4 rounded-lg overflow-hidden">
            <Component data={formData} />
          </div>
        </div>
      ))}
    </main>
  );
}
