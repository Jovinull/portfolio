import type { Metadata } from "next";
import { PageShell } from "@/components/site/page-shell";
import { ProjectsTabs } from "@/components/site/projects/projects-tabs";

export const metadata: Metadata = {
  title: "Projetos",
  description:
    "CerneBR Gateway Nacional (Java 25 + Spring Boot 4), Iron March (roguelike C++20 com ECS), Idle Mine: Redux (Vue 3 strict), StoreStash (gestão de estoque em Laravel 13) e StdoutSpace (motor de renderização de espaço no terminal em C++17). Engenharia que sai do código.",
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
      description="Cada projeto resolve um problema real com a stack escolhida sob medida — da arquitetura ECS em C++20 e do microserviço com Virtual Threads em Java 25 ao full-stack em Laravel e a um motor que renderiza galáxias direto no terminal."
    >
      <ProjectsTabs />
    </PageShell>
  );
}
