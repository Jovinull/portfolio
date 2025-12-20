import HeaderBackground from '../navbar/header/HeaderBackground';
import ProfileImage from './ProfileImage';
import Greeting from './Greeting';
import Title from './Title';
import Subtitle from './Subtitle';
import Description from './Description';
import ActionButtons from '@/app/components/buttons/ActionButtons';

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

      <div className="relative z-10 flex flex-col items-center text-center">
        <ProfileImage />
        <Greeting />
        <Title />
        <Subtitle />
        <Description />
        <ActionButtons />
      </div>
    </section>
  );
}
