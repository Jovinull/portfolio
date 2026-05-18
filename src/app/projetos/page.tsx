import type { Metadata } from "next";
import { PageShell } from "@/components/site/page-shell";

export const metadata: Metadata = {
  title: "Projetos",
  description:
    "Patentes INPI, deeptech, jogos em Java puro e sistemas IoT com ESP32. Engenharia que sai do papel.",
};

export default function ProjetosPage() {
  return (
    <PageShell
      eyebrow="Patentes · Deeptech · Open Source"
      title="Engenharia que sai do papel — e do INPI."
      description="Glicemy, SignForest, CaptionEase, BitHunter, DomuServer. Cada projeto resolve um problema real, com tecnologia escolhida sob medida."
    >
      <div className="mt-8 rounded-xl border border-border bg-card/40 p-8 text-card-foreground backdrop-blur">
        {/* TODO: Grid de cards de projetos com hover glow e filtro por categoria */}
        <p className="text-muted-foreground">
          Em construção — grid de projetos com filtros virá aqui.
        </p>
      </div>
    </PageShell>
  );
}
