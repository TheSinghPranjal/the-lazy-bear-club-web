import { StudioHero } from "@/components/sections/StudioHero";
import { AppsGrid } from "@/components/sections/AppsGrid";
import { AppSpotlight } from "@/components/sections/AppSpotlight";
import { AboutStudio } from "@/components/sections/AboutStudio";
import { ContactSection } from "@/components/sections/ContactSection";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <StudioHero />
      <AppsGrid />
      <AppSpotlight />
      <AboutStudio />
      <ContactSection />
      <FinalCTA />
    </>
  );
}
