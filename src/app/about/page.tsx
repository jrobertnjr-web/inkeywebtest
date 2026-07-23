import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { aboutContent, teamMembers } from "@/content/placeholders";

export const metadata: Metadata = {
  title: "About",
  description: aboutContent.heading,
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
                <h3 className="font-display text-lg font-semibold">{member.name}</h3>
                <p className="text-sm text-accent">{member.role}</p>
                <p className="mt-2 text-sm text-muted">{member.bio}</p>
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
