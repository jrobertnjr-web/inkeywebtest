import { ReactNode } from "react";
import { Section } from "@/components/ui/Section";

const items: { title: string; body: string; icon: ReactNode }[] = [
  {
    title: "Tailored Every Time",
    body: "Every set is custom-built around your crowd, your event, your vibe. No cookie-cutter playlists.",
    icon: (
      <path d="M9 18V5l12-2v13M9 18a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm12-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    ),
  },
  {
    title: "You Choose Your DJ",
    body: "Pick the specialist that fits your event. We connect you directly — no middlemen, no sales pressure.",
    icon: (
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm7 4-1-1m1 1a2.5 2.5 0 1 0 3.5 3.5M16 15l4.5 4.5" />
    ),
  },
  {
    title: "Premium Execution",
    body: "Professional-grade gear, backup equipment, and seamless coordination from first consult to final song.",
    icon: <path d="m12 2 2.9 6.3L22 9l-5 4.9 1.2 7.1L12 17.8 5.8 21l1.2-7.1L2 9l7.1-.7L12 2Z" />,
  },
  {
    title: "À La Carte Add-Ons",
    body: "Uplighting, photo booth, custom monogram — enhance exactly what you need, nothing you don't.",
    icon: <path d="M4 6h16M4 12h16M4 18h7m6-3v6m-3-3h6" />,
  },
];

export function WhyInkey() {
  return (
    <Section className="border-t border-border">
      <p className="text-sm font-semibold uppercase tracking-widest text-accent">Why inKey</p>
      <h2 className="mt-3 max-w-xl font-display text-2xl font-semibold sm:text-3xl">
        A Collective That Reads the Room
      </h2>
      <div className="mt-12 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <div key={item.title}>
            <svg
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary"
              aria-hidden
            >
              {item.icon}
            </svg>
            <h3 className="mt-4 text-[15px] font-semibold">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
