'use client';

import { assets } from '@/assets/assets';
import { useThemeStore } from '@/app/store/useThemeStore';
import Image from 'next/image';
import BaseButton from './BaseButton';

import { MenuToggleButtonProps } from '@/app/types/components/menu';

const MenuToggleButton = ({ isOpen, toggleMenu }: MenuToggleButtonProps) => {
  const { isDark } = useThemeStore();

  const icon = isOpen
    ? isDark
      ? assets.close_white
      : assets.close_black
    : isDark
      ? assets.menu_white
      : assets.menu_black;

  return (
    <BaseButton
      onClick={toggleMenu}
      isIconOnly
      variant="ghost"
      className="border-theme bg-theme/70 rounded-md border p-2 shadow-sm backdrop-blur-md hover:scale-105 hover:opacity-80 md:hidden"
    >
      <Image src={icon} alt="menu" className="h-5 w-5" />
    </BaseButton>
  );
};

export default MenuToggleButton;
