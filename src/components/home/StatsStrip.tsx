import { Section } from "@/components/ui/Section";
import { teamMembers } from "@/content/placeholders";

const stats = [
  { value: `${teamMembers.length}`, label: "Curated DJs" },
  { value: "$0", label: "Consultation Fee" },
  { value: "100%", label: "À La Carte" },
];

export function StatsStrip() {
  return (
    <Section className="py-14 sm:py-20">
      <div className="grid grid-cols-3 gap-6 sm:gap-16">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="font-display text-3xl font-bold text-primary sm:text-5xl">
              {stat.value}
            </div>
            <div className="mt-2 text-[11px] font-medium uppercase tracking-[0.15em] text-muted">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
