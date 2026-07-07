export type ProjectCategory = "Backend/API" | "Games" | "Gráficos & Sistemas" | "Full Stack" | "IA & Dados" | "IoT & Embarcados" | "Educação";

export const projectFilterValues = [
  "Todos",
  "Backend/API",
  "Games",
  "Gráficos & Sistemas",
  "Full Stack",
  "IA & Dados",
  "IoT & Embarcados",
  "Educação",
] as const;
export type ProjectFilter = (typeof projectFilterValues)[number];

export type ProjectStatus = "Ativo" | "Concluído" | "Em desenvolvimento";

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  category: ProjectCategory;
  cover: string;
  coverFit?: "cover" | "contain";
  coverPosition?: string;
  summaryShort: string;
  summaryLong: string;
  highlights: string[];
  stack: string[];
  status: ProjectStatus;
  links?: { label: string; href: string }[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "saberly",
    name: "Saberly",
    tagline: "LMS Full Stack (Udemy-like) em Laravel",
    category: "Full Stack",
    cover: "/images/projetos/saberly.jpeg",
    coverFit: "contain",
    summaryShort:
      "Plataforma LMS completa estilo Udemy, construída com Laravel. Inclui carrinho via AJAX, wishlist, checkout integrado, CMS de blog e chat em tempo real.",
    summaryLong:
      "Saberly é uma plataforma LMS (Learning Management System) construída com foco em práticas reais de mercado. Apresenta páginas públicas ricas, catálogo de cursos, carrinho e wishlist via AJAX (sem reload), checkout com Stripe, automações de e-mail e painéis dedicados para Admin e Instrutor. A arquitetura mantém coerência de domínio e separação de responsabilidades (Domain/Services), contando com chat em tempo real via broadcasting (Pusher) entre alunos e professores, sistema de RBAC e painel de controle absoluto para os instrutores.",
    highlights: [
      "Carrinho, wishlist e filtros dinâmicos via AJAX",
      "Checkout integrado com Stripe e automações de email",
      "Chat em tempo real (Broadcasting) Instrutor ↔ Estudante",
      "CMS completo de Blog e Newsletter nativo",
      "Arquitetura Laravel limpa (Services, Repositories, Jobs)",
      "Role-Based Access Control (RBAC) para Admin, Instrutor e Aluno",
    ],
    stack: [
      "Laravel",
      "PHP",
      "Tailwind CSS",
      "Vite",
      "AJAX",
      "Stripe",
      "PostgreSQL",
    ],
    status: "Concluído",
    links: [{ label: "github.com/Jovinull/Saberly", href: "https://github.com/Jovinull/Saberly" }],
    featured: true,
  },
  {
    slug: "stinkos",
    name: "StinkOS",
    tagline: "Sistema Operacional 32-bit x86 from scratch",
    category: "Gráficos & Sistemas",
    cover: "/images/projetos/stinkos.png",
    coverFit: "contain",
    summaryShort:
      "Sistema Operacional de 32-bits feito do zero. Possui bootloader compatível com Multiboot, kernel em C, TCP/IP stack (RFC 793), scheduler preemptivo e um port completo de Doom.",
    summaryLong:
      "O StinkOS é um Sistema Operacional 32-bit x86 construído totalmente do zero, sem usar nenhuma biblioteca de terceiros no kernel. Ele possui um bootloader ELF-aware, scheduler preemptivo, IPC via anonymous pipes e signals, Virtual File System (VFS) por processo, mixer SB16 com resampling Q16.16 e um pacote completo de rede com TCP/IP stack, DHCP e DNS. Além de ser altamente focado em baixo nível, ele roda um port completo e nativo de Doom no seu userland.",
    highlights: [
      "Zero bibliotecas de terceiros no Kernel",
      "Multiboot-compatible kernel & ELF-aware bootloader",
      "Stack TCP/IP completa implementada do zero (RFC 793)",
      "SB16 Audio Mixer com resampling e VFS por processo",
      "Port completo de Doom rodando de forma nativa",
    ],
    stack: [
      "C",
      "x86 Assembly",
      "OS Development",
      "TCP/IP",
      "Multiboot",
    ],
    status: "Concluído",
    links: [{ label: "github.com/Jovinull/StinkOS", href: "https://github.com/Jovinull/StinkOS" }],
    featured: true,
  },
  {
    slug: "gateway-nacional",
    name: "CerneBR · Gateway Nacional",
    tagline: "Microserviço self-hosted para dados públicos brasileiros",
    category: "Backend/API",
    cover: "/images/projetos/gateway-nacional.png",
    coverFit: "contain",
    summaryShort:
      "Blinda aplicações brasileiras contra a instabilidade das APIs públicas com HedgedExecutor, cache revalidado em background e fallbacks isolados por circuit breaker.",
    summaryLong:
      "Microserviço self-hosted que blinda aplicações contra rate limits, quedas em cascata e formatos divergentes dos provedores públicos brasileiros (ViaCEP, ReceitaWS, IBGE, FIPE, DATASUS). O HedgedExecutor dispara requisições paralelas — o primeiro provedor a responder vence, o resto é cancelado. RefreshAheadCache revalida dados quentes em background via Virtual Threads do Java 25. Circuit Breakers (Resilience4j) isolados por upstream evitam falha em cascata. Sidecars opcionais com FlareSolverr (Chromium) e Selenium resolvem rotas com CAPTCHA e portais governamentais legados.",
    highlights: [
      "HedgedExecutor — requisições paralelas com cancelamento automático",
      "RefreshAheadCache em Virtual Threads (Java 25)",
      "Circuit Breakers Resilience4j isolados por upstream",
      "Stack completa (2GB) ou Modo Leve (~512MB de RAM)",
      "Portal de docs em Next.js 16 com playground interativo",
      "Testcontainers + WireMock + Playwright na CI",
    ],
    stack: [
      "Java 25",
      "Spring Boot 4",
      "Virtual Threads",
      "Redis",
      "Docker",
      "Resilience4j",
      "Testcontainers",
      "Next.js 16",
      "Playwright",
    ],
    status: "Ativo",
    links: [{ label: "cernebr.dev.br", href: "https://cernebr.dev.br" }],
    featured: true,
  },
  {
    slug: "ironmarch",
    name: "Iron March",
    tagline: "Roguelike de dark fantasy em C++20 puro",
    category: "Games",
    cover: "/images/projetos/ironmarch.png",
    coverFit: "cover",
    summaryShort:
      "Roguelike turn-based em grid ASCII escrito do zero em C++20 sobre ECS (EnTT). 10 andares procedurais, IA por facções, save binário e áudio sintetizado em runtime.",
    summaryLong:
      "Roguelike turn-based em grid ASCII (estilo NetHack/Brogue) escrito do zero em C++20 sobre arquitetura ECS rigorosa com EnTT. Dez andares procedurais — masmorra clássica ou caverna orgânica via cellular automata + flood fill — com ecologia viva onde monstros se atacam entre si por facções (Greenskin, Undead, Beast, Neutral). Save/load binário com cereal + entt::snapshot serializa o registry inteiro em ~1-2 KB. Áudio 100% procedural via miniaudio (PCM sintetizado em runtime, zero arquivos). Portabilidade absoluta: FetchContent + BearLibTerminal por plataforma, sem dependência de sistema.",
    highlights: [
      "ECS rigoroso com EnTT 3.13",
      "Geração procedural dual: masmorra + caverna (cellular automata)",
      "IA sistêmica por 5 facções com comportamento emergente",
      "Save binário versionado (~1-2 KB) via cereal + entt::snapshot",
      "Áudio sintetizado em runtime (square sweep, noise burst, arpejo)",
      "Build cross-platform sem instalar nada no sistema",
    ],
    stack: [
      "C++20",
      "CMake 3.20+",
      "EnTT (ECS)",
      "BearLibTerminal",
      "cereal",
      "miniaudio",
    ],
    status: "Em desenvolvimento",
    featured: true,
  },
  {
    slug: "idle-mine-redux",
    name: "Idle Mine: Redux",
    tagline: "Modernização tipada de um incremental game abandonado",
    category: "Games",
    cover: "/images/projetos/idle-mine-redux.png",
    coverFit: "contain",
    summaryShort:
      "Continuação modernizada de Idle Mine: Remix em Vue 3 + TypeScript strict, com aritmética de números infinitos e save backward-compatible com a versão original.",
    summaryLong:
      "Continuação independente de Idle Mine: Remix (veprogames, abandonado) — incremental game no navegador onde você minera pedras, compra upgrades e progride por dezenas de mundos. Reescrito em Vue 3 Composition API com TypeScript strict + Project References. Aritmética de números absurdamente grandes via break_infinity.js, formatação em múltiplas notações (Scientific, Engineering, Letters, Logarithm + IdleMineNotation/SI customizadas portadas do original). Save versionado em localStorage (v2) com backward-compat com saves do Remix (v1). Story milestones com requirement-functions tipadas substituem o antigo eval(string).",
    highlights: [
      "Vue 3 Composition API com SFCs e TypeScript strict",
      "Pinia composables com state em reactive() compartilhado",
      "Aritmética de números infinitos (break_infinity.js)",
      "Notações customizadas portadas do Idle Mine original",
      "Save backward-compatible (v1 do Remix → v2)",
      "Story milestones tipados — substitui eval(string)",
    ],
    stack: [
      "Vue 3",
      "TypeScript",
      "Pinia",
      "Vite 8",
      "break_infinity.js",
      "@antimatter-dimensions/notations",
      "ESLint 9",
    ],
    status: "Em desenvolvimento",
    featured: true,
  },
  {
    slug: "storestash",
    name: "StoreStash",
    tagline: "Gestão de produtos e estoque em Laravel 13",
    category: "Backend/API",
    cover: "/images/projetos/storestash.png",
    coverFit: "cover",
    coverPosition: "top",
    summaryShort:
      "Sistema full-stack de gestão de produtos e estoque em Laravel 13 / PHP 8.3: CRUD filtrável, movimentações de estoque transacionais e API RESTful — coberto por testes, análise estática e CI.",
    summaryLong:
      "Sistema de gerenciamento de produtos construído em Laravel 13 (PHP 8.3) sobre MVC. CRUD completo com filtros combináveis (nome, categoria, faixa de preço e status), relacionamento Produto↔Categoria via Eloquent com eager loading contra N+1 e paginação que preserva os filtros na navegação. As movimentações de estoque — entrada, saída e ajuste — rodam em um StockService com transação atômica e lockForUpdate: uma saída nunca deixa o estoque negativo, com rollback garantido. A mesma lógica de filtros alimenta um endpoint RESTful via API Resources. Qualidade industrial: PHPUnit cobrindo a interface web e a API, Larastan (PHPStan nível 5), Laravel Pint, ambiente Docker via Sail e pipeline de CI no GitHub Actions a cada push.",
    highlights: [
      "StockService transacional com lockForUpdate e rollback (sem estoque negativo)",
      "CRUD filtrável com Eloquent + eager loading contra N+1",
      "API RESTful via API Resources reaproveitando a lógica de filtros",
      "PHPUnit cobrindo a interface web e a API",
      "Larastan (PHPStan nível 5) + Laravel Pint na CI",
      "Ambiente Docker pronto via Laravel Sail",
    ],
    stack: [
      "Laravel 13",
      "PHP 8.3",
      "Eloquent ORM",
      "API RESTful",
      "PHPUnit",
      "Larastan",
      "Tailwind CSS 4",
      "Docker",
    ],
    status: "Concluído",
    links: [
      {
        label: "codeberg.org/Jovinull/StoreStash",
        href: "https://codeberg.org/Jovinull/StoreStash",
      },
    ],
  },
  {
    slug: "stdoutspace",
    name: "StdoutSpace",
    tagline: "Motor de renderização de espaço no terminal em C++17",
    category: "Gráficos & Sistemas",
    cover: "/images/projetos/stdoutspace.png",
    coverFit: "cover",
    summaryShort:
      "Simulação de espaço zero-player que renderiza galáxias e um buraco negro com lente gravitacional direto no terminal, via meio-bloco e buffer de luz aditivo — C++17 puro, sem dependências externas.",
    summaryLong:
      "Motor de renderização cinematográfica que desenha o espaço direto no terminal, sem janela gráfica. Usa o caractere de meio-bloco '▀' para dobrar a resolução vertical (2 pixels por célula) e compõe a cena num framebuffer de LUZ ADITIVA em ponto flutuante — estrelas, nebulosa, galáxia e disco de acreção somam brilho, sem z-buffer nem ordenação. Um Director autônomo conduz a câmera por um ciclo CRUISE → WARP → APPROACH → CROSSING, sorteando a cada volta entre uma galáxia espiral logarítmica (com bojo, faixas de poeira e regiões HII) ou a anomalia: um buraco negro com disco de acreção (doppler beaming) e lente gravitacional aproximada em screen-space (r' = r + k/r). Pós-processamento com bloom, dithering ordenado anti-banding e vignette. POSIX raw-mode com RAII que restaura o terminal mesmo em caso de crash. Zero dependências além da STL, com alvo de 60 FPS estáveis.",
    highlights: [
      "Render por pixels no terminal via meio-bloco '▀' (2 pixels por célula)",
      "Framebuffer de luz aditiva em float — sem z-buffer, soma comutativa",
      "Lente gravitacional aproximada em screen-space (r' = r + k/r)",
      "Galáxia espiral procedural: bojo, faixas de poeira e regiões HII",
      "Director zero-player: ciclo CRUISE → WARP → APPROACH → CROSSING",
      "C++17 puro, sem dependências externas, alvo de 60 FPS",
    ],
    stack: [
      "C++17",
      "CMake",
      "POSIX termios",
      "ANSI truecolor",
      "Ruído fBm",
      "-O3 / -march=native",
    ],
    status: "Em desenvolvimento",
    links: [
      {
        label: "codeberg.org/Jovinull/StdoutSpace",
        href: "https://codeberg.org/Jovinull/StdoutSpace",
      },
    ],
  },
  {
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
];;

export const featuredProjects = projects.filter((p) => p.featured);

export const projectFilters: { value: ProjectFilter; count: number }[] =
  projectFilterValues.map((value) => ({
    value,
    count:
      value === "Todos"
        ? projects.length
        : projects.filter((p) => p.category === value).length,
  }));
