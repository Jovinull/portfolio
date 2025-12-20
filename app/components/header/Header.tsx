import HeaderBackground from '../navbar/header/HeaderBackground'
import HeaderMotion from './HeaderMotion'

export default function Header() {
  return (
    <section
      id="top"
      className="
        bg-theme text-theme relative isolate w-full overflow-hidden
        px-[12%] pt-6
        min-h-[calc(100svh-var(--navbar-height))]
      "
    >
      <HeaderBackground />
      <HeaderMotion />
    </section>
  )
}
