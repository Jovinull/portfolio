import { Hero } from "@/components/site/hero";
import { ExperiencePreview } from "@/components/site/experience-preview";
import { StartupCallout } from "@/components/site/startup-callout";
import { ProjectsPreview } from "@/components/site/projects-preview";
import { ResearchCallout } from "@/components/site/research-callout";
import { CtaSection } from "@/components/site/cta-section";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <ExperiencePreview />
      <StartupCallout />
      <ProjectsPreview />
      <ResearchCallout />
      <CtaSection />
    </main>
  );
}
