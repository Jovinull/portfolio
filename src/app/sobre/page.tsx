import type { Metadata } from "next";
import { PageShell } from "@/components/site/page-shell";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Da bancada de eletrônica à liderança técnica: a trajetória de Felipe Jovino unindo engenharia, pesquisa e produto.",
};

export default function SobrePage() {
  return (
    <PageShell
      eyebrow="Manifesto"
      title="Comecei queimando placas. Hoje construo soluções que escalam."
      description="Engenheiro full-stack, pesquisador em IA e líder técnico. Atuo na fronteira entre hardware, software e ciência aplicada — sempre com o produto e o usuário no centro."
    >
      <div className="mt-8 rounded-xl border border-border bg-card/40 p-8 text-card-foreground backdrop-blur">
        {/* TODO: Substituir por timeline interativa com Framer Motion */}
        <p className="text-muted-foreground">
          Em construção — narrativa completa, valores e perfil profissional virão aqui.
        </p>
      </div>
    </PageShell>
  );
}
