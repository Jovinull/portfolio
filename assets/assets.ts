import type { TimelineEntry, WorkItem } from '@/app/types/assets'
import type { AwardsHighlightItem } from '@/app/types/assets/awards'

import user_image from './user-image.png'
import logo from './logo.png'
import logo_dark from './logo-dark.png'
import profile_img from './profile-img.png'
import header_bg_color from './header-bg-color.png'
import footer_bg_color from './footer-bg-color.png'

import type { IconType } from 'react-icons'
import { FiBookOpen, FiCode, FiCpu, FiFolder, FiGlobe, FiSearch, FiZap } from 'react-icons/fi'
import {
  SiAdonisjs,
  SiCanva,
  SiEspressif,
  SiGit,
  SiMongodb,
  SiNodedotjs,
  SiNextdotjs,
  SiPostgresql,
  SiPython,
} from 'react-icons/si'
import { BiLogoVisualStudio } from 'react-icons/bi'

// ========================
// Assets (somente imagens)
// ========================
export const assets = {
  user_image,
  logo,
  logo_dark,
  profile_img,
  header_bg_color,
  footer_bg_color,
} as const

// ========================
// Dados
// ========================
export const workData: WorkItem[] = [
  {
    title: 'Gestão em Saúde (WM)',
    description:
      'Full-stack (AdonisJS v6, Next.js, PostgreSQL) • Produtos críticos • Qualidade e governança',
    bgImage: '/work-1.png',
    featured: true,
  },
  {
    title: 'CaptionEase',
    description:
      'Projeto registrado como patente • Ferramenta voltada a acessibilidade e fluxo de conteúdo',
    bgImage: '/work-2.png',
    featured: true,
  },
  {
    title: 'MastersTech — Educação Tech',
    description: 'Conteúdo educativo com foco em programação e desenvolvimento de software',
    bgImage: '/work-3.png',
    featured: true,
  },
  {
    title: 'WF3 Solutions',
    description:
      'Plataformas web/mobile, portais e integrações • RBAC, auditoria e LGPD desde o primeiro deploy',
    bgImage: '/work-4.png',
    featured: true,
  },
  {
    title: 'AccessSim',
    description:
      'IA em Python + API • App mobile em React Native • Automação da análise de acessibilidade',
    bgImage: '/work-5.png',
    featured: true,
  },
  {
    title: 'Glicemy',
    description:
      'Solução registrada como patente • Saúde e tecnologia com foco em impacto e utilidade real',
    bgImage: '/work-6.png',
    featured: true,
  },
  {
    title: 'Governança, CI/CD & RBAC (WM)',
    description: 'Pipelines, padrões de código, políticas, GitFlow e validações (VineJS/Bouncer)',
    bgImage: '/work-7.png',
    featured: true,
  },
  {
    title: 'Pesquisa aplicada (LABIC/IFS)',
    description: 'Projetos com Python, machine learning e sistemas embarcados (ESP32/IoT)',
    bgImage: '/work-8.png',
    featured: true,
  },
];

export type ServiceCardItem = {
  Icon: IconType
  title: string
  description: string
  link: string
}

export const serviceData: ServiceCardItem[] = [
  {
    Icon: FiGlobe,
    title: 'Desenvolvimento Web',
    description:
      'Criação de aplicações modernas, responsivas e escaláveis usando Next.js, AdonisJS e PostgreSQL.',
    link: '',
  },
  {
    Icon: FiCpu,
    title: 'Sistemas Embarcados & IoT',
    description:
      'Desenvolvimento com ESP32 e sensores (DHT22, MQ-02, HC-SR04) para automação e monitoramento.',
    link: '',
  },
  {
    Icon: FiZap,
    title: 'Inteligência Artificial Aplicada',
    description:
      'Implementação de IA com Python, redes neurais e aprendizagem por reforço para jogos e automações.',
    link: '',
  },
  {
    Icon: FiCode,
    title: 'Soluções Full Stack',
    description:
      'Integração frontend e backend com autenticação JWT, bancos de dados e APIs RESTful robustas.',
    link: '',
  },
  {
    Icon: FiBookOpen,
    title: 'Mentoria & Educação',
    description:
      'Criação de conteúdo educacional, monitoria e capacitação tecnológica para inclusão e formação em TI.',
    link: '',
  },
  {
    Icon: FiSearch,
    title: 'Projetos de Pesquisa',
    description:
      'Desenvolvimento de soluções inovadoras em IA, microeletrônica e educação com foco em impacto social.',
    link: '',
  },
]

