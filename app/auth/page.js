"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, LogOut, ChevronDown } from "lucide-react";

export default function Auth() {
  const { data: session } = useSession();
  const [menuOpen, setMenuOpen] = useState(false);
  const [cvTemplatesOpen, setCvTemplatesOpen] = useState(false);
  const [cvFormsOpen, setCvFormsOpen] = useState(false);

  const disabledLink = !session ? "pointer-events-none opacity-50" : "";

  return (
    <header className="w-full bg-gray-900 text-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-3xl font-extrabold text-teal-400">
          SnapCV
        </Link>

        <nav className="hidden sm:flex space-x-10 items-center text-base font-medium">
          {/* CV Templates */}
          <div className="relative">
            <button
              onClick={() => {
                setCvTemplatesOpen(!cvTemplatesOpen);
                setCvFormsOpen(false);
              }}
              className="flex items-center gap-1 hover:text-teal-400"
            >
              CV Templates <ChevronDown size={16} />
            </button>
            {cvTemplatesOpen && (
              <div className="absolute bg-gray-800 mt-2 rounded-lg shadow-xl w-48 z-20">
                <Link
                  href="/GeneralCV"
                  className={`block px-5 py-3 text-sm border-b border-gray-700 hover:bg-gray-700 ${disabledLink}`}
                  onClick={() => setCvTemplatesOpen(false)}
                >
                  General Template
                </Link>
                <Link
                  href="/TechCV"
                  className={`block px-5 py-3 text-sm hover:bg-gray-700 ${disabledLink}`}
                  onClick={() => setCvTemplatesOpen(false)}
                >
                  Tech Template
                </Link>
              </div>
            )}
          </div>

          {/* CV Forms */}
          <div className="relative">
            <button
              onClick={() => {
                setCvFormsOpen(!cvFormsOpen);
                setCvTemplatesOpen(false);
              }}
              className="flex items-center gap-1 hover:text-teal-400"
            >
              CV Forms <ChevronDown size={16} />
            </button>
            {cvFormsOpen && (
              <div className="absolute bg-gray-800 mt-2 rounded-lg shadow-xl w-48 z-20">
                <Link
                  href="/GeneralForm"
                  className={`block px-5 py-3 text-sm border-b border-gray-700 hover:bg-gray-700 ${disabledLink}`}
                  onClick={() => setCvFormsOpen(false)}
                >
                  General Form
                </Link>
                <Link
                  href="/TechForm"
                  className={`block px-5 py-3 text-sm hover:bg-gray-700 ${disabledLink}`}
                  onClick={() => setCvFormsOpen(false)}
                >
                  Tech Form
                </Link>
              </div>
            )}
          </div>

          {/* Download CV */}
          <Link
            href="/Download"
            className={`hover:text-teal-400 ${disabledLink}`}
          >
            Download CV
          </Link>

          {/* Auth Buttons */}
          {session ? (
            <div className="flex items-center space-x-4 ml-6">
              <div className="flex items-center gap-3 bg-gray-800 px-3 py-1.5 rounded-full">
                <Image
                  src={session.user?.image || "/default-profile.png"}
                  alt="Profile"
                  width={32}
                  height={32}
                  className="rounded-full border border-teal-500"
                />
                <span className="text-sm">{session.user?.name || "User"}</span>
              </div>
              <button
                onClick={() => signOut()}
                className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-1.5 rounded-full text-sm transition"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </div>
          ) : (
            <button
              onClick={() => signIn()}
              className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-full text-sm ml-4"
            >
              Login
            </button>
          )}
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="sm:hidden text-teal-400"
        >
          <Menu className="w-7 h-7" />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="sm:hidden px-6 py-4 bg-gray-800 space-y-4">
          <Link
            href="/GeneralCV"
            className={`block text-white ${disabledLink}`}
          >
            General Template
          </Link>
          <Link href="/TechCV" className={`block text-white ${disabledLink}`}>
            Tech Template
          </Link>
          <Link
            href="/GeneralForm"
            className={`block text-white ${disabledLink}`}
          >
            General Form
          </Link>
          <Link href="/TechForm" className={`block text-white ${disabledLink}`}>
            Tech Form
          </Link>
          <Link href="/Download" className={`block text-white ${disabledLink}`}>
            Download CV
          </Link>

          {session ? (
            <div className="flex items-center gap-3 mt-2">
              <Image
                src={session.user?.image || "/default-profile.png"}
                alt={session.user?.name || "User Profile"}
                width={30}
                height={30}
                className="rounded-full border border-teal-400"
              />
              <span className="text-sm">{session.user?.name || "User"}</span>
              <button
                onClick={() => signOut()}
                className="ml-auto bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-full text-sm"
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              onClick={() => signIn()}
              className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-1 rounded-full w-full"
            >
              Login
            </button>
          )}
        </div>
      )}
    </header>
  );
}
