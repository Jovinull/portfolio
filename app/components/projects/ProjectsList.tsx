'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { useMemo, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import type { WorkItem } from '@/app/types/assets';
import { fadeUp, staggerContainer } from '@/app/components/motion/variants';
import ProjectRowCard from './ProjectRowCard';

function normalize(v: string) {
  return (v || '').toLowerCase().trim();
}

export default function ProjectsList({ projects }: { projects: WorkItem[] }) {
  const reduced = useReducedMotion();
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = normalize(query);
    if (!q) return projects;

    return projects.filter((p) => {
      const hay = `${p.title} ${p.description}`;
      return normalize(hay).includes(q);
    });
  }, [projects, query]);

  return (
    <section className="mt-14 pb-16" aria-labelledby="projects-list-title">
      <motion.div
        variants={staggerContainer(!!reduced, 0.08, 0.02)}
        initial={reduced ? false : 'hidden'}
        whileInView={reduced ? undefined : 'show'}
        viewport={{ once: true, amount: 0.25 }}
      >
        <motion.div
          variants={fadeUp(!!reduced, { delay: 0 })}
          className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <h2 id="projects-list-title" className="font-display text-3xl">
              Demais projetos
            </h2>
          </div>

          <div className="relative w-full md:max-w-sm">
            <FiSearch
              aria-hidden="true"
              className="text-theme-secondary absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2"
            />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar por nome ou descrição..."
              className="w-full rounded-2xl border border-black/10 bg-white/60 py-3 pr-4 pl-11 text-sm shadow-sm backdrop-blur-md outline-none transition focus:ring-2 focus:ring-black/25 dark:border-white/10 dark:bg-white/5 dark:focus:ring-white/25"
            />
          </div>
        </motion.div>

        {filtered.length > 0 ? (
          <motion.ul variants={staggerContainer(!!reduced, 0.06, 0.02)} className="mt-6 space-y-4">
            {filtered.map((p, idx) => (
              <motion.li key={`${p.title}-${idx}`} variants={fadeUp(!!reduced, { distance: 14 })}>
                <ProjectRowCard project={p} index={idx} />
              </motion.li>
            ))}
          </motion.ul>
        ) : (
          <motion.div
            variants={fadeUp(!!reduced, { delay: 0.04 })}
            className="mt-8 rounded-3xl border border-black/10 bg-white/40 p-6 backdrop-blur-md dark:border-white/10 dark:bg-white/5"
          >
            <p className="text-theme-secondary">
              Nada encontrado para <span className="font-semibold">{query}</span>.
            </p>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}