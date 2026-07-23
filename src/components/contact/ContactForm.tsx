"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/Button";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage(null);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      eventDate: formData.get("eventDate"),
      eventType: formData.get("eventType"),
      musicNotes: formData.get("musicNotes"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
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

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <p className="rounded-2xl border border-border bg-surface p-6 text-foreground">
        Thanks for reaching out! We&apos;ll be in touch shortly to schedule your consultation.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" required autoComplete="name" />
        <Field label="Email" name="email" type="email" required autoComplete="email" />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Event date" name="eventDate" type="date" />
        <Field label="Event type" name="eventType" placeholder="Wedding, corporate, birthday..." />
      </div>
      <label className="flex flex-col gap-2 text-sm text-muted">
        Must-plays, do-not-plays, or a Spotify playlist link (optional)
        <textarea
          name="musicNotes"
          rows={3}
          maxLength={1000}
          placeholder="e.g. Must play: our song. Do not play: Cha Cha Slide. https://open.spotify.com/playlist/..."
          className="rounded-xl border border-border bg-surface px-4 py-3 text-foreground outline-none focus:border-primary"
        />
      </label>
      <label className="flex flex-col gap-2 text-sm text-muted">
        Tell us about your event
        <textarea
          name="message"
          required
          rows={5}
          maxLength={2000}
          className="rounded-xl border border-border bg-surface px-4 py-3 text-foreground outline-none focus:border-primary"
        />
      </label>

      {status === "error" && errorMessage && <p className="text-sm text-red-400">{errorMessage}</p>}

      <Button type="submit" disabled={status === "submitting"} className="self-start">
        {status === "submitting" ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  placeholder?: string;
}) {
  return (
    <label className="flex flex-col gap-2 text-sm text-muted">
      {label}
      <input
        type={type}
        name={name}
        required={required}
        autoComplete={autoComplete}
        placeholder={placeholder}
        className="rounded-xl border border-border bg-surface px-4 py-3 text-foreground outline-none focus:border-primary"
      />
    </label>
  );
}