// ========================
// About (ícones via react-icons)
// ========================
export type InfoListItem = {
  Icon: IconType
  title: string
  description: string
}

export const infoList: InfoListItem[] = [
  {
    Icon: FiCode,
    title: 'Linguagens',
    description: 'TypeScript, JavaScript, Python, HTML, CSS',
  },
  {
    Icon: FiBookOpen,
    title: 'Formação',
    description: 'Bacharel em Sistemas de Informação - IFS',
  },
  {
    Icon: FiFolder,
    title: 'Projetos',
    description: '+10 projetos em IA, IoT, Web e Educação',
  },
]

export type ToolItem = {
  name: string
  Icon: IconType
}

export const toolsData: ToolItem[] = [
  { name: 'VS Code', Icon: BiLogoVisualStudio },
  { name: 'MongoDB', Icon: SiMongodb },
  { name: 'Git', Icon: SiGit },
  { name: 'PostgreSQL', Icon: SiPostgresql },
  { name: 'AdonisJS', Icon: SiAdonisjs },
  { name: 'Next.js', Icon: SiNextdotjs },
  { name: 'Python', Icon: SiPython },
  { name: 'ESP32 (Espressif)', Icon: SiEspressif },
  { name: 'Node.js', Icon: SiNodedotjs },
  { name: 'Canva', Icon: SiCanva },
]

