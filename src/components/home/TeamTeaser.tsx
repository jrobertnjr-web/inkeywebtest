import { Section } from "@/components/ui/Section";
import { noSalespeopleNote } from "@/content/placeholders";

export function TeamTeaser() {
  return (
    <Section className="border-t border-border">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-2xl font-semibold sm:text-3xl">
          No dedicated salespeople — just DJs
        </h2>
        <p className="mt-4 text-muted">{noSalespeopleNote}</p>
      </div>
    </Section>
  );
}
