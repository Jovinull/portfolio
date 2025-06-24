import { assets } from '@/assets/assets';
import { useThemeStore } from '@/app/store/themeStore';
import Image from 'next/image';
import BaseButton from './BaseButton';

interface Props {
  isOpen: boolean;
  toggleMenu: () => void;
}

const MenuToggleButton = ({ isOpen, toggleMenu }: Props) => {
  const { isDark } = useThemeStore();

  const icon = isOpen
    ? isDark
      ? assets.close_white
      : assets.close_black
    : isDark
      ? assets.menu_white
      : assets.menu_black;

  return (
    <BaseButton onClick={toggleMenu} isIconOnly variant="ghost" className="md:hidden">
      <Image src={icon} alt="menu" className="h-5 w-5" />
    </BaseButton>
  );
};

export default MenuToggleButton;
