export type ProjectCategory = "Backend/API" | "Games";

export const projectFilterValues = ["Todos", "Backend/API", "Games"] as const;
export type ProjectFilter = (typeof projectFilterValues)[number];

export type ProjectStatus = "Ativo" | "Concluído" | "Em desenvolvimento";

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  category: ProjectCategory;
  cover: string;
  coverFit?: "cover" | "contain";
  coverPosition?: string;
  summaryShort: string;
  summaryLong: string;
  highlights: string[];
  stack: string[];
  status: ProjectStatus;
  links?: { label: string; href: string }[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "gateway-nacional",
    name: "CerneBR · Gateway Nacional",
    tagline: "Microserviço self-hosted para dados públicos brasileiros",
    category: "Backend/API",
    cover: "/images/projetos/gateway-nacional.png",
    coverFit: "contain",
    summaryShort:
      "Blinda aplicações brasileiras contra a instabilidade das APIs públicas com HedgedExecutor, cache revalidado em background e fallbacks isolados por circuit breaker.",
    summaryLong:
      "Microserviço self-hosted que blinda aplicações contra rate limits, quedas em cascata e formatos divergentes dos provedores públicos brasileiros (ViaCEP, ReceitaWS, IBGE, FIPE, DATASUS). O HedgedExecutor dispara requisições paralelas — o primeiro provedor a responder vence, o resto é cancelado. RefreshAheadCache revalida dados quentes em background via Virtual Threads do Java 25. Circuit Breakers (Resilience4j) isolados por upstream evitam falha em cascata. Sidecars opcionais com FlareSolverr (Chromium) e Selenium resolvem rotas com CAPTCHA e portais governamentais legados.",
    highlights: [
      "HedgedExecutor — requisições paralelas com cancelamento automático",
      "RefreshAheadCache em Virtual Threads (Java 25)",
      "Circuit Breakers Resilience4j isolados por upstream",
      "Stack completa (2GB) ou Modo Leve (~512MB de RAM)",
      "Portal de docs em Next.js 16 com playground interativo",
      "Testcontainers + WireMock + Playwright na CI",
    ],
    stack: [
      "Java 25",
      "Spring Boot 4",
      "Virtual Threads",
      "Redis",
      "Docker",
      "Resilience4j",
      "Testcontainers",
      "Next.js 16",
      "Playwright",
    ],
    status: "Ativo",
    links: [{ label: "cernebr.dev.br", href: "https://cernebr.dev.br" }],
    featured: true,
  },
  {
    slug: "ironmarch",
    name: "Iron March",
    tagline: "Roguelike de dark fantasy em C++20 puro",
    category: "Games",
    cover: "/images/projetos/ironmarch.png",
    coverFit: "cover",
    summaryShort:
      "Roguelike turn-based em grid ASCII escrito do zero em C++20 sobre ECS (EnTT). 10 andares procedurais, IA por facções, save binário e áudio sintetizado em runtime.",
    summaryLong:
      "Roguelike turn-based em grid ASCII (estilo NetHack/Brogue) escrito do zero em C++20 sobre arquitetura ECS rigorosa com EnTT. Dez andares procedurais — masmorra clássica ou caverna orgânica via cellular automata + flood fill — com ecologia viva onde monstros se atacam entre si por facções (Greenskin, Undead, Beast, Neutral). Save/load binário com cereal + entt::snapshot serializa o registry inteiro em ~1-2 KB. Áudio 100% procedural via miniaudio (PCM sintetizado em runtime, zero arquivos). Portabilidade absoluta: FetchContent + BearLibTerminal por plataforma, sem dependência de sistema.",
    highlights: [
      "ECS rigoroso com EnTT 3.13",
      "Geração procedural dual: masmorra + caverna (cellular automata)",
      "IA sistêmica por 5 facções com comportamento emergente",
      "Save binário versionado (~1-2 KB) via cereal + entt::snapshot",
      "Áudio sintetizado em runtime (square sweep, noise burst, arpejo)",
      "Build cross-platform sem instalar nada no sistema",
    ],
    stack: [
      "C++20",
      "CMake 3.20+",
      "EnTT (ECS)",
      "BearLibTerminal",
      "cereal",
      "miniaudio",
    ],
    status: "Em desenvolvimento",
    featured: true,
  },
  {
    slug: "idle-mine-redux",
    name: "Idle Mine: Redux",
    tagline: "Modernização tipada de um incremental game abandonado",
    category: "Games",
    cover: "/images/projetos/idle-mine-redux.png",
    coverFit: "contain",
    summaryShort:
      "Continuação modernizada de Idle Mine: Remix em Vue 3 + TypeScript strict, com aritmética de números infinitos e save backward-compatible com a versão original.",
    summaryLong:
      "Continuação independente de Idle Mine: Remix (veprogames, abandonado) — incremental game no navegador onde você minera pedras, compra upgrades e progride por dezenas de mundos. Reescrito em Vue 3 Composition API com TypeScript strict + Project References. Aritmética de números absurdamente grandes via break_infinity.js, formatação em múltiplas notações (Scientific, Engineering, Letters, Logarithm + IdleMineNotation/SI customizadas portadas do original). Save versionado em localStorage (v2) com backward-compat com saves do Remix (v1). Story milestones com requirement-functions tipadas substituem o antigo eval(string).",
    highlights: [
      "Vue 3 Composition API com SFCs e TypeScript strict",
      "Pinia composables com state em reactive() compartilhado",
      "Aritmética de números infinitos (break_infinity.js)",
      "Notações customizadas portadas do Idle Mine original",
      "Save backward-compatible (v1 do Remix → v2)",
      "Story milestones tipados — substitui eval(string)",
    ],
    stack: [
      "Vue 3",
      "TypeScript",
      "Pinia",
      "Vite 8",
      "break_infinity.js",
      "@antimatter-dimensions/notations",
      "ESLint 9",
    ],
    status: "Em desenvolvimento",
    featured: true,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export const projectFilters: { value: ProjectFilter; count: number }[] = [
  { value: "Todos", count: projects.length },
  { value: "Backend/API", count: projects.filter((p) => p.category === "Backend/API").length },
  { value: "Games", count: projects.filter((p) => p.category === "Games").length },
];
