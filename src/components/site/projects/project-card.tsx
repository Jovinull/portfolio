"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { Project } from "@/lib/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const {
    name,
    tagline,
    category,
    cover,
    coverFit = "cover",
    coverPosition = "center",
    summaryShort,
    stack,
    status,
    links,
  } = project;

  const primaryLink = links?.[0];

  return (
    <Card className="group relative flex h-full flex-col overflow-hidden border-border bg-card/40 backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--glow-primary)]">
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

      <div className="relative aspect-[5/3] overflow-hidden border-b border-border bg-background/40">
        <Image
          src={cover}
          alt={`Cover do projeto ${name}`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className={cn(
            "transition-transform duration-700 group-hover:scale-105",
            coverFit === "contain" ? "object-contain p-6" : "object-cover",
          )}
          style={{ objectPosition: coverPosition }}
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-card via-card/40 to-transparent" />
        <Badge
          variant="outline"
          className="absolute top-3 left-3 border-border bg-background/70 backdrop-blur"
        >
          {category}
        </Badge>
        {status === "Ativo" && (
          <Badge
            variant="outline"
            className="absolute top-3 right-3 gap-1.5 border-emerald-400/40 bg-background/70 backdrop-blur"
          >
            <span className="relative inline-flex size-1.5">
              <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400 opacity-70" />
              <span className="relative inline-flex size-1.5 rounded-full bg-emerald-400" />
            </span>
            <span className="font-mono text-[10px] uppercase tracking-wider">{status}</span>
          </Badge>
        )}
      </div>

      <CardHeader className="relative">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              {tagline}
            </p>
            <CardTitle className="mt-1 text-lg leading-snug text-foreground">{name}</CardTitle>
          </div>
          <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
        </div>
      </CardHeader>

      <CardContent className="relative flex flex-1 flex-col gap-4">
        <p className="text-sm leading-relaxed text-muted-foreground">{summaryShort}</p>
        <div className="mt-auto flex flex-wrap gap-1.5">
          {stack.slice(0, 6).map((tech) => (
            <Badge
              key={tech}
              variant="outline"
              className="border-border bg-background/40 font-mono text-[10px] tracking-wide text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
            >
              {tech}
            </Badge>
          ))}
        </div>
        {primaryLink && (
          <a
            href={primaryLink.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link inline-flex w-fit items-center gap-1.5 text-xs font-medium text-foreground/80 transition-colors hover:text-foreground"
          >
            {primaryLink.label}
            <ArrowUpRight className="size-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
          </a>
        )}
      </CardContent>
    </Card>
  );
}
