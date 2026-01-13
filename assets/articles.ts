import type { ArticleItem } from "@/types/assets/articles"

export const articlesData: readonly ArticleItem[] = [
    {
    slug: 'youtube-ept-educacao-aberta-revista-all-17-2025',
    // Ajuste o título se no PDF estiver diferente (você não colou o título do artigo)
    title: 'YouTube como extensão da EPT: educação aberta, inclusão digital e autonomia do aprendiz',
    summary:
      'Discussão teórico-prática sobre o YouTube como ferramenta complementar na Educação Profissional e Tecnológica (EPT), alinhada a princípios de educação aberta, inclusão digital e protagonismo do estudante.',
    cover: {
      src: '/articles/covers/capa-artigo-youtube-ept-educacao-aberta.png',
      alt: 'Capa do artigo: Youteber na EPT',
    },
    dateISO: '2025-10-01',
    readTime: '10 min',
    tags: ['Educação', 'EPT', 'YouTube', 'Educação Aberta', 'Inclusão Digital'],
    highlight: true,

    frequency: 'REV. ALL • Nº 17 • 2025',
    publicationLocation: 'Brasil',
    issn: '2594-5378',

    authors: ['Cassiano Campos de Morais',
      'Felipe Jovino dos Santos'
    ],

    publicationLink: {
      href: 'https://allrevista.com.br/wp-content/uploads/2025/10/Revista-no-17.pdf',
      label: 'Ver na revista (PDF)',
    },
    downloadLink: {
      href: 'https://drive.google.com/file/d/1fBLBdojePHH_L9HBPJWk_MDApAp9PFra/view?usp=sharing',
      label: 'Baixar PDF',
    },

    content: [
      { type: 'h2', text: 'Justificativa' },
      {
        type: 'p',
        text:
          'A consolidação do YouTube como ferramenta de ensino é tratada como necessidade social diante das desigualdades no acesso à educação formal e das transformações nas formas de aprender. No contexto da Educação Profissional e Tecnológica (EPT), a plataforma é apresentada como aliada para expandir alcance, flexibilizar trajetórias formativas e dialogar com linguagens e dispositivos contemporâneos.',
      },
      {
        type: 'p',
        text:
          'O texto argumenta que, em um país com barreiras geográficas, econômicas e estruturais, plataformas digitais podem funcionar como pontes entre o conhecimento e públicos historicamente excluídos. Também relaciona a expansão do uso de vídeos educacionais às agendas de educação aberta e inclusão digital.',
      },

      { type: 'divider' },

      { type: 'h2', text: 'Objetivo do artigo' },
      {
        type: 'p',
        text:
          'Analisar o potencial do YouTube como ferramenta complementar ao ensino profissional e tecnológico, com ênfase no seu uso como estratégia de educação aberta. O objetivo inclui discutir ampliação do acesso ao conhecimento técnico, autonomia do aprendiz e formação de competências profissionais, especialmente em contextos de vulnerabilidade e exclusão educacional.',
      },

      { type: 'divider' },

      { type: 'h2', text: 'Metodologia' },
      {
        type: 'p',
        text:
          'Abordagem qualitativa com revisão de literatura sobre educação aberta, tecnologias digitais e EPT, consultando artigos acadêmicos e documentos institucionais. A análise é complementada por relato de experiência com produção de conteúdo no canal MastersTech TI, usando elementos de pesquisa narrativa para evidenciar práticas pedagógicas no contexto digital.',
      },

      { type: 'divider' },

      { type: 'h2', text: 'YouTube como ambiente educacional' },
      {
        type: 'p',
        text:
          'O YouTube é descrito como ambiente educacional legítimo e acessível, com características que favorecem aprendizagem significativa: acesso sob demanda, multimodalidade, variedade de estilos de ensino e personalização. São destacadas playlists, organização modular, transmissões ao vivo e interação assíncrona, favorecendo metodologias ativas e construção colaborativa do conhecimento.',
      },
      {
        type: 'p',
        text:
          'Na EPT, o artigo enfatiza o valor de demonstrar processos práticos (montagem, configuração, uso de ferramentas, aplicação de algoritmos), além do estímulo ao letramento digital e à capacidade crítica de buscar, filtrar e aplicar informações.',
      },

      { type: 'divider' },

      { type: 'h2', text: 'Educação aberta no contexto digital' },
      {
        type: 'p',
        text:
          'A educação aberta é apresentada como movimento para ampliar acesso ao conhecimento por meio de recursos educacionais livres, flexibilidade e autonomia do aprendiz. O texto relaciona os princípios (acesso irrestrito, licenças abertas, reutilização/adaptação, participação ativa) com a lógica de publicação e compartilhamento do YouTube, reconhecendo alinhamentos e limites.',
      },
      {
        type: 'p',
        text:
          'A argumentação sustenta que compreender o YouTube como vetor da educação aberta é reconhecer seu papel potencial na transformação social, sobretudo em um país com desigualdades históricas de acesso à educação.',
      },

      { type: 'divider' },

      { type: 'h2', text: 'Desafios e limites' },
      {
        type: 'p',
        text:
          'O artigo também explicita limites: curadoria e confiabilidade do conteúdo, ausência de validação acadêmica, necessidade de autorregulação do aprendiz, falta de certificação formal e desigualdade de acesso à internet. Também menciona efeitos de algoritmos de recomendação que podem priorizar engajamento em detrimento de densidade pedagógica.',
      },

      { type: 'divider' },

      { type: 'h2', text: 'Conclusão' },
      {
        type: 'p',
        text:
          'Conclui que o YouTube, quando utilizado de forma crítica, planejada e ética, pode atuar como extensão estratégica da EPT, contribuindo para trajetórias formativas mais inclusivas, flexíveis e alinhadas às realidades contemporâneas. Defende o reconhecimento e a potencialização desse recurso por educadores, instituições e políticas públicas.',
      },

      { type: 'divider' },

      { type: 'h2', text: 'Referências citadas no texto' },
      {
        type: 'p',
        text:
          'Fundação Roberto Marinho (2023); MEC (2023); UNESCO (2021); TIC Educação (2023); Iniciativa Educação Aberta (2019).',
      },

      { type: 'divider' },

      { type: 'h2', text: 'Imagens do artigo' },
      {
        type: 'p',
        text:
          'Ainda não inseri imagens porque preciso do PDF anexado aqui para extrair e recortar as figuras (ou você pode me mandar as imagens prontas). Assim que você anexar, eu te devolvo os PNGs e já coloco os blocos { type: "image" } no content.',
      },
    ],
  },

  {
    slug: 'ml-reconhecimento-sinais-libras-erbase-2025',
    title: 'Abordagens de Aprendizado de Máquina para o Reconhecimento de Sinais em Libras',
    summary:
      'Estudo sobre reconhecimento de sinais estáticos em Libras usando landmarks do MediaPipe e modelos RNN, Random Forest e XGBoost. O XGBoost obteve o melhor desempenho em precisão e F1-score, com proposta de benchmark público e próximos passos para sinais dinâmicos.',
    cover: {
      src: '/articles/covers/capa-artigo-libras-ml.png',
      alt: 'Capa do artigo: Reconhecimento de Sinais de Libras',
    },
    dateISO: '2025-08-12',
    readTime: '6 min',
    tags: ['Libras', 'Aprendizado de Máquina', 'MediaPipe', 'XGBoost', 'Acessibilidade'],
    highlight: true,

    frequency: 'ERBASE 2025 • Workshop de Trabalhos de Pesquisa',
    publicationLocation: 'Lagarto, SE, Brasil',

    doi: '10.5753/erbase.2025.13807',

    authors: [
      'Kauã de Melo Alves',
      'Felipe Jovino dos Santos',
      'Stephanie Kamarry Alves de Sousa',
    ],

    publicationLink: {
      href: 'https://sol.sbc.org.br/index.php/erbase/article/view/39317',
      label: 'Ver na SBC OpenLib',
    },
    downloadLink: {
      href: 'https://drive.google.com/file/d/1HIpO14h8Rk8X44rHGriXt1UGn2mhQWpj/view?usp=sharing',
      label: 'Baixar PDF',
    },

    content: [
      { type: 'h2', text: 'Resumo' },
      {
        type: 'p',
        text:
          'O artigo investiga reconhecimento de sinais estáticos em Libras com aprendizado de máquina, enfrentando variações regionais, iluminação e posicionamento. Foram avaliados RNN, Random Forest e XGBoost usando landmarks extraídos com MediaPipe em 25.000 imagens, com melhor desempenho do XGBoost em precisão e F1-score.',
      },

      { type: 'divider' },

      { type: 'h2', text: 'Materiais e métodos' },
      {
        type: 'p',
        text:
          'O dataset possui 20 sinais estáticos (alfabeto), totalizando 25.000 imagens. As mãos foram representadas por landmarks do MediaPipe (21 pontos, coordenadas normalizadas). Houve pré-processamento com normalização e ajuste de contraste, e avaliação via validação cruzada KFold (10 dobras) usando precisão, recall e F1-score.',
      },

      { type: 'divider' },

      { type: 'h2', text: 'Resultados' },
      {
        type: 'p',
        text:
          'O XGBoost foi o melhor nas métricas reportadas (precisão e F1-score), superando RNN e Random Forest. Abaixo, a síntese numérica conforme o artigo:',
      },
      {
        type: 'code',
        language: 'txt',
        code: `Tabela 1 — Desempenho dos Modelos
          Modelo          Precisão   Recall   F1-score
          RNN              85.3%     84.1%     84.7%
          Random Forest    80.5%     78.9%     79.6%
          XGBoost          87.9%     86.5%     87.2%`,
      },

      { type: 'divider' },

      { type: 'h2', text: 'Curvas e comparações visuais' },
      {
        type: 'image',
        src: '/articles/figures/erbase-2025-13807-fig1.png',
        alt: 'Curva de aprendizado comparativa entre XGBoost, RNN e Random Forest',
        caption: 'Figura 1 — Curva de aprendizado comparativa entre os modelos.',
      },
      {
        type: 'image',
        src: '/articles/figures/erbase-2025-13807-fig2.png',
        alt: 'Comparação do desempenho dos modelos (precisão, recall e F1-score)',
        caption: 'Figura 2 — Comparação do Desempenho dos Modelos.',
      },
      {
        type: 'image',
        src: '/articles/figures/erbase-2025-13807-fig3.png',
        alt: 'Exemplo de reconhecimento de sinal em tempo real com landmarks sobre a mão',
        caption: 'Figura 3 — Reconhecimento de sinal em tempo real.',
      },

      { type: 'divider' },

      { type: 'h2', text: 'Contribuições e próximos passos' },
      {
        type: 'p',
        text:
          'A contribuição destacada é a criação de um benchmark público para sinais estáticos de Libras e a indicação de continuidade com sinais dinâmicos e técnicas mais avançadas (deep learning) para aumentar robustez e aplicabilidade no mundo real.',
      },
    ],
  },

  {
    slug: 'etica-da-ia-impactos-sociais-culturais-rev-all-16-2025',

    title: 'Ética da Inteligência Artificial: desafios e impactos sociais e culturais',

    summary:
      'Análise dos principais desafios éticos da IA (viés algorítmico, transparência e privacidade) e seus impactos na sociedade e na cultura digital, com ênfase na necessidade de regulamentação e inclusão digital para um desenvolvimento responsável.',
    cover: {
      src: '/articles/covers/capa-artigo-etica-ia-impacto-social.png',
      alt: 'Capa do artigo: Ética da Inteligência Artificial',
    },
    dateISO: '2025-04-01',
    readTime: '11 min',
    tags: ['Inteligência Artificial', 'Ética', 'Impacto Social', 'Cultura Digital', 'Regulamentação'],
    highlight: true,

    frequency: 'REV. ALL • Nº 16 • 2025',
    publicationLocation: 'Lagarto, SE, Brasil',
    issn: '2594-5378',

    authors: ['Felipe Jovino dos Santos'],

    publicationLink: {
      href: 'https://allrevista.com.br/wp-content/uploads/2025/04/Revista-da-Academia-Lagartense-de-Letras-no-16-2025.pdf',
      label: 'Ler na revista (PDF)',
    },

    downloadLink: {
      href: 'https://drive.google.com/file/d/18OWigM6l6Yp3OLtqUIAnOpD_Lx0oNdsT/view?usp=sharing',
      label: 'Baixar PDF',
    },

    content: [
      { type: 'h2', text: 'Resumo' },
      {
        type: 'p',
        text:
          'A inteligência artificial (IA) tem remodelado a sociedade, influenciando cultura, mercado de trabalho e direitos individuais. Este artigo analisa desafios éticos da IA, abordando viés algorítmico, transparência e privacidade. Também discute impactos na criatividade e na curadoria de conteúdo, destacando a necessidade de regulamentação ética e inclusão digital.',
      },

      { type: 'divider' },

      { type: 'h2', text: 'Abstract' },
      {
        type: 'p',
        text:
          "Artificial intelligence (AI) has reshaped society, influencing culture, labor markets, and individual rights. This paper analyzes AI's ethical challenges, addressing issues such as algorithmic bias, transparency, and privacy. It also discusses AI’s impact on creativity and content curation, emphasizing the need for ethical regulation and digital inclusion for responsible technology development.",
      },

      { type: 'divider' },

      { type: 'h2', text: 'Sobre o autor' },
      {
        type: 'quote',
        text:
          'Felipe Jovino é bacharel em Sistemas de Informação pelo Instituto Federal de Sergipe, pesquisador em IA e sistemas embarcados. Atua no LABIC com projetos em aprendizado de máquina e eletrônica, participou da Mostra Nacional de Robótica 2023 e 2024 e publicou estudos sobre acesso à tecnologia. Seu foco é a interseção entre computação e inovação.',
        cite: 'Nota biográfica no artigo',
      },

      { type: 'divider' },

      { type: 'h2', text: 'Introdução' },
      {
        type: 'p',
        text:
          'O texto contextualiza o avanço recente da IA como força transformadora não apenas em processos industriais e comerciais, mas também nas interações sociais, culturais e éticas. A discussão é guiada pela necessidade de compreender implicações éticas do desenvolvimento e da aplicação de IA na sociedade contemporânea.',
      },

      { type: 'divider' },

      { type: 'h2', text: 'Justificativa' },
      {
        type: 'p',
        text:
          'A justificativa enfatiza preocupações com privacidade, autonomia e justiça: algoritmos podem refletir e ampliar estigmas sociais, e a opacidade de certos sistemas dificulta entender decisões automatizadas. O artigo reforça a urgência de transparência, responsabilidade e dados de treinamento mais diversos e representativos.',
      },
      {
        type: 'p',
        text:
          'São citados exemplos recorrentes como vieses em reconhecimento facial e impactos discriminatórios em seleção de candidatos, apontando para a necessidade de sistemas mais equitativos e auditáveis.',
      },

      { type: 'divider' },

      { type: 'h2', text: 'Objetivo do artigo' },
      {
        type: 'p',
        text:
          'Analisar os principais desafios éticos relacionados à IA e discutir impactos em estruturas sociais e culturais. O texto busca mostrar como a IA pode tanto reforçar desigualdades quanto apoiar inclusão e justiça social, e propõe diretrizes e recomendações alinhadas a valores éticos e direitos humanos.',
      },

      { type: 'divider' },

      { type: 'h2', text: 'Metodologia' },
      {
        type: 'p',
        text:
          'Revisão de literatura com artigos acadêmicos, relatórios institucionais e documentos normativos sobre ética em IA, incluindo análise de estudos de caso sobre riscos e oportunidades. Considera frameworks internacionais, com destaque para a Recomendação da UNESCO sobre Ética da IA (2021).',
      },

      { type: 'divider' },

      { type: 'h2', text: 'A ética da IA: conceitos e desafios' },
      {
        type: 'p',
        text:
          'O desenvolvimento aborda viés algorítmico, transparência (explicabilidade das decisões) e responsabilidade por falhas/danos. Também discute dilemas na saúde: proteção de dados sensíveis, confiança em decisões automatizadas e atribuição de culpa em caso de erro.',
      },
      {
        type: 'p',
        text:
          'O texto reconhece divergências filosóficas sobre a possibilidade de “ética própria” em sistemas autônomos, contrapondo a visão de que a ética deve refletir valores humanos à ideia de incorporar princípios éticos às máquinas.',
      },

      { type: 'divider' },

      { type: 'h2', text: 'IA e sociedade: impactos positivos e negativos' },
      {
        type: 'p',
        text:
          'O artigo contrapõe ganhos (ex.: diagnósticos e tratamentos mais precisos) a riscos como automação e substituição de empregos, com potencial aumento de desigualdades. Debate também vigilância, reconhecimento facial e práticas invasivas, reforçando a necessidade de regulamentação e transparência.',
      },

      { type: 'divider' },

      { type: 'h2', text: 'IA e cultura: criatividade ou ameaça?' },
      {
        type: 'p',
        text:
          'Na cultura, a IA é apresentada como ferramenta capaz de gerar arte, música e texto, ao mesmo tempo em que levanta debates sobre originalidade, autoria e risco de homogeneização cultural. O artigo também discute curadoria algorítmica e como ela pode moldar preferências e limitar diversidade cultural.',
      },
      {
        type: 'p',
        text:
          'No campo educacional, a IA aparece como possibilidade de personalização do aprendizado, mas com atenção a privacidade de dados de estudantes e riscos de redução da interação humana no ensino.',
      },

      { type: 'divider' },

      { type: 'h2', text: 'Conclusão' },
      {
        type: 'p',
        text:
          'Conclui pela necessidade de diretrizes e regulações éticas para que o avanço da IA ocorra de forma responsável, minimizando desigualdades e protegendo direitos fundamentais. Defende tecnologias mais transparentes/explicáveis e reforça inclusão digital e alfabetização em IA como passos essenciais.',
      },

      { type: 'divider' },

      { type: 'h2', text: 'Links' },
      {
        type: 'p',
        text:
          'Leitura completa: https://allrevista.com.br/wp-content/uploads/2025/04/Revista-da-Academia-Lagartense-de-Letras-no-16-2025.pdf',
      },
      {
        type: 'p',
        text:
          'Download: https://drive.google.com/file/d/18OWigM6l6Yp3OLtqUIAnOpD_Lx0oNdsT/view?usp=sharing',
      },
    ],
  },

  {
    slug: 'acesso-formacao-ia-baixa-renda-sergipe',
    title:
      'Acesso à formação em Inteligência Artificial para pessoas de baixa renda: um estudo de caso em Sergipe',
    summary:
      'Estudo de caso sobre um programa gratuito de formação em IA em Sergipe, analisando barreiras de acesso (renda, base em tecnologia e inglês), desenho do curso e percepções/resultados coletados com alunos.',
    cover: {
      src: '/articles/covers/capa-artigo-acesso-formacao-ia-sergipe.png',
      alt: 'Capa do artigo: Acesso à formação em IA',
    },
    dateISO: '2023-09-01',
    readTime: '7 min',
    tags: ['Educação', 'Inteligência Artificial', 'Inclusão', 'Sergipe', 'Acesso'],
    highlight: true,

    frequency: 'RSC • v.13 n.3 (2023)',
    publicationLocation: 'Salvador, BA, Brasil',

    doi: '10.36558/rsc.v13i3.8504',
    issn: '2237-2903',

    authors: [
      'Eddie Fernandes de Jesus Menezes',
      'Catuxe Varjão de Santana Oliveira',
      'Felipe Jovino dos Santos',
      'Gabriel do Nascimento Santos Silva',
      'José Matheus Oliveira Cavalcante',
      'Stephanie Kamarry Alves De Sousa',
    ],

    publicationLink: {
      href: 'https://revistas.unifacs.br/index.php/rsc/article/view/8504/5015',
      label: 'Ver na revista (OJS)',
    },
    downloadLink: {
      href: 'https://drive.google.com/file/d/1SkR8AIWqq91TqvhXY6IPl2-xTymlBkmt/view?usp=sharing',
      label: 'Baixar PDF',
    },

    content: [
      { type: 'h2', text: 'Visão geral' },
      {
        type: 'p',
        text:
          'Este artigo discute a acessibilidade à formação em Inteligência Artificial (IA) no Brasil com foco em Sergipe, observando como fatores socioeconômicos e lacunas de base dificultam a entrada de pessoas de baixa renda na área.',
      },
      {
        type: 'p',
        text:
          'A proposta central é analisar um curso gratuito de formação em IA ofertado no estado, descrevendo como o curso foi estruturado e como seus recursos influenciaram os resultados percebidos pelos participantes.',
      },

      { type: 'divider' },

      { type: 'h2', text: 'Objetivo do estudo' },
      {
        type: 'p',
        text:
          'O trabalho apresenta uma análise do acesso à formação em IA a partir de um estudo de caso de um programa gratuito em Sergipe, com objetivo geral de analisar o curso (suas individualidades) e como elas influenciaram os resultados, usando pesquisa com alunos durante e após a formação para traçar perfil e avaliar a eficiência dos recursos adotados.',
      },

      { type: 'divider' },

      { type: 'h2', text: 'Contexto e motivação' },
      {
        type: 'p',
        text:
          'No recorte nacional, o artigo discute barreiras comuns à democratização do ensino de IA (desigualdades sociais/econômicas, limitações de infraestrutura e oferta concentrada em regiões com mais recursos), o que reforça a importância de iniciativas gratuitas e acessíveis.',
      },

      { type: 'divider' },

      { type: 'h2', text: 'Metodologia e implementação do curso' },
      {
        type: 'p',
        text:
          'A metodologia descreve um curso de IA com complemento em Python. Um passo inicial foi legendar conteúdos básicos disponibilizados pela própria Huawei para apoiar a formação introdutória, seguido de edital/seleção de alunos e organização de turma no Google Classroom.',
      },
      {
        type: 'p',
        text:
          'Além do Classroom, foi criado um grupo no WhatsApp para dúvidas com escala de suporte dos bolsistas. O curso ocorreu em encontros semanais (cinco no total), com duas mentorias (professor da semana e bolsistas) e uma avaliação online via Quizizz para certificação; aprovados tiveram oportunidade de prestar certificação da Huawei.',
      },

      { type: 'divider' },

      { type: 'h2', text: 'Resultados e evidências' },
      {
        type: 'p',
        text:
          'Os dados coletados foram sintetizados em gráficos e organizados em um acervo no GitHub do projeto. As análises destacam percepções positivas sobre suporte, preparo da equipe, adequação do ritmo e efetividade das atividades complementares.',
      },
      {
        type: 'image',
        src: '/articles/figures/rsc_figure1_resultados.png',
        alt: 'Gráfico de análise dos resultados (inscritos, capacitados, aprovados, desistências e reprovados) por turma',
        caption: 'Figura 1 — Resultados nas avaliações.',
      },

      { type: 'divider' },

      { type: 'h2', text: 'Discussão e conclusões' },
      {
        type: 'p',
        text:
          'O artigo reforça que democratizar o acesso à IA depende de mais do que disponibilizar conteúdo: envolve suporte contínuo, nivelamento (Python), desenho de curso adequado ao público e cuidado com barreiras linguísticas e regionais.',
      },
      {
        type: 'p',
        text:
          'Também é apontada a necessidade de investigar com mais profundidade causas de evasão em turmas específicas e aprimorar transparência sobre ementa/metodologia, além de explorar expansão para outras regiões e áreas de conhecimento.',
      },

      { type: 'divider' },

      { type: 'h2', text: 'Links' },
      {
        type: 'p',
        text:
          'Revista (OJS): https://revistas.unifacs.br/index.php/rsc/article/view/8504/5015',
      },
      {
        type: 'p',
        text:
          'Download (PDF): https://drive.google.com/file/d/1SkR8AIWqq91TqvhXY6IPl2-xTymlBkmt/view?usp=sharing',
      },
    ],
  },
]
