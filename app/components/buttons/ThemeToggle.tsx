import { assets } from '@/assets/assets';
import { useThemeStore } from '@/app/store/useThemeStore';
import Image from 'next/image';
import BaseButton from './BaseButton';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useThemeStore();

  return (
    <BaseButton onClick={toggleTheme} isIconOnly variant="ghost">
      <Image src={isDark ? assets.sun_icon : assets.moon_icon} alt="tema" className="h-5 w-5" />
    </BaseButton>
  );
};

export default ThemeToggle;
