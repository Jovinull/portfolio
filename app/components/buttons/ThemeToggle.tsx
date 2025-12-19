'use client';

import Image from 'next/image';
import { assets } from '@/assets/assets';
import { useThemeStore } from '@/app/store/useThemeStore';
import BaseButton from './BaseButton';

export default function ThemeToggle() {
  const toggleTheme = useThemeStore(s => s.toggleTheme);

  return (
    <BaseButton
      onClick={toggleTheme}
      isIconOnly
      ariaLabel="Alternar tema"
      variant="ghost"
      startIcon={
        <>
          <Image src={assets.moon_icon} alt="" aria-hidden="true" className="h-5 w-5 dark:hidden" />
          <Image
            src={assets.sun_icon}
            alt=""
            aria-hidden="true"
            className="hidden h-5 w-5 dark:block"
          />
        </>
      }
    />
  );
}
