import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";

export function VibeTeaser() {
  return (
    <Section>
      <Card className="flex flex-col items-start gap-4 border-primary/30 bg-primary/5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            AI-Powered · Only at inKey
          </p>
          <h2 className="mt-2 font-display text-2xl font-semibold">
            Skip the generic DJ quiz. Try the Vibe Recommender.
          </h2>
          <p className="mt-2 max-w-lg text-muted">
            Answer a few quick questions and our AI instantly builds a sample genre mix and
            playlist idea for your event — no waiting on a callback, no cookie-cutter suggestions.
          </p>
        </div>
        <ButtonLink href="/vibe-recommender" className="shrink-0">
          Find Your Vibe
        </ButtonLink>
      </Card>
    </Section>
  );
}
