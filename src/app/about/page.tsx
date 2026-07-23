import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
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

export default function AboutPage() {
  return (
    <>
      <Section className="border-b border-border">
        <h1 className="font-display text-4xl font-semibold sm:text-5xl">{aboutContent.heading}</h1>
        <div className="mt-6 max-w-2xl space-y-4 text-muted">
          {aboutContent.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Section>

      <Section>
        <h2 className="font-display text-2xl font-semibold sm:text-3xl">The Team</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {teamMembers.map((member) => (
            <Card key={member.name} className="flex flex-col items-start gap-4">
              <div className="h-24 w-24 overflow-hidden rounded-full bg-border">
                {/* eslint-disable-next-line @next/next/no-img-element -- local placeholder SVG, swapped for real photos later */}
                <img src={member.photo} alt={member.name} className="h-full w-full object-cover" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-display text-lg font-semibold">{member.name}</h3>
                  {member.founder && (
                    <span className="rounded-full border border-border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-muted">
                      Founder
                    </span>
                  )}
                </div>
                <p className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    {roleIcons[member.icon]}
                  </svg>
                  {member.role}
                </p>
                <p className="mt-3 text-sm text-muted">{member.bio}</p>
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
