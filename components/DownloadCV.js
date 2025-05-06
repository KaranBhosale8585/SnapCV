"use client";

export const dynamic = "force-dynamic";

import { ToastContainer, toast } from "react-toastify";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

// General CV Templates
import GeneralTemplateOne from "@/components/GeneralCvTemplates/TemplateOne";
import GeneralTemplateTwo from "@/components/GeneralCvTemplates/TemplateTwo";
import GeneralTemplateThree from "@/components/GeneralCvTemplates/TemplateThree";
import GeneralTemplateFour from "@/components/GeneralCvTemplates/TemplateFour";

// Tech CV Templates
import TechTemplateOne from "@/components/TechCvTemplates/TemplateOne";
import TechTemplateTwo from "@/components/TechCvTemplates/TemplateTwo";
import TechTemplateThree from "@/components/TechCvTemplates/TemplateThree";
import TechTemplateFour from "@/components/TechCvTemplates/TemplateFour";
import TechTemplateFive from "@/components/TechCvTemplates/TemplateFive";
import TechTemplateSix from "@/components/TechCvTemplates/TemplateSix";
import TechTemplateSeven from "@/components/TechCvTemplates/TemplateSeven";

export default function DownloadCV() {
  const { data: session } = useSession();
  const [cvData, setCvData] = useState(null);
  const [cvType, setCvType] = useState("General");
  const [template, setTemplate] = useState("TemplateOne");

  const searchParams = useSearchParams();

  useEffect(() => {
    const templateFromQuery = searchParams.get("template") || "TemplateOne";
    const typeFromQuery = searchParams.get("type") || "General";

    setTemplate(templateFromQuery);
    setCvType(typeFromQuery);
  }, [searchParams]);

  const techTemplates = [
    "TemplateOne",
    "TemplateTwo",
    "TemplateThree",
    "TemplateFour",
    "TemplateFive",
    "TemplateSix",
    "TemplateSeven",
  ];

  const generalTemplates = [
    "TemplateOne",
    "TemplateTwo",
    "TemplateThree",
    "TemplateFour",
  ];

  const templateOptions = cvType === "Tech" ? techTemplates : generalTemplates;

  const loadPdfLibrary = () => {
    return new Promise((resolve, reject) => {
      if (typeof window.html2pdf !== "undefined") {
        resolve();
        return;
      }

      const script = document.createElement("script");
      script.src =
        "https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.9.2/html2pdf.bundle.min.js";
      script.type = "text/javascript";
      script.onload = resolve;
      script.onerror = reject;
      document.body.appendChild(script);
    });
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      loadPdfLibrary().catch(() => {
        toast.error("Failed to load html2pdf.js");
      });
    }
  }, []);

  useEffect(() => {
    const fetchCV = async () => {
      if (!session?.user?.email) return;

      const endpoint =
        cvType === "Tech" ? "/api/getTechData" : "/api/getGeneralData";
      const apiUrl = `${endpoint}?userId=${session.user.email}`;

      try {
        const res = await fetch(apiUrl);
        const data = await res.json();

        if (!res.ok || !data) {
          toast.error(data.message || "Failed to fetch CV data");
          return;
        }

        setCvData(data);
        toast.success("CV data fetched successfully!");
      } catch (error) {
        console.error("Error fetching CV:", error);
        toast.error("Error fetching CV data.");
      }
    };

    if (session?.user?.email) {
      fetchCV();
    }
  }, [session, cvType]);

  const handleDownload = () => {
    const element = document.getElementById("cv-preview");
    if (!element) {
      toast.error("CV preview not found!");
      return;
    }

    if (typeof window.html2pdf === "undefined") {
      toast.warning("PDF library is still loading. Please try again later.");
      return;
    }

    try {
      window
        .html2pdf()
        .from(element)
        .set({
          margin: 0,
          filename: `${cvType}_CV_${template}.pdf`,
          image: { type: "jpeg", quality: 1 },
          html2canvas: {
            scale: 7,
            useCORS: true,
            logging: false,
            backgroundColor: null,
            allowTaint: true,
            dpi: 500,
          },
          jsPDF: {
            unit: "px",
            format: [950, 1023],
            orientation: "portrait",
          },
        })
        .save();
    } catch (error) {
      console.error("Error generating PDF:", error);
      toast.error("Error generating PDF.");
    }
  };

  const renderPreview = () => {
    if (!cvData) {
      return (
        <div className="text-center text-gray-500 py-8 animate-pulse">
          Loading CV data...
        </div>
      );
    }

    if (cvType === "Tech") {
      const techComponents = {
        TemplateOne: TechTemplateOne,
        TemplateTwo: TechTemplateTwo,
        TemplateThree: TechTemplateThree,
        TemplateFour: TechTemplateFour,
        TemplateFive: TechTemplateFive,
        TemplateSix: TechTemplateSix,
        TemplateSeven: TechTemplateSeven,
      };
      const SelectedTechTemplate = techComponents[template] || TechTemplateOne;
      return <SelectedTechTemplate data={cvData} />;
    } else {
      const generalComponents = {
        TemplateOne: GeneralTemplateOne,
        TemplateTwo: GeneralTemplateTwo,
        TemplateThree: GeneralTemplateThree,
        TemplateFour: GeneralTemplateFour,
      };
      const SelectedGeneralTemplate =
        generalComponents[template] || GeneralTemplateOne;
      return <SelectedGeneralTemplate data={cvData} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-lg p-8">
        <h1 className="text-3xl font-semibold text-gray-900 text-center mb-6">
          Download Your CV
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select CV Type
            </label>
            <select
              value={cvType}
              onChange={(e) => {
                setCvType(e.target.value);
                setTemplate("TemplateOne");
              }}
              className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="Tech">Tech</option>
              <option value="General">General</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Template
            </label>
            <select
              value={template}
              onChange={(e) => setTemplate(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              {templateOptions.map((tpl) => (
                <option key={tpl} value={tpl}>
                  {tpl.replace("Template", "Template ")}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Preview</h2>
          <div
            id="cv-preview"
            className="bg-white rounded-lg shadow-sm flex justify-center py-8 overflow-x-auto"
            style={{ backgroundColor: "#fff" }}
          >
            <div style={{ width: "100%", maxWidth: "794px" }}>
              {renderPreview()}
            </div>
          </div>
        </div>

        <button
          onClick={handleDownload}
          className="w-full py-3 px-4 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
        >
          Download as PDF
        </button>
      </div>

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}
