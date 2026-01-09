export type AwardsIconKey = 'award' | 'star' | 'cpu' | 'shield' | 'bolt'

export type AwardsCategory =
  | 'award'
  | 'highlight'
  | 'patent'
  | 'publication'
  | 'admission'
  | 'program'
  | 'community'
  | 'work'
  | 'education'
  | 'research'

export type AwardProofLink = {
  href: string
  label?: string
}

export type AwardsHighlightItem = {
  id: string
  title: string
  subtitle?: string
  org?: string
  dateLabel?: string
  year: number
  category: AwardsCategory
  highlight: boolean
  description: string

  /** opcional para ordenar itens dentro do mesmo ano (maior primeiro) */
  sort?: number

  /** opcional: link de comprovação (certificado, ranking, publicação, etc.) */
  proofLink?: AwardProofLink

  /** opcional: ícone coerente com teu padrão da Timeline */
  iconKey?: AwardsIconKey

  /** opcional: chips curtos */
  tags?: ReadonlyArray<string>

  /** opcionais: campos úteis pra UX */
  rank?: string
  score?: string
}