import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/content/placeholders";

export function Hero() {
  return (
    <div className="relative overflow-hidden border-b border-border bg-gradient-to-b from-surface to-background">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 -top-36 h-[500px] w-[500px] rounded-full bg-primary/15 blur-[80px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -right-20 h-[400px] w-[400px] rounded-full bg-indigo/30 blur-[80px]"
      />
      <Container className="relative flex flex-col items-start gap-6 py-24 sm:py-32">
        <p className="text-sm font-medium uppercase tracking-widest text-accent">
          Boutique Event DJs
        </p>
        <h1 className="max-w-2xl font-display text-4xl font-semibold leading-tight sm:text-6xl">
          {siteConfig.tagline}
        </h1>
        <p className="max-w-xl text-lg text-muted">
          Weddings, corporate events, and celebrations — curated à la carte, not from a template.
        </p>
        <div className="flex flex-wrap gap-4 pt-4">
          <ButtonLink href="/contact">Book a Free Consultation</ButtonLink>
          <ButtonLink href="/vibe-recommender" variant="secondary">
            Try the Vibe Recommender
          </ButtonLink>
        </div>
      </Container>
    </div>
  );
}
