import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { ContactForm } from "@/components/contact/ContactForm";
import { consultationMethods, siteConfig } from "@/content/placeholders";

export const metadata: Metadata = {
  title: "Contact",
  description: "Book a free consultation with inKey DJ Collective.",
};

export default function ContactPage() {
  return (
    <Section>
      <h1 className="font-display text-4xl font-semibold sm:text-5xl">Contact</h1>
      <p className="mt-4 max-w-2xl text-muted">
        Tell us about your event and we&apos;ll set up a free consultation via{" "}
        {consultationMethods.join(", ")}.
      </p>
      <p className="mt-2 max-w-2xl text-muted">
        Prefer email?{" "}
        <a href={`mailto:${siteConfig.email}`} className="text-foreground underline underline-offset-4">
          {siteConfig.email}
        </a>
      </p>
      <div className="mt-10 max-w-2xl">
        <ContactForm />
      </div>
    </Section>
  );
}
