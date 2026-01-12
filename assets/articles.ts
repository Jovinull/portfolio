import type { ArticleItem } from '@/types/assets/articles'

export const articlesData: readonly ArticleItem[] = [
  {
    slug: 'arquitetura-rbac-adonisjs',
    title: 'RBAC de verdade no AdonisJS: do banco ao menu dinâmico',
    summary:
      'Uma abordagem pragmática para permissões por perfil, policies, abilities e UI condicional — com foco em consistência e manutenção.',
    dateISO: '2025-10-10',
    readTime: '9 min',
    tags: ['AdonisJS', 'RBAC', 'Arquitetura'],
    highlight: true,
    frequency: '98.7 FM',

    publicationLocation: 'Aracaju, SE, Brasil',
    doi: '10.1234/abcd.2025.001',
    issn: '1234-5678',

    publicationLink: {
      label: 'Página na revista',
      href: 'https://revista.exemplo.com.br/artigos/arquitetura-rbac-adonisjs',
    },
    downloadLink: {
      label: 'Baixar PDF',
      href: '/downloads/arquitetura-rbac-adonisjs.pdf',
    },
  },
  {
    slug: 'nextjs-ux-portfolio',
    title: 'Portfólio em Next.js com estética “produto”: tokens, motion e hierarquia',
    summary:
      'Como sair do “site bonitinho” e chegar num layout com peso de produto: spacing, contraste, motion e micro-interações.',
    dateISO: '2025-11-03',
    readTime: '7 min',
    tags: ['Next.js', 'UI/UX', 'Front-end'],
    highlight: true,
    frequency: '221 Hz',

    publicationLocation: 'Aracaju, SE, Brasil',
    doi: '10.1234/abcd.2025.001',
    issn: '1234-5678',

    publicationLink: {
      label: 'Página na revista',
      href: 'https://revista.exemplo.com.br/artigos/nextjs-ux-portfolio',
    },
    downloadLink: {
      label: 'Baixar PDF',
      href: '/downloads/nextjs-ux-portfolio.pdf',
    },
  },
  {
    slug: 'iot-esp32-mqtt-hivemq',
    title: 'ESP32 + MQTT (TLS) na prática: robustez sem dor',
    summary:
      'Conectando sensores, publicando tópicos limpos e evitando os erros clássicos — com foco em estabilidade e debug rápido.',
    dateISO: '2025-09-18',
    readTime: '11 min',
    tags: ['ESP32', 'MQTT', 'IoT'],
    frequency: 'CH-07',

    publicationLocation: 'Aracaju, SE, Brasil',
    doi: '10.1234/abcd.2025.001',
    // issn opcional

    publicationLink: {
      label: 'Página na revista',
      href: 'https://revista.exemplo.com.br/artigos/iot-esp32-mqtt-hivemq',
    },
    downloadLink: {
      label: 'Baixar PDF',
      href: '/downloads/iot-esp32-mqtt-hivemq.pdf',
    },
  },
  {
    slug: 'ia-local-identidade-visual',
    title: 'IA local para geração de identidade visual: privacidade e controle',
    summary:
      'Um caminho possível pra gerar imagens com dados próprios, minimizando dependência de terceiros e evitando vazamento.',
    dateISO: '2025-12-01',
    readTime: '10 min',
    tags: ['IA', 'Privacidade', 'Imagens'],
    frequency: '13.6 kHz',

    publicationLocation: 'Aracaju, SE, Brasil',
    // doi opcional
    issn: '1234-5678',

    publicationLink: {
      label: 'Página na revista',
      href: 'https://revista.exemplo.com.br/artigos/ia-local-identidade-visual',
    },
    downloadLink: {
      label: 'Baixar PDF',
      href: '/downloads/ia-local-identidade-visual.pdf',
    },
  },
  {
    slug: 'api-design-consistencia',
    title: 'Design de API: consistência antes de performance',
    summary:
      'Erros padronizados, contratos previsíveis e naming coerente — o tipo de detalhe que salva um produto no longo prazo.',
    dateISO: '2025-08-22',
    readTime: '6 min',
    tags: ['API', 'Boas práticas'],
    frequency: '404.0',

    publicationLocation: 'Aracaju, SE, Brasil',
    doi: '10.1234/abcd.2025.001',
    issn: '1234-5678',

    publicationLink: {
      label: 'Página na revista',
      href: 'https://revista.exemplo.com.br/artigos/api-design-consistencia',
    },
    downloadLink: {
      label: 'Baixar PDF',
      href: '/downloads/api-design-consistencia.pdf',
    },
  },
]
