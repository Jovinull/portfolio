'use client';

import { assets } from '@/assets/assets';
import { useThemeStore } from '@/app/store/themeStore';
import Image from 'next/image';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useThemeStore();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Alternar tema"
      className="p-2 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-800 transition"
    >
      <Image
        src={isDark ? assets.sun_icon : assets.moon_icon}
        alt="Tema"
        className="w-5 h-5"
      />
    </button>
  );
};

export default ThemeToggle;