// ========================
// Timeline
// ========================
export const timelineData: TimelineEntry[] = [
  // 2026
  {
    id: 'ufs-procc-mestrado-2026',
    year: 2026,
    title: 'Mestrado Acadêmico em Ciência da Computação',
    org: 'UFS • PROCC',
    period: 'fev/2026 – atual',
    type: 'education',
    highlight: true,
    sort: 110,
    badges: [
      { label: '1º lugar geral • Nota 6,245', tone: 'accent', icon: 'star' },
      { label: 'Orientador: Jugurta Rosa Montalvão Filho', tone: 'neutral' },
      { label: 'Edital PROCC/POSGRAP/UFS nº 04/2025 (Comunidade)', tone: 'neutral' },
    ],
    description:
      'Aprovado no PROCC/UFS (ingresso 2026/1). Linha: Engenharia de Software (ES) e Sistemas de Informação (SI). Média final 6,245 (Barema 463,35; PPQ 80).',
  },

  // 2025
  {
    id: 'wm-ti-coord-2025',
    year: 2025,
    title: 'Coordenador de TI',
    org: 'WM Saúde',
    period: 'set/2025 – atual',
    type: 'work',
    highlight: true,
    sort: 100,
    description:
      'Liderança de squads + governança: CI/CD, políticas, padronização e RBAC com VineJS/Bouncer.',
  },
  {
    id: 'accesssim-cto-2025',
    year: 2025,
    title: 'Cofundador & CTO',
    org: 'AccessSim',
    period: 'abr/2025 – atual',
    type: 'startup',
    highlight: true,
    sort: 95,
    badges: [{ label: 'Selecionado no Catalisa ICT (Sebrae)', tone: 'accent' }],
    description:
      'IA em Python + app React Native para automatizar análise de acessibilidade (NBR 9050) com foco em impacto real.',
  },
  {
    id: 'wf3-cofounder-2025',
    year: 2025,
    title: 'Cofundador',
    org: 'WF3 Solutions',
    period: 'out/2025 – atual',
    type: 'startup',
    highlight: true,
    sort: 90,
    description:
      'Entrega de produtos digitais com base sólida (RBAC, auditoria, LGPD) e integrações para negócios e setor público.',
  },
  {
    id: 'pos-ead-ept-2025',
    year: 2025,
    title: 'Pós-graduação (Especialização) – EAD na EPT',
    org: 'IFS (UAB)',
    period: 'ago/2025 – fev/2027',
    type: 'education',
    highlight: true,
    sort: 65,
    description:
      'Especialização Lato Sensu em Educação a Distância na Educação Profissional e Tecnológica (EPT).',
  },
  {
    id: 'patentes-2025',
    year: 2025,
    title: 'Registros / Patentes (INPI)',
    org: 'Projetos autorais',
    period: '2025',
    type: 'patent',
    highlight: true,
    sort: 70,
    description:
      'Registros como Glicemy, Glicemy API e SignForest, além de histórico de patente/registro do CaptionEase.',
  },
  {
    id: 'coorientador-tcc-unifal-2025',
    year: 2025,
    title: 'Coorientador de TCC (ESP32 & RFID)',
    org: 'UNIFAL-MG',
    period: 'ago/2025 – atual',
    type: 'education',
    highlight: false,
    sort: 72,
    description:
      'Mentoria técnica: arquitetura IoT, integração ESP32+RFID, autenticação, criptografia e boas práticas.',
  },

  // 2024
  {
    id: 'wm-devjr-2024',
    year: 2024,
    title: 'Desenvolvedor de Software Júnior',
    org: 'WM Saúde',
    period: 'nov/2024 – set/2025',
    type: 'work',
    highlight: true,
    sort: 100,
    description:
      'Full-stack (AdonisJS v6 + Next.js + PostgreSQL), discovery com stakeholders e padronização (GitFlow/ESLint/Prettier).',
  },
  {
    id: 'masterstech-youtube-2024',
    year: 2024,
    title: 'MastersTech (canal educacional)',
    org: 'YouTube',
    period: 'jun/2024 – atual',
    type: 'community',
    highlight: true,
    sort: 85,
    description:
      'Canal iniciado em jun/2024; publicações a partir de jul/2025. Conteúdo prático de programação e desenvolvimento.',
  },
  {
    id: 'premios-ifs-2024',
    year: 2024,
    title: 'Reconhecimentos acadêmicos',
    org: 'IFS',
    period: '2024',
    type: 'award',
    highlight: false,
    sort: 80,
    description:
      'Premiações em eventos científicos: Melhor Artigo (SEMEXT/IFS) e Segundo Melhor Artigo (SNCT/IFS).',
  },
  {
    id: 'inov-ifs-2024',
    year: 2024,
    title: 'Bolsista – Inov@IFS (DINOVE)',
    org: 'IFS',
    period: 'dez/2023 – out/2024',
    type: 'research',
    highlight: true,
    sort: 70,
    description:
      'Apoio a projetos de inovação: backend/IA, integrações e visão prática de tecnologia como ponte pra impacto.',
  },
  {
    id: 'monitor-ed1-2024',
    year: 2024,
    title: 'Monitor – Estrutura de Dados I',
    org: 'IFS',
    period: 'fev/2024 – jun/2024',
    type: 'education',
    highlight: false,
    sort: 20,
    description:
      'Monitoria com foco em fundamentos de algoritmos e estruturas de dados, apoio direto aos alunos.',
  },

  // 2023
  {
    id: 'robocode-2023',
    year: 2023,
    title: 'Coordenador Adjunto – Competição de Robocode',
    org: 'IFS (SNCT)',
    period: 'set/2023 – nov/2023',
    type: 'community',
    highlight: false,
    sort: 60,
    description:
      'Organização técnica, supervisão e divulgação científica com foco em programação competitiva e IA.',
  },
  {
    id: 'monitor-ia-2023',
    year: 2023,
    title: 'Monitor Bolsista – Programa Huawei AI (Residência TIC 08)',
    org: 'IFS • DINOVE • Huawei (Softex/MCTI)',
    period: 'dez/2022 – ago/2023',
    type: 'education',
    highlight: true,
    sort: 58,
    badges: [
      { label: 'Huawei AI', tone: 'accent', icon: 'cpu' },
      { label: 'PPI • Lei da Informática', tone: 'neutral', icon: 'shield' },
      { label: 'Curso híbrido • 40h', tone: 'neutral', icon: 'bolt' },
    ],
    description:
      'Atuação na capacitação em IA para a comunidade sergipana, em programa institucional com Huawei (parcerias Softex/MCTI). Apoio pedagógico e técnico em Python/IA, materiais, atividades práticas e orientação aos alunos.',
  },
  {
    id: 'publicacao-2023',
    year: 2023,
    title: 'Publicação científica',
    org: 'SBCOpenLib',
    period: '2023',
    type: 'publication',
    highlight: false,
    sort: 40,
    description:
      'Trabalho sobre acesso à formação em IA para pessoas de baixa renda (estudo de caso em Sergipe).',
  },

  // 2022
  {
    id: 'labic-grupo-ia-2022',
    year: 2022,
    title: 'Grupo de Estudos de IA (LABIC)',
    org: 'IFS',
    period: 'fev/2022 – set/2024',
    type: 'research',
    highlight: true,
    sort: 80,
    description:
      'Estudos e projetos com Python, ciência de dados e IA; experimentos, código e relatórios para pesquisa.',
  },
  {
    id: 'colegiado-2022',
    year: 2022,
    title: 'Membro Discente Efetivo do Colegiado',
    org: 'IFS',
    period: 'jul/2022 – set/2024',
    type: 'community',
    highlight: false,
    sort: 30,
    description:
      'Participação em decisões acadêmicas e melhoria contínua do curso, representando a visão dos estudantes.',
  },

  // 2021
  {
    id: 'labic-pesquisa-2021',
    year: 2021,
    title: 'Pesquisador em IA & Eletrônica (LABIC)',
    org: 'IFS',
    period: 'jul/2021 – set/2024',
    type: 'research',
    highlight: false,
    sort: 70,
    description:
      'Projetos de pesquisa e extensão: ML, redes neurais e aplicações em sistemas embarcados (IoT/ESP32).',
  },
  {
    id: 'aprendiz-40-2021',
    year: 2021,
    title: 'Instrutor e Monitor – Programa Aprendiz 4.0',
    org: 'IFS',
    period: 'jan/2021 – fev/2024',
    type: 'education',
    highlight: false,
    sort: 30,
    description:
      'Capacitação tecnológica: condução de atividades, materiais didáticos e suporte técnico/pedagógico.',
  },

  // 2020
  {
    id: 'bacharelado-2020',
    year: 2020,
    title: 'Bacharelado em Sistemas de Informação',
    org: 'IFS',
    period: 'fev/2020 – set/2024',
    type: 'education',
    highlight: true,
    sort: 50,
    description:
      'Formação base que sustentou pesquisa, projetos, monitorias e evolução profissional no desenvolvimento full stack.',
  },
]

