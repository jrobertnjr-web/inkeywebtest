export function HighlightVideo() {
  return (
    <div className="mt-16">
      <p className="text-sm font-semibold uppercase tracking-widest text-accent">Watch</p>
      <h2 className="mt-3 font-display text-2xl font-semibold sm:text-3xl">
        A First Dance, Set to the Room
      </h2>
      <p className="mt-2 max-w-2xl text-muted">
        A look at the lighting and atmosphere design from a recent wedding reception.
      </p>
      <video
        controls
        preload="none"
        poster="/video/mcrae-first-dance-poster.jpg"
        className="mt-6 w-full rounded-2xl border border-border"
      >
        <source src="/video/mcrae-first-dance.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
