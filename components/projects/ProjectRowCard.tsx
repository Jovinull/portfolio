'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import type { WorkItem } from '@/types/assets';
import { FiStar } from 'react-icons/fi';

export default function ProjectRowCard({ project, index }: Readonly<{ project: WorkItem; index: number }>) {
  const reduced = useReducedMotion();

  return (
    <motion.article
      whileHover={reduced ? undefined : { y: -4 }}
      whileFocus={reduced ? undefined : { y: -4 }}
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
      className="group relative overflow-hidden rounded-3xl border border-black/10 bg-white/40 shadow-sm backdrop-blur-md transition-shadow hover:shadow-lg focus-visible:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30 dark:border-white/10 dark:bg-white/5 dark:focus-visible:ring-white/30"
      tabIndex={0}
      aria-label={`${project.title} - ${project.description}`}
    >
      <div className="grid gap-4 p-4 sm:grid-cols-[180px_1fr] sm:items-stretch">
        <div className="relative aspect-video overflow-hidden rounded-2xl ring-1 ring-black/10 sm:aspect-auto sm:h-full dark:ring-white/10">
          <Image
            src={project.bgImage}
            alt=""
            aria-hidden="true"
            fill
            sizes="180px"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.04] group-focus-visible:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/35 via-black/10 to-transparent" />
        </div>

        <div className="flex min-w-0 flex-col justify-between gap-3 py-1">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <h3 className="line-clamp-1 text-lg font-semibold">{project.title}</h3>
              <p className="text-theme-secondary mt-1 line-clamp-2 text-sm leading-relaxed">
                {project.description}
              </p>
            </div>

            {project.featured ? (
              <span className="inline-flex shrink-0 items-center gap-2 rounded-full border border-black/10 bg-white/60 px-3 py-1 text-xs font-semibold backdrop-blur-md dark:border-white/10 dark:bg-white/10">
                <FiStar aria-hidden="true" className="h-3.5 w-3.5" />
                Principal
              </span>
            ) : (
              <span className="text-theme-secondary inline-flex shrink-0 items-center rounded-full border border-black/10 bg-white/60 px-3 py-1 text-xs backdrop-blur-md dark:border-white/10 dark:bg-white/10">
                #{String(index + 1).padStart(2, '0')}
              </span>
            )}
          </div>

          <div className="text-theme-secondary flex items-center justify-between text-xs">
            <span>Foco: clareza + impacto</span>
            <span className="opacity-70">hover/foco para explorar</span>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_20%_10%,color-mix(in_srgb,var(--color-accent)_20%,transparent),transparent_60%)]" />
      </div>
    </motion.article>
  );
}