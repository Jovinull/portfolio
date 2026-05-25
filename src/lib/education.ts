export type EducationStat = {
  value: string;
  label: string;
  hint: string;
  accent: "primary" | "secondary";
};

export const educationStats: EducationStat[] = [
  {
    value: "100+",
    label: "Certificados",
    hint: "Cursos, eventos e formações concluídas",
    accent: "primary",
  },
  {
    value: "13",
    label: "Instituições",
    hint: "Oracle, Microsoft, Huawei, Sebrae, IFS, UFRGS…",
    accent: "secondary",
  },
  {
    value: "+500h",
    label: "Horas de formação",
    hint: "Conteúdo técnico mapeado e certificado",
    accent: "primary",
  },
  {
    value: "2020 — 2026",
    label: "Aprendizado contínuo",
    hint: "Sem pausa desde a graduação",
    accent: "secondary",
  },
];

export type FeaturedCredential = {
  slug: string;
  kind: "Certificação" | "Curso oficial" | "Trilha" | "Formação";
  issuer: string;
  title: string;
  year: string;
  metaLabel: string;
  blurb: string;
  imagePath: string;
  alt: string;
  accent: "primary" | "secondary";
  verifyUrl?: string;
  span?: "wide" | "default";
};

export const featuredCredentials: FeaturedCredential[] = [
  {
    slug: "oracle-oci-ai-foundations",
    kind: "Certificação",
    issuer: "Oracle University",
    title: "OCI 2025 Certified AI Foundations Associate",
    year: "2025",
    metaLabel: "ID 321291573OCI25AICFA",
    blurb:
      "Certificação oficial Oracle em fundamentos de IA, machine learning e serviços de IA generativa na Oracle Cloud Infrastructure.",
    imagePath: "/images/certificacoes/oracle-oci-ai-foundations-2025.jpg",
    alt: "Certificação Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate de Felipe Jovino dos Santos",
    accent: "primary",
    span: "default",
  },
  {
    slug: "huawei-hcia-ai",
    kind: "Curso oficial",
    issuer: "Huawei ICT Academy · IFS",
    title: "HCIA-AI · Inteligência Artificial",
    year: "2023",
    metaLabel: "40 horas",
    blurb:
      "Trilha oficial da Huawei ICT Academy em IA — fundamentos de machine learning, deep learning e o framework MindSpore.",
    imagePath: "/images/certificacoes/huawei-hcia-ai-2023.jpg",
    alt: "Certificado Huawei HCIA Inteligência Artificial 2023 de Felipe Jovino dos Santos",
    accent: "secondary",
    span: "default",
  },
  {
    slug: "hackerrank-java-basic",
    kind: "Certificação",
    issuer: "HackerRank",
    title: "Java (Basic) · Certificate of Accomplishment",
    year: "2026",
    metaLabel: "ID 03E7DE0F0135",
    blurb:
      "Avaliação prática de fundamentos de Java: classes, herança, exceções e estruturas de dados.",
    imagePath: "/images/certificacoes/hackerrank-java-basic-2026.png",
    alt: "Certificado HackerRank Java Basic de Felipe Jovino dos Santos",
    accent: "primary",
    verifyUrl: "https://www.hackerrank.com/certificates/03e7de0f0135",
    span: "default",
  },
  {
    slug: "microsoft-az900",
    kind: "Curso oficial",
    issuer: "Microsoft · Gold Learning Partner",
    title: "Azure Fundamentals (AZ-900)",
    year: "2022",
    metaLabel: "8 horas",
    blurb:
      "Microsoft Official Course: conceitos de nuvem, serviços core do Azure, segurança, governança e modelos de precificação.",
    imagePath: "/images/certificacoes/microsoft-az900-2022.jpg",
    alt: "Microsoft Certificate of Achievement AZ-900 Azure Fundamentals de Felipe Jovino dos Santos",
    accent: "secondary",
    span: "default",
  },
  {
    slug: "microsoft-ai900",
    kind: "Curso oficial",
    issuer: "Microsoft · Gold Learning Partner",
    title: "Azure AI Fundamentals (AI-900)",
    year: "2021",
    metaLabel: "8 horas",
    blurb:
      "Microsoft Official Course sobre cargas de trabalho de IA no Azure: visão computacional, NLP e IA responsável.",
    imagePath: "/images/certificacoes/microsoft-ai900-2021.jpg",
    alt: "Microsoft Certificate of Achievement AI-900 Azure AI Fundamentals de Felipe Jovino dos Santos",
    accent: "primary",
    span: "default",
  },
  {
    slug: "sebrae-catalisa-ict",
    kind: "Trilha",
    issuer: "Sebrae",
    title: "Catalisa ICT · Mobilizar e Aprender",
    year: "2025",
    metaLabel: "52 horas",
    blurb:
      "Metodologia de inovação para deeptechs: caracterização de tecnologia, descoberta de problema e construção do plano de inovação.",
    imagePath: "/images/certificacoes/sebrae-catalisa-ict-2025.jpg",
    alt: "Certificado Sebrae Catalisa ICT Mobilizar e Aprender 2025 de Felipe Jovino dos Santos",
    accent: "secondary",
    span: "default",
  },
  {
    slug: "emicro-ne",
    kind: "Formação",
    issuer: "SBMicro · IEEE · UFCG/UFS",
    title: "XVII Escola de Microeletrônica do Nordeste",
    year: "2022",
    metaLabel: "30 horas",
    blurb:
      "Processos de fabricação, microeletrônica digital, analógica, radiofrequência e sensores baseados em ondas acústicas.",
    imagePath: "/images/certificacoes/emicro-ne-2022.jpg",
    alt: "Certificado XVII Escola de Microeletrônica do Nordeste 2022 de Felipe Jovino dos Santos",
    accent: "primary",
    span: "wide",
  },
];

