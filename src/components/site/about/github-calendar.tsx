"use client";

import { motion } from "motion/react";

export function GithubCalendar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center gap-6"
    >
      <div className="text-center">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Atividade Open Source
        </h2>
        <p className="mt-2 text-muted-foreground">
          Constância e evolução contínua. Meus commits e contribuições no GitHub.
        </p>
      </div>

      <div className="w-full overflow-x-auto rounded-xl border border-border bg-card/40 p-6 backdrop-blur">
        <div className="min-w-[800px]">
          {/* We use an img proxy for the github calendar. 
              The Jovinull is hardcoded based on the user's github username. 
              ghchart supports custom colors via url param. */}
          <img
            src="https://ghchart.rshah.org/8b5cf6/Jovinull"
            alt="GitHub Contributions Calendar"
            className="w-full opacity-90 dark:invert-[0.9] dark:hue-rotate-[180deg]"
            style={{ filter: "drop-shadow(0 0 8px rgba(139, 92, 246, 0.1))" }}
          />
        </div>
      </div>
    </motion.div>
  );
}
