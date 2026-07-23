import { Section } from "@/components/ui/Section";

const steps = [
  {
    step: "01",
    title: "Tell Us About Your Event",
    body: "Share your date, event type, and vibe — takes about two minutes.",
  },
  {
    step: "02",
    title: "Meet Your DJ",
    body: "A free consultation via Zoom, FaceTime, phone, or in person. No pressure, no sales pitch.",
  },
  {
    step: "03",
    title: "Get a Custom Quote",
    body: "A plan built around your event, venue, and vision — not a rigid package.",
  },
  {
    step: "04",
    title: "Celebrate",
    body: "Your DJ shows up ready to read the room and keep the night moving.",
  },
];

export function HowItWorks() {
  return (
    <Section className="border-t border-border">
      <p className="text-sm font-semibold uppercase tracking-widest text-accent">How It Works</p>
      <h2 className="mt-3 max-w-xl font-display text-2xl font-semibold sm:text-3xl">
        From First Hello to Last Dance
      </h2>
      <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((item) => (
          <div key={item.step}>
            <div className="font-display text-3xl font-bold text-primary/40">{item.step}</div>
            <h3 className="mt-3 text-[15px] font-semibold">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
