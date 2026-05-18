import type { LucideIcon } from "lucide-react";
import {
  ServerCog,
  BrainCircuit,
  Layers,
  MonitorPlay,
  FlaskConical,
} from "lucide-react";

export type ExperienceRole = {
  title: string;
  period: string;
  current?: boolean;
};

export type Experience = {
  slug: string;
  company: string;
  subtitle?: string;
  icon: LucideIcon;
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
    icon: ServerCog,
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
    subtitle: "Sebrae Catalisa ICT",
    icon: BrainCircuit,
    logoAlt: "AccessSim",
    period: "Abr/2025 — Presente",
    current: true,
    type: "Deeptech",
    roles: [{ title: "CTO & Co-Founder", period: "Abr/2025 — Presente", current: true }],
    description:
      "Startup de base tecnológica acelerada pelo Catalisa ICT. Lidero a concepção de uma solução que une IA e Realidade Aumentada para automatizar a análise de acessibilidade (NBR 9050) na construção civil.",
    impact:
      "Desenvolvi o motor de IA e o backend em Python e orquestrei a construção do app em React Native, reduzindo falhas de acessibilidade ainda na fase de projeto arquitetônico.",
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
    icon: Layers,
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
    icon: MonitorPlay,
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
    icon: FlaskConical,
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
