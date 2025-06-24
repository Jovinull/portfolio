'use client';

import { assets } from '@/assets/assets';
import { useThemeStore } from '@/app/store/themeStore';
import Image from 'next/image';

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
    <button onClick={toggleMenu} className="md:hidden" aria-label="Abrir menu">
      <Image src={icon} alt="menu" className="h-6 w-6" />
    </button>
  );
};

export default MenuToggleButton;
