import { vibeGenres } from "@/lib/validation";

export function GenreTagList({
  selected,
  onToggle,
}: {
  selected: string[];
  onToggle: (genre: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {vibeGenres.map((genre) => {
        const isSelected = selected.includes(genre);
        return (
          <button
            key={genre}
            type="button"
            onClick={() => onToggle(genre)}
            aria-pressed={isSelected}
            className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
              isSelected
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border text-muted hover:border-primary hover:text-foreground"
            }`}
          >
            {genre}
          </button>
        );
      })}
    </div>
  );
}
