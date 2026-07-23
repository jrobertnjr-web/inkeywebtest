import { NextRequest, NextResponse } from "next/server";
import { anthropic, VIBE_RECOMMENDER_MODEL, VIBE_RESULT_TOOL, VIBE_SYSTEM_PROMPT } from "@/lib/anthropic";
import { vibeRecommenderSchema } from "@/lib/validation";
import { isRateLimited } from "@/lib/ratelimit";

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for") ?? "unknown";
  if (isRateLimited(`vibe:${ip}`)) {
    return NextResponse.json({ error: "Too many requests. Please try again in a minute." }, { status: 429 });
  }

  const body = await request.json().catch(() => null);
  const parsed = vibeRecommenderSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.issues[0]?.message ?? "Invalid input" }, { status: 400 });
  }

  if (!process.env.ANTHROPIC_API_KEY) {
    return NextResponse.json(
      { error: "Vibe Recommender isn't configured yet. Book a free consult and we'll curate live." },
      { status: 503 }
    );
  }

  const { eventType, mood, genres, guestCount, notes } = parsed.data;
  const userPrompt = [
    `Event type: ${eventType}`,
    `Desired mood/energy: ${mood}`,
    `Genres they like: ${genres.join(", ")}`,
    guestCount ? `Guest count: ${guestCount}` : null,
    notes ? `Additional notes: ${notes}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  try {
    const response = await anthropic.messages.create({
      model: VIBE_RECOMMENDER_MODEL,
      max_tokens: 800,
      system: VIBE_SYSTEM_PROMPT,
      messages: [{ role: "user", content: userPrompt }],
      tools: [VIBE_RESULT_TOOL],
      tool_choice: { type: "tool", name: VIBE_RESULT_TOOL.name },
    });

    const toolUse = response.content.find((block) => block.type === "tool_use");
    if (!toolUse || toolUse.type !== "tool_use") {
      throw new Error("Model did not return a tool_use block");
    }

    return NextResponse.json({ result: toolUse.input });
  } catch (error) {
    console.error("Vibe Recommender request failed", error);
    return NextResponse.json(
      { error: "Our vibe engine is taking a breather. Book a free consult and we'll curate live." },
      { status: 502 }
    );
  }
}
