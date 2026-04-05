import { HeroSection } from "@/components/hero-section";
import { PainPointsSection } from "@/components/pain-points-section";
import { SolutionSection } from "@/components/solution-section";
import { StepsSection } from "@/components/steps-section";
import { TargetBanner } from "@/components/target-banner";
import { FinalCta } from "@/components/final-cta";

const LINE_URL = "https://line.me/ti/p/@232awhbc";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection lineUrl={LINE_URL} />
      <TargetBanner />
      <PainPointsSection />
      <SolutionSection />
      <StepsSection />
      <FinalCta lineUrl={LINE_URL} />
    </main>
  );
}
