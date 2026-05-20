import type { Metadata } from "next";
import { CertificationsGrid } from "@/components/site/about/certifications-grid";
import { ChaptersTimeline } from "@/components/site/about/chapters-timeline";
import { ImpactMetrics } from "@/components/site/about/impact-metrics";
import { MomentsGrid } from "@/components/site/about/moments-grid";
import { NextLevelCallout } from "@/components/site/about/next-level-callout";
import { XghEasterEgg } from "@/components/site/about/xgh-easter-egg";
import { aboutHeadline, aboutKicker } from "@/lib/about";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Da curiosidade de queimar placas em Sergipe ao deeptech: a trajetória de Felipe Jovino unindo engenharia full-stack, pesquisa em IA, registros INPI e liderança técnica.",
  openGraph: {
    title: "Sobre — Felipe Jovino",
    description:
      "Três capítulos que unem hardware, ciência aplicada e deeptech. 4 softwares no INPI, 1º lugar no mestrado da UFS e liderança técnica em produto.",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sobre — Felipe Jovino",
    description:
      "Engenharia, pesquisa em IA e deeptech. Três capítulos de uma trajetória não-linear.",
  },
};

export default function SobrePage() {
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
          Manifesto · Trajetória
        </span>
        <h1 className="mt-3 text-balance text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
          Aprender não é linear.{" "}
          <span className="text-gradient">
            Da curiosidade de queimar placas à arquitetura de inteligência
            artificial.
          </span>
        </h1>
        <p className="sr-only">{aboutHeadline}</p>
        <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          {aboutKicker} Atuo na fronteira entre hardware, software e ciência
          aplicada — sempre com o produto e o usuário no centro.
        </p>
      </section>

      <section className="relative mx-auto w-full max-w-6xl px-6 pb-24">
        <ImpactMetrics />
      </section>

      <section className="relative mx-auto w-full max-w-6xl px-6 pb-24">
        <ChaptersTimeline />
      </section>

      <section className="relative mx-auto w-full max-w-6xl px-6 pb-20">
        <XghEasterEgg />
      </section>

      <section className="relative mx-auto w-full max-w-6xl px-6 pb-24">
        <MomentsGrid />
      </section>

      <section className="relative mx-auto w-full max-w-6xl px-6 pb-24">
        <NextLevelCallout />
      </section>

      <section className="relative mx-auto w-full max-w-6xl px-6 pb-32">
        <CertificationsGrid />
      </section>
    </main>
  );
}
