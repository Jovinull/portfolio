'use client';

import { FiMoon, FiSun } from 'react-icons/fi';
import { useThemeStore } from '@/app/store/useThemeStore';
import BaseButton from './BaseButton';

export default function ThemeToggle() {
  const isDark = useThemeStore(s => s.isDark);
  const toggleTheme = useThemeStore(s => s.toggleTheme);

  return (
    <BaseButton
      onClick={toggleTheme}
      isIconOnly
      ariaLabel="Alternar tema"
      variant="ghost"
      startIcon={
        <span
          className={[
            'inline-flex items-center justify-center rounded-full p-2',
            'ring-1 ring-black/15 dark:ring-white/20',
            'transition-all',
            'hover:ring-black/25 dark:hover:ring-white/35',
            'active:scale-95',
          ].join(' ')}
        >
          {isDark ? (
            <FiMoon className="h-5 w-5 text-white" aria-hidden="true" />
          ) : (
            <FiSun className="h-5 w-5 text-black" aria-hidden="true" />
          )}
        </span>
      }
    />
  );
}
