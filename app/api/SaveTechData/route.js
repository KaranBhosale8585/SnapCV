import { NextResponse } from "next/server";
import connectDB from "@/utils/db";
import TechCV from "@/models/TechCvModal";

export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();

    const { userId, name, email, phone } = body;
    console.log(userId, name, email, phone);
    if (!userId || !name || !email || !phone) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    const techCVData = new TechCV(body);
    await techCVData.save();

    return NextResponse.json(
      { message: "Tech CV data saved successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error saving tech CV:", error);
    return NextResponse.json(
      { message: "Server error", error: error.message },
      { status: 500 }
    );
  }
}
