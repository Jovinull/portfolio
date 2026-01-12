export type AwardsMode = 'highlights' | 'all'

export type AwardsModeToggleProps = Readonly<{
  mode: AwardsMode
  onChange: (mode: AwardsMode) => void
  counts?: Readonly<{
    highlights: number
    all: number
  }>
}>

export type AwardsSectionProps = {
  className?: string
}