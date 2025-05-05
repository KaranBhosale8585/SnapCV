import dbConnect from "@/utils/db";
import TechCV from "@/models/TechCvModal";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("userId");

    if (!userId) {
      return new Response(
        JSON.stringify({ message: "Missing userId in query params." }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    await dbConnect();

    const userTechCV = await TechCV.findOne({ userId });

    if (!userTechCV) {
      return new Response(
        JSON.stringify({ message: "Tech CV not found for this user." }),
        {
          status: 404,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    return new Response(JSON.stringify(userTechCV), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("GET /api/tech-cv error:", error);

    return new Response(
      JSON.stringify({
        message: "Failed to fetch data!",
        error: error instanceof Error ? error.message : "Unknown error",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
