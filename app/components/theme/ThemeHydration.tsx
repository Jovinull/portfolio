'use client';

import { useEffect } from 'react';
import { useThemeStore } from '@/app/store/useThemeStore';

export default function ThemeHydration() {
  const initTheme = useThemeStore(s => s.initTheme);

  useEffect(() => {
    initTheme();
  }, [initTheme]);

  return null;
}
