import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";
import { packagesContent, pricing, consultationMethods } from "@/content/placeholders";

export const metadata: Metadata = {
  title: "Packages",
  description: packagesContent.intro,
};

export default function PackagesPage() {
  return (
    <Section>
      <h1 className="font-display text-4xl font-semibold sm:text-5xl">{packagesContent.heading}</h1>
      <p className="mt-6 max-w-2xl text-lg text-muted">{packagesContent.intro}</p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        <Card>
          <h2 className="font-display text-xl font-semibold">Small Events</h2>
          <p className="mt-2 text-3xl font-semibold text-accent">${pricing.small.toLocaleString()}+</p>
          <p className="mt-2 text-sm text-muted">Intimate parties, small gatherings, private celebrations.</p>
        </Card>
        <Card>
          <h2 className="font-display text-xl font-semibold">Large Events</h2>
          <p className="mt-2 text-3xl font-semibold text-accent">${pricing.large.toLocaleString()}+</p>
          <p className="mt-2 text-sm text-muted">Weddings, corporate functions, and large-scale celebrations.</p>
        </Card>
      </div>

      <p className="mt-6 max-w-2xl text-muted">{pricing.note}</p>

      <div className="mt-10">
        <h2 className="font-display text-xl font-semibold">Consultations available via</h2>
        <ul className="mt-3 flex flex-wrap gap-3">
          {consultationMethods.map((method) => (
            <li
              key={method}
              className="rounded-full border border-border px-4 py-1.5 text-sm text-muted"
            >
              {method}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-10">
        <ButtonLink href="/contact">{packagesContent.ctaLabel}</ButtonLink>
      </div>
    </Section>
  );
}
