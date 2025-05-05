import { NextResponse } from "next/server";
import connectDB from "@/utils/db";
import CV from "@/models/GeneralCvModel";

export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();

    const {
      userId,
      name,
      title,
      phone,
      email,
      linkedin,
      objective,
      experience,
      education,
      skills,
      certifications,
      languages,
      additionalInfo,
    } = body;
console.log(body)
    if (!userId || !name || !email || !phone || !title) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    const generalCV = new CV({
      userId,
      name,
      title,
      phone,
      email,
      linkedin,
      objective,
      experience,
      education,
      skills,
      certifications,
      languages,
      additionalInfo,
    });

    await generalCV.save();

    return NextResponse.json(
      { message: "General CV data saved successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error saving general CV:", error);
    return NextResponse.json(
      { message: "Server error", error: error.message },
      { status: 500 }
    );
  }
}
