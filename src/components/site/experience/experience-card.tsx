"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import type { Experience } from "@/lib/experience";

type ExperienceCardProps = {
  experience: Experience;
};

export function ExperienceCard({ experience }: ExperienceCardProps) {
  const {
    slug,
    company,
    subtitle,
    logoAlt,
    period,
    current,
    type,
    roles,
    description,
    impact,
    stack,
    link,
  } = experience;

  return (
    <Card className="group relative overflow-hidden border-border bg-card/60 backdrop-blur transition-all duration-500 hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-[var(--glow-primary)]">
      <span
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-24 size-56 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-70"
        style={{ background: "radial-gradient(circle, #8b5cf6, transparent 70%)" }}
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -left-24 size-56 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-60"
        style={{ background: "radial-gradient(circle, #06b6d4, transparent 70%)" }}
      />

      <CardHeader className="relative flex flex-row items-start gap-4">
        <div className="relative grid size-14 shrink-0 place-items-center overflow-hidden rounded-xl border border-border bg-background/80 backdrop-blur">
          <Image
            src={`/images/experience/${slug}.png`}
            alt={`Logo ${logoAlt}`}
            width={56}
            height={56}
            className="size-full object-contain p-2"
          />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-lg font-semibold tracking-tight">{company}</h3>
            <Badge variant="outline" className="border-primary/40 text-[10px] uppercase tracking-wider">
              {type}
            </Badge>
            {current && (
              <Badge variant="outline" className="gap-1.5 border-emerald-400/40 text-[10px] uppercase tracking-wider">
                <span className="relative inline-flex size-1.5">
                  <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400 opacity-70" />
                  <span className="relative inline-flex size-1.5 rounded-full bg-emerald-400" />
                </span>
                Atual
              </Badge>
            )}
          </div>
          {subtitle && (
            <p className="mt-0.5 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
              {subtitle}
            </p>
          )}
          <p className="mt-2 font-mono text-xs text-muted-foreground">{period}</p>
        </div>
      </CardHeader>

      <CardContent className="relative space-y-5">
        <ul className="space-y-2">
          {roles.map((role) => (
            <li
              key={role.title}
              className="flex items-baseline justify-between gap-3 rounded-md border border-dashed border-border/70 bg-background/30 px-3 py-2"
            >
              <span className="text-sm font-medium text-foreground">
                {role.title}
                {role.current && (
                  <span className="ml-2 align-middle text-[10px] font-mono uppercase tracking-wider text-primary">
                    · atual
                  </span>
                )}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                {role.period}
              </span>
            </li>
          ))}
        </ul>

        <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>

        {impact && (
          <div className="relative rounded-lg border border-primary/25 bg-primary/[0.06] p-4">
            <span className="absolute -top-2 left-3 rounded-full border border-primary/30 bg-background px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.18em] text-primary">
              Impacto
            </span>
            <p className="text-sm leading-relaxed text-foreground/90">{impact}</p>
          </div>
        )}

        <div>
          <Separator className="mb-3 opacity-50" />
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
        </div>

        <div className="flex flex-wrap items-center gap-4">
          {slug === "accesssim" && (
            <Button
              variant="default"
              size="sm"
              className="gap-1.5 rounded-full"
              render={<Link href="/accesssim" />}
            >
              Conhecer Deeptech AccessSim
              <ArrowRight className="size-3.5" />
            </Button>
          )}

          {link && (
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link inline-flex items-center gap-1.5 text-xs font-medium text-foreground/80 transition-colors hover:text-foreground"
            >
              {link.label}
              <ArrowUpRight className="size-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
