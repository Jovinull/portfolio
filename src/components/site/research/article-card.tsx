"use client";

import Image from "next/image";
import {
  BadgeCheck,
  ExternalLink,
  FlaskConical,
  PenLine,
  Trophy,
  type LucideIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { Article, ArticleKind } from "@/lib/research";

const kindIcon: Record<ArticleKind, LucideIcon> = {
  scientific: FlaskConical,
  award: Trophy,
  essay: PenLine,
};

export function ArticleCard({ article }: { article: Article }) {
  const isPrimary = article.accent === "primary";
  const isAward = article.kind === "award";
  const Icon = kindIcon[article.kind];
  const hasCert = Boolean(article.certImagePath);

  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-border bg-card/40 backdrop-blur transition-all duration-500",
        isPrimary
          ? "hover:border-primary/50 hover:glow-primary"
          : "hover:border-secondary/50 hover:glow-secondary",
      )}
    >
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute -top-24 -right-24 size-56 rounded-full opacity-0 blur-3xl mix-blend-screen transition-opacity duration-500 group-hover:opacity-40",
        )}
        style={{
          background: isPrimary
            ? "radial-gradient(circle, #8b5cf6, transparent 70%)"
            : "radial-gradient(circle, #06b6d4, transparent 70%)",
        }}
      />

      <div
        className={cn(
          "relative grid gap-0",
          hasCert && "lg:grid-cols-[1.5fr_1fr]",
        )}
      >
        <div className="flex flex-col gap-4 p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-2">
            <span
              className={cn(
                "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em]",
                isAward
                  ? "border-amber-400/40 bg-amber-400/[0.08] text-amber-200"
                  : isPrimary
                    ? "border-primary/30 bg-primary/[0.08] text-primary"
                    : "border-secondary/30 bg-secondary/[0.08] text-secondary",
              )}
            >
              <Icon className="size-3" />
              {article.kindLabel}
            </span>

            {article.qualis && (
              <Badge
                variant="outline"
                className="border-emerald-400/40 bg-emerald-400/[0.06] gap-1.5"
              >
                <BadgeCheck className="size-3 text-emerald-300" />
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-emerald-200">
                  {article.qualis}
                </span>
              </Badge>
            )}

            {article.award && (
              <Badge
                variant="outline"
                className="gap-1 border-amber-400/40 bg-amber-400/[0.06] font-mono text-[10px] uppercase tracking-[0.16em] text-amber-200"
              >
                <Trophy className="size-2.5" />
                {article.award}
              </Badge>
            )}
          </div>

          <h3 className="text-balance text-xl font-semibold leading-snug tracking-tight sm:text-2xl">
            {article.title}
          </h3>

          {article.awardContext && (
            <p className="-mt-2 text-sm font-medium text-amber-200/90">
              {article.awardContext}
            </p>
          )}

          <div className="flex flex-col gap-1 border-l-2 border-border pl-3">
            <p className="text-sm font-medium text-foreground">{article.venue}</p>
            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
              {article.venueMeta}
              {article.issn ? ` · ${article.issn}` : ""}
            </p>
          </div>

          <div className="flex flex-col gap-1">
            <span
              className={cn(
                "w-fit font-mono text-[10px] uppercase tracking-[0.18em]",
                isPrimary ? "text-primary/90" : "text-secondary/90",
              )}
            >
              {article.role}
            </span>
            <p className="text-xs leading-relaxed text-muted-foreground">
              {article.authors}
            </p>
          </div>

          <p className="text-pretty text-sm leading-relaxed text-foreground/85">
            {article.summary}
          </p>

          {article.highlights && (
            <ul className="flex flex-col gap-2">
              {article.highlights.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm">
                  <span
                    aria-hidden
                    className={cn(
                      "mt-1.5 size-1.5 shrink-0 rounded-full",
                      isPrimary ? "bg-primary/70" : "bg-secondary/70",
                    )}
                  />
                  <span className="flex-1 text-pretty leading-snug text-foreground/90">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          )}

          <div className="mt-1 flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-border bg-background/50 px-2 py-1 font-mono text-[10px] uppercase tracking-wide text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>

          {(article.link || article.doi) && (
            <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 pt-2">
              {article.link && (
                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "inline-flex items-center gap-1.5 text-sm font-medium underline-offset-4 hover:underline",
                    isPrimary ? "text-primary" : "text-secondary",
                  )}
                >
                  {article.linkLabel ?? "Ler artigo"}
                  <ExternalLink className="size-3.5" />
                </a>
              )}
              {article.doi && (
                <a
                  href={`https://doi.org/${article.doi}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground underline-offset-4 transition-colors hover:text-foreground"
                >
                  DOI {article.doi}
                </a>
              )}
            </div>
          )}
        </div>

        {hasCert && (
          <a
            href={article.certImagePath}
            target="_blank"
            rel="noopener noreferrer"
            className="group/cert relative block min-h-56 overflow-hidden border-t border-border bg-background lg:border-t-0 lg:border-l"
            aria-label="Abrir certificado oficial em nova aba"
          >
            <Image
              src={article.certImagePath as string}
              alt={article.certAlt ?? article.title}
              fill
              sizes="(min-width: 1024px) 420px, 100vw"
              className="object-cover object-center transition-transform duration-700 group-hover/cert:scale-[1.04]"
            />
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent"
            />
            <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full border border-amber-400/40 bg-background/80 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-amber-200 backdrop-blur">
              <Trophy className="size-3" />
              Certificado oficial
            </span>
            <span className="absolute top-3 right-3 inline-flex items-center gap-1.5 rounded-full border border-border bg-background/80 px-2 py-1 font-mono text-[10px] text-muted-foreground opacity-0 backdrop-blur transition-opacity duration-300 group-hover/cert:opacity-100">
              Ampliar
              <ExternalLink className="size-3" />
            </span>
          </a>
        )}
      </div>
    </article>
  );
}
