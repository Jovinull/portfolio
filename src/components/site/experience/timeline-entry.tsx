"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import type { Experience } from "@/lib/experience";
import { ExperienceCard } from "./experience-card";
import { experienceIconMap } from "./icon-map";

type TimelineEntryProps = {
  experience: Experience;
  index: number;
};

export function TimelineEntry({ experience, index }: TimelineEntryProps) {
  const side: "left" | "right" = index % 2 === 0 ? "right" : "left";
  const { iconKey, current, period } = experience;
  const Icon = experienceIconMap[iconKey];

  return (
    <li className="relative">
      {/* Node on spine */}
      <div
        aria-hidden
        className="absolute top-7 left-5 z-10 -translate-x-1/2 md:left-1/2"
      >
        <span className="relative grid size-11 place-items-center rounded-full border border-border bg-card/90 backdrop-blur ring-4 ring-background transition-colors group-hover:border-primary/60">
          <span
            aria-hidden
            className="absolute inset-0 rounded-full opacity-70"
            style={{
              background:
                "radial-gradient(circle, color-mix(in oklab, var(--primary) 35%, transparent), transparent 70%)",
            }}
          />
          <Icon className="relative size-4 text-foreground" />
          {current && (
            <span className="absolute -right-0.5 -top-0.5 flex size-2.5">
              <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex size-2.5 rounded-full bg-emerald-400" />
            </span>
          )}
        </span>
      </div>

      {/* Period chip — visible only on desktop, opposite side of card */}
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute top-9 z-10 hidden md:block",
          side === "right" ? "right-[calc(50%+2.25rem)]" : "left-[calc(50%+2.25rem)]",
        )}
      >
        <span className="inline-flex items-center rounded-full border border-border bg-background/70 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground backdrop-blur">
          {period}
        </span>
      </div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 50, x: side === "right" ? 30 : -30 }}
        whileInView={{ opacity: 1, y: 0, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={cn(
          "group pl-14 md:pl-0",
          side === "right" ? "md:ml-[50%] md:pl-16" : "md:mr-[50%] md:pr-16",
        )}
      >
        <ExperienceCard experience={experience} />
      </motion.div>
    </li>
  );
}
