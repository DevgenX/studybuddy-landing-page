import CursorFollower from "@/components/CursorFollower";
import MarketingCta from "@/components/MarketingCta";
import MarketingFaq from "@/components/MarketingFaq";
import MarketingFeatureSet from "@/components/MarketingFeatureSet";
import MarketingFooter from "@/components/MarketingFooter";
import MarketingHero from "@/components/MarketingHero";
import MarketingHowItWorks from "@/components/MarketingHowItWorks";
import MarketingNav from "@/components/MarketingNav";
import MarketingPricing from "@/components/MarketingPricing";
import MarketingShortcuts from "@/components/MarketingShortcuts";

export default function Home() {
  return (
    <>
      <CursorFollower />
      <MarketingNav />
      <main>
        <MarketingHero />
        <MarketingShortcuts />
        <MarketingHowItWorks />
        <MarketingFeatureSet />
        <MarketingPricing />
        <MarketingFaq />
        <MarketingCta />
      </main>
      <MarketingFooter />
    </>
  );
}
