import { create } from 'zustand';
import type { ThemeState } from '../types/store/themeStore';

function applyThemeToDom(isDark: boolean) {
  if (typeof document === 'undefined') return;
  document.documentElement.classList.toggle('dark', isDark);
}

function getStoredTheme(): 'dark' | 'light' | null {
  if (typeof window === 'undefined') return null;
  const value = window.localStorage.getItem('theme');
  return value === 'dark' || value === 'light' ? value : null;
}

function getSystemPrefersDark(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia?.('(prefers-color-scheme: dark)')?.matches ?? false;
}

export const useThemeStore = create<ThemeState>(set => ({
  isDark: false,

  initTheme: () => {
    const stored = getStoredTheme();
    const isDark = stored ? stored === 'dark' : getSystemPrefersDark();
    applyThemeToDom(isDark);
    set({ isDark });
  },

  toggleTheme: () => {
    set(state => {
      const isDark = !state.isDark;
      applyThemeToDom(isDark);

      if (typeof window !== 'undefined') {
        window.localStorage.setItem('theme', isDark ? 'dark' : 'light');
      }

      return { isDark };
    });
  },

  setTheme: (dark: boolean) => {
    applyThemeToDom(dark);

    if (typeof window !== 'undefined') {
      window.localStorage.setItem('theme', dark ? 'dark' : 'light');
    }

    set({ isDark: dark });
  },
}));
