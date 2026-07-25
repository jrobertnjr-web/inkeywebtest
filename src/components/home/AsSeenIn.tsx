import { Section } from "@/components/ui/Section";

const ARTICLE_URL =
  "https://issuu.com/influentialmagazine/docs/influential_magazine_-_july_august_296348c0d27580/53";

export function AsSeenIn() {
  return (
    <Section className="border-t border-border py-10 sm:py-14">
      <div className="flex flex-col items-center gap-3 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted">As Seen In</p>
        <a
          href={ARTICLE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-display text-xl font-semibold tracking-wide text-foreground transition-colors hover:text-primary-hover sm:text-2xl"
        >
          InFluential Magazine
        </a>
      </div>
    </Section>
  );
}
