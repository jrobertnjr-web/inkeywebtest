import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/ui/Section";

const photos = [
  { src: "/images/gallery/mcrae-atmosphere.jpg", alt: "Guests dancing under string lights at the McRae wedding" },
  { src: "/images/gallery/mcrae-reception-wide.jpg", alt: "Elegant reception hall with chandeliers and string lights at the McRae wedding" },
  { src: "/images/gallery/mcrae-dancefloor-1.jpg", alt: "Packed dance floor at the McRae wedding reception" },
];

export function MomentsStrip() {
  return (
    <Section className="border-t border-border">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Moments</p>
          <h2 className="mt-3 max-w-xl font-display text-2xl font-semibold sm:text-3xl">
            A Glimpse of the Night
          </h2>
        </div>
        <Link href="/gallery" className="text-sm font-medium text-accent hover:text-primary-hover">
          See the full gallery →
        </Link>
      </div>
      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        {photos.map((photo) => (
          <div key={photo.src} className="relative aspect-[3/4] overflow-hidden rounded-2xl">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(min-width: 640px) 33vw, 100vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </Section>
  );
}
