import type { Metadata } from "next";
import { PageShell } from "@/components/site/page-shell";

export const metadata: Metadata = {
  title: "Pesquisa",
  description:
    "Mestrado em Computação (UFS/PROCC) aprovado em 1º lugar, especialização em EPT e artigos em IA (SEMEXT/SNCT).",
};

export default function PesquisaPage() {
  return (
    <PageShell
      eyebrow="Academia · IA aplicada"
      title="Da bancada ao paper: pesquisa que sustenta o produto."
      description="Aprovado em 1º lugar no Mestrado em Computação (UFS/PROCC). Especialista em Educação Profissional e Tecnológica. Artigos publicados em eventos científicos de IA."
    >
      <div className="mt-8 rounded-xl border border-border bg-card/40 p-8 text-card-foreground backdrop-blur">
        {/* TODO: Lista de publicações + cards de patentes (INPI) com link */}
        <p className="text-muted-foreground">
          Em construção — publicações, patentes e linhas de pesquisa virão aqui.
        </p>
      </div>
    </PageShell>
  );
}
