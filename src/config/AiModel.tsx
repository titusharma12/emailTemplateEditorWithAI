import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

export async function generateEmailTemplate(prompt: string) {
  const response = await ai.models.generateContent({
    model: "gemini-flash-lite-latest",
    contents: [
      {
        role: "user",
        parts: [{ text: prompt }],
      },
    ],
    config: {
      temperature: 0.8,
      topP: 0.95,
      maxOutputTokens: 4096,
    },
  });

  return response.text;
}
