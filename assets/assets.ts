import { InfoItem, ServiceItem, WorkItem, Tools } from '@/app/types/assets';

import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import postgresql from './postgresql.png';
import adonisjs from './adonisjs.png';
import nextjs from './nextjs.png';
import python from './python.png';
import nodejs from './nodejs.png';
import canva from './canva.png';
import esp32_chip from './esp32_chip.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo-dark.png';
import mail_icon from './mail-icon.png';
import mail_icon_dark from './mail-icon-dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import download_icon_dark from './download-icon-dark.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon-icon.png';
import sun_icon from './sun-icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import edu_icon_service from './edu-icon-service.png';
import code_icon_service from './code-icon-service.png';
import ai_service from './ai-service.png';
import embarcados_service from './embarcados-service.png';
import web_icon_service from './web-icon-service.png';
import research_icon_service from './research-icon-service.png';

// ========================
// Assets
// ========================
export const assets = {
  user_image,
  code_icon,
  code_icon_dark,
  edu_icon,
  edu_icon_dark,
  project_icon,
  project_icon_dark,
  vscode,
  postgresql,
  adonisjs,
  nextjs,
  python,
  nodejs,
  esp32_chip,
  canva,
  git,
  mongodb,
  right_arrow_white,
  logo,
  logo_dark,
  mail_icon,
  mail_icon_dark,
  profile_img,
  download_icon,
  download_icon_dark,
  hand_icon,
  header_bg_color,
  moon_icon,
  sun_icon,
  arrow_icon,
  arrow_icon_dark,
  menu_black,
  menu_white,
  close_black,
  close_white,
  right_arrow,
  send_icon,
  right_arrow_bold,
  right_arrow_bold_dark,
  edu_icon_service,
  code_icon_service,
  ai_service,
  embarcados_service,
  web_icon_service,
  research_icon_service,
} as const;

// ========================
// Dados
// ========================
export const workData: WorkItem[] = [
  {
    title: 'Frontend project',
    description: 'Web Design',
    bgImage: '/work-1.png',
  },
  {
    title: 'Geo based app',
    description: 'Mobile App',
    bgImage: '/work-2.png',
  },
  {
    title: 'Photography site',
    description: 'Web Design',
    bgImage: '/work-3.png',
  },
  {
    title: 'UI/UX designing',
    description: 'UI/UX Design',
    bgImage: '/work-4.png',
  },
];

export const serviceData: ServiceItem[] = [
  {
    icon: assets.web_icon_service,
    title: 'Desenvolvimento Web',
    description:
      'Criação de aplicações modernas, responsivas e escaláveis usando Next.js, AdonisJS e PostgreSQL.',
    link: '',
  },
  {
    icon: assets.embarcados_service,
    title: 'Sistemas Embarcados & IoT',
    description:
      'Desenvolvimento com ESP32 e sensores (DHT22, MQ-02, HC-SR04) para automação e monitoramento.',
    link: '',
  },
  {
    icon: assets.ai_service,
    title: 'Inteligência Artificial Aplicada',
    description:
      'Implementação de IA com Python, redes neurais e aprendizagem por reforço para jogos e automações.',
    link: '',
  },
  {
    icon: assets.code_icon_service,
    title: 'Soluções Full Stack',
    description:
      'Integração frontend e backend com autenticação JWT, bancos de dados e APIs RESTful robustas.',
    link: '',
  },
  {
    icon: assets.edu_icon_service,
    title: 'Mentoria & Educação',
    description:
      'Criação de conteúdo educacional, monitoria e capacitação tecnológica para inclusão e formação em TI.',
    link: '',
  },
  {
    icon: assets.research_icon_service,
    title: 'Projetos de Pesquisa',
    description:
      'Desenvolvimento de soluções inovadoras em IA, microeletrônica e educação com foco em impacto social.',
    link: '',
  },
];

export const infoList: InfoItem[] = [
  {
    icon: assets.code_icon,
    iconDark: assets.code_icon_dark,
    title: 'Linguagens',
    description: 'TypeScript, JavaScript, Python, HTML, CSS',
  },
  {
    icon: assets.edu_icon,
    iconDark: assets.edu_icon_dark,
    title: 'Formação',
    description: 'Bacharel em Sistemas de Informação - IFS',
  },
  {
    icon: assets.project_icon,
    iconDark: assets.project_icon_dark,
    title: 'Projetos',
    description: '+10 projetos em IA, IoT, Web e Educação',
  },
];

export const toolsData: Tools[] = [
  vscode,
  mongodb,
  git,
  postgresql,
  adonisjs,
  nextjs,
  python,
  esp32_chip,
  nodejs,
  canva,
];
