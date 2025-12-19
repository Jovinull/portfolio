'use client';

import Image from 'next/image';
import { assets } from '@/assets/assets';
import BaseButton from './BaseButton';
import type { MenuToggleButtonProps } from '@/app/types/components/menu';

export default function MenuToggleButton({ isOpen, toggleMenu }: MenuToggleButtonProps) {
  const iconNode = isOpen ? (
    <>
      <Image src={assets.close_black} alt="" aria-hidden="true" className="h-5 w-5 dark:hidden" />
      <Image
        src={assets.close_white}
        alt=""
        aria-hidden="true"
        className="hidden h-5 w-5 dark:block"
      />
    </>
  ) : (
    <>
      <Image src={assets.menu_black} alt="" aria-hidden="true" className="h-5 w-5 dark:hidden" />
      <Image
        src={assets.menu_white}
        alt=""
        aria-hidden="true"
        className="hidden h-5 w-5 dark:block"
      />
    </>
  );

  return (
    <BaseButton
      onClick={toggleMenu}
      isIconOnly
      ariaLabel={isOpen ? 'Fechar menu' : 'Abrir menu'}
      variant="ghost"
      className="border-theme bg-theme/70 rounded-md border p-2 shadow-sm backdrop-blur-md hover:scale-105 hover:opacity-80 md:hidden"
      startIcon={iconNode}
    />
  );
}
