import { Section } from "@/components/ui/Section";
import { teamMembers } from "@/content/placeholders";

const stats = [
  { value: `${teamMembers.length}`, label: "Curated DJs" },
  { value: "$0", label: "Consultation Fee" },
  { value: "100%", label: "À La Carte" },
];

export function StatsStrip() {
  return (
    <Section className="py-0 sm:py-0">
      <div className="grid grid-cols-3 divide-x divide-border overflow-hidden rounded-2xl border border-border">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-surface px-4 py-8 text-center">
            <div className="font-display text-3xl font-bold sm:text-4xl">{stat.value}</div>
            <div className="mt-1.5 text-[11px] font-medium uppercase tracking-wider text-muted">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
