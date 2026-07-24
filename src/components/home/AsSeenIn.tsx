import { Section } from "@/components/ui/Section";

export function AsSeenIn() {
  return (
    <Section className="border-t border-border py-10 sm:py-14">
      <div className="flex flex-col items-center gap-3 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted">As Seen In</p>
        <p className="font-display text-xl font-semibold tracking-wide sm:text-2xl">
          InFluential Magazine
        </p>
      </div>
    </Section>
  );
}
