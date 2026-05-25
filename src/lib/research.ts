export type PatentIconKey =
  | "activity"
  | "server"
  | "captions"
  | "trees";

export type Patent = {
  slug: string;
  name: string;
  category: string;
  iconKey: PatentIconKey;
  inpiCode: string;
  inpiIssuedAt: string;
  legalBasis?: string;
  description: string;
  stack: string[];
  coauthors?: string;
  certImagePath: string;
  certAlt: string;
  certHref: string;
  span?: "wide" | "default";
};

export const academic = {
  degree: "Mestrado Acadêmico em Ciência da Computação",
  track: "Computação Inteligente",
  institution: "Universidade Federal de Sergipe",
  program: "UFS / PROCC",
  period: "Fev/2026 — Nov/2028",
  highlight:
    "Aprovado em 1º lugar (nota geral) no Edital PROCC/POSGRAP/UFS nº 04/2025.",
} as const;

export type Publication = {
  title: string;
  award?: string;
  qualis?: string;
  event?: string;
};

export const publications: Publication[] = [
  {
    title: "Acesso à formação em Inteligência Artificial para pessoas de baixa renda",
    qualis: "Qualis B5",
  },
  {
    title:
      "Fronteiras entre humanidade e tecnologia: a ética da IA no contexto social e cultural",
  },
  {
    title: "Melhor Artigo",
    award: "1º lugar",
    event: "SEMEXT / IFS 2024",
  },
  {
    title: "Segundo Melhor Artigo",
    award: "2º lugar",
    event: "SNCT / IFS 2024",
  },
];

export const patents: Patent[] = [
  {
    slug: "glicemy",
    name: "Glicemy",
    category: "Plataforma de Monitoramento",
    iconKey: "activity",
    inpiCode: "BR 51 2025 002816-4",
    inpiIssuedAt: "Expedido em 01/07/2025",
    legalBasis: "Proteção de 50 anos · Lei 9.609/98",
    description:
      "Plataforma em JavaScript para monitoramento e gestão de dados de glicemia. Interface mobile-first com integração a dispositivos e fluxos clínicos, focada em capilarizar o acompanhamento contínuo de pacientes diabéticos.",
    stack: ["JavaScript", "React Native", "Mobile-first", "Saúde"],
    coauthors: "Titular: Instituto Federal de Sergipe (IFS) · 5 autores",
    certImagePath: "/images/registros-inpi/glicemy.jpg",
    certAlt:
      "Certificado de Registro de Programa de Computador do INPI para Glicemy — processo BR512025002816-4",
    certHref: "/images/registros-inpi/glicemy.jpg",
    span: "wide",
  },
  {
    slug: "glicemy-api",
    name: "Glicemy API",
    category: "Backend · RESTful Services",
    iconKey: "server",
    inpiCode: "BR 51 2025 003459-8",
    inpiIssuedAt: "Expedido em 29/07/2025",
    legalBasis: "Proteção de 50 anos · Lei 9.609/98",
    description:
      "Conjunto de serviços RESTful em JavaScript para persistência e consulta de dados de glicemia, com autenticação JWT e criptografia em repouso e trânsito.",
    stack: ["Node.js", "Express", "Prisma", "PostgreSQL", "JWT"],
    coauthors: "Titular: Instituto Federal de Sergipe (IFS) · 5 autores",
    certImagePath: "/images/registros-inpi/glicemy-api.jpg",
    certAlt:
      "Certificado de Registro de Programa de Computador do INPI para Glicemy API — processo BR512025003459-8",
    certHref: "/images/registros-inpi/glicemy-api.jpg",
    span: "default",
  },
  {
    slug: "captionease",
    name: "CaptionEase",
    category: "Automação & IA",
    iconKey: "captions",
    inpiCode: "BR512023002445-7",
    inpiIssuedAt: "Expedido em 22/08/2023",
    legalBasis: "Proteção de 50 anos · Lei 9.609/98",
    description:
      "Software em Python para transcrição e legendagem automática, com derivação autorizada sobre o modelo Whisper. Pipeline de IA que reduz o esforço humano em tarefas repetitivas de acessibilidade audiovisual.",
    stack: ["Python", "Whisper", "Inteligência Artificial", "Acessibilidade"],
    coauthors: "Titular: Instituto Federal de Sergipe (IFS) · 6 autores",
    certImagePath: "/images/registros-inpi/captionease.jpg",
    certAlt:
      "Certificado de Registro de Programa de Computador do INPI para CaptionEase — processo BR512023002445-7",
    certHref: "/images/registros-inpi/captionease.jpg",
    span: "default",
  },
  {
    slug: "signforest",
    name: "SignForest",
    category: "Análise & Mapeamento de Sinais",
    iconKey: "trees",
    inpiCode: "BR512025002391-0",
    inpiIssuedAt: "Expedido em 10/06/2025",
    legalBasis: "Proteção de 50 anos · Lei 9.609/98",
    description:
      "Sistema em Python para análise e mapeamento de sinais de floresta com assinatura criptográfica via hash SHA-512. Aplicável a múltiplos domínios que exigem integridade verificável e rastreabilidade de coletas.",
    stack: ["Python", "SHA-512", "Análise de Sinais", "Criptografia"],
    coauthors: "Titular: Instituto Federal de Sergipe (IFS) · 6 autores",
    certImagePath: "/images/registros-inpi/signforest.jpg",
    certAlt:
      "Certificado de Registro de Programa de Computador do INPI para SignForest — processo BR512025002391-0",
    certHref: "/images/registros-inpi/signforest.jpg",
    span: "wide",
  },
];
