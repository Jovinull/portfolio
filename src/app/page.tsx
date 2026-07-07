import { Hero } from "@/components/site/hero";
import { ExperiencePreview } from "@/components/site/experience-preview";
import { StartupCallout } from "@/components/site/startup-callout";
import { ProjectsPreview } from "@/components/site/projects-preview";
import { ResearchCallout } from "@/components/site/research-callout";
import { CtaSection } from "@/components/site/cta-section";
import { ServicesSection } from "@/components/site/services-section";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <ExperiencePreview />
      <ServicesSection />
      <StartupCallout />
      <ProjectsPreview />
      <ResearchCallout />
      <CtaSection />
    </main>
  );
}
