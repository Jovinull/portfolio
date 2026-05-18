"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import type { Experience } from "@/lib/experience";
import { TimelineEntry } from "./timeline-entry";

type TimelineProps = {
  experiences: Experience[];
};

export function Timeline({ experiences }: TimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 60%", "end 40%"],
  });
  const fillHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef} className="relative">
      {/* Static spine track */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-5 w-px -translate-x-1/2 bg-border md:left-1/2"
      />

      {/* Animated brand-gradient fill */}
      <motion.div
        aria-hidden
        style={{
          height: fillHeight,
          background:
            "linear-gradient(to bottom, color-mix(in oklab, var(--primary) 0%, transparent), var(--primary) 18%, var(--secondary) 82%, color-mix(in oklab, var(--secondary) 0%, transparent))",
        }}
        className="pointer-events-none absolute top-0 left-5 w-px -translate-x-1/2 origin-top md:left-1/2"
      />

      {/* Spine glow */}
      <motion.div
        aria-hidden
        style={{ height: fillHeight }}
        className="pointer-events-none absolute top-0 left-5 w-[3px] -translate-x-1/2 origin-top blur-md opacity-60 md:left-1/2"
      >
        <div
          className="size-full"
          style={{
            background:
              "linear-gradient(to bottom, var(--primary), var(--secondary))",
          }}
        />
      </motion.div>

      <ul className="relative flex flex-col gap-16 md:gap-24">
        {experiences.map((exp, i) => (
          <TimelineEntry key={exp.slug} experience={exp} index={i} />
        ))}
      </ul>
    </div>
  );
}
