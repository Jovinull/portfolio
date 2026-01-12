export type ArticleCover = Readonly<{
  src?: string
  alt?: string
}>

export type ArticleBlock =
  | Readonly<{ type: 'h2'; text: string }>
  | Readonly<{ type: 'p'; text: string }>
  | Readonly<{ type: 'quote'; text: string; cite?: string }>
  | Readonly<{ type: 'image'; src: string; alt: string; caption?: string }>
  | Readonly<{ type: 'code'; language?: string; code: string }>
  | Readonly<{ type: 'divider' }>

export type ArticleItem = Readonly<{
  slug: string
  title: string
  summary: string
  dateISO?: string
  readTime?: string
  tags?: readonly string[]
  highlight?: boolean

  /**
   * “Frequência” do artigo no dial da Home (visual/estético)
   * Ex: "98.7 FM", "221 Hz", "CH-07"
   */
  frequency?: string

  cover?: ArticleCover

  /**
   * Conteúdo rico (para a página do artigo).
   * Pode ficar vazio agora — você preenche depois.
   */
  content?: readonly ArticleBlock[]
}>
