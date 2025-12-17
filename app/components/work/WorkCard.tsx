import Image from 'next/image';
import { assets } from '@/assets/assets';
import type { CSSProperties } from 'react';
import type { WorkCardProps } from '@/app/types/components/workCard';

export default function WorkCard({ project }: WorkCardProps) {
  const style: CSSProperties = {
    backgroundImage: `url(${project.bgImage})`,
  };

  return (
    <article
      className="group relative aspect-square cursor-pointer overflow-hidden rounded-lg bg-cover bg-center bg-no-repeat"
      style={style}
      aria-label={`${project.title} - ${project.description}`}
      tabIndex={0}
    >
      {/* Tooltip (descrição) */}
      <div
        role="tooltip"
        className="pointer-events-none absolute top-4 right-4 left-4 z-10 translate-y-1 rounded-md bg-white/95 px-4 py-3 text-sm text-zinc-900 opacity-0 shadow-lg transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 dark:bg-zinc-900/95 dark:text-zinc-50"
      >
        {project.description}
      </div>

      {/* Barra inferior (só título + ícone) */}
      <div className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-4 rounded-md bg-white/90 px-5 py-3 transition-all duration-300 group-hover:bottom-5 dark:bg-zinc-900/90">
        <h3 className="min-w-0 text-base font-semibold text-zinc-900 dark:text-zinc-50">
          {project.title}
        </h3>

        <div className="shrink-0">
          <div className="flex aspect-square w-9 items-center justify-center rounded-full border border-black shadow-[2px_2px_0_#000] transition group-hover:bg-lime-300 dark:border-zinc-200 dark:shadow-[2px_2px_0_rgba(255,255,255,0.35)]">
            <Image src={assets.send_icon} alt="abrir" width={20} height={20} />
          </div>
        </div>
      </div>
    </article>
  );
}
