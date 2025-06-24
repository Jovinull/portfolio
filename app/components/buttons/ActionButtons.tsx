'use client';

import { assets } from '@/assets/assets';
import { useThemeStore } from '@/app/store/useThemeStore';
import BaseButton from './BaseButton';

const ActionButtons = () => {
  const { isDark } = useThemeStore();

  return (
    <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row">
      <BaseButton href="#contact" variant="primary" icon={assets.arrow_icon}>
        Fale comigo
      </BaseButton>
      <BaseButton
        href="/vitae.pdf"
        download
        variant="theme"
        icon={isDark ? assets.download_icon_dark : assets.download_icon}
      >
        Meu Currículo
      </BaseButton>
    </div>
  );
};

export default ActionButtons;
