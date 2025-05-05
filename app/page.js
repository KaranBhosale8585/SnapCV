"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { Edit, FileText } from "lucide-react";
import { toast } from "react-toastify";

export default function Page() {
  const { data: session, status } = useSession(); 
  const [welcomeMessage, setWelcomeMessage] = useState("Welcome to SnapCV!");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status === "loading") {
      return; 
    }

  
    if (!session?.user?.email) {
      setWelcomeMessage("Please Log in");
      toast.error("Please Log in");
      setLoading(false); 
      return;
    }
    if (session) {
      setWelcomeMessage(
        `Welcome to SnapCV, ${session.user?.name || "Please Log in"}!`
      );
    }
    setLoading(false);
  }, [session, status]);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gradient-to-tr from-indigo-800 via-blue-700 to-purple-700">
        <div className="text-lg text-gray-100 animate-pulse">
          Fetching your personalized content...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-tr from-indigo-800 via-blue-700 to-purple-700 flex flex-col">
      <main className="flex-grow p-6 flex items-center justify-center">
        <div className="bg-white rounded-xl shadow-lg p-8 sm:p-12 w-full max-w-3xl text-center transform transition-all duration-300 ease-in-out">
          <div className="mb-8 flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-16 h-16 text-indigo-600 transform transition-all duration-300 ease-in-out hover:text-teal-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
            {welcomeMessage}
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Build beautiful, tailored CVs in seconds. Whether you're in tech or
            another field, we’ve got you covered. Start now and make a lasting
            impression!
          </p>

          {session?.user?.email ? (
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link
                href="/TechForm"
                className="bg-gradient-to-r from-teal-400 to-indigo-600 hover:from-teal-500 hover:to-indigo-600 text-white font-semibold px-6 py-3 rounded-full shadow-md transform transition-all duration-200 hover:scale-105"
              >
                <Edit className="w-4 h-4 mr-2" />
                Create Your Tech CV
              </Link>
              <Link
                href="/GeneralForm"
                className="border-2 border-gradient-to-r from-teal-400 to-indigo-600 hover:bg-indigo-50 text-indigo-600 hover:text-indigo-900 font-semibold px-6 py-3 rounded-full transform transition-all duration-200 hover:scale-105"
              >
                <FileText className="w-4 h-4 mr-2" />
                Create a General CV
              </Link>
            </div>
          ) : null}
        </div>
      </main>

      <footer className="bg-indigo-900 text-white py-6 mt-auto">
        <div className="text-center text-sm">
          &copy; {new Date().getFullYear()} SnapCV. All rights reserved. Built
          with ❤️ by SnapCV Team
        </div>
      </footer>
    </div>
  );
}
