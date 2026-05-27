"use client";

import { motion, type Variants } from "motion/react";
import { ScrollText } from "lucide-react";
import { ArticleCard } from "./article-card";
import { articles } from "@/lib/research";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 16, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function ArticlesShowcase() {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-5%" }}
      className="relative"
    >
      <motion.header variants={headerVariants} className="mb-10">
        <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <ScrollText className="size-3.5 text-primary" />
          Publicações · Artigos & ensaios
        </span>
        <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
          Seis trabalhos — <span className="text-gradient">cada um com sua história.</span>
        </h2>
        <p className="mt-4 max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
          De um benchmark de Libras com aprendizado de máquina a ensaios sobre a
          ética da IA e a educação aberta. Pesquisa publicada em periódicos com
          Qualis, anais da SBC e revistas acadêmicas — com dois prêmios de melhor
          artigo no IFS.
        </p>
      </motion.header>

      <div className="flex flex-col gap-6">
        {articles.map((article) => (
          <motion.div key={article.slug} variants={cardVariants}>
            <ArticleCard article={article} />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
