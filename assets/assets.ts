import type { WorkItem } from '@/app/types/assets';

import user_image from './user-image.png';
import logo from './logo.png';
import logo_dark from './logo-dark.png';
import profile_img from './profile-img.png';
import header_bg_color from './header-bg-color.png';
import footer_bg_color from './footer-bg-color.png';

import type { IconType } from 'react-icons';
import { FiBookOpen, FiCode, FiCpu, FiFolder, FiGlobe, FiSearch, FiZap } from 'react-icons/fi';
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
} from 'react-icons/si';
import { BiLogoVisualStudio } from 'react-icons/bi';

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
} as const;

// ========================
// Dados
// ========================
export const workData: WorkItem[] = [
  {
    title: 'Gestão em Saúde (WM)',
    description:
      'Full-stack (AdonisJS v6, Next.js, PostgreSQL) • Produtos críticos • Qualidade e governança',
    bgImage: '/work-1.png',
  },
  {
    title: 'Governança, CI/CD & RBAC (WM)',
    description: 'Pipelines, padrões de código, políticas, GitFlow e validações (VineJS/Bouncer)',
    bgImage: '/work-2.png',
  },
  {
    title: 'MastersTech — Educação Tech',
    description: 'Conteúdo educativo com foco em programação e desenvolvimento de software',
    bgImage: '/work-3.png',
  },
  {
    title: 'Pesquisa aplicada (LABIC/IFS)',
    description: 'Projetos com Python, machine learning e sistemas embarcados (ESP32/IoT)',
    bgImage: '/work-4.png',
  },
  {
    title: 'AccessSim',
    description:
      'IA em Python + API • App mobile em React Native • Automação da análise de acessibilidade',
    bgImage: '/work-3.png',
  },
  {
    title: 'WF3 Solutions',
    description:
      'Plataformas web/mobile, portais e integrações • RBAC, auditoria e LGPD desde o primeiro deploy',
    bgImage: '/work-4.png',
  },
  {
    title: 'Glicemy',
    description:
      'Solução registrada como patente • Saúde e tecnologia com foco em impacto e utilidade real',
    bgImage: '/work-1.png',
  },
  {
    title: 'CaptionEase',
    description:
      'Projeto registrado como patente • Ferramenta voltada a acessibilidade e fluxo de conteúdo',
    bgImage: '/work-2.png',
  },
];

export type ServiceCardItem = {
  Icon: IconType;
  title: string;
  description: string;
  link: string;
};

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
];

// ========================
// About (ícones via react-icons)
// ========================
export type InfoListItem = {
  Icon: IconType;
  title: string;
  description: string;
};

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
];

export type ToolItem = {
  name: string;
  Icon: IconType;
};

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
];
