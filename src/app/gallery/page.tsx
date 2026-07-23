import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { HighlightVideo } from "@/components/gallery/HighlightVideo";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photos from past events curated by inKey DJ Collective.",
};

export default function GalleryPage() {
  return (
    <Section>
      <h1 className="font-display text-4xl font-semibold sm:text-5xl">Gallery</h1>
      <p className="mt-4 max-w-2xl text-muted">
        A look at some of the moments we&apos;ve helped create.
      </p>
      <div className="mt-10">
        <GalleryGrid />
      </div>
      <HighlightVideo />
    </Section>
  );
}
