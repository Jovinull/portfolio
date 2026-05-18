import type { Metadata } from "next";
import { PageShell } from "@/components/site/page-shell";
import { ProjectsTabs } from "@/components/site/projects/projects-tabs";

export const metadata: Metadata = {
  title: "Projetos",
  description:
    "Iron March (roguelike C++20 com ECS), CerneBR Gateway Nacional (Java 25 + Spring Boot 4) e Idle Mine: Redux (Vue 3 + TypeScript strict). Engenharia que sai do código.",
};

export default function ProjetosPage() {
  return (
    <PageShell
      eyebrow="Projetos & Engenharia"
      title={
        <>
          Sistemas pensados — do{" "}
          <span className="text-gradient">low-level</span> ao{" "}
          <span className="text-gradient">distribuído</span>.
        </>
      }
      description="Cada projeto resolve um problema real com a stack escolhida sob medida. Da arquitetura ECS em C++20 ao microserviço com Virtual Threads e cache inteligente em Java 25."
    >
      <ProjectsTabs />
    </PageShell>
  );
}
