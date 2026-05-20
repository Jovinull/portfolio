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
    caption: "2º lugar · Ideathon Aracaju · 2025",
    context:
      "Maratona de inovação da Prefeitura de Aracaju + Governo de Sergipe · prêmio de R$ 3.000",
    badge: "Premiado",
    accent: "primary",
    span: "wide",
  },
  {
    slug: "robotica-2023",
    imagePath: "/images/sobre/momento-robotica-2023.jpg",
    alt:
      "Equipe do LABIC reunida no palco da feira Robótica 2023 com o banner do laboratório, no Instituto Federal de Sergipe",
    caption: "Robótica 2023 · LABIC/IFS",
    context:
      "Equipe do Laboratório de Inovação e Criatividade representando o IFS em evento de robótica",
    accent: "secondary",
    span: "default",
  },
  {
    slug: "home-lab",
    imagePath: "/images/sobre/momento-home-lab.jpg",
    alt:
      "Bancada de desenvolvimento em casa: notebook com editor de código aberto, protoboard com ESP32, multímetro e caixa de componentes",
    caption: "Bancada de desenvolvimento · agosto de 2025",
    context:
      "Firmware, protoboard e multímetro no home lab — onde hardware e software se encontram",
    accent: "secondary",
    span: "wide",
  },
  {
    slug: "premiacao-voucher",
    imagePath: "/images/sobre/momento-premiacao-voucher.jpg",
    alt: "Cerimônia de premiação do programa de inovação do IFS, setembro de 2024",
    caption: "Voucher de inovação · 2024",
    context:
      "Cerimônia de premiação do programa de inovação do Instituto Federal de Sergipe",
    badge: "Premiado",
    accent: "primary",
    span: "default",
  },
  {
    slug: "tech-day-cio",
    imagePath: "/images/sobre/momento-tech-day-cio.jpg",
    alt:
      "Crachá de participante de Felipe Jovino no CIO-SE Tech Day, sexta-feira 25 de julho de 2025",
    caption: "CIO-SE Tech Day · julho de 2025",
    context:
      "\"Além da transformação: orquestrando ecossistemas digitais\" — encontro de líderes de TI de Sergipe",
    accent: "primary",
    span: "wide",
  },
  {
    slug: "csbc-2023",
    imagePath: "/images/sobre/momento-csbc-2023.jpg",
    alt: "Equipe LABIC no 43º Congresso da Sociedade Brasileira de Computação, agosto de 2023",
    caption: "43º CSBC · agosto de 2023",
    context:
      "Congresso da Sociedade Brasileira de Computação — o maior encontro científico da área no país",
    accent: "secondary",
    span: "default",
  },
  {
    slug: "laboratorio-candid",
    imagePath: "/images/sobre/momento-laboratorio-candid.jpg",
    alt: "Felipe Jovino programando em dupla com colega no laboratório do IFS, setembro de 2024",
    caption: "Hands-on no LABIC · 2024",
    context:
      "Programação em dupla no Laboratório de Inovação e Criatividade · IFS",
    accent: "secondary",
    span: "default",
  },
  {
    slug: "prototipo-esp32",
    imagePath: "/images/sobre/momento-prototipo-esp32.jpg",
    alt:
      "Protótipo em protoboard com microcontrolador ESP32, dois sensores ultrassônicos HC-SR04 e LEDs, ao lado de régua e esquadro",
    caption: "Protótipo IoT · ESP32 · 2025",
    context:
      "Prototipagem em protoboard com sensores ultrassônicos HC-SR04 — pesquisa em IoT de baixo nível",
    accent: "primary",
    span: "default",
  },
  {
    slug: "campus-weekend",
    imagePath: "/images/sobre/momento-campus-weekend.jpg",
    alt: "Felipe Jovino no Campus Weekend Aracaju com organizador do evento, outubro de 2025",
    caption: "Campus Weekend · Aracaju 2025",
    context:
      "Imersão de empreendedorismo e networking no ecossistema de tecnologia do Nordeste",
    accent: "secondary",
    span: "default",
  },
];

export type AboutCertification = {
  slug: string;
  issuer: string;
  title: string;
  issuedAtLabel: string;
  credentialId: string;
  verifyUrl?: string;
  imagePath: string;
  alt: string;
  accent: "primary" | "secondary";
};

export const aboutCertifications: AboutCertification[] = [
  {
    slug: "oracle-oci-ai-foundations-2025",
    issuer: "Oracle University",
    title: "Oracle Cloud Infrastructure 2025 · AI Foundations Associate",
    issuedAtLabel: "Julho de 2025",
    credentialId: "321291573OCI25AICFA",
    imagePath: "/images/certificacoes/oracle-oci-ai-foundations-2025.jpg",
    alt:
      "Certificado Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate emitido para Felipe Jovino dos Santos em 28 de julho de 2025",
    accent: "primary",
  },
  {
    slug: "hackerrank-java-basic",
    issuer: "HackerRank",
    title: "Java (Basic) · Certificate of Accomplishment",
    issuedAtLabel: "Maio de 2026",
    credentialId: "03E7DE0F0135",
    verifyUrl: "https://www.hackerrank.com/certificates/03e7de0f0135",
    imagePath: "/images/certificacoes/hackerrank-java-basic-2026.png",
    alt:
      "Certificado HackerRank Java (Basic) Certificate of Accomplishment emitido para Felipe Jovino dos Santos em 03 de maio de 2026",
    accent: "secondary",
  },
];

export const aboutNextLevel = {
  era: "Mestrado · UFS / PROCC · 2026 — 2028",
  title: "O próximo nível.",
  body:
    "Para expandir os limites do que posso construir, fui aprovado em 1º lugar geral no Mestrado em Ciência da Computação (Computação Inteligente) na UFS/PROCC (2026-2028), onde pesquiso novas fronteiras de IA.",
  badge: "1º lugar · Edital 04/2025",
};
