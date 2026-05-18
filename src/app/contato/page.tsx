import type { Metadata } from "next";
import { ContactForm } from "@/components/site/contact/contact-form";
import { ContactInfo } from "@/components/site/contact/contact-info";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Vamos construir o próximo nível juntos — oportunidades de liderança técnica, parcerias deeptech, IA aplicada e desenvolvimento de produtos.",
};

export default function ContatoPage() {
  return (
    <main className="relative flex flex-1 flex-col overflow-hidden">
      {/* Background ambient layers */}
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
        className="pointer-events-none absolute -bottom-40 right-1/4 size-[420px] rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, #06b6d4, transparent 70%)" }}
      />

      <section className="relative mx-auto w-full max-w-6xl px-6 pt-32 pb-24 sm:pt-40 sm:pb-32">
        <div className="grid items-start gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          <ContactInfo />
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
