export type AboutChapter = {
  number: string;
  era: string;
  title: string;
  subtitle: string;
  body: string;
  highlights: string[];
  imagePath: string;
  imageHint: string;
  imageCaption: string;
  accent: "primary" | "secondary";
};

export type AboutMetric = {
  value: string;
  label: string;
  hint: string;
  accent: "primary" | "secondary";
};

export const aboutHeadline =
  "Aprender não é linear. Da curiosidade de queimar placas na adolescência à liderança técnica de times e arquitetura de inteligência artificial.";

export const aboutKicker =
  "Trajetória de Felipe Jovino — engenheiro full-stack, pesquisador em IA e líder técnico.";

export const aboutMetrics: AboutMetric[] = [
  {
    value: "+10",
    label: "Anos em tecnologia",
    hint: "Da bancada de eletrônica ao deeptech",
    accent: "primary",
  },
  {
    value: "4",
    label: "Softwares no INPI",
    hint: "Glicemy · Glicemy API · CaptionEase · SignForest",
    accent: "secondary",
  },
  {
    value: "1º",
    label: "Lugar — Mestrado UFS",
    hint: "Edital PROCC/POSGRAP nº 04/2025",
    accent: "primary",
  },
  {
    value: "<12m",
    label: "Júnior → Coordenador",
    hint: "Trajetória de liderança na WM Saúde",
    accent: "secondary",
  },
];

export const aboutChapters: AboutChapter[] = [
  {
    number: "01",
    era: "Origem · Lagarto/SE",
    title: "A faísca e a resiliência.",
    subtitle: "Onde a engenharia começa antes da engenharia.",
    body:
      "Minha curiosidade pela tecnologia começou cedo, em Sergipe (Lagarto, Colônia 13). Eu desmontava, montava e testava computadores por conta própria. Enfrentei noites frustrantes, queimei equipamentos e lidei com códigos que não funcionavam, descobrindo ali que a engenharia se constrói na resiliência e no aprendizado prático.",
    highlights: [
      "Eletrônica e hardware autodidata",
      "Primeiros códigos por tentativa e erro",
      "Mentalidade builder desde a adolescência",
    ],
    imagePath: "/images/sobre/capitulo-01-origem.jpg",
    imageHint:
      "Foto pessoal da bancada de eletrônica / setup antigo / primeiros computadores em Colônia 13 (Lagarto/SE).",
    imageCaption: "Bancada de eletrônica · Lagarto/SE",
    accent: "primary",
  },
  {
    number: "02",
    era: "IFS · LABIC · 2020 — 2024",
    title: "O crisol acadêmico e científico.",
    subtitle: "3 anos e 11 meses no LABIC — IA, ML e IoT de baixo nível.",
    body:
      "No Instituto Federal de Sergipe (IFS), cursando Sistemas de Informação (onde entrei em 1º lugar geral), encontrei meu espaço para desafios reais. Passei 3 anos e 11 meses no LABIC (Laboratório de Inovação e Criatividade) pesquisando Inteligência Artificial, Machine Learning e IoT de baixo nível (ESP32). Fui monitor de Estrutura de Dados, liderei competições como o Robocode na SNCT e ganhei prêmios de melhor artigo científico por pesquisas que conectam IA ao impacto social e à ética.",
    highlights: [
      "1º lugar no vestibular do IFS",
      "Monitor de Estrutura de Dados",
      "Líder do Robocode na SNCT",
      "Prêmios SEMEXT 2024 e SNCT 2024",
    ],
    imagePath: "/images/sobre/capitulo-02-labic.jpg",
    imageHint:
      "Foto no LABIC / bancadas com ESP32 / palestras científicas no IFS / cerimônia de premiação SEMEXT ou SNCT.",
    imageCaption: "LABIC · Instituto Federal de Sergipe",
    accent: "secondary",
  },
  {
    number: "03",
    era: "WM Saúde · AccessSim · 2024 — Presente",
    title: "Engenharia, liderança e deeptech.",
    subtitle: "Do júnior à coordenação em menos de um ano. CTO em uma deeptech do Sebrae Catalisa ICT.",
    body:
      "Profissionalmente, evoluí rápido no ecossistema Full-Stack (Next.js, AdonisJS, Node, Java/Spring, PostgreSQL). Na WM Saúde, passei de Desenvolvedor Júnior a Coordenador de TI em menos de um ano, liderando squads, desenhando políticas de governança (GitFlow, Azure DevOps) e blindando arquiteturas (RBAC, LGPD). Paralelamente, transformei minha pesquisa científica em uma deeptech real acelerada pelo Sebrae Catalisa ICT: a AccessSim, onde atuo como CTO desenvolvendo motores de IA e Realidade Aumentada para acessibilidade arquitetônica (NBR 9050).",
    highlights: [
      "Coordenador de TI · WM Saúde",
      "CTO · AccessSim (Sebrae Catalisa ICT)",
      "Governança: GitFlow, Azure DevOps, RBAC, LGPD",
      "Motores de IA + AR para NBR 9050",
    ],
    imagePath: "/images/sobre/capitulo-03-lideranca.jpg",
    imageHint:
      "Foto liderando squad / reunião de produto / palco de evento de tecnologia / cerimônia do Sebrae Catalisa ICT.",
    imageCaption: "Liderança técnica · AccessSim",
    accent: "primary",
  },
];

