'use client';

import { assets } from '@/assets/assets';
import { useThemeStore } from '@/app/store/useThemeStore';
import BaseButton from '@/app/components/buttons/BaseButton';

export default function ShowMoreLink() {
  const { isDark } = useThemeStore();

  return (
    <div className="my-20 flex justify-center">
      <BaseButton
        href="/#work"
        variant="theme"
        icon={isDark ? assets.right_arrow_bold_dark : assets.right_arrow_bold}
        className="px-10 py-3 shadow-md hover:shadow-lg"
      >
        Mostrar Mais
      </BaseButton>
    </div>
  );
}
