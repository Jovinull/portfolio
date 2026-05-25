import type { Metadata } from "next";
import { GraduationCap } from "lucide-react";
import { EducationStats } from "@/components/site/education/education-stats";
import { FeaturedCredentials } from "@/components/site/education/featured-credentials";
import { TeachingGrid } from "@/components/site/education/teaching-grid";
import { LearningCatalog } from "@/components/site/education/learning-catalog";
import { academicHighlights } from "@/lib/education";

export const metadata: Metadata = {
  title: "Formação",
  description:
    "Mais de 100 certificados em 13 instituições — Oracle, Microsoft, Huawei, Sebrae, IEEE e IFS. Certificações em IA e cloud, formação acadêmica e atuação como instrutor de Python.",
  openGraph: {
    title: "Formação & Certificações — Felipe Jovino",
    description:
      "Oracle OCI AI Foundations, Microsoft Azure (AZ-900/AI-900), Huawei HCIA-AI, Sebrae Catalisa ICT e +100 certificados. POSCOMP acima da média nacional e mestrado em 1º lugar.",
    type: "profile",
  },
};

export default function FormacaoPage() {
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
          Formação & Certificações
        </span>
        <h1 className="mt-3 text-balance text-4xl font-bold tracking-tight sm:text-6xl">
          Aprender é meu{" "}
          <span className="text-gradient">estado-padrão.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          Mais de cem certificados em treze instituições — de fundamentos de IA na
          Oracle e na Huawei a microeletrônica com o IEEE. Certificações de
          fabricante, formação acadêmica de ponta e anos ensinando programação.
        </p>
      </section>

      <section className="relative mx-auto w-full max-w-6xl px-6 pb-24">
        <EducationStats />
      </section>

      <section className="relative mx-auto w-full max-w-6xl px-6 pb-24">
        <FeaturedCredentials />
      </section>

      <section className="relative mx-auto w-full max-w-6xl px-6 pb-24">
        <div className="mb-10">
          <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <GraduationCap className="size-3.5 text-primary" />
            Trajetória acadêmica formal
          </span>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Da graduação ao <span className="text-gradient">mestrado.</span>
          </h2>
        </div>
        <div className="grid auto-rows-fr gap-6 lg:grid-cols-3">
          {academicHighlights.map((item) => (
            <article
              key={item.slug}
              className={`relative flex flex-col gap-3 overflow-hidden rounded-2xl border border-border bg-card/40 p-6 backdrop-blur transition-colors duration-500 ${
                item.accent === "primary"
                  ? "hover:border-primary/40"
                  : "hover:border-secondary/40"
              }`}
            >
              <span
                className={`w-fit font-mono text-[11px] uppercase tracking-[0.18em] ${
                  item.accent === "primary" ? "text-primary/90" : "text-secondary/90"
                }`}
              >
                {item.period}
              </span>
              <h3 className="text-balance text-lg font-semibold leading-snug tracking-tight">
                {item.title}
              </h3>
              <p className="text-xs text-muted-foreground">{item.org}</p>
              <p className="mt-auto pt-2 text-sm leading-relaxed text-foreground/80">
                {item.detail}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-6xl px-6 pb-24">
        <TeachingGrid />
      </section>

      <section className="relative mx-auto w-full max-w-6xl px-6 pb-32">
        <LearningCatalog />
      </section>
    </main>
  );
}
