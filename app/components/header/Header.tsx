import ProfileImage from './ProfileImage';
import Greeting from './Greeting';
import Title from './Title';
import Subtitle from './Subtitle';
import Description from './Description';
import ActionButtons from '@/app/components/buttons/ActionButtons';

export default function Header() {
  return (
    <section className="bg-theme text-theme w-full px-[12%] pt-6">
      <div className="flex flex-col items-center text-center">
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
