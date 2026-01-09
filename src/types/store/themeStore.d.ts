export interface ThemeState {
  isDark: boolean;

  /**
   * Inicializa o tema com base em:
   * 1) localStorage('theme') se existir
   * 2) caso contrário, prefers-color-scheme do sistema
   */
  initTheme: () => void;

  toggleTheme: () => void;
  setTheme: (dark: boolean) => void;
}
