import Anthropic from "@anthropic-ai/sdk";

export const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

export const VIBE_RECOMMENDER_MODEL = "claude-sonnet-5";

export const VIBE_SYSTEM_PROMPT = `You are the "Vibe Recommender" for inKey DJ Collective, a boutique event DJ business whose tagline is "Spinning Memories, Setting Vibes, Creating Moments." Your job is to take a few details about someone's upcoming event and generate a fun, tasteful, on-brand sample playlist idea for them.

Tone: warm, confident, a little playful, never cheesy or over-the-top. This is a boutique brand, not a big-box DJ service.

Always call the render_vibe_result tool with your response. Keep the blurb concise (2-4 sentences). Genre mix and sample tracks should feel genuinely tailored to the event type, mood, and genres provided — not generic. The booking_nudge should be a single short, natural sentence encouraging them to book a free consultation, without being pushy.`;

export const VIBE_RESULT_TOOL = {
  name: "render_vibe_result",
  description: "Render the structured vibe/playlist recommendation result to show the visitor.",
  input_schema: {
    type: "object" as const,
    properties: {
      headline: { type: "string", description: "A short, punchy headline for the result (max ~8 words)." },
      blurb: { type: "string", description: "2-4 sentence description of the vibe/energy for this event." },
      genre_mix: {
        type: "array",
        items: { type: "string" },
        maxItems: 6,
        description: "3-6 genres or sub-genres that make up the recommended mix.",
      },
      sample_tracks: {
        type: "array",
        items: { type: "string" },
        maxItems: 8,
        description: "4-8 real, well-known sample track titles (format: 'Song Title — Artist') that fit the vibe.",
      },
      booking_nudge: {
        type: "string",
        description: "One short, friendly sentence nudging the visitor to book a free consultation.",
      },
    },
    required: ["headline", "blurb", "genre_mix", "sample_tracks", "booking_nudge"],
  },
};
