import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { packagesContent, pricing, consultationMethods } from "@/content/placeholders";

export const metadata: Metadata = {
  title: "Packages",
  description: packagesContent.intro,
};

const included = [
  "Professional-grade sound & lighting gear",
  "On-site backup equipment",
  "A free consultation before you book",
  "A playlist built around your event, not a preset",
];

const addOns = ["Uplighting", "Photo booth", "Custom monogram"];

export default function PackagesPage() {
  return (
    <Section>
      <h1 className="font-display text-4xl font-semibold sm:text-5xl">{packagesContent.heading}</h1>
      <p className="mt-6 max-w-2xl text-lg text-muted">{packagesContent.intro}</p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        <div className="rounded-2xl bg-surface p-6">
          <h2 className="font-display text-xl font-semibold">Small Events</h2>
          <p className="mt-2 text-3xl font-semibold text-accent">${pricing.small.toLocaleString()}+</p>
          <p className="mt-2 text-sm text-muted">Intimate parties, small gatherings, private celebrations.</p>
        </div>
        <div className="rounded-2xl bg-surface p-6">
          <h2 className="font-display text-xl font-semibold">Large Events</h2>
          <p className="mt-2 text-3xl font-semibold text-accent">${pricing.large.toLocaleString()}+</p>
          <p className="mt-2 text-sm text-muted">Weddings, corporate functions, and large-scale celebrations.</p>
        </div>
      </div>
      <p className="mt-4 max-w-2xl text-sm text-muted">
        Every quote is customized after a free consultation based on venue, event type, and your vision.
      </p>

      <div className="mt-14 grid gap-10 sm:grid-cols-2">
        <div>
          <h2 className="font-display text-xl font-semibold">Every Booking Includes</h2>
          <ul className="mt-4 space-y-3">
            {included.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-muted">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mt-0.5 shrink-0 text-primary"
                  aria-hidden
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-display text-xl font-semibold">À La Carte Add-Ons</h2>
          <ul className="mt-4 space-y-3">
            {addOns.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-muted">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mt-0.5 shrink-0 text-primary"
                  aria-hidden
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-14">
        <h2 className="font-display text-xl font-semibold">Consultations available via</h2>
        <ul className="mt-3 flex flex-wrap gap-3">
          {consultationMethods.map((method) => (
            <li key={method} className="rounded-full bg-surface px-4 py-1.5 text-sm text-muted">
              {method}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-6">
        <ButtonLink href="/contact">{packagesContent.ctaLabel}</ButtonLink>
        <Link href="/vibe-recommender" className="text-sm font-medium text-accent hover:text-primary-hover">
          Not sure what fits? Try the Vibe Recommender →
        </Link>
      </div>
    </Section>
  );
}