export type AboutMoment = {
  slug: string;
  imagePath: string;
  alt: string;
  caption: string;
  context: string;
  badge?: string;
  accent: "primary" | "secondary";
  span?: "wide" | "default";
};

export const aboutMoments: AboutMoment[] = [
  {
    slug: "ideathon-aracaju",
    imagePath: "/images/sobre/momento-ideathon-aracaju.jpg",
    alt:
      "Felipe Jovino com equipe segurando placa de 2º lugar — Ideathon Prefeitura de Aracaju & Governo de Sergipe — R$ 3.000",
    caption: "2º lugar — Ideathon Aracaju",
    context: "Prefeitura de Aracaju + Governo de Sergipe · R$ 3.000",
    badge: "Premiado",
    accent: "primary",
    span: "wide",
  },
  {
    slug: "csbc-2023",
    imagePath: "/images/sobre/momento-csbc-2023.jpg",
    alt: "Equipe LABIC no 43º Congresso da Sociedade Brasileira de Computação",
    caption: "43º CSBC · 2023",
    context: "Congresso da Sociedade Brasileira de Computação",
    accent: "secondary",
    span: "default",
  },
  {
    slug: "premiacao-voucher",
    imagePath: "/images/sobre/momento-premiacao-voucher.jpg",
    alt: "Cerimônia de premiação Voucher Logn no programa Inova IFS-ABLab",
    caption: "Voucher Logn",
    context: "Programa de Inovação IFS",
    badge: "Premiado",
    accent: "primary",
    span: "default",
  },
  {
    slug: "laboratorio-candid",
    imagePath: "/images/sobre/momento-laboratorio-candid.jpg",
    alt: "Felipe Jovino debugando código com colegas no laboratório do IFS",
    caption: "Hands-on no LABIC",
    context: "Programação em dupla · IFS",
    accent: "secondary",
    span: "default",
  },
  {
    slug: "campus-weekend",
    imagePath: "/images/sobre/momento-campus-weekend.jpg",
    alt: "Felipe Jovino no Campus Weekend Aracaju com organizador do evento",
    caption: "Campus Weekend Aracaju",
    context: "Networking · ecossistema de tech do Nordeste",
    accent: "primary",
    span: "default",
  },
];

export const aboutNextLevel = {
  era: "Mestrado · UFS / PROCC · 2026 — 2028",
  title: "O próximo nível.",
  body:
    "Para expandir os limites do que posso construir, fui aprovado em 1º lugar geral no Mestrado em Ciência da Computação (Computação Inteligente) na UFS/PROCC (2026-2028), onde pesquiso novas fronteiras de IA.",
  badge: "1º lugar · Edital 04/2025",
};
