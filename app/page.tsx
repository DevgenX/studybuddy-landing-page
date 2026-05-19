import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import SocialProof from "@/components/sections/SocialProof";
import Modes from "@/components/sections/Modes";
import ScreenAwareness from "@/components/sections/ScreenAwareness";
import AutomationPower from "@/components/sections/AutomationPower";
import SpacesKnowledge from "@/components/sections/SpacesKnowledge";
import PersonalChannels from "@/components/sections/PersonalChannels";
import Integrations from "@/components/sections/Integrations";
import Governance from "@/components/sections/Governance";
import CtaBanner from "@/components/sections/CtaBanner";
import Footer from "@/components/sections/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <Modes />
        <ScreenAwareness />
        <AutomationPower />
        <SpacesKnowledge />
        <PersonalChannels />
        <Integrations />
        <Governance />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
