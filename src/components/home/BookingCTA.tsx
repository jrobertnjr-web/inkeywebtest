import { ButtonLink } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { pricing } from "@/content/placeholders";

export function BookingCTA() {
  return (
    <Section className="border-t border-border">
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
        <h2 className="font-display text-2xl font-semibold sm:text-3xl">Ready to book?</h2>
        <p className="text-muted">{pricing.note}</p>
        <ButtonLink href="/contact">Book a Free Consultation</ButtonLink>
      </div>
    </Section>
  );
}
