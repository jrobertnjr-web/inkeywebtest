import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  email: z.string().email("Enter a valid email").max(200),
  eventDate: z.string().max(50).optional().or(z.literal("")),
  eventType: z.string().max(100).optional().or(z.literal("")),
  musicNotes: z.string().max(1000).optional().or(z.literal("")),
  message: z.string().min(1, "Message is required").max(2000),
});

export type ContactInput = z.infer<typeof contactSchema>;

export const vibeEventTypes = ["Wedding", "Corporate", "Birthday", "Private Party", "Other"] as const;
export const vibeMoods = [
  "Chill & Classy",
  "High Energy & Dancing",
  "Mixed (build throughout night)",
  "Background & Elegant",
] as const;
export const vibeGenres = [
  "Top 40",
  "Hip-Hop/R&B",
  "House/EDM",
  "Latin",
  "Rock/Classic Rock",
  "Country",
  "Jazz/Soul",
  "Afrobeats",
] as const;

export const vibeRecommenderSchema = z.object({
  eventType: z.enum(vibeEventTypes),
  mood: z.enum(vibeMoods),
  genres: z.array(z.string().max(40)).min(1, "Pick at least one genre").max(6),
  guestCount: z.string().max(20).optional().or(z.literal("")),
  notes: z.string().max(200).optional().or(z.literal("")),
});

export type VibeRecommenderInput = z.infer<typeof vibeRecommenderSchema>;
