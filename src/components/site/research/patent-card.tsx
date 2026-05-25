"use client";

import Image from "next/image";
import {
  Activity,
  Captions,
  ExternalLink,
  Server,
  ShieldCheck,
  Trees,
  Users,
  type LucideIcon,
} from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import type { Patent, PatentIconKey } from "@/lib/research";

const iconMap: Record<PatentIconKey, LucideIcon> = {
  activity: Activity,
  server: Server,
  captions: Captions,
  trees: Trees,
};

type PatentCardProps = {
  patent: Patent;
};

export function PatentCard({ patent }: PatentCardProps) {
  const {
    name,
    category,
    iconKey,
    inpiCode,
    inpiIssuedAt,
    legalBasis,
    description,
    stack,
    coauthors,
    certImagePath,
    certAlt,
    certHref,
    span,
  } = patent;
  const Icon = iconMap[iconKey];
  const isWide = span === "wide";

  return (
    <Card
      className="group relative flex h-full flex-col overflow-hidden border-border bg-card/40 backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[var(--glow-primary)]"
    >
      <span
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-24 size-56 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-60"
        style={{ background: "radial-gradient(circle, #8b5cf6, transparent 70%)" }}
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -left-24 size-56 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-50"
        style={{ background: "radial-gradient(circle, #06b6d4, transparent 70%)" }}
      />

      {/* Cabeçalho real do certificado INPI (brasão, título oficial e nº do processo). */}
      <div className="relative aspect-[5/2] overflow-hidden border-b border-border bg-muted">
        <Image
          src={certImagePath}
          alt={certAlt}
          fill
          sizes={isWide ? "(min-width: 1024px) 760px, 100vw" : "(min-width: 1024px) 380px, 100vw"}
          className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-background via-background/15 to-transparent"
        />
        <Badge
          variant="outline"
          className="absolute bottom-3 left-3 gap-1.5 border-emerald-400/40 bg-background/70 backdrop-blur"
        >
          <ShieldCheck className="size-3 text-emerald-300" />
          <span className="font-mono text-[10px] uppercase tracking-wider text-emerald-200">
            INPI · Verificado
          </span>
        </Badge>
        <span className="absolute right-3 bottom-3 max-w-[55%] truncate font-mono text-[10px] uppercase tracking-[0.16em] text-foreground/80">
          {inpiCode}
        </span>
      </div>

      <CardHeader className="relative">
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
          {category}
        </p>
        <h3 className="mt-1 flex items-center gap-2 text-xl font-semibold tracking-tight text-foreground">
          <Icon className="size-5 shrink-0 text-primary" />
          {name}
        </h3>
        <p className="mt-2 font-mono text-[11px] text-muted-foreground">
          {inpiIssuedAt}
          {legalBasis && <span className="ml-2 text-foreground/40">·</span>}
          {legalBasis && <span className="ml-2">{legalBasis}</span>}
        </p>
      </CardHeader>

      <CardContent className="relative flex flex-1 flex-col gap-5">
        <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>

        {coauthors && (
          <div className="flex items-start gap-2 rounded-lg border border-dashed border-border/70 bg-background/30 p-3">
            <Users className="mt-0.5 size-4 shrink-0 text-secondary" />
            <p className="text-xs leading-relaxed text-foreground/80">{coauthors}</p>
          </div>
        )}

        <div className="mt-auto space-y-3">
          <Separator className="opacity-50" />
          <div className="flex flex-wrap gap-1.5">
            {stack.map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="border-border bg-background/40 font-mono text-[10px] tracking-wide text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
              >
                {tech}
              </Badge>
            ))}
          </div>
          <a
            href={certHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-1.5 text-sm font-medium text-primary underline-offset-4 transition-colors hover:underline"
          >
            Ver certificado oficial
            <ExternalLink className="size-3.5" />
          </a>
        </div>
      </CardContent>
    </Card>
  );
}
