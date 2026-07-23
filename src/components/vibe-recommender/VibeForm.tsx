"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/Button";
import { GenreTagList } from "./GenreTagList";
import { VibeResultCard, type VibeResult } from "./VibeResultCard";
import { vibeEventTypes, vibeMoods } from "@/lib/validation";

type Status = "idle" | "submitting" | "error";

export function VibeForm() {
  const [genres, setGenres] = useState<string[]>([]);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [result, setResult] = useState<VibeResult | null>(null);

  function toggleGenre(genre: string) {
    setGenres((prev) => (prev.includes(genre) ? prev.filter((g) => g !== genre) : [...prev, genre]));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage(null);

    const formData = new FormData(event.currentTarget);
    const payload = {
      eventType: formData.get("eventType"),
      mood: formData.get("mood"),
      genres,
      guestCount: formData.get("guestCount"),
      notes: formData.get("notes"),
    };

    try {
      const res = await fetch("/api/vibe-recommender", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      setResult(data.result);
      setStatus("idle");
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
    }
  }

  if (result) {
    return (
      <div className="flex flex-col gap-6">
        <VibeResultCard result={result} />
        <Button variant="secondary" onClick={() => setResult(null)} className="self-start">
          Try Again
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <label className="flex flex-col gap-2 text-sm text-muted">
        Event type
        <select
          name="eventType"
          required
          className="rounded-xl border border-border bg-surface px-4 py-3 text-foreground outline-none focus:border-primary"
        >
          {vibeEventTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </label>

      <label className="flex flex-col gap-2 text-sm text-muted">
        Mood / energy
        <select
          name="mood"
          required
          className="rounded-xl border border-border bg-surface px-4 py-3 text-foreground outline-none focus:border-primary"
        >
          {vibeMoods.map((mood) => (
            <option key={mood} value={mood}>
              {mood}
            </option>
          ))}
        </select>
      </label>

      <div className="flex flex-col gap-2 text-sm text-muted">
        Genres you like (pick up to 6)
        <GenreTagList selected={genres} onToggle={toggleGenre} />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm text-muted">
          Guest count (optional)
          <input
            name="guestCount"
            placeholder="e.g. 100"
            className="rounded-xl border border-border bg-surface px-4 py-3 text-foreground outline-none focus:border-primary"
          />
        </label>
        <label className="flex flex-col gap-2 text-sm text-muted">
          Anything else? (optional)
          <input
            name="notes"
            maxLength={200}
            placeholder="e.g. must-play song, venue type..."
            className="rounded-xl border border-border bg-surface px-4 py-3 text-foreground outline-none focus:border-primary"
          />
        </label>
      </div>

      {status === "error" && errorMessage && <p className="text-sm text-red-400">{errorMessage}</p>}

      <Button type="submit" disabled={status === "submitting" || genres.length === 0} className="self-start">
        {status === "submitting" ? "Finding your vibe..." : "Get My Vibe"}
      </Button>
    </form>
  );
}
