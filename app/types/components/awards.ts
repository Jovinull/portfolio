export type AwardsMode = 'highlights' | 'all'

export type AwardsModeToggleProps = {
  mode: AwardsMode
  onChange: (mode: AwardsMode) => void
  counts?: {
    highlights: number
    all: number
  }
}

export type AwardsSectionProps = {
  className?: string
}