import { Section } from "@/components/ui/Section";
import { reviews } from "@/content/placeholders";

export function Reviews() {
  return (
    <Section className="border-t border-border">
      <p className="text-sm font-semibold uppercase tracking-widest text-accent">
        What Clients Say
      </p>
      <div className="mt-10 flex flex-col gap-8">
        {reviews.map((review) => (
          <figure key={review.name} className="max-w-3xl">
            <span aria-hidden className="font-display text-6xl leading-none text-primary/40">
              &ldquo;
            </span>
            <blockquote className="-mt-4 font-display text-xl font-medium leading-relaxed sm:text-2xl">
              {review.quote}
            </blockquote>
            <figcaption className="mt-5 text-sm">
              <span className="font-semibold">{review.name}</span>
              <span className="text-muted"> — {review.event}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
