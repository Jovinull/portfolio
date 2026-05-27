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

export type ResearchStat = {
  value: string;
  label: string;
  hint: string;
};

export const researchStats: ResearchStat[] = [
  { value: "6", label: "Artigos publicados", hint: "2023 — 2025" },
  { value: "2", label: "Artigos premiados", hint: "1º e 2º lugar · IFS" },
  { value: "B5", label: "Qualis CAPES", hint: "Revista de Sistemas e Computação" },
  { value: "1", label: "Autoria solo", hint: "Ensaio sobre ética da IA" },
];

export type ArticleKind = "scientific" | "award" | "essay";

export type Article = {
  slug: string;
  kind: ArticleKind;
  kindLabel: string;
  title: string;
  venue: string;
  venueMeta: string;
  year: string;
  role: string;
  authors: string;
  summary: string;
  highlights?: string[];
  tags: string[];
  qualis?: string;
  award?: string;
  awardContext?: string;
  doi?: string;
  link?: string;
  linkLabel?: string;
  issn?: string;
  certImagePath?: string;
  certAlt?: string;
  accent: "primary" | "secondary";
};

export const articles: Article[] = [
  {
    slug: "acesso-formacao-ia",
    kind: "scientific",
    kindLabel: "Artigo científico",
    title:
      "Acesso à formação em Inteligência Artificial para pessoas de baixa renda: um estudo de caso em Sergipe",
    venue: "Revista de Sistemas e Computação (RSC) — UNIFACS",
    venueMeta: "v. 13, n. 3 · p. 49–54 · set–dez 2023",
    year: "2023",
    role: "Coautor · 6 autores",
    authors:
      "Catuxe Varjão de Santana Oliveira, Eddie Fernandes de Jesus Menezes, Felipe Jovino dos Santos, Gabriel do Nascimento Santos Silva, José Matheus Oliveira Cavalcante e Stephanie Kamarry Alves de Sousa",
    summary:
      "Estudo de caso sobre a democratização do ensino de IA no Brasil, com foco em Sergipe. O trabalho mapeia as barreiras enfrentadas por pessoas de baixa renda — recursos financeiros, conhecimento prévio e domínio de inglês — e avalia, por meio de formulários aplicados aos alunos, o impacto de uma iniciativa gratuita do IFS na inclusão dessas pessoas no mercado de IA.",
    highlights: [
      "Pesquisa aplicada com formulários de perfil e de avaliação dos participantes",
      "Defende iniciativas gratuitas como vetor de redução de desigualdade",
      "Publicado em periódico com Qualis B5 na CAPES",
    ],
    tags: ["IA aplicada", "Educação", "Inclusão", "Estudo de caso"],
    qualis: "Qualis B5",
    doi: "10.36558/rsc.v13i3.8504",
    accent: "primary",
  },
  {
    slug: "reconhecimento-libras-ml",
    kind: "scientific",
    kindLabel: "Artigo científico",
    title:
      "Abordagens de Aprendizado de Máquina para o Reconhecimento de Sinais em Libras",
    venue: "Anais da ERBASE — Sociedade Brasileira de Computação (SBC)",
    venueMeta: "XXV ERBASE · Lagarto/SE · p. 327–335 · 2025",
    year: "2025",
    role: "Coautor · 3 autores",
    authors:
      "Kauã de Melo Alves, Felipe Jovino dos Santos e Stephanie Kamarry Alves de Sousa",
    summary:
      "Investigação de aprendizado de máquina para reconhecer sinais estáticos da Língua Brasileira de Sinais, enfrentando variações regionais, iluminação e posicionamento das mãos. A partir de 25.000 imagens, foram extraídos landmarks com MediaPipe e comparados três modelos sob validação cruzada KFold de 10 dobras.",
    highlights: [
      "XGBoost obteve o melhor desempenho: 87,9% de precisão e 87,2% de F1-score",
      "RNN (84,7% F1) e Random Forest (79,6% F1) avaliados como baselines",
      "Benchmark público inédito para sinais estáticos de Libras",
    ],
    tags: [
      "Machine Learning",
      "XGBoost",
      "MediaPipe",
      "Acessibilidade",
      "Visão Computacional",
    ],
    doi: "10.5753/erbase.2025.13807",
    link: "https://sol.sbc.org.br/index.php/erbase/article/view/39317",
    linkLabel: "Ler na SBC OpenLib",
    accent: "secondary",
  },
  {
    slug: "metodologia-pensamento-computacional",
    kind: "award",
    kindLabel: "Artigo premiado",
    title:
      "Metodologia de trabalho no projeto de iniciação ao pensamento computacional com adolescentes",
    venue: "9ª Semana de Extensão, Tecnologia e Cultura — SEMEXT/IFS",
    venueMeta: "Aracaju/SE · 04 dez 2024",
    year: "2024",
    role: "Coautor · 6 autores",
    authors:
      "Victor de Moura Almeida, Cristiane Oliveira de Santana, Larissa de Góis Barreto, Felipe Jovino dos Santos, Jislane Silva Santos de Menezes e Lucas Macena Vasconcelos",
    summary:
      "Relato metodológico de um projeto de extensão que leva o pensamento computacional a adolescentes. O artigo detalha a estratégia de ensino, as dinâmicas aplicadas em sala e os resultados de aprendizagem, sistematizando uma abordagem replicável de iniciação à computação para o público jovem.",
    tags: ["Pensamento computacional", "Educação", "Extensão"],
    award: "1º lugar",
    awardContext: "Melhor Artigo · Ciências Exatas e da Terra",
    certImagePath:
      "/images/artigos/metodologia-pensamento-computacional-semext-2024.jpg",
    certAlt:
      "Certificado de Melhor Artigo na 9ª SEMEXT/IFS 2024 para o artigo Metodologia de trabalho no projeto de iniciação ao pensamento computacional com adolescentes",
    accent: "primary",
  },
  {
    slug: "simulador-robos-unity",
    kind: "award",
    kindLabel: "Artigo premiado",
    title:
      "Desenvolvimento de um simulador de robôs móveis terrestres utilizando a Unity",
    venue:
      "Congresso Científico da Semana Nacional de Ciência e Tecnologia — SNCT/IFS",
    venueMeta: "Aracaju/SE · 04 dez 2024",
    year: "2024",
    role: "Coautor · 5 autores",
    authors:
      "Kaylaine Assunção Santos Barbosa, Fabio Luiz Sá Prudente, Luiz Eduardo Andrade de Oliveira, Felipe Jovino dos Santos e Stephanie Kamarry Alves de Sousa",
    summary:
      "Desenvolvimento de um simulador de robôs móveis terrestres na engine Unity, voltado à experimentação e ao ensino de robótica sem a necessidade de hardware físico. O trabalho explora física de corpos, controle de locomoção e um ambiente virtual configurável para testes de navegação.",
    tags: ["Robótica", "Unity", "Simulação", "Computação gráfica"],
    award: "2º lugar",
    awardContext: "Segundo Melhor Artigo · Ciências Exatas e da Terra",
    certImagePath: "/images/artigos/simulador-robos-unity-snct-2024.jpg",
    certAlt:
      "Certificado de Segundo Melhor Artigo na SNCT/IFS 2024 para o artigo Desenvolvimento de um simulador de robôs móveis terrestres utilizando a Unity",
    accent: "secondary",
  },
  {
    slug: "fronteiras-etica-ia",
    kind: "essay",
    kindLabel: "Ensaio acadêmico",
    title:
      "Fronteiras entre humanidade e tecnologia: a ética da IA no contexto social e cultural",
    venue: "Revista da Academia Lagartense de Letras",
    venueMeta: "n. 16 · Dossiê Dr. João Almeida Rocha · p. 53 · abr 2025",
    year: "2025",
    role: "Autoria solo",
    authors: "Felipe Jovino dos Santos",
    summary:
      "Ensaio de autoria solo sobre os dilemas éticos da inteligência artificial e seu impacto nas estruturas sociais e culturais. Discute viés algorítmico, transparência e privacidade, e defende regulamentação ética e inclusão digital — ancorado na Recomendação da UNESCO sobre a Ética da IA (2021) — para um desenvolvimento tecnológico responsável.",
    tags: ["Ética da IA", "Sociedade", "Viés algorítmico", "Ensaio"],
    issn: "ISSN 2594-5378",
    accent: "primary",
  },
  {
    slug: "youtube-educacao-aberta",
    kind: "essay",
    kindLabel: "Ensaio acadêmico",
    title:
      "YouTube como extensão do ensino profissional e tecnológico: proposta de educação aberta",
    venue: "Revista da Academia Lagartense de Letras",
    venueMeta: "n. 17 · Dossiê Parafusos · p. 83 · out 2025",
    year: "2025",
    role: "Coautor · 2 autores",
    authors: "Cassiano Campos de Morais e Felipe Jovino dos Santos",
    summary:
      "Ensaio que defende o YouTube como extensão legítima da Educação Profissional e Tecnológica, à luz da educação aberta. Articula as possibilidades pedagógicas do audiovisual, os limites da adoção sem mediação institucional e um relato de experiência como criador de conteúdo técnico no canal MastersTech.",
    tags: ["Educação aberta", "EPT", "Inclusão digital", "Ensaio"],
    issn: "ISSN 2594-5378",
    accent: "secondary",
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
