import Image from "next/image";
import { galleryImages } from "@/content/placeholders";

export function GalleryGrid() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {galleryImages.map((image) => (
        <div
          key={image.src}
          className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-surface"
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}
