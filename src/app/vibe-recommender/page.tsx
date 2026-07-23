import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { VibeForm } from "@/components/vibe-recommender/VibeForm";

export const metadata: Metadata = {
  title: "Vibe Recommender",
  description: "Answer a few questions about your event and get an instant sample playlist idea.",
};

export default function VibeRecommenderPage() {
  return (
    <Section>
      <h1 className="font-display text-4xl font-semibold sm:text-5xl">Vibe Recommender</h1>
      <p className="mt-4 max-w-2xl text-muted">
        Answer a few quick questions about your event and we&apos;ll generate a sample genre mix and
        playlist idea to match.
      </p>
      <div className="mt-10 max-w-2xl">
        <VibeForm />
      </div>
    </Section>
  );
}
