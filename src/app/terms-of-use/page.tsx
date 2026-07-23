import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { legal } from "@/content/placeholders";

export const metadata: Metadata = {
  title: "Terms of Use",
};

export default function TermsOfUsePage() {
  return (
    <Section>
      <h1 className="font-display text-3xl font-semibold sm:text-4xl">Terms of Use</h1>
      <p className="mt-6 max-w-2xl whitespace-pre-line text-muted">{legal.termsOfUse}</p>
    </Section>
  );
}
