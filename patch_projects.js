const fs = require('fs');

let content = fs.readFileSync('src/lib/projects.ts', 'utf8');

content = content.replace(
  'export type ProjectCategory = "Backend/API" | "Games" | "Gráficos & Sistemas";',
  'export type ProjectCategory = "Backend/API" | "Games" | "Gráficos & Sistemas" | "Full Stack" | "IA & Dados" | "IoT & Embarcados" | "Educação";'
);

content = content.replace(
  'export const projectFilterValues = [\n  "Todos",\n  "Backend/API",\n  "Games",\n  "Gráficos & Sistemas",\n] as const;',
  'export const projectFilterValues = [\n  "Todos",\n  "Backend/API",\n  "Games",\n  "Gráficos & Sistemas",\n  "Full Stack",\n  "IA & Dados",\n  "IoT & Embarcados",\n  "Educação",\n] as const;'
);

const newProjects = `  {
    slug: "gestao-saude",
    name: "Gestão em Saúde (WM)",
    tagline: "Plataforma crítica de saúde com alta governança",
    category: "Full Stack",
    cover: "/images/projetos/gestao-saude.png",
    coverFit: "cover",
    summaryShort: "Desenvolvimento full-stack de produtos críticos para a área da saúde focando em qualidade, governança e segurança de dados.",
    summaryLong: "Sistema completo de gestão em saúde focado em resiliência e segurança. O backend foi desenvolvido utilizando AdonisJS v6 e PostgreSQL, enquanto a interface de usuário foi implementada em Next.js. O foco principal foi garantir a integridade dos dados médicos, com governança rígida, controle de acesso refinado (RBAC) e alta disponibilidade em infraestrutura escalável.",
    highlights: [
      "Integração Full-stack (AdonisJS v6, Next.js, PostgreSQL)",
      "Desenvolvimento de produtos críticos de alta disponibilidade",
      "Qualidade de código, testes e rigorosa governança",
      "Segurança e controle de acesso minucioso aos dados sensíveis",
    ],
    stack: ["AdonisJS v6", "Next.js", "PostgreSQL", "TypeScript", "Tailwind CSS"],
    status: "Concluído",
    featured: false,
  },
  {
    slug: "captionease",
    name: "CaptionEase",
    tagline: "Ferramenta de acessibilidade e fluxo de conteúdo",
    category: "IA & Dados",
    cover: "/images/projetos/captionease.png",
    coverFit: "cover",
    summaryShort: "Ferramenta voltada à acessibilidade, auxiliando na geração de legendas e fluxos de conteúdo de forma automatizada. Projeto com registro de patente no INPI.",
    summaryLong: "O CaptionEase é uma solução focada em acessibilidade e facilidade de criação de conteúdo, registrada oficialmente no INPI. A ferramenta automatiza partes fundamentais do fluxo de legendagem e estruturação de mídia, garantindo que o conteúdo seja mais inclusivo. Combinando interfaces eficientes e modelos de processamento linguístico, a solução resolve gargalos de tempo de criadores e veículos de informação.",
    highlights: [
      "Projeto oficialmente registrado e patenteado",
      "Foco total em acessibilidade (A11y) de mídias",
      "Otimização e automação de fluxos de legendagem",
    ],
    stack: ["Python", "Machine Learning", "FastAPI", "React"],
    status: "Concluído",
    featured: false,
  },
  {
    slug: "masterstech",
    name: "MastersTech — Educação Tech",
    tagline: "Canal no YouTube e plataforma educacional",
    category: "Educação",
    cover: "/images/projetos/masterstech.png",
    coverFit: "cover",
    summaryShort: "Iniciativa de conteúdo educativo com foco em programação, desenvolvimento de software e compartilhamento de conhecimento open-source.",
    summaryLong: "A MastersTech nasceu do desejo de democratizar o conhecimento técnico em desenvolvimento de software e IA. Por meio de tutoriais, projetos práticos e aulas teóricas no YouTube e em plataformas associadas, o projeto leva metodologias de ponta e dicas de mercado de forma acessível para novos desenvolvedores, abordando desde conceitos básicos até arquiteturas complexas de forma didática.",
    highlights: [
      "Produção de conteúdo educativo em tecnologia",
      "Dezenas de vídeos com foco em programação e arquitetura",
      "Impacto social através de democratização do conhecimento",
    ],
    stack: ["Ensino", "Edição de Vídeo", "Criação de Conteúdo", "Web Development"],
    status: "Ativo",
    featured: false,
  },
  {
    slug: "wf3-solutions",
    name: "WF3 Solutions",
    tagline: "Desenvolvimento de portais corporativos",
    category: "Full Stack",
    cover: "/images/projetos/wf3-solutions.png",
    coverFit: "cover",
    summaryShort: "Plataformas web/mobile, portais e integrações robustas com RBAC, auditoria e LGPD aplicados desde a primeira linha de código.",
    summaryLong: "Na WF3 Solutions, atuei no desenvolvimento de plataformas web e mobile para cenários B2B. A arquitetura dos projetos é construída focando rigidamente em Role-Based Access Control (RBAC), logs de auditoria contínuos e adequação nativa à LGPD (Lei Geral de Proteção de Dados). As entregas consistem em sistemas seguros, escaláveis e prontos para ambientes corporativos pesados.",
    highlights: [
      "Arquiteturas aderentes e nativas à LGPD",
      "Controle de acesso granular (RBAC) e trilha de auditoria",
      "Portais B2B completos com integração de APIs",
    ],
    stack: ["TypeScript", "Next.js", "Node.js", "PostgreSQL", "Docker"],
    status: "Concluído",
    featured: false,
  },
  {
    slug: "accesssim",
    name: "AccessSim",
    tagline: "Simulador de acessibilidade em React Native + IA",
    category: "IA & Dados",
    cover: "/images/projetos/accesssim.png",
    coverFit: "cover",
    summaryShort: "App mobile e IA (Python) que automatiza a análise de conformidade de acessibilidade física e digital com normas técnicas.",
    summaryLong: "O AccessSim cruza inteligência artificial, visão computacional e desenvolvimento mobile. Uma API Python expõe modelos que identificam, classificam e analisam fotografias ou dados de ambientes para validar normas de acessibilidade (como a NBR 9050). O usuário consome tudo de forma simples por um aplicativo React Native, tornando as vistorias muito mais ágeis.",
    highlights: [
      "Modelos de IA integrados a uma API Python centralizada",
      "App mobile robusto em React Native para vistorias em campo",
      "Automação de verificações de normas de acessibilidade",
    ],
    stack: ["Python", "FastAPI", "React Native", "Machine Learning", "Vision"],
    status: "Concluído",
    featured: true,
  },
  {
    slug: "glicemy",
    name: "Glicemy",
    tagline: "Inovação tecnológica aplicada à saúde",
    category: "Full Stack",
    cover: "/images/projetos/glicemy.png",
    coverFit: "cover",
    summaryShort: "Solução registrada em patente voltada a monitoramento e saúde, focada em entregar utilidade real e impacto clínico.",
    summaryLong: "O Glicemy é um projeto de impacto real na área de saúde digital, visando otimizar o acompanhamento e o tratamento dos usuários através de tecnologia amigável. Devido à sua abordagem inovadora de integração de dados de saúde, a plataforma e a sua API foram oficialmente registradas no INPI, consolidando seu valor de utilidade médica.",
    highlights: [
      "Plataforma de saúde com foco no usuário paciente",
      "Patentes e registros oficiais (Glicemy e Glicemy API) no INPI",
      "Segurança rigorosa com os dados sensíveis dos usuários",
    ],
    stack: ["Next.js", "Node.js", "PostgreSQL", "Saúde Digital"],
    status: "Concluído",
    featured: false,
  },
  {
    slug: "governanca-wm",
    name: "Governança, CI/CD & RBAC (WM)",
    tagline: "Infraestrutura escalável e pipelines",
    category: "Backend/API",
    cover: "/images/projetos/governanca-wm.png",
    coverFit: "cover",
    summaryShort: "Configuração de pipelines avançadas de CI/CD, padrões de código, políticas rigorosas de GitFlow e validações de acesso no backend.",
    summaryLong: "Como parte da atuação para modernizar o ciclo de vida do desenvolvimento na WM, estabeleci fluxos rígidos de CI/CD com GitFlow. O processo valida automaticamente os padrões de código, executa testes e previne deploys problemáticos. No nível de aplicação, foi implementado Bouncer e VineJS para lidar com autorização refinada e validação de dados.",
    highlights: [
      "Pipelines automatizadas e robustas para CI/CD",
      "Padronização rígida de código em todas as squads",
      "Integração do Bouncer (RBAC) e VineJS para segurança ponta-a-ponta",
    ],
    stack: ["GitHub Actions", "CI/CD", "AdonisJS", "Bouncer", "VineJS"],
    status: "Concluído",
    featured: false,
  },
  {
    slug: "pesquisa-labic",
    name: "Pesquisa Aplicada (LABIC/IFS)",
    tagline: "Machine Learning e Sistemas Embarcados",
    category: "IoT & Embarcados",
    cover: "/images/projetos/pesquisa-labic.png",
    coverFit: "cover",
    summaryShort: "Diversos projetos de pesquisa aliando Python e Machine Learning com hardwares embarcados (ESP32) para coletar e inferir sobre dados do mundo físico.",
    summaryLong: "Atuação no Laboratório de Inovação e Computação (LABIC/IFS) desenvolvendo a ponte entre software e hardware. Os experimentos utilizaram microcontroladores ESP32 acoplados a uma miríade de sensores (IoT) e transmitindo via MQTT para pipelines de Machine Learning em Python. O objetivo principal foi gerar ciência aplicada, resultando em artigos e provas de conceito que unem a nuvem à borda física.",
    highlights: [
      "Coleta e processamento de dados via MQTT e ESP32",
      "Treinamento de modelos ML locais e em nuvem",
      "Aplicações em smart environments e robótica",
    ],
    stack: ["Python", "Scikit-Learn", "ESP32", "C++", "MQTT", "IoT"],
    status: "Concluído",
    featured: false,
  },
  {
    slug: "talksmith",
    name: "TalkSmith",
    tagline: "Chatbot de NLP em PT-BR",
    category: "IA & Dados",
    cover: "/images/projetos/talksmith.png",
    coverFit: "cover",
    summaryShort: "Chatbot local (desktop) especializado no idioma Português utilizando algoritmos TF-IDF e BM25 integrados ao spaCy e NLTK.",
    summaryLong: "TalkSmith é um projeto que une Processamento de Linguagem Natural (NLP) a uma interface desktop clássica em Tkinter. A engine processa dezenas de corpora textuais em português (PT-BR) localmente. Usando técnicas tradicionais e sólidas como TF-IDF em conjunto com a métrica BM25 (e auxílio das bibliotecas spaCy e NLTK), o robô entende a intenção do usuário e vasculha a melhor resposta em uma base de conhecimento privada.",
    highlights: [
      "Processamento de linguagem em português brasileiro (PT-BR)",
      "Motor de rankeamento clássico eficiente (TF-IDF e BM25)",
      "Interface gráfica local desktop utilizando Tkinter",
    ],
    stack: ["Python", "NLP", "spaCy", "NLTK", "Tkinter", "TF-IDF"],
    status: "Concluído",
    featured: false,
  }
];`;

content = content.replace('  },\n];', '  },\n' + newProjects.substring(2) + ';');
content = content.replace('export const featuredProjects = projects.filter((p) => p.featured);', 'export const featuredProjects = projects.filter((p) => p.featured);');

fs.writeFileSync('src/lib/projects.ts', content, 'utf8');
