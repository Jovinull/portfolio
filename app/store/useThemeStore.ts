import { create } from 'zustand';
import { ThemeState } from '@/app/types/store/themeStore';

export const useThemeStore = create<ThemeState>(set => ({
  isDark: false,
  toggleTheme: () => {
    set(state => {
      const isDark = !state.isDark;
      const html = document.documentElement;

      if (isDark) {
        html.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        html.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }

      return { isDark };
    });
  },
  setTheme: dark => {
    const html = document.documentElement;
    if (dark) {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
    set({ isDark: dark });
  },
}));
