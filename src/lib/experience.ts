export type ExperienceIconKey =
  | "serverCog"
  | "brainCircuit"
  | "layers"
  | "monitorPlay"
  | "flaskConical";

export type ExperienceRole = {
  title: string;
  period: string;
  current?: boolean;
};

export type Experience = {
  slug: string;
  company: string;
  subtitle?: string;
  iconKey: ExperienceIconKey;
  logoAlt: string;
  period: string;
  current: boolean;
  type: "Liderança" | "Deeptech" | "Founder" | "Conteúdo" | "Pesquisa";
  roles: ExperienceRole[];
  description: string;
  impact?: string;
  stack: string[];
  link?: { label: string; href: string };
};

export const experiences: Experience[] = [
  {
    slug: "wm-saude",
    company: "WM Saúde",
    subtitle: "Gestão e Tecnologia",
    iconKey: "serverCog",
    logoAlt: "WM Saúde",
    period: "Nov/2024 — Presente",
    current: true,
    type: "Liderança",
    roles: [
      {
        title: "Coordenador de TI",
        period: "Set/2025 — Presente",
        current: true,
      },
      {
        title: "Desenvolvedor de Software Júnior",
        period: "Nov/2024 — Set/2025",
      },
    ],
    description:
      "Liderança de squads multidisciplinares e definição de roadmaps de engenharia. Responsável por modernizar o ecossistema eSmart com GitFlow, CI/CD no Azure DevOps e padronização arquitetural sobre AdonisJS v6, Next.js e PostgreSQL.",
    impact:
      "Reduzi o retrabalho em PRs, diminui o tempo de resolução de incidentes com triagem estruturada e RBAC, e atuei como ponte direta com stakeholders para garantir escalabilidade e segurança em um setor regulado.",
    stack: [
      "AdonisJS v6",
      "Next.js",
      "PostgreSQL",
      "Azure DevOps",
      "GitFlow",
      "CI/CD",
      "RBAC",
    ],
  },
  {
    slug: "accesssim",
    company: "AccessSim",
    subtitle: "Centelha (Fase 3) & Catalisa ICT (Fase 2) & Cepedi",
    iconKey: "brainCircuit",
    logoAlt: "AccessSim",
    period: "Abr/2025 — Presente",
    current: true,
    type: "Deeptech",
    roles: [{ title: "CTO & Co-Founder", period: "Abr/2025 — Presente", current: true }],
    description:
      "Uma iniciativa gigante que co-fundei e onde atuo como CTO. A AccessSim é uma startup (em transição de Inova Simples para ME) que, em 2025, foi acelerada pelo Sebrae Catalisa ICT (Fase 2 em 42º lugar, captando R$ 63.900 em bolsas para 1 mestre, 2 graduados e 1 graduando) e pelo Centelha Sergipe (Fase 3 em 17º lugar, com captação de R$ 130.000 em subvenção). Lidero o desenvolvimento do motor de IA para acessibilidade (NBR 9050) e oriento diretamente uma equipe de 2 desenvolvedores contratados. Também atuamos como empresa convidada no Programa Bolsa Futuro Digital (Cepedi), sendo Product Owners e orientadores de 5 estudantes (Maio a Agosto) no desenvolvimento de MVPs institucionais.",
    impact:
      "Consolidação tecnológica e de negócios com aprovação nos maiores programas de fomento à inovação do Brasil. Desenvolvi o motor de IA e backend em Python, orquestrando a construção do app em React Native.",
    stack: [
      "Python",
      "Machine Learning",
      "Visão Computacional",
      "React Native",
      "Realidade Aumentada",
      "NBR 9050",
    ],
  },
  {
    slug: "wf3-solutions",
    company: "WF3 Solutions",
    subtitle: "Produtos digitais escaláveis",
    iconKey: "layers",
    logoAlt: "WF3 Solutions",
    period: "Out/2025 — Presente",
    current: true,
    type: "Founder",
    roles: [{ title: "Co-Founder", period: "Out/2025 — Presente", current: true }],
    description:
      "Empresa focada em transformar processos críticos em produtos digitais escaláveis para os setores de saúde, governo e educação.",
    impact:
      "Atuação do discovery à operação, garantindo arquiteturas com RBAC, auditoria e conformidade LGPD desde o day one, integrando sistemas web, mobile e APIs de WhatsApp.",
    stack: [
      "Arquitetura de Software",
      "Node.js",
      "Next.js",
      "LGPD",
      "RBAC",
      "WhatsApp API",
      "Mobile",
    ],
  },
  {
    slug: "masters-tech",
    company: "Canal Masters Tech",
    subtitle: "YouTube · Educação em tecnologia",
    iconKey: "monitorPlay",
    logoAlt: "Masters Tech",
    period: "Jun/2024 — Nov/2025",
    current: false,
    type: "Conteúdo",
    roles: [{ title: "Youtuber Educacional", period: "Jun/2024 — Nov/2025" }],
    description:
      "Democratização do ensino de tecnologia. Planejamento, roteirização e produção de videoaulas práticas focadas em programação e desenvolvimento de software para iniciantes e profissionais em transição de carreira.",
    stack: ["Roteirização", "Produção de Vídeo", "Didática", "Programação"],
    link: {
      label: "Ver canal",
      href: "https://www.youtube.com/@MastersTech",
    },
  },
  {
    slug: "ifs",
    company: "Instituto Federal de Sergipe",
    subtitle: "IFS · Pesquisa aplicada e inovação",
    iconKey: "flaskConical",
    logoAlt: "IFS",
    period: "Dez/2020 — Out/2024",
    current: false,
    type: "Pesquisa",
    roles: [
      { title: "Pesquisador · LABIC", period: "2022 — 2024" },
      { title: "Bolsista Inov@IFS", period: "2021 — 2024" },
      { title: "Instrutor Aprendiz 4.0", period: "2020 — 2022" },
    ],
    description:
      "Atuação profunda em pesquisa aplicada unindo Inteligência Artificial, Eletrônica e Sistemas Embarcados.",
    impact:
      "Desenvolvi sistemas backend e modelos de IA, integrei aplicações mobile e atuei como ponte entre pesquisa acadêmica e o mercado de inovação do estado de Sergipe.",
    stack: [
      "Inteligência Artificial",
      "Sistemas Embarcados",
      "Eletrônica",
      "Backend",
      "Mobile",
      "Pesquisa Aplicada",
    ],
  },
];
