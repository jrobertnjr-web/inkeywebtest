import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { BookingCTA } from "@/components/home/BookingCTA";
import { aboutContent, teamMembers } from "@/content/placeholders";

export const metadata: Metadata = {
  title: "About",
  description: aboutContent.heading,
};

const roleIcons: Record<string, React.ReactNode> = {
  compass: <path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm3 4-2.5 6.5L7 15l2.5-6.5L15 7Z" />,
  cap: (
    <>
      <path d="m12 3 9 5-9 5-9-5 9-5Z" />
      <path d="M6 11v4c0 1.5 2.5 3 6 3s6-1.5 6-3v-4" />
    </>
  ),
  wine: (
    <>
      <path d="M7 3h10l-1 6a4 4 0 0 1-8 0L7 3Z" />
      <path d="M12 13v6M8 21h8" />
    </>
  ),
  headphones: (
    <>
      <path d="M4 14v-2a8 8 0 0 1 16 0v2" />
      <rect x="2" y="14" width="4" height="6" rx="1" />
      <rect x="18" y="14" width="4" height="6" rx="1" />
    </>
  ),
};

const atAGlance: { label: string; value: string; icon: React.ReactNode }[] = [
  {
    label: "Years Running",
    value: "4+",
    icon: (
      <>
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18" />
      </>
    ),
  },
  {
    label: "Specialist DJs",
    value: "4",
    icon: (
      <>
        <path d="M16 21v-1a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v1" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-1a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </>
    ),
  },
  {
    label: "Years Combined",
    value: "70+",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 3" />
      </>
    ),
  },
  {
    label: "Home Base",
    value: "Austin, TX",
    icon: (
      <>
        <path d="M12 21s7-7.5 7-12a7 7 0 1 0-14 0c0 4.5 7 12 7 12Z" />
        <circle cx="12" cy="9" r="2.5" />
      </>
    ),
  },
];

export default function AboutPage() {
  return (
    <>
      <Section className="border-b border-border">
        <div className="grid gap-10 md:grid-cols-[1fr_320px]">
          <div>
            <h1 className="font-display text-4xl font-semibold sm:text-5xl">{aboutContent.heading}</h1>
            <div className="mt-6 max-w-2xl space-y-4 text-muted">
              {aboutContent.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          <Card className="grid grid-cols-2 gap-6 self-start sm:grid-cols-4 md:grid-cols-2">
            {atAGlance.map((stat) => (
              <div key={stat.label}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                  aria-hidden
                >
                  {stat.icon}
                </svg>
                <div className="mt-2 font-display text-xl font-semibold">{stat.value}</div>
                <div className="text-xs text-muted">{stat.label}</div>
              </div>
            ))}
          </Card>
        </div>
      </Section>

      <Section>
        <h2 className="font-display text-2xl font-semibold sm:text-3xl">The Team</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="relative flex items-start gap-5 overflow-hidden rounded-2xl bg-surface p-6"
            >
              <svg
                width="200"
                height="200"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--foreground)"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="pointer-events-none absolute -bottom-10 -right-10 opacity-[0.05]"
                aria-hidden
              >
                {roleIcons[member.icon]}
              </svg>
              <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full bg-border">
                {/* eslint-disable-next-line @next/next/no-img-element -- local placeholder SVG, swapped for real photos later */}
                <img src={member.photo} alt={member.name} className="h-full w-full object-cover" />
              </div>
              <div className="relative">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-display text-lg font-semibold">{member.name}</h3>
                  {member.founder && (
                    <span className="rounded-full border border-border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-muted">
                      Founder
                    </span>
                  )}
                </div>
                <p className="mt-1.5 text-sm font-semibold uppercase tracking-wide text-primary">
                  {member.role}
                </p>
                <p className="mt-3 text-sm text-muted">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <BookingCTA />
    </>
  );
}
