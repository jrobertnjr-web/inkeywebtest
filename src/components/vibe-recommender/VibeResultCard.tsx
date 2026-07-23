import { Card } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";

export type VibeResult = {
  headline: string;
  blurb: string;
  genre_mix: string[];
  sample_tracks: string[];
  booking_nudge: string;
};

export function VibeResultCard({ result }: { result: VibeResult }) {
  return (
    <Card className="flex flex-col gap-6">
      <div>
        <h2 className="font-display text-2xl font-semibold text-accent">{result.headline}</h2>
        <p className="mt-3 text-muted">{result.blurb}</p>
      </div>

      <div>
        <h3 className="text-sm font-semibold uppercase tracking-wide text-muted">Genre Mix</h3>
        <div className="mt-2 flex flex-wrap gap-2">
          {result.genre_mix.map((genre) => (
            <span key={genre} className="rounded-full border border-border px-3 py-1 text-sm">
              {genre}
            </span>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold uppercase tracking-wide text-muted">Sample Tracks</h3>
        <ul className="mt-2 space-y-1 text-foreground">
          {result.sample_tracks.map((track) => (
            <li key={track}>{track}</li>
          ))}
        </ul>
      </div>

      <div className="border-t border-border pt-6">
        <p className="text-muted">{result.booking_nudge}</p>
        <ButtonLink href="/contact" className="mt-4">
          Book a Free Consultation
        </ButtonLink>
      </div>
    </Card>
  );
}
