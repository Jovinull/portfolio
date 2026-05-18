import type { Metadata } from "next";
import { PageShell } from "@/components/site/page-shell";

export const metadata: Metadata = {
  title: "Experiência",
  description:
    "Liderança técnica, squads de alta performance e produtos em produção: WM Saúde, AccessSim, WF3 Solutions e Masters Tech.",
};

export default function ExperienciaPage() {
  return (
    <PageShell
      eyebrow="Liderança · Produto · Engenharia"
      title="Squads, arquitetura e impacto real em produção."
      description="Coordeno times, defino padrões (GitFlow, CI/CD, RBAC, LGPD) e entrego produtos que rodam — de plataformas SaaS a deeptech em parceria com o Sebrae."
    >
      <div className="mt-8 rounded-xl border border-border bg-card/40 p-8 text-card-foreground backdrop-blur">
        {/* TODO: Substituir por timeline animada (WM Saúde, AccessSim, WF3, Masters Tech) */}
        <p className="text-muted-foreground">
          Em construção — timeline interativa com cards por empresa virá aqui.
        </p>
      </div>
    </PageShell>
  );
}
