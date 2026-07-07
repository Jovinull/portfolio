"use client";

import { motion, type Variants } from "motion/react";
import {
  SiTypescript,
  SiJavascript,
  SiPython,
  SiCplusplus,
  SiPhp,

  SiNextdotjs,
  SiReact,
  SiVuedotjs,
  SiTailwindcss,
  SiAdonisjs,
  SiLaravel,
  SiSpringboot,
  SiNodedotjs,
  SiFastapi,
  SiPostgresql,
  SiRedis,
  SiMongodb,
  SiEspressif,
  SiDocker,
  SiGithubactions,
  SiMqtt,
  SiCmake,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

type Category = "Linguagens" | "Frontend" | "Backend" | "Infra & Hardware";

type Tool = {
  name: string;
  category: Category;
  icon: React.ElementType;
  usage: number;
};

const tools: Tool[] = [
  // Linguagens
  { name: "TypeScript", category: "Linguagens", icon: SiTypescript, usage: 95 },
  { name: "Python", category: "Linguagens", icon: SiPython, usage: 90 },
  { name: "C++", category: "Linguagens", icon: SiCplusplus, usage: 75 },
  { name: "PHP", category: "Linguagens", icon: SiPhp, usage: 85 },
  { name: "Java", category: "Linguagens", icon: FaJava, usage: 70 },
  { name: "JavaScript", category: "Linguagens", icon: SiJavascript, usage: 100 },

  // Frontend
  { name: "Next.js", category: "Frontend", icon: SiNextdotjs, usage: 95 },
  { name: "React / React Native", category: "Frontend", icon: SiReact, usage: 90 },
  { name: "Vue.js", category: "Frontend", icon: SiVuedotjs, usage: 75 },
  { name: "Tailwind CSS", category: "Frontend", icon: SiTailwindcss, usage: 100 },

  // Backend
  { name: "AdonisJS", category: "Backend", icon: SiAdonisjs, usage: 90 },
  { name: "Laravel", category: "Backend", icon: SiLaravel, usage: 85 },
  { name: "Spring Boot", category: "Backend", icon: SiSpringboot, usage: 75 },
  { name: "Node.js", category: "Backend", icon: SiNodedotjs, usage: 95 },
  { name: "FastAPI", category: "Backend", icon: SiFastapi, usage: 80 },

  // Infra & Hardware
  { name: "PostgreSQL", category: "Infra & Hardware", icon: SiPostgresql, usage: 95 },
  { name: "Docker", category: "Infra & Hardware", icon: SiDocker, usage: 90 },
  { name: "GitHub Actions", category: "Infra & Hardware", icon: SiGithubactions, usage: 85 },
  { name: "ESP32", category: "Infra & Hardware", icon: SiEspressif, usage: 85 },
  { name: "MongoDB", category: "Infra & Hardware", icon: SiMongodb, usage: 80 },
  { name: "Redis", category: "Infra & Hardware", icon: SiRedis, usage: 80 },
  { name: "MQTT", category: "Infra & Hardware", icon: SiMqtt, usage: 80 },
  { name: "CMake", category: "Infra & Hardware", icon: SiCmake, usage: 70 },
];

const categories: Category[] = ["Linguagens", "Frontend", "Backend", "Infra & Hardware"];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 10, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
};

export function TechStackGrid() {
  return (
    <div className="mx-auto w-full max-w-6xl">
      <div className="mb-10 text-center sm:text-left">
        <h2 className="text-3xl font-bold tracking-tight">Arsenal Tecnológico</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground sm:text-lg">
          Ferramentas, linguagens e plataformas que utilizo para transformar pesquisas, arquiteturas e regras de negócio em produtos escaláveis de ponta a ponta.
        </p>
      </div>

      <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((category) => (
          <div key={category} className="flex flex-col gap-5">
            <h3 className="font-mono text-sm uppercase tracking-widest text-primary">
              {category}
            </h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-10%" }}
              className="flex flex-col gap-3"
            >
              {tools
                .filter((t) => t.category === category)
                .sort((a, b) => b.usage - a.usage)
                .map((tool) => (
                  <motion.div
                    key={tool.name}
                    variants={itemVariants}
                    className="group relative flex items-center gap-4 rounded-2xl border border-border/50 bg-card/30 p-3 shadow-sm transition-all hover:border-primary/40 hover:bg-card/60 hover:shadow-md"
                  >
                    <div className="grid size-10 shrink-0 place-items-center rounded-xl bg-background text-foreground shadow-sm transition-colors group-hover:bg-primary/10 group-hover:text-primary">
                      <tool.icon className="size-5" />
                    </div>
                    <div className="flex flex-1 flex-col gap-1.5 overflow-hidden">
                      <div className="flex items-center justify-between">
                        <span className="truncate text-sm font-semibold">{tool.name}</span>
                      </div>
                      {/* Usage bar */}
                      <div className="h-1.5 w-full overflow-hidden rounded-full bg-border/60">
                        <motion.div
                          className="h-full bg-primary/80 transition-all duration-1000 ease-out"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${tool.usage}%` }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
