import { NextResponse } from "next/server";
import { generateEmailTemplate } from "@/config/AiModel";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    if (!prompt?.trim()) {
      return NextResponse.json(
        { success: false, error: "Prompt is required" },
        { status: 400 }
      );
    }

    const result = await generateEmailTemplate(prompt);

    return NextResponse.json({
      success: true,
      data: result,
    });
  } catch (error: any) {
    if (error?.status === 429) {
      return NextResponse.json(
        { success: false, error: "Quota exceeded. Try again later." },
        { status: 429 }
      );
    }

    return NextResponse.json(
      { success: false, error: "AI generation failed" },
      { status: 500 }
    );
  }
}
