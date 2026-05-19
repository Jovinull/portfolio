"use client";

import { aboutChapters } from "@/lib/about";
import { ChapterSection } from "./chapter-section";

export function ChaptersTimeline() {
  return (
    <div className="relative">
      {/* Vertical spine — visible only on lg+ */}
      <span
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 lg:block"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, color-mix(in oklab, var(--primary) 40%, transparent) 15%, color-mix(in oklab, var(--secondary) 40%, transparent) 85%, transparent 100%)",
        }}
      />

      <div className="space-y-28 sm:space-y-32 lg:space-y-40">
        {aboutChapters.map((chapter, index) => (
          <ChapterSection
            key={chapter.number}
            chapter={chapter}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
