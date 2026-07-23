import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { legal } from "@/content/placeholders";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPolicyPage() {
  return (
    <Section>
      <h1 className="font-display text-3xl font-semibold sm:text-4xl">Privacy Policy</h1>
      <p className="mt-6 max-w-2xl whitespace-pre-line text-muted">{legal.privacyPolicy}</p>
    </Section>
  );
}
