import type { Metadata } from "next";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { ContactForm } from "@/components/contact/ContactForm";
import { consultationMethods, siteConfig } from "@/content/placeholders";

export const metadata: Metadata = {
  title: "Contact",
  description: "Book a free consultation with inKey DJ Collective.",
};

const methodsList = new Intl.ListFormat("en", { style: "long", type: "conjunction" }).format(
  consultationMethods
);

export default function ContactPage() {
  return (
    <Section>
      <div className="grid gap-12 lg:grid-cols-[1fr_380px]">
        <div>
          <h1 className="font-display text-4xl font-semibold sm:text-5xl">Contact</h1>
          <p className="mt-4 max-w-2xl text-muted">
            Tell us about your event and we&apos;ll set up a free consultation via {methodsList}.
          </p>
          <p className="mt-2 max-w-2xl text-muted">
            Prefer email?{" "}
            <a href={`mailto:${siteConfig.email}`} className="text-foreground underline underline-offset-4">
              {siteConfig.email}
            </a>
          </p>
          <p className="mt-2 max-w-2xl text-muted">
            Prefer to call or text?{" "}
            <a href={siteConfig.phoneHref} className="text-foreground underline underline-offset-4">
              {siteConfig.phone}
            </a>
          </p>
          <div className="mt-10">
            <ContactForm />
          </div>
        </div>

        <div className="hidden lg:block">
          <div className="sticky top-28 aspect-[3/4] overflow-hidden rounded-2xl">
            <Image
              src="/images/gallery/mcrae-reception-wide.jpg"
              alt="Elegant reception hall with chandeliers and string lights at the McRae wedding"
              fill
              sizes="380px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
