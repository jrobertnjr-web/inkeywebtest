import { Hero } from "@/components/home/Hero";
import { StatsStrip } from "@/components/home/StatsStrip";
import { VibeTeaser } from "@/components/home/VibeTeaser";
import { Reviews } from "@/components/home/Reviews";
import { WhyInkey } from "@/components/home/WhyInkey";
import { MomentsStrip } from "@/components/home/MomentsStrip";
import { HowItWorks } from "@/components/home/HowItWorks";
import { TeamTeaser } from "@/components/home/TeamTeaser";
import { BookingCTA } from "@/components/home/BookingCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <VibeTeaser />
      <Reviews />
      <WhyInkey />
      <MomentsStrip />
      <HowItWorks />
      <TeamTeaser />
      <BookingCTA />
    </>
  );
}
