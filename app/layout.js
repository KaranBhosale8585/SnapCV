import { Geist, Geist_Mono } from "next/font/google";
import SessionWrapper from "@/components/SessionWrapper";
import Header from "@/app/auth/page";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SnapCV - Create Professional CVs Instantly",
  description:
    "Design and download stunning, job-ready CVs in seconds with SnapCV. Choose templates for tech or general roles, and build your resume effortlessly.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SessionWrapper>
          <Header />
          {children}
        </SessionWrapper>
      </body>
    </html>
  );
}
