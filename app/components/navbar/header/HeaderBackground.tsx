'use client';

import { assets } from '@/assets/assets';
import { useThemeStore } from '@/app/store/themeStore';
import Image from 'next/image';

const HeaderBackground = () => {
  const { isDark } = useThemeStore();

  if (isDark) return null;

  return (
    <div className="fixed top-0 right-0 -z-10 w-11/12 translate-y-[-80%] scale-150">
      <Image src={assets.header_bg_color} alt="bg" className="w-full" />
    </div>
  );
};

export default HeaderBackground;
