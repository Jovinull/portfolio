import type { Metadata } from "next";
import { AcademicHero } from "@/components/site/research/academic-hero";
import { ArticlesShowcase } from "@/components/site/research/articles-showcase";
import { PatentsGrid } from "@/components/site/research/patents-grid";

export const metadata: Metadata = {
  title: "Pesquisa",
  description:
    "Mestrado em Ciência da Computação (UFS/PROCC) aprovado em 1º lugar, seis artigos publicados — dois premiados — em IA, acessibilidade e educação, e quatro softwares registrados no INPI (Glicemy, Glicemy API, CaptionEase, SignForest).",
};

export default function PesquisaPage() {
  return (
    <main className="relative flex flex-1 flex-col overflow-hidden">
      <div
        aria-hidden
        className="bg-grid bg-grid-fade pointer-events-none absolute inset-0 opacity-60"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/4 size-[420px] rounded-full opacity-25 blur-3xl"
        style={{ background: "radial-gradient(circle, #8b5cf6, transparent 70%)" }}
      />
      <span
        aria-hidden
        className="pointer-events-none absolute top-1/3 right-0 size-[420px] rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, #06b6d4, transparent 70%)" }}
      />

      <section className="relative mx-auto w-full max-w-6xl px-6 pt-32 pb-12 sm:pt-40 sm:pb-16">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Pesquisa & Inovação
        </span>
        <h1 className="mt-3 text-balance text-4xl font-bold tracking-tight sm:text-6xl">
          Da bancada ao paper —{" "}
          <span className="text-gradient">e do paper ao INPI.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          Mestrado em Computação Inteligente aprovado em 1º lugar, seis artigos
          publicados — dois premiados como melhor artigo — e quatro softwares
          registrados no Instituto Nacional da Propriedade Industrial. Pesquisa
          que sustenta o produto.
        </p>
      </section>

      <section className="relative mx-auto w-full max-w-6xl px-6 pb-24">
        <AcademicHero />
      </section>

      <section className="relative mx-auto w-full max-w-6xl px-6 pb-24">
        <ArticlesShowcase />
      </section>

      <section className="relative mx-auto w-full max-w-6xl px-6 pb-32">
        <PatentsGrid />
      </section>
    </main>
  );
}