export type AcademicHighlight = {
  slug: string;
  title: string;
  org: string;
  detail: string;
  period: string;
  accent: "primary" | "secondary";
};

export const academicHighlights: AcademicHighlight[] = [
  {
    slug: "bacharelado-si",
    title: "Bacharel em Sistemas de Informação",
    org: "Instituto Federal de Sergipe (IFS) · Campus Lagarto",
    detail: "Ingresso em 1º lugar · IRA 7,66 · colação de grau em nov/2024",
    period: "2020 — 2024",
    accent: "primary",
  },
  {
    slug: "poscomp-2023",
    title: "POSCOMP 2023 — acima da média nacional",
    org: "Exame Nacional de Pós-Graduação em Computação · Fundatec / SBC",
    detail: "43 acertos contra a média nacional de 31,66 · associado à SBC",
    period: "2023",
    accent: "secondary",
  },
  {
    slug: "mestrado-ufs",
    title: "Mestrado em Ciência da Computação — 1º lugar",
    org: "UFS · PROCC · linha de Computação Inteligente",
    detail: "Média 4,831 no Edital PROCC/POSGRAP/UFS — aprovado em 1º lugar geral",
    period: "2026 — 2028",
    accent: "primary",
  },
];

export type TeachingIconKey =
  | "code"
  | "users"
  | "graduationCap"
  | "bot"
  | "boxes"
  | "presentation";

export type TeachingRole = {
  slug: string;
  iconKey: TeachingIconKey;
  title: string;
  org: string;
  period: string;
  loadLabel: string;
  blurb: string;
  accent: "primary" | "secondary";
};

export const teachingRoles: TeachingRole[] = [
  {
    slug: "instrutor-python-restic08",
    iconKey: "code",
    title: "Instrutor de Python",
    org: "Residência em TIC 08 · IFS / Softex / LABIC",
    period: "Mar — Abr 2023",
    loadLabel: "5 turmas · 100h",
    blurb:
      "Ministrei Python para cinco turmas do programa de Capacitação em Inteligência Artificial, com foco em aplicações práticas.",
    accent: "primary",
  },
  {
    slug: "monitor-restic08",
    iconKey: "users",
    title: "Monitor Bolsista · Capacitação em IA",
    org: "Residência em TIC 08 · Softex / IFS / Funetec",
    period: "Dez 2022 — Ago 2023",
    loadLabel: "9 meses · 10h/sem",
    blurb:
      "Aulas, elaboração de materiais didáticos, suporte pedagógico e avaliação de desempenho dos alunos.",
    accent: "secondary",
  },
  {
    slug: "monitor-aed",
    iconKey: "graduationCap",
    title: "Monitor · Algoritmos e Estrutura de Dados I",
    org: "Bacharelado em Sistemas de Informação · IFS",
    period: "Semestre 2024.1",
    loadLabel: "72 horas",
    blurb:
      "Monitoria voluntária apoiando colegas e as atividades da disciplina, reconhecida por comprometimento excepcional.",
    accent: "primary",
  },
  {
    slug: "robos-simulacao",
    iconKey: "bot",
    title: "Programação para Futebol de Robôs (Simulação)",
    org: "LABIC · IFS",
    period: "Ago 2024",
    loadLabel: "8 horas",
    blurb:
      "Ministrei programação e simulação para controle de robôs em partidas de futebol virtual e competições.",
    accent: "secondary",
  },
  {
    slug: "modelagem-3d",
    iconKey: "boxes",
    title: "Modelagem e Impressão 3D",
    org: "LABIC · IFS",
    period: "Set 2024",
    loadLabel: "8 horas",
    blurb:
      "Capacitação em técnicas de modelagem e impressão 3D aplicadas a projetos de inovação.",
    accent: "primary",
  },
  {
    slug: "minicursos-python",
    iconKey: "presentation",
    title: "Mini cursos de Python (SNCT / IFS)",
    org: "Introdução ao Python · Python para Iniciantes",
    period: "2022 — 2023",
    loadLabel: "19 horas",
    blurb:
      "Mini cursos introdutórios de programação em Python apresentados em semanas de ciência e tecnologia.",
    accent: "secondary",
  },
];

export type CatalogIconKey =
  | "code"
  | "cpu"
  | "brain"
  | "calendar"
  | "library";

