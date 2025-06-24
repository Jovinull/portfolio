'use client';

import { assets } from '@/assets/assets';
import { useThemeStore } from '@/app/store/useThemeStore';
import BaseButton from './BaseButton';

const ContactButton = ({ isFullWidth = false }: { isFullWidth?: boolean }) => {
  const { isDark } = useThemeStore();

  return (
    <BaseButton
      href="#contact"
      variant="theme"
      icon={isDark ? assets.arrow_icon_dark : assets.arrow_icon}
      className={isFullWidth ? 'w-full justify-center' : ''}
    >
      Contato
    </BaseButton>
  );
};

export default ContactButton;
