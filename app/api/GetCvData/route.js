// /api/cv/[type]/route.js (dynamic route)
import dbConnect from "@/utils/db";
import GeneralCV from "@/models/GeneralCvModel";
import TechCV from "@/models/TechCvModal";
import { jsonResponse } from "@/utils/jsonResponse";

const CV_MODELS = {
  general: GeneralCV,
  tech: TechCV,
};

export async function GET(req, { params }) {
  try {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("userId");
    const type = params.type; // e.g., "general" or "tech"

    if (!userId)
      return jsonResponse(400, { message: "Missing userId in query params." });
    if (!CV_MODELS[type])
      return jsonResponse(400, { message: "Invalid CV type." });

    await dbConnect();

    const userCV = await CV_MODELS[type].findOne({ userId });

    if (!userCV)
      return jsonResponse(404, {
        message: `${type} CV not found for this user.`,
      });

    return jsonResponse(200, userCV);
  } catch (error) {
    console.error(`GET /api/cv/${params.type} error:`, error);
    return jsonResponse(500, {
      message: "Failed to fetch data!",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
}
