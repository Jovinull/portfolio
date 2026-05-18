"use client";

import { motion, type Variants } from "motion/react";
import { Mail, Copy, Check, Clock } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import {
  GithubIcon,
  LinkedinIcon,
  YoutubeIcon,
  WhatsappIcon,
} from "@/components/icons/brand-icons";
import { siteConfig } from "@/lib/site";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const socials = [
  {
    label: "LinkedIn",
    handle: "/in/jobas",
    href: siteConfig.social.linkedin,
    icon: LinkedinIcon,
  },
  {
    label: "GitHub",
    handle: "@Jovinull",
    href: siteConfig.social.github,
    icon: GithubIcon,
  },
  {
    label: "YouTube",
    handle: "Masters Tech",
    href: siteConfig.social.youtube,
    icon: YoutubeIcon,
  },
];

export function ContactInfo() {
  const [copied, setCopied] = useState(false);

  async function handleCopyEmail() {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setCopied(true);
      toast.success("E-mail copiado!", {
        description: siteConfig.email,
      });
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Não foi possível copiar.", {
        description: "Tente novamente ou use o link mailto.",
      });
    }
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="flex flex-col gap-8"
    >
      <motion.div variants={itemVariants}>
        <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/[0.05] px-3 py-1">
          <span className="relative inline-flex size-2">
            <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-emerald-300">
            Disponível para conversas
          </span>
        </span>
        <h1 className="mt-4 text-balance text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
          Vamos construir o <span className="text-gradient">próximo nível</span>{" "}
          juntos.
        </h1>
        <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          Seja para discutir arquiteturas escaláveis, soluções em IA,
          oportunidades de liderança técnica ou desenvolvimento de produtos
          inovadores. Preencha o formulário ou me chame nas redes.
        </p>
      </motion.div>

      <motion.ul variants={itemVariants} className="grid gap-3">
        <li>
          <div className="group relative flex items-center gap-4 overflow-hidden rounded-xl border border-border bg-card/40 p-4 backdrop-blur transition-colors hover:border-primary/40">
            <span className="grid size-11 shrink-0 place-items-center rounded-lg border border-border bg-background/60 text-primary">
              <Mail className="size-4" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                E-mail
              </p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="block truncate text-sm font-medium text-foreground transition-colors hover:text-primary"
              >
                {siteConfig.email}
              </a>
            </div>
            <button
              type="button"
              onClick={handleCopyEmail}
              aria-label="Copiar e-mail"
              className="grid size-9 shrink-0 place-items-center rounded-md border border-border bg-background/40 text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
            >
              {copied ? (
                <Check className="size-4 text-emerald-400" />
              ) : (
                <Copy className="size-4" />
              )}
            </button>
          </div>
        </li>

        <li>
          <a
            href={siteConfig.whatsapp.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-4 overflow-hidden rounded-xl border border-border bg-card/40 p-4 backdrop-blur transition-all hover:border-emerald-400/50"
          >
            <span className="grid size-11 shrink-0 place-items-center rounded-lg border border-border bg-background/60 text-emerald-400">
              <WhatsappIcon className="size-5" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                WhatsApp
              </p>
              <p className="text-sm font-medium text-foreground transition-colors group-hover:text-emerald-300">
                {siteConfig.whatsapp.display}
              </p>
            </div>
            <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground transition-colors group-hover:text-foreground">
              Abrir →
            </span>
          </a>
        </li>
      </motion.ul>

      <motion.div variants={itemVariants}>
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
          Encontre-me nas redes
        </p>
        <ul className="mt-3 grid gap-2 sm:grid-cols-3">
          {socials.map(({ label, handle, href, icon: Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-lg border border-border bg-card/40 px-3 py-2.5 backdrop-blur transition-colors hover:border-primary/40"
              >
                <Icon className="size-4 text-muted-foreground transition-colors group-hover:text-primary" />
                <div className="min-w-0">
                  <p className="text-xs font-medium text-foreground">{label}</p>
                  <p className="truncate font-mono text-[10px] text-muted-foreground">
                    {handle}
                  </p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="flex items-start gap-3 rounded-xl border border-dashed border-border/70 bg-background/30 p-4"
      >
        <Clock className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
        <div>
          <p className="text-sm font-medium text-foreground">
            Tempo médio de resposta
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            Costumo responder em menos de 24h em dias úteis. Para urgências,
            chame no WhatsApp.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
