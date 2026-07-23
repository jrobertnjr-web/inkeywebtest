import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { reviews } from "@/content/placeholders";

export function Reviews() {
  return (
    <Section className="border-t border-border">
      <p className="text-sm font-semibold uppercase tracking-widest text-accent">
        What Clients Say
      </p>
      <h2 className="mt-3 max-w-xl font-display text-2xl font-semibold sm:text-3xl">
        Don&apos;t Take Our Word for It
      </h2>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review) => (
          <Card key={review.name} className="flex flex-col gap-4">
            <p className="text-sm leading-relaxed text-foreground">&ldquo;{review.quote}&rdquo;</p>
            <div>
              <div className="text-sm font-semibold">{review.name}</div>
              <div className="mt-0.5 text-xs uppercase tracking-wide text-muted">{review.event}</div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
