import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/content/placeholders";

export function Hero() {
  return (
    <div className="relative overflow-hidden border-b border-border">
      <Image
        src="/images/gallery/mcrae-dancefloor-2.jpg"
        alt=""
        fill
        priority
        aria-hidden
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
      <Container className="relative flex flex-col items-start gap-6 py-24 sm:py-36">
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