// ========================
// Prêmios & Destaques (sem mock)
// ========================
export const awardsHighlightsData: AwardsHighlightItem[] = [
  {
    id: 'award-ufs-procc-2026',
    title: 'Mestrado Acadêmico em Ciência da Computação',
    subtitle: '1º lugar geral • Nota 6,245',
    org: 'UFS • PROCC',
    dateLabel: 'fev/2026',
    year: 2026,
    category: 'admission',
    highlight: true,
    iconKey: 'star',
    rank: '1º lugar geral',
    score: 'Nota 6,245',
    tags: ['Engenharia de Software (ES)', 'Sistemas de Informação (SI)'],
    description:
      'Aprovado no PROCC/UFS (ingresso 2026/1). Média final 6,245 (Barema 463,35; PPQ 80).',
    sort: 110,
  },
  {
    id: 'award-catalisa-ict-2025',
    title: 'Selecionado no Catalisa ICT',
    subtitle: 'Sebrae',
    org: 'AccessSim',
    dateLabel: '2025',
    year: 2025,
    category: 'program',
    highlight: true,
    iconKey: 'bolt',
    tags: ['Catalisa ICT', 'Sebrae'],
    description: 'Seleção no programa Catalisa ICT (Sebrae), vinculado ao trabalho na AccessSim.',
    sort: 95,
  },
  {
    id: 'award-inpi-registrations-2025',
    title: 'Registros / Patentes (INPI)',
    subtitle: 'Projetos autorais',
    org: 'Projetos autorais',
    dateLabel: '2025',
    year: 2025,
    category: 'patent',
    highlight: true,
    iconKey: 'award',
    tags: ['Glicemy', 'Glicemy API', 'SignForest', 'CaptionEase'],
    description:
      'Registros como Glicemy, Glicemy API e SignForest, além de histórico de patente/registro do CaptionEase.',
    sort: 70,
  },
  {
    id: 'award-ifs-recognitions-2024',
    title: 'Reconhecimentos acadêmicos',
    subtitle: 'Melhor Artigo • 2º Melhor Artigo',
    org: 'IFS',
    dateLabel: '2024',
    year: 2024,
    category: 'award',
    highlight: false,
    iconKey: 'award',
    tags: ['SEMEXT/IFS', 'SNCT/IFS'],
    description:
      'Premiações em eventos científicos: Melhor Artigo (SEMEXT/IFS) e Segundo Melhor Artigo (SNCT/IFS).',
    sort: 80,
  },
  {
    id: 'award-sbcopenlib-publication-2023',
    title: 'Publicação científica',
    subtitle: 'SBCOpenLib',
    org: 'SBCOpenLib',
    dateLabel: '2023',
    year: 2023,
    category: 'publication',
    highlight: false,
    iconKey: 'star',
    description:
      'Trabalho sobre acesso à formação em IA para pessoas de baixa renda (estudo de caso em Sergipe).',
    sort: 40,
  },
]