export type CatalogItem = {
  title: string;
  meta?: string;
};

export type CatalogGroup = {
  slug: string;
  provider: string;
  kind: string;
  iconKey: CatalogIconKey;
  accent: "primary" | "secondary";
  items: CatalogItem[];
};

export const learningCatalog: CatalogGroup[] = [
  {
    slug: "udemy",
    provider: "Udemy",
    kind: "Plataforma · Desenvolvimento",
    iconKey: "code",
    accent: "primary",
    items: [
      { title: "Java COMPLETO — Do Zero ao Profissional + Projetos" },
      { title: "Java COMPLETO — POO + Projetos" },
      { title: "Estrutura de Dados e Algoritmos em Python" },
      { title: "Padrões de Projeto (Design Patterns) com Python" },
      { title: "Redes Neurais Artificiais em Python" },
      { title: "Django Web Framework + Django Rest Framework (DRF)" },
      { title: "C# Completo e Profissional" },
      { title: "Programação em Python — do Básico ao Avançado" },
      { title: "Programação em C — do básico ao avançado" },
      { title: "Flutter — Apps para Android e iOS" },
      { title: "COBOL — do absoluto zero" },
      { title: "Mainframe — do TSO ao ZOWE" },
      { title: "x86 Assembly Language Programming — From Ground Up" },
      { title: "Básico de Mangá — Desenho de Personagem" },
    ],
  },
  {
    slug: "ifrs",
    provider: "Instituto Federal do RS (IFRS)",
    kind: "Lógica & Java",
    iconKey: "code",
    accent: "secondary",
    items: [
      { title: "Lógica de Programação I — primeiros programas", meta: "20h · 2021" },
      { title: "Lógica de Programação II — programas espertos", meta: "20h · 2021" },
      { title: "Lógica de Programação III — múltiplos valores e módulos", meta: "20h · 2021" },
      { title: "Programação Básica com Java I", meta: "40h · 2021" },
      { title: "Programação Básica com Java II", meta: "40h · 2021" },
      { title: "Programação Básica com Java III", meta: "40h · 2021" },
    ],
  },
  {
    slug: "ifs-labic",
    provider: "IFS · LABIC",
    kind: "Robótica, IoT & ciência",
    iconKey: "cpu",
    accent: "primary",
    items: [
      { title: "Arduino Básico — Simulação com Tinkercad", meta: "2022" },
      { title: "Introdução a Arduino — robô que desvia de obstáculos" },
      { title: "Python e construção de robô digital de automação" },
      { title: "Ubidots IoT — monitoramento de fermentação" },
      { title: "PIC e Arduino — quando usar cada um" },
      { title: "LabJogos — jogos 2D em RPGMaker", meta: "2022" },
      { title: "Projeto Básico de Sistemas Fotovoltaicos" },
      { title: "Estatística aplicada à pesquisa" },
      { title: "Produção de artigos científicos e resumos" },
      { title: "Workshop de Segurança da Informação — LGPD, Cibersegurança e Forense" },
    ],
  },
  {
    slug: "lumina-ufrgs",
    provider: "Lúmina · UFRGS",
    kind: "MOOCs",
    iconKey: "brain",
    accent: "secondary",
    items: [
      { title: "Análise de Sentimentos em Computação", meta: "20h · 2021" },
      { title: "Introdução ao Linux", meta: "2021" },
      { title: "Design na Economia Criativa" },
      { title: "O Setor de Games no Brasil — carreiras e oportunidades" },
      { title: "Internacionalização no Setor de Games" },
      { title: "Produção de vídeos com celulares e tablets" },
    ],
  },
  {
    slug: "eventos",
    provider: "Eventos & congressos",
    kind: "Participação",
    iconKey: "calendar",
    accent: "primary",
    items: [
      { title: "8º Tech Day — Detecção e Resposta a Incidentes (Sophos)", meta: "8h · 2025" },
      { title: "10º ENCompIF — apresentação de artigo (CSBC 2023)", meta: "2023" },
      { title: "Mostra Nacional de Robótica (MNR)", meta: "2023 · 2024" },
      { title: "Semana Nacional de Ciência e Tecnologia (SNCT)", meta: "2020 · 2021" },
      { title: "Formação Maker", meta: "16h · 2022" },
      { title: "3ª Conexão UFS–IFS–UFCG · LABIC", meta: "2022" },
      { title: "Jornada de Informática — comissão organizadora", meta: "2022" },
    ],
  },
  {
    slug: "outras",
    provider: "Outras plataformas",
    kind: "Formação técnica & cidadã",
    iconKey: "library",
    accent: "secondary",
    items: [
      { title: "ESKADA — Básico de Libras", meta: "60h" },
      { title: "ESKADA — Princípios de Mineração", meta: "60h" },
      { title: "Fundação Bradesco — Biologia: Alimentação e Saúde", meta: "3h" },
      { title: "TSE — Treinamento para Mesários, Eleições 2020/2024", meta: "6h" },
    ],
  },
];
