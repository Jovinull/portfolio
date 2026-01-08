import type { Metadata } from 'next';

import Footer from '@/app/components/footer/Footer';
import SectionReveal from '@/app/components/motion/SectionReveal';

import { workData } from '@/assets/assets';
import ProjectsHero from '@/app/components/projects/ProjectsHero';
import FeaturedProjectsSpotlight from '@/app/components/projects/FeaturedProjectsSpotlight';
import ProjectsList from '@/app/components/projects/ProjectsList';
import PageNavbar from '@/app/components/navbar/PageNavbar';

export const metadata: Metadata = {
  title: 'Projetos | Jovino',
  description:
    'Página dedicada aos projetos do Jovino: vitrine dos principais no topo e listagem completa abaixo.',
};

export default function ProjectsPage() {
  const featured = workData.filter((p) => p.featured);
  const spotlight = featured.length > 0 ? featured : workData.slice(0, 6);
  const others = workData.filter((p) => !p.featured);

  return (
    <>
      <PageNavbar active="projects" />

      <main className="bg-theme text-theme">
        <div className="w-full px-[12%] py-10">
          <div className="mx-auto max-w-6xl">
            <SectionReveal>
              <ProjectsHero total={workData.length} featured={spotlight.length} />
            </SectionReveal>

            <SectionReveal>
              <FeaturedProjectsSpotlight projects={spotlight} />
            </SectionReveal>

            <SectionReveal>
              <ProjectsList projects={others} />
            </SectionReveal>
          </div>
        </div>

        <SectionReveal>
          <Footer />
        </SectionReveal>
      </main>
    </>
  );
}
