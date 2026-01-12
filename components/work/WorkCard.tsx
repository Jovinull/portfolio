'use client';

import Image, { type StaticImageData } from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { FiSend } from 'react-icons/fi';
import type { WorkCardProps } from '@/types/components/workCard';

function resolveImageSrc(img: string | StaticImageData) {
  return typeof img === 'string' ? img : img.src;
}

export default function WorkCard({ project }: WorkCardProps) {
  const reduced = useReducedMotion();
  const imgSrc = resolveImageSrc(project.bgImage);

  return (
    <motion.article
      whileHover={reduced ? undefined : { y: -6 }}
      whileFocus={reduced ? undefined : { y: -6 }}
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
      className="group relative aspect-square overflow-hidden rounded-2xl ring-1 ring-black/10 transition-shadow duration-300 hover:shadow-xl focus-visible:shadow-xl focus-visible:ring-2 focus-visible:ring-black/30 focus-visible:outline-none dark:ring-white/10 dark:focus-visible:ring-white/30"
      aria-label={`${project.title} - ${project.description}`}
      tabIndex={0}
    >
      <Image
        src={imgSrc}
        alt=""
        aria-hidden="true"
        fill
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        className="object-cover transition-transform duration-500 group-hover:scale-[1.04] group-focus-visible:scale-[1.04]"
      />

      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/35 via-black/5 to-transparent dark:from-black/55" />

      <div
        role="tooltip"
        className="pointer-events-none absolute top-4 right-4 left-4 z-10 translate-y-1 rounded-xl bg-white/90 px-4 py-3 text-sm text-zinc-900 opacity-0 shadow-lg backdrop-blur-md transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 dark:bg-zinc-950/70 dark:text-zinc-50"
      >
        <p className="line-clamp-3 leading-relaxed">{project.description}</p>
      </div>

      <div className="absolute inset-x-4 bottom-4 z-10 flex items-center justify-between gap-4 rounded-xl bg-white/85 px-5 py-4 backdrop-blur-md transition-all duration-300 group-hover:bottom-5 dark:bg-zinc-950/60">
        <h3
          className="line-clamp-2 min-w-0 flex-1 text-sm leading-snug font-semibold text-zinc-900 md:text-base dark:text-zinc-50"
          title={project.title}
        >
          {project.title}
        </h3>

        <div className="shrink-0">
          <div className="flex aspect-square w-10 items-center justify-center rounded-full border border-black/70 bg-white/40 shadow-[2px_2px_0_rgba(0,0,0,0.75)] transition-all duration-200 group-hover:-translate-y-0.5 group-hover:bg-lime-300 dark:border-white/70 dark:bg-white/10 dark:shadow-[2px_2px_0_rgba(255,255,255,0.25)]">
            <FiSend aria-hidden="true" className="h-5 w-5" />
          </div>
        </div>
      </div>
    </motion.article>
  );
}
