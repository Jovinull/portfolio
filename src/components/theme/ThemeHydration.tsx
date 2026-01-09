'use client';

import { useEffect } from 'react';
import { useThemeStore } from '@/src/store/useThemeStore';

export default function ThemeHydration() {
  const initTheme = useThemeStore(s => s.initTheme);

  useEffect(() => {
    initTheme();
  }, [initTheme]);

  return null;
}
