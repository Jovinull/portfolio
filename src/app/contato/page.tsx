import type { Metadata } from "next";
import { PageShell } from "@/components/site/page-shell";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Vamos conversar sobre o próximo grande projeto, parceria ou oportunidade. Resposta rápida.",
};

export default function ContatoPage() {
  return (
    <PageShell
      eyebrow="Disponível para conversas"
      title="Construindo o próximo? Vamos falar."
      description="Aberto a oportunidades em Big Techs, parcerias deeptech, mentorias e palestras. Respondo rápido."
    >
      <div className="mt-8 rounded-xl border border-border bg-card/40 p-8 text-card-foreground backdrop-blur">
        {/* TODO: Form de contato + cards diretos (email, LinkedIn, GitHub, YouTube) */}
        <p className="text-muted-foreground">
          Em construção — formulário e canais diretos virão aqui.
        </p>
      </div>
    </PageShell>
  );
}
