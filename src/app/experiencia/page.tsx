import type { Metadata } from "next";
import { PageShell } from "@/components/site/page-shell";
import { Timeline } from "@/components/site/experience/timeline";
import { experiences } from "@/lib/experience";

export const metadata: Metadata = {
  title: "Experiência",
  description:
    "De pesquisador no IFS a Coordenador de TI na WM Saúde e Co-Founder de deeptech: a trajetória de Felipe Jovino em squads, deeptech e produto.",
};

const stats = [
  { value: experiences.length.toString(), label: "Empresas" },
  {
    value: experiences.filter((e) => e.current).length.toString(),
    label: "Atuações ativas",
  },
  { value: "5+", label: "Anos em código" },
  { value: "10+", label: "Stacks dominadas" },
];

export default function ExperienciaPage() {
  return (
    <PageShell
      eyebrow="Trajetória profissional"
      title="Da bancada de pesquisa à liderança de TI."
      description="Cinco anos construindo do firmware ao produto: pesquisa aplicada no IFS, deeptech acelerada pelo Sebrae, fundação de empresa e coordenação técnica em saúde digital."
    >
      <dl className="mt-4 mb-16 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="relative overflow-hidden rounded-xl border border-border bg-card/40 p-4 backdrop-blur transition-colors hover:border-primary/40"
          >
            <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              {stat.label}
            </dt>
            <dd className="mt-1 text-2xl font-bold sm:text-3xl">
              <span className="text-gradient">{stat.value}</span>
            </dd>
          </div>
        ))}
      </dl>

      <Timeline experiences={experiences} />
    </PageShell>
  );
}